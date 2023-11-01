import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <nav>
            {/*<a href="/">Home</a>*/}
            {/*아래와 같음*/}
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      {/*<Home />*/}
    </div>
  );
}

export default App;
