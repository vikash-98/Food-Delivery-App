import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Placeholder from "./pages/Placeholder/Placeholder";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<Placeholder />} />
      </Routes>
    </div>
  );
}

export default App;
