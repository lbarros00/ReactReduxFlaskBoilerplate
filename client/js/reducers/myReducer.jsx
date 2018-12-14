import { FETCH } from "../actions/types";

const initialState = {
    myProperty: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH:
            return {
                myProperty: action.payload
            };
        default:
            return state;
    }
}