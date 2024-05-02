import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home copy";
import News from "./News";
import Contact from "./Contact";

function ReactRouterTest() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default ReactRouterTest;