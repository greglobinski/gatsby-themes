import React, { createContext } from 'react';
import useNavigator from '../hooks/useNavigator';
import useInfo from '../hooks/useInfo';

export const UIContext = createContext();

export const UIProvider = ({ children, location }) => {
  const {
    navigator,
    navigatorState,
    slideOutNavigator,
    slideInNavigator,
  } = useNavigator({
    location,
  });

  const { infoFeatured, setInfoFeatured } = useInfo();

  return (
    <UIContext.Provider
      value={{
        navigator,
        navigatorState,
        slideOutNavigator,
        slideInNavigator,
        infoFeatured,
        setInfoFeatured,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
