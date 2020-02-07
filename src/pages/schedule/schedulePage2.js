import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import './styles/schedulePage2.scss'
import axios from 'axios';
import { updateState } from './../../redux/reducers/UserInputReducer/userInputReducer';

const Schedule_Page_2 = (props) => {
    const [rides, setRides] = useState([])
    // const [selectedRides, addSelectedRides] = useState([])
    const park = useSelector(state => state.userInputReducer.park)
    const expressPass = useSelector(state => state.userInputReducer.expressPass)
    const parkHopperPass = useSelector(state => state.userInputReducer.parkHopperPass)
    const selectedRides = useSelector(state => state.userInputReducer.selectedRides)

    //similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //update the rides on load
        axios
            .get(`/${park}TimesModerate`)
            .then(res => {
                setRides(res.data)
            })
            .catch(error => console.log(error))
    }, [park])


    let handleChange = (e) => {
        props.updateState({ [e.target.name]: e.target.value })
    }


    let selectRide = (ride) => {
        props.updateState({ selectedRides: [...selectedRides, ride] })
    }


    let back = () => {
        props.history.goBack()
    }


    let submit = () => {
        props.history.push('/schedule3')
    }


    const mappedRides = rides.map((val, index) => {
        const { ride, ride_img, ride_type } = val;
        return (
            <div key={index} className='ride_card'>
                <img src={ride_img} alt="ride_image" />
                <h1>{ride}</h1>
                <h2>{ride_type}</h2>
                <button onClick={() => selectRide(ride)}>Select</button>
            </div>
        )
    })

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
        <div className='schedulePage2'>
            <h2>Step 2</h2>
            <button onClick={back}>Back</button>
            <section className='expressPass'>
                <p>Express/Fast Pass Available?</p>
                <select name="expressPass" value={expressPass} onChange={handleChange}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
            </section>
            <section className='parkHopperPass'>
                <p>Park Hopper Pass?</p>
                <select name="parkHopperPass" value={parkHopperPass} onChange={handleChange}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
            </section>
            <h3>Select the rides in which you would like to ride.</h3>
            <div className='selectedRides'>
                <p>Selected rides:</p>
                <div>
                    {mappedSelectedRides}
                </div>
            </div>
            <section className='rides_section'>
                {mappedRides}
            </section>
            <button onClick={submit}>Get Schedule</button>
        </div>
    )
}


let mapStateToProps = state => {
    const { rideType, expressPass, parkHopperPass, park, selectedRides } = state.userInputReducer
    return {
        rideType: rideType,
        expressPass: expressPass,
        parkHopperPass: parkHopperPass,
        park: park,
        selectedRides: selectedRides
    }
}


export default connect(mapStateToProps, {
    updateState
})(Schedule_Page_2);