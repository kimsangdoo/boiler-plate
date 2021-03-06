const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require('./models/User');

// application/x-www-form-urlencoded 형식으로 된 데이터를 분석해서 가져온다
app.use(bodyParser.urlencoded({extended:true}));
// application/json 형식으로 된 데이터를 분석해서 가져온다
app.use(bodyParser.json());

// MongoDB에서 만든 Database id, password를 mongoose 안에 넣는다
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', (req, res) => {
  // 회원가입할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다
  const user = new User(req.body);
  user.save((err, doc) => {
    if(err) return res.json({ success: false, err })
      return res.status(200).json({
        success: true
      });
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});