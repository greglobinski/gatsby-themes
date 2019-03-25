import React, { createContext } from 'react';
import useNavigator from '../hooks/useNavigator';

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

  return (
    <UIContext.Provider
      value={{
        navigator,
        navigatorState,
        slideOutNavigator,
        slideInNavigator,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
