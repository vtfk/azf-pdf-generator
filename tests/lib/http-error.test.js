const HTTPError = require('../../lib/http-error')

describe('HTTPError tests', () => {
  it('loads correctly', () => {
    expect(typeof (HTTPError)).toBe('function')
  })

  const error = new HTTPError(500, 'Something is wrong!')

  it('should throw HTTPError', () => {
    const throwError = () => { throw error }
    expect(throwError).toThrow(HTTPError)
  })

  it('returns proper response object', () => {
    const response = {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        error: {
          statusCode: 500,
          message: 'Something is wrong!'
        }
      }
    }

    expect(error.toJSON()).toEqual(response)
  })

  const withInnerError = new HTTPError(500, 'Something is wrong!', { inner: 'error' })

  it('returns innerError when provided', () => {
    const response = {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        error: {
          statusCode: 500,
          message: 'Something is wrong!',
          innerError: { inner: 'error' }
        }
      }
    }

    expect(withInnerError.toJSON()).toEqual(response)
  })
})
