import {CartLineItems, CartSummary, CheckoutButton} from '~/components/cart';

export const CartContent = ({cart}) => {
  return (
    <div className="center-container">
      <h1>Your Cart</h1>
      <div
        className={`flex flex-wrap justify-between w-full max-w-6xl gap-8 pb-12 mx-auto md:grid-cols-2 md:items-start md:gap-8 lg:gap-12`}
      >
        <div className="">
          <CartLineItems linesObj={cart.lines} />
        </div>
        <div className="">
          <CartSummary cost={cart.cost} />
          <CheckoutButton checkoutUrl={cart.checkoutUrl} />
        </div>
      </div>
    </div>
  );
};
