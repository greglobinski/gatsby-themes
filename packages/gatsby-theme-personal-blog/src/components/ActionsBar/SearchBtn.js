import React, { useContext, useRef } from 'react';

import { FiSearch } from 'react-icons/fi';

import IconButton from './IconButton';
import { ModalContext } from '../Modal';
import Search from '../Search';

export default () => {
  const btnRef = useRef(null);
  const { showModal } = useContext(ModalContext);

  return (
    <IconButton
      btnRef={btnRef}
      onClick={() => {
        showModal({
          Component: Search,
          props: { sourceRef: btnRef.current },
        });
      }}
    >
      <FiSearch />
    </IconButton>
  );
};
