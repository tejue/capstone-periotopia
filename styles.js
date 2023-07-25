import { createGlobalStyle } from "styled-components";
//import { Roboto } from "@next/font/google";

// const roboto = Roboto({
//   weight: ["100", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   //display: "swap",
// });

export default createGlobalStyle`
  
  :root {
  --background-color: #fff7ff;
  //--primary-color: #e3005f;
  --primary-color: #aa1146;
  --primary-color-text: #fff7ff;
  --secondary-color-text: #343a40;
  --highlight-color: #343a40;
  //--box-shadow: 0px -7px 20px rgba(238, 88, 141, 0.1);
  --padding-sides: 30px;
      }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    //font-family: ${roboto.style.fontFamily}; 
    font-family: system-ui;
    background-color: var(--background-color);
    color: var(--secondary-color-text);
    text-align: center; 
    }
`;
