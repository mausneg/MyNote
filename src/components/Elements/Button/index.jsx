export default function Button(prop) {
  const { text = "click", className = "bg-blue-600", children } = prop;
  return (
    <button
      className={`px-3 py-1 font-bold text-md text-white rounded-lg ${className} flex items-center gap-2`}
    >
      {children}
      {text}
    </button>
  );
}
