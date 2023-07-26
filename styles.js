import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`
  
  :root {
  --background-color: #fdfbfb;
  //--background-color: #fff7ff;
  //--primary-color: #e3005f;
  --primary-color: #aa1146;
  --primary-color-text: #fff7ff;
  --secondary-color-text: #343a40;
  //--highlight-color: #343a40;
  --highlight-color: #fb9f26;
  //--box-shadow: 0px -7px 20px rgba(238, 88, 141, 0.1);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily}; 
    background-color: var(--background-color);
    color: var(--secondary-color-text);
    
  }
`;
