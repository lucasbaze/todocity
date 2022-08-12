import { NextSEOMetaTags } from '@todocity/seo';

const URL = 'todocity.app';
const TITLE = 'TodoCity - Home';
const DESCRIPTION = 'A gamified todo app to boost productivity and have fun!';
const IMAGE = 'https://todocity.app/static/images/todocity.png';

export const SEOMetaTags = () => {
  return (
    <NextSEOMetaTags
      title={TITLE}
      metaTitle={TITLE}
      description={DESCRIPTION}
      image={IMAGE}
      openGraph={{
        title: TITLE,
        type: 'website',
        image: IMAGE,
        description: DESCRIPTION,
        url: URL,
        siteName: TITLE,
      }}
      social={{
        twitter: {
          card: 'summary_large_image',
          site: 'todocity',
          creator: 'todocity',
          title: TITLE,
          description: DESCRIPTION,
          image: IMAGE,
          imageAlt: 'todocity',
        },
      }}
    />
  );
};
