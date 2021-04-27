import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom';
import { isAuth, signout } from './auth/helpers';

const Navbar = ({match, history}) => {
    const isActive = path => {
        if(match.path === path){
            return {color: '#A1759F'}
        } else {
            return {color: '#EEE5E5'}
        }
    }
    return (
        <div className="nav">
            <ul className="navbar">
                <div className="navbar__title">
                    <h1>Virtual Library</h1>
                </div>
                
                <li><Link to="/" style={isActive('/')}>Home</Link></li>
                
                {!isAuth() && (
                    <Fragment>
                        <li><Link to="/signup" style={isActive('/signup')}>Sign Up</Link></li>
                            <li><Link to="/signin" style={isActive('/signin')}>Sign In</Link></li>
                    </Fragment>
                )}

                {isAuth() && isAuth().role === 'admin' && (
                    <li>
                        <Link to="/admin" style={isActive('/admin')}>
                            {isAuth().name}
                        </Link>
                    </li>
                )}

                {isAuth() && isAuth().role === 'subscriber' && (
                    <li>
                        <Link to="/private" style={isActive('/private')}>
                            {isAuth().name}
                        </Link>
                    </li>
                )}

                {isAuth() && (
                    <span className="signout" onClick={() => {
                        signout(() => {
                            history.push('/')
                        })
                    }}>Sign Out</span>
                )}
            </ul>
        </div>
        
    )
}

export default withRouter(Navbar);
