import type { INextSEOMetaTagsProps } from '../types';

export const socialTags = ({ twitter }: INextSEOMetaTagsProps['social']) => {
  const twitterTags = [
    { name: 'twitter:card', content: twitter.card },
    {
      name: 'twitter:site',
      content: twitter.site,
    },
    { name: 'twitter:title', content: twitter.title },
    { name: 'twitter:description', content: twitter.description },
    {
      name: 'twitter:creator',
      content: twitter.creator,
    },
    { name: 'twitter:image', content: twitter.image },
    { name: 'twitter:image:alt', content: twitter.imageAlt },
  ];

  return twitterTags;
};
