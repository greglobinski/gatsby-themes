import React, { createContext } from 'react';
import useSearch from '../hooks/useSearch';
import useCategory from '../hooks/useCategory';

export const AppContext = createContext();

export const AppProvider = ({ children, location }) => {
  const { searchPhrase, setSearchPhrase } = useSearch('');
  const { selectedCategory, setSelectedCategory } = useCategory('');

  return (
    <AppContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
