import {ChangeEvent, FormEvent} from "react";

interface NotesFormProps {
  content: string,
  onChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void,
}

function NotesForm({content, onChange, onSubmit}: NotesFormProps) {
  return (
    <form className='notes__form' onSubmit={onSubmit}>
      <label htmlFor='new-note'>New Note</label>
      <textarea value={content} onChange={onChange} name="note" id="new-note" cols={40} rows={10}></textarea>
      <button>Создать</button>
    </form>
  )
}

export default NotesForm
