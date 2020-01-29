import React from 'react';
import "./../styles/header.scss"

function Header() {
    return (
        <div>
            <header className='header'>
                <h1>Theme Park Guide</h1>
                <ul className='navBar'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Parks</li>
                    <li>LogIn/SignUp</li>
                </ul>
            </header>
        </div>
    )
}

export default Header;