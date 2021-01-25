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

# Varsel om mulig nedsatt karakter i orden

## Årsak til varsel:

{{#each content.reasons}}
 - {{this.nb}}
{{/each}}

Varselet gjelder {{ lowercase content.period.nb }} skoleåret {{ content.year }}.

Vi varsler deg om situasjonen nå slik at du har mulighet til å forbedre deg.

## Har du spørsmål?

Hvis noe ved varselet er uklart eller du ønsker å snakke med noen om grunnlaget for varselet, ta kontakt med kontaktlæreren din så snart som mulig.

Hvis du er under 18 år sendes dette brevet også til foresatte.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
