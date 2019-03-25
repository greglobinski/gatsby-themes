import React from 'react';
import styled from '@emotion/styled';

import socialLinks from '../../data/socialLinks';

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-top: ${props => props.theme.spaces.l};
  opacity: 1;
  transition: 0.5s ease;

  .navigatorAside &,
  .navigatorSlidingUp & {
    opacity: 0;
  }
`;

const SocialLink = styled.li`
  margin: 0 ${props => props.theme.spaces[`2xs`]} 0;

  a {
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    color: #999;

    :hover {
      svg {
        transform: scale(1.2);
      }
    }

    svg {
      width: 60%;
      height: 60%;
      transition: 0.5s ease;
      transform: scale(1);

      .navigatorSlidingDown & {
        transform: scale(1.2);
      }

      .navigatorSlidingUp & {
        transform: scale(0.5);
      }
    }
  }
`;

export default props => {
  const links = socialLinks();

  return (
    <SocialLinks>
      {links.map(link => {
        const Icon = link.icon;

        return (
          <SocialLink key={link.name}>
            <a href={link.url}>
              <Icon />
            </a>
          </SocialLink>
        );
      })}
    </SocialLinks>
  );
};
