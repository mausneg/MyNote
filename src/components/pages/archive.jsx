import Base from "../Layout/Base";
import Navbar from "../Fragments/Navbar";
import CardList from "../Fragments/CardList";

export default function Archive() {
  return (
    <Base>
      <Navbar />
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Archived Notes - Keep Your Past Organized
          </h1>
          <h3 className="text-xl font-bold text-blue-600">
            Easily Retrieve and Manage Archived Notes
          </h3>
        </div>
        <CardList archive={true} />
      </div>
    </Base>
  );
}
