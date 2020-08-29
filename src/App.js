import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./components/Login/Login";
import TrackApp from "./components/Tracks/TrackApp";
import Register from "./components/Login/Register";

import { getLoggedIn } from "./store/slices/user";

function App() {
    const isLoggedIn = useSelector(getLoggedIn);

    if(!isLoggedIn) {
        return (
            <main className="login" role="main">
                <div className="container d-flex flex-column justify-content-center vh-100">
                    <Switch>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </main>
        );
    } else {
        return (
            <TrackApp />
        )
    }
}

export default App;
