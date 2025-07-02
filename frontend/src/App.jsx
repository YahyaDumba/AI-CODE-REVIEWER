import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import Documentation from "./components/doc";
import Developer from "./components/developedby";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2"
import Marquee from "./components/Marquee"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          {/* <Route path="/" element={<Hero2/>}></Route> */}
          <Route path="/doc" element={<Documentation />}></Route>
          <Route path="/developedby" element={<Developer/>}></Route>
          <Route path="Main" element={<Main/>}></Route>
        </Routes>
        {/* <Marquee></Marquee> */}
        {/* <Herox></Herox 2> */}
      </Router>
      
    </>
  );
}

export default App;
