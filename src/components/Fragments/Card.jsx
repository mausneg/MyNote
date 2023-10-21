import Button from "../Elements/Button";
import { showFormattedDate } from "../../utils";

export default function Card(prop) {
  const { id, title, createdAt, body, onDelete, onArchive, onEdit } = prop;

  function handleArchive(id) {
    onArchive(id);
  }
  function handleDelete(id) {
    onDelete(id);
  }
  function handleEdit(id) {
    onEdit(id);
  }
  return (
    <div className="w-1/3 p-3">
      <div className=" bg-white rounded-lg shadow-lg p-6 border">
        <div className="w-full flex justify-end">
          <Button
            className="text-zinc-400 text-lg"
            onClick={() => handleDelete(id)}
          >
            x
          </Button>
        </div>
        <div className="flex">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        </div>
        <div className="flex gap-2">
          <span className="text-sm text-slate-400">
            {showFormattedDate(createdAt)}
          </span>
        </div>
        <div className="card-body my-4">
          <p className="text-slate-500 text-justify ">{body}</p>
        </div>
        <div className="flex gap-4 justify-start">
          <Button className="bg-blue-600 p-2" onClick={() => handleEdit(id)}>
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
