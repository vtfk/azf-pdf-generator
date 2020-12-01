---
definition: brevmal
language: nb
watermark: {{#if preview}} true {{else}} false {{/if}}
address:
  name: {{ student.name }}
  street: {{ student.address }}
  city: {{ student.city }}
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
 - {{this.nb}}
{{/each}}

Varselet gjelder {{ content.period.nb }} skoleåret {{ content.year }}.

## Viktig om fravær

-	Du må møte til undervisningen slik at du kan få halvårsvurdering/standpunktkarakter.
-	Om du har dokumentert fravær må du levere dokumentasjon på fravær over 10 prosent snarest.
-	Om fraværet ditt gjør det urimelig med en grense på 10 prosent kan rektor etter begrunnet søknad godkjenne inntil 15 prosent udokumentert fravær i et fag. Dette må gjøres snarest og i god tid før karakteroppgjøret.

## Har du spørsmål?

Hvis noe ved varselet er uklart eller du ønsker å snakke med noen om grunnlaget for varselet, ta kontakt med kontaktlæreren din så snart som mulig.

Hvis du er under 18 år sendes dette brevet også til foresatte.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
