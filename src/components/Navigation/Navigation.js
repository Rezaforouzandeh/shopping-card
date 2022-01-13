import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProviders";
import './Navigation.css';

const Navigation = () => {
  const {cart} = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <h2>Reza Shopping</h2>
        <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li className="cartLink">
             <NavLink to="/card">
             Cart
             </NavLink>
             <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
