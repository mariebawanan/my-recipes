import { css } from 'styled-components';
import theme from './theme'

const { colors} = theme;

const mixins = {
  header: css`
    color: ${colors.orange}
    text-transform: uppercase
  `,
}

export default mixins;