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

{{variable 'skule' (replace 'videregående skole' 'vidaregåande skule' school.name) }}
{{variable 'utplassering' content.utplassering}}
{{variable 'bedrift' utplassering.bedriftsData}}

# Tilbakemelding etter utplassering hos {{ bedrift.navn }}

{{ student.name }} i {{ student.level }} på {{ skule }} har vore på utplassering hos {{ bedrift.navn }}. Utplasseringa har funne stad i perioden {{ utplassering.fraDato }} - {{ utplassering.tilDato }} i skuleåret {{ content.year }}.

## Kompetansemål og arbeidsoppgåver

{{#each content.kompetansemal}}

- {{#if grep}}{{uppercaseFirst grep.tittel.nn}}<br />{{/if}}{{#if arbeidsoppgaver}}**Arbeidsoppgåver:** {{uppercaseFirst arbeidsoppgaver}}<br />{{/if}}{{#if tilbakemelding}}**Måloppnåing:** {{ replace 'Lav' 'Låg' (replace 'Høy' 'Høg' (replace 'måloppnåelse' 'måloppnåing' (uppercaseFirst tilbakemelding))) }}<br />{{/if}}

{{/each}}

## Verksemda sitt inntrykk og tilbakemelding til lærar

{{#each content.evalueringsdata}}
{{#if (and score (ne score 0))}}

- {{#if title.nn}}{{title.nn}}{{else}}{{title}}{{/if}}<br />
  **Måloppnåing:** {{ replace 'forventet' 'forventa' (uppercaseFirst score) }}

{{/if}}
{{/each}}

## Eleven sitt fråvær

Tal på dager: {{ content.fravar.dager }}<br/>
Tal på timar: {{ content.fravar.timer }}<br/>
{{#if (eq content.fravar.varslet 'ja')}}Eleven varsla sjølv om fråværet.{{/if}}{{#if (eq content.fravar.varslet 'nei')}}Eleven varsla ikkje om fråværet.{{/if}}{{#if (eq content.fravar.varslet 'av og til')}}Eleven varsla sjølv om noko av fråværet.{{/if}}

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ skule }}<br />

*Dokumentet er elektronisk godkjent og vert sendt utan signatur.*
