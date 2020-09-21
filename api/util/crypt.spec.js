const crypt = require('./crypt')

const testSecret = 'myTotalySecretKey'
const testData = 'bacon'

describe("crypt", () => {

  it("can encrypt and decrypt", () => {
    const encryptedString = crypt.encrypt({key: testSecret, data: testData})
    const decryptedString = crypt.decrypt({key: testSecret, encrypted_data: encryptedString})

    expect(decryptedString).toEqual(testData)
  })

})
