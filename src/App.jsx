import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [cart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart} />
    </>
  );
}

export default App;
