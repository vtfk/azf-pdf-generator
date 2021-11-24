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

### `smart-motereferat`

Example request:
```json
{
	"system": "smart",
	"template": "motereferat",
	"language": "nb",
	"type": "2",
	"version": "B",
	"data": {
		"created": {
			"timestamp": 1711689485600
    },
    "meetingGroup": {
      "name": "Hengsrud vinkjeller"
    },
    "paragraph": "Offl. § 14",
    "title": "Skal vi ha fest på lørran?",
    "description": "Dersom vi skal ha fest på lørran må vi ha et sted å ha det",
    "decision": "Vi har det hos Tore"
	}
}
```

Example response:
```json
{
  "data": {
    "system": "smart",
    "template": "motereferat",
    "language": "nb",
    "type": "2",
    "version": "B",
    "data": {
      "created": {
        "timestamp": 1711689485600
      },
      "meetingGroup": {
        "name": "Hengsrud vinkjeller"
      },
      "paragraph": "Offl. § 14",
      "title": "Skal vi ha fest på lørran?",
      "description": "Dersom vi skal ha fest på lørran må vi ha et sted å ha det",
      "decision": "Vi har det hos Tore"
    },
    "base64": "..."
  }
}
```
