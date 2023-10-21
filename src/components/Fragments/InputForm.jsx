import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputLabel from "../Elements/InputLabel";
import Button from "../Elements/Button";

export default function InputForm() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);
  const { id: noteId } = useParams();

  useEffect(() => {
    if (noteId) {
      const notes = JSON.parse(localStorage.getItem("notes"));
      const note = notes.find((item) => item.id === parseInt(noteId));

      setId(note.id);
      setTitle(note.title);
      setBody(note.body);
      setCreatedAt(note.createdAt);
      setArchived(note.archived);
    } else {
      const current = new Date();
      setId(current.getTime());
      setCreatedAt(current);
    }
  }, [noteId]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleBody(e) {
    setBody(e.target.value);
  }

  function handleSave() {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (noteId) {
      const editedNoteIndex = notes.findIndex((note) => note.id === id);
      if (editedNoteIndex !== -1) {
        notes[editedNoteIndex] = {
          id,
          title,
          createdAt,
          body,
          archived,
        };
      }
    } else {
      const note = {
        id,
        title,
        createdAt,
        body,
        archived,
      };
      notes.push(note);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    window.location.href = "/";
  }

  return (
    <div className="mt-8">
      <InputLabel
        text="Title"
        htmlFor="title"
        type="text"
        placeholder="Insert your note's title"
        required={true}
        onChange={handleTitle}
        value={title}
      />
      <label htmlFor="content" className="text-slate-500 font-semibold mb-4">
        Content
      </label>
      <textarea
        name="content"
        placeholder="Insert your note's content"
        required={true}
        className="w-full border-2 h-40 border-gray-200 rounded-lg px-3 py-2 focus:outline-slate-200 font-semibold text-slate-500 my-2 placeholder:text-slate-400 placeholder:opacity-100 placeholder:font-normal"
        onChange={handleBody}
        value={body}
      />
      <Button
        text={noteId ? "Save Note" : "Create Note"}
        onClick={handleSave}
        className="bg-blue-600 w-full mt-8 px-3 py-2 flex justify-center items-center"
      />
    </div>
  );
}
