import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewFolder from './NewFolderForm';


describe('NewFolder comsponent', () => {
    const props = {
        match: {
            params: {
                path: '/newFolder'
            }
        }
    }
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewFolder {...props}/>, div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const newFolder = renderer.create(<NewFolder {...props}/>);
        expect(newFolder.toJSON()).toMatchSnapshot();
    });
});
