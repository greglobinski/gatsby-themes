import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { UIContext } from '../../context/UIState';
import Header from './Header';
import SocialLinks from './SocialLinks';
import PageLinks from './PageLinks';
import Footer from '../shared/Footer';
import Note from './Note';

const Info = styled.aside`
  background: ${props => props.theme.palette.white};

  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  padding: ${props => props.theme.dimensions.sidebar.padding};
  transform: translateX(100%);
  transition: 1s ease-in-out;
  z-index: 5;

  &.featured {
    transform: translateX(0);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.dimensions.sidebar.width};
    z-index: 2;
    transform: translateX(0);

    a {
      text-decoration: none;
    }

    :after {
      content: '';
      position: absolute;
      right: -1px;
      display: flex;
      flex-direction: column;
      top: ${props => props.theme.spaces.xl};
      bottom: ${props => props.theme.spaces.xl};
      width: 1px;
      border-right: 1px solid ${props => props.theme.colors.line};
    }
  }
`;

const addPrefix = (prefix, str) =>
  prefix + str.charAt(0).toUpperCase() + str.slice(1);

export default props => {
  const { navigatorState, slideInNavigator, infoFeatured } = useContext(
    UIContext
  );

  return (
    <Info
      className={`${addPrefix('navigator', navigatorState)} ${
        infoFeatured ? 'featured' : ''
      }`}
    >
      <Header slideInNavigator={slideInNavigator} />
      <Note />
      <PageLinks />
      <SocialLinks />
      <Footer inSidebar />
    </Info>
  );
};
