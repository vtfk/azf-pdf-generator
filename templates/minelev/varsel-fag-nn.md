---
definition: brevmal
language: nn
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
- {{this.nn}}
{{/each}}

Dette omfattar følgjande fag:

{{#each content.classes}}
 - {{this.nn}}
{{/each}}

Varselet gjeld {{ lowercase content.period.nn }} skoleåret {{ content.year }}.

## Viktig om fråvær

- Du må møte til undervisninga slik at du kan få halvårsvurdering/standpunktkarakter.
- Om du har dokumentert fråvær må du levere dokumentasjon på fråvær over 10 prosent snarast.
- Om fråværet ditt gjer det urimeleg med ei grense på 10 prosent kan rektor etter grunngjeve søknad godkjenne inntil 15 prosent ikkje dokumentert fråvær i eit fag. Dette må gjerast snarast og i god tid før karakteroppgjeret.

## Har du spørsmål?

Dersom noko ved varselet er uklart eller du ønskjer å snakke med nokon om grunnlaget for varselet, ta kontakt med kontaktlæraren din så snart som mogleg.

Dersom du er under 18 år vert dette brevet også sendt til føresette.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sendt utan signatur.*
