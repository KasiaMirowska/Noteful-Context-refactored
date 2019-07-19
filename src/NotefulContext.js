import React from 'react';
import Data from './dummyData';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
})
export default NotefulContext