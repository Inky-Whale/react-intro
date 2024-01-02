import { useState, useEffect } from "react";
import "./App.css";

//Javascript XML
//JSX => Js + HTML
function App() {
  // const [getter, setter] = useState(initial)
  /*   const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal((prevState) => {
      return prevState + 1;
    });
  };

  const decrease = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  useEffect(() => {
    console.log("useEffect " + total);
  }, [total]); */

  const [toDo, setToDo] = useState("");

  let toDoList = [];

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);

  return (
    <>
      {/* <p>Total Click: {total}</p>
      <button
        onClick={() => {
          increase();
        }}
      >
        +
      </button>
      <button onClick={decrease}>-</button> */}
      <div className="center">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            toDoList.push(toDo);
          }}
        >
          Ekle
        </button>
        <ul>
          <li>Todo 1</li>
        </ul>
      </div>
    </>
  );
}

export default App;
