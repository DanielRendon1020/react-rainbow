import logo from "./logo.svg";
import "./App.css";
import ColorBlock from "./ColorBlock";
import { useState } from "react";
import ColorForm from "./ColorForm";


const DEFAULT_COLORS = [
  "violet",
  "blue",
  "lightblue",
  "green",
  "greenyellow",
  "yellow",
  "orange",
  "red",
];

function App() {
  const [colors, setColor] = useState(DEFAULT_COLORS);

  const onAddColor = (newColor) => setColor([...colors, newColor]);

  const colorMap = colors.map((color, index) => (
    <ColorBlock key={index} color={color} />
  ));
  return <div className="App">
    {colorMap}
    <ColorForm onAddColor={onAddColor} />
  </div>;
}

export default App;
