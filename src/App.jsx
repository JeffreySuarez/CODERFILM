import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoderFilm from "./pages/CoderFilm";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Peliculas from "./pages/Peliculas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoderFilm />} />
      <Route path="/CoderFilm" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Peliculas" element={<Peliculas />} />
      </Route>
    </Routes>
  );
}

export default App;
