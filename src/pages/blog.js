import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Link as GatsbyLink } from "gatsby";

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to &quot;content/blog&quot; (or the
        directory you specified for the &quot;gatsby-source-filesystem&quot; plugin in
        gatsby-config.js).
      </p>
    );
  }
  <Seo
  title="Rashads Blog"
  description="Welcome to my blog where I discuss my adventures in hacking and learning on the web."
/>

  return (
    <>
      <Seo
        title="Rashad's Blog"
        description="Welcome to my blog where I share my hacking adventures and knowledge."
        image={colorLogo}
      />
      <div className="blog-list">
        <h1>Blog Posts</h1>
        <ul>
          {posts.map(({ node }) => (
            <li key={node.fields.slug}>
              <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={node.fields.slug}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
          frontmatter: PropTypes.shape({
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.object,
};

export default BlogIndex;

export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image
        }
      }
    }
  }
`;