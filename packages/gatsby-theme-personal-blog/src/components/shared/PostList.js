import { Link } from 'gatsby';
import styled from '@emotion/styled';

export const PostListHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  margin: ${props => props.theme.spaces.l} 0 ${props => props.theme.spaces.l};

  strong {
    font-weight: 600;
  }
`;

export const PostList = styled.ul`
  list-style: none;
`;

export const PostItem = styled.li``;

export const PostLink = styled(Link)`
  color: white;
  margin: ${props => props.theme.spaces[`2xs`]} 0;
  padding: ${props => props.theme.spaces.xs} 0;
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
`;
