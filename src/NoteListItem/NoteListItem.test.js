import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoteListItem from './NoteListItem';
import { BrowserRouter as BR} from 'react-router-dom';

describe('NoteListItem component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BR><NoteListItem id = 'id' name='a name' modified='a date' folderId=' folderId' content='some content'/></BR>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        expect(renderer.create(<BR><NoteListItem id ='id' name='a name' modified='a date' folderId=' folderId' content='some content'/></BR>).toJSON())
        .toMatchSnapshot();
    });
});


