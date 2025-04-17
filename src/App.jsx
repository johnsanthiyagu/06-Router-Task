import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import { CartProvider } from "./Context/CartContext";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
