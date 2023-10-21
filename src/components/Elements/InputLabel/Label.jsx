export default function Label(prop) {
  const { text, htmlFor } = prop;
  return (
    <label htmlFor={htmlFor} className="font-semibold mb-2 text-slate-500">
      {text}
    </label>
  );
}
