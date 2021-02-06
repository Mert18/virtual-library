import React, { useReducer, useEffect } from 'react';
import BookForm from './components/BookForm'
import './header.css'
import BookList from './components/BookList'
import { Context, reducer, initialState } from './components/store'
import Quote from './components/Quote'

const App = () => {
    const savedItems = JSON.parse(localStorage.getItem('state'));

    const [state, dispatch] = useReducer(reducer, savedItems || initialState);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    });
    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className="container">

                <header>
                    <Quote />
                </header>
                <main>
                    <BookForm className="bookform" />
                    <BookList className="bookList" />
                </main>

                <footer>
                    <a href="https://github.com/Mert18/virtual-library" target="_blank"><div className="github">GITHUB</div></a>
                    <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank"><div className="github">LINKEDIN</div></a>
                </footer>
            </div>
        </Context.Provider>
    )
}

export default App