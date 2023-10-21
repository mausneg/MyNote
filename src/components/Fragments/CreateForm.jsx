import InputLabel from "../Elements/InputLabel";
import Select from "../Elements/Select";
import Button from "../Elements/Button";
import React from "react";

export function CreateForm() {
  const values = ["Personal", "Work", "Ideas", "Finance"];
  const [id, setId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [category, setCategory] = React.useState("Personal");
  const [content, setContent] = React.useState("");
  const [archived, setArchived] = React.useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleContent(e) {
    setContent(e.target.value);
  }
  function handleCategory(e) {
    setCategory(e.target.value);
  }
  React.useEffect(() => {
    const current = new Date();
    setId(current.getTime());
    setDate(current.toLocaleDateString());
    setTime(current.toLocaleTimeString());
  }, []);
  function handleCreate(e) {
    const notes = JSON.parse(localStorage.getItem("notes"));
    setArchived(false);

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
    localStorage.setItem("notes", JSON.stringify(notes));
    window.location.href = "/";
  }
  return (
    <div className="mt-8">
      <InputLabel
        text="Title"
        htmlFor="title"
        type="text"
        placeholder="Insert your note`s title"
        required={true}
        onChange={handleTitle}
      />
      <label htmlFor="content" className="text-slate-500 font-semibold mb-4">
        Content
      </label>
      <textarea
        name="content"
        placeholder="Insert your note`s content"
        required={true}
        className="w-full border-2 h-40 border-gray-200 rounded-lg px-3 py-2 focus:outline-slate-200 font-semibold text-slate-500 my-2 placeholder:text-slate-400 placeholder:opacity-100 placeholder:font-normal"
        onChange={handleContent}
      />
      <label htmlFor="category" className="text-slate-500 font-semibold">
        Category
      </label>
      <Select
        values={values}
        className="w-full my-2"
        onChange={handleCategory}
      />
      <Button
        text="Create Note"
        onClick={handleCreate}
        className="bg-blue-600 w-full mt-8 px-3 py-2 flex justify-center items-center"
      />
    </div>
  );
}
