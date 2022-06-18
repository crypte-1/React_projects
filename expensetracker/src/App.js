import { useEffect, useState } from "react";
import "./App.css";
// import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
// {
//   /* <button onClick={() => setVaar(vaar + 1)}> me {vaar}</button> */
// }
// {
//   /* <Header name={"Harshini"} /> */
// }
