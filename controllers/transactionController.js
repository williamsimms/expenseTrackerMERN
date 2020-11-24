//@ desc Get all transcations
//@ route GET /api/v1/transactions
//@ access Public

const getTransactions = (req, res) => {
  res.send('Get Transactions')
}

//@ desc Add transcations
//@ route POST /api/v1/transactions
//@ access Public

const addTransaction = (req, res) => {
  res.send('Get Transactions')
}

//@ desc Deletetranscations
//@ route GET /api/v1/transactions:id
//@ access Public

const deleteTransaction = (req, res) => {
  res.send('Get Transactions')
}

exports.getTransactions = getTransactions
exports.addTransaction = addTransaction
exports.deleteTransaction = deleteTransaction
