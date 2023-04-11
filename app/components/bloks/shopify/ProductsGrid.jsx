import {Link, useLoaderData} from '@remix-run/react';
import {Money, Image} from '@shopify/hydrogen';
import {storyblokEditable} from '@storyblok/react';
import {AddToCartButton} from '~/components/cart';

const ProductsGrid = ({blok}) => {
  const {products} = blok;

  const {allProducts} = useLoaderData();

  return (
    <div
      key={blok._uid}
      {...storyblokEditable(blok)}
      className="center-container  sm:grid md:grid-cols-2  lg:grid-cols-4 gap 10 my-20"
    >
      {products.items?.map((sbProduct) => {
        const {name, id} = sbProduct || {};
        const product = allProducts.find((p) => p.title === name);
        const {handle, variants} = product;
        const selectedVariant = variants.nodes[0];
        const {price, compareAtPrice, image} = selectedVariant;
        const isDiscounted = compareAtPrice?.amount > price?.amount;
        return (
          <div key={id}>
            <Link to={`/products/${handle}`}>
              <Image
                data={image}
                alt={name}
                className="hover:scale-110 transition duration-500"
              />

              <h3>{name}</h3>

              <Money
                withoutTrailingZeros
                data={price}
                className="font-semibold text-lg"
              />
              {isDiscounted && (
                <Money
                  className="line-through opacity-50 text-lg"
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
            </Link>
            <AddToCartButton
              variantId={selectedVariant?.id}
              style="px-3 py-2 text-sm mt-2 font-semi-bold bg-pink-500"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
