import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SidePanel from './SidePanel';
import { BrowserRouter as BR } from 'react-router-dom';



describe('SidePanel component', () => {
    const props = {
        folders: [{
            name: 'some name',
            id: 'id',
        }]
    }
    it ('SidePanel renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BR><SidePanel {...props}/></BR>, div)
    })

    it('renders the UI as expected', () => {
        const sidePanel = renderer.create(<BR><SidePanel {...props}/></BR>);

        expect(sidePanel.toJSON()).toMatchSnapshot();

    })

    it('renders UI with no folders', () => {
        const sidePanel = renderer.create(<BR><SidePanel props={props.folders.length === 0}/></BR>)
        
        expect(sidePanel.toJSON()).toMatchSnapshot();
    })
    
    
})