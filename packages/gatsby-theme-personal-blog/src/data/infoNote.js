import { useStaticQuery, graphql } from 'gatsby';

const infoNote = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/pieces/info-note/" } }) {
        edges {
          node {
            code {
              body
            }
            fields {
              source
            }
          }
        }
      }
    }
  `);

  const {
    allMdx: { edges },
  } = data;

  const nodes = edges.map(edge => edge.node);

  if (nodes.length === 1) {
    return nodes[0].code.body;
  } else {
    return nodes.find(node => {
      return node.fields.source === 'personal-blog-pieces';
    }).code.body;
  }
};

export default infoNote;
