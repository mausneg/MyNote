export default function Input(prop) {
  const { type, placeholder } = prop;
  return (
    <input
      type={type}
      name={type}
      className="border-2 w-full px-2 py-1 rounded mb-4"
      placeholder={placeholder}
    />
  );
}
