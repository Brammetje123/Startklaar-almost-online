// Zelfstandige tijdelijke site; hetzelfde bouwcommando als de volledige website.
import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const output=join(root,'dist');
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
for (const file of ['index.html','404.html','style.css','_headers','robots.txt','assets']) {
  await cp(join(root,file),join(output,file),{recursive:true});
}
console.log('De tijdelijke Startklaar-pagina staat klaar in dist.');
