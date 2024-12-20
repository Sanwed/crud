import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Note} from "../interafaces/interfaces.ts";
import NotesForm from "./NotesForm.tsx";
import NoteItem from "./NoteItem.tsx";

function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:7070/notes');
      const data: Note[] = await response.json();
      setNotes(data);
      console.log(notes)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addNote = async () => {
    try {
      const response = await fetch('http://localhost:7070/notes', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content}),
      })
      if (response.ok) {
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  }

  const deleteNote = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:7070/notes/${id}`, {
        method: 'delete',
      });
      if (response.ok) {
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  }

  const onChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(evt.currentTarget.value);
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addNote()
  }

  return (
    <div className='notes'>
      <div className='notes__title'>Notes</div>
      <div className='notes__list'>
        {notes && notes.map((note) => (
          <NoteItem note={note} onDelete={() => deleteNote(note.id)} />
        ))}
      </div>
      <NotesForm content={content} onChange={onChange} onSubmit={onSubmit} />
    </div>
  )
}

export default Notes
