export type TOpenGraphTypeOptions =
  | 'webite'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other'
  | 'article'
  | 'book'
  | 'profile'
  | 'website';

export interface INextSEOMetaTagsProps {
  title: string;
  metaTitle?: string;
  description: string;
  metaDescription?: string;
  image: string;
  openGraph: {
    type: TOpenGraphTypeOptions;
    title: string;
    description: string;
    image: string;
    url: string;
    siteName?: string;
    locale?: string;
  };
  social: {
    twitter: {
      card: string;
      site: string;
      title: string;
      description: string;
      creator: string;
      image: string;
      imageAlt: string;
    };
  };
}
