import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <h2>Reza Shopping</h2>
        <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/card">Card</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
