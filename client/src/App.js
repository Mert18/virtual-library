import React from 'react'
import Layout from './core/Layout';
import './styles/main.scss';

import Posts from './components/Posts/Posts';

const App = () => {
    return (
        <Layout>
            <div className="home">

                <div className="home__posts">
                    <div className="home__posts__create">
                        <form autoComplete="off">
                            <div className="createinputbox">
                                <input type="text" name="title" />
                                <label htmlFor="title">Title of The Book</label>
                            </div>

                            <div className="createinputbox">
                                <input type="text" name="author" />
                                <label htmlFor="author">Author</label>
                            </div>

                            <div className="createinputbox">
                                <textarea type="text" name="quote" />
                                <label htmlFor="quote">Quote</label>
                            </div>

                            <button className="createsend">SEND</button>
                        </form>
                    </div>

                    <div className="home__posts__posts">
                        <Posts />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default App
