import React from 'react';
import { DialogOverlay } from '@reach/dialog';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const entry = keyframes`
  100% {
     opacity: 1;
  }
`;

export default ({ isOpen, onDismiss, children }) => {
  const Overlay = styled(DialogOverlay)`
    animation: ${entry} 0.75s ease-out forwards;
    align-items: center;
    position: fixed;
    background: transparent;
    display: flex;
    left: 0;
    min-height: 100vh;
    opacity: 0;
    right: 0;
    top: 0;
    z-index: 10000;
  `;

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      {children}
    </Overlay>
  );
};
