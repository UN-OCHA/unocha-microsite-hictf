(function () {
  'use strict';
  initNav();
  initBanner();
})();

function initNav () {
	'use strict';
	var breakpoint = 768;
	var toggleNavBtn = document.querySelector('[data-toggle-nav]');
  var nav = document.querySelector('[data-nav]');

  window.onresize = function () {
  	updateNav(breakpoint, toggleNavBtn, nav);
  };

	if (window.innerWidth < breakpoint) {
		toggleNavBtn.setAttribute('aria-expanded', false);
  	nav.setAttribute('aria-hidden', true);
	}

  toggleNavBtn.addEventListener('click', function() {
  	var isHidden = nav.getAttribute('aria-hidden');
  	isHidden = isHidden == "true";
  	toggleNavBtn.setAttribute('aria-expanded', isHidden);
  	nav.setAttribute('aria-hidden', !isHidden);
  });

}

function updateNav (breakpoint, toggleNavBtn, nav) {
	'use strict';
	if (window.innerWidth >= breakpoint) {
		toggleNavBtn.removeAttribute('aria-expanded');
  	nav.removeAttribute('aria-hidden');
		return;
	}
	toggleNavBtn.setAttribute('aria-expanded', false);
  nav.setAttribute('aria-hidden', true);
}

function initBanner () {
  'use strict';

  var banner = document.querySelector('[data-banner]');
  var bannerBtn = document.querySelector('[data-banner-btn]');

  bannerBtn.addEventListener('click', function() {
    bannerBtn.setAttribute('aria-expanded', false);
    banner.setAttribute('aria-hidden', true);
  });
}
