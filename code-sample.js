"use strict";

function swapCode(fileName, targetFrame) {
  targetFrame.src = fileName;
}

function swapCaption(className) {
  let caption = document.getElementsByClassName(className);

  let captions = document.getElementsByClassName("caption");
  for (let i = 0; i < captions.length; i++) {
    if (captions[i].classList.contains(className)) {
      captions[i].style.display = "block";
    } else {
      captions[i].style.display = "none";
    }
  }
}

let codeWindow = document.querySelector("iframe");

let buttons = document.getElementsByTagName("input");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    swapCode("../sample-code/" + buttons[i].value, codeWindow);
    swapCaption(buttons[i].id);
  });
}
