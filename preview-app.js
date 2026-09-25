const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<span aria-hidden="true">↗</span>';
const link = (page,label,cls='text-link') => `<a class="${cls}" href="#/${page}">${label}${arrow}</a>`;
const icon = (type='fan') => `<svg viewBox="0 0 100 100" width="76" height="76" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="8"/><path d="M50 10C78 24 80 44 58 47M90 50C76 78 56 80 53 58M50 90C22 76 20 56 42 53M10 50C24 22 44 20 47 42"/></svg>`;
const picture=(name,cls='')=>`<img class="${cls}" src="${DATA.images[name]}" alt="Conceptvisual voor DOVAC; originele bedrijfsfotografie nog toevoegen" width="1100" height="800">`;
const reveal=html=>`<div class="reveal">${html}</div>`;
const title=(label,heading,description='')=>`<header class="page-title wrap">${reveal(`<p class="eyebrow">${label}</p><h1 tabindex="-1">${heading}</h1>${description?`<p class="lead">${description}</p>`:''}`)}</header>`;
const band=()=>`<section class="contact-band wrap">${reveal(`<p>Een technische vraag verdient een helder antwoord.</p><h2>Waar kunnen we<br>u mee helpen?</h2>${link('contact','Bespreek uw vraag','button')}`)}<a class="big-phone" href="tel:+31252423363"><span>0252 42 33 63<small>Direct contact met DOVAC</small></span>${arrow}</a></section>`;
const productCard=p=>`<article class="product-card"><a href="#/producten/${p.slug}"><div class="product-visual">${icon(p.icon)}<span>${esc(p.group)}</span></div><div class="product-card-copy"><h2>${esc(p.name)}</h2><p>${esc(p.description)}</p><span class="product-arrow">${arrow}</span></div></a></article>`;
let theme='light';try{theme=localStorage.getItem('dovac-theme')||'light'}catch{}
if(theme==='system')theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
function applyTheme(){document.documentElement.dataset.theme=theme;$('#theme-toggle').setAttribute('aria-label',theme==='dark'?'Licht thema':'Donker thema');$('#theme-toggle').textContent=theme==='dark'?'☀':'◐';}
applyTheme();
if($('#theme-toggle'))$('#theme-toggle').onclick=()=>{theme=theme==='dark'?'light':'dark';applyTheme();try{localStorage.setItem('dovac-theme',theme)}catch{}};
function closeMenu(){ $('#navigation').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label','Menu openen');$('#menu-toggle').textContent='☰';}
if($('#menu-toggle'))$('#menu-toggle').onclick=()=>{const open=$('#navigation').classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#menu-toggle').setAttribute('aria-label',open?'Menu sluiten':'Menu openen');$('#menu-toggle').textContent=open?'×':'☰';};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#navigation').classList.contains('open')){closeMenu();$('#menu-toggle').focus();}});
function home(){return `<section class="hero wrap"><div class="hero-copy"><p class="eyebrow"><span class="mini-line"></span>Blower- en vacuümtechniek</p><h1 tabindex="-1"><span class="line-mask"><span>Techniek die </span></span><span class="line-mask accent"><span>blijft draaien.</span></span></h1>${reveal(`<p class="hero-description">Van de juiste vacuümpomp tot vakkundig onderhoud. DOVAC houdt uw proces in beweging.</p><div class="hero-buttons">${link('producten','Ontdek producten','button')}${link('onderhoud-reparaties/onderhoud-en-reparaties','Onderhoud & reparaties')}</div>`)}</div><div class="hero-visual reveal"><div class="image-frame">${picture('maintenance')}<div class="image-corner" aria-hidden="true">↓</div></div><div class="photo-caption"><span>Precisie in elk onderdeel.</span><span>Technisch ontwerpconcept</span></div></div></section><section class="proof-strip"><div class="wrap"><div><strong>Technisch advies</strong><span>Afgestemd op uw proces</span></div><div><strong>Zevenhuizen</strong><span>Korte lijnen. Direct contact.</span></div><div><strong>Van advies tot revisie</strong><span>Techniek en service samen</span></div>${link('over-ons','Maak kennis met DOVAC')}</div></section><section class="section wrap">${reveal('<h2>De juiste techniek.<br><span class="muted">Voor uw toepassing.</span></h2><p class="section-intro">Vacuüm creëren, lucht verplaatsen of gericht drogen. Begin bij wat uw proces nodig heeft.</p>')}<div class="solutions-grid"><article class="solution vacuum reveal"><div class="solution-icon">${icon()}</div><span class="category-label">Vacuümtechniek</span><h3>Meer grip.<br>Met minder druk.</h3><p>Vacuümpompen en draaischuifpompen, afgestemd op uw proces.</p><a class="round-link" href="#/producten/vacuumpompen" aria-label="Bekijk vacuümpompen">${arrow}</a></article><article class="solution blower reveal"><div class="solution-icon">${icon()}</div><span class="category-label">Blowertechniek</span><h3>Lucht die<br>werk verzet.</h3><p>Zijkanaalventilatoren, turbo blowers en luchtmessen.</p><a class="round-link" href="#/producten/zijkanaalventilatoren" aria-label="Bekijk zijkanaalventilatoren">${arrow}</a></article></div><div class="section-bottom"><span>Ook voor complete systemen en spare parts.</span>${link('producten','Alle productgroepen')}</div></section><section class="service-section"><div class="wrap service-grid"><div class="service-image reveal">${picture('workshop')}</div><div class="service-copy reveal"><p class="eyebrow">Onderhoud & reparaties</p><h2>Stilstand?<br>Daar werken<br>we niet aan mee.</h2><p>Voorkom problemen met tijdig onderhoud. En gaat er toch iets mis? Dan helpen we u weer op weg.</p><div class="service-points"><div>✓ Onderhoud, reparatie en revisie</div><div>✓ Technische aandacht voor uw installatie</div><div>✓ Advies over onderdelen en pompselectie</div></div>${link('onderhoud-reparaties/onderhoud-en-reparaties','Ontdek onze service','button')}</div></div></section><section class="about-section wrap">${reveal(`<h2>Technische kennis.<br>Persoonlijk betrokken.</h2><p class="section-intro">Achter iedere pomp staat een team dat meedenkt. Vanuit Zevenhuizen helpen we u van eerste vraag tot werkende oplossing.</p>${link('over-ons','Meer over DOVAC')}`)}</section>${band()}`;}
function rangeGroups(){return DATA.range;}
function rangeCard(c){return '<article class="range-card reveal"><a href="'+c.u+'" target="_blank" rel="noreferrer"><h3>'+esc(c.n)+'</h3><p>'+esc(c.d)+'</p><span class="range-more">Bekijk bij DOVAC '+arrow+'</span></a>'+(c.items&&c.items.length?'<ul class="range-items">'+c.items.map(function(i){return '<li>'+esc(i)+'</li>';}).join('')+'</ul>':'')+'</article>';}
function rangeSection(g){return '<section class="range-group" id="'+g.s+'"><div class="range-head"><h2>'+esc(g.g)+'</h2><a class="text-link" href="'+g.url+'" target="_blank" rel="noreferrer">Alles bij DOVAC '+arrow+'</a></div><div class="range-grid">'+g.c.map(rangeCard).join('')+'</div></section>';}
function products(){return title('Assortiment','Alles voor vacuüm en lucht.','Het volledige DOVAC-assortiment: vacuumpompen, draaischuifpompen, zijkanaalventilatoren, turbo blowers, luchtmessen, systemen en spare parts. Elk onderdeel verwijst naar de actuele productinformatie bij DOVAC.')
+'<section class="wrap product-section"><div class="sheet-tools"><div class="filters" aria-label="Filter op hoofdcategorie">'
+DATA.range.map(function(g,i){return '<button data-range="'+g.s+'" aria-pressed="'+String(false)+'">'+esc(g.g)+'</button>';}).join('')+'<button data-range="alles" aria-pressed="true">Alles</button></div>',
+'<label class="product-search"><span class="sr-only">Zoek in het assortiment</span><input id="range-search" type="search" placeholder="Zoek een product of type"></label></div>',
+'<p id="range-count" class="result-count" role="status"></p><div id="range-list"></div></section>'
+band();}
function sheetRow(item){return '<article class="sheet-row"><div><h3>'+esc(item.name)+'</h3><span class="sheet-meta">'+esc(item.type)+' \u00b7 op aanvraag bij DOVAC</span></div><div class="sheet-actions"><a class="primary" href="'+item.url+'" target="_blank" rel="noreferrer">Aanvragen bij DOVAC '+arrow+'</a><a href="'+item.mail+'">E-mailconcept</a></div></article>';}
function sheets(){
 return title("Datasheets","Documentatie op aanvraag.","DOVAC levert datasheets en reserveonderdelenlijsten op aanvraag. Kies een categorie of een specifiek document en zet uw aanvraag direct klaar.")
 +'<section class="wrap product-section"><div class="sheet-tools"><div class="filters" aria-label="Filter op categorie">'+"<button data-sheet=\"alles\" aria-pressed=\"true\">Alles</button><button data-sheet=\"vloeistofring\" aria-pressed=\"false\">Vloeistofring</button><button data-sheet=\"klauwen\" aria-pressed=\"false\">Klauwen</button><button data-sheet=\"categorie\" aria-pressed=\"false\">Overige categorieen</button>"+'</div><label class="product-search"><span class="sr-only">Zoek een document</span><input id="sheet-search" type="search" placeholder="Zoek een document"></label></div>'
 +'<p id="sheet-count" class="result-count" role="status"></p><div id="sheet-list" class="sheet-list"></div></section>'
 +'<section class="wrap request-box"><h2>Zo werkt het bij DOVAC.</h2><p>De documenten staan niet als losse download op de website. U vraagt ze aan bij DOVAC en ontvangt de datasheet of onderdelenlijst rechtstreeks. Vermeld merk, type en toepassing, dan kan DOVAC het juiste document selecteren.</p><div class="sheet-actions"><a class="primary" href="tel:+31252423363">Bel 0252 42 33 63 '+arrow+'</a><a href="'+DATA.doc.categories[0].url+'">Alle categorieen bij DOVAC</a></div></section>'
 +band();
}
function faq(){return title('Veelgestelde vragen','Een vraag? Hier begint het antwoord.','Van pompselectie tot onderhoud. De belangrijkste antwoorden bij elkaar, zonder ingewikkeld verhaal.')+`<section class="wrap faq-section"><div class="faq-intro"><h2>Liever even<br>overleggen?</h2><p>Elke toepassing is anders. We denken graag mee over uw situatie.</p><a class="text-link" href="tel:+31252423363">0252 42 33 63 ${arrow}</a></div><div class="faq-list">${DATA.faqs.map(([q,a])=>`<details><summary>${esc(q)}<span aria-hidden="true">+</span></summary><p>${esc(a)}</p></details>`).join('')}</div></section>`+band();}
function about(){return title('Over DOVAC','Techniek is ons vak. Meedenken onze natuur.','Een team met kennis van techniek en aandacht voor uw proces.')+`<section class="wrap company-story"><div class="company-photo reveal">${picture('building')}</div><div class="company-copy reveal"><h2>Korte lijnen.<br>Diepgaande kennis.</h2><p>Vanuit Zevenhuizen leveren we vacuümpompen, blowers, systemen en onderdelen. Met technisch advies en aandacht voor uw toepassing.</p><p>Niet de grootste willen zijn, maar de beste oplossing vinden voor uw vraag. Dat begint met goed luisteren.</p>${link('contact','Bespreek uw vraag')}</div></section><section class="wrap team-statement reveal">${icon()}<h2>Niet alleen een pomp leveren.<br><span class="muted">De juiste oplossing vinden.</span></h2><p>Van selectie en levering tot onderhoud en onderdelen: de technische vraag achter uw proces staat centraal.</p></section>`+band();}
function contact(subject=''){return title('Contact','Vertel ons wat u nodig heeft.','Een nieuwe toepassing, een technische vraag of een pomp die aandacht nodig heeft. We denken met u mee.')+`<section class="wrap contact-layout"><div class="contact-information"><a href="tel:+31252423363"><span><small>Bel ons</small><strong>0252 42 33 63</strong></span>${arrow}</a><a href="mailto:info@dovac.nl"><span><small>Stuur een e-mail</small><strong>info@dovac.nl</strong></span>${arrow}</a><div><span><small>Bezoek op afspraak</small><address>Koning Willem-Alexanderlaan 195<br>2761 HK Zevenhuizen</address></span></div>${picture('building')}</div><div class="contact-form-panel"><h2>Begin het gesprek.</h2><p>Vul uw vraag in. We zetten alles klaar als e-mailconcept, zodat u het zelf kunt controleren en versturen.</p><form id="contact-form"><div class="form-grid"><label class="form-field">Naam<input name="name" autocomplete="name" required maxlength="100"></label><label class="form-field">Bedrijfsnaam<input name="company" autocomplete="organization" maxlength="120"></label><label class="form-field full">E-mailadres<input type="email" name="email" autocomplete="email" required maxlength="254"></label><label class="form-field full">Onderwerp<input name="subject" value="${esc(subject.slice(0,120))}" maxlength="120"></label><label class="form-field full">Uw vraag<textarea name="message" required maxlength="1800" rows="5" placeholder="Vertel over uw toepassing, merk of type..."></textarea></label></div><p class="form-note">Uw invoer blijft in deze browser totdat u zelf een e-mail verstuurt. Dit formulier verstuurt of bewaart geen aanvragen op een server.</p><button type="submit" class="button">Maak e-mailconcept ${arrow}</button><p id="form-error" class="form-error" role="alert"></p></form><section id="draft" class="draft-panel" aria-label="E-mailconcept" hidden><h3 tabindex="-1">Uw e-mailconcept staat klaar.</h3><p>Er is nog niets verzonden. Controleer het bericht en verstuur het vanuit uw e-mailprogramma.</p><pre id="draft-text"></pre><a id="draft-link" class="button">Open e-mailprogramma ${arrow}</a><p>Geen e-mailprogramma ingesteld? Kopieer de tekst en mail deze naar info@dovac.nl.</p></section></div></section>`;}
document.addEventListener('click',function(e){
 const t=e.target.closest('button,a');
 if(!t)return;
 if(t.id==='theme-toggle'){theme=theme==='dark'?'light':'dark';applyTheme();try{localStorage.setItem('dovac-theme',theme)}catch{}return;}
 if(t.id==='menu-toggle'){const nav=document.getElementById('navigation');const open=nav.classList.toggle('open');document.getElementById('menu-toggle').setAttribute('aria-expanded',String(open));document.getElementById('menu-toggle').setAttribute('aria-label',open?'Menu sluiten':'Menu openen');document.getElementById('menu-toggle').textContent=open?'\u00d7':'\u2630';return;}
 const group=t.getAttribute&&t.getAttribute('data-range');
 if(group){document.querySelectorAll('[data-range]').forEach(function(x){x.setAttribute('aria-pressed',String(x===t))});if(typeof window.drawRangeNow==='function')window.drawRangeNow();return;}
 const sheet=t.getAttribute&&t.getAttribute('data-sheet');
 if(sheet){document.querySelectorAll('[data-sheet]').forEach(function(x){x.setAttribute('aria-pressed',String(x===t))});if(typeof window.drawSheetsNow==='function')window.drawSheetsNow();return;}
 if(t.tagName==='A'){const href=t.getAttribute('href')||'';if(href.charAt(0)==='#'){e.preventDefault();const go=href.slice(1);if(location.hash===go){if(typeof window.render==='function')window.render();}else{location.hash=go;}return;}}
});
document.addEventListener('input',function(e){
 if(!e.target)return;
 if(e.target.id==='range-search'&&typeof window.drawRangeNow==='function')window.drawRangeNow();
 if(e.target.id==='sheet-search'&&typeof window.drawSheetsNow==='function')window.drawSheetsNow();
});
document.addEventListener('keydown',function(e){
 if(e.key!=='Escape')return;
 const nav=document.getElementById('navigation');
 if(nav&&nav.classList.contains('open')){nav.classList.remove('open');const m=document.getElementById('menu-toggle');if(m){m.setAttribute('aria-expanded','false');m.setAttribute('aria-label','Menu openen');m.textContent='\u2630';m.focus();}}
});
let observer;
let initial=true;
function render(){
try{
 const raw=location.hash.slice(2)||'home';const [page,query='']=raw.split('?');const p=DATA.products.find(p=>page==='producten/'+p.slug);
 const known=['home','producten','onderhoud-reparaties/onderhoud-en-reparaties','datasheets','faq','over-ons','contact'].includes(page)||p;
 $('#main').innerHTML=p?details(p):page==='home'?home():page==='producten'?products():page==='onderhoud-reparaties/onderhoud-en-reparaties'?service():page==='datasheets'?sheets():page==='faq'?faq():page==='over-ons'?about():page==='contact'?contact(new URLSearchParams(query).get('onderwerp')||''):title('Pagina niet gevonden','Hier loopt de route even dood.')+`<div class="wrap empty-page">${link('home','Terug naar home','button')}</div>`;
 document.title=($('#main h1')?.textContent||'DOVAC')+' | DOVAC';
 document.querySelectorAll('#navigation a').forEach(a=>{a.removeAttribute('aria-current');if(a.hash==='#/'+page||(page.startsWith('producten/')&&a.hash==='#/producten'))a.setAttribute('aria-current','page');});
 closeMenu();
 window.drawRangeNow=drawRangeNow;window.drawSheetsNow=drawSheetsNow;
 window.render=render;window.pageHome=home;window.pageProducts=products;window.pageService=service;window.pageSheets=sheets;window.pageFaq=faq;window.pageAbout=about;window.pageContact=contact;window.pageDetails=details;
 if(page==='producten'){
  let group='alles';
  function drawRangeNow(){
   const q=($('#range-search')?.value||'').trim().toLocaleLowerCase('nl');
   let shown=0,html='';
   for(const g of rangeGroups()){
    if(group!=='alles'&&g.s!==group)continue;
    const cats=g.c.filter(function(c){return (c.n+' '+c.d+' '+(c.items||[]).join(' ')).toLocaleLowerCase('nl').includes(q);});
    if(!cats.length)continue;
    shown+=cats.length;
    html+='<section class="range-group" id="'+g.s+'"><div class="range-head"><h2>'+esc(g.g)+'</h2><a class="text-link" href="'+g.url+'" target="_blank" rel="noreferrer">Alles bij DOVAC '+arrow+'</a></div><div class="range-grid">'+cats.map(rangeCard).join('')+'</div></section>';
   }
   $('#range-count').textContent=shown+' '+(shown===1?'categorie':'categorieen')+' met het volledige assortiment';
   $('#range-list').innerHTML=html||'<div class="empty-results"><h2>Niets gevonden.</h2><p>Probeer een andere zoekterm.</p></div>';
  }
  document.querySelectorAll('[data-range]').forEach(b=>b.onclick=()=>{group=b.dataset.range;document.querySelectorAll('[data-range]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));drawRangeNow();});
  $('#range-search').oninput=drawRange;drawRangeNow();
 }
 if(page==='datasheets'){
  let kind='alles';
  function drawSheetsNow(){
   const q=($('#sheet-search')?.value||'').trim().toLocaleLowerCase('nl');
   let shown=0,html='';
   for(const group of sheetDocs()){
    if(kind!=='alles'&&group.kind!==kind)continue;
    const items=group.items.filter(i=>(i.name+' '+i.type).toLocaleLowerCase('nl').includes(q));
    if(!items.length)continue;
    shown+=items.length;
    html+='<section class="sheet-group"><h3 class="group-label">'+esc(group.group)+'</h3><div class="sheet-list">'+items.map(sheetRow).join('')+'</div></section>';
   }
   $('#sheet-count').textContent=shown+' '+(shown===1?'document':'documenten');
   $('#sheet-list').innerHTML=html||'<div class="empty-results"><h2>Geen documenten gevonden.</h2><p>Probeer een andere zoekterm of bekijk alle categorieen.</p></div>';
  }
  document.querySelectorAll('[data-sheet]').forEach(b=>b.onclick=()=>{kind=b.dataset.sheet;document.querySelectorAll('[data-sheet]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));drawSheetsNow();});
  $('#sheet-search').oninput=draw;drawSheetsNow();
 }
 if(page==='contact'){
  $('#contact-form').oninput=()=>{$('#draft').hidden=true;$('#form-error').textContent='';};
  $('#contact-form').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const name=String(fd.get('name')).trim();const message=String(fd.get('message')).trim();if(!name||!message){$('#form-error').textContent='Vul uw naam en een korte omschrijving van uw vraag in.';return;}const subject=String(fd.get('subject')).trim()||'Technische vraag';const text=`Goedendag DOVAC,\n\n${message}\n\nOnderwerp: ${subject}\nNaam: ${name}\nBedrijfsnaam: ${fd.get('company')||'Niet opgegeven'}\nE-mailadres: ${fd.get('email')}\n\nMet vriendelijke groet,\n${name}`;$('#draft-text').textContent=text;$('#draft-link').href='mailto:info@dovac.nl?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(text);$('#draft').hidden=false;$('#draft h3').focus();};
 }
 observer?.disconnect();
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver' in window){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('animate');observer.observe(el);});}
 window.scrollTo({top:0,behavior:'instant'});if(!initial)$('#main h1')?.focus({preventScroll:true});initial=false;
}catch(err){const main=document.getElementById('main');if(main)main.innerHTML='<section class="wrap section"><h1>Deze pagina kon niet worden geladen.</h1><p class="lead">Er ging iets mis bij het opbouwen van de pagina. Probeer een andere pagina via het menu.</p><p class="lead" style="font-size:13px">Technische melding: '+String(err&&err.message||err)+'</p></section>';}
}

window.addEventListener('hashchange',render);render();
