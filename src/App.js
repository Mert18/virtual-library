import React, { useReducer, useEffect } from 'react';

import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Quote from './components/Quote'
import Header from './components/Header'

import './styles/main.scss'


import { Context, reducer, initialState } from './components/store'

const App = () => {
    const savedItems = JSON.parse(localStorage.getItem('state'));

    const [state, dispatch] = useReducer(reducer, savedItems || initialState);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    });
    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className="container">
                <header className="container__header">
                    <Header />
                    <Quote />
                </header>

                <main className="container__main">
                    <BookForm />
                    <BookList />
                </main>
            </div>
        </Context.Provider>
    )
}

export default App