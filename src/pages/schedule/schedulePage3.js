import React from 'react';

const Schedule_Page_3 = (props) => {

    let newSchedule = () => {
        props.history.push('/schedule')
    }

    return (
        <div>
            <h1>Results</h1>
            <br/>
            <br/>
            <br/>
            <main>
                <p>Day Schedule will go here</p>
            </main>
            <br/>
            <br/>
            <br/>
            <button onClick={newSchedule}>New Schedule</button>
        </div>
    )
}

export default Schedule_Page_3