import {Link} from '@remix-run/react';
import Menu from './Menu';
import CartIcon from './cart/CartIcon';
import Headroom from 'react-headroom';

const Header = () => {
  return (
    <Headroom>
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
    </Headroom>
  );
};

export default Header;
