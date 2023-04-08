import {Link} from '@remix-run/react';

export const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 py-6 space-y-7 md:py-8 md:px-12">
      <h2 className="text-4xl font-bold whitespace-pre-wrap max-w-prose">
        Your cart is empty
      </h2>
      <Link to="/collections" className="btn">
        Continue shopping
      </Link>
    </div>
  );
};
