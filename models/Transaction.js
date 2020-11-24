const mongoose = require('mongoose')

const Schema = mongoose.Schema(
  {
    text: {
      trim: true,
      type: String,
      required: [true, 'Please add some text'],
    },
    amount: {
      type: Number,
      required: [true, 'Please add a positive or negative number'],
    },
  },
  { timestamp: true }
)

const Transaction = mongoose.model('Transaction', Schema)

module.exports = Transaction
