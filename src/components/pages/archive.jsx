import BaseLayout from "../Layout/BaseLayout";
import CardList from "../Fragments/CardList";

export default function Archive() {
  return (
    <BaseLayout
      title="Archived Notes - Keep Your Past Organized"
      subtitle="Easily Retrieve and Manage Archived Notes"
    >
      <CardList archive={true} />
    </BaseLayout>
  );
}
