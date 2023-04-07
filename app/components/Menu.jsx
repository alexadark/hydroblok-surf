import {Link} from '@remix-run/react';

Link;
const Menu = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/collections">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
