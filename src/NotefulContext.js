import React from 'react';


const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    deleteNoteRequest: () => {},
    addNewFolder: () => {},
    deleteFolder: () => {},
    addNewNote: () => {},
})

export default NotefulContext