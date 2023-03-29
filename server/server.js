const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
var cors = require('cors');

//database connection:
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

var db = mongoose.connection;
db.on('error', () => console.log('error connecting to dB'));
db.once('open', () => console.log('connected to db'));

//post connection: and inserting into databse

app.post('/submit', (req, res) => {
  var client_name = req.body.client_name;
  var client_email = req.body.client_email;
  var client_phone = req.body.client_phone;
  var client_message = req.body.client_message;

  var data = {
    client_name: client_name,
    client_email: client_email,
    client_phone: client_phone,
    client_message: client_message,
  };
  db.collections('Clients').insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log('Record inserted successfully');
  });
  return res.redirect('ClientSuccess.jsx');
});

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
});
const Client = mongoose.model('Client', clientSchema);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('port running: 3000');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('src'));

app.get('/', (req, res) => {
  res.set({
    'Allow-access-Allow-Origin': '*',
  });
  res.send('Hello World');
});

app.post('/submit', (req, res) => {
  const client = new Client({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });

  client.save((err) => {
    if (err) {
      console.log(err);
      res.send('Error saving client');
    } else {
      res.send('Client saved successfully');
    }
  });
});
