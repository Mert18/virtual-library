import React from 'react';
import '../styles/main.scss'



export const Context = React.createContext();
export const initialState = [
    {
        title: "Yaşama Sevinci",
        author: "Emile Zola",
        characters: "Pauline, Lousie, Lazare, Chanteau",
        thoughts: "nice book.",
        date: ""
    },
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'addBook':
            const newBookList = [...state, { title: action.title, author: action.author, characters: action.characters, thoughts: action.thoughts, date: action.date }];
            return (
                state = newBookList
            )
        case 'removeBook':
            const newBookListt = [...state];
            newBookListt.splice(action.index, 1);
            return (
                state = newBookListt
            )
        default:
            return state;
    }
}