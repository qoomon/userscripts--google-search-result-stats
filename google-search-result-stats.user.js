// ==UserScript==
// @name         Show Google search result stats
// @namespace    https://qoomon.github.io
// @version      1.0.0
// @updateURL    https://github.com/qoomon/userscript-google-search-result-stats/raw/main/google-search-result-stats.user.js
// @downloadURL  https://github.com/qoomon/userscript-google-search-result-stats/raw/main/google-search-result-stats.user.js
// @description  try to take over the world!
// @author       qoomon
// @match        https://www.google.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

const resultElement = document.body.querySelector('#res')
const resultStatsElement = document.body.querySelector('#result-stats');

// move resultStatsElement to resultElement
resultElement.parentElement.insertBefore(resultStatsElement, resultElement);
// adjust style
Object.assign(resultStatsElement.style, {
  marginBottom: '24px',
  fontSize: '12px',
  fontWeight: 'bold',
});
