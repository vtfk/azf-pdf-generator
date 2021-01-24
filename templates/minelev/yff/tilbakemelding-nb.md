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

# Tilbakemelding etter utplassering hos {{ content.bedriftsData.navn }}

{{variable 'bekreftelse' content.bekreftelse}}
{{variable 'bedrift' bekreftelse.bedriftsData}}

{{ student.name }} i {{ student.classId }} på {{ school.name }} har vært på utplassering hos {{ content.bedriftsData.navn }}. Utplasseringen har foregått i perioden { content.periode } i skoleåret { content.year }.

## Virksomhetens inntrykk og tilbakemelding til lærer

{tilbakemeldingKompetansemaal}
{tilbakemeldingInntrykk}

## Elevens fravær

Antall dager: {fravaerAntallDager}
Antall timer: {fravaerAntallTimer}
{fravaerVarsling}

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
