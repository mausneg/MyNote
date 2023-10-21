import Navbar from "../Fragments/Navbar";

export default function BaseLayout(prop) {
  const { title, subtitle, children } = prop;
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <h3 className="text-xl font-bold text-blue-600">{subtitle}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}
