import "./App.css";
import "./components/style.css";
import Header from "./header&footer/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Router, Routes } from "react-router";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/skills" element={<Skills />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/project" element={<Projects />} />
        </Routes>
    </>
  );
}

export default App;
