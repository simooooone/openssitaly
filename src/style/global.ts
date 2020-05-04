import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { fgColor } from '@bucket-of-bolts/styled-companion';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');

    .navbar {
      position:absolute;
      top:0;
      right:0;
      padding:5px 0 10px;
      background-color:rgba(255, 255, 255, 1);
      z-index:10;
      line-height:1;
    }
    .navbar a {
      margin:0 5px; 
      color:#9863a0;
      font-size:14px;
      text-decoration:none;
      display:inline-block;
      line-height:1;
    }

    .navbar a svg {
      width:23px;
    }

    .navbar a:hover {
      text-decoration:underline;
      color:#333;
    }

    html {
        font-size: 20px;
        cursor: default;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-tap-highlight-color: transparent;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    body {
        padding: 0 !important;
        margin: 0 !important;
        font-weight: 400;
        line-height: 1.4;
        font-size: 1rem;
        letter-spacing: -0.05px;
        color: ${theme.color.text};
        font-family: Roboto, sans-serif;
        min-width: 320px;
        background-color: ${theme.color.background};
        overflow-x: hidden;
    }

    html, body, #root {
        height: 100%;
    }

    *,
    ::before,
    ::after {
      box-sizing: border-box;
    }
    
    ::before,
    ::after {
      text-decoration: inherit;
      vertical-align: inherit;
    }
    
    dl dl,
    dl ol,
    dl ul,
    ol dl,
    ol ol,
    ol ul,
    ul dl,
    ul ol,
    ul ul {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    ul {
      margin:0;
      padding:0;
      list-style:none;
    }

    ul li {
        position:relative; 
        padding-left:15px;
    }

    ul li:after {
      content: '› ';
      position: absolute;
      color:#9863a0;
      left:0;
      top:0;
      bottom:0;
      margin:0 0 auto;
    }

    main {
      display: block;
    }

    nav ol,
    nav ul {
      list-style: none;
      padding: 0;
    }

    pre {
      font-family: monospace, monospace;
      font-size: 1rem;
    }

    a {
      background-color: transparent;
      ${fgColor('#9863a0', '#842020', 300)}
    }
    
    abbr[title] {
      text-decoration: underline;
      text-decoration: underline dotted;
    }

    b,
    strong {
      font-weight: bolder;
    }
    
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1rem;
    }
    
    small {
      font-size: 80%;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
      vertical-align: middle;
    }
    
    audio,
    video {
      display: inline-block;
    }
    
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    
    img {
      border-style: none;
    }
    
    svg:not([fill]) {
      fill: currentColor;
    }
    
    svg:not(:root) {
      overflow: hidden;
    }
    
    button,
    input,
    select {
      margin: 0;
    }
    
    button, a, input, textarea {
        outline: none;
    }
    
    button {
      overflow: visible;
      text-transform: none;
    }
    
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }
    
    input {
      overflow: visible;
    }
    
    select {
      text-transform: none;
    }
    
    textarea {
      margin: 0;
      overflow: auto;
      resize: vertical;
    }
    
    [type="checkbox"],
    [type="radio"] {
      padding: 0;
    }
    
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }
    
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    
    ::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    
    :-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    
    :-moz-ui-invalid {
      box-shadow: none;
    }
    
    summary {
      display: list-item;
    }
    
    canvas {
      display: inline-block;
    }
    
    a,
    area,
    button,
    input,
    label,
    select,
    summary,
    textarea,
    [tabindex] {
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }
    
    [hidden] {
      display: none;
    }

    [aria-busy="true"] {
      cursor: progress;
    }
    
    [aria-disabled="true"],
    [disabled] {
      cursor: not-allowed;
    }
    
    [aria-hidden="false"][hidden] {
      display: initial;
    }
    
    [aria-hidden="false"][hidden]:not(:focus) {
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }

    td {
        word-break: break-word;
    }

    p {
        margin-block-start: 1rem;
        margin-block-end: 1rem;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }

    table {
      width:100%;
    }

    table tr td {
      padding:5px 10px;
    }

    table tr td:first-child {
      background-color:#9863a0;
      color:#fff;
      text-align:left;
      border-bottom:1px solid #fff;
    }

    pre {
      overflow-x:scroll;
    }

    .sfondoEvidenza {
      padding:20px;
      background-color: #9863a0;
      color:#fff;
    }

`;
