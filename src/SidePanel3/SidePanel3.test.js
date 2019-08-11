import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import SidePanel3 from './SidePanel3';
import { shallow } from 'enzyme'; 

describe('SidePanel3', () => {
    const props = {
        history: {
            goBack: jest.fn()
        },
        location: {
            pathname: '/newFolder'
        }
    }
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<SidePanel3 {...props}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const sidePanel3 = renderer.create(<SidePanel3 {...props}/>);

        expect(sidePanel3.toJSON()).toMatchSnapshot();
    });

    it('goes back on click', () => {
        const onClickFn = props.history.goBack;
        const wrapper = shallow(<SidePanel3 {...props}/>);
        wrapper.find('button').simulate('click');
        expect(onClickFn).toBeCalled();
    });
});
