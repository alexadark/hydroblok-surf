import {Suspense} from 'react';
import {Await, Link} from '@remix-run/react';
import {BsCart2 as IconCart} from 'react-icons/bs';
import {useLoaderData} from '@remix-run/react';

const CartIcon = () => {
  const {cart} = useLoaderData();
  return (
    <Suspense>
      <Await resolve={cart}>
        {(data) => (
          <Link
            to="/cart"
            className="relative transition duration-500 hover:-translate-y-1"
          >
            <IconCart className="text-[35px] " />
            {data?.totalQuantity > 0 && (
              <div className="absolute bg-pink-500 text-black p-1  flex items-center justify-center rounded-full font-bold text-sm top-0 right-0 w-5 h-5">
                {data.totalQuantity}
              </div>
            )}
          </Link>
        )}
      </Await>
    </Suspense>
  );
};

export default CartIcon;
