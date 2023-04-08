import {useFetcher} from '@remix-run/react';
import {BsTrash3 as IconRemove} from 'react-icons/bs';

const RemoveFromCartButton = ({lineIds}) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value="REMOVE_FROM_CART" />
      <input type="hidden" name="linesIds" value={JSON.stringify(lineIds)} />
      <button
        className="mt-3 hover:-translate-y-1 transition duration-300 text-xl"
        type="submit"
      >
        <IconRemove />
      </button>
    </fetcher.Form>
  );
};

export default RemoveFromCartButton;
