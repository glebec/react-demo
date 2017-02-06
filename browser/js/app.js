import students from './students';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './component';

const elements = students.map(student => {
  return (
    <Main name={student.name} key={student.id}/>
  );
});

const element = (
  <div>
    <p>Below is the Main component, rendered out:</p>
    {elements}
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);

// console.log('Hello World', students);
