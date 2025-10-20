import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter basename="/Kaza">
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
