import {test,expect} from '@playwright/test';
for(const width of [320,360,390,768]){
 test('long product names fit at '+width+'px',async({page})=>{
  await page.setViewportSize({width,height:900});
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const slug of ['draaischuifpompen','zijkanaalventilatoren']){
   await page.goto('./nl/producten/'+slug+'/');
   await expect(page.getByRole('heading',{level:1})).toBeVisible();
   const offenders=await page.evaluate(()=>[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left < -1)}).map(e=>e.tagName+'.'+e.className));
   expect(offenders).toEqual([]);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
 });
}
