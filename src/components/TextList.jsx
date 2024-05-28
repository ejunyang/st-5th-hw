import { useSelector } from "react-redux";

export default function TextList() {
  const listValue = useSelector((state) => state.texts);
  const textValue = listValue.text;

  return (
    <ul>
      {textValue.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
