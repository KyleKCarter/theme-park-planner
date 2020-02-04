import React from 'react';
import { useState } from 'react';

const Schedule = () => {
    const [park, setPark] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState(0)

    console.log(park)
    console.log(month)
    console.log(day)
    return (
        <div>
            <h1>Schedule Page</h1>
            <p>Will only set a Schedule from 9a.m. - 7p.m.</p>
            <select name='park' onChange={(e) => setPark(e.target.value)}>
                <option value="--">--</option>
                <option value="Universal Studios">Universal Studios</option>
                <option value="Islands of Adventure">Islands of Adventure</option>
                <option value="Disney's Magic Kingdom">Disney's Magic Kingdom</option>
                <option value="Disney's Hollywood Studios">Disney's Hollywood Studios</option>
                <option value="Disney's Epcot">Disney's Epcot</option>
                <option value="Disney's Animal Kingdom">Disney's Animal Kingdom</option>
            </select>
            <input type="month" name='month' onChange={(e) => setMonth(e.target.value)} />
            <span>
                <select name="day" onChange={(e) => setDay(e.target.value)}>
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
        </div>
    )
}

export default Schedule;