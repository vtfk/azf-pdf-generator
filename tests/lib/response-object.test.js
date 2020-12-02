const getResponseObject = require('../../lib/get-response-object')

describe('Response Object tests', () => {
  it('loads method correctly', () => {
    expect(typeof (getResponseObject)).toBe('function')
  })

  it('returns a proper response object for objects', () => {
    const response = { hello: 'world' }
    const azureResponse = {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        data: response
      }
    }

    expect(getResponseObject(response)).toEqual(azureResponse)
  })

  it('returns a proper response object for arrays', () => {
    const response = [{ hello: 'world' }, { hello: 'there' }]
    const azureResponse = {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        data: response,
        count: 2
      }
    }

    expect(getResponseObject(response)).toEqual(azureResponse)
  })

  it('returns correct default status code', () => {
    const response = getResponseObject({})
    expect(response.status).toBe(200)
  })

  it('returns correct status code when provided', () => {
    const response = getResponseObject({}, 500)
    expect(response.status).toBe(500)
  })
})
