// src/components/NoteList.js
import React from 'react';
import Note from './note';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
