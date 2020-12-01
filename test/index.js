(async () => {
  const axios = require('axios').default
  const { writeFile } = require('fs').promises
  const { join } = require('path')

  const { data: { data } } = await axios.post('http://localhost:7071/api/generate', {
    system: 'minelev',
    template: 'varsel-fag',
    language: 'nn',
    data: {
      preview: true,
      _id: '5fbd76e831e7a9203abc56ea',
      created: {
        timestamp: 1606252264318,
        createdBy: 'tes0101'
      },
      modified: [
        {
          timestamp: 1606252264318,
          modifiedBy: 'tes0101'
        }
      ],
      type: 'varsel',
      variant: 'fag',
      student: {
        username: 'bra2001',
        name: 'Brage Dahl',
        firstName: 'Brage',
        lastName: 'Dahl'
      },
      content: {
        year: '2020/2021',
        period: {
          id: 1,
          nb: 'Halvårsvurdering 1. termin',
          nn: 'Halvårsvurdering 1. termin',
          en: '1st term half-yearly assessment'
        },
        classes: [
          {
            id: 'TESVS:TEST/201NOR1208',
            nb: 'Norsk hovedmål, skriftlig',
            nn: 'Norsk hovudmål, skriftleg',
            en: 'Norwegian as 1st lang, written'
          },
          {
            id: 'TESVS:TEST/201NOR1209',
            nb: 'Norsk hovedmål, muntlig',
            nn: 'Norsk hovudmål, muntlig',
            en: 'Norwegian as 1st lang, plural'
          },
          {
            id: 'TESVS:TEST/201NOR1209',
            nb: 'Norsk hovedmål, muntlig',
            nn: 'Norsk hovudmål, muntlig',
            en: 'Norwegian as 1st lang, plural'
          }
        ],
        reasons: [
          {
            id: 1,
            nb: 'Du har manglende vurderingsgrunnlag',
            nn: 'Du har manglande vurderingsgrunnlag',
            en: 'You have a lack of assessments'
          },
          {
            id: 2,
            nb: 'Du har manglende vurderingsgrunnlag',
            nn: 'Du har manglande vurderingsgrunnlag',
            en: 'You have a lack of assessments'
          }
        ]
      },
      teacher: {
        username: 'tes0101',
        name: 'Testine Testen',
        firstName: 'Testine',
        lastName: 'Testen'
      },
      school: {
        id: 'TESVS',
        name: 'Testen videregående skole',
        shortName: 'Testen vgs'
      },
      isEncrypted: false,
      status: [
        {
          status: 'queued',
          timestamp: 1606252264318
        }
      ],
      isQueued: true
    }
  })

  const buffer = Buffer.from(data.base64, 'base64')
  await writeFile(join(__dirname, '/test.pdf'), buffer)
})()
