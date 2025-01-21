// filepath: /Users/rashadmadison/Documents/Projects/rashadmadison/src/components/seo.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ description, lang, meta, title, image }) => {
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
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        metaImage && {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        metaImage && {
          name: `twitter:image`,
          content: metaImage,
        },
      ].filter(Boolean).concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Seo;