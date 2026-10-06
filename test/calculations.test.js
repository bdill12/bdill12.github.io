import {test} from 'node:test';
import assert from 'node:assert/strict';
import {dayResult,weekResult,minutes} from '../calculations.js';
const day=(x={})=>({in:'',out:'',lunchOut:'',lunchIn:'',pto:0,noLunch:false,...x});
const full=()=>day({in:'09:00',out:'17:00',noLunch:true});
test('subtract lunch',()=>assert.equal(dayResult(day({in:'08:00',out:'17:00',lunchOut:'12:00',lunchIn:'13:00'})).worked,480));
test('no lunch ignores old lunch punches',()=>assert.equal(dayResult({...full(),lunchOut:'12:00',lunchIn:'13:00'}).worked,480));
test('PTO counts separately toward weekly credit',()=>{const r=weekResult([full(),day({pto:8}),day(),day(),day()],2,600);assert.equal(r.worked,480);assert.equal(r.pto,480);assert.equal(r.credited,960);});
test('final day leave time with lunch',()=>{const r=weekResult([full(),full(),full(),full(),day({in:'08:00',lunchOut:'12:00',lunchIn:'12:30'})],4,780);assert.equal(r.leave,990);});
test('PTO advances leave time',()=>{const r=weekResult([full(),full(),full(),day({pto:8}),day({in:'08:00',noLunch:true})],4,600);assert.equal(r.leave,960);});
test('exactly 40',()=>{const r=weekResult(Array.from({length:5},full),4,1020);assert.equal(r.credited,2400);assert.equal(r.remaining,0);assert.equal(r.over,0);assert.equal(r.leave,null);});
test('overtime',()=>{const ds=Array.from({length:5},full);ds[4].out='18:30';assert.equal(weekResult(ds,4,1110).over,90);});
test('ongoing lunch pauses worked time and exact estimate',()=>{const r=weekResult([day({in:'08:00',lunchOut:'12:00'}),day(),day(),day(),day()],0,780);assert.equal(r.worked,240);assert.equal(r.leave,null);});
test('invalid order and partial lunch are errors',()=>{assert.ok(dayResult(day({in:'09:00',out:'08:00'})).error);assert.ok(dayResult(day({in:'08:00',out:'17:00',lunchOut:'12:00'})).error);});
test('weekend has no current punches',()=>assert.equal(weekResult(Array.from({length:5},day),6,600).leave,null));
test('invalid PTO and invalid times',()=>{assert.ok(dayResult(day({pto:-1})).error);assert.equal(minutes('25:00'),null);});
test('actual early start counts the extra ten minutes',()=>{
  assert.equal(dayResult(day({in:'07:20',noLunch:true}),450).worked,10);
  assert.equal(dayResult(day({in:'07:20',out:'16:30',noLunch:true})).worked,550);
});
test('actual late clock-out counts through 4:45 with lunch deducted',()=>{
  const d=day({in:'07:20',out:'16:45',lunchOut:'12:00',lunchIn:'12:30'});
  assert.equal(dayResult(d).worked,535);
  assert.equal(weekResult([d,day(),day(),day(),day()],0,990).worked,535);
});
test('4:45 projection carries fifteen minutes into next workday',()=>{
  const ds=[day({in:'07:30',out:'16:45',noLunch:true,pto:21.333333333333332}),day({in:'07:20',noLunch:true}),day(),day(),day()];
  const r=weekResult(ds,1,450);
  assert.equal(r.results[1].worked,10);
  assert.equal(r.leave,1440+465);
  ds[1].out='16:45';
  const actual=weekResult(ds,1,1005);
  assert.equal(actual.credited,2400);
  assert.equal(actual.leave,null);
});
test('projection never starts before 7:30 even with early clock-in',()=>{
  const r=weekResult([day({in:'07:00',pto:20,noLunch:true}),day({pto:19}),day(),day(),day()],0,440);
  assert.equal(r.worked,20);
  assert.equal(r.leave,490);
});
test('elapsed late work remains actual, but future work waits until tomorrow',()=>{
  const r=weekResult([day({in:'07:30',pto:20,noLunch:true}),day({pto:10}),day(),day(),day()],0,1005);
  assert.equal(r.worked,555);
  assert.equal(r.leave,1440+495);
});
test('Friday projection skips weekend',()=>{
  const ds=[day({pto:20}),day({pto:10}),day(),day(),day({in:'07:30',noLunch:true})];
  const r=weekResult(ds,4,990);
  assert.equal(r.leave,3*1440+510);
  assert.match(r.message,/beyond this week/);
});
test('projection can reach target exactly at 4:30',()=>{
  const r=weekResult([day({in:'07:30',pto:20,noLunch:true}),day({pto:11}),day(),day(),day()],0,450);
  assert.equal(r.leave,990);
});
