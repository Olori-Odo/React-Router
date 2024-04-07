import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Count1 = () => {
  const [count, setCount] = useState(0);
  const [addition, setAddition] = useState(0);

  useEffect(() => {
    setAddition(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count} </p>
      <button onClick={() => setCount((c) => c + 1)}> Add </button>
      <p>Add Up: {addition} </p>
    </>
  );
};

export default Count1;
