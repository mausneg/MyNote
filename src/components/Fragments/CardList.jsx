import Card from "./Card";
import React from "react";

export default function CardList(prop) {
  const [notes, setNotes] = React.useState(prop.notes);
  function handleDelete(id) {
    const updatedNotes = notes.filter((item) => item.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }
  function handleArchive(id) {
    let status;
    const updatedNotes = notes.map((item) => {
      if (item.id === id) {
        status = item.archived;
        item.archived = !item.archived;
      }
      return item;
    });
    const updatedNotesUnarchived = updatedNotes.filter(
      (item) => item.archived === status
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotesUnarchived);
  }

  return (
    <div className="flex flex-wrap">
      {notes.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          time={item.time}
          category={item.category}
          content={item.content}
          archived={item.archived}
          onDelete={handleDelete}
          onArchive={handleArchive}
        />
      ))}
    </div>
  );
}
