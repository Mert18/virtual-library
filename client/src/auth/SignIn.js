import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { authenticate, isAuth } from './helpers';


const SignIn = ({history}) => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        buttonText: "Submit"
    });
    const {email, password, buttonText} = values

    const handleChange = (name) => (e) => {
        setValues({...values, [name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url : `${process.env.REACT_APP_API}/signin`,
            data: {email, password}
        })
        .then(res => {
            console.log('SIGN In Success', res);
            //save the response (user, token) localstorage/cookie
            authenticate(res, () => {
                setValues({...values,email: '', password: '', buttonText: 'Submitted'})
                //toast.success(`Hey ${res.data.user.name}, Welcome back!`)
                isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private')
            })

            
        })
        .catch(err => {
            console.log('Sign In Error', err.response.data)
            setValues({...values, buttonText: 'Submit'});
            toast.error(err.response.data.error)
        })
    }

    const signIn = () => (
        <div className="formcontainer">
            <h1>Sign In</h1>
            <form autoComplete="off">
                <div className="inputbox">
                    <input type="text" id="email" onChange = {handleChange('email')} value={email} />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="inputbox">
                    <input type="password" id="password" onChange = {handleChange('password')} value={password} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="forgot">
                    <Link to="/auth/password/forgot">Forgot Password</Link>
                </div>
                <br />

                    <button onClick={handleSubmit}>{buttonText}</button>

            </form>
        </div>
    )
    
    return (

        <Layout>
            <div>
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                {signIn()}
            </div>
            
        </Layout>
        
    )
}

export default SignIn