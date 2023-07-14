import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/includes/Header";
import TheFooter from "./components/includes/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Trending from "./pages/Trending";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Routes Start */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Routes End */}
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
