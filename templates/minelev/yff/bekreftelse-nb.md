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

# Bekreftelse om elevutplassering

{{variable 'bekreftelse' content.bekreftelse}}
{{variable 'bedrift' bekreftelse.bedriftsData}}

{{#if bekreftelse.kopiPrEpost}}
Kopi sendt på e-post til {{ lowercase (join bekreftelse.kopiPrEpost 'og') }}.
{{/if}}

**Gi beskjed til skolen så raskt som mulig hvis opplysningene i brevet ikke stemmer.**

Vi bekrefter med dette at {{ student.name }} som er elev på {{ content.level }} ved {{ school.name }} skal på utplassering hos {{ bedrift.navn }}{{#if bedrift.avdeling}} ({{ bedrift.avdeling }}){{/if}}.

## Arbeidstid

Tidsrom: {{ bekreftelse.fraDato }} - {{ bekreftelse.tilDato }}<br />
Arbeidsdag: {{ bekreftelse.startTid }} - {{ bekreftelse.sluttTid }}<br />
Dager i uken: {{ bekreftelse.daysPerWeek }}
{{#if bekreftelse.oppmotested}}<br />Oppmøtested: {{ bekreftelse.oppmotested }}{{/if}}

## Gjennomføring av utplassering

Under finner du en oversikt over elevens, skolens og opplæringsstedets ansvar i forbindelse med utplasseringen.

**Eleven skal**

- følge opplæringsstedets instrukser, oppgaver og avtalt arbeidstid
- loggføre arbeidstid og arbeidsoppgaver
- gjøre egenvurdering av arbeidsperioden i tillegg til å skrive rapport
- innhente og levere politiattest i fagområdene som krever det

**Skolen skal**

- sørge for at eleven har en egen læreplan
- sørge for at eleven har dokumentasjon på at han eller hun har fått HMS-opplæring
- samarbeide med opplæringsstedet
- veilede eleven både i skole og på opplæringssted
- følge opp elevens fravær og eventuelt sende varsel
- vurdere elevens kompetansenivå
- følge opp eleven hvis utplasseringen avsluttes før tiden
- ha yrkesskade- og ulykkesforsikring for eleven når han eller hun er i arbeidspraksis

Fylkeskommunens forsikringsordning gjelder under arbeid i arbeidstiden, og på direkte reise mellom hjem og arbeidssted.

**Opplæringsstedet skal**

- legge til rette for læring innenfor elevens læreplan og kompetansemål
- gi en tilbakemelding på elevens arbeid etter avtale med skolens kontaktperson
- gi eleven opplæring i aktuelle HMS-forskrifter for arbeidet som utføres
- melde til skolen hvis praksisperioden ønskes avsluttet før periodens utløp - videre oppfølging og opplæring er skolens ansvar

## Kontaktinformasjon

**Elev:**<br /> 
**{{ student.name }}**
{{#if (or student.mobile student.mail)}}<br />{{/if}}{{#if student.mobile}}Telefon: {{ student.mobile }}{{/if}}{{#if student.mail}}{{#if student.mobile}} / {{/if}}E-post: {{ student.mail }}{{/if}}

{{#if bekreftelse.parorendeData}}
{{variable 'flereParorende' (multiple bekreftelse.parorendeData)}}
**Elevens pårørende:**<br />
{{#each bekreftelse.parorendeData}}
  {{#if ../flereParorende}}-{{/if}} **{{ navn }}**
  {{#if telefon}}<br />Telefon: {{ telefon }}{{/if}}
{{/each}}
{{/if}}

{{#if bekreftelse.kontaktpersonData}}
{{variable 'flereKontakter' (multiple bekreftelse.kontaktpersonData)}}
**Kontaktperson{{#if flereKontakter}}er{{/if}} på utplasseringsstedet:**<br />
{{#each bekreftelse.kontaktpersonData}}
  {{#if ../flereKontakter}}-{{/if}} **{{ navn }}**{{#if avdeling}} ({{ avdeling }}){{/if}}
  {{#if (or telefon epost)}}<br />{{/if}}{{#if telefon}}Telefon: {{ telefon }}{{/if}}{{#if epost}}{{#if telefon}} / {{/if}}E-post: {{ epost }}{{/if}}
{{/each}}
{{/if}}

**Lærer og kontaktperson på skolen:**<br />
**{{ teacher.name }}**
{{#if (or teacher.mobile teacher.mail)}}<br />{{/if}}{{#if teacher.mobile}}Telefon: {{ teacher.mobile }}{{/if}}{{#if teacher.mail}}{{#if teacher.mobile}} / {{/if}}E-post: {{ teacher.mail }}{{/if}}

## Har du spørsmål?

Hvis du lurer på noe eller opplysningene ikke stemmer, kan du ta kontakt med {{ teacher.name }} på {{#if teacher.mobile }}telefon: {{teacher.mobile}}, eller {{/if}}e-post: {{ teacher.mail }}.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
