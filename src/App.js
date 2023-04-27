import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Featured from "./components/Featured";
import Test from "./components/Test";
import Contact from "./components/Contact";




export default function App() {
  return (
    <div className="gradient-background">
      <Nav />
      <About />
      <Featured />
      <Contact />
      <Test />
    </div>
  );
}
