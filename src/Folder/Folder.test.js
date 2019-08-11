import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Folder from './Folder';
import { BrowserRouter as BR} from 'react-router-dom';


describe('Folder component', () => {
    const props = {
        folders: [{
            name: 'some name',
            id: 'id',
        }]
    }
    it ('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<BR><Folder {...props} /></BR>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', ()=>{
        const folder = renderer.create(<BR><Folder {...props}/></BR>);

        expect(folder.toJSON()).toMatchSnapshot();
    });

    // it('renders a clicked folder', () => {
    //     const wrapper = shallow(<BR><Folder match={{params: {folderId: 'id'}}}/></BR>)

    //     wrapper.find('Link').simulate('click');
    //     expect(wrapper.find({match:{path:'link'}}).exists()).toBe(true);
    // })
});
