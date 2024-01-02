import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

//Javascript XML
//JSX => Js + HTML
function App() {
  let totalCount = 0;
  const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal(total + 1);
  };

  const decrease = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  return (
    <>
      <p>Total Click: {total}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default App;
