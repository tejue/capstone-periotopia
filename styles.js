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
   --background-color: #fdfbfb;
   --primary-color: #b14784;
  --primary-color-text: #fff7ff;
  --secondary-color-text: #343a40;
  --primary-highlight-color: #fb9f26;
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
    background-color: #F0E5E5;
     }

  button {
    font-family: ${roboto.style.fontFamily}; 
  }
`;
