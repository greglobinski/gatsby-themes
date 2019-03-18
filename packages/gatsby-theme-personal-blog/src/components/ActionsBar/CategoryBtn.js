import React, { useContext, useRef } from 'react';

import { FiFolder } from 'react-icons/fi';

import IconButton from './IconButton';
import { ModalContext } from '../Modal';
import Categories from '../Categories';

export default () => {
  const btnRef = useRef(null);
  const { showModal } = useContext(ModalContext);

  return (
    <IconButton
      btnRef={btnRef}
      onClick={() => {
        showModal({
          Component: Categories,
          props: { sourceRef: btnRef.current },
        });
      }}
    >
      <FiFolder />
    </IconButton>
  );
};
