import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Workflow from "./components/optionalPart/Workflow";
import Steps from "./components/steps3Section/Steps";
import Pricing from "./components/pricingSection/Pricing";
import Stats from "./components/stats/Stats";
import Banner from "./components/banner/Banner";
import Mainsection from "./components/mainSection/Mainsection";
import { ToastContainer } from "react-toastify";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart} />
      <Banner />
      <Stats />
      <Mainsection cart={cart} setCart={setCart} />
      <ToastContainer />
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
