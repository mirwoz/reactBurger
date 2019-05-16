import React, { Component } from "react";




const Burger = (props) => {
    let { name, devoured, id, _handleClick } = props;
    return (
        <div className="App">
            <br></br>
            <h3>{id}</h3>
            <button id={id} onClick={(e) => props._handleClick(e)}>{name}</button> is {devoured ? "" : "not"} devoured...
            {/* <button className="remove">remove {name}</button> */}
        </div>
    )

}

export default Burger;