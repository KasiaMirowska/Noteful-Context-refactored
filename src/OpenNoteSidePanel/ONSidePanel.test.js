import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import SidePanel2 from './SidePanel2';
import { shallow } from 'enzyme'; 
import NotefulContext from '../NotefulContext';

describe('SidePanel2', () => {
    const props = {
        history: {
            goBack: jest.fn()
        },
        match: {
            params: {openNoteId: 'id'}
        }
    }
    // it ('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDom.render(<SidePanel2 {...props} />, div);
    //     ReactDom.unmountComponentAtNode(div);
    // })

    // it('renders the UI as expected', () => {
    //     const sidePanel3 = renderer.create(<SidePanel2 {...props}/>);

    //     expect(sidePanel3.toJSON()).toMatchSnapshot();
    // })

    it('goes back on click', () => {
        
        // const onClickFn = props.history.goBack.jest.fn()
        const wrapper = shallow(
            // <NotefulContext.Provider value={{ 
            //     notes: [{ id: 'test-note-id', folderId: 'test-folder-id' }],
            //     folders: [{ id: 'test-folder-id', name: 'Important' }] 
            // }}>
                <SidePanel2 {...props} />
            // </NotefulContext.Provider>
        );
        console.log(wrapper.getElements(), 'SSSSSSSSSS')
        expect(wrapper.dive().find('button')).toBe(true);
        // wrapper.find('button').simulate('click');
        // expect(onClickFn.mock.calls[0]).toEqual('/')
    })
})