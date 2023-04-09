import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

const CollectionCard = ({collection}) => {
  const {title, handle, image} = collection;
  if (image === null) return null;
  return (
    <Link
      to={`/collections/${handle}`}
      className="relative max-w-[500px] transition duration-500 hover:-translate-y-2"
    >
      <h2 className="absolute inset-0 flex items-end bottom-10 justify-center  text-3xl text-center bg-transparent shadow-lg ">
        <span className="bg-dark p-5">{title}</span>
      </h2>

      <Image data={image} alt={title} className="object-cover aspect-square" />
    </Link>
  );
};

export default CollectionCard;
