import { useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';

import breakpoints from '../styles/theme/breakpoints';

let timeouts = [];

function setInitialState(location) {
  if (location.pathname === '/') {
    return `featured`;
  } else {
    return `aside`;
  }
}

const useNavigator = ({ location }) => {
  const navigator = useRef(null);
  const [navigatorState, setNavigatorState] = useState(
    setInitialState(location)
  );

  useEffect(() => {
    if (location.pathname === '/' && navigatorState !== `featured`) {
      setNavigatorState(`featured`);
    }

    if (location.pathname !== '/' && navigatorState === `featured`) {
      setNavigatorState(`aside`);
    }
  }, [location]);

  const desktopViewport = () =>
    window.matchMedia(`(min-width: ${breakpoints.desktop})`).matches;

  const slideOutNavigator = event => {
    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];

    if (navigatorState === `featured` && desktopViewport()) {
      setNavigatorState(`slidingOut`);

      timeouts[0] = setTimeout(() => {
        setNavigatorState(`slidedDown`);
        clearTimeout(timeouts[0]);

        timeouts[1] = setTimeout(() => {
          setNavigatorState(`slidingUp`);
          clearTimeout(timeouts[1]);

          timeouts[2] = setTimeout(() => {
            setNavigatorState(`aside`);
            clearTimeout(timeouts[2]);
          }, 500);
        }, 50);
      }, 500);
    } else {
      setNavigatorState(`aside`);
    }
  };

  const navigateToHomePage = () => {
    navigate('/');
    navigator.current.removeEventListener('transitionend', navigateToHomePage);
  };

  const slideInNavigator = event => {
    if (event) {
      event.preventDefault();
    }

    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];

    if (navigatorState === `aside` && desktopViewport()) {
      setNavigatorState(`slidingDown`);

      timeouts[0] = setTimeout(() => {
        setNavigatorState(`slidedOut`);
        clearTimeout(timeouts[0]);

        timeouts[1] = setTimeout(() => {
          setNavigatorState(`slidingIn`);
          clearTimeout(timeouts[1]);

          timeouts[2] = setTimeout(() => {
            setNavigatorState(`featured`);
            clearTimeout(timeouts[2]);
            navigate('/');
          }, 500);
        }, 50);
      }, 500);
    } else {
      setNavigatorState(`featured`);
      navigator.current.addEventListener('transitionend', navigateToHomePage);
    }
  };

  return {
    navigator,
    navigatorState,
    slideOutNavigator,
    slideInNavigator,
  };
};

export default useNavigator;
