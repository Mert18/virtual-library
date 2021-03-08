import React from 'react';
import libraryBg from '../assets/lib.jpg'

const SignUp = () => {
    return (
        <div className="signup">
            <div className="signup--left">
                <div className="signup--left--title">
                    <h1>SIGN UP</h1>
                </div>

                <div className="signup--left--form">
                    <form autoComplete="off">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" />

                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />

                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" />

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            <div className="signup--right">
                <img src={libraryBg} alt="library" />
            </div>

        </div>
    )
}

export default SignUp