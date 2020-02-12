/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Image from "@images/social.jpg";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:site_name`,
          content: title
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl
        },
        {
          property: `og:image`,
          content: site.siteMetadata.siteUrl + Image
        },
        {
          property: `og:image:secure_url`,
          content: site.siteMetadata.siteUrl + Image
        },
        {
          property: `og:image:width`,
          content: `300`
        },
        {
          property: `og:image:height`,
          content: `430`
        },
        {
          property: `og:image:alt`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    >
      <link
        rel="preconnect"
        href="https://googleads.g.doubleclick.net"
        crossorigin
      />

      <link
        rel="preconnect"
        href="https://www.google-analytics.com"
        crossorigin
      />

      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
        crossorigin
      />

      <link rel="preconnect" href="https://www.google.com" crossorigin />
      <link rel="preconnect" href="https://www.google.com.br" crossorigin />

      <link
        rel="preconnect"
        href="https://www.googleadservices.com"
        crossorigin
      />

      <link rel="preconnect" href="https://connect.facebook.net" crossorigin />

      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
        crossorigin="anonymous"
        defer
      ></script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
