(function () {
  'use strict';

  function hasAdBlocker(bait) {
    var styles = window.getComputedStyle(bait);
    return !document.body.contains(bait)
      || styles.display === 'none'
      || styles.visibility === 'hidden'
      || bait.offsetHeight === 0;
  }

  function showAdBlockWall() {
    if (document.getElementById('adblock-wall')) {
      return;
    }

    var isEnglish = document.documentElement.lang.toLowerCase().indexOf('en') === 0;
    var wall = document.createElement('section');
    wall.id = 'adblock-wall';
    wall.setAttribute('role', 'alertdialog');
    wall.setAttribute('aria-modal', 'true');
    wall.setAttribute('aria-labelledby', 'adblock-wall-title');

    var panel = document.createElement('div');
    panel.className = 'adblock-wall-panel';

    var icon = document.createElement('span');
    icon.className = 'adblock-wall-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '!';

    var title = document.createElement('h1');
    title.id = 'adblock-wall-title';
    title.textContent = isEnglish ? 'Please disable your ad blocker' : 'Desactiva tu bloqueador de anuncios';

    var message = document.createElement('p');
    message.textContent = isEnglish
      ? 'Ads help us keep these free guides available. Disable your ad blocker for this site, then reload the page.'
      : 'Los anuncios ayudan a mantener estas guías disponibles gratis. Desactiva el bloqueador para este sitio y vuelve a cargar la página.';

    var reload = document.createElement('button');
    reload.className = 'btn btn-primary';
    reload.type = 'button';
    reload.textContent = isEnglish ? 'Reload page' : 'Recargar página';
    reload.addEventListener('click', function () {
      window.location.reload();
    });

    panel.appendChild(icon);
    panel.appendChild(title);
    panel.appendChild(message);
    panel.appendChild(reload);
    wall.appendChild(panel);
    document.body.appendChild(wall);
    document.body.classList.add('adblock-wall-active');
    reload.focus();
  }

  function checkForAdBlocker(bait) {
    if (window.__blogAdsUnavailable || hasAdBlocker(bait)) {
      showAdBlockWall();
      return true;
    }
    return false;
  }

  function startDetection() {
    var bait = document.createElement('div');
    bait.className = 'ad adsbox adsbygoogle ad-banner';
    bait.setAttribute('aria-hidden', 'true');
    bait.style.cssText = 'position:absolute;left:-10000px;top:-10000px;width:1px;height:1px;';
    document.body.appendChild(bait);

    window.setTimeout(function () {
      if (!checkForAdBlocker(bait)) {
        window.setTimeout(function () {
          checkForAdBlocker(bait);
          bait.remove();
        }, 700);
      } else {
        bait.remove();
      }
    }, 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startDetection, { once: true });
  } else {
    startDetection();
  }
})();
