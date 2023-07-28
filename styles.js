import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`
  
  :root {
  --background-color: #eee7e7;
  --primary-color: #7F5282;
  --primary-color-text: #fff7ff;
  --secondary-color-text: #343a40;
  --primary-highlight-color: #E59329;
  --secondary-highlight-color: #343a40;
  --tertier-highlight-color: #fb5c5b;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily}; 
    color: var(--secondary-color-text);
    background-color: var(--background-color);
     }

  button {
    font-family: ${roboto.style.fontFamily}; 
  }
`;
