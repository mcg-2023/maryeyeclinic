const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
function el(){return {dataset:{},attributes:{},events:{},addEventListener(k,fn){this.events[k]=fn;},setAttribute(k,v){this.attributes[k]=v;},focus(){this.focused=true;}};}
const items=[...html.matchAll(/<button[^>]+data-care-service="\d+"[^>]*>/g)].map(m=>{const item=el();for(const d of m[0].matchAll(/data-([a-z]+)="([^"]*)"/g))item.dataset[d[1]]=d[2];return item;});
assert.equal(items.length,8);
const comparison=el();comparison.classList={toggle(){}};
const selectors={'.care-comparison':comparison};
for(const key of ['#care-view-caption','.care-view-count','.care-scene','.care-scene-soft img','[data-care-before]','.care-drag-help','.care-simulation-note','.care-active-copy','.care-active-link'])selectors[key]=el();
const section={dataset:{},querySelectorAll(){return items;},querySelector(key){assert(selectors[key],key);return selectors[key];}};
vm.runInNewContext(fs.readFileSync('dist/care-section.js','utf8'),{document:{hidden:false,querySelector(){return section;},addEventListener(){}}});
for(let i=0;i<8;i++){
 items[i].events.click();assert.equal(items.filter(x=>x.attributes['aria-pressed']==='true').length,1);assert.equal(selectors['#care-view-caption'].textContent,items[i].dataset.title);assert.equal(selectors['.care-active-link'].href,items[i].dataset.route);assert(fs.existsSync('dist/'+selectors['.care-scene'].src));assert.equal(selectors['.care-simulation-note'].hidden,i>=4);
}
items[1].events.click();assert.equal(comparison.dataset.mode,'presbyopia');
items[1].events.keydown({key:'End',preventDefault(){}});assert.equal(items[7].focused,true);assert.equal(comparison.dataset.mode,'photo');
items[7].events.keydown({key:'ArrowRight',preventDefault(){}});assert.equal(items[0].focused,true);assert.equal(comparison.dataset.mode,'vision');
assert(!html.includes('class="care-range"'));assert(!html.includes('class="care-drag-help"'));
assert(html.indexOf('class="care-view"')<html.indexOf('class="care-services"'));
console.log('8 categories, comparison/photo modes, media, removed drag controls and keyboard checks passed.');
