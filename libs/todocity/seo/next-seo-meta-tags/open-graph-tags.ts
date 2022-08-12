import type { INextSEOMetaTagsProps } from '../types';

export const openGraphTags = (
  openGraph: INextSEOMetaTagsProps['openGraph']
) => {
  const tags = [
    { property: 'og:title', content: openGraph.title },
    { property: 'og:type', content: openGraph.type },
    { property: 'og:image', content: openGraph.image },
    { property: 'og:description', content: openGraph.description },
  ];

  if (openGraph.url) {
    tags.push({ property: 'og:url', content: openGraph.url });
  }

  if (openGraph.siteName) {
    tags.push({
      property: 'og:site_name',
      content: openGraph.siteName,
    });
  }

  if (openGraph.locale) {
    tags.push({ property: 'og:locale', content: openGraph.locale });
  }

  return tags;
};
