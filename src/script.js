// ==UserScript==
// @name         htmlautoma for HTMLAcademy
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  An extension to automate solution of HTMLAcademy practices and theories.
// @author       quyxishi
// @match        *://up.htmlacademy.ru/**/module/*
// @grant        none
// ==/UserScript==

(async () => {
    'use strict';
    try {
        (
            await import(
                'https://raw.githubusercontent.com/quyxishi/htmlautoma/refs/heads/main/src/main.js'
            )
        ).main();
    } catch (e) {
        console.error('Initialization error:', e);
    }
})();
