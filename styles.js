import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`
  
  :root {
   --background-color: #fdfbfb;
  //--primary-color: #aa1146; 
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

  html,
  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily}; 
    //background-color: var(--background-color);
    color: var(--secondary-color-text);
    background-image: linear-gradient(to top, #FDC4C4, #fdfbfb);
    height: 100%;
  }

  button {
    font-family: ${roboto.style.fontFamily}; 
  }
`;
