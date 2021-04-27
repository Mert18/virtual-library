import React, { useState } from 'react'
import Layout from '../core/Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Forgot = () => {

    const [values, setValues] = useState({
        email: "",
        buttonText: "Submit"
    });
    const {email, buttonText} = values
    
    

    const passwordForgotForm = () => (
        <div className="formcontainer">
            <form autoComplete="off">
                <h1>Forgot Password</h1>
                <div className="inputbox">
                    <input type="text" id="email" onChange = {handleChange('email')} value={email} />
                    <label htmlFor="email">E-mail</label>
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
            method: 'PUT',
            url : `${process.env.REACT_APP_API}/forgot-password`,
            data: {email}
        })
        .then(res => {
            console.log('FORGOT PASSWORD Success', res);
            //save the response (user, token) localstorage/cookie
            toast.success(res.data.message);
            setValues({...values, buttontext: 'Requested'})
        })
        .catch(err => {
            console.log('FORGOT PASSWORD Error', err.response.data)
            toast.error(err.response.data.error)

            setValues({...values, buttonText: 'Submit'});
        })
    }

    return (
        <Layout>
            <div>
                <ToastContainer />
                {passwordForgotForm()}
            </div>
            
        </Layout>
    )
}

export default Forgot
