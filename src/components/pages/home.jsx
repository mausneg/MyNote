import Base from "../Layout/Base";
import Navbar from "../Fragments/Navbar";
import CardList from "../Fragments/CardList";

const data = [
  {
    id: 1,
    title: "My First Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: false,
  },
  {
    id: 2,
    title: "My Second Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure hic ipsum sit! Ad ea, repudiandae quasi dolorum cum alias tempora est pariatur, hic itaque omnis? Voluptatem sit molestiae similique ipsam?",
    archived: false,
  },
  {
    id: 3,
    title: "My Third Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: false,
  },
  {
    id: 4,
    title: "My Fourth Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: false,
  },
  {
    id: 5,
    title: "My Fifth Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: false,
  },
];

if (!localStorage.getItem("notes")) {
  localStorage.setItem("notes", JSON.stringify(data));
}

export default function Home() {
  return (
    <Base>
      <Navbar />
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            MyNote - Your Digital Notebook
          </h1>
          <h3 className="text-xl font-bold text-blue-600">
            Organize, Collaborate, and Simplify Your Notes
          </h3>
        </div>
        <CardList archive={false} />
      </div>
    </Base>
  );
}
