import React, { useContext, useRef } from 'react';

import { FiSearch } from 'react-icons/fi';

import IconButton from './IconButton';
import { ModalContext } from '../Modal';
import { AppContext } from '../../context/AppState';
import Search from '../Search';

export default () => {
  const btnRef = useRef(null);
  const { showModal } = useContext(ModalContext);
  const { searchPhrase } = useContext(AppContext);

  return (
    <IconButton
      btnRef={btnRef}
      onClick={() => {
        showModal({
          Component: Search,
          props: { sourceRef: btnRef.current },
        });
      }}
      className={searchPhrase ? 'active' : ''}
    >
      <FiSearch />
    </IconButton>
  );
};
