import { FETCH } from "./types";

const SERVER_URL = '';

export const myAction = () => dispatch => {
    // check if this is being called
    console.log("happening");
    fetch(SERVER_URL, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: FETCH,
                payload: data
        }));
};