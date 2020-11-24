const express = require('express')
const morgan = require('morgan')
const env = require('./utility/env')
const colors = require('colors')
const transactionsRoutes = require('./routes/transactionsRoutes')
const bodyParser = require('body-parser')
require('./config/db')

const app = express()

app.use(bodyParser.json())

if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use('/api/v1,transactions', transactionsRoutes)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(env.PORT, () => {
  console.log(`Server is running in ${env.NODE_ENV} mode on port ${env.PORT}`.green.bold)
})
