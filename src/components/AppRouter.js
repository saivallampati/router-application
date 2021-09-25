import React from 'react';
import { useContext } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from '../Pages/About';
import SignIn from '../Pages/SignIn';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import globalContext from '../context/globalContext';

const AppRouter = () => {
    const {
        store: { isAuthenticated }
    } = useContext(globalContext)

    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route
                        path="/about"
                        render={() => <About isAuthenticated={isAuthenticated} />}
                    />
                    <Route
                        path="/signin"
                        exact
                        render={() => (
                            <SignIn
                                isAuthenticated={isAuthenticated}
                            />
                        )}
                    />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
