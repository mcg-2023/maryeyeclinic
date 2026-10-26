const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
function el(){return {dataset:{},attributes:{},events:{},addEventListener(k,fn){this.events[k]=fn;},setAttribute(k,v){this.attributes[k]=v;},focus(){this.focused=true;}};}
const items=[...html.matchAll(/<button[^>]+data-care-service="\d+"[^>]*>/g)].map(m=>{const item=el();for(const d of m[0].matchAll(/data-([a-z]+)="([^"]*)"/g))item.dataset[d[1]]=d[2];return item;});
assert.equal(items.length,8);
const range=el();range.value='50';const properties={},comparison=el();comparison.style={setProperty(k,v){properties[k]=v;}};
const selectors={'.care-comparison':comparison,'.care-range':range};
for(const key of ['#care-view-caption','.care-view-count','.care-scene','.care-scene-soft img','[data-care-before]','.care-drag-help','.care-simulation-note','.care-active-copy','.care-active-link'])selectors[key]=el();
const section={dataset:{},querySelectorAll(){return items;},querySelector(key){assert(selectors[key],key);return selectors[key];}};
vm.runInNewContext(fs.readFileSync('dist/care-section.js','utf8'),{document:{querySelector(){return section;}}});
for(let i=0;i<8;i++){
 items[i].events.click();assert.equal(items.filter(x=>x.attributes['aria-pressed']==='true').length,1);assert.equal(selectors['#care-view-caption'].textContent,items[i].dataset.title);assert.equal(selectors['.care-active-link'].href,items[i].dataset.route);assert(fs.existsSync('dist/'+selectors['.care-scene'].src));assert.equal(range.hidden,i>=4);assert.equal(range.disabled,i>=4);assert.equal(selectors['.care-drag-help'].hidden,i>=4);
}
items[1].events.click();assert.equal(comparison.dataset.mode,'presbyopia');assert.equal(range.hidden,false);
range.value='0';range.events.input();assert.equal(properties['--split'],'0%');range.value='100';range.events.input();assert.equal(properties['--split'],'100%');
items[1].events.keydown({key:'End',preventDefault(){}});assert.equal(items[7].focused,true);assert.equal(range.disabled,true);
items[7].events.keydown({key:'ArrowRight',preventDefault(){}});assert.equal(items[0].focused,true);assert.equal(range.value,'50');assert.equal(range.disabled,false);
assert(html.indexOf('class="care-view"')<html.indexOf('class="care-services"'));
console.log('8 categories, 4 comparison/photo modes, media, destinations, range endpoints and keyboard checks passed.');
