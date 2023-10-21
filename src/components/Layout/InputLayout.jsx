import Navbar from "../Fragments/Navbar";

export default function InputLayout(prop) {
  const { title, subtitle, children } = prop;
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="p-8">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/3 border-2 shadow-lg rounded-lg p-6 flex flex-col item">
            <h1 className="text-3xl font-bold text-slate-700">{title}</h1>
            <h2 className="text-blue-600 font-semibold text-xl">{subtitle}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
