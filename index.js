const express = require('express')
const app = express()
const port = 5000

// MongoDB에서 만든 Database id, password를 mongoose 안에 넣는다
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user:123@boilerplate.akotp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})