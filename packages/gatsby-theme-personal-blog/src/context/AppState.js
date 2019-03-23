import React, { createContext } from 'react';
import useSearch from '../hooks/useSearch';
import useCategory from '../hooks/useCategory';
import useTag from '../hooks/useTag';

export const AppContext = createContext();

export const AppProvider = ({ children, location }) => {
  const { searchPhrase, setSearchPhrase } = useSearch();
  const { selectedCategory, setSelectedCategory } = useCategory();
  const { selectedTag, setSelectedTag } = useTag();

  return (
    <AppContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
        selectedCategory,
        setSelectedCategory,
        selectedTag,
        setSelectedTag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
