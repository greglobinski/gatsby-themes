import React, { useState, createContext } from 'react';

import Overlay from './Overlay';
import Content from './Content';

export const ModalContext = createContext();
export const ModalConsumer = ModalContext.Consumer;

const DEFAULT_MODAL_STATE = {
  modalIsOpen: false,
  Component: () => null,
  modalProps: {},
};

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);

  const showModal = ({ Component, props }) => {
    setModalState({
      modalIsOpen: true,
      Component,
      modalProps: {
        ...props,
        isOpen: true,
      },
    });
  };

  const closeModal = () => {
    setModalState({
      Component: null,
      modalIsOpen: false,
      modalProps: {},
    });
  };

  return (
    <ModalContext.Provider
      value={{
        ...modalState,
        showModal: showModal,
        closeModal: closeModal,
      }}
    >
      {children}
      <ModalContext.Consumer>
        {({ modalIsOpen, Component, closeModal, modalProps }) => {
          const { sourceRef } = modalProps;

          return (
            <Overlay isOpen={modalIsOpen} onDismiss={closeModal}>
              <Content closeModal={closeModal} sourceRef={sourceRef}>
                {Component && <Component closeModal={closeModal} />}
              </Content>
            </Overlay>
          );
        }}
      </ModalContext.Consumer>
    </ModalContext.Provider>
  );
};
