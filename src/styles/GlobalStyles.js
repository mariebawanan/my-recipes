import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';

import theme from './theme';
const { colors, fontSizes } = theme;


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'ProductSans';
    src: url(${fontFamilies.ProductSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'ProductSans';
    src: url(${fontFamilies.ProductSansBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'ProductSans';
    src: url(${fontFamilies.ProductSansItalicTTF}) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: block;
  }

  @font-face {
    font-family: 'ProductSans';
    src: url(${fontFamilies.ProductSansBoldItalicTTF}) format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: block;
  }

  html {
    box-sizing: border-box;
    margin:0;
  }
  
  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${colors.lightGrey};
    color: ${colors.black};
    font-family: 'ProductSans';
    font-size: ${fontSizes.small};
    line-height 1.5rem;
    overflow-x: hidden;
  }

`

export default GlobalStyle;