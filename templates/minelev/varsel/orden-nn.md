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
  sector: {{ school.name }}
  our-caseworker: {{ teacher.name }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
footer:
  visiting-address: {{#if schoolFooter.address }}{{schoolFooter.address}}{{/if}}
  phone: {{#if schoolFooter.phoneNumber }}{{schoolFooter.phoneNumber}}{{/if}}
  email: {{#if schoolFooter.mail }}{{schoolFooter.mail}}{{/if}}
  orgnr: {{#if schoolFooter.organizationNumber }}{{schoolFooter.organizationNumber}}{{/if}}
---

# Varsel om mogleg nedsett karakter i orden

## Årsak til varsel:

{{#each content.reasons}}
 - {{this.nb}}
{{/each}}

Varselet gjeld {{ lowercase content.period.nb }} skoleåret {{ content.year }}.

Informasjon om merknader som gjeld orden finn de i Visma InSchool (VIS).

Det varslast skriftleg dersom det er tvil om eleven kan få karakteren nokså god eller lite god i halvårsvurdering med karakter eller standpunktkarakter i orden. Dette kjem fram av forskrift til opplæringslova § 3-8.

## Har du spørsmål?

Ta kontakt med kontaktlæraren din så snart som mogleg viss noko ved varselet er uklårt, eller du ønskjer å snakke med nokon om grunnlaget for varselet.

Dersom du er under 18 år vert dette brevet også sendt til føresette.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sent utan signatur.*
