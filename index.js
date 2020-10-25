"use strict";

const mobileDeviceText = `
  looks like you are from mobile device, 
  we don't support mobile device  as
  there are no keycodes of touch events 
`;

const keyCodeContainer = document.querySelector("#keyCodeContainer");
const overlayContent = document.querySelector("#overlay-content");
const root = document.querySelector("#root");

const eventKey = document.querySelector("#eventKey");
const eventWhich = document.querySelector("#eventWhich");
const eventCode = document.querySelector("#eventCode");
const overlay = document.querySelector("#overlay");

window.addEventListener("keyup", onKeyDown, false);
window.addEventListener("touchend", onTouchEnd, false);

function insertInfoIntoCardBody(cardContainer, info) {
  const infoContainer = cardContainer.querySelector(".card__body");
  infoContainer.innerText = info;
}

function onKeyDown(e) {
  overlay?.remove();
  root.classList.remove("root__invisible");
  keyCodeContainer.innerHTML = null;
  keyCodeContainer.innerText = e.keyCode;
  document.title = e.code;

  insertInfoIntoCardBody(eventKey, e.key);
  insertInfoIntoCardBody(eventWhich, e.which);
  insertInfoIntoCardBody(eventCode, e.code);
}

function onTouchEnd() {
  const emojiContainer = document.createElement("div");
  emojiContainer.classList.add('emoji-container--flexed');
  emojiContainer.innerText = "🐱‍🚀";
  overlayContent.innerText = mobileDeviceText;
  overlayContent.appendChild(emojiContainer);
}
