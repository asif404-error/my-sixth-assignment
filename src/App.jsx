import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Workflow from "./components/optionalPart/Workflow";
import Steps from "./components/steps3Section/Steps";

function App() {
  const [cart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart} />
      <Steps />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
