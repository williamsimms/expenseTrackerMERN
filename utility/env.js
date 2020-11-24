const dotenv = require('dotenv')

dotenv.config({ path: 'config/config.env' })

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
}
