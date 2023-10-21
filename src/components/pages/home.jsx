import BaseLayout from "../Layout/BaseLayout";
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
    <BaseLayout
      title="MyNote - Your Digital Notebook"
      subtitle="Organize, Collaborate, and Simplify Your Notes"
    >
      <CardList archive={false} />
    </BaseLayout>
  );
}
