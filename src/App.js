import "./App.css";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CartPage";
import {Route, Routes} from "react-router-dom";
import CartProvider from "./Providers/CartProviders";

function App() {
  return (
    <Routes>
      <CartProvider>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
      </CartProvider>
    </Routes>
  );
}

export default App;
