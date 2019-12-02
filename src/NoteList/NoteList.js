import React from 'react';
import NotefulContext from '../NotefulContext';
import './NoteList.css';
import NoteListItem from '../NoteListItem/NoteListItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NoteList extends React.Component {
  static contextType = NotefulContext;

  filterNotesByFolder = () => {
    const notes = this.context.notes
    if (!this.props.match.params.folderId) {
      return notes;
    }

    return notes.filter((note) => {
      if (note.folder === Number(this.props.match.params.folderId)) {
        return note;
      }
    })
  }

  render() {
    const notes = this.filterNotesByFolder().map(note => {
      return <NoteListItem
        key={note.id}
        id={note.id}
        name={note.name}
        modified={note.date_created}
        folderId={note.folder}
        content={note.content}
      />
    })

    return (
      <div className='note-list'>
        <div className='noteList-header-container'>
        <h2 className='noteList-header'>Notes</h2>
        <Link to='/newNote'>
          <button className='add-note'>Add Note</button>
        </Link>
        </div>

        {notes}

      </div>
    )
  }

}
NoteList.propTypes = {
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