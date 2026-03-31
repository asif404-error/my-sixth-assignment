import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const [cart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart} />
      <Footer />
    </>
  );
}

export default App;
