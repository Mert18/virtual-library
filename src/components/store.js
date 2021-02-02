import React from 'react';


export const Context = React.createContext();
export const initialState = [
    {
        title: "Yaşama Sevinci",
        author: "Emile Zola",
        characters: "Pauline, Lousie, Lazare, Chanteau",
        thoughts: "nice book."
    },
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'addBook':
            const newBookList = [...state, { title: action.title, author: action.author, characters: action.characters, thoughts: action.characters }];
            return (
                state = newBookList
            )
        default:
            return state;
    }
}