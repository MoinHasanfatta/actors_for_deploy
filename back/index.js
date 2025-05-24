const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const actorRoutes = require('./routes/actors')
const app = express()
require('dotenv').config();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5001
const mongoURI = process.env.MONGO_URI

// MongoDB Connection
mongoose.connect(mongoURI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

app.use('/actors', actorRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to actors list')
})

app.listen(PORT, () => {
    console.log('Welcome to star list')
})
