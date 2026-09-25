// Datasheet catalogue as published by DOVAC. Documents are supplied on request, so every entry opens DOVAC's own request page.
export const documentationBase = 'https://dovac.nl/nl/documentatie/';
export const liquidRing = ['Asco AVM 11','Asco AVM 26','Asco AVM 51','Asco AVM 96','Asco AVM 131','Asco AVM 256','Asco AVM 326','Asco AVM 456','Asco AVL 51','Asco AVL 96','Asco AVL 131','Asco AVL 256','Asco AVL 326','Asco AVL 456'];
export const claw = [['PA 155','pa-155'],['PA 315','pa-315'],['VA 155','va-155'],['VA 155-1','va-155-1'],['VA 315','va-315'],['VA 315-1','va-315-1'],['DVP VB315','dvp-vb315'],['CPAP Duplex','cpap-2'],['CPAP Triplex','cpap-3']];
export const clawSpareParts = ['PA 155','PA 315','VA 155','VA 155-1','VA 315','VA 315-1','DVP VB315'];
export const categories = [
  {name:'Vloeistofring vacuumpompen',slug:'documentatie-vloeistofring-vacuumpompen',count:14,kind:'vloeistofring'},
  {name:'Klauwen vacuumpompen',slug:'documentatie-klauwen-vacuumpompen',count:16,kind:'klauwen'},
  {name:'Membraan/zuiger vacuumpompen',slug:'documentatie-membraan-zuiger-vacuumpompen',count:0,kind:'categorie'},
  {name:'Drooglopende draaischuifpompen',slug:'documentatie-drooglopende-draaischuifpompen',count:0,kind:'categorie'},
  {name:'Oliegesmeerde 1-traps draaischuifpompen',slug:'documentatie-oliegesmeerde-1-traps-draaischuifpompen',count:0,kind:'categorie'},
  {name:'Oliegesmeerde 2-traps draaischuifpompen',slug:'documentatie-oliegesmeerde-2-traps-draaischuifpompen',count:0,kind:'categorie'},
  {name:'Zijkanaalventilatoren',slug:'documentatie-zijkanaalventilatoren',count:0,kind:'categorie'},
  {name:'Turbo Blowers',slug:'documentatie-turbo-blowers',count:0,kind:'categorie'},
  {name:'Systems',slug:'documentatie-systems',count:0,kind:'categorie'},
  {name:'Onderhoudskits',slug:'documentatie-onderhoudskits',count:0,kind:'categorie'}
];
export const requestUrl = (slug, document) => {
  const path = slug === 'documentatie-vloeistofring-vacuumpompen'
    ? slug + '/' + document.toLowerCase().replace(/ /g,'-').replaceAll('/','') + '/'
    : slug + '/';
  return documentationBase + path;
};
export const documentUrl = slug => documentationBase + slug + '/';
export const mailUrl = (label) => 'mailto:info@dovac.nl?subject=' + encodeURIComponent('Documentatie aanvragen: ' + label) + '&body=' + encodeURIComponent('Goedendag DOVAC,\n\nGraag ontvang ik de documentatie voor ' + label + '.\nMerk en type: \nToepassing: \n\nMet vriendelijke groet,');
