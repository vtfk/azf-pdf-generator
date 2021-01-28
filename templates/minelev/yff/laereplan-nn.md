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

# Elevens lokale læreplan i yrkesfagleg fordjuping (YFF)

{{variable 'skule' (replace 'videregående skole' 'vidaregåande skule' school.name) }}

Yrkesfagleg fordjuping skal normalt nyttast til opplæring i kompetansemål som er henta frå nasjonale læreplanar for Vg3 for opplæring i bedrift og skule. Basert på desse nasjonale kompetansemåla skal ein utarbeide lokale læreplanar. Den lokale læreplanen skal tydeleg vise kva for nasjonale læreplanmål som ligg til grunn for opplæringa.

## Skulen sine felles mål for yrkesfagleg fordjuping – gjeld Vg1 og Vg2

- Faget skal medverke til å introdusere eleven for arbeidslivet.
- Faget skal gi det regionale og lokale arbeidslivet høve til å definere innhaldet i opplæringa, i tråd med lokale kompetansebehov basert på læreplanar i dei aktuelle faga.
- Eleven skal få høve til å veksle mellom ulike læringsarenaer og oppleve realistiske arbeidssituasjonar under utplasseringa.
- Eleven skal få godt grunnlag for å velje lærefag og høve til å verte kjend med potensielle lærebedrifter.
- Eleven skal få erfaring med innhald, oppgåver og arbeidsmåtar som kjenneteiknar yrka utdanningsprogrammet kvalifiserer for, og få høve til å fordjupe seg i kompetansemåla frå læreplanane på Vg3-nivå.  
- Eleven skal få høve til å prøve ut eitt eller fleire aktuelle lærefag.
- Eleven skal, i samarbeid med lærar, utarbeide ein eigen læreplan for YFF-faget som er tilpassa bedrifta eller skulen (sjå eleven sin lokale læreplan).
- Eleven skal delta i planlegging, gjennomføring, dokumentasjon og vurdering av eige arbeid.

## Kor mange timar skal ein bruke på yrkesfagleg fordjuping?

- Vg1: omfanget av faget er 168 årstimar
- Vg2: omfanget av faget er 253 årstimar

Timetalet er gitt i einingar på 60 minutt. I skuletimar på 45 minutt vert dette 6 timar i veka på Vg1 (224 årstimar) og 9 timar i veka på Vg2 (337 årstimar).

<h2 class="pdf-pagebreak-before"><br />
  Lokal læreplan for {{ student.name }} for skuleåret {{ content.year }}
</h2>

{{#each content.utplasseringer}}
  **{{name}}**

{{#each maal}}

- {{#if programomraade}}**Programområde:** {{uppercaseFirst programomraade.tittel.nn}}<br />{{/if}}
  {{#if grep}}**Kompetansemål:** {{uppercaseFirst grep.tittel.nn}}<br />{{/if}}
  {{#if arbeidsoppgaver}}**Arbeidsoppgåver:** {{uppercaseFirst arbeidsoppgaver}}<br />{{/if}}

{{/each}}
{{/each}}

<br />

Eleven sin lokale læreplan er godkjend av den som har fått dette ansvaret av rektor.

<br/>

Med venleg helsing

{{ teacher.name }}<br />
{{ skule }}<br />

*Dokumentet er elektronisk godkjent og vert sendt utan signatur.*
