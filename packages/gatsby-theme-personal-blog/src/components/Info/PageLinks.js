import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import pageLinks from '../../data/pageLinks';

const PageLinks = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  opacity: 1;
  margin-top: ${props => props.theme.spaces.l};
  transition: 0.5s ease;

  .navigatorAside &,
  .navigatorSlidingUp & {
    opacity: 0;
  }
`;

const PageLink = styled.li`
  a {
    display: block;
    padding: ${props => props.theme.spaces.s};
  }
`;

export default props => {
  const links = pageLinks();

  return (
    <PageLinks>
      {links.map(link => {
        return (
          <PageLink key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </PageLink>
        );
      })}
    </PageLinks>
  );
};
