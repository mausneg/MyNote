import Label from "./Label";
import Input from "./Input";

export default function InputLabel(prop) {
  const { text, type, placeholder } = prop;
  return (
    <div className="w-1/4 flex flex-col">
      <Label text={text} type={type} />
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
