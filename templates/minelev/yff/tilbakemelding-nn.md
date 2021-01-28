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
  sector: {{ replace 'videregående skole' 'vidaregåande skule' school.name }}
  our-caseworker: {{ teacher.name }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
---

# Tilbakemelding etter utplassering hos {{ content.bedriftsData.navn }}

{{variable 'skule' (replace 'videregående skole' 'vidaregåande skule' school.name) }}

{{ student.name }} i {{ student.classId }} på {{ school.name }} har vore på utplassering hos {{ content.bedriftsData.navn }}. Utplasseringa har funne stad i perioden { content.periode } i skuleåret { content.year }.

## Verksemda sitt inntrykk og tilbakemelding til lærar

{tilbakemeldingKompetansemaal}
{tilbakemeldingInntrykk}

## Eleven sitt fråvær

Tal på dager: {fravaerAntallDager}
Tal på timar: {fravaerAntallTimer}
{fravaerVarsling}

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ skule }}<br />

*Dokumentet er elektronisk godkjent og vert sendt utan signatur.*
