import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Traning from "./Pages/Training/Traning";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traning" element={<Traning />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
