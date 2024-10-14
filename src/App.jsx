import { useState } from "react";
import "./App.css";
import Header from "./components/HomePage/header/header";
import About from "./components/HomePage/about/About";
import Home from "./components/HomePage/home/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
