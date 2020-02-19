import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import './styles/schedulePage2.scss'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { updateState, updateCrowdLevel, updateSelectedRides } from './../../redux/reducers/UserInputReducer/userInputReducer';

const Schedule_Page_2 = (props) => {
    const [rides, setRides] = useState([])
    // const [selectedRides, addSelectedRides] = useState([])
    const park = useSelector(state => state.userInputReducer.park)
    const expressPass = useSelector(state => state.userInputReducer.expressPass)
    const parkHopperPass = useSelector(state => state.userInputReducer.parkHopperPass)
    const selectedRides = useSelector(state => state.userInputReducer.selectedRides)
    const crowdLevel = useSelector(state => state.userInputReducer.crowdLevel)
    const rideTypes = useSelector(state => state.userInputReducer.rideTypes)

    //similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //update the rides on load
        axios
            .get(`/${park}Times${crowdLevel}`)
            .then(res => {
                setRides(res.data)
            })
            .catch(error => console.log(error))
    }, [park, crowdLevel])

    let handleChange = (e) => {
        props.updateState({ [e.target.name]: e.target.value })
    }


    let selectRideType = (e) => {
        props.updateState({ rideTypes: [...rideTypes, e.target.value]})
    }


    let selectRide = (ride) => {
        props.updateState({ selectedRides: [...selectedRides, ride] })
    }


    let removeRide = (index) => {
        props.updateSelectedRides(index)
    }


    let next = () => {
        props.history.push('/schedule3')
    }


    const mappedRides = rides.map((val, index) => {
        const { ride, ride_img, ride_type } = val;
        return (
            <div key={index} className='ride_card'>
                <img src={ride_img} alt="ride_image" />
                <h1>{ride}</h1>
                <h2>Type: {ride_type}</h2>
                <button onClick={() => selectRide(ride)}>Select</button>
            </div>
        )
    })

    const mappedSelectedRides = selectedRides.map((val, index) => {
        return (
            <div key={index} className='listOfSelectedRides'>
                <ul>
                    <li>{val}</li>
                    <button onClick={() => removeRide(index)}>X</button>
                </ul>
            </div>
        )
    })


    return (
        <div className='schedulePage2'>
            <h2>Step 2</h2>
            <Link to='/schedule'><button>Back</button></Link>
            <section className='expressPass'>
                <h5>Express/Fast Pass Available?</h5>
                <select name="expressPass" value={expressPass} onChange={handleChange}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
            </section>
            <section className='parkHopperPass'>
                <h5>Park Hopper Pass?</h5>
                <select name="parkHopperPass" value={parkHopperPass} onChange={handleChange}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
            </section>
            <section className='rideTypes'>
                <h5>Select Types of Rides. (optional)</h5>
                <div>
                    <input type="checkbox" name='rideTypes' value='Thriller' onChange={selectRideType}/><p>Thriller</p>
                </div>
                <div>
                    <input type="checkbox" name='rideTypes' value='4D & 3D' onChange={selectRideType} /><p>4D & 3D</p>
                </div>
                <div>
                    <input type="checkbox" name='rideTypes' value='Kids' onChange={selectRideType} /><p>Kids</p>
                </div>
                <div>
                    <input type="checkbox" name="rideTypes" value='Water' onChange={selectRideType} /><p>Water</p>
                </div>
            </section>
            <h5>Select the rides in which you would like to ride.</h5>
            <div className='selectedRides'>
                <h6>Selected rides:</h6>
                <div>
                    {mappedSelectedRides}
                </div>
            </div>
            <section className='rides_section'>
                {mappedRides}
            </section>
            <button onClick={next}>Next</button>
        </div>
    )
}

const mapStateToProps = state => {
    const { park, expressPass, parkHopperPass, selectedRides, crowdLevel, rideTypes } = state.userInputReducer
    return {
        park: park,
        expressPass: expressPass,
        parkHopperPass: parkHopperPass,
        selectedRides: selectedRides,
        crowdLevel: crowdLevel,
        rideTypes: rideTypes
    }
}


export default connect(mapStateToProps, {
    updateState,
    updateCrowdLevel,
    updateSelectedRides
})(Schedule_Page_2);