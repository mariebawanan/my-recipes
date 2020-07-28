import { css } from 'styled-components';
import theme from './theme'
const { colors} = theme;

const mixins = {
  header: css`
    color: ${colors.orange}
    text-transform: uppercase
  `,

  button: css`
    background-color: ${colors.orange}
    text-transform: uppercase;
    font-size: 1.2em
    transition: all 0.3s ease 0s; 
    font-weight: 700
    padding: 1em 2em
    &:hover {
      background-color: ${colors.orange};
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
      color: #fff;
      transform: translateX(7px);
    }
    color: ${colors.white} 
    text-decoration: none
  `,

  label: css`
    color: ${colors.grey};
    font-style: italic;
  `
}

export default mixins;