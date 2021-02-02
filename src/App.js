import React, { useReducer, useEffect } from 'react';
import BookForm from './components/BookForm'
import './header.css'
import BookList from './components/BookList'
import { Context, reducer, initialState } from './components/store'

const App = () => {
    const savedItems = JSON.parse(localStorage.getItem('state'));

    const [state, dispatch] = useReducer(reducer, savedItems || initialState);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
    });
    return (
        <Context.Provider value={{ state, dispatch }}>
            <div>
                <header>
                    <BookForm />
                </header>
                <main>
                    <BookList />
                </main>
            </div>
        </Context.Provider>
    )
}

export default App