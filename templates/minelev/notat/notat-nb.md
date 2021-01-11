---
definition: notatmal
language: nb
watermark: {{#if preview}} true {{else}} false {{/if}}
from: {{ teacher.name }}
info:
  sector: {{ school.name }}
  our-date: {{ isoDate created.timestamp }}
  our-caseworker: {{ teacher.name }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
---

# Lærernotat - {{ student.name }}

{{ content.note }}
