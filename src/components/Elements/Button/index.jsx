export default function Button(prop) {
  const { text, className = "bg-blue-600 px-3 py-2", children, onClick } = prop;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`font-bold text-md text-white rounded-lg ${className} flex items-center gap-2`}
      onClick={handleClick}
    >
      {children}
      {text}
    </button>
  );
}
