import React, {useState} from 'react'
import Layout from './core/Layout';
import './styles/main.scss';
import axios from 'axios';

import Posts from './components/Posts/Posts';
import { authenticate, isAuth, getCookie } from './auth/helpers';

const App = ({history}) => {

    const [createQuote, setCreateQuote] = useState(false);
    const [values, setValues] = useState({
        bookTitle: "",
        author: "",
        quote: ""
    })
    const {bookTitle, author, quote} = values;

    const token = getCookie('token');


    const handleChange= (name) => (e) => {
        setValues({...values, [name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/quotes`,
            data: {bookTitle, author, quote},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log('Quote send success.', res);
            authenticate(res, () => {
                setValues({...values, bookTitle: '', author: '', quote: ''})

                isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private')
            })
        })
        .catch(err => {
            console.log('Error while sending quote.')
        })
    }


    return (
        <Layout>
            <div className="home">

                <div className="home__posts">
                    {createQuote ? 

                    <div className="home__posts__create">
                        <h2>Send a Quote</h2>
                        <form autoComplete="off">
                            <div className="createinputbox">
                                <input type="text" name="bookTitle" id="bookTitle" onChange ={handleChange('bookTitle')} value={bookTitle} />
                                <label htmlFor="bookTitle">Title of The Book</label>
                            </div>

                            <div className="createinputbox">
                                <input type="text" name="author" id="author" onChange={handleChange('author')} value={author} />
                                <label htmlFor="author">Author</label>
                            </div>

                            <div className="createinputbox">
                                <textarea type="text" name="quote" id="quote" onChange={handleChange('quote')} value={quote} />
                                <label htmlFor="quote">Quote</label>
                            </div>

                            <button className="createsend" onClick={handleSubmit}>SEND</button>
                        </form>
                    </div>
                    :
                    <button className="createshow" onClick={() => {setCreateQuote(!createQuote)}}>Create Quote</button>
                    }
                    

                    <div className="home__posts__posts">
                        <Posts />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default App
