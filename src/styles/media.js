import { css } from 'styled-components';

const displaySizes = {
  extraLarge: 1440,
  large: 1024,
  medium: 768,
  small: 425,
};

export const media = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${displaySizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;