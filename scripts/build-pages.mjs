import {readFile,writeFile,mkdir} from 'node:fs/promises';
const html=await readFile('dist/index.html','utf8');
const pages={
 'home':'Blower- en vacuümtechniek',
 'producten':'Producten',
 'onderhoud-reparaties/onderhoud-en-reparaties':'Onderhoud & Reparaties',
 'datasheets':'Datasheets',
 'faq':'Veelgestelde vragen',
 'over-ons':'Over DOVAC',
 'contact':'Contact',
 'producten/vacuumpompen':'Vacuümpompen',
 'producten/draaischuifpompen':'Draaischuifpompen',
 'producten/zijkanaalventilatoren':'Zijkanaalventilatoren',
 'producten/turbo-blowers':'Turbo Blowers',
 'producten/luchtmessen':'Luchtmessen',
 'producten/systems':'Systems',
 'producten/spare-parts':'Spare parts',
};
for(const [path,title] of Object.entries(pages)){
 const folder=`dist/nl/${path}`;
 await mkdir(folder,{recursive:true});
 await writeFile(`${folder}/index.html`,html.replace(/<title>.*?<\/title>/,`<title>${title.replaceAll('&','&amp;')} | DOVAC</title>`));
}
await writeFile('dist/404.html',html.replace(/<title>.*?<\/title>/,'<title>Pagina niet gevonden | DOVAC</title>'));
await writeFile('dist/.nojekyll','');
await writeFile('dist/robots.txt','User-agent: *\nDisallow: /\n');
console.log(`Built ${Object.keys(pages).length} directly addressable pages plus root and 404.`);
