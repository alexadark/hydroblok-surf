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

export const loader = async ({params}) => {
  let slug = params['*'] ?? 'home';

  let sbParams = {
    version: 'draft',
  };

  let {data} = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  return json({
    story: data?.story,
  });
};
