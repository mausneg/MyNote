// import { Link } from "react-router-dom";

export default function LinkNavbar(prop) {
  const { text, to = "/" } = prop;
  return (
    <a
      className="text-slate-500 font-semibold text-lg hover:text-slate-400"
      href={to}
    >
      {text}
    </a>
  );
}
