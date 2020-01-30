import React from 'react'
import {Switch, Route} from 'react-router-dom'

//pages
import Home from './pages/home'
import About from './pages/about'
import Login_Signup from './pages/login-signup';
import Schedule from './pages/schedule';

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} path='/about' />
        <Route component={Login_Signup} path='/authentication' />
        <Route component={Schedule} path='/schedule' />
    </Switch>
)