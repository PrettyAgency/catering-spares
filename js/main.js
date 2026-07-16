/* Catering Spares — Homepage
   Implemented from Claude Design: "Catering Spares Homepage Redesign.dc.html" */

(function () {
  'use strict';

  /* ---------------- Hero slider ---------------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.cs-hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.cs-hero-dots button'));
  var current = 0;
  var AUTOPLAY_MS = 6500;
  var timer = null;

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) {
      s.classList.toggle('active', idx === current);
    });
    dots.forEach(function (d, idx) {
      d.classList.toggle('active', idx === current);
    });
  }

  function restartAutoplay() {
    if (timer) clearInterval(timer);
    timer = setInterval(function () { show(current + 1); }, AUTOPLAY_MS);
  }

  document.querySelector('.cs-hero-arrow.prev').addEventListener('click', function () {
    show(current - 1);
    restartAutoplay();
  });
  document.querySelector('.cs-hero-arrow.next').addEventListener('click', function () {
    show(current + 1);
    restartAutoplay();
  });
  dots.forEach(function (d, idx) {
    d.addEventListener('click', function () {
      show(idx);
      restartAutoplay();
    });
  });

  var hero = document.querySelector('.cs-hero');
  hero.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
  hero.addEventListener('mouseleave', restartAutoplay);

  show(0);
  restartAutoplay();

  /* ---------------- Mobile drawer ---------------- */
  var drawer = document.querySelector('.cs-drawer');
  var burger = document.querySelector('.cs-nav-burger');

  function openMenu() {
    drawer.classList.add('open');
    burger.style.visibility = 'hidden';
  }
  function closeMenu() {
    drawer.classList.remove('open');
    burger.style.visibility = 'visible';
  }

  burger.addEventListener('click', openMenu);
  document.querySelector('.cs-drawer-close').addEventListener('click', closeMenu);
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---------------- Back to top ---------------- */
  document.querySelector('.cs-back-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------- Newsletter (front-end only) ---------------- */
  var form = document.querySelector('.cs-newsletter-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('input[type="email"]');
    if (input.value) {
      form.querySelector('button').textContent = 'THANKS!';
      input.value = '';
    }
  });
})();
