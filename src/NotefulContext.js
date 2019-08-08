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
console.log(NotefulContext, "CONTEXT CONTET")
export default NotefulContext