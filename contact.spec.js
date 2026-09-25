import {test,expect} from '@playwright/test';

test('contact prepares a draft without pretending to send it',async({page})=>{
 await page.goto('./nl/contact/?onderwerp=Luchtmessen');
 await page.getByRole('button',{name:'Maak e-mailconcept'}).click();
 await expect(page.getByRole('heading',{name:'Uw e-mailconcept staat klaar.'})).toHaveCount(0);
 await page.getByLabel('Naam', {exact:true}).fill('Test Bezoeker');
 await page.getByLabel('Bedrijfsnaam').fill('Testbedrijf');
 await page.getByLabel('E-mailadres').fill('test@example.com');
 await expect(page.getByLabel('Onderwerp')).toHaveValue('Luchtmessen');
 await page.getByLabel('Uw vraag').fill('Graag advies over een luchtmes voor onze toepassing.');
 await page.getByRole('button',{name:'Maak e-mailconcept'}).click();
 await expect(page.getByRole('heading',{name:'Uw e-mailconcept staat klaar.'})).toBeVisible();
 await expect(page.getByText('Er is nog niets verzonden. Open uw e-mailprogramma, controleer het bericht en verstuur het daar.')).toBeVisible();
 const draft=page.getByRole('link',{name:'Open e-mailprogramma'});
 await expect(draft).toHaveAttribute('href',/^mailto:info@dovac.nl\?subject=/);
 expect(decodeURIComponent(await draft.getAttribute('href'))).toContain('Test Bezoeker');
 expect(decodeURIComponent(await draft.getAttribute('href'))).toContain('Luchtmessen');
});
