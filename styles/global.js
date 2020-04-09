import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`

  html, body{
    margin: 0;
    scroll-behavior: smooth;
  }

  *, *::after, *::before{
    box-sizing: border-box;
  }

  body{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 200;
    background-color: ${ colors.white };
    overflow-x: hidden;

    ::-webkit-scrollbar{
      width:10px
    }
    ::-webkit-scrollbar-track{
      background:#cccccc;
      border-radius:0px
    }
    ::-webkit-scrollbar-thumb{
      background:#880000;
      border-radius:0px
    }
  }

  button{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    outline-color: ${ colors.main };
  }

  input{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 100;
    outline-color: ${ colors.main };
    ::placeholder{
      color: ${ colors.grey };
    }
  }

`

export default GlobalStyle