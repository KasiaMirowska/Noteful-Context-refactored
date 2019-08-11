import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewNoteForm from './NewNoteForm';


describe('NewNoteForm component', () => {
    const props = {
        match: {
            params: {
                path:'/newNote'
            }
        }
    }
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewNoteForm {...props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const newNote = renderer.create(<NewNoteForm {...props}/>);
        expect(newNote.toJSON()).toMatchSnapshot();
    })
})