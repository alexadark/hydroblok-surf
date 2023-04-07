import {Suspense} from 'react';
import {Await} from '@remix-run/react';
import {BsCart2 as IconCart} from 'react-icons/bs';
import {Drawer, useDrawer} from '~/components/Drawer';
import {useFetchers} from '@remix-run/react';
import {useEffect} from 'react';
// import {CartContent, CartEmpty} from '~/components/cart';
import {useLoaderData} from '@remix-run/react';

const CartDrawer = () => {
  return (
    <div>
      <IconCart />
    </div>
  );
};

export default CartDrawer;
