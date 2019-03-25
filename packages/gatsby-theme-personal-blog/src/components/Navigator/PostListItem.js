import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { FiCalendar } from 'react-icons/fi';

import { UIContext } from '../../context/UIState';

const PostListItemRoot = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spaces.m};

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding: ${props => props.theme.spaces.l};

      .slidingDown &,
      .slidedDown &,
      .slidingUp &,
      .aside & {
        padding: ${props => props.theme.spaces.s}
          ${props => props.theme.spaces.l};
      }
    }
  }
`;

const TextContainer = styled.div`
  margin-left: ${props => props.theme.spaces.l};
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: ${props => props.theme.spaces.xl};

    .slidingDown &,
    .slidedDown &,
    .slidingUp &,
    .aside & {
      margin-left: ${props => props.theme.spaces.m};
    }
  }
`;

const PostTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes[`l`]};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes[`2xl`]};
    .slidingDown &,
    .slidedDown &,
    .slidingUp &,
    .aside & {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: 400;
    }
  }
`;

const PostSubtitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 300;
  line-height: 1.2;
  margin-top: ${props => props.theme.spaces.s};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.l};
    .slidingDown &,
    .slidedDown &,
    .slidingUp &,
    .aside & {
      display: none;
    }
  }
`;

const PostDate = styled.span`
  align-items: center;
  display: flex;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: ${props => props.theme.spaces.xs};

  svg {
    margin-right: ${props => props.theme.spaces.xs};
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .slidingDown &,
    .slidedDown &,
    .slidingUp &,
    .aside & {
      display: none;
    }
  }
`;

const PostCoverImage = styled.div`
  border-radius: 75% 65%;
  height: 60px;
  overflow: hidden;
  width: 60px;
  flex-shrink: 0;

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 90px;
    height: 90px;

    .slidingDown &,
    .slidedDown &,
    .slidingUp &,
    .aside & {
      height: 30px;
      width: 30px;
    }
  }
`;

const PostListItem = ({ post }) => {
  const { title, subTitle, date, slug, imgData } = post;
  const { slideOutNavigator } = useContext(UIContext);

  return (
    <PostListItemRoot>
      <Link to={slug} onClick={slideOutNavigator}>
        <PostCoverImage>
          <Img fluid={imgData} />
        </PostCoverImage>
        <TextContainer>
          <PostDate>
            <FiCalendar />
            {date}
          </PostDate>
          <PostTitle>{title}</PostTitle>
          <PostSubtitle>{subTitle}</PostSubtitle>
        </TextContainer>
      </Link>
    </PostListItemRoot>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    imgData: PropTypes.object,
    category: PropTypes.string,
  }).isRequired,
};

export default PostListItem;
