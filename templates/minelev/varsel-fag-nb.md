---
definition: brevmal
language: nb
address:
  name: {{ mottaker.fullName }}
  street: {{ mottaker.adresse }}
  city: {{ mottaker.poststed }}
info:
  sector: Opplæring og folkehelse
  paragraph: "Offl. § 13 jf. fvl. §13 (1)"
---

# Varsel om at det er tvil om du kan få karakter i fag

## Årsak til varsel:
{{#each varsel.aarsaker}}
 - {{this}}
{{/each}}

## Dette omfatter følgende fag:
{{#each varsel.fag}}
 - {{this}}
{{/each}}

## Har du spørsmål?
Hvis noe ved varselet er uklart eller du ønsker å snakke med noen om grunnlaget for varselet, ta kontakt med kontaktlæreren din så snart som mulig.  
 
Hvis du er under 18 år sendes dette brevet også til foresatte.  

<br/>

Med vennlig hilsen
<br/>
Ola Nordmann

<br>

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
