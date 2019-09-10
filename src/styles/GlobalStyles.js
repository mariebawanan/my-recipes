import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';


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

`

export default GlobalStyle;