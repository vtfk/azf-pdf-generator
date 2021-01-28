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

{{variable 'utplassering' content.utplassering}}
{{variable 'bedrift' utplassering.bedriftsData}}

# Tilbakemelding etter utplassering hos {{ bedrift.navn }}

{{ student.name }} i {{ student.level }} på {{ school.name }} har vært på utplassering hos {{ bedrift.navn }}. Utplasseringen har foregått i perioden {{ utplassering.fraDato }} - {{ utplassering.tilDato }} skoleåret {{ content.year }}.

## Kompetansemål og arbeidsoppgaver

{{#each content.kompetansemal}}

- {{#if grep}}{{uppercaseFirst grep.tittel.nb}}<br />{{/if}}
  {{#if arbeidsoppgaver}}**Arbeidsoppgaver:** {{uppercaseFirst arbeidsoppgaver}}<br />{{/if}}
  {{#if tilbakemelding}}**Måloppnåelse:** {{uppercaseFirst tilbakemelding}}<br />{{/if}}

{{/each}}

## Virksomhetens inntrykk og tilbakemelding til lærer

{{#each content.evalueringsdata}}
{{#if (and score (ne score 0))}}

- {{#if title.nb}}{{title.nb}}{{else}}{{title}}{{/if}}<br />
  **Måloppnåelse:** {{uppercaseFirst score }}

{{/if}}
{{/each}}

## Elevens fravær

Antall dager: {{ content.fravar.dager }}<br/>
Antall timer: {{ content.fravar.timer }}<br/>
{{#if (eq content.fravar.varslet 'ja')}}Eleven varslet selv om fraværet.{{/if}}{{#if (eq content.fravar.varslet 'nei')}}Eleven varslet ikke om fraværet.{{/if}}{{#if (eq content.fravar.varslet 'av og til')}}Eleven varslet selv om noe av fraværet.{{/if}}

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
