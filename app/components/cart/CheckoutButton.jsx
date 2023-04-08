export const CheckoutButton = ({checkoutUrl}) => {
  if (!checkoutUrl) return null;

  return (
    <div className="flex flex-col mt-2">
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Continue to Checkout
      </a>
    </div>
  );
};
