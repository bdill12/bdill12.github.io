import {weekResult,duration} from './calculations.js';
const names=['Monday','Tuesday','Wednesday','Thursday','Friday'];
const blank=()=>names.map(()=>({in:'',lunchOut:'',lunchIn:'',out:'',pto:'',noLunch:false}));
function monday(date) { const d=new Date(date); d.setDate(d.getDate()-((d.getDay()+6)%7)); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
let key='',days=blank(), storageOK=true;
const $=id=>document.getElementById(id);
function load(date) {
 key=`clockin:v1:${monday(date)}`; days=blank();
 try {const parsed=JSON.parse(localStorage.getItem(key)); if(Array.isArray(parsed)&&parsed.length===5) days=parsed.map(d=>({in:typeof d.in==='string'?d.in:'',lunchOut:typeof d.lunchOut==='string'?d.lunchOut:'',lunchIn:typeof d.lunchIn==='string'?d.lunchIn:'',out:typeof d.out==='string'?d.out:'',pto:typeof d.pto==='string'||typeof d.pto==='number'?d.pto:'',noLunch:d.noLunch===true}));} catch {storageOK=false;}
 drawDays();
}
function save() {try {localStorage.setItem(key,JSON.stringify(days)); storageOK=true;}catch {storageOK=false;} update();}
function drawDays() {
 $('days').innerHTML=names.map((name,i)=>`<article class="day" id="day${i}"><div class="day-heading"><h3>${name} <span class="today-tag" id="tag${i}"></span></h3><span id="total${i}" class="day-total"></span></div><div class="fields">${[['in','Clock In'],['lunchOut','Lunch Out'],['lunchIn','Lunch In'],['out','Clock Out']].map(([field,label])=>`<label>${label}<input type="time" data-day="${i}" data-field="${field}" aria-label="${name} ${label}"></label>`).join('')}<label>PTO hours<input type="number" min="0" max="24" step="0.25" inputmode="decimal" data-day="${i}" data-field="pto" placeholder="0" aria-label="${name} PTO hours"></label></div><div class="day-bottom"><label class="check"><input type="checkbox" data-day="${i}" data-field="noLunch"> No lunch today</label><span class="error" id="error${i}" role="status"></span></div></article>`).join('');
 $('days').querySelectorAll('input').forEach(input=>{const {day,field}=input.dataset;if(field==='noLunch')input.checked=days[day][field];else input.value=days[day][field];input.addEventListener('input',()=>{days[day][field]=field==='noLunch'?input.checked:input.value;save();});});
}
function update() {
 const date=new Date(); if(key!==`clockin:v1:${monday(date)}`)load(date);
 const today=(date.getDay()+6)%7; const now=date.getHours()*60+date.getMinutes(); const w=weekResult(days,today,now);
 $('notice').textContent=storageOK?'':'Browser storage is unavailable. Keep this page open; punches may not survive a refresh.';
 const m=new Date(date);m.setDate(m.getDate()-today);const f=new Date(m);f.setDate(f.getDate()+4);
 $('weekLabel').textContent=`${m.toLocaleDateString(undefined,{month:'short',day:'numeric'})} – ${f.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})} · Your 40-hour week`;
 $('todayLabel').textContent=date.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'});
 let leave='—'; if(w.credited>=2400)leave='Goal reached ✓';else if(w.leave!==null){const t=new Date(date);t.setDate(t.getDate()+Math.floor(w.leave/1440));t.setHours(0,w.leave%1440,0,0);leave=t.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});if(w.leave>=1440)leave+=` · ${t.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}`;}
 $('leave').textContent=leave; $('leaveNote').textContent=w.message; $('workedToday').textContent=duration(w.results[today]?.worked||0);
 for(const field of ['worked','pto','credited'])$(field).textContent=duration(w[field]);
 $('remainingLabel').textContent=w.over?'Over 40 hours':'To 40 hours';$('remaining').textContent=duration(w.over||w.remaining);$('progress').style.width=`${Math.min(100,w.credited/2400*100)}%`;
 days.forEach((d,i)=>{ $(`day${i}`).classList.toggle('current',i===today);$(`tag${i}`).textContent=i===today?'TODAY':'';$(`total${i}`).textContent=duration(w.results[i].worked)+(w.results[i].pto?` + ${duration(w.results[i].pto)} PTO`:'');$(`error${i}`).textContent=w.results[i].error;for(const field of ['lunchOut','lunchIn'])$(`day${i}`).querySelector(`[data-field="${field}"]`).disabled=d.noLunch; });
 const d=days[today]; const next=d?(d.out?null:!d.in?'in':d.noLunch?(!d.out?'out':null):!d.lunchOut?'lunchOut':!d.lunchIn?'lunchIn':!d.out?'out':null):null;
 $('punch').textContent=next?({in:'Clock In',lunchOut:'Start Lunch',lunchIn:'End Lunch',out:'Clock Out'}[next]+' ↗'):d?'Workday complete ✓':'Weekend · Rest up';$('punch').disabled=!next||Boolean(w.results[today]?.error);
 $('punch').onclick=()=>{const current=new Date();if(monday(current)!==monday(date)||current.getDay()!==date.getDay()){update();return;}days[today][next]=`${String(current.getHours()).padStart(2,'0')}:${String(current.getMinutes()).padStart(2,'0')}`;drawDays();save();};
}
$('clear').onclick=()=>$('clearDialog').showModal();$('cancelClear').onclick=()=>$('clearDialog').close();$('confirmClear').onclick=()=>{days=blank();drawDays();save();$('clearDialog').close();};
load(new Date());update();setInterval(update,15000);document.addEventListener('visibilitychange',update);
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
