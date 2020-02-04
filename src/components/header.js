import React from 'react';
import "./styles/header.scss"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className='header'>
                <Link to='/'><h1>Theme Park Guide</h1></Link>
                <ul className='navBar'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/schedule'><li>Schedule</li></Link>
                    <Link to='/authentication'><li>LogIn/SignUp</li></Link>
                </ul>
            </header>
        </div>
    )
}

export default Header;