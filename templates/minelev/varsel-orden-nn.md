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

# Varsel om mogleg nedsett karakter i orden

## Årsak til varsel:

{{#each content.reasons}}
 - {{this.nb}}
{{/each}}

Varselet gjeld {{ lowercase content.period.nb }} skoleåret {{ content.year }}.

Vi varslar deg nå, slik at du har moglegheit til å betre situasjonen.

## Har du spørsmål?

Dersom noko ved varselet er uklart, eller du ønskjer å snakke med nokon om grunnlaget for varselet ta kontakt med kontaktlæraren din så snart som mogleg.

Dersom du er under 18 år vert dette brevet også sendt til føresette.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sent utan signatur.*
