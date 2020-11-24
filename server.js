const express = require('express')
const morgan = require('morgan')
const env = require('./utility/env')
const colors = require('colors')

const app = express()

if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.listen(env.PORT, () => {
  console.log(`Server is running in ${env.NODE_ENV} on port ${env.PORT}`.green.bold)
})
