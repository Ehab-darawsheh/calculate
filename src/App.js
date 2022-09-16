import React from "react";
import { useState } from "react";
import * as math from "mathjs";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const calculateResult = () => {
    const input = text.join(""); // REMOVE ALL COMMAS
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };
  const deleteElements = () => {
    setText(text.slice(0,-1))
  };

  const buttoncolor = "orange";
  const equalButtonColor = "green";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button sympol="7" handelClick={addToText} />
          <Button sympol="8" handelClick={addToText} />
          <Button sympol="9" handelClick={addToText} />
          <Button sympol="/" color={buttoncolor} handelClick={addToText} />
        </div>
        <div className="row">
          <Button sympol="4" handelClick={addToText} />
          <Button sympol="5" handelClick={addToText} />
          <Button sympol="6" handelClick={addToText} />
          <Button sympol="*" color={buttoncolor} handelClick={addToText} />
        </div>
        <div className="row">
          <Button sympol="1" handelClick={addToText} />
          <Button sympol="2" handelClick={addToText} />
          <Button sympol="3" handelClick={addToText} />
          <Button sympol="+" color={buttoncolor} handelClick={addToText} />
        </div>
        <div className="row">
          <Button sympol="0" handelClick={addToText} />
          <Button sympol="." handelClick={addToText} />
          <Button sympol="=" handelClick={calculateResult} color={equalButtonColor} />
          <Button sympol="-" color={buttoncolor} handelClick={addToText} />
        </div>
        <div className="row">
          <Button sympol="AC" color="red" handelClick={resetInput} />
          <Button sympol="del" color="red" handelClick={deleteElements} />
        </div>
      </div>
    </div>
  );
}

export default App;
