---
definition: brevmal
language: nb
watermark: {{#if preview}} true {{else}} false {{/if}}
address:
  name: BEDRIFT
  street: GATEADRESSE
  city: 1234 POSTNR
info:
  our-date: {{ isoDate created.timestamp }}
  sector: {{ school.name }}
  our-caseworker: {{ teacher.name }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
---

# Bekreftelse om elevutplassering

Kopi sendt via e-post til { kopiPåEpost }

**Gi beskjed til skolen så raskt som mulig hvis opplysningene i brevet ikke stemmer.**

Vi bekrefter at {{ student.name }} som er elev på {klasseTrinn} {utdanningsProgram} ved {{ school.name }} skal på utplassering hos {navnOpplaeringssted}.

## Arbeidstid

Tidsrom: {startDato} - {sluttDato}<br />
Arbeidsdag: {startTid} - {sluttTid}<br />
Dager i uken: {daysPerWeek}
{{#if oppmotested}}<br />Oppmøtested: {oppmotested}{{/if}}

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

Elev:<br />
{{ student.name }}.{{#if student.mobile}} Telefon: {{ student.mobile }}.{{/if}}{{#if student.mail}} E-post: {{ student.mail }}{{/if}}

{{#if paarorende}}
Elevens pårørende:<br />
{{#each paarorende}}
  - {{ name }}.
  {{#if mobile}} Telefon: {{ mobile }}.{{/if}}
  {{#if mail}} E-post: {{ mail }}{{/if}}
{{/each}}
{{/if}}

{{#if kontaktperson}}
Kontaktperson på opplæringsstedet:<br />
{{#each kontaktperson}}
  - {{ name }}.
  {{#if mobile}} Telefon: {{ mobile }}.{{/if}}
  {{#if mail}} E-post: {{ mail }}{{/if}}
{{/each}}
{{/if}}

Lærer og kontaktperson på skolen:<br />
{{ teacher.name }}.{{#if teacher.mobile}} Telefon: {{ teacher.mobile }}.{{/if}}{{#if teacher.mail}} E-post: {{ teacher.mail }}{{/if}}

## Har du spørsmål?

Hvis du lurer på noe eller opplysningene ikke stemmer kan du ta kontakt med {{ teacher.name }} på telefon {{#if teacher.mobile }}{{teacher.mobile}}{{else}}{{/if}} eller e-post {{ teacher.mail }}.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
