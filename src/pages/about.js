import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const About = () => {
    //Declaring a new state variable, which is called "times"
    const [januaryTimes, setTimes] = useState([]);

    let getJanuaryTimes = () => {
        axios
            .get('/api/IOAJanuaryTimesModerate')
            .then(res => {
                setTimes(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const mappedJanuary = januaryTimes.map((val, index) => {
        return (
            <div key={index}>
                <h1>{val.ride}</h1>
                <h4>{val.ride_type}</h4>
            </div>
        )
    })

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={getJanuaryTimes}>January Times</button>
            {mappedJanuary}
        </div>
    )
}

export default About;