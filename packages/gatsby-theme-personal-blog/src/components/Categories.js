import React, { useContext } from 'react';

import { FiFolder } from 'react-icons/fi';

import { AppContext } from '../context/AppState';
import { ModalContainer, ModalHeading } from './Modal';
import {
  PostList,
  PostItem,
  PostLink,
  PostListHeading,
} from './shared/PostList';
import {
  AttributeList,
  AttributeItem,
  AttributeButton,
  Instruction,
} from './shared/Attribute';
import postList from '../data/postList';
import { attributesToOrderedArray } from '../utils/helpers/attributes';

const Categories = ({ closeModal }) => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const posts = postList();
  const categories = {};

  posts.forEach(post => {
    const { category } = post;

    if (category && category !== null) {
      if (!categories[category]) {
        categories[category] = { name: category, numberOfPosts: 0 };
      }

      categories[category].numberOfPosts += 1;
    }
  });

  const orderedCategories = attributesToOrderedArray(categories);

  const filteredPosts = posts.filter(
    item => item.category === selectedCategory
  );

  const postLinkOnClick = () => {
    closeModal();
  };

  const categoryButtonOnClick = categoryName => () => {
    if (categoryName !== selectedCategory) {
      setSelectedCategory(categoryName);
    } else {
      setSelectedCategory('');
    }
  };

  const getPhrase = numberOfPosts => {
    if (numberOfPosts === 1) {
      return (
        <>
          is <strong>1</strong> post
        </>
      );
    }

    return (
      <>
        are <strong>{numberOfPosts}</strong> posts
      </>
    );
  };

  return (
    <ModalContainer>
      <ModalHeading>
        <FiFolder />
        Categories
      </ModalHeading>
      <Instruction>Select category: </Instruction>
      <AttributeList>
        {orderedCategories.map(category => (
          <AttributeItem key={category.name}>
            <AttributeButton
              onClick={categoryButtonOnClick(category.name)}
              className={selectedCategory === category.name ? 'active' : ''}
            >
              {category.name} {category.numberOfPosts}
            </AttributeButton>
          </AttributeItem>
        ))}
      </AttributeList>
      {selectedCategory && (
        <PostListHeading>
          There {getPhrase(categories[selectedCategory].numberOfPosts)} in the{' '}
          <strong>{selectedCategory}</strong> category:
        </PostListHeading>
      )}
      <PostList>
        {filteredPosts.map(post => (
          <PostItem key={post.slug}>
            <PostLink to={post.slug} onClick={postLinkOnClick}>
              {post.title}
            </PostLink>
          </PostItem>
        ))}
      </PostList>
    </ModalContainer>
  );
};

export default Categories;
