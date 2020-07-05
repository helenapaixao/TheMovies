import React from "react";

import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Signup from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Detail from "../pages/DetailMovie";
import Search from "../pages/Search";
import Favorites from '../pages/FavoriteMovie';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" isPrivate component={Dashboard} />
        <Route path="/detail/:type/:id+" isPrivate component={Detail} />
        <Route path="/profile" isPrivate component={Profile} />
        <Route path="/search/" isPrivate component={Search} />
        <Route path="/favorites/"  isPrivate component={Favorites} />
    </Switch>
);

export default Routes;
