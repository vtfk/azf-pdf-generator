---
definition: motereferatmal
language: nb
watermark: {{#if preview}} true {{else}} false {{/if}}
info:
  sector: {{ meetingGroup.name }}
  our-date: {{ isoDate created.timestamp }}
  our-caseworker: {{ caseResponsible.name }}
  paragraph: {{ paragraph }}
---

# {{ title }}

## Beskrivelse

{{ description }}

## Beslutning

{{ decision }}
