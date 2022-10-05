const express = require('express');
const app = express();
require('dotenv').config(); 
const bodyParser = require("body-parser");
const accountAndTransactions=require('./routes/accountsAndTrandactionRoutes')



const port = 3000;

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use('/api', accountAndTransactions)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});


app.listen(process.env.PORT || 3000);
