import React from 'react';

import { Switch } from  'react-router-dom';
import Route from './Route';


import SignIn from '../pages/SignIn';
import Signup from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';


const Routes:React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/profile" component={Profile}/>
    </Switch>
)


export default Routes;