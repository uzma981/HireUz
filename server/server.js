const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./clientuser');
const Job = require('./jobs');
const app = express();
const Apply = require('./applications');

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Set up routes
app.get('/submit', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.get('/jobs/:id', async (req, res) => {
  const jobId = req.params.id;
  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.post('/submit', async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const user = await User.create({ name, email, phone, message });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/jobs', async (req, res) => {
  const {
    jobTitle,
    datePosted,
    location,
    salary,
    employeeType,
    jobDescription,
    jobDuties,
    jobExperience,
  } = req.body;
  try {
    const job = await Job.create({
      jobTitle,
      datePosted,
      location,
      salary,
      employeeType,
      jobDescription,
      jobDuties,
      jobExperience,
    });
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/applications', async (req, res) => {
  const { jobId, candidate, applicationQs, CV, coverLetter } = req.body;
  try {
    const applications = await Apply.create({
      jobId,
      candidate,
      applicationQs,
      CV,
      coverLetter,
    });
    res.status(201).json(applications);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://uzmaa5080:Computing22!@cluster0.f7qsqej.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
