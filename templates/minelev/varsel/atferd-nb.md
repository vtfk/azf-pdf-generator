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

# Varsel om mulig nedsatt karakter i atferd

## Årsak til varsel:

{{#each content.reasons}}
 - {{this.nb}}
{{/each}}

Varselet gjelder {{ lowercase content.period.nb }} skoleåret {{ content.year }}.

Informasjon om merknader som gjelder atferd finnes i Visma InSchool (VIS).

Det skal varsles skriftlig dersom det er fare for at eleven kan få karakteren nokså god eller lite god i halvårsvurdering med karakter eller standpunktkarakter i orden. Dette framkommer av forskrift til opplæringsloven § 3-8.

## Har du spørsmål?

Ta kontakt med kontaktlæreren din så snart som mulig om noe ved varselet er uklart, eller du ønsker å snakke om grunnlaget for varselet.

Hvis du er under 18 år sendes dette brevet også til foresatte.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
