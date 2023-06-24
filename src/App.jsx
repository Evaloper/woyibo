import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { Home } from "./pages/Home";
import { Carousel } from "./organisms/Carousel";
import Skills from "./organisms/Skills/Skills";
import { AboutMe } from "./organisms/Aboutme/AboutMe";?

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Carousel />
      {/* <AboutMe /> */}
      {/* <Skills /> */}
      <Footer />
    </>
  );
}

export default App;
