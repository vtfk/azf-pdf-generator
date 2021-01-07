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

# Tilbud om elevsamtale

Du har fått tilbod om elevsamtale av kontaktlærar {{ teacher.name }}.<br />
Du har avslått samtalen og denne vert difor ikkje gjennomført.

<br/>
<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sent utan signatur.*
