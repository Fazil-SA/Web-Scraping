require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 9000
const cors = require('cors')

const connectToDb = require('./config/db')
const userRouter = require('./routes/userRouter')

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRouter)

//DB Listen
connectToDb(() => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
    })
})

module.exports = app