import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'

export default `
  body {
    font-family: ${fonts.sansSerif};
    color: ${colors.black};
    background-color: ${colors.white};

    &.dark {
        -webkit-font-smoothing: antialiased;
        background-color: black;
        color whitesmoke;

        a {  
            color: hotpink;
        }

        h1 {
            color: green;
        }
    }
  }

  a {
    color: ${colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`
