import React from 'react';
import { connect } from 'react-redux';
import * as dispatcher from '../actions/index';

const Input = (props) => {
    return (
        <input
        onChange={(event) => props.handleChange(event.target.value)}
        value={props.input}
        ></input>
    );
};

const mapStateToProps = () => { }

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => {
            dispatch(dispatcher.handleChange(value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);