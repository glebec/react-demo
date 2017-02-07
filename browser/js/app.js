// const React = require('react');
// const reactDOM = require('react-dom');
import reactDOM from 'react-dom';
import React from 'react';
import students from './students';
import axios from 'axios';

/*const generateLi = (id) => (
  <li>Item {id}</li>
);

const Item = (props) => (
  <li>Item {props.id} is {props.adjective || 'boring'}</li>
);

const ListOfItems = (props) => {
  const lis = props.nums
  .map(num => <Item key={num} id={num} adjective="neato!" />);

  return (
    <div>
      <h2>Really neat things</h2>
      <ul>
        { lis }
      </ul>
    </div>
  );
}*/

/*function generateLi (id) {
  return (
    <li>
      Item {id}
    </li>
  );
}*/

/*const name = 'Gabriel';
// { [1, 2, 3].map(num => Item({ id: num, adjective: 'COOL!' })) }
// { [1, 2, 3].map(num => <Item id={num} adjective="neato!" />) }
const component = (
  <div>
    <h1>Hello, {2 + 2 + name}</h1>
    <ListOfItems nums={[1, 2, 3]} />
  </div>
);*/

const Student = props => {
  const name = props.student.name.toUpperCase();
  return (
    <div className="student">
      <h2 style={{ color: 'blue', fontStyle: 'italic' }}>{ name }</h2>
      <p>Member of House { props.student.house }</p>
      <p>SPECIALTY: { props.student.specialty }</p>
    </div>
  );
};

class Students extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {}
    };
  }

  componentWillMount () {
    axios.get('/api/students')
    .then(res => {
      const students = res.data;
      this.setState({ students: students });
    })
    .catch(console.error.bind(console));
  }

  selectStudent (student) {
    this.setState({ selectedStudent: student });
    console.log(this.state);
  }

  render () {
    const students = this.state.students;
    const studentsExist = students.length;
    const selected = this.state.selectedStudent;
    return (
      <div>
        {
          !studentsExist
          ? <h3>Nobody goes to Hogwarts :(</h3>
          : <div>
            <h4>Selected Student:</h4>
            <pre>{[selected.name, selected.house]}</pre>
            <ul>
              {
                students.map(student => (
                  <div key={student.id} onClick={() => this.selectStudent(student)}>
                    <Student student={student} />
                  </div>
                ))
              }
            </ul>
          </div>
        }
      </div>
    );
  }

}

const component = (
  <div>
    <h1>Hogwarts Class Register</h1>
    <Students />
  </div>
);

const rootElement = document.querySelector('#app');

reactDOM.render(component, rootElement);
