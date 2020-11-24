const mongoose = require('mongoose')
const env = require('../utility/env')

mongoose.connect(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
