"use strict";

function swapCode(fileName, targetFrame) {
  targetFrame.src = fileName;
}

let codeWindow = document.querySelector("iframe");

let buttons = document.getElementsByTagName("input");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    swapCode("../sample-code/" + buttons[i].value, codeWindow);
  });
}
