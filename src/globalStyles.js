import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow:hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  ::placeholder { color: #707070 }

  body {
    background: #edebeb;
    height: 100vh;
    margin: 0 auto; 
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    overflow: auto;
    height:100%
  }
`
