const { mockRequest, mockResponse } = require('jest-mock-req-res')
const handler = require('./post')

const mongoose = require('mongoose');
const db = require('../helpers/db')

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("post", () => {

  it("post something", async () => {
    const body = { id: 'hello' , encryption_key: 'goodbye', value: { test: 'value' } }
    const req = mockRequest({ body })
    const res = mockResponse()
    const next = jest.fn()

    await handler(req, res, next)

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: 'hello' }))
  })

  it("will error no id", async () => {
    const body = { encryption_key: 'goodbye', value: { test: 'value' } }
    const req = mockRequest({ body })
    const res = mockResponse()
    const next = jest.fn()

    await handler(req, res, next)

    expect(next).toHaveBeenCalledWith(expect.objectContaining({ message: 'no id provided' }))
  })

  it("will error no key", async () => {
    const body = { id: 'hello', value: { test: 'value' } }
    const req = mockRequest({ body })
    const res = mockResponse()
    const next = jest.fn()

    await handler(req, res, next)

    expect(next).toHaveBeenCalledWith(expect.objectContaining({ message: 'no encryption_key provided' }))
  })

  it("will error no value", async () => {
    const body = { id: 'hello' , encryption_key: 'goodbye' }
    const req = mockRequest({ body })
    const res = mockResponse()
    const next = jest.fn()

    await handler(req, res, next)

    expect(next).toHaveBeenCalledWith(expect.objectContaining({ message: 'no value provided' }))
  })

})
