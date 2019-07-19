import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc (higher order component)/withClass'
import Auxilary from '../hoc (higher order component)/Auxilary';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'dewfws', name: 'Tristen', age: 28 },
      { id: 'ouimj', name: 'Aleesha', age: 23 },
      { id: 'ouhds', name: 'Kelly', age: 50 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props)
  //   return state;
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldCOmponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {

      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    //const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };

  render() {
    console.log('[App.js] render')

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <Auxilary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (<Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} />) : null}
        {persons}
      </Auxilary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default withClass(App, classes.App);

