![Tests](https://github.com/vtfk/azf-pdf-generator/workflows/Run%20tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/vtfk/azf-pdf-generator/badge.svg?branch=main)](https://coveralls.io/github/vtfk/azf-pdf-generator?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# azf-pdf-generator

Mikrotjeneste som genererer PDF-dokumenter basert på predefinerte maler og returnerer de som base64.

## API-endepunkter

### POST /generate

Se [tilgjengelige systemer og maler](#maler) i listen nedenfor.

```json
{
  "system": "minelev",
  "template": "varsel-fag",
  "language": "nb",
  "data": {
    "preview": true,
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
    "data": {
      "preview": true,
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
| minelev | varsel-fag | nb, nn     | `data` skal være dokumentet fra MinElev documents. [Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#fag) |
| minelev | varsel-orden | nb, nn   | `data` skal være dokumentet fra MinElev documents. [Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#orden) |
| minelev | varsel-atferd | nb, nn  | `data` skal være dokumentet fra MinElev documents. [Format tilgjengelig her.](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md#atferd) |

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