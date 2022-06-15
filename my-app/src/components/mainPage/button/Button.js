import React from 'react';
import { NavLink } from "react-router-dom";
import Ms from "../mainStyle.module.css"

const Button = ({ path, text, func }) => {
    return (
        <div className={Ms.linkB}>
            <NavLink to={path} onClick={func}>
                {text}
            </NavLink>
        </div>
    );
};

export default Button;