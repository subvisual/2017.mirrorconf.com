import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

const Html = ({ body }) => {
  const head = Helmet.rewind();

  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src="https://use.typekit.net/tzn4lss.js" />
        <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  );
};

Html.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Html;
