import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
// import ProductGrid from '../../components/ProductGrid';
import {getCookie, setCookie} from 'react-use-cookie';

const seo = ({data}) => ({
  title: data?.collection?.title,
  description: data?.collection?.description,
});

export const handle = {
  seo,
};

export async function loader({params, context, request}) {
  const {handle} = params;
  const searchParams = new URL(request.url).searchParams;
  const cursor = searchParams.get('cursor');

  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      handle,
      cursor,
    },
  });

  // Handle 404s
  if (!collection) {
    throw new Response(null, {status: 404});
  }
  return json({
    collection,
  });
}

export const meta = ({data}) => {
  return {
    title: data?.collection?.title ?? 'Collection',
    description: data?.collection?.description,
  };
};

export default function Collection() {
  const {collection} = useLoaderData();
  //personalization: we set the user type to the collection title that the user is currently viewing
  if (!getCookie('user_type)') && collection) {
    setCookie('user_type', collection.title);
  }
  return (
    <>
      <header className="grid w-full gap-8 py-8 justify-items-start">
        <h1 className="inline-block text-4xl font-bold whitespace-pre-wrap">
          {collection.title}
        </h1>

        {collection.description && (
          <div className="flex items-baseline justify-between w-full">
            <div>
              <p className="inline-block max-w-md whitespace-pre-wrap inherit text-copy">
                {collection.description}
              </p>
            </div>
          </div>
        )}
      </header>
      {/* <ProductGrid
        collection={collection}
        url={`/collections/${collection.handle}`}
      /> */}
    </>
  );
}

const COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!, $cursor: String) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(first: 4, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;
