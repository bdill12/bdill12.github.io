export const TARGET = 2400;
export function minutes(time) {
  if (!/^\d{2}:\d{2}$/.test(time || '')) return null;
  const [h,m] = time.split(':').map(Number);
  return h < 24 && m < 60 ? h*60+m : null;
}
export function dayResult(day, now = null) {
  const start=minutes(day.in), end=minutes(day.out), lo=minutes(day.lunchOut), li=minutes(day.lunchIn);
  const pto=Number(day.pto || 0)*60;
  let error='';
  if (!Number.isFinite(pto) || pto<0 || pto>1440) error='PTO must be between 0 and 24 hours.';
  if ((lo!==null || li!==null || end!==null) && start===null) error='Enter Clock In first.';
  if (end!==null && start!==null && end<start) error='Clock Out must be after Clock In.';
  if (!day.noLunch) {
    if (lo!==null && start!==null && lo<start) error='Lunch must begin after Clock In.';
    if (li!==null && (lo===null || li<lo)) error='Lunch In must be after Lunch Out.';
    if (end!==null && lo!==null && (li===null || li>end)) error='Complete lunch before Clock Out.';
  }
  let worked=0;
  const finish=end ?? now;
  if (!error && start!==null && finish!==null && finish>=start) {
    const lunch=day.noLunch || lo===null ? 0 : Math.max(0,(li ?? finish)-lo);
    worked=Math.max(0,finish-start-lunch);
  }
  return {worked,pto:Number.isFinite(pto)&&pto>=0&&pto<=1440?pto:0,error,complete:end!==null&&!error};
}
// Return minutes relative to today's midnight. Actual work is already credited;
// only the remaining, unworked minutes pass through the projection window.
export function projectLeave(days, today, now, remaining) {
  const open=450, close=990;
  for (let offset=0; ; offset++) {
    const weekday=(today+offset)%7;
    if (weekday>=5) continue;
    const day=today+offset<5 ? days[today+offset] : null;
    if (day && minutes(day.out)!==null) continue; // Already included in actual totals.
    let cursor=offset===0 ? Math.max(open,now,minutes(day?.in) ?? open) : Math.max(open,minutes(day?.in) ?? open);
    const lo=day && !day.noLunch ? minutes(day.lunchOut) : null;
    const li=day && !day.noLunch ? minutes(day.lunchIn) : null;
    const segments=lo!==null && li!==null ? [[cursor,Math.min(close,lo)],[Math.max(cursor,li),close]] : [[cursor,close]];
    for (const [start,end] of segments) {
      const available=Math.max(0,end-start);
      if (available>0 && remaining<=available) return offset*1440+start+remaining;
      remaining-=available;
    }
  }
}
export function weekResult(days, today, now) {
  const results=days.map((d,i)=>dayResult(d,i===today?now:null));
  const worked=results.reduce((n,r)=>n+r.worked,0), pto=results.reduce((n,r)=>n+r.pto,0);
  const credited=worked+pto;
  let leave=null, message='Clock in today to calculate your leave time.';
  const d=days[today], r=results[today];
  if (results.some(r=>r.error)) message='Correct the highlighted entries to calculate your leave time.';
  else if (credited>=TARGET) message='Weekly target reached';
  else if (!d) message='Enjoy your weekend. Your week is saved.';
  else if (r.complete) message='Today is complete. Clock in on your next workday to calculate leave time.';
  else if (minutes(d.in)!==null) {
    if (!d.noLunch && minutes(d.lunchOut)!==null && minutes(d.lunchIn)===null) message='End lunch to calculate your exact leave time.';
    else {
      leave=projectLeave(days,today,now,TARGET-credited);
      message='Future work is projected Monday–Friday, 7:30 AM–4:30 PM.';
      if (!d.noLunch && !d.lunchOut) message+=' Assumes no lunch yet; updates after lunch.';
      if (Math.floor(leave/1440)+today>=7) message+=' The remaining hours extend beyond this week.';
    }
  }
  return {results,worked,pto,credited,remaining:Math.max(0,TARGET-credited),over:Math.max(0,credited-TARGET),leave,message};
}
export function duration(n) { n=Math.round(n); return `${Math.floor(n/60)}h ${String(n%60).padStart(2,'0')}m`; }
