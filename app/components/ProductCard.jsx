import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {AddToCartButton} from './cart';

export default function ProductCard({product}) {
  const {price, compareAtPrice, id} = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/products/${product.handle}`}>
      <div className="grid gap-6">
        <div className="shadow-sm rounded relative">
          {isDiscounted && (
            <div className="absolute top-0 right-0 m-4 text-right text-black bg-primary px-2 py-1 uppercase ">
              Sale
            </div>
          )}
          <Image data={product.variants.nodes[0].image} alt={product.title} />
        </div>
        <div className="grid gap-1">
          <h3 className="text-xl">{product.title}</h3>
          <div className="flex gap-4">
            <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
              <Money
                withoutTrailingZeros
                data={price}
                className="font-semibold text-lg"
              />
              {isDiscounted && (
                <Money
                  className="line-through opacity-50"
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
            </span>
          </div>
          <AddToCartButton variantId={id} style="px-3 py-2 bg-pink-500" />
        </div>
      </div>
    </Link>
  );
}
