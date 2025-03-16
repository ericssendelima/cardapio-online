import { Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/notFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
