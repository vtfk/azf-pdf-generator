---
definition: brevmal
language: nb
watermark: {{#if preview}} true {{else}} false {{/if}}
address:
  name: {{ employeeName }}
  street: {{ streetAddress }}
  city: {{ zipCode }} {{ zipPlace }}
info:
  our-date: {{ timestamp }}
  sector: {{ sender }}
  paragraph: Offl. § 25
---

# Melding om innplassering i {{ newCounty }}
Vestfold og Telemark fylkeskommune legges ned som virksomhet 31.12.2023. Vestfold fylkeskommune og Telemark fylkeskommune opprettes med virkning fra og med 01.01.2024.

Som følge av fylkesdelingen er det gjennomført en kartleggingssamtale og innplasseringssamtale. Vi vil orientere om at du er innplassert som følger i Vestfold fylkeskommune eller Telemark fylkeskommune fra og med 1. januar 2024:  


**Fylkeskommune:** {{ newCounty }}<br>
**Enhet:** {{ newUnit }}<br>
**Stillingstittel:** {{ newJobTitle }}<br>
**Ny leder:** {{ newManager }}<br>
**Hovedarbeidssted:** {{ newOfficeLocation }}<br>
{{#if (eq specialOfficeNeeds "Ja")}}**Tilpasninger ved endret arbeidssted:** {{ specialOfficeNeedsDescription }} {{/if}}

Det innebærer at du beholder nåværende vilkår knyttet til stillingsbenevnelse, stillingskode, stillingsstørrelse, kapitteltilhørighet, fast/midl tilsetting, lønnsansiennitet, tjenesteansiennitet og årslønn. Nevnte opplysninger overføres ny arbeidsgiver.  

Du kan velge å reservere deg mot å bli med over i den nye fylkeskommunen. Det betyr imidlertid at du sier opp din stilling i fylkeskommunen. 

Dersom du har spørsmål vedrørende innplasseringen, og eventuelt vil fremme rettskrav kan du ta kontakt med din nærmeste leder. Innplassering er midlertidig til eventuelle rettskrav er avklart. Frist for innlevering av rettskrav er sju dager etter innplasseringssamtalen ble gjennomført.<br>
Frist for innlevering av rettskrav: **{{ legalClaimDate }} kl 12:00**

Vi ønsker deg velkommen til {{ newCounty }}! 


Med vennlig hilsen

{{ sender }}

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
