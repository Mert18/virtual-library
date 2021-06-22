import axios from 'axios';
import React, {useState} from 'react'
import Layout from '../../core/Layout';
import { authenticate } from '../../auth/helpers';

const CreatePost = () => {

    const [values, setValues] = useState({
        bookTitle: "",
        author:"",
        quote:"",
        thoughts:""
    });

    const {bookTitle, author, quote, thoughts} = values;

    const handleChange = (name) => (e) => {
        setValues({...values, [name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values});
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/quotes`,
            data: {bookTitle, author, quote, thoughts}
        })
        .then(res => {
            console.log('QUOTES SENT.', res);
            authenticate(res, () => {
                setValues({...values, bookTitle: '', author:'', quote:'', thoughts:''})
            })
        })
        .catch(err => {
            console.log('QUOTES CANNOT BE SENT.', err)
        })
    }

    return (
        <Layout>
            <div className="formcontainer">
            <h1>Create Post</h1>
            <form autoComplete="off">
                <div>
                    <div className="inputbox">
                        <input type="text" id="bookTitle" onChange= {handleChange('bookTitle')} value={bookTitle} />
                        <label htmlFor="bookTitle">Book Title</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="author" onChange= {handleChange('author')} value={author}/>
                        <label htmlFor="author">Author</label>
                    </div>

                    <div className="inputbox">
                        <input type="text" id="quote" onChange= {handleChange('quote')} value={quote} />
                        <label htmlFor="quote">Quote</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" id="thoughts" onChange= {handleChange('thoughts')} value={thoughts} />
                        <label htmlFor="thoughts">Thoughts</label>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>SEND</button>
                    </div>
                </div>
            </form>
        </div>
        </Layout>
    )
}

export default CreatePost
