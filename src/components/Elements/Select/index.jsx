export default function Select(prop) {
  const { values, onChange } = prop;

  return (
    <select
      className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-slate-200"
      onChange={onChange}
    >
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
