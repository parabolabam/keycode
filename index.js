'use strict';

const keyCodeContainer = document.querySelector('#keyCodeContainer');
const codeContainer = document.querySelector('#codeContainer');

window.addEventListener('keyup', function onKeyDown(e) {
    keyCodeContainer.innerText = e.keyCode;
    codeContainer.innerText = e.code;
    document.title = e.keyCode;
});