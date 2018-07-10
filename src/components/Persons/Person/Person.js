import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);

    this.inputElementRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    // if (this.props.position === 0) {
    //   this.inputElementRef.current.focus();
    // }
  }

  focus() {
    this.inputElementRef.current.focus();
  }


  render() {
    console.log('[Person.js] Inside render');
    return (
      <Aux>
        <p onClick={ this.props.click }>My name is { this.props.name } and my age is { this.props.age } !</p>
        <p>{ this.props.children }</p>
        <input ref={ this.inputElementRef } type="text" onChange={ this.props.changed } value={ this.props.name }/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);