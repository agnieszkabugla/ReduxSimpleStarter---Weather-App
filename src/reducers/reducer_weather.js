import { FETCH_WEATHER } from '../actions/index'; 

export default function (state = [], action) {
    // console.log("Action received", action);
    switch (action.type) {
    case FETCH_WEATHER:
        // now we need to create a new array 
        // beware not to manipulate the state (with the existing array)!!! 
        return [ action.payload.data, ...state ];
        // the line above is the same as this below 
        // return state.concat([action.payload.data]); 
    }
    return state; 
}