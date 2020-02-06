import React from 'react';
import {useSelector, connect} from 'react-redux'
import {updateState} from './../../redux/reducers/UserInputReducer/userInputReducer'

const Schedule_Page_2 = (props) => {

    const rideType = useSelector(state => state.userInputReducer.rideType)
    const expressPass = useSelector(state => state.userInputReducer.expressPass)
    const parkHopperPass = useSelector(state => state.userInputReducer.parkHopperPass)

    let handleChange = (e) => {
        props.updateState({ [e.target.name]: e.target.value })
    }

    let back = () => {
        props.history.goBack()
    }

    let submit = () => {
        props.history.push('/schedule3')
    }

    return (
        <div>
            <h1>Page 2</h1>
            <br/>
            <br/>
            <p>Ride Type:</p>
            <input type="radio" name='rideType' value='Thriller' /> Thriller <br/>
            <input type="radio" name="rideType" value='3D & 4D' /> 3d & 4D <br/>
            <input type="radio" name="rideType" value='Kids' /> Kids <br/>
            <input type="radio" name="rideType" value='Water' /> Water <br/>
            <input type="radio" name='rideType' value='Show' /> Show <br/>
            <br/>
            <br/>
            <p>Express/Fast Pass Available?</p>
            <select name="expressPass" value={expressPass} onChange={handleChange}>
                <option value="false">False</option>
                <option value="true">True</option>
            </select>
            <br/>
            <br/>
            <p>Park Hopper Pass?</p>
            <select name="parkHopperPass" value={parkHopperPass} onChange={handleChange}>
                <option value="false">False</option>
                <option value="true">True</option>
            </select>
            <br/>
            <br/>
            <button onClick={back}>Back</button>
            <button onClick={submit}>Get Schedule</button>
        </div>
    )
}

let mapStateToProps = state => {
    const {rideType, expressPass, parkHopperPass} = state.userInputReducer
    return {
        rideType: rideType,
        expressPass: expressPass,
        parkHopperPass: parkHopperPass
    }
}

export default connect(mapStateToProps, {
    updateState
})(Schedule_Page_2);