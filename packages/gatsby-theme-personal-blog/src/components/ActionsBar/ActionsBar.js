import React, { useContext } from 'react';
import styled from '@emotion/styled';

import FullScreenBtn from './FullScreenBtn';
import SearchBtn from './SearchBtn';
import CategoryBtn from './CategoryBtn';
import TagBtn from './TagBtn';
import ScrollBtn from './ScrollBtn';
import HomeBtn from './HomeBtn';
import SettingsBtn from './SettingsBtn';
import { UIContext } from '../../context/UIState';

const ActionsBar = styled(`aside`)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 30px;
  right: 36px;
  width: 80px;
  padding: ${props => props.theme.spaces.s} 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  bottom: 30px;
  z-index: 4;
  transition: 3s ease;
`;

const Group = styled(`div`)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default () => {
  const { navigatorState, slideInNavigator } = useContext(UIContext);

  return (
    <ActionsBar>
      <Group>
        <HomeBtn
          navigatorState={navigatorState}
          slideInNavigator={slideInNavigator}
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
