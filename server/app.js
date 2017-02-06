'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const studentRouter = require('./routes/students');

const app = express();

// log req-res cycles
app.use(volleyball);

// parse bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// send API responses
app.use('/api/students', studentRouter);

// send home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'browser', 'index.html'));
});

// send bundle.js (and any other build artifacts)
app.use(express.static(path.join(__dirname, '..', 'build')));

// start server
const PORT = 3000;
app.listen(PORT, function () {
  console.log(`WinGARdium LeviOHsa at http://localhost:${PORT}`);
});
