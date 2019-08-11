import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import OpenNote from './OpenNote';
import { BrowserRouter } from 'react-router-dom';



describe('OpenNote component', () => {
    it('OpenNote renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><OpenNote match={{params:{openNoteId : 'some id'}}}/></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const openNote = renderer.create(<BrowserRouter><OpenNote match={{params:{openNoteId : 'some id'}}}/></BrowserRouter>);
        
        expect(openNote.toJSON()).toMatchSnapshot();
        
    });
});
