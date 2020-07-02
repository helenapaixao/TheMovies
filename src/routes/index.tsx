import React from 'react';

import { Switch } from  'react-router-dom';
import Route from './Route';


import SigIn from '../pages/SignIn';
import SigUp from '../pages/SignUp';



const Routes:React.FC = () => (
    <Switch>
        <Route path="/" exact component={SigIn}/>
        <Route path="/sigup" component={SigUp}/>
    </Switch>
)


export default Routes;