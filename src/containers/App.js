import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from  '../components/Cockpit/Cockpit';

import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

// start the name with Capital letter so React will understand it as a custom component, not a html tag

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);

    this.state = {
      persons: [
        { id: '1', name: "Luizinho", age: 8 },
        { id: '2', name: "Huguinho", age: 6 },
        { id: '3', name: "Zezinho", age: 7 }
      ],
      showPersons: false,
      toogleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
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
    this.setState((prevState, props) => { // setState is async, using like this guarantees that the value is correct
      return {
        showPersons: !doesShow,
        toogleClicked: prevState.toogleClicked + 1
      }
    })
  }

  render() {
    console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }
    return (
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true })}}>Show persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        { persons }
      </Aux>
    );

    /* return React.createElement('div', { className: 'App' },
      React.createElement('h1', null, 'Hi, I\'m a React App!!')); */
  }
}

export default withClass(App, classes.App);
