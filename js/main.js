(function () {
  'use strict';

  // Année du pied de page
  var annee = document.getElementById('annee');
  if (annee) annee.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var ouvert = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!ouvert));
      nav.classList.toggle('open', !ouvert);
    });
    nav.querySelectorAll('a').forEach(function (lien) {
      lien.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  // Lien actif selon la section visible
  var liens = document.querySelectorAll('.site-nav a[href^="#"]');
  if ('IntersectionObserver' in window && liens.length) {
    var parId = {};
    liens.forEach(function (lien) { parId[lien.getAttribute('href').slice(1)] = lien; });
    var observer = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting && parId[e.target.id]) {
          liens.forEach(function (l) { l.classList.remove('active'); });
          parId[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(parId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  // Formulaire de contact
  var form = document.querySelector('.contact-form');
  if (form) {
    var statut = form.querySelector('.form-status');
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (form.action.indexOf('VOTRE_ID') !== -1) {
        statut.className = 'form-status error';
        statut.textContent = window.t('form.notConfigured');
        return;
      }
      var bouton = form.querySelector('button[type="submit"]');
      bouton.disabled = true;
      statut.className = 'form-status';
      statut.textContent = window.t('form.sending');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (reponse) {
        if (reponse.ok) {
          form.reset();
          statut.className = 'form-status ok';
          statut.textContent = window.t('form.success');
        } else {
          throw new Error('HTTP ' + reponse.status);
        }
      }).catch(function () {
        statut.className = 'form-status error';
        statut.textContent = window.t('form.error');
      }).finally(function () {
        bouton.disabled = false;
      });
    });
  }
})();
