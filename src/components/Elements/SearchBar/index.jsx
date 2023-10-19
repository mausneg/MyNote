export default function SearchBar() {
  return (
    <div className="border-2 border-slate-300 w-full rounded flex justify-between items-center px-2 py-1 bg-transparent">
      <input type="text" className="w-full focus:outline-none bg-transparent" />
      <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
    </div>
  );
}
