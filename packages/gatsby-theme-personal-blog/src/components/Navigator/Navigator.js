import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { UIContext } from '../../context/UIState';
import PostList from './PostList';
import postList from '../../data/postList';

const Navigator = styled.nav`
  background: ${props => props.theme.palette.white};
  height: 100vh;
  left: 0;
  overflow-y: auto;
  padding: ${props => props.theme.spaces.xs};
  position: fixed;
  top: 0;
  transform: translate(0, 0);
  will-change: transform;
  width: 100%;
  z-index: 1;

  &.aside {
    transform: translateX(-100%);
    transition: 0.5s ease-in-out;
  }

  &.featured {
    transform: translateX(0);
    transition: 0.5s ease-in-out;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spaces.m};

    &.featured,
    &.slidedOut,
    &.slidingIn,
    &.slidingOut {
      width: calc(100% - ${props => props.theme.dimensions.sidebar.width});
      padding-right: 120px;
    }

    &.featured,
    &.slidingIn {
      transform: translate(${props => props.theme.dimensions.sidebar.width}, 0);
    }

    &.slidedOut,
    &.slidingOut {
      transform: translate(
        calc((100% - ${props => props.theme.dimensions.sidebar.width}) * -1),
        0
      );
    }

    &.aside,
    &.slidedDown,
    &.slidingDown,
    &.slidingUp {
      height: calc(
        100vh - ${props => props.theme.dimensions.sidebar.header.minHeight}
      );
      padding: 0;
      width: ${props => props.theme.dimensions.sidebar.width};
      z-index: 3;
    }

    &.aside,
    &.slidingUp {
      transform: translate(
        0,
        ${props => props.theme.dimensions.sidebar.header.minHeight}
      );
    }

    &.slidedDown,
    &.slidingDown {
      transform: translate(0, 100vh);
    }

    &.slidingDown,
    &.slidingIn,
    &.slidingOut,
    &.slidingUp {
      transition: 0.5s ease-in-out;
    }
  }
`;

export default () => {
  const { navigator, navigatorState } = useContext(UIContext);
  const posts = postList();

  return (
    <Navigator className={navigatorState} ref={navigator}>
      <PostList posts={posts} />
    </Navigator>
  );
};
