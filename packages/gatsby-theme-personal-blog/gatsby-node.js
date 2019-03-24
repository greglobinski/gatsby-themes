const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const _ = require('lodash');

const SLUG_SEPARATOR = '_';

exports.onPreBootstrap = ({ reporter }) => {
  const dirs = [
    'content',
    'content/personal-blog',
    'content/personal-blog/posts',
    'content/personal-blog/pieces',
    'content/personal-blog/images',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};

let userCreatedOwnPosts = false;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    createNodeField({
      node,
      name: `source`,
      value: source,
    });

    const eligiblePostSources = [
      'personal-blog-posts',
      'personal-blog-demo-posts',
    ];

    if (eligiblePostSources.includes(source)) {
      if (source === 'personal-blog-posts') {
        userCreatedOwnPosts = true;
      }

      if (userCreatedOwnPosts && source === 'personal-blog-demo-posts') {
        return;
      }

      const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

      let slug;
      let date;

      if (separatorExists) {
        const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
        const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
        slug =
          separatorPosition === 1
            ? null
            : `/${filePath.substring(slugBeginning)}`;
        date = filePath.substring(1, separatorPosition);
      } else {
        slug = filePath;
        date = null;
      }

      if (slug) {
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        });
      }

      if (date) {
        createNodeField({
          node,
          name: `date`,
          value: date,
        });
      }
    }
  }
};

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/PostTemplate.js');

  return graphql(
    `
      {
        allMdx(
          filter: {
            fields: {
              source: {
                in: ["personal-blog-posts", "personal-blog-demo-posts"]
              }
              slug: { ne: null }
            }
          }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                source
                date
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const edges = result.data.allMdx.edges;

    edges.forEach((edge, index) => {
      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};
