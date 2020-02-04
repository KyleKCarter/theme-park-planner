import React from 'react'
import {Switch, Route} from 'react-router-dom'

//pages
import Home from './pages/home'
import About from './pages/about'
import Login_Signup from './pages/login-signup';

//schedule pages
import Schedule_Page_1 from './pages/schedule/schedulePage1';
import Schedule_Page_2 from './pages/schedule/schedulePage2';
import Schedule_Page_3 from './pages/schedule/schedulePage3';

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} path='/about' />
        <Route component={Login_Signup} path='/authentication' />
        <Route component={Schedule_Page_1} path='/schedule' />
        <Route component={Schedule_Page_2} path='/schedule2' />
        <Route component={Schedule_Page_3} path='/schedule3' />
    </Switch>
)