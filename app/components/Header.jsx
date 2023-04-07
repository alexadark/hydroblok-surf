import {Link} from '@remix-run/react';
import Menu from './Menu';
import CartDrawer from './cart/CartDrawer';
CartDrawer;

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
        <CartDrawer />
      </div>
    </header>
  );
};

export default Header;
