import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Nav from "../components/nav";
import PropTypes from 'prop-types';

export default function BlogPostTemplate({ data, children }) {
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
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-sky-600">
                    By {frontmatter.author}
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {frontmatter.title}
                  </h1>
                  <p className="text-base mt-6 rounded-lg bg-orange-400 p-3 leading-8 text-white">
                    {frontmatter.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="h-[27rem] w-[48rem] min-w-3 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:h-auto"
                src={frontmatter.image}
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
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
  children: PropTypes.node,
};

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        author
        image
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;