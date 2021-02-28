const fs = require("fs")
let notes = require("../db/db.json")
const { v4: uuidv4 } = require('uuid')

module.exports = function(app) {

  app.get("/api/notes", (req, res) => {
    console.log(notes)
      res.json(notes)
  })

  app.get("/api/notes/:id", (req, res) => {

    const id = req.params.id
    let found
    notes.forEach(n => {
      if (id ==n.id){
        found = n
         res.json(n)
      }
    })
     res.json(false)
  })
  

  app.post("/api/notes", (req, res) => {
    const newNote = req.body
 
      newNote.id = uuidv4()
   
    notes.push(newNote)
    let jsonNotes = JSON.stringify(notes)
    fs.writeFile("./db/db.json", jsonNotes, function(err) {
      if (err) {
        console.log(err)
      }
      console.log("WOOT! It worked!")
    })
    res.json(true)
  })

  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id
    let found
     notes =  notes.filter(note => note.id != id)
 
        let jsonNotes = JSON.stringify(notes)
        fs.writeFile("./db/db.json", jsonNotes, function(err) {
          if (err) {
            console.log(err)
          }
          console.log("ERMERGURHD! It worked!")
        })
    res.json(true)
  })

}