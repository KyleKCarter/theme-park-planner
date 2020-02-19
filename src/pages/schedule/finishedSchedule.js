import React from 'react';
import {Link} from 'react-router-dom'

import ScheduleFormula from './../../components/schedule_formula'

const Schedule = (props) => {
    return (
        <div>
            <h1>Your Ride Schedule</h1>
            <ScheduleFormula />
            <button>Save Schedule</button>
            <Link to='/schedule'><button>New Schedule</button></Link>
        </div>
    )
}

export default Schedule;