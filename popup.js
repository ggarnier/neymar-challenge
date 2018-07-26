'use strict';


function click() {
  var input = document.querySelector("input");
  var rolls = parseInt(input.value, 10) || 3;
  chrome.tabs.executeScript(null,
      {code:"document.body.style.transition='transform " + rolls + "s'; document.body.style.transform='rotate(" + (rolls*360) + "deg)'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("button").addEventListener("click", click);
});
