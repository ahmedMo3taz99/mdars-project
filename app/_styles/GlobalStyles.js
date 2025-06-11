"use client";
const { createGlobalStyle } = require("styled-components");

// const GlobalStyles = createGlobalStyle`

// :root {
//     /* Indigo */
//     --color-brand-50: #eef2ff;
//     --color-brand-100: #e0e7ff;
//     --color-brand-200: #c7d2fe;
//     --color-brand-500: #6366f1;
//     --color-brand-600: #4f46e5;
//     --color-brand-700: #4338ca;
//     --color-brand-800: #3730a3;
//     --color-brand-900: #312e81;

//     /* Grey */
//     --color-grey-0: #fff;
//     --color-grey-50: #f9fafb;
//     --color-grey-100: #f3f4f6;
//     --color-grey-200: #e5e7eb;
//     --color-grey-300: #d1d5db;
//     --color-grey-400: #9ca3af;
//     --color-grey-500: #6b7280;
//     --color-grey-600: #4b5563;
//     --color-grey-700: #374151;
//     --color-grey-800: #1f2937;
//     --color-grey-900: #111827;

//     --color-web :#10BDBD;
//     --color-web-2 :#EA6020;

//     --color-primary : #2A32D3;
//       --secondary-color: #48be9a;

//     --color-blue-100: #e0f2fe;
//     --color-blue-700: #0369a1;
//     --color-green-100: #dcfce7;
//     --color-green-700: #15803d;
//     --color-yellow-100: #fef9c3;
//     --color-yellow-700: #a16207;
//     --color-silver-100: #e5e7eb;
//     --color-silver-700: #374151;
//     --color-indigo-100: #e0e7ff;
//     --color-indigo-700: #4338ca;

//     --color-red-100: #fee2e2;
//     --color-red-700: #b91c1c;
//     --color-red-800: #991b1b;

//     --backdrop-color: rgba(255, 255, 255, 0.1);

//     --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
//     --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
//     --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

//     --border-radius-tiny: 3px;
//     --border-radius-sm: 5px;
//     --border-radius-md: 7px;
//     --border-radius-lg: 9px;

//     /* For dark mode */
//     --image-grayscale: 0;
//     --image-opacity: 100%;
//   }

//   *,
//   *::before,
//   *::after {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;

//   }

//   html {
//     font-size: 62.5%;
//   }

//   body {
//     font-family: "Poppins", sans-serif;
//     color: var(--color-grey-700);
//     transition: color 0.3s, background-color 0.3s;
//     min-height: 100vh;
//     line-height: 1.5;
//     font-size: 1.6rem;
//   }

//   button {
//     cursor: pointer;
//   }

//   img {
//     max-width: 100%;
//   }

//   `;

const GlobalStyles = createGlobalStyle`

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
q,
em,
img,
small,
strong,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend {
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  font-size: 62.5%;
  font-family: var(--font-plex), 'Arial', sans-serif;


}

body {
  line-height: 1;
  font-size: 62.5%;

}

ol,
ul {
  list-style: none;
}
:focus {
  outline: 0;
}
input,
textarea {
  margin: 0;
  outline: 0;
}
textarea {
  overflow: auto;
  resize: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* End Reset */

/* html5 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}

*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}


/* Default Font Styles
______________________*/
body,
input,
select,
textarea {
  font-family: "IBM Plex Sans Arabic", sans-serif;
  font-size: 1.8rem;
  color: #000000;
  line-height: 1.5;
}



/* Headings
______________________*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "IBM Plex Sans Arabic", sans-serif;
  margin-bottom: 1rem;
}
h1 {
  font-size: 5.4rem;
}
h2 {
  font-size: 5.4rem;
}
h3 {
  font-size: 2rem;
}



/* Links
______________________*/
a {
  text-decoration: none;
}
/* p, blockquote, address
______________________*/
p {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}


/* Lists
______________________*/
ol,
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}



/* Roots */
:root {
  --dark-color: #030915;
  --white-color: #ffffff;
  --secondary-color: #48be9a;
  --primary-color: #2a32d3;
  --grey-color: #c4c6ca;
  --lightgrey-color: #d7d7d7;
  --offwhite-color: #ecf2ff;
  --font-size: 1.8rem;
}
img {
  max-width: 100%;
  display: block;
}



/* Btns 
=============*/
.secondary-btn,
.dark-btn,
.primary-btn {
  display: block;
  width: 100%;
  max-width: 15.1rem;
  border-radius: 1.2rem;
  background: var(--primary-color);
  color: var(--white-color);
  padding: 1.1rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  transition: background 0.3s;
}
.dark-btn {
  max-width: 13.1rem;
  background: var(--dark-color);
  padding: 1.1rem;
}
.dark-btn:hover,
.primary-btn:hover {
  background: var(--secondary-color);
}
.secondary-btn {
  background: var(--secondary-color);
}
.secondary-btn:hover {
  background: var(--dark-color);
}



/* Layout 
______________________*/
.container {
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
}
.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}


`;

export default GlobalStyles;

export const devices = {
  phone: "(max-width: 600px)",
  tabPort: "(max-width: 900px)",
  tabLand: "(max-width: 1200px)",
  bigDesktop: "(max-width: 1800px)",
};
