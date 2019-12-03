import React from 'react';
import NotefulContext from '../NotefulContext';
import './SidePanel2.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



export default class SidePanel2 extends React.Component {
    static contextType = NotefulContext;

    render() {
        const note = this.context.notes.find(note => note.id === Number(this.props.match.params.openNoteId));

        if (note) {
            const openFolderId = note.folder;
            const openFolder = this.context.folders.find(folder => folder.id === openFolderId);

            return (
                <div className='side-panel'>
                    <div className='folders-header-container'>
                        <a>
                        <button type='button' className='side-button' onClick={() => this.props.history.goBack()}>Go back</button>
                        </a>
                        <h2 className='folders-header'>Note Folder</h2>
                    </div>
                    <div className='folder openNoteFolder'>
                    <Link to={`/folder/${openFolderId}`} className='link'>{openFolder.name}
                    </Link>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

}

SidePanel2.propTypes = {
    history: PropTypes.shape({
        length: PropTypes.number,
        action: PropTypes.string,
        location: PropTypes.object,
        createHref: PropTypes.func,
        push: PropTypes.func,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
    }),
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.bool,
        params: PropTypes.shape({
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }),
}