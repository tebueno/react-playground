import React from 'react';

const Input = (props) => {
    return (
        <input
        onChange={props.inputHandler}
        value={props.input}
        ></input>
    );
};

export default Input;