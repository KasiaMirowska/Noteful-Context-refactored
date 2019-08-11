import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './Header';
import {BrowserRouter as BR} from 'react-router-dom';


describe('Header component', ()=>{
    it ('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDom.render(<BR><Header /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders UI as expected', () => {
        const header = renderer.create(<BR><Header /></BR>)
        expect(header.toJSON()).toMatchSnapshot();
    })
})