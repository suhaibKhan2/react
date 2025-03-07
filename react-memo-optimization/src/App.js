import React, { useState, useCallback } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

const App = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // useCallback ensures the function reference does not change unless necessary
  const incrementA = useCallback(() => {
    setCountA((prev) => prev + 1);
  }, []);

  const incrementB = useCallback(() => {
    setCountB((prev) => prev + 1);
  }, []);

  console.log("Rendering App");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React.memo and useCallback Optimization</h1>

      <Counter text="Counter A" count={countA} />
      <Button handleClick={incrementA}>Increment A</Button>

      <Counter text="Counter B" count={countB} />
      <Button handleClick={incrementB}>Increment B</Button>
    </div>
  );
};

export default App;
