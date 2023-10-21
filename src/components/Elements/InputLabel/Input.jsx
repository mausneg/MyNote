export default function Input(prop) {
  const { type, placeholder, name, onChange } = prop;
  return (
    <input
      type={type}
      name={name}
      className="border-2 w-full px-2 py-1 rounded mb-4"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
