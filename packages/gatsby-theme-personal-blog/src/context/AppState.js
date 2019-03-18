import React, { createContext } from 'react';
import useSearch from '../hooks/useSearch';

export const AppContext = createContext();

export const AppProvider = ({ children, location }) => {
  const { searchPhrase, setSearchPhrase } = useSearch('');

  return (
    <AppContext.Provider value={{ searchPhrase, setSearchPhrase }}>
      {children}
    </AppContext.Provider>
  );
};
