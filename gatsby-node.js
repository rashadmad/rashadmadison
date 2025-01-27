const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "content/blog" });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].node.id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id;

    createPage({
      path: post.node.fields.slug,
      component: path.resolve("./src/templates/BlogPost.js"),
      context: {
        id: post.node.id,
        previousPostId,
        nextPostId,
      },
    });
  });
};