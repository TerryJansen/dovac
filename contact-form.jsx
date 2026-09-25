import {useRef,useState} from 'react';
import {ArrowUpRight,EnvelopeSimple} from '@phosphor-icons/react';

export default function ContactForm(){
 const [draft,setDraft]=useState(null);
 const [error,setError]=useState('');
 const heading=useRef(null);
 const subject=new URLSearchParams(location.search).get('onderwerp')||'';
 function prepare(e){
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const name=String(data.get('name')||'').trim();
  const message=String(data.get('message')||'').trim();
  if(!name||!message){setError('Vul uw naam en een korte omschrijving van uw vraag in.');return;}
  setError('');
  const title=String(data.get('subject')||'Technische vraag').trim()||'Technische vraag';
  const text=`Goedendag DOVAC,\n\n${message}\n\nOnderwerp: ${title}\nNaam: ${name}\nBedrijfsnaam: ${data.get('company')||'Niet opgegeven'}\nE-mailadres: ${data.get('email')}\n\nMet vriendelijke groet,\n${name}`;
  setDraft({text,href:`mailto:info@dovac.nl?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}`});
  requestAnimationFrame(()=>heading.current?.focus());
 }
 return <div className="contact-form-panel"><h2>Begin het gesprek.</h2><p>Vul uw vraag in. We zetten alles klaar als e-mailconcept, zodat u het zelf kunt controleren en versturen.</p><form onSubmit={prepare} onChange={()=>{setDraft(null);setError('');}}><div className="form-grid"><label className="form-field">Naam<input name="name" autoComplete="name" required maxLength={100}/></label><label className="form-field">Bedrijfsnaam<input name="company" autoComplete="organization" maxLength={120}/></label><label className="form-field full">E-mailadres<input name="email" type="email" autoComplete="email" required maxLength={254}/></label><label className="form-field full">Onderwerp<input name="subject" defaultValue={subject.slice(0,120)} maxLength={120} placeholder="Bijvoorbeeld: advies over een vacuümpomp"/></label><label className="form-field full">Uw vraag<textarea name="message" required maxLength={1800} rows={5} placeholder="Vertel over uw toepassing, merk of type..."/></label></div><p className="form-note">Uw invoer blijft in deze browser totdat u zelf een e-mail verstuurt. Dit previewformulier verstuurt of bewaart geen aanvragen op een server.</p><button className="button" type="submit">Maak e-mailconcept <ArrowUpRight size={20}/></button>{error&&<p className="form-error" role="alert">{error}</p>}</form>{draft&&<section className="draft-panel" aria-label="E-mailconcept"><h3 tabIndex={-1} ref={heading}>Uw e-mailconcept staat klaar.</h3><p>Er is nog niets verzonden. Open uw e-mailprogramma, controleer het bericht en verstuur het daar.</p><pre>{draft.text}</pre><a className="button" href={draft.href}>Open e-mailprogramma <EnvelopeSimple size={20}/></a><p>Geen e-mailprogramma ingesteld? Kopieer de tekst hierboven en mail deze naar info@dovac.nl.</p></section>}</div>;
}
