import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { ModalContext } from '../Modal';

const Hit = styled(Link)`
  color: white;
  margin: ${props => props.theme.spaces.xs} 0;
  padding: ${props => props.theme.spaces.xs} 0;
  text-decoration: none;
  display: block;

  strong {
    font-size: 1.2rem;
    display: block;
  }

  span {
    display: block;
    margin-top: ${props => props.theme.spaces[`3xs`]};
  }
`;

export default ({ hit }) => {
  const { closeModal } = useContext(ModalContext);

  const onClick = e => {
    closeModal();
  };

  return (
    <Hit to={hit.fields.slug} onClick={onClick}>
      <strong>{hit.frontmatter.title}</strong>
      <span>
        {hit.frontmatter.subTitle && <span>{hit.frontmatter.subTitle}</span>}
      </span>
    </Hit>
  );
};
