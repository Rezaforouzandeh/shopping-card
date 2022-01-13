import "./App.css";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./Providers/CartProviders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChechOutPage from "./pages/ChechOutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/checkout" element={<ChechOutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
