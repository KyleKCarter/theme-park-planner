import React from 'react';
import './styles/login-signup.scss';

const Login_Signup = () => {
    return(
        <div className='authentication'>
            <section className='sign_up'>
                <h1>Sign Up</h1>
            </section>
            <section className='log_in'>
                <h1>Log In</h1>
            </section>
        </div>
    )
}

export default Login_Signup;