import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function displayCount() {
    setCount(count + 1);
  }

  return (
    <div className="button">
      <h2>
        Button has clicked: <span>{count} times </span>
      </h2>
      <button onClick={displayCount}>Click me</button>
    </div>
  );
}

export default App;
