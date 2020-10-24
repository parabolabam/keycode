'use strict';

const keyCodeContainer = document.querySelector('#keyCodeContainer');

const eventKey = document.querySelector('#eventKey');
const eventLocation = document.querySelector('#eventLocation');
const eventWhich = document.querySelector('#eventWhich');
const eventCode = document.querySelector('#eventCode');

window.addEventListener('keyup', function onKeyDown(e) {
    keyCodeContainer.innerHTML = null;
    keyCodeContainer.innerText = e.keyCode;
    document.title = e.code;

    insertInfoIntoCardBody(eventKey, e.key);
    insertInfoIntoCardBody(eventLocation, e.location);
    insertInfoIntoCardBody(eventWhich, e.which);
    insertInfoIntoCardBody(eventCode, e.code);
});

function insertInfoIntoCardBody(cardContainer, info) {
    const infoContainer = cardContainer.querySelector('.card__body');
    infoContainer.innerText = info;
}

