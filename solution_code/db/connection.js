// import mongoose
const mongoose = require('mongoose')

// database configuration 
const DATABASE_URL = 'mongodb+srv://dylansilverglate:PhU3Oh6Zrlgf1XKN@sei.dwh9fqs.mongodb.net/?retryWrites=true&w=majority'

// mongoose connect to url
mongoose.connect(DATABASE_URL)

// export mongoose 
module.exports = { mongoose }