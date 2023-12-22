import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home, Checkout, Details } from "./pages";
import { CartProvider } from "./context/Cart.context";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
