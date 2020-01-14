'use strict'

const { build } = require('../helper')

let app

beforeEach(() => {
  app = build()
})
afterEach(() => {
  app.close()
})

test('default root route', async () => {
  const res = await app.inject({
    url: '/',
  })

  expect(JSON.parse(res.payload)).toStrictEqual({ root: true })
})
