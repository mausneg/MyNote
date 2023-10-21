import Label from "./Label";
import Input from "./Input";

export default function InputLabel(prop) {
  const { text, type, placeholder, htmlFor, onChange } = prop;
  return (
    <div className="w-full flex flex-col">
      <Label text={text} htmlFor={htmlFor} />
      <Input
        type={type}
        placeholder={placeholder}
        name="htmlFor"
        onChange={onChange}
      />
    </div>
  );
}
