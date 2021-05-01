import React, {useState} from 'react'
import Layout from '../../core/Layout';

const CreatePost = () => {

    const [filter, setFilter] = useState("quote");

    return (
        <Layout>
            <div className="formcontainer">
            <h1>Create Post</h1>

            <form autoComplete="off">
                <div className="create__filter">
                    <select>
                        <option value="Quote" onChange={(e) => setFilter(e.target.value)}>
                            Quote
                        </option>
                        <option value="Book Advice" onChange={(e) => setFilter(e.target.value)}>
                            Book Advice
                        </option>
                    </select>
                    
                </div>

                {filter === "quote" ? 
                <div>
                    <div className="inputbox">
                        <input type="text" id="author"/>
                        <label htmlFor="author">Author</label>
                    </div>

                    <div className="inputbox">
                        <input type="text" id="quote"/>
                        <label htmlFor="quote">Quote</label>
                    </div>
                    <div>
                        <button>SEND</button>
                    </div>
                </div> 
                : 
                <div>
                    <div className="inputbox">
                        <input type="text" id="name"/>
                        <label htmlFor="name">Name</label>
                    </div>

                    <div className="inputbox">
                        <input type="text" id="email"/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="inputbox">
                        <input type="password" id="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <button>SEND</button>
                    </div>
                </div>
                }

                
            </form>
        </div>
        </Layout>
    )
}

export default CreatePost
