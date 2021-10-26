# PDF templates

### `minelev`

Minelev templates is located [here](https://github.com/vtfk/minelev-api/blob/main/docs/postDocument.md)

### `iop-hemmelig`

Example request:
```json
{
	"system": "iop",
	"template": "hemmelig",
	"language": "nb",
	"type": "2",
	"version": "B",
	"data": {
		"created": {
			"timestamp": 1711689485600
		},
		"student": {
			"name": "Bjartmar Ingolf",
			"classId": "Sakesak"
		},
		"teacher": {
			"name": "Turid Laila"
		},
		"school": {
			"name": "Hengsrud vinkjeller"
		}
	}
}
```

Example response:
```json
{
  "data": {
    "system": "iop",
    "template": "hemmelig",
    "language": "nb",
    "type": "2",
    "version": "B",
    "data": {
      "created": {
        "timestamp": 1711689485600
      },
      "student": {
        "name": "Bjartmar Ingolf",
        "classId": "Sakesak"
      },
      "teacher": {
        "name": "Turid Laila"
      },
      "school": {
        "name": "Hengsrud vinkjeller"
      }
    },
    "base64": "..."
  }
}
```
