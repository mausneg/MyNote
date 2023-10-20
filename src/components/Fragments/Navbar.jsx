import Button from "../Elements/Button";
import LinkNavbar from "../Elements/LinkNavbar";

export default function Navbar() {
  return (
    <div className="bg-slate-50 w-full flex justify-between px-6 py-6">
      <div className="flex w-2/3 items-center gap-16">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            MyNote
            <span className="text-blue-600 font-extrabold text-4xl">+</span>
          </h1>
        </div>
        <div className="flex gap-8">
          <LinkNavbar text="Home" to="/" />
          <LinkNavbar text="Archives" to="/archive" />
        </div>
      </div>
      <div className="flex w-1/3 justify-end gap-8">
        <Button text="Profile">
          <i className="fa-solid fa-user"></i>
        </Button>
      </div>
    </div>
  );
}
