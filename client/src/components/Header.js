import React from 'react';

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__items">
                <div className="header__items__search">
                    <h2>#</h2>
                    <input type="text" placeholder="Search User by ID" />
                </div>

                <div className="header__items__nav">
                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
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