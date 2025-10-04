import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router /> {/* Ici toutes tes routes sont gérées */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
