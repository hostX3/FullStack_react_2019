import React from "react";

const Button = ({ type, clickHandler, label }) => {

    return (
        <button type={type} onClick={clickHandler}  >{ label }</button>
    );
};

export default Button;
