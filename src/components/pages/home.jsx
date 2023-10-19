import Base from "../Layout/Base";
import Navbar from "../Fragments/Navbar";

export default function Home() {
  return (
    <Base>
      <Navbar />
      <div className="p-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            MyNote - Your Digital Notebook
          </h1>
          <h3 className="text-xl font-bold text-blue-600">
            Organize, Collaborate, and Simplify Your Notes
          </h3>
        </div>
        <div className="flex w-full">

        </div>
      </div>
    </Base>
  );
}
