import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Notfound";
import About from "./pages/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}
