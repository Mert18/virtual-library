import React from 'react';

import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="header__items">

                <div className="header__items__nav">
                    <NavLink exact to="/" activeClassName="selected">
                        <div className="header__items__logo">
                            <a href="/"><h1>virtual library</h1></a>
                        </div>
                    </NavLink>
                </div>

                <div className="header__items__user">
                    <NavLink exact to="/signin" activeClassName="selected">Sign In</NavLink>
                    <NavLink exact to="/signup" activeClassName="selected">Sign Up</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header