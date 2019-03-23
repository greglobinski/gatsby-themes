import { useState } from 'react';

const useTag = () => {
  const [selectedTag, setSelectedTag] = useState('');

  return {
    selectedTag,
    setSelectedTag,
  };
};

export default useTag;
