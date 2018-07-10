import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { 

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    this.lastPersonRef.current.focus();
  }

  render() {
    console.log('[Persons.js] Inside render');

    return this.props.persons.map((person, index) => {
      return <Person 
        position={index}
        name={person.name} 
        age={person.age}
        ref={this.lastPersonRef}
        key={person.id}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}/> 
    });
  }
}  

export default Persons;