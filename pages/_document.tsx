import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import { GoogleTagManagerNoScript } from '@todocity/analytics';
import { theme } from '@todocity/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <GoogleTagManagerNoScript />
        </body>
      </Html>
    );
  }
}
