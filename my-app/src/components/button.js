import React from 'react';

const Button = (props) => {
    return (
        <button
        onClick={props.clickHandler}
        value={props.value}
        >{props.value}</button>
    );
};

export default Button;