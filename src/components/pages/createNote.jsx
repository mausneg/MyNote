import { InputForm } from "../Fragments/InputForm";
import InputLayout from "../Layout/InputLayout";

export default function CreateNote() {
  return (
    <InputLayout title="Create Note" subtitle="Quick and Easy Note Creation">
      <InputForm />
    </InputLayout>
  );
}
