import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  :root {
  
  --backgroun-color: #fff7ff;
  --primary-color: #aa1146;
  --primary-color-text: #fff7ff;
  --secondary-color-text: #343a40;
  --highlight-color: #343a40;
  --box-shadow: 0px -7px 20px rgba(238, 88, 141, 0.5);
  --padding-sides: 30px;
  --app-header-height: 60px;
    }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--backgroun-color);
    color: var(--secondary-color-text);
    text-align: center; 
    }
`;
