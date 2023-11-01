# document-definitions

Node module for document-definitions

## API

*id* the id for requested document definition
*language* the language for the document definition, defaults to `no_nb`

## Usage

```
$ npm i @vtfk/document-definitions
```

```JavaScript
const getDD = require('@vtfk/document-definitions')
const dd = getDD('brevmal', 'no_nn')
const pdfDefinition = dd(data)
```

## Definitions

- [brevmal](./docs/brevmal.md)
- [notatmal](./docs/notatmal.md)

## License

[MIT](LICENSE)
