const Storage = require('../models/Storage')
const crypt = require('../util/crypt')

module.exports = async (req, res, next) => {
  try {
    const { id, encryption_key, value } = req.body

    // Some basic tests
    if (!id) throw { message: 'no id provided' }
    if (!encryption_key) throw { message: 'no encryption_key provided' }
    if (!value) throw { message: 'no value provided' }

    // Check to see if it already exists
    // If exist throw error
    const item = await Storage.findOne({ id })
    if (item) throw { message: 'item already exists' }
    
    // Check data is JSON serialisable
    let data;
    try {
      data = JSON.stringify(value);
    } catch (err) {
      throw { message: 'value is not JSON serialisable'}
    }
    
    // Create entry
    const encrypted_data = crypt.encrypt({ key: encryption_key, data })

    // Save entry
    const newItem = await Storage.create({ id, value: encrypted_data })

    // Return newly saved object
    res.json(newItem)
  } catch (err) {
    next(err)
  }
}
