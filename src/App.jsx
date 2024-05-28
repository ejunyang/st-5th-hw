import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  const texts = useSelector((state) => state.texts); //texts 구독

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  console.log(texts);

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </div>
  );
}

export default App;
