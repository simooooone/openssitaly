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

    blockquote {
      padding:20px;
      background-color: #9863a0;
      color:#fff;
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

    a {
      background-color: transparent;
      ${fgColor('#9863a0', '#842020', 300)}
      position:relative;
      display:inline-block;
      padding-left:26px;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px transparent;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }

    a:before {
      content:'star_border';
      font-size:5px;
      position:absolute;
      left:0;
      top:3px;
      text-decoration:none;
      color:#9863a0;
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;  /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    /* Icon Bob */
    @-webkit-keyframes hvr-icon-bob {
      0% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
      50% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
      }
      100% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
    }
    @keyframes hvr-icon-bob {
      0% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
      50% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
      }
      100% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
    }
    @-webkit-keyframes hvr-icon-bob-float {
      100% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
    }
    @keyframes hvr-icon-bob-float {
      100% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
    }
    
    a:hover:before, a:focus:before, a:active:before {
      -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;
      animation-name: hvr-icon-bob-float, hvr-icon-bob;
      -webkit-animation-duration: .3s, 1.5s;
      animation-duration: .3s, 1.5s;
      -webkit-animation-delay: 0s, .3s;
      animation-delay: 0s, .3s;
      -webkit-animation-timing-function: ease-out, ease-in-out;
      animation-timing-function: ease-out, ease-in-out;
      -webkit-animation-iteration-count: 1, infinite;
      animation-iteration-count: 1, infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-direction: normal, alternate;
      animation-direction: normal, alternate;
      color:#842020;
    }
    
    .linkcopy:before {
      font-size:15px;
      top:2px;
    }
    
    .linkcopy {
      padding-left:17px;
    }

    .nostar {
      padding-left:0;
    }

    .nostar:before {
      display:none;
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
        padding-left:14px;
    }

    ul li:before {
      content: '';
      position: absolute;
      background-color:#9863a0;
      border-radius:50%;
      left:0;
      top:11px;
      width:7px;
      height:7px;
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

`;
