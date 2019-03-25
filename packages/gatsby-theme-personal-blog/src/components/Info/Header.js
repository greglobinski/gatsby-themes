import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { BaseTitle } from '../shared/Typography';
import authorAvatar from '../../data/authorAvatar';

const Header = styled.header`
  width: 100%;
`;

const Avatar = styled.div`
  width: ${props => props.theme.dimensions.avatar.owner.width};
  height: ${props => props.theme.dimensions.avatar.owner.width};
  border: 1px solid #999;
  border-radius: 65% 75%;
  position: relative;
  margin-bottom: ${props => props.theme.spaces.m};
  top: 0;
  left: 0;
  overflow: hidden;
  will-change: transform;
  transition: 0.5s ease;
  transform: translate(
    calc(
      (${props => props.theme.dimensions.sidebar.width} / 2) -
        (${props => props.theme.dimensions.avatar.owner.width} / 2) -
        ${props => props.theme.dimensions.sidebar.padding}
    ),
    0
  );

  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: 100%;
  }

  .navigatorSlidingUp &,
  .navigatorAside & {
    border-radius: 75% 65%;
    transform: translate(
        calc(${props => props.theme.dimensions.avatar.owner.width} * -0.25),
        calc(${props => props.theme.dimensions.avatar.owner.width} * -0.2)
      )
      scale(0.5);
  }

  .navigatorAside &,
  .navigatorFeatured & {
    transition: none;
  }
`;

const Title = styled(BaseTitle)`
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes[`2xl`]};
  position: absolute;
  white-space: nowrap;
  display: inline-block;
  left: 0;
  top: 0;
  transition: 0.5s ease;
  transform: translateX(
    calc(
      (${props => props.theme.dimensions.sidebar.width} / 2) - 50% -
        (${props => props.theme.dimensions.sidebar.padding} * 2)
    )
  );
  line-height: 1;

  .navigatorSlidingUp &,
  .navigatorAside & {
    transform: translateX(0);
  }

  .navigatorAside &,
  .navigatorFeatured & {
    transition: none;
  }
`;

const Subtitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.s};
  margin-top: 0.25em;
  top: calc(
    ${props => props.theme.fontSizes[`2xl`]} +
      ${props => props.theme.spaces[`2xs`]}
  );

  .navigatorSlidingUp &,
  .navigatorAside & {
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

const Hgroup = styled.hgroup`
  height: 5rem;
  position: relative;
  transition: 0.5s ease;
  transform: translate(
    calc(${props => props.theme.dimensions.avatar.owner.width} * 0.4),
    0
  );
  width: calc(
    100% - (${props => props.theme.dimensions.avatar.owner.width} * 0.8)
  );
  will-change: transform;

  .navigatorSlidingUp &,
  .navigatorAside & {
    transform: translate(
      calc(${props => props.theme.dimensions.avatar.owner.width} * 0.7),
      calc(
        (
            ${props => props.theme.dimensions.avatar.owner.width} +
              ${props => props.theme.spaces.m}
          ) * -1
      )
    );
  }

  .navigatorAside &,
  .navigatorFeatured & {
    transition: none;
  }
`;

export default props => {
  const { slideInNavigator } = props;
  const avatar = authorAvatar();

  return (
    <Header>
      <Link to="/" onClick={slideInNavigator}>
        <Avatar>
          <Img fixed={avatar} />
        </Avatar>
        <Hgroup>
          <Title>greg lobinski</Title>
          <Subtitle>personal blog</Subtitle>
        </Hgroup>
      </Link>
    </Header>
  );
};
