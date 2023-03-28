const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://uzmaa5080:Computing22!@cluster0.f7qsqej.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
