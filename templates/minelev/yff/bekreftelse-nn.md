---
definition: brevmal
language: nn
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

# Stadfesting om elevutplassering

Kopi senft via e-post til { kopiPåEpost }

**Meld frå til skulen så raskt som mogleg dersom opplysningane i brevet ikkje stemmer.**

Vi stadfester at {{ student.name }} som er elev på {klasseTrinn} {utdanningsProgram} ved {{ school.name }} skal på utplassering hos {navnOpplaeringssted}.

## Arbeidstid

Tidsrom: {startDato} - {sluttDato}<br />
Arbeidsdag: {startTid} - {sluttTid}<br />
Dager i uken: {daysPerWeek}
{{#if oppmotested}}<br />Oppmøtested: {oppmotested}{{/if}}

## Gjennomføring av utplassering

Under finn du ei oversikt over eleven, skulen og opplæringsstaden sitt ansvar i samband med utplasseringa.

**Eleven skal**

- følgje opplæringsstaden sine instruksar, oppgåver og avtalt arbeidstid
- loggføre arbeidstid og arbeidsoppgåver
- gjere eiga vurdering av arbeidsperioden, i tillegg til å skrive rapport
- hente inn og levere politiattest i fagområda som krev det

**Skulen skal**

- sørgje for at eleven har ein eigen læreplan
- sørgje for at eleven har dokumentasjon på at han eller ho har fått HMS-opplæring
- samarbeide med opplæringsstaden
- rettleie eleven både på skulen og på opplæringsstaden
- følgje opp eleven sitt fråvær og eventuelt sende varsel
- vurdere eleven sitt kompetansenivå
- følgje opp eleven dersom utplasseringa vert avslutta før tida
- ha yrkesskade- og ulykkesforsikring for eleven når han eller ho er i arbeidspraksis

Fylkeskommunen si forsikringsordning gjeld under arbeid i arbeidstida og på direkte reise mellom heimen og arbeidsstaden.

**Opplæringsstaden skal**

- leggje til rette for læring innanfor eleven sin læreplan og kompetansemåla i denne 
- gje ei tilbakemelding på eleven sitt arbeid etter avtale med kontaktperson ved skulen 
- gje eleven opplæring i aktuelle HMS-forskrifter for arbeidet som vert utført 
- melde frå til skulen dersom ein ønskjer å avslutte praksisopphaldet før perioden er slutt- vidare oppfølging og opplæring er skulen sitt ansvar

## Kontaktinformasjon

Elev:<br />
{{ student.name }}.{{#if student.mobile}} Telefon: {{ student.mobile }}.{{/if}}{{#if student.mail}} E-post: {{ student.mail }}{{/if}}

{{#if paarorende}}
Elevens pårørande:<br />
{{#each paarorende}}
  - {{ name }}.
  {{#if mobile}} Telefon: {{ mobile }}.{{/if}}
  {{#if mail}} E-post: {{ mail }}{{/if}}
{{/each}}
{{/if}}

{{#if kontaktperson}}
Kontaktperson på opplæringsstaden:<br />
{{#each kontaktperson}}
  - {{ name }}.
  {{#if mobile}} Telefon: {{ mobile }}.{{/if}}
  {{#if mail}} E-post: {{ mail }}{{/if}}
{{/each}}
{{/if}}

Lærar og kontaktperson på skulen:<br />
{{ teacher.name }}.{{#if teacher.mobile}} Telefon: {{ teacher.mobile }}.{{/if}}{{#if teacher.mail}} E-post: {{ teacher.mail }}{{/if}}

## Har du spørsmål?

Dersom du lurer på noko eller opplysningane ikkje stemmer kan du ta kontakt med {{ teacher.name }} på telefon {{#if teacher.mobile }}{{teacher.mobile}}{{else}}{{/if}} eller e-post {{ teacher.mail }}.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og vert sent utan signatur.*
