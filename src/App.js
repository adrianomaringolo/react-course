import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// start the name with Capital letter so React will understand it as a custom component, not a html tag

class App extends Component {
  state = {
    persons: [
      { name: "Luizinho", age: 8 },
      { name: "Huguinho", age: 6 },
      { name: "Zezinho", age: 7 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({ persons: [
      { name: newName, age: 8 },
      { name: "Huguinho", age: 6 },
      { name: "Zezinho", age: 10 }
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({ persons: [
      { name: "Luizinho", age: 8 },
      { name: event.target.value, age: 6 },
      { name: "Zezinho", age: 10 }
    ]});
  }

  render() {
    // inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('NOVO NOME')}>Switch Name</button>
        <Person 
          click={this.switchNameHandler.bind(this, 'NOVO NOME!!!')}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My hobbies are reading and drawing</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

    /* return React.createElement('div', { className: 'App' },
      React.createElement('h1', null, 'Hi, I\'m a React App!!')); */
  }
}

export default App;
