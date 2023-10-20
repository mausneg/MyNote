export default function SearchBar(prop) {
  const { onChange } = prop;

  return (
    <div className="border-2 border-slate-300 w-96 rounded flex justify-between items-center px-2 py-1 bg-transparent">
      <input
        type="text"
        className="w-full focus:outline-none bg-transparent"
        onChange={onChange}
      />
      <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
    </div>
  );
}
