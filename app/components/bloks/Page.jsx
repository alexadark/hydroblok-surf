import {storyblokEditable, StoryblokComponent} from '@storyblok/react';

const Page = ({blok}) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Page;
