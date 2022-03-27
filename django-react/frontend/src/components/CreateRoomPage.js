import React, { Component } from "react";

const CreateRoomPage = ({ name }) => {
    return(
        <div>
            <h2>Bjr {name ? name : "World"}</h2>
        </div>
    )
}

export default CreateRoomPage