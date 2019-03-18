import React from 'react';
import styled from '@emotion/styled';

const Categories = styled.div`
  color: white;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spaces[`4xl`]}
    ${props => props.theme.spaces.m} ${props => props.theme.spaces[`5xl`]};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
`;

export default ({ closeModal }) => {
  return (
    <Categories>
      <Title>Categories</Title>
    </Categories>
  );
};
