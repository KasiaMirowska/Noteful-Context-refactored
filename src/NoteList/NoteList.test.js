import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoteList from './NoteList';
import {shallow} from 'enzyme';
import NotefulContext from '../NotefulContext';

describe('NoteList component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NoteList match={{params:{folderId : 1}}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        expect(renderer.create(<NoteList match={{params:{folderId : 1}}}/>).toJSON())
        .toMatchSnapshot
    })

   
})


  