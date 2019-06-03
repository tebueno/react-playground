import React, { Component } from 'react';
import './App.css';
import Button from './components/button.js';
import Input from './components/inputField.js';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <Input value={ this.props.input }/>
        <Button value={ this.props.value1 } />
        <Button value={ this.props.value2 } />
        <div>{ this.props.input }</div>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    input: state.reducerApp.input,
    value1 : state.reducerApp.submitBtnValue,
    value2 : state.reducerApp.cancelBtnValue
  }
}

const mapDispatchToProps = () => { }

export default connect(mapStateToProps, mapDispatchToProps)(App);
