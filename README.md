![Tests](https://github.com/vtfk/azf-pdf-generator/workflows/Run%20tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/vtfk/azf-pdf-generator/badge.svg?branch=main)](https://coveralls.io/github/vtfk/azf-pdf-generator?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# azf-pdf-generator

Mikrotjeneste som genererer PDF- eller PDF/A-dokumenter basert på predefinerte maler og returnerer de som base64.

## API-endepunkter

### POST /generate - PDF

Se [tilgjengelige systemer og maler](#maler) i listen nedenfor.

Feltet `language` er standard satt til `nb` (bokmål) om ikke annet er definert. <br>
Andre tillatte verdier er `nn` (nynorsk) og `en` (engelsk)

Forespørsel:

```json
{
  "system": "minelev",
  "template": "varsel-fag",
  "language": "nb",
  "data": {
    ... template fields ...
  }
}
```

Respons:

```json
{
  "data": {
    "system": "minelev",
    "template": "varsel-fag",
    "language": "nb",
    "type": "",
    "version": "",
    "data": {
      ... template fields ...
    },
    "base64": "...base64-pdf..."
  }
}
```

### POST /generate - PDF/A

Se [tilgjengelige systemer og maler](#maler) i listen nedenfor.

Feltet `language` er standard satt til `nb` (bokmål) om ikke annet er definert. <br>
Andre tillatte verdier er `nn` (nynorsk) og `en` (engelsk)

Feltet `type` og `version` gis med for å sette PDF/A til f.eks versjon `2B`. <br>
Dersom `type` og/eller `version` ikke er satt genereres standard PDF. <br>
Se [tillatte verdier](#pdfa) i listen under

Forespørsel:

```json
{
  "system": "minelev",
  "template": "varsel-fag",
  "language": "nb",
  "type": "2",
  "version": "B",
  "data": {
    ... template fields ...
  }
}
```

Respons:

```json
{
  "data": {
    "system": "minelev",
    "template": "varsel-fag",
    "language": "nb",
    "type": "2",
    "version": "B",
    "data": {
      ... template fields ...
    },
    "base64": "...base64-pdf..."
  }
}
```

## Maler

Et system kan ha mange maler, her er en beskrivelse av alle de forskjellige dokumentmalene som er tilgjengelige for bruk i API-en.

| System  | Template   | Languages  | Description  |
|---------|------------|------------|--------------|
| minelev | varsel-fag | nb, nn     | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#fag) |
| minelev | varsel-orden | nb, nn   | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#orden) |
| minelev | varsel-atferd | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#atferd) |
| minelev | samtale | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#samtale-1) |
| minelev | ikke-samtale | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#ikke-samtale) |
| minelev | notat | nb  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#notat-1) |
| minelev | bekreftelse-bedrift | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#yff-bekreftelse-bedrift) |
| minelev | bekreftelse | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#yff-bekreftelse) |
| minelev | laereplan | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#yff-lokalplan-maal) |
| minelev | tilbakemelding | nb, nn  | `data` skal være dokumentet fra MinElev documents. <br>[Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#yff-tilbakemelding) |
| iop | hemmelig | nb | [Format tilgjengelig her.](https://github.com/vtfk/azf-pdf-generator/blob/main/docs/templates.md#iop-hemmelig) |

## PDFA

PDF/A finnes i flere versjoner. Type `2` med versjon `B` (ISO 19005-2) er den vanligste for arkivering

| Type | Version | Standard | Description |
|------|---------|----------|-------------|
| 1    | A / B   | ISO 19005-1 | [Informasjon tilgjengelig her](https://en.wikipedia.org/wiki/PDF/A#pdf/a-1) |
| 2    | A / B   | ISO 19005-2 | [Informasjon tilgjengelig her](https://en.wikipedia.org/wiki/PDF/A#pdf/a-2) |


## Utvikling

- Klon ned repoet
- `$ npm install`

### Starte lokal Azure function

- Pass på at du har siste versjon av [azure-functions-core-tools](https://www.npmjs.com/package/azure-functions-core-tools) installert
- `$ func start`

## Publisere function

For å publisere ny release til Azure, opprett en release i github i master, så publiseres functionen til prod.

### Alternativ metode

- `$ az login`
- `$ func azure functionapp publish test-func-pdf-api-v1`
- `$ func azure functionapp publish prod-func-pdf-api-v1`

## Lisens

[MIT](/LICENSE.md)
