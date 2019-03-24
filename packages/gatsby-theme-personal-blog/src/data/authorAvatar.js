import { useStaticQuery, graphql } from 'gatsby';

const authorAvatar = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/images/avatar/" } }) {
        edges {
          node {
            sourceInstanceName
            childImageSharp {
              fixed(width: 132, height: 132) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const {
    allFile: { edges },
  } = data;

  const nodes = edges.map(edge => edge.node);

  if (nodes.length === 1) {
    return nodes[0].childImageSharp.fixed;
  } else {
    return nodes.find(node => {
      return node.sourceInstanceName === 'personal-blog-images';
    }).childImageSharp.fixed;
  }
};

export default authorAvatar;
