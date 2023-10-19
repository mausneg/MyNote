import Button from "../Elements/Button";

export default function Card(prop) {
  const { title, date, time, category, content } = prop;
  return (
    <div className="w-1/3 p-3">
      <div className=" bg-white rounded-lg shadow-lg p-6 border">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <Button className="bg-blue-600 p-2">
            <i className="fa-solid fa-edit"></i>
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
            <i className="fa-solid fa-box-archive"></i>
          </Button>
          <Button className="bg-blue-600 p-2">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
