import {MouseEvent} from "react";
import {Note} from "../interafaces/interfaces.ts";

interface NoteItemProps {
  note: Note,
  onDelete: (evt: MouseEvent<HTMLButtonElement>) => void
}

function NoteItem({note, onDelete}:NoteItemProps) {
  return (
    <div id={`${note.id}`} className='notes__item'>
      <button onClick={onDelete} aria-label='Удалить'></button>
      <p>{note.content}</p>
    </div>
  )
}

export default NoteItem
