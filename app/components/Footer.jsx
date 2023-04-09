import {Link} from '@remix-run/react';
const Footer = () => {
  return (
    <footer>
      <div className="center-container p-20">
        <div className="flex gap-3 items-center max-w-[400px]">
          <h1>
            <Link to="/">
              <img src="/images/ride_logo.avif" alt="logo" />
            </Link>
          </h1>
          <p>
            We find freedom in the waves, and our journey to find those waves is
            half the fun.
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-700">
        <div className="center-container flex items-center space-x-1 justify-center uppercase font-semi-bold tracking-wide text-[12px] py-10">
          {`© ${new Date().getFullYear()}`} Powered by{' '}
          <a
            href="https://storyblok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/sb-logo.svg"
              alt="storyblok-logo"
              className="mx-2"
            />
          </a>
          and
          <a
            href="https://hydrogen.shopify.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Hydrogen
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
