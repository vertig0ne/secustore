const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  value: { type: String, required: true },
  added_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Storage = mongoose.model('Storage', storageSchema);

module.exports = Storage;
