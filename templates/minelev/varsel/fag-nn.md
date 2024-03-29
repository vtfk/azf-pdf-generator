---
definition: brevmal
language: nn
watermark: {{#if preview}} true {{else}} false {{/if}}
address:
  name: {{#if recipient.fullName }}{{recipient.fullName}}{{else}}{{student.name}}{{/if}}
  street: {{ recipient.streetAddress }}
  city: {{ recipient.zipCode }} {{ recipient.zipPlace }}
info:
  our-date: {{ isoDate created.timestamp }}
  sector: {{ school.name }}
  our-caseworker: {{ teacher.name }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
footer:
  visiting-address: {{#if schoolFooter.address }}{{schoolFooter.address}}{{/if}}
  phone: {{#if schoolFooter.phoneNumber }}{{schoolFooter.phoneNumber}}{{/if}}
  email: {{#if schoolFooter.mail }}{{schoolFooter.mail}}{{/if}}
  orgnr: {{#if schoolFooter.organizationNumber }}{{schoolFooter.organizationNumber}}{{/if}}
---

# Varsel om at det er tvil om du kan få karakter i fag

## Årsak til varsel:

{{#each content.reasons}}
- {{this.nn}}
{{/each}}

Dette omfattar følgjande fag:

{{#each content.classes}}
 - {{ classIdentifier this.nn this.name }}
{{/each}}

Varselet gjeld {{ lowercase content.period.nn }} skoleåret {{ content.year }}.

{{#if (objectContains content.reasons "fravær")}}
## Viktig om fråvær

Eleven skal møte opp og delta aktivt i opplæringa i henhold til forskrifta til opplæringslova § 3-3. 
Viss ein elev har meir enn 10 prosent udokumentert fråvær i eit fag, vil eleven som hovudregel ikkje ha rett til å få halvårsvurdering med karakter eller standpunktkarakter i faget, og læraren kan heller ikkje sette slike karakterar. Eleven må legge fram relevant dokumentasjon for å få fråvær unnateke frå fråværsgrensa.
{{/if}}

{{#if (objectContains content.reasons "vurderingsgrunnlag")}}
## Viktig om vurderingsgrunnlag

Eleven skal møte fram og delta aktivt i opplæringa slik at læraren får grunnlag til å vurdere eleven sin kompetanse i faget. Stort fråvær eller at eleven ikkje er aktiv i opplæring, kan føra at læraren ikkje har tilstrekkeleg grunnlag for å gje halvårsvurdering med karakter eller standpunktkarakter. Dette kjem fram av forskrift til opplæringslova §§ 3-3 og 4-3. 
{{/if}}

Det skal varslast skriftleg dersom det er tvil om eleven kan få halvårsvurdering med karakter eller standpunktkarakter i eitt eller fleire fag, i samsvar med opplæringslova §§ 3-8 og 4-5.

## Har du spørsmål?

Ta kontakt med kontaktlæraren din så snart som mogleg viss noko ved varselet er uklårt, eller du ønskjer å snakke med nokon om grunnlaget for varselet.

Dersom du er under 18 år vert dette brevet også sendt til føresette.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sendt utan signatur.*
