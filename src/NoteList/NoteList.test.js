import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoteList from './NoteList';
import { BrowserRouter } from 'react-router-dom';

describe('NoteList component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><NoteList match={{params:{folderId : 1}}}/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        expect(renderer.create(<BrowserRouter><NoteList match={{params:{folderId : 1}}}/></BrowserRouter>).toJSON()).toMatchSnapshot();
    });
});



  