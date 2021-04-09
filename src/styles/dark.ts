import { dimensions, fonts, colours, breakpoints } from './variables'
import { getEmSize } from './mixins'

export default `
  body {
    font-family: ${fonts.sansSerif};
    color: ${colours.black};
    background-color: ${colours.light.background};

    &.dark {
        -webkit-font-smoothing: antialiased;
        background-color: ${colours.black};
        color: ${colours.white};

        a {  
            color: hotpink;
        }

        h1 {
            color: green;
        }
    }
  }

  a {
    color: ${colours.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`
