import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { ModalContext } from '../Modal';

const Hit = styled(Link)`
  color: white;
  margin: ${props => props.theme.spaces[`2xs`]} 0;
  padding: ${props => props.theme.spaces.xs} 0;
  text-decoration: none;
  display: block;

  font-weight: 600;
  font-size: 1.1rem;
`;

export default ({ hit }) => {
  const { closeModal } = useContext(ModalContext);

  const onClick = e => {
    closeModal();
  };

  return (
    <Hit to={hit.fields.slug} onClick={onClick}>
      {hit.frontmatter.title}
    </Hit>
  );
};
