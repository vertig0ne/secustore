const Cryptr = require('cryptr');

const encrypt = ({ key, data }) => {
  const cryptr = new Cryptr(key)
  return cryptr.encrypt(data)
}

const decrypt = ({ key, encrypted_data }) => {
  const cryptr = new Cryptr(key)
  return cryptr.decrypt(encrypted_data)
}

module.exports = { encrypt, decrypt }
