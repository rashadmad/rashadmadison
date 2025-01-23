import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ description, lang, meta, title, image, keywords, publishedTime, modifiedTime, canonicalUrl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null;
  const metaKeywords = keywords || [];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `canonical`,
          href: canonicalUrl,
        },
      ]}
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
          content: site.siteMetadata.author.name,
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
        {
          name: `keywords`,
          content: metaKeywords.join(`, `),
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        publishedTime && {
          property: `article:published_time`,
          content: publishedTime,
        },
        modifiedTime && {
          property: `article:modified_time`,
          content: modifiedTime,
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
  keywords: [],
  publishedTime: null,
  modifiedTime: null,
  canonicalUrl: '',
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  canonicalUrl: PropTypes.string,
};

export default Seo;