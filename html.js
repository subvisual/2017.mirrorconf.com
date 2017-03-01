import React, { PropTypes } from 'react';

import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

const Html = ({ body }) => {
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

        <title>Mirror Conf 2017: a design and front-end development conference</title>
        <meta name="description" content="A conference that aims to blur the differences and point towards a collaborative future between designers and front-end developers. Get your early bird ticket!" />
        <meta name="robots" content="index,follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mirrorconf" />
        <meta name="twitter:title" content="Mirror Conf 2017" />
        <meta name="twitter:description" content="A conference that aims to blur the differences and point towards a collaborative future between designers and front-end developers. Get your early bird ticket!" />
        <meta name="twitter:creator" content="@mirrorconf" />

        <meta name="twitter:image" content="/banner.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mirror Conf 2017" />
        <meta property="og:url" content="http://mirrorconf.com/" />
        <meta property="og:image" content="/banner.png" />

        <meta property="og:description" content="A conference that aims to blur the differences and point towards a collaborative future between designers and front-end developers. Get your early bird ticket!" />
        <meta property="og:site_name" content="Mirror Conf 2017" />
        <meta property="fb:admins" content="100000633932565,1448175923,707387762,1187622729" />

        <meta itemProp="name" content="Mirror Conf 2017" />
        <meta itemProp="description" content="A conference that aims to blur the differences and point towards a collaborative future between designers and front-end developers. Get your early bird ticket!" />
        <meta itemProp="image" content="/banner.png" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {css}
        <script dangerouslySetInnerHTML={{ __html:
          `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-63400449-4', 'auto');
          ga('send', 'pageview');` }}
        />
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
