import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  color: white;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spaces[`4xl`]}
    ${props => props.theme.spaces.m} ${props => props.theme.spaces[`5xl`]};
`;

export const ModalHeading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.02em;

  display: flex;
  align-items: center;

  svg {
    width: 0.9em;
    margin-right: ${props => props.theme.spaces.m};
    color: #999;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  border: 0;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: none;
  cursor: pointer;
  z-index: 1;

  svg {
    stroke: white;
    width: 60%;
    height: 60%;
  }
`;
