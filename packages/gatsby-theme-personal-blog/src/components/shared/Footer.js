import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import footerCredits from '../../data/footerCredits';

const Footer = styled.footer`
  padding: ${props => props.theme.spaces.xl};

  &.inSidebar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    transition: 0.5s ease;

    .navigatorFeatured &,
    .navigatorSlidingIn & {
      transform: translateY(0);
    }
  }
`;

const Credits = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};

  ul {
    list-style: none;
    display: flex;

    justify-content: center;
  }

  li {
    text-align: center;
    padding: 0 ${props => props.theme.spaces.xs};
  }

  .inSidebar & {
    ul {
      flex-direction: column;
    }
  }
`;

const FooterComponent = ({ inSidebar = false }) => {
  const credits = footerCredits();

  return (
    <Footer className={inSidebar ? `inSidebar` : ``}>
      <Credits dangerouslySetInnerHTML={{ __html: credits }} />
    </Footer>
  );
};

FooterComponent.propTypes = {
  inSidebar: PropTypes.bool,
};

export default FooterComponent;