require('dotenv').config()
const express = require('express')
const path = require('path');

const PORT = process.env.PORT || 5000
const cors = require('cors')

const connectToDb = require('./config/db')
const userRouter = require('./routes/userRouter')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)

// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
  

//DB Listen
connectToDb(() => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
    })
})

module.exports = app