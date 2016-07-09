import {FETCH_COMPANY} from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COMPANY:
            if(action.error) // most likely no data for that ticker
                return state;
            return [action.payload.data, ...state]; // new array with new data added in
    }
    return state;
}
