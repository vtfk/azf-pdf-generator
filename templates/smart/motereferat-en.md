---
definition: motereferatmal
language: en
watermark: {{#if preview}} true {{else}} false {{/if}}
info:
  sector: {{ meetingGroup.name }}
  our-date: {{ isoDate created.timestamp }}
  our-caseworker: {{ caseResponsible.name }}
  paragraph: {{ paragraph }}
---

# {{ title }}

## Description

{{ description }}

## Decision

{{ decision }}
