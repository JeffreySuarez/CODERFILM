import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoderFilm from "./pages/CoderFilm";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Peliculas from "./pages/Peliculas";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoderFilm />} />
      <Route path="/CoderFilm" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Peliculas" element={<Peliculas />} />
        <Route
          path="Peliculas/category/terror/:categoriaID"
          element={<Peliculas />}
        />
        <Route
          path="Peliculas/category/accion/:categoriaID"
          element={<Peliculas />}
        />
        <Route
          path="Peliculas/category/marvel/:categoriaID"
          element={<Peliculas />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="detalle/:detalleID" element={<ItemDetailContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
