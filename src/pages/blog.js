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
      <Nav page="blog" />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
      <div id="portfolio" className="grow bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="my-6 text-xl font-bold text-sky-400 md:text-6xl lg:text-7xl"> Rashads Blog</h1>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Welcome to my blog. Follow me on my journey of hacking, building, and learning in the world of the web.
            </p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-2xl grid-cols-1 place-content-center gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3" style={{ listStyle: `none` }}>
            {posts.reverse().map((post) => {
              const title = post.frontmatter.title || post.fields.slug;

                return (
                <li className="m-10 min-w-96" key={post.fields.slug}>
                  <img className="size-64 rounded-md" src={post.frontmatter.image} alt={title} />
                  <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                  >
                  <header>
                    <h2 className="text-sky-400">
                      {title}
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <div className="min-w-24">
                    <p
                      dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                      className="break-words"
                    />
                    </div>
                  </section>
                  </article>
                  <GatsbyLink
                  to={post.fields.slug}
                  className="rounded-md bg-sky-400 px-6 py-3 font-bold text-white no-underline hover:bg-gray-600"
                  >
                  Read
                  </GatsbyLink>
                </li>
                );
            })}
          </ol>
        </div>
      </div>
      </main>
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

export const Head = () => {
  return (
    <Seo
      title="Business Partner Login"
      description="Login to your Business Partner account"
      image="/logo.png"
    />
  );
};

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        tagline
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
          date(formatString: "YYYY-MM")
          title
          description
          image
        }
      }
    }
  }
`;