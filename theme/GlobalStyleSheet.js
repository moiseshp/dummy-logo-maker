import { createGlobalStyle } from 'styled-components';

export const GlobalStyleSheet = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0, 0);
    -webkit-tap-highlight-color: transparent;
    font-family: inherit
  }

  *:focus { outline:none !important }

  html {
    font-size: ${({ theme }) => theme.typography.htmlFontSize};
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-size: ${({ theme }) => theme.typography.fontSize};
    color: ${({ theme }) => theme.palette.textPrimary};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.body} 
  }

  a {
    color: ${({ theme }) => theme.palette.primary}
  }

  strong {
    font-weight: ${({ theme }) => theme.typography.bolder};
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }
`;
