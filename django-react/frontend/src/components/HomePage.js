import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

const HomePage = ({ name }) => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <h2>This is home page.</h2>
                </Route>
                <Route path="/join">
                    <RoomJoinPage />
                </Route>
                <Route path="/create">
                    <CreateRoomPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default HomePage