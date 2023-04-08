import {Link} from '@remix-run/react';
import {storyblokEditable} from '@storyblok/react';

const Banner = ({blok}) => {
  const {user_type, _uid, title, text, image} = blok;
  return (
    <section
      key={_uid}
      {...storyblokEditable(blok)}
      className="md:grid grid-cols-2 gap-10 mt-16 items-center"
    >
      <div>
        <h2 className="text-4xl md:text-6xl mb-5">{title}</h2>
        <p className="mb-10">{text}</p>
        <Link className="btn" to={`/collections/${user_type}`}>
          Find your board
        </Link>
      </div>
      <div>
        <img src={`${image.filename}/m/670x840`} alt={image.altText} />
      </div>
    </section>
  );
};

export default Banner;
