import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { FiFolder } from 'react-icons/fi';

import { AppContext } from '../../context/AppState';
import postList from '../../data/postList';

const Categories = styled.div`
  color: white;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spaces[`4xl`]}
    ${props => props.theme.spaces.m} ${props => props.theme.spaces[`5xl`]};
`;

const Title = styled.h1`
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

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
`;

const CategorItem = styled.li`
  margin: 0 ${props => props.theme.spaces.m} ${props => props.theme.spaces.m} 0;
`;

const CategoryButton = styled.button`
  background: #222;
  color: white;
  border: none;
  padding: ${props => props.theme.spaces.xs} ${props => props.theme.spaces.s};
  cursor: pointer;
`;

const Tip = styled.p`
  margin: ${props => props.theme.spaces.l} 0;
`;

const PostList = styled.ul`
  list-style: none;
`;

const PostItem = styled.li``;

const PostLink = styled(Link)`
  color: white;
  margin: ${props => props.theme.spaces[`2xs`]} 0;
  padding: ${props => props.theme.spaces.xs} 0;
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
`;

export default ({ closeModal }) => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const posts = postList();
  const categories = {};

  posts.forEach(post => {
    const { category } = post;

    if (category && category !== null) {
      if (!categories[category]) {
        categories[category] = { name: category, numberOfPosts: 1 };
      }

      categories[category].numberOfPosts += 1;
    }
  });

  const orderedCategories = Object.values(categories).sort(
    (a, b) => a.name + b.name
  );

  const filteredPosts = posts.filter(
    item => item.category === selectedCategory
  );

  const onClick = e => {
    closeModal();
  };

  return (
    <Categories>
      <Title>
        <FiFolder />
        Categories
      </Title>
      <Tip>Select category: </Tip>
      <CategoryList>
        {orderedCategories.map(category => (
          <CategorItem key={category.name}>
            <CategoryButton onClick={() => setSelectedCategory(category.name)}>
              {category.name} {category.numberOfPosts}
            </CategoryButton>
          </CategorItem>
        ))}
      </CategoryList>
      <PostList>
        {filteredPosts.map(post => (
          <PostItem key={post.slug}>
            <PostLink to={post.slug} onClick={onClick}>
              {post.title}
            </PostLink>
          </PostItem>
        ))}
      </PostList>
    </Categories>
  );
};
