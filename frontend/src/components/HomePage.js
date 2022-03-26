import React, { Component } from "react";

const HomePage = ({ name }) => {
    return(
        <div>
            <h2>Bjr {name ? name : "World"}</h2>
        </div>
    )
}

export default HomePage