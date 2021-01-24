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

# Tilbakemelding etter utplassering hos {{ content.bedriftsData.navn }}

{{variable 'bekreftelse' content.bekreftelse}}
{{variable 'bedrift' bekreftelse.bedriftsData}}

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
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sendt utan signatur.*
