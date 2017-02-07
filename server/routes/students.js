'use strict';
/* eslint-disable new-cap */

const router = module.exports = require('express').Router();

let nextId = 4;

const students = [{
  id: 0,
  name: 'Harry Potter',
  house: 'Gryffindor',
  specialty: 'luck'
}, {
  id: 1,
  name: 'Hermione Granger',
  house: 'Gryffindor',
  specialty: 'brains'
}, {
  id: 2,
  name: 'Ron Weasley',
  house: 'Gryffindor',
  specialty: 'whining'
}, {
  id: 3,
  name: 'Draco Malfoy',
  house: 'Slytherin',
  specialty: 'antagonizing'
}];

const addStudent = studentData => {
  studentData.id = nextId++;
  students.push(studentData);
};

router.get('/', (req, res) => {
  // artificially slowed down to demo front-end statefulness
  setTimeout(() => {
    res.json(students);
  }, 2000);
});

router.get('/:id', (req, res) => {
  res.json(students[+req.params.id]);
});

router.post('/', (req, res) => {
  addStudent(req.body);
  res.json(req.body);
});
