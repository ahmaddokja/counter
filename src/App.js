import { useState } from "react";
import "./App.css";
import Counter from "./component/counter";

function App() {
  const [cont1, setCount1] = useState(0);
  const [cont2, setCount2] = useState(0);
  const [cont3, setCount3] = useState(0);

  const increaseCount1 = () => {
    setCount1((prev) => ++prev);
  };

  const decreaseCount1 = () => {
    setCount1((prev) => --prev);
  };
  const increaseCount2 = () => {
    setCount2((prev) => ++prev);
  };

  const decreaseCount2 = () => {
    setCount2((prev) => --prev);
  };
  const increaseCount3 = () => {
    setCount3((prev) => ++prev);
  };

  const decreaseCount3 = () => {
    setCount3((prev) => --prev);
  };
  return (
    <div className="App">
      <Counter
        valueOfCount={cont1}
        increase={increaseCount1}
        decrease={decreaseCount1}
      />
      <Counter
        valueOfCount={cont2}
        increase={increaseCount2}
        decrease={decreaseCount2}
      />
      <Counter
        valueOfCount={cont3}
        increase={increaseCount3}
        decrease={decreaseCount3}
      />
    </div>
  );
}

export default App;
