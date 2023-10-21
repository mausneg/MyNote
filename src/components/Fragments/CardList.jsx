import Card from "./Card";
import React from "react";
import SortFilter from "./SortFilter";
import Button from "../Elements/Button";

export default function CardList(prop) {
  const { archive } = prop;
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")).filter(
      (item) => item.archived === archive
    )
  );

  function handleDelete(id) {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const updatedNotes = notes.filter((item) => item.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes.filter((item) => item.archived === archive));
  }
  function handleArchive(id) {
    let status;
    const data = JSON.parse(localStorage.getItem("notes"));
    const updatedNotes = notes.map((item) => {
      if (item.id === id) {
        status = item.archived;
        item.archived = !item.archived;
      }
      return item;
    });
    const updateData = data.map((item) => {
      if (item.id === id) {
        item.archived = !item.archived;
      }
      return item;
    });
    const updatedNotesUnarchived = updatedNotes.filter(
      (item) => item.archived === status
    );
    localStorage.setItem("notes", JSON.stringify(updateData));
    setNotes(updatedNotesUnarchived);
  }

  function handleSortFilter({ search, sort }) {
    const notes = JSON.parse(localStorage.getItem("notes")).filter(
      (item) => item.archived === archive
    );
    let updateNotes;

    if (search) {
      updateNotes = notes.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    } else updateNotes = notes;

    if (sort === "Date Asc") {
      updateNotes.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
    } else if (sort === "Date Desc") {
      updateNotes.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
    } else if (sort === "Title Asc") {
      updateNotes.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB);
      });
    } else if (sort === "Title Desc") {
      updateNotes.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleB.localeCompare(titleA);
      });
    }
    setNotes(updateNotes);
  }
  function handleEdit(id) {
    window.location.href = `/edit-note/${id}`;
  }
  function handleAdd() {
    window.location.href = "/create-note";
  }

  return (
    <>
      <div className="w-full flex justify-end mb-4 px-3">
        <SortFilter sortFilter={handleSortFilter} />
        <Button
          text="Create note"
          className="bg-blue-600 px-3 py-2"
          onClick={handleAdd}
        >
          <i className="fa-solid fa-plus text-white"></i>
        </Button>
      </div>
      <div className="flex flex-wrap">
        {notes.length === 0 ? (
          <div className="text-xl font-bold text-slate-500 text-center w-full">
            No Notes Found
          </div>
        ) : (
          notes.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              createdAt={item.createdAt}
              body={item.body}
              onDelete={handleDelete}
              onArchive={handleArchive}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </>
  );
}
