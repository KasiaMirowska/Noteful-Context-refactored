const APIcalls = {

    getFoldersData() {
        const foldersURL = 'http://localhost:9090/folders/';
        fetch(foldersURL)
        .then(res => {
        if(!res.ok){
            throw new Error('something went wrong')
        }
        return res;
        })
        .then(res => res.json())
        
        .catch(err => {
        console.log(err)
        })
    },

    getNotesData() {
    const notesURL = 'http://localhost:9090/notes/';
    fetch(notesURL)
    .then(res => {
      if(!res.ok){
        throw new Error('something went wrong')
      }
      return res;
    })
    .then(res => res.json())
    .then(serverData => {
      console.log(serverData)
      this.setState({
        notes: serverData
      })
    })
    .catch(err => {
      console.log(err)
        })
    },

    deleteNewNoteRequest() {

}
}
export default APIcalls   