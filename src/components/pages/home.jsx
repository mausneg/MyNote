import Base from "../Layout/Base";
import Navbar from "../Fragments/Navbar";
import Card from "../Fragments/Card";

const data = [
  {
    title: "My First Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: false,
  },
  {
    title: "My Second Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure hic ipsum sit! Ad ea, repudiandae quasi dolorum cum alias tempora est pariatur, hic itaque omnis? Voluptatem sit molestiae similique ipsam?",
    archived: false,
  },
  {
    title: "My Third Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: false,
  },
  {
    title: "My Fourth Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: true,
  },
  {
    title: "My Fifth Note",
    date: "12/12/2021",
    time: "12:00",
    category: "Personal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quibusdam.",
    archived: true,
  },
];
const dataUnarchived = data.filter((item) => item.archived === false);
const dataArchived = data.filter((item) => item.archived === true);
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
        <div className="flex flex-wrap">
          {dataUnarchived.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              date={item.date}
              time={item.time}
              category={item.category}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </Base>
  );
}
