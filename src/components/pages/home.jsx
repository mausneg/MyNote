import BaseLayout from "../Layout/BaseLayout";
import CardList from "../Fragments/CardList";
import { getInitialData } from "../../utils";

if (!localStorage.getItem("notes")) {
  const data = getInitialData();
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
