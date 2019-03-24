require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const query = `{

  allMdx(
    filter: {
      fields: {
        source: {
          in: ["personal-blog-posts"]
        }
        slug: { ne: null }
      }
    }
    limit: 1000
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
          subTitle
        }
      }
    }
  }
}`;

const queries = [
  {
    query,
    transformer: ({ data }) => data.allMdx.edges.map(({ node }) => node),
  },
];

module.exports = {
  siteMetadata: {
    title: `Gatsby.js 'Personal blog' theme`,
    url: `https://github.com/greglobinski/gatsby-themes/tree/master/packages/gatsby-theme-personal-blog`,
    image: 'preview.jpg',
    language: 'en',
    description: 'coming soon...',
    socialLinks: [
      { name: 'github', url: 'https://github.com/greglobinski' },
      { name: 'twitter', url: 'https://twitter.com/greglobinski' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/greglobinski/' },
      { name: 'www', url: 'https://www.greglobinski.com' },
    ],
    pageLinks: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY
          ? process.env.ALGOLIA_ADMIN_API_KEY
          : '',
        indexName: process.env.ALGOLIA_INDEX_NAME
          ? process.env.ALGOLIA_INDEX_NAME
          : '',
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-posts`,
        path: `content/personal-blog/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-demo-posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-pieces`,
        path: `content/personal-blog/pieces`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-demo-pieces`,
        path: `${__dirname}/content/pieces`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-images`,
        path: `content/personal-blog/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-demo-images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        labelFormat: '[local]',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          'personal-blog-pieces': require.resolve(
            './src/templates/PieceTemplate'
          ),
          'personal-blog-demo-pieces': require.resolve(
            './src/templates/PieceTemplate'
          ),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
  ],
};
