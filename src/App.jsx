import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/ui/Home";
import Navbar from "./components/Navbar";
import About from "./components/ui/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
