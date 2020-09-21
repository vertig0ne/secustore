const Storage = require('../models/Storage')
const crypt = require('../util/crypt')

module.exports = async (req, res, next) => {
  try {
    const { id, decryption_key } = req.query;

    // Basic checks
    if (!id) throw { message: 'no id provided' }
    if (!decryption_key) throw { message: 'no decryption_key provided'}

    // Get items from DB
    const items = await Storage.find({ id })
    const results = []

    // Loop each item, attempt to decrypt it and push to results
    items.forEach((item) => {
      try {
        const decrypted_data = crypt.decrypt({ key: decryption_key, encrypted_data: item.value })
        results.push({ id: item.id, value: JSON.parse(decrypted_data) })
      } catch (err) {
        console.log('An attempt was made to read data which did not succeed')
      }
    })

    res.json(results)
  } catch (err) {
    next(err)
  }
}
