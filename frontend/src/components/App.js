import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoomPage from "./CreateRoomPage";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export const App = () => {
    return(
        <div>
          <HomePage name="Denis"/>
          <RoomJoinPage />
          <CreateRoomPage />
        </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);