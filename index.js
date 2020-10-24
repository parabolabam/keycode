'use strict';

const keyCodeContainer = document.querySelector('#keyCodeContainer');
const root = document.querySelector('#root');

const eventKey = document.querySelector('#eventKey');
const eventWhich = document.querySelector('#eventWhich');
const eventCode = document.querySelector('#eventCode');
const overlay = document.querySelector('#overlay');

window.addEventListener('keyup', function onKeyDown(e) {
    overlay?.remove();
    root.classList.remove('root__invisible');
    keyCodeContainer.innerHTML = null;
    keyCodeContainer.innerText = e.keyCode;
    document.title = e.code;

    insertInfoIntoCardBody(eventKey, e.key);
    insertInfoIntoCardBody(eventWhich, e.which);
    insertInfoIntoCardBody(eventCode, e.code);
});

function insertInfoIntoCardBody(cardContainer, info) {
    const infoContainer = cardContainer.querySelector('.card__body');
    infoContainer.innerText = info;
}

