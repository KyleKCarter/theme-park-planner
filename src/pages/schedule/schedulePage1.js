import React from 'react';
import './styles/schedulePage1.scss'
// import { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { updateState } from './../../redux/reducers/UserInputReducer/userInputReducer'

const Schedule = (props) => {
    const park = useSelector(state => state.userInputReducer.park)
    const day = useSelector(state => state.userInputReducer.day)
    const month = useSelector(state => state.userInputReducer.month)

    let next = () => {
        props.history.push('/schedule2')
    }

    let handleChange = (e) => {
        props.updateState({ [e.target.name]: e.target.value })
    }

    return (
        <div className='schedulePage1'>
            <h2>Step 1</h2>
            <p>Will only set a Schedule from 9a.m. - 7p.m.</p>
            <main>
                <section className='selectPark'>
                    <p>Park:</p>
                    <select name='park' value={park} onChange={handleChange}>
                        <option value="--">--</option>
                        <option value="US">Universal Studios</option>
                        <option value="IOA">Islands of Adventure</option>
                        <option value="MK">Disney's Magic Kingdom</option>
                        <option value="HS">Disney's Hollywood Studios</option>
                        <option value="EC">Disney's Epcot</option>
                        <option value="AK">Disney's Animal Kingdom</option>
                    </select>
                </section>
                <span className='selectDay'>
                    <p>Day:</p>
                    <select name="day" value={day} onChange={handleChange}>
                        <option value="00">--</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </span>
                <section className='selectMonth'>
                    <p>Month & Year:</p>
                    <input type="month" value={month} name='month' onChange={handleChange} />
                </section>
            </main>
            <button onClick={next}>Next</button>
        </div>
    )
}

const mapStateToProps = state => {
    const { park, day, month } = state.userInputReducer
    return {
        park: park,
        day: day,
        month: month,
    }
}

export default connect(mapStateToProps, {
    updateState
})(Schedule);