const APIcalls = {

    getFoldersData: () => {
        const foldersURL = 'http://localhost:9090/folders/';
    
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
    const notesURL = 'http://localhost:9090/notes/';
    
    return fetch(notesURL)
    .then(res => {
      if(!res.ok){
        throw new Error('something went wrong')
      }
      return res;
    })
    .then(res => res.json())
    
    },

    deleteNoteRequest: (noteId) => {
      const notesURL = 'http://localhost:9090/notes';
      
      return fetch(notesURL + `/${noteId}/`, {
          method: 'DELETE'
      })
      .then(res => {
          if(!res.ok) {
              return res.json().then(error => {
                  throw error
              })
          }
          return res.json()
      })  
  },

    deleteFolderRequest: (folderId, callback) => {
        const url = 'http://localhost:9090/folders'
        
        return fetch(url + `/${folderId}`, {
            method: 'DELETE',
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
    },

    newFolder: (newFolder) => {
        const url = `http://localhost:9090/folders/`
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
        const url = `http://localhost:9090/notes/`
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