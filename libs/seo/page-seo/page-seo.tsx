import React from 'react';

import { NextSEOMetaTags } from '../next-seo-meta-tags/next-seo-meta-tags';
import type { INextSEOMetaTagsProps } from '../types';

type IPageSEOMetaProps = Partial<
  Pick<
    INextSEOMetaTagsProps,
    | 'title'
    | 'metaTitle'
    | 'description'
    | 'metaDescription'
    | 'openGraph'
    | 'social'
  >
> & {
  url?: string;
  image?: string;
  imageAlt?: string;
  hideSiteName?: boolean;
};

export const DEFAULT_URL = 'todocity.app';
export const DEFAULT_TITLE = 'TodoCity - A Gamified Todo App';
export const DEFAULT_DESCRIPTION =
  'A new style todo app to boost productivity and have fun building your city!';
export const DEFAULT_IMAGE = 'https://todocity.app/static/image/todocity.png';
export const DEFAULT_IMAGE_ALT = 'TodoCity';

export const PageSEOMeta = ({
  url = DEFAULT_URL,
  social,
  openGraph,
  title = DEFAULT_TITLE,
  metaTitle = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
}: IPageSEOMetaProps) => {
  return (
    <NextSEOMetaTags
      title={title}
      metaTitle={metaTitle}
      description={description}
      image={image}
      openGraph={
        openGraph || {
          url,
          image,
          description,
          type: 'website',
          title: metaTitle,
          locale: 'en_US',
        }
      }
      social={{
        twitter: social?.twitter || {
          image,
          imageAlt,
          description,
          card: 'summary_large_image',
          site: '@todocity',
          title: metaTitle,
          creator: '@todocity',
        },
      }}
    >
      {/* Facebook ID */}
      {/* <meta content="133...275" property="fb:app_id" /> */}
      {/* Google verification ID */}
      {/* <meta
        content="c7H...CgI"
        name="google-site-verification"
      /> */}
    </NextSEOMetaTags>
  );
};
