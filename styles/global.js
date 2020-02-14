import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`

  html, body{
    margin: 0;
  }

  *, *::after, *::before{
    box-sizing: border-box;
  }

  body{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 200;
    background-color: ${ colors.white };

    &::-webkit-scrollbar{
        width: 5px;
        background-color: $transparent-black;
        backdrop-filter: blur(5px);
    }

    &::-webkit-scrollbar-thumb{
        background-color: $main;
        border-radius: 2px;
    }

  }

  button{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
  }

`

export default GlobalStyle