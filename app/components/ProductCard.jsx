import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {AddToCartButton} from './cart';

export default function ProductCard({product}) {
  const {price, compareAtPrice, id} = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <div className="grid gap-6">
      <Link to={`/products/${product.handle}`}>
        <div className="relative rounded shadow-sm">
          {isDiscounted && (
            <div className="absolute top-0 right-0 px-2 py-1 m-4 text-right text-black uppercase bg-primary ">
              Sale
            </div>
          )}
          <Image data={product.variants.nodes[0].image} alt={product.title} />
        </div>
        <div className="grid gap-1">
          <h3 className="text-xl">{product.title}</h3>
          <div className="flex gap-4">
            <span className="flex gap-4 whitespace-pre-wrap max-w-prose inherit text-copy">
              <Money
                withoutTrailingZeros
                data={price}
                className="text-lg font-semibold"
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
        </div>
      </Link>
      <AddToCartButton variantId={id} style="px-3 py-2 bg-pink-500" />
    </div>
  );
}
