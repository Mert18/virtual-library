import React from 'react';

const SignUp = () => {
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form>
                <div className="inputbox">
                    <input type="text" />
                    <label>Username</label>
                </div>
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

export default SignUp