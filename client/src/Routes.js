import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Activate from './auth/Activate';
import Private from './core/Private';
import PrivateRoute from './auth/PrivateRoute';
import Admin from './core/Admin';
import AdminRoute from './auth/AdminRoute';
import Forgot from './auth/Forgot';
import Reset from './auth/Reset';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/auth/password/forgot" component={Forgot} />
                <Route path="/auth/password/reset/:token" component={Reset} />
                <Route path="/auth/activate/:token" component={Activate} />
                <AdminRoute path="/admin" component={Admin} />
                <PrivateRoute path="/private" component={Private} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
