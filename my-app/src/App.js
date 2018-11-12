import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button.js';
import Input from './components/inputField.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      inputHandler: this.handleChange.bind(this),
      submitBtn: {
        value: 'Submit',
        clickHandler: this.submitBtnClick.bind(this)
      },
      cancelBtn: {
        value: 'Cancel',
        clickHandler: this.cancelBtnClick.bind(this)
      }
    };
  }

  submitBtnClick() {
    this.setState({
      submitBtn: {
        value: 'Submitted'
      }
    })
  }

  cancelBtnClick() {
    this.setState({
      cancelBtn: {
        value: 'Canceled'
      }
    })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Input {...this.state}/>
        <Button {...this.state.submitBtn} />
        <Button {...this.state.cancelBtn} />
        <div>{this.state.input}</div>
        </div>
    );
  }
}

export default App;
