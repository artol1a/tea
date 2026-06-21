/*
 * Empire of Artolia — Pixel-Modern theme
 * Progressive-enhancement only: the menu and header work without this file
 * (CSS :hover handles desktop submenus). This script adds:
 *   1) A mobile nav toggle (hamburger -> full nav panel)
 *   2) Tap-to-open submenus on touch / narrow screens
 * No Publii/Handlebars logic is involved here — purely front-end behavior.
 */
(function () {
   'use strict';

   document.addEventListener('DOMContentLoaded', function () {
      var toggle = document.getElementById('navToggle');
      var nav = document.getElementById('siteNav');

      if (toggle && nav) {
         toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
         });
      }

      var submenuParents = document.querySelectorAll('.menu li.has-submenu > a');
      submenuParents.forEach(function (link) {
         link.addEventListener('click', function (event) {
            if (window.matchMedia('(max-width: 980px)').matches) {
               event.preventDefault();
               var parentItem = link.parentElement;
               var wasOpen = parentItem.classList.contains('submenu-open');

               parentItem.parentElement.querySelectorAll('.has-submenu.submenu-open').forEach(function (openItem) {
                  if (openItem !== parentItem) {
                     openItem.classList.remove('submenu-open');
                  }
               });

               parentItem.classList.toggle('submenu-open', !wasOpen);
            }
         });
      });
   });
})();
