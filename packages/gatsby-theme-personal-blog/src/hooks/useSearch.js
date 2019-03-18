import { useState } from 'react';

const useSearch = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  return {
    searchPhrase,
    setSearchPhrase,
  };
};

export default useSearch;
