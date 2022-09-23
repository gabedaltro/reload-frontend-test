import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

input,
textarea,
button,
select,
li,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #fafafa;
    color: #222;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  input, textarea {
    border: 2px solid #e4e4e4;
    transition: border-color 0.4s ease;
    border-radius: 6px;

    :disabled {
      cursor: not-allowed;
    }

    &::placeholder {
      color: #ccc;
    }
  }

  a, a:hover, a:visited {
    color: #30519f;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    border: 0;
    cursor: pointer;
    transition: background 0.4s ease;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  textarea {
    background-color: #fafafa;
    padding: 10px;
    color: #2a2a2a;
  }

 ul, ol {
   padding: 0;
   margin: 0;
   list-style: none;
 }

li {
  list-style: none;
}

.print {
  width: 21cm;
  height: 29.7cm;
  box-shadow: 0px 0px 5px 1px #666;
  margin: 20px;
  padding: 1.5cm;
  p {
    margin: 0;
  }
}

@page {
  margin: 0.5;
  size: A4;
}

@media print {
  * {
    page-break-before: avoid;
  }

  .print {
    margin: 0;
    box-shadow: none;
    height: auto;
  }
}

  @media (min-width: 500px) {
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  * {
    -ms-overflow-style: 5px;  /* IE and Edge */
    scrollbar-width: thin;  /* Firefox */
    scrollbar-color: #b7c2e2 #f5f5f5;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b7c2e2;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b7c2e2;
  }
}

@media (max-width: 499px) {
  ::-webkit-scrollbar {
    display: none;
  }

  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
}

`;

export default GlobalStyle;
