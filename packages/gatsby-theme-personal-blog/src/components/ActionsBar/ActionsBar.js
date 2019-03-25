import React, { useContext } from 'react';
import styled from '@emotion/styled';

import FullScreenBtn from './FullScreenBtn';
import SearchBtn from './SearchBtn';
import CategoryBtn from './CategoryBtn';
import TagBtn from './TagBtn';
import ScrollBtn from './ScrollBtn';
import HomeBtn from './HomeBtn';
import SettingsBtn from './SettingsBtn';
import InfoBtn from './InfoBtn';
import { UIContext } from '../../context/UIState';

const ActionsBar = styled(`aside`)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.95);
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 6;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    top: 30px;
    right: 36px;
    width: 80px;
    padding: ${props => props.theme.spaces.s} 0;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    bottom: 30px;
    z-index: 4;
    transition: 0.5s ease;
  }
`;

const Group = styled(`div`)`
  display: flex;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

export default () => {
  const {
    navigatorState,
    slideInNavigator,
    infoFeatured,
    setInfoFeatured,
  } = useContext(UIContext);

  return (
    <ActionsBar>
      <Group>
        <HomeBtn
          navigatorState={navigatorState}
          slideInNavigator={slideInNavigator}
        />
        <InfoBtn
          infoFeatured={infoFeatured}
          setInfoFeatured={setInfoFeatured}
        />
        <SearchBtn />
        <CategoryBtn />
        <TagBtn />
      </Group>
      <Group>
        <SettingsBtn />
        <ScrollBtn />
        <FullScreenBtn />
      </Group>
    </ActionsBar>
  );
};
