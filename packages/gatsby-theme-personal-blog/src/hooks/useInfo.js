import { useState } from 'react';

const useInfo = () => {
  const [infoFeatured, setInfoFeatured] = useState(false);

  return {
    infoFeatured,
    setInfoFeatured,
  };
};

export default useInfo;
