import React from 'react';
import { DialogContent } from '@reach/dialog';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { FiX } from 'react-icons/fi';
import { CloseButton } from './Elements';

export default ({ children, closeModal, sourceRef }) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const sourceBounding = sourceRef.getBoundingClientRect();
  const sourceWidth = sourceBounding.width;
  const sourceHeight = sourceBounding.height;

  const sourceX = sourceBounding.x;
  const sourceY = sourceBounding.y;
  const sourceScaleX = sourceWidth / windowWidth;
  const sourceScaleY = sourceHeight / windowHeight;

  const translateX = `${sourceX}px`;
  const translateY = `${sourceY}px`;

  const outerEntry = keyframes`
    0% {
      transform:   translate3D(${translateX}, ${translateY}, 0)  scale(${sourceScaleX}, ${sourceScaleY})  perspective(1000px) rotateY(0);
    }
    30% {
      transform:   translate3D(${translateX}, ${translateY}, 0)  scale(${sourceScaleX}, ${sourceScaleY})  perspective(1000px) rotateY(0);
    }
    35% {
      transform:   translate3D(${translateX}, ${translateY}, 0)  scale(${sourceScaleX}, ${sourceScaleY})  perspective(1000px) rotateY(15deg);
    }
    100% {
      transform: translate3D(0, 0, 0) scale(1,1)   perspective(1000px) rotateY(0deg);
    }
  `;

  const innerEntry = keyframes`
    0%, 50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const Content = styled(DialogContent)`
    animation: ${outerEntry} 0.75s ease forwards;
    background-image: linear-gradient(
      315deg,
      rgba(51, 51, 51, 0.96),
      rgba(17, 17, 17, 0.98)
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    outline: none;
    overflow-y: auto;
    transform: translate3D(${translateX}, ${translateY}, 0)
      scale(${sourceScaleX}, ${sourceScaleY}) perspective(1000px) rotateY(0);
    transform-origin: top left;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #333;
    }
    ::-webkit-scrollbar-thumb {
      background: #666;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #999;
    }

    & > * {
      animation: ${innerEntry} 1s forwards;
      opacity: 0;
    }
  `;

  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <FiX />
      </CloseButton>
      {children}
    </Content>
  );
};
