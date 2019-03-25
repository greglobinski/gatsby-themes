import React, { useContext } from 'react';

import { FiTag } from 'react-icons/fi';

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

const Tags = ({ closeModal }) => {
  const { selectedTag, setSelectedTag } = useContext(AppContext);
  const posts = postList();
  const tags = {};

  posts.forEach(post => {
    const { tags: postTags } = post;

    if (postTags && Array.isArray(postTags)) {
      postTags.forEach(tag => {
        if (tag) {
          if (!tags[tag]) {
            tags[tag] = {
              name: tag,
              numberOfPosts: 0,
            };
          }

          tags[tag].numberOfPosts += 1;
        }
      });
    }
  });

  const orderedTags = attributesToOrderedArray(tags);

  const filteredPosts = posts.filter(post => {
    if (post.tags && Array.isArray(post.tags)) {
      return post.tags.includes(selectedTag);
    }

    return false;
  });

  const postLinkOnClick = () => {
    closeModal();
  };

  const tagButtonOnClick = name => () => {
    if (name !== selectedTag) {
      setSelectedTag(name);
    } else {
      setSelectedTag('');
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
        <FiTag />
        Tags
      </ModalHeading>
      <Instruction>Select tag: </Instruction>
      <AttributeList>
        {orderedTags.map(tag => (
          <AttributeItem key={tag.name}>
            <AttributeButton
              onClick={tagButtonOnClick(tag.name)}
              className={selectedTag === tag.name ? 'active' : ''}
            >
              {tag.name} {tag.numberOfPosts}
            </AttributeButton>
          </AttributeItem>
        ))}
      </AttributeList>
      {selectedTag && (
        <PostListHeading>
          There {getPhrase(tags[selectedTag].numberOfPosts)} with{' '}
          <strong>{selectedTag}</strong> tag:
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

export default Tags;
