import { useState } from 'react';

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return {
    selectedCategory,
    setSelectedCategory,
  };
};

export default useCategory;
