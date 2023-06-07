import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Movies from './pages/movies.js'
import Details from './pages/details'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/moviesdetail/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
