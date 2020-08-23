const { Schema, model } = require('mongoose')

const schema = new Schema({
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    timestamps: { createdAt: 'created_at' }
})

module.exports = model('Message', schema)
