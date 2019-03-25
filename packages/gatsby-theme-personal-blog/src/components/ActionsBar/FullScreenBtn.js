import React, { useState } from 'react';
import screenfull from 'screenfull';
import styled from '@emotion/styled';

import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import IconButton from './IconButton';

const FullScreen = styled(IconButton)`
  svg {
    width: 22px;
    height: 22px;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 34px;
      height: 34px;
    }
  }
`;

export default () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (screenfull.enabled) {
    screenfull.on('change', () => {
      setIsFullscreen(screenfull.isFullscreen);
    });
  }

  return (
    screenfull.enabled && (
      <FullScreen onClick={() => screenfull.toggle()}>
        {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
      </FullScreen>
    )
  );
};
