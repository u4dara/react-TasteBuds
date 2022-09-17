const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/outlets', require('./Routes/outlets'))

app.listen(port, () => console.log(`Server started on Port ${port}`))