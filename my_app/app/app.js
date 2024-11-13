// src/App.js
import React, { useState } from 'react';
import NoteList from './components/noteList';
import NoteForm from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
