import React, { useState } from 'react';
// eslint-disable-next-line @next/next/no-document-import-in-page;
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="preload" href="/fonts/Montserrat/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/Odibee_Sans/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/JetBrains_Mono/stylesheet.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
