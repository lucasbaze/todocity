import { PropsWithChildren } from 'react';

import Head from 'next/head';

import type { INextSEOMetaTagsProps } from '../types';
import { openGraphTags } from './open-graph-tags';
import { socialTags } from './social-tags';

export const NextSEOMetaTags = (
  props: PropsWithChildren<INextSEOMetaTagsProps>
) => {
  const { title, metaTitle, description, metaDescription, image, children } =
    props;
  return (
    <Head>
      <title>{title}</title>

      {/* Search engines */}
      <meta name="description" content={description} />

      {/* Schema.org (Google Plus) */}
      <meta itemProp="name" content={metaTitle ?? title} />
      <meta itemProp="description" content={metaDescription ?? description} />
      <meta itemProp="image" content={image} />

      {/* Social (Twitter) */}
      {socialTags(props.social).map((tag) => {
        return <meta key={tag.name} name={tag.name} content={tag.content} />;
      })}

      {/* Open Graph General (Facebook &amp; Pinterest) */}
      {openGraphTags(props.openGraph).map((tag) => (
        <meta
          key={tag.property}
          property={tag.property}
          content={tag.content}
        />
      ))}
      {children}
    </Head>
  );
};
