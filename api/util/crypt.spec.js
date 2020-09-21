const Cryptr = require('cryptr')

const testSecret = 'myTotalySecretKey'
const testData = 'bacon'

describe("crypt", () => {

  it("can encrypt and decrypt data", () => {
    const cryptr = new Cryptr(testSecret);
    const encryptedString = cryptr.encrypt(testData)
    const decryptedString = cryptr.decrypt(encryptedString)

    expect(decryptedString).toEqual(testData)
  })

})
