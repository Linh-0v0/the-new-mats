import { createGlobalStyle } from "styled-components";
import "@fontsource/josefin-sans"; //Default is 400
import "@fontsource/josefin-sans/200.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/500.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";
//import "@fontsource/cooper-hewitt/600.css"                    //Import error somehow

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    max-width: 1920px;
    font-family: 'Josefin Sans';
    overflow: hidden;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

p {
    font-weight: 300;
    white-space: pre-wrap;
}

a {
    color: inherit;
    text-decoration: none;
}


`;

export default GlobalStyles;
