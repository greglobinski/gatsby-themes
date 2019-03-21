import React, { useContext, useRef } from 'react';

import { FiFolder } from 'react-icons/fi';

import IconButton from './IconButton';
import { ModalContext } from '../Modal';
import { AppContext } from '../../context/AppState';
import Categories from '../Categories';

export default () => {
  const btnRef = useRef(null);
  const { showModal } = useContext(ModalContext);
  const { selectedCategory } = useContext(AppContext);

  return (
    <IconButton
      btnRef={btnRef}
      onClick={() => {
        showModal({
          Component: Categories,
          props: { sourceRef: btnRef.current },
        });
      }}
      className={selectedCategory ? 'active' : ''}
    >
      <FiFolder />
    </IconButton>
  );
};
