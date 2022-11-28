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
footer:
  visiting-address: {{#if schoolFooter.address }}{{schoolFooter.address}}{{/if}}
  phone: {{#if schoolFooter.phoneNumber }}{{schoolFooter.phoneNumber}}{{/if}}
  email: {{#if schoolFooter.mail }}{{schoolFooter.mail}}{{/if}}
  orgnr: {{#if schoolFooter.organizationNumber }}{{schoolFooter.organizationNumber}}{{/if}}
---

# Bekreftelse på gjennomført elevsamtale

Det ble gjennomført elevsamtale {{ prettyDate created.timestamp }} mellom {{ student.name }} og {{ teacher.name }}.

<br/>
<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
