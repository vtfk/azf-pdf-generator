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

# Stadfesting om elevutplassering

{{variable 'skule' (replace 'videregående skole' 'vidaregåande skule' school.name) }}
{{variable 'bekreftelse' content.bekreftelse}}
{{variable 'bedrift' bekreftelse.bedriftsData}}

{{#if bekreftelse.kopiPrEpost}}
Kopi vart send på e-post til {{ lowercase (join bekreftelse.kopiPrEpost 'og') }}.
{{/if}}

**Meld frå til skulen så raskt som mogleg dersom opplysningane i brevet ikkje stemmer.**

Vi stadfester at {{ student.name }} som er elev på {{ content.level }} {{ content.utdanningsprogram.kortform.nn }} ved {{ skule }} skal på utplassering hos {{ bedrift.navn }}{{#if bedrift.avdeling}} ({{ bedrift.avdeling }}){{/if}}.

## Arbeidstid

Tidsrom: {{ bekreftelse.fraDato }} - {{ bekreftelse.tilDato }}<br />
Arbeidsdag: {{ bekreftelse.startTid }} - {{ bekreftelse.sluttTid }}<br />
Dagar i veka: {{ bekreftelse.daysPerWeek }}
{{#if bekreftelse.oppmotested}}<br />Oppmøtestad: {{ bekreftelse.oppmotested }}{{/if}}

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

**Elev:**<br /> 
**{{ student.name }}**
{{#if (or student.mobile student.mail)}}<br />{{/if}}{{#if student.mobile}}Telefon: {{ student.mobile }}{{/if}}{{#if student.mail}}{{#if student.mobile}} / {{/if}}E-post: {{ student.mail }}{{/if}}

{{#if bekreftelse.parorendeData}}
{{variable 'flereParorende' (multiple bekreftelse.parorendeData)}}
**Pårørande til eleven:**<br />
{{#each bekreftelse.parorendeData}}
  {{#if ../flereParorende}}-{{/if}} **{{ navn }}**
  {{#if telefon}}<br />Telefon: {{ telefon }}{{/if}}
{{/each}}
{{/if}}

{{#if bekreftelse.kontaktpersonData}}
{{variable 'flereKontakter' (multiple bekreftelse.kontaktpersonData)}}
**Kontaktperson{{#if flereKontakter}}ar{{/if}} på opplæringsstaden:**<br />
{{#each bekreftelse.kontaktpersonData}}
  {{#if ../flereKontakter}}-{{/if}} **{{ navn }}**{{#if avdeling}} ({{ avdeling }}){{/if}}
  {{#if (or telefon epost)}}<br />{{/if}}{{#if telefon}}Telefon: {{ telefon }}{{/if}}{{#if epost}}{{#if telefon}} / {{/if}}E-post: {{ epost }}{{/if}}
{{/each}}
{{/if}}

**Lærar og kontaktperson på skulen:**<br />
**{{ teacher.name }}**
{{#if (or teacher.mobile teacher.mail)}}<br />{{/if}}{{#if teacher.mobile}}Telefon: {{ teacher.mobile }}{{/if}}{{#if teacher.mail}}{{#if teacher.mobile}} / {{/if}}E-post: {{ teacher.mail }}{{/if}}

## Har du spørsmål?

Dersom du lurer på noko eller opplysningane ikkje stemmer, kan du ta kontakt med {{ teacher.name }} på {{#if teacher.mobile }}telefon: {{teacher.mobile}}, eller {{/if}}e-post: {{ teacher.mail }}.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ skule }}<br />

*Dokumentet er elektronisk godkjent og vert sent utan signatur.*
