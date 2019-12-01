import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SidePanel from './SidePanel';
import { BrowserRouter as BR } from 'react-router-dom';



describe('SidePanel component', () => {
    
    it ('SidePanel renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BR><SidePanel /></BR>, div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const sidePanel = renderer.create(<BR><SidePanel /></BR>);

        expect(sidePanel.toJSON()).toMatchSnapshot();

    })

})