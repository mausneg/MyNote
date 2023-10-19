export default function Label(prop) {
  const { text, type } = prop;
  return (
    <label htmlFor={type} className="font-semibold mb-2">
      {text}
    </label>
  );
}
