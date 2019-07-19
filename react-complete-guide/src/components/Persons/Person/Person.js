import React, { Component, Fragment } from 'react';

import Auxilary from '../../../hoc (higher order component)/Auxilary';
import withClass from '../../../hoc (higher order component)/withClass';
import classes from "./Person.module.css";

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Auxilary>
                <p
                    onClick={this.props.click}
                    cursor='pointer'>
                    I'm {this.props.name} and I am {this.props.age} years old!
            </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxilary>
        );
    }

}

export default withClass(Person, classes.Person);