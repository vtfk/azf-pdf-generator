---
definition: brevmal
language: nb
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
---

# Varsel om at det er tvil om du kan få karakter i fag

## Årsak til varsel:

{{#each content.reasons}}
- {{this.nb}}
{{/each}}

Dette omfatter følgende fag:

{{#each content.classes}}
 - {{ classIdentifier this.nb this.name }}
{{/each}}

Varselet gjelder {{ lowercase content.period.nb }} skoleåret {{ content.year }}.

{{#if (objectContains content.reasons "fravær")}}
## Viktig om fravær

Eleven skal møte opp og delta aktivt i opplæringen i henhold til forskrift til opplæringsloven § 3-3.
Har en elev mer enn 10 prosent udokumentert fravær i et fag, vil eleven som hovedregel ikke ha rett til å få halvårsvurdering med karakter eller standpunktkarakter i faget, og læreren kan heller ikke sette slike karakterer. Eleven må legge fram relevant dokumentasjon for å få fravær unntatt fra fraværsgrensen. 

**Regler om midlertidig unntak ved fravær av helsegrunner (korona) forlenges ut skoleåret**
<br/>
Elever som har fravær av helsegrunner slipper å gå til fastlegen for å få dokumentert fraværet. Unntaket fra regelverket gjelder fra og med 24. august 2020 og ut skoleåret 2021 - 2022. Merk deg at fravær av helsegrunner omfatter alt helserelatert fravær. Dersom eleven legger frem bekreftelse fra en foresatt eller egenmelding, skal fravær av helsegrunner ikke føres som fravær på vitnemål og kompetansebevis, og det skal unntas fraværsgrensen.
{{/if}}

{{#if (objectContains content.reasons "vurderingsgrunnlag")}}
## Viktig om vurderingsgrunnlag

Eleven skal møte opp og delta aktivt i opplæringen slik at læreren får grunnlag til å vurdere kompetansen i faget. Stort fravær eller at eleven ikke er aktiv i opplæringa, kan føre til at læreren ikke har tilstrekkelig grunnlag for å gi halvårsvurdering med karakter eller standpunktkarakter. Dette framkommer av forskrift til opplæringsloven §§ 3-3 og 4-3. 
{{/if}}

Det skal varsles skriftlig dersom det er tvil om eleven kan få halvårsvurdering med karakter eller standpunktkarakter i ett eller flere fag, i henhold til forskrift til opplæringsloven §§ 3-8 og 4-5.

## Har du spørsmål?

Ta kontakt med kontaktlæreren din så snart som mulig om noe ved varselet er uklart, eller du ønsker å snakke om grunnlaget for varselet.

Hvis du er under 18 år sendes dette brevet også til foresatte.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
