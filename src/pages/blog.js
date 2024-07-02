import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Link as GatsbyLink } from "gatsby";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    );
  }

  return (
    <>
      <Nav page="blog"></Nav>
      <div id="portfolio" className="bg-white py-24 sm:py-32 flex-grow">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
              Welcome to my blog, Follow me on my journey of hacking, building and learning in the world of the web 
              </p>
            </div>
            <ol className="place-content-center mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3" style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li className="m-10 min-w-96" key={post.fields.slug}>
                <img className="size-64 rounded-md" src={post.frontmatter.image} />
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span className="text-sky-400" itemProp="headline">
                          {title}
                        </span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
                <GatsbyLink
                  to={post.fields.slug}
                  className="no-underline bg-sky-400 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
                >
                  Read
                </GatsbyLink>
              </li>
            );
          })}
        </ol>
          </div>
        </div>
    </>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
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
