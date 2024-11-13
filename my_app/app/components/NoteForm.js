// src/components/NoteForm.js
import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
