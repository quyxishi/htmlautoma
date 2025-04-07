// ==UserScript==
// @name         htmlautoma for HTMLAcademy
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  An extension to automate solution of HTMLAcademy practices and theories.
// @author       quyxishi
// @match        *://up.htmlacademy.ru/**/module/*
// @require      https://raw.githubusercontent.com/quyxishi/htmlautoma/refs/heads/main/src/main.js
// @grant        none
// ==/UserScript==

(async () => {
    'use strict';
    try {
        main();
    } catch (e) {
        console.error('HTMLAutoma runtime-error due ', e);
    }
})();
