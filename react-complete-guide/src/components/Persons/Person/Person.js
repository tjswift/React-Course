import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

import Auxilary from '../../../hoc (higher order component)/Auxilary';
import withClass from '../../../hoc (higher order component)/withClass';
import classes from "./Person.module.css";

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }
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
                    ref={(inputEl) => { this.inputElement = inputEl }}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxilary>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);