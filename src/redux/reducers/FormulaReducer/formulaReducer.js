import axios from 'axios';

const initialState = {
    loading: false,
    rides: []
}

const UPDATE_RIDES = 'UPDATE_RIDES'

export const updateRides = () => {
    return {
        type: UPDATE_RIDES,
        payload: axios.get(`/USTimes_nine_am`)
    }
}

export default function formulaReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case `${UPDATE_RIDES}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_RIDES}_FULFILLED`:
            console.log(state.rides)
            console.log(payload.data)
            return {
                ...state,
                rides: payload.data
            };
        default:
            return state;
    }
}