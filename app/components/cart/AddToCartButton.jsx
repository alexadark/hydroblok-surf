import {useFetcher} from '@remix-run/react';

export const AddToCartButton = ({variantId, style}) => {
  const fetcher = useFetcher();

  const lines = [{merchandiseId: variantId, quantity: 1}];

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={'ADD_TO_CART'} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      <button className={` btn ${style}`}>Add to Cart</button>
    </fetcher.Form>
  );
};
