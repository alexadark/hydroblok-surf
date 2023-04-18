import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from '@storyblok/react';

export const meta = () => {
  return {
    title: 'Hydrogen',
    description: 'A custom storefront powered by Hydrogen',
  };
};

const PageRoute = () => {
  let {story} = useLoaderData();
  story = useStoryblokState(story);

  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
};

export default PageRoute;

export const loader = async ({params, context}) => {
  let slug = params['*'] ?? 'home';

  let sbParams = {
    version: 'draft',
  };
  const {products} = await context.storefront.query(PRODUCTS_QUERY);

  let {data} = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  return json({
    story: data?.story,
    allProducts: products.nodes,
  });
};

const PRODUCTS_QUERY = `#graphql
  query  {
    products(first: 100) {
    nodes {
      title
      handle
      id
      variants(first:1) {
        nodes {
          id
          image {
          id
          url
          altText
          width
          height
        }
          price {
            currencyCode
            amount
          }
        }
      }
    }
  }
  }
`;
