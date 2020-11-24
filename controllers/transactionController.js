const Transaction = require('../models/Transaction')

//@ desc Get all transactions
//@ route GET /api/v1/transactions
//@ access Public

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({})

    return res.send({
      success: true,
      count: transactions.length,
      data: transactions,
    })
  } catch (error) {
    res.status(500).send({ message: 'Server Error', success: false })
  }
}

//@ desc Add transactions
//@ route POST /api/v1/transactions
//@ access Public

const addTransaction = async (req, res) => {
  try {
    const { text, amount } = req.body

    const transaction = await Transaction.create(req.body)

    return res.status(201).send({ success: true, transaction })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message)
      return res.status(400).send({
        success: false,
        error: message,
      })
    } else {
      res.status(500).send({ message: 'Server Error', success: false })
    }
  }
}

//@ desc Delete transactions
//@ route GET /api/v1/transactions:id
//@ access Public

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)

    if (!transaction) {
      res.status(404).send({ success: false, error: 'No Transaction Found' })
    }

    await transaction.remove()

    return res.status(200).send({ success: true, data: {} })
  } catch (error) {
    res.status(500).send({ message: 'Server Error', success: false })
  }
}

exports.getTransactions = getTransactions
exports.addTransaction = addTransaction
exports.deleteTransaction = deleteTransaction
