import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutputs/UserOutputs'
import UserInputs from './UserInputs/UserInput';

class App extends Component {
  state = {
    username: "nard-dog"
  }

  inputChangeEvent = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ASSIGNMENT ONE</h1>
        <UserInputs 
          change={this.inputChangeEvent}
          currentName={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
