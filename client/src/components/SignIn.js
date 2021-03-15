import React from 'react';

const SignIn = () => {
    return (
        <div className="signin">
            <h1>Sign In</h1>
            <form>
                <div className="inputbox">
                    <input type="text" />
                    <label>E-mail</label>
                </div>
                <div className="inputbox">
                    <input type="text" />
                    <label>Password</label>
                </div>

                <button type="submit"></button>
            </form>
        </div>
    )
}

export default SignIn