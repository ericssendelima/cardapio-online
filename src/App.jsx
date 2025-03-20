import { Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/notFound";
import Produtos from "./pages/produtos/Produtos";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Produtos />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
