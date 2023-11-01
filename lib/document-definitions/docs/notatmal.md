# Standard notatmal

Standard notatmal for Vestfold og Telemark fylkeskommune

## Frontmatter attributter

```yaml
document: # Dokument-metadata, ref: https://pdfmake.github.io/docs/0.1/document-definition-object/document-medatadata/
  title: Dokumenttittel
  author: Forfatter av dokumentet
  subject: Emne som forklarer dokument
  keywords: nøkkel, ord, brev
watermark: # Skal dokumentet ha vannmerke, spesifiserer du denne. Sender du inn true (bool), blir vannmerket satt
           # til standard vannmerke for språket (Forhåndsvisning, førehandsvisning eller preview). Ellers
           # kan du spesifsere det enda dypere ved å sende inn et objekt med disse propertiene (verdiene som står nedentil er standard):
  text: Vannmerke # Standardverdi basert på språk: Forhåndsvisning, Førehandsvisning eller Preview
  color: "#EB8380" # farge eller hex-verdi
  opacity: 0.3
  angle: 0.45
  bold: false
  italic: false
  fontSize: 20 # Standard: auto
  font: Nunito
to: Navn Navnesen
from: Ola Nordmann
info: # Hvis en verdi ikke blir sendt med, vises den ikke i lista, med mindre noe annet er spesifisert.
  sector: "[Sektor/ seksjonsnivå]" # Uthevet sektor-felt over informasjonen
  our-date: "[yyyy-mm-dd]" # ISO-formattert dato. Datoen blir formattert som den skal. Standard verdi om ingen er angitt: dagens dato
  your-date: "[yyyy-mm-dd]" # ISO-formattert dato. Blir formattert.
  our-reference: "[Vår referanse]" # Saks- og dokumentnummer
  your-reference: "[Deres referanse]"
  our-caseworker: "[Saksbehandler]"
  paragraph: "Offl. § 13 jf. fvl. §13 (1)" # Unntatt offentlighet-paragraf.
```
