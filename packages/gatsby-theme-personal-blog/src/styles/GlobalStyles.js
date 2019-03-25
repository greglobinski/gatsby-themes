import React from 'react';
import { Global, css } from '@emotion/core';
import breakpoints from './theme/breakpoints';

const GlobalStyles = () => (
  <Global
    styles={css`
      /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */

      /* Document
         ========================================================================== */

      /**
       * Use a better box model (opinionated).
       */

      html {
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      /**
       * Use a more readable tab size (opinionated).
       */

      :root {
        -moz-tab-size: 4;
        tab-size: 4;
      }

      /**
       * 1. Correct the line height in all browsers.
       * 2. Prevent adjustments of font size after orientation changes in iOS.
       */

      html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }

      /* Sections
         ========================================================================== */

      /**
       * Remove the margin in all browsers.
       */

      body {
        margin: 0;
      }

      /**
       * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
       */

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }

      /* Grouping content
         ========================================================================== */

      /**
       * Add the correct height in Firefox.
       */

      hr {
        height: 0;
      }

      /* Text-level semantics
         ========================================================================== */

      /**
       * Add the correct text decoration in Chrome, Edge, and Safari.
       */

      abbr[title] {
        text-decoration: underline dotted;
      }

      /**
       * Add the correct font weight in Chrome, Edge, and Safari.
       */

      b,
      strong {
        font-weight: bolder;
      }

      /**
       * 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
       * 2. Correct the odd 'em' font sizing in all browsers.
       */

      code,
      kbd,
      samp,
      pre {
        font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier,
          monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      /**
       * Add the correct font size in all browsers.
       */

      small {
        font-size: 80%;
      }

      /**
       * Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
       */

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      /* Forms
         ========================================================================== */

      /**
       * 1. Change the font styles in all browsers.
       * 2. Remove the margin in Firefox and Safari.
       */

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
      }

      /**
       * Remove the inheritance of text transform in Edge and Firefox.
       * 1. Remove the inheritance of text transform in Firefox.
       */

      button,
      select {
        /* 1 */
        text-transform: none;
      }

      /**
       * Correct the inability to style clickable types in iOS and Safari.
       */

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }
      /*
        end of modern-normalize
      */

      /*
        beginning custom global style
       */

      :root {
        --reach-menu-button: 1;
        --reach-dialog: 1;
      }

      body {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
        position: relative;
      }
      *,
      *:after,
      *:before {
        margin: 0;
        padding: 0;
      }

      @media (min-width: ${breakpoints.desktop}) {
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-thumb {
          background: #ddd;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      }
    `}
  />
);

export default GlobalStyles;
