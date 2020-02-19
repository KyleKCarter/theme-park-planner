import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, connect} from 'react-redux';
import {updateRideTypes} from '../../redux/reducers/UserInputReducer/userInputReducer'

const Schedule_Page_3 = (props) => {

    const park = useSelector(state=> state.userInputReducer.park)
    const crowdLevel = useSelector(state => state.userInputReducer.crowdLevel)
    const rideTypes = useSelector(state => state.userInputReducer.rideTypes)
    const selectedRides = useSelector(state => state.userInputReducer.selectedRides)

    useEffect(() => {
        props.updateRideTypes(park, crowdLevel, rideTypes)
    }, [])

    let newSchedule = () => {
        props.history.push('/your-schedule')
    }

    const mappedSelectedRides = selectedRides.map((val, index) => {
        return (
            <div key={index} className='listOfSelectedRides'>
                <ul>
                    <li>{val}</li>
                </ul>
            </div>
        )
    })

    return (
        <div>
            <h1>Review</h1>
            <Link to='/schedule2'><button>Back</button></Link>
            <br/>
            <br/>
            <br/>
            <main>
            <div className='selectedRides'>
                <h6>Review rides:</h6>
                <div>
                    {mappedSelectedRides}
                </div>
            </div>
            </main>
            <br/>
            <br/>
            <br/>
            <button onClick={newSchedule}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    const {park, crowdLevel, rideTypes, selectedRides} = state.userInputReducer
    return {
        park: park,
        crowdLevel: crowdLevel,
        rideTypes: rideTypes,
        selectedRides: selectedRides
    }
}

export default connect(mapStateToProps, {
    updateRideTypes
})(Schedule_Page_3)