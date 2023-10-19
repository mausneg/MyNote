export default function Button(prop) {
  const { text, className = "bg-blue-600 px-3 py-2", children } = prop;
  return (
    <button
      className={`font-bold text-md text-white rounded-lg ${className} flex items-center gap-2`}
    >
      {children}
      {text}
    </button>
  );
}
