import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen-react';
import RemoveFromCartButton from './RemoveFromCartButton';

const LineItem = ({lineItem}) => {
  const {merchandise, quantity} = lineItem;

  return (
    <div className="flex gap-4 items-center">
      <Link
        to={`/products/${merchandise.product.handle}`}
        className="flex-shrink-0"
      >
        <Image
          data={merchandise.image}
          width={110}
          height={110}
          alt={merchandise.product.title}
        />
      </Link>
      <div className="flex-1">
        <h3 className="mb-2">
          <Link
            to={`/products/${merchandise.product.handle}`}
            className="no-underline hover:underline"
          >
            {merchandise.product.title}
          </Link>
        </h3>
        <div className="text-sm ">Size: {merchandise.title}</div>
        <div className="text-sm ">Qty: {quantity}</div>
        <RemoveFromCartButton lineIds={[lineItem.id]} />
      </div>
      <Money data={lineItem.cost.totalAmount} className="font-semibold" />
    </div>
  );
};

export default LineItem;
