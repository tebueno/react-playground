/* eslint-disable react/button-has-type */
import React from 'react'
import { connect } from 'react-redux'
import * as dispatcher from '../actions/index'

const Button = (props) => {
  return (
    <button
      onClick={() => props.btnClicked(props.value)}
      value={props.value}
    >
      {props.value}

    </button>
  )
}

const mapStateToProps = () => { }

const mapDispatchToProps = (dispatch) => {
  return {
    btnClicked: (value) => {
      dispatch(dispatcher.btnClicked(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
