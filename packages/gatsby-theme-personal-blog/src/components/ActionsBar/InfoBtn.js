import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { FiInfo } from 'react-icons/fi';

import IconButton from './IconButton';

const InfoButton = styled(IconButton)`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const InfoBtn = ({ infoFeatured, setInfoFeatured }) => {
  function toggleInfo() {
    setInfoFeatured(!infoFeatured);
  }

  return (
    <InfoButton onClick={toggleInfo}>
      <FiInfo />
    </InfoButton>
  );
};

InfoBtn.propTypes = {
  infoFeatured: PropTypes.bool.isRequired,
  setInfoFeatured: PropTypes.func.isRequired,
};

export default InfoBtn;
