import React, { useContext, useRef } from 'react';

import { FiSettings } from 'react-icons/fi';

import IconButton from './IconButton';
import { ModalContext } from '../Modal';
import Tags from '../Tags';

export default () => {
  const btnRef = useRef(null);
  const { showModal } = useContext(ModalContext);

  return (
    <IconButton
      btnRef={btnRef}
      onClick={() => {
        showModal({
          Component: Tags,
          props: { sourceRef: btnRef.current },
        });
      }}
    >
      <FiSettings />
    </IconButton>
  );
};
