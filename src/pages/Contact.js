import { useState, useEffect } from "react";
import Comp1 from "./Components/Comp1";
const Contact = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <h1>Contact Me</h1>;<h1>I've rendered {count} times!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
      <Comp1 />
    </>
  );
};

export default Contact;
