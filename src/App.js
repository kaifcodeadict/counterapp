import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counterApp">
        <div
          className="btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </div>
        <div
          className="Counter"
          style={
            (count < 5 && { color: "red" }) ||
            (count > 100 && { color: "green" }) ||
            (count <= 100 && { color: "white" })
          }
        >
          {count}
        </div>
        <div
          className="btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </div>
      </div>
    </>
  );
}

export default App;
