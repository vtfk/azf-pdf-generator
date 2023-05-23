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
Vestfold og Telemark fylkeskommune avvikles 31.12.2023. Vestfold fylkeskommune og Telemark fylkeskommune opprettes med virkning fra og med 01.01.2024.

Som følge av fylkesdelingen er det gjennomført kartleggingssamtale og innplasseringssamtale. Du er fra 01.01.2024 innplassert i:  

**Fylkeskommune:** {{ newCounty }}<br>
**Seksjon:** {{ newSection }}<br>
**Stillingskode og stillingstittel (hovedstilling):** {{ newJobTitle }}<br>
**Leder:** {{ newManager }}<br>
{{#if (eq specialOfficeNeeds "Ja")}}**Tilpasninger ved endret arbeidssted:** {{ specialOfficeNeedsDescription }} {{/if}}

Ansatte har rett til å beholde lønn, opparbeidet tjenesteansiennitet og pensjonsrettigheter, som følger av arbeidsavtalen (styringsdokumentet pkt. 6.7.2)

Du kan velge å reservere deg mot å bli med over i den nye fylkeskommunen. Det betyr imidlertid at du sier opp din stilling i fylkeskommunen. 

Dersom du har spørsmål vedrørende innplasseringen, og eventuelt vil fremme rettskrav kan du ta kontakt med din nærmeste leder. Innplassering er midlertidig til eventuelle rettskrav er avklart. Frist for innlevering av rettskrav er sju dager etter innplasseringssamtalen ble gjennomført.<br>
Frist for innlevering av rettskrav: **{{ legalClaimDate }} kl 12:00**

Vi ønsker deg velkommen til {{ newCounty }}! 


Med vennlig hilsen

{{ sender }}
<br>
Fylkesdirektør

*Dokumentet er elektronisk godkjent og sendes uten signatur.*