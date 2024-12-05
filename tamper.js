// ==UserScript==
// @name         udemy fix by tuantm
// @namespace    http://tampermonkey.net/
// @version      2024-12-05
// @description  try to take over the world!
// @author       tuantm
// @match        https://*.udemy.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=udemy.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  document.addEventListener(
    'keydown',
    (e) => {
      const video = document.querySelector('video');
      const prober = document.querySelector('.popper-module--popper--mM5Ie');
      const header = document.querySelector(
        '.app--row--E-WFM.app--header--QuLOL'
      );
      const inactiveBtns = [
        ...document.querySelectorAll(
          '.user-activity--hide-when-user-inactive--Oc6Cn'
        ),
      ];

      if (e.code === 'Space') {
        e.stopPropagation();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      } else if (e.code === 'KeyF') {
        prober.style.visibility = 'hidden';
        header.style.visibility = 'hidden';
        inactiveBtns.map((el) => (el.style.visibility = 'hidden'));
      } else if (e.code === 'KeyV') {
        const isVisible = prober.style.visibility === 'visible';
        prober.style.visibility = isVisible ? 'hidden' : 'visible';
        header.style.visibility = isVisible ? 'hidden' : 'visible';
        inactiveBtns.map(
          (el) => (el.style.visibility = isVisible ? 'hidden' : 'visible')
        );
      }
    },
    true
  );
})();
