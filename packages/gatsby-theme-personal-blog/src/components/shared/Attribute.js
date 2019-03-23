import styled from '@emotion/styled';

export const AttributeList = styled.ul`
  list-style: none;
  display: flex;
`;

export const AttributeItem = styled.li`
  margin: 0 ${props => props.theme.spaces.m} ${props => props.theme.spaces.m} 0;
`;

export const AttributeButton = styled.button`
  background: #222;
  color: white;
  border: none;
  padding: ${props => props.theme.spaces.xs} ${props => props.theme.spaces.s};
  cursor: pointer;

  &.active {
    background: #ddd;
    color: #333;
  }
`;

export const Instruction = styled.p`
  margin: ${props => props.theme.spaces.l} 0;
`;
