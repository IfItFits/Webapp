//Module import
const express = require('express')
const bodyParser = require('body-parser')

//Custom import
const User = require('./routes/user')

//create express app
const app = express()

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'server is ready'
  })
})

app.use('/user', User);





app.listen(5000, () => console.log('Listening on port 5000'));