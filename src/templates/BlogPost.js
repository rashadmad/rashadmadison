import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Nav from "../components/nav";
import PropTypes from 'prop-types';

const BlogPostTemplate = ({ data }) => {
  if (!data || !data.markdownRemark) {
    return <p>Post not found</p>;
  }

  const { markdownRemark: post } = data;
  const { frontmatter } = post;

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
        url={data.site.siteMetadata.siteUrl + post.fields.slug}
      />
      <Nav page="blog" />
      <div className="mt-20 flex justify-center px-4">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {frontmatter.description}
            </p>
            <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        image
      }
      fields {
        slug
      }
    }
  }
`;