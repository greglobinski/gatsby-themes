import { useStaticQuery, graphql } from 'gatsby';

const postList = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        filter: {
          fields: {
            source: { in: ["personal-blog-posts", "personal-blog-demo-posts"] }
            slug: { ne: null }
          }
        }
        sort: { fields: [fields___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
            frontmatter {
              title
              subTitle
              category
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    posts: { edges },
  } = data;

  const posts = edges.map(edge => {
    const {
      frontmatter: {
        title,
        subTitle,
        category,
        tags,
        cover: {
          childImageSharp: { fluid: imgData },
        },
      },
      fields: { slug, date },
    } = edge.node;

    return {
      title,
      subTitle,
      imgData,
      category,
      tags,
      slug,
      date,
    };
  });

  return posts;
};

export default postList;
