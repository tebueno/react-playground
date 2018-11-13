import * as types from '../constants/ActionTypes.js';

const initialState = {
    input: '',
    submitBtnValue: 'Submit',
    cancelBtnValue: 'Cancel',
};


export const reducerApp = (state = initialState, action) => {

    switch (action.type) {

        case types.BTN_CLICKED:
            const value  = (action.value === 'Submit') ? { submitBtnValue: 'Submitted' } : { cancelBtnValue: 'Canceled' };
            return Object.assign({}, state, value);
        case types.TXT_INPUT:
            const input  = { input: action.value };
            console.log(action);
            return Object.assign({}, state, input);
        default:
            return Object.assign({}, state);

    }
}

