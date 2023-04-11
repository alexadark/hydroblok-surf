import {storyblokEditable} from '@storyblok/react';
import {Link, useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

const SingleProduct = ({blok}) => {
  const {_uid, headline, layout, description, product: sbProduct} = blok;
  const selectedProduct = sbProduct?.items && sbProduct?.items[0];

  const {allProducts} = useLoaderData();

  const product = allProducts.find((p) => p?.title === selectedProduct?.name);
  const {handle, variants} = product || {};
  const selectedVariant = variants?.nodes[0];
  const {image} = selectedVariant || {};

  return (
    <div
      key={_uid}
      {...storyblokEditable(blok)}
      className="center-container md:grid grid-cols-2 gap-10 mt-16 items-center"
    >
      <div className={`${layout && 'order-2'} max-w-[500px] `}>
        <h2 className=" text-4xl md:text-6xl mb-5">{headline}</h2>
        <p className="mb-8">{description}</p>
        <Link to={`/products/${handle}`} className="btn inline-block">
          Go for it
        </Link>
      </div>
      <div>{image && <Image data={image} alt={product?.title} />}</div>
    </div>
  );
};
export default SingleProduct;
