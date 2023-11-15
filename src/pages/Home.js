import { useState } from "react";
import Todos from "./Components/Todos";
// import "../scss/sass1.scss";

const Home = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    "todo 1",
    "todo 2",
    "todo 333",
    "todo 444",
    "todo 55555",
    "todo 55555",
    "todo 55555",
  ]);

  // const myStyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Sans-Serif",
  // };
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>Home</h1>
      <p>lorem ipcsom dolor sit amet, consectetur adipiscing elel</p>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count} <br />
        <button onClick={increment}> Increment +</button>
      </div>
    </>
  );
};

export default Home;
