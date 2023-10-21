import Label from "./Label";
import Input from "./Input";

export default function InputLabel(prop) {
  const { text, type, placeholder, htmlFor, onChange, value } = prop;

  function handleTitle(e) {
    let title = e.target.value;
    if (title.length > 50) {
      title = title.slice(0, 50);
    }
    onChange({ target: { value: title } });
  }

  return (
    <div className="w-full flex flex-col">
      <Label text={text} htmlFor={htmlFor} />
      <Input
        type={type}
        placeholder={placeholder}
        name="htmlFor"
        onChange={handleTitle}
        value={value}
      />
    </div>
  );
}