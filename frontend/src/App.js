import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="myApp">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*         <Route path="/register" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
