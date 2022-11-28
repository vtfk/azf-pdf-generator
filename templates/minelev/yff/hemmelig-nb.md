---
definition: notatmal
language: nb
watermark: {{#if preview}} true {{else}} false {{/if}}
to: {{ school.name }}
info:
  sector: Seksjon for sektorutvikling
  our-date: {{ isoDate created.timestamp }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
footer:
  visiting-address: {{#if schoolFooter.address }}{{schoolFooter.address}}{{/if}}
  phone: {{#if schoolFooter.phoneNumber }}{{schoolFooter.phoneNumber}}{{/if}}
  email: {{#if schoolFooter.mail }}{{schoolFooter.mail}}{{/if}}
  orgnr: {{#if schoolFooter.organizationNumber }}{{schoolFooter.organizationNumber}}{{/if}}
---

# {{ capitalize variant }} må sendes til {{ student.name }}

Det er i dag produsert en {{ variant }} i YFF til {{ student.name }} i klasse {{ student.classId }} fra {{ teacher.name }}.
Eleven har hemmelig adresse eller har ikke tilgjengelig adresse i folkeregisteret, og har derfor ikke fått sitt brev i sin digitale postkasse.

Administrasjonen på {{ school.name }} må sørge for å skrive ut brevet i yff-{{ variant }} fra 360 og deretter gi brevet til {{ teacher.name }}. Det er {{ teacher.name }} som da er ansvarlig for å distribuere brevet videre til eleven.

Hvis eleven ikke er registrert med hemmelig adresse i 360, skal brukerstøtte arkiv informeres på telefon 35 91 70 13.

## Har du spørsmål?

Ta kontakt med brukerstøtte arkiv på telefon 35 91 70 13.

Takk for hjelpen!

<br/>

Med vennlig hilsen

Seksjon for sektorutvikling
