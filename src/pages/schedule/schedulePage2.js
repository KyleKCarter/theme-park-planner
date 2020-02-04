import React from 'react';

const Schedule_Page_2 = (props) => {

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
            <br/>
            <button onClick={back}>Back</button>
            <button onClick={submit}>Get Schedule</button>
        </div>
    )
}

export default Schedule_Page_2;