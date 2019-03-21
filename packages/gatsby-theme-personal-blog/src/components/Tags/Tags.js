import React from 'react';
import styled from '@emotion/styled';

import { FiTag } from 'react-icons/fi';

const Tags = styled.div`
  color: white;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spaces[`4xl`]}
    ${props => props.theme.spaces.m} ${props => props.theme.spaces[`5xl`]};
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.02em;

  display: flex;
  align-items: center;

  svg {
    width: 0.9em;
    margin-right: ${props => props.theme.spaces.m};
    color: #999;
  }
`;

export default ({ closeModal }) => {
  return (
    <Tags>
      <Heading>
        <FiTag />
        Tags
      </Heading>
    </Tags>
  );
};
