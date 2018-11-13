import * as types from '../constants/ActionTypes';

export const btnClicked = (value) => {
    return {
        type: types.BTN_CLICKED,
        value: value
    }
}

export const handleChange = (value) => {
    console.log(value);
    return {
        type: types.TXT_INPUT,
        value: value
    }
  }