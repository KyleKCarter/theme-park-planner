import axios from 'axios'

const initialState = {
    park: '',
    day: 0,
    month: '',
    crowdLevel: '',
    expressPass: false,
    parkHopperPass: false,
    rideTypes: [],
    ridesFromRideType: [],
    selectedRides: [],
    loading: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const UPDATE_CROWD_LEVEL = 'UPDATE_CROWD_LEVEL';
const UPDATE_RIDE_TYPES = 'UPDATE_RIDE_TYPES';
const UPDATE_SELECTED_RIDES = 'UPDATE_SELECTED_RIDES';

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

export const updateCrowdLevel = (month) => {
    return {
        type: UPDATE_CROWD_LEVEL,
        payload: axios.get(`/crowd_levels/${month}`)
    }
}

export const updateRideTypes = (park, crowd_level, rideTypes) => {
    return {
        type: UPDATE_RIDE_TYPES,
        payload: axios.get(`/selected_ride_type_${park}_${crowd_level}/search?ride_type1=${rideTypes[0]}&ride_type2=${rideTypes[1]}&ride_type3=${rideTypes[2]}&ride_type4=${rideTypes[3]}`)
    }
}

export const updateSelectedRides = (index) => {
    return {
        type: UPDATE_SELECTED_RIDES,
        payload: index
    }
}

export default function userInputReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_STATE:
            console.log(state)
            console.log(payload)
            return {
                ...state,
                ...payload
            };
        case RESET_FIELDS:
            return {
                ...state
            };
        case `${UPDATE_CROWD_LEVEL}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_CROWD_LEVEL}_FULFILLED`:
            return {
                ...state,
                loading: false,
                crowdLevel: payload.data[0].crowd_level
            };
        case `${UPDATE_RIDE_TYPES}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_RIDE_TYPES}_FULFILLED`:
            console.log(payload.data)
            return {
                ...state,
                loading: false,
                ridesFromRideType: payload.data
            }
        case UPDATE_SELECTED_RIDES:
            let ridesCopy = state.selectedRides;
            ridesCopy.splice(payload, 1)
            return {
                ...state,
                selectedRides: ridesCopy
            }
        default:
            return state;
    }
}