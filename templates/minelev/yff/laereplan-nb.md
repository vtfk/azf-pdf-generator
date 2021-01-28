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

# Elevens lokale læreplan i yrkesfaglig fordypning (YFF)

{{variable 'bekreftelse' content.bekreftelse}}
{{variable 'bedrift' bekreftelse.bedriftsData}}

Yrkesfaglig fordypning skal normalt brukes til opplæring i kompetansemål hentet fra læreplaner Vg3 for opplæring i bedrift og i skole. Det skal utarbeides lokale læreplaner basert på de nasjonale kompetansemålene. Det skal framgå av den lokale læreplanen hvilke nasjonale kompetansemål som ligger til grunn for opplæringen.

## Skolens felles mål for yrkesfaglig fordypning – gjelder Vg1 og Vg2

- Faget skal bidra til å introdusere eleven for arbeidslivet.
- Faget skal gi regionalt og lokalt arbeidsliv mulighet til å definere innholdet i opplæringen i tråd med lokale kompetansebehov basert på læreplaner i aktuelle fag.
- Eleven skal få mulighet til å veksle mellom ulike læringsarenaer og oppleve realistiske arbeidssituasjoner under utplasseringen.
- Eleven skal få godt grunnlag for å velge lærefag og mulighet til å bli kjent med potensielle lærebedrifter.
- Eleven skal få erfaring med innhold, oppgaver og arbeidsmåter som kjennetegner yrkene utdanningsprogrammet kvalifiserer for, og få mulighet til å fordype seg i kompetansemålene fra læreplanene på Vg3-nivå.
- Eleven skal få mulighet til å prøve ut ett eller flere aktuelle lærefag.
- Eleven skal, i samarbeid med lærer, utarbeide egen læreplan for YFF-faget tilpasset bedriften eller skolen, se elevens lokale læreplan.
- Eleven skal delta i planlegging, gjennomføring, dokumentasjon og vurdering av eget arbeid.

## Hvor mange timer skal brukes på yrkesfaglig fordypning?

- Vg1: omfanget av faget er 168 årstimer
- Vg2: omfanget av faget er på 253 årstimer

Timetallet er oppgitt i 60 minutters enheter. I 45 minutters skoletimer utgjør dette 6 uketimer på Vg1 (224 årstimer) og 9 uketimer på Vg2 (337 årstimer).

## Lokal læreplan for {{ student.name }} for skoleåret {{ content.year }}

{{ content.lokallaereplan }}

Elevens lokale læreplan er godkjent av den rektor har delegert ansvaret til.

<br/>

Med vennlig hilsen

{{ teacher.name }}<br />
{{ school.name }}<br />

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
