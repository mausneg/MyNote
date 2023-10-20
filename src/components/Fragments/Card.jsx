import Button from "../Elements/Button";
import React from "react";



export default function Card(prop) {
  const { id, title, date, time, category, content,onDelete } = prop;
  const [archived, setArchived] = React.useState(prop.archived);

  function handleArchive(id) {
    console.log(id);
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.map((item) => {
      if (item.id === id) {
        item.archived = !archived;
      }
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    setArchived(!archived);
  }
  function handleDelete(id) {
    onDelete(id)
    
  }

  return (
    <div className="w-1/3 p-3">
      <div className=" bg-white rounded-lg shadow-lg p-6 border">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <Button className="bg-red-500 p-2" onClick={() => handleDelete(id)}>
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
        <div className="flex gap-2">
          <span className="text-sm text-slate-400">{date}</span>
          <span className="text-sm text-slate-400">{time}</span>
          <span className="text-sm text-slate-400">{category}</span>
        </div>
        <div className="h-32">
          <p className="text-slate-500 mt-2 text-justify ">{content}</p>
        </div>
        <div className="flex gap-4 justify-start">
          <Button className="bg-blue-600 p-2">
            <i className="fa-solid fa-edit"></i>
          </Button>
          <Button className="bg-blue-600 p-2" onClick={() => handleArchive(id)}>
            <i className="fa-solid fa-box-archive"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
