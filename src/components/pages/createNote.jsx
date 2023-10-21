import { CreateForm } from "../Fragments/CreateForm";
import InputLayout from "../Layout/InputLayout";

export default function CreateNote() {
  return (
    <InputLayout title="Create Note" subtitle="Quick and Easy Note Creation">
      <CreateForm />
    </InputLayout>
  );
}
