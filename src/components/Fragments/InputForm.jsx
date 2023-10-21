import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputLabel from "../Elements/InputLabel";
import Select from "../Elements/Select";
import Button from "../Elements/Button";

export function InputForm() {
  const values = ["Personal", "Work", "Ideas", "Finance"];
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("Personal");
  const [content, setContent] = useState("");
  const [archived, setArchived] = useState(false);
  const { id: noteId } = useParams();

  useEffect(() => {
    if (noteId) {
      const notes = JSON.parse(localStorage.getItem("notes"));
      const note = notes.find((item) => item.id === parseInt(noteId));

      setId(note.id);
      setTitle(note.title);
      setDate(note.date);
      setTime(note.time);
      setCategory(note.category);
      setContent(note.content);
      setArchived(note.archived);
    } else {
      const current = new Date();
      setId(current.getTime());
      setDate(current.toLocaleDateString());
      setTime(current.toLocaleTimeString());
    }
  }, [noteId]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleSave() {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (noteId) {
      const editedNoteIndex = notes.findIndex((note) => note.id === id);
      if (editedNoteIndex !== -1) {
        notes[editedNoteIndex] = {
          id,
          title,
          date,
          time,
          category,
          content,
          archived,
        };
      }
    } else {
      const note = {
        id,
        title,
        date,
        time,
        category,
        content,
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
        onChange={handleContent}
        value={content}
      />
      <label htmlFor="category" className="text-slate-500 font-semibold">
        Category
      </label>
      <Select
        values={values}
        className="w-full my-2"
        onChange={handleCategory}
        value={category}
      />
      <Button
        text={noteId ? "Save Note" : "Create Note"}
        onClick={handleSave}
        className="bg-blue-600 w-full mt-8 px-3 py-2 flex justify-center items-center"
      />
    </div>
  );
}
