const { Schema, model } = require('mongoose')

const schema = new Schema({
    username: { type: String, required: true, unique: true },
    timestamps: { createdAt: 'created_at' }
})

module.exports = model('User', schema)
