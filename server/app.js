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

// /**
//  * Demo: server-side rendering (in a badly-done manual way).
//  * For real SSR we would use tools that convert a react object
//  * tree (aka "virtual DOM") to HTML markup.
//  */

// const react = require('react');

// const span = react.createElement('span');
// const h1 = react.createElement('h1', { className: 'cool' }, [span, span]);
// const div = react.createElement('div', null, [h1]);

// function traverse (reactElem, htmlStr = '') {
//   htmlStr += `<${reactElem.type}>`;
//   Array.from(reactElem.props.children || []).forEach(child => {
//     htmlStr = traverse(child, htmlStr);
//   });
//   htmlStr += `</${reactElem.type}>`;
//   return htmlStr;
// }

// const html = traverse(div);
// console.log(html);
