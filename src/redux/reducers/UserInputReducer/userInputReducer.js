const initialState = {
    park: '',
    day: 0,
    month: '',
    rideType: '',
    expressPass: false,
    parkHopperPass: false,
    selectedRides: []
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const resetFields = () => {
    return {
        type: RESET_FIELDS
    }
}

export default function userInputReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_STATE:
            console.log(payload)
            return {
                ...state,
                ...payload
            };
        case RESET_FIELDS:
            return {
                ...state
            }
        default:
            return state;
    }
}