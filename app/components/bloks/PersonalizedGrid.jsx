import {getCookie} from 'react-use-cookie';
import {storyblokEditable, StoryblokComponent} from '@storyblok/react';

const PersonalizedGrid = ({blok}) => {
  const user_type = getCookie('user_type') || '';
  const variant = blok.variants.filter((v) => v.user_type === user_type);

  return (
    <div key={blok._uid} {...storyblokEditable(blok)}>
      {variant?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default PersonalizedGrid;
