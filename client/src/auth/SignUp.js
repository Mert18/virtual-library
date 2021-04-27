import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {isAuth} from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';


const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        buttonText: "Submit"
    });
    const {name, email, password, buttonText} = values;
    
    const signupForm = () => (
        <div className="formcontainer">
            <h1>Sign Up</h1>

            <form autoComplete="off">
                <div className="inputbox">
                    <input type="text" id="name" onChange={handleChange('name')} value={name} />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="inputbox">
                    <input type="text" id="email" onChange = {handleChange('email')} value={email} />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="inputbox">
                    <input type="password" id="password" onChange = {handleChange('password')} value={password} />
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <button onClick={handleSubmit}>{buttonText}</button>
                </div>
            </form>
        </div>
        
    )
    const handleChange = (name) => (e) => {
        setValues({...values, [name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url : `${process.env.REACT_APP_API}/signup`,
            data: {name, email, password}
        })
        .then(res => {
            console.log('SIGN UP SUCCESS', res);
            setValues({...values, name: '', email: '', password: '', buttonText: 'Submitted'})
            toast.success(res.data.message)
        })
        .catch(err => {
            console.log('Sign Up error', err.response.data)
            setValues({...values, buttonText: 'Submit'});
            toast.error(err.response.data.error)
        })
    }

    return (
        <Layout>
            <div>
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                {signupForm()}
            </div>
            
        </Layout>
    )
}

export default Signup
