import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

// start the name with Capital letter so React will understand it as a custom component, not a html tag

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Luizinho", age: 8 },
      { id: '2', name: "Huguinho", age: 6 },
      { id: '3', name: "Zezinho", age: 7 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id === id});

    const person = this.state.persons[personIndex];
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // makes a copy of the state array - the state should be imutable, changed only by setState
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}/> 
            }) 
          }
        </div> 
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1 >Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>I was created using create-react-app</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        { persons }
      </div>
    );

    /* return React.createElement('div', { className: 'App' },
      React.createElement('h1', null, 'Hi, I\'m a React App!!')); */
  }
}

export default App;
