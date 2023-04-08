import {Link} from '@remix-run/react';
import Menu from './Menu';
import CartIcon from './cart/CartIcon';

const Header = () => {
  return (
    <header className="border-t-[20px] border-primary">
      <div className="center-container flex justify-between items-center py-5">
        <div className="flex items-center space-x-20">
          <h1>
            <Link to="/">
              <img src="/images/ride_logo.avif" alt="" />
            </Link>
          </h1>
          <Menu />
        </div>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
