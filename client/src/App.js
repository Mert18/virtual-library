import React, { useReducer, useEffect } from 'react';

import Home from './components/Home';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import './styles/main.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";




const App = () => {

    return (
        <Router>
            <div className="container">
                <header className="container__header">
                    <Header />
                </header>

                <main className="container__main">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App