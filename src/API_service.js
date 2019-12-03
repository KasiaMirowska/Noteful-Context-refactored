import config from './config';

const APIcalls = {

    getFoldersData: () => {
        const foldersURL = 'http://localhost:8000/api/noteful/folder'
        return fetch(foldersURL)
        .then(res => {
        if(!res.ok){
            throw new Error('not working')
        }
        return res;
        })
        .then(res => res.json()) 
    },

    getNotesData: () => {
    const notesURL = 'http://localhost:8000/api/noteful/notes';
    return fetch(notesURL)
    .then(res => {
      if(!res.ok){
        throw new Error('something went wrong')
      }
      return res;
    })
    .then(res => res.json())
    },
    

    deleteNoteRequest: (noteId, callback) => {
      const notesURL = 'http://localhost:8000/api/noteful/notes';
      
      return fetch(notesURL + `/${noteId}/`, {
          method: 'DELETE',
      })
      .then(res => {
          if(!res.ok) {
              return res.json().then(error => {
                  throw error
              })
          }
          return 
      }) 
     
  },

    deleteFolderRequest: (folderId) => {
        const url = 'http://localhost:8000/api/noteful/folder'
        
        return fetch(url + `/${folderId}`, {
            method: 'DELETE', 
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return 
        })
    },

    newFolder: (newFolder) => {
        const url = 'http://localhost:8000/api/noteful/folder'
        console.log(url)
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(newFolder),
            headers: {
                'content-type': 'application/json',
              }
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(error => {
                    throw new Error('try again, we have a connection problem')
                })
            }
            return res.json()
        })
    },

    newNote: (newNote) => {
        const url = 'http://localhost:8000/api/noteful/notes'
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json',
              }
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(error => {
                    throw new Error('try again, we have a connection problem')
                })
            }
            return res.json()
        })
    }
}
export default APIcalls   