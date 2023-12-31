export default function Select(prop) {
  const { values, onChange, className, value } = prop;

  return (
    <select
      className={`border-2 ${className}  border-2 border-slate-300 rounded px-3 py-2 focus:outline-slate-200 text-slate-400 font-normal`}
      onChange={onChange}
      value={value}
    >
      {values.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
