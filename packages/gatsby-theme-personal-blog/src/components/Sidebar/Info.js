import React from 'react';
import styled from '@emotion/styled';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';

import sidebarInfo from '../../data/sidebarInfo';

const Info = styled.div`
  font-size: ${props => props.theme.fontSizes.s};
  color: #666;
  line-height: 1.5;
  padding: 0 ${props => props.theme.spaces.m};
  opacity: 1;
  transition: 0.5s ease;

  .navigatorAside &,
  .navigatorSlidingUp & {
    opacity: 0;
  }
`;

export default props => {
  const info = sidebarInfo();

  return (
    <MDXProvider
      components={{
        wrapper: Info,
      }}
    >
      <MDXRenderer>{info}</MDXRenderer>
    </MDXProvider>
  );
};
