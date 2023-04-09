import {Link} from '@remix-run/react';

Link;
const Menu = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/collections">Boards</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
