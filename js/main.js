/* ==========================================================================
   AGENCY 360 - MAIN INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Scrolled Navbar Effect
  const navbar = document.querySelector('.navbar-wrapper');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // 2. Classic Hamburger Dropdown Menu
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu   = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      // swap icon bars <-> xmark
      mobileToggle.querySelector('i').classList.toggle('fa-bars',  !isOpen);
      mobileToggle.querySelector('i').classList.toggle('fa-xmark',  isOpen);
    });

    // close when clicking any link inside menu
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
      });
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
      }
    });
  }

  // 3. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(faq => faq.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // 4. Pricing Plan Carousel
  const pricingGrid = document.getElementById('pricing-grid');
  const pricingCarousel = pricingGrid?.closest('.pricing-carousel');

  if (pricingGrid && pricingCarousel) {
    const cards = [...pricingGrid.querySelectorAll('.pricing-card')];
    const previousButton = pricingCarousel.querySelector('[data-pricing-scroll="-1"]');
    const nextButton = pricingCarousel.querySelector('[data-pricing-scroll="1"]');
    const position = pricingCarousel.querySelector('.pricing-carousel-position');

    const updateCarouselPosition = () => {
      const currentIndex = cards.reduce((closestIndex, card, index) => {
        const currentDistance = Math.abs(card.getBoundingClientRect().left - pricingGrid.getBoundingClientRect().left);
        const closestDistance = Math.abs(cards[closestIndex].getBoundingClientRect().left - pricingGrid.getBoundingClientRect().left);
        return currentDistance < closestDistance ? index : closestIndex;
      }, 0);

      if (position) position.textContent = `${currentIndex + 1} / ${cards.length}`;
      if (previousButton instanceof HTMLButtonElement) previousButton.disabled = currentIndex === 0;
      if (nextButton instanceof HTMLButtonElement) nextButton.disabled = currentIndex === cards.length - 1;
    };

    pricingCarousel.querySelectorAll('[data-pricing-scroll]').forEach(button => {
      button.addEventListener('click', () => {
        const direction = Number(button.getAttribute('data-pricing-scroll'));
        const currentIndex = cards.reduce((closestIndex, card, index) => {
          const currentDistance = Math.abs(card.getBoundingClientRect().left - pricingGrid.getBoundingClientRect().left);
          const closestDistance = Math.abs(cards[closestIndex].getBoundingClientRect().left - pricingGrid.getBoundingClientRect().left);
          return currentDistance < closestDistance ? index : closestIndex;
        }, 0);
        const targetCard = cards[Math.min(Math.max(currentIndex + direction, 0), cards.length - 1)];
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        pricingGrid.scrollTo({
          left: pricingGrid.scrollLeft + targetCard.getBoundingClientRect().left - pricingGrid.getBoundingClientRect().left,
          behavior: reducedMotion ? 'auto' : 'smooth'
        });
      });
    });

    pricingGrid.addEventListener('scroll', updateCarouselPosition, { passive: true });
    window.addEventListener('resize', updateCarouselPosition);
    updateCarouselPosition();
  }

  // 5. One-time offer with a browser-persisted 24-hour deadline
  const promoOffer = document.getElementById('promo-offer');
  const promoCloseButton = promoOffer?.querySelector('.promo-offer-close');
  const promoCountdown = promoOffer?.querySelector('[data-promo-countdown]');

  if (promoOffer && promoCloseButton && promoCountdown) {
    const deadlineKey = 'dwstudio-promo-deadline-v1';
    const hiddenUntilKey = 'dwstudio-promo-hidden-until-v1';
    const offerDuration = 24 * 60 * 60 * 1000;
    const dismissalDuration = 30 * 24 * 60 * 60 * 1000;
    let deadline = 0;
    let persistentStorage = true;

    try {
      const storedDeadline = Number(window.localStorage.getItem(deadlineKey));
      deadline = Number.isFinite(storedDeadline) && storedDeadline > 0
        ? storedDeadline
        : Date.now() + offerDuration;
      window.localStorage.setItem(deadlineKey, String(deadline));
      const hiddenUntil = Number(window.localStorage.getItem(hiddenUntilKey));

      if (Number.isFinite(hiddenUntil) && hiddenUntil > Date.now()) {
        promoOffer.hidden = true;
      } else if (deadline > Date.now()) {
        promoOffer.hidden = false;
        document.body.classList.add('has-promo-offer');
      }
    } catch (error) {
      persistentStorage = false;
      deadline = Date.now() + offerDuration;
      promoOffer.hidden = false;
      document.body.classList.add('has-promo-offer');
      console.error('The promotional offer could not be persisted in browser storage.', error);
    }

    const hidePromoOffer = () => {
      promoOffer.hidden = true;
      document.body.classList.remove('has-promo-offer');
    };

    const updatePromoCountdown = () => {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        hidePromoOffer();
        return false;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      promoCountdown.textContent = [hours, minutes, seconds]
        .map(value => String(value).padStart(2, '0'))
        .join(':');
      return true;
    };

    if (!promoOffer.hidden) {
      updatePromoCountdown();
      const countdownInterval = window.setInterval(() => {
        if (!updatePromoCountdown()) window.clearInterval(countdownInterval);
      }, 1000);
    }

    promoCloseButton.addEventListener('click', () => {
      if (persistentStorage) {
        try {
          window.localStorage.setItem(hiddenUntilKey, String(Date.now() + dismissalDuration));
        } catch (error) {
          console.error('The promotional offer dismissal could not be saved.', error);
        }
      }
      hidePromoOffer();
    });

    promoOffer.querySelector('.promo-offer-cta')?.addEventListener('click', () => {
      if (persistentStorage) {
        try {
          window.localStorage.setItem(hiddenUntilKey, String(Date.now() + dismissalDuration));
        } catch (error) {
          console.error('The promotional offer response could not be saved.', error);
        }
      }
      hidePromoOffer();
    });
  }

  // Keep the offer details page aligned with the same visitor-specific deadline.
  const offerDetailsCountdown = document.querySelector('[data-offer-details-countdown]');
  const offerPaymentButton = document.querySelector('[data-offer-payment]');
  const offerExpiredNotice = document.querySelector('[data-offer-expired]');

  if (offerDetailsCountdown && offerPaymentButton && offerExpiredNotice) {
    const deadlineKey = 'dwstudio-promo-deadline-v1';
    const offerDuration = 24 * 60 * 60 * 1000;
    let deadline = 0;

    try {
      const storedDeadline = Number(window.localStorage.getItem(deadlineKey));
      deadline = Number.isFinite(storedDeadline) && storedDeadline > 0
        ? storedDeadline
        : Date.now() + offerDuration;
      window.localStorage.setItem(deadlineKey, String(deadline));
    } catch (error) {
      deadline = Date.now() + offerDuration;
      console.error('The offer details deadline could not be persisted in browser storage.', error);
    }

    const updateOfferDetailsCountdown = () => {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        offerPaymentButton.hidden = true;
        offerExpiredNotice.hidden = false;
        return false;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      offerDetailsCountdown.textContent = [hours, minutes, seconds]
        .map(value => String(value).padStart(2, '0'))
        .join(':');
      return true;
    };

    updateOfferDetailsCountdown();
    const countdownInterval = window.setInterval(() => {
      if (!updateOfferDetailsCountdown()) window.clearInterval(countdownInterval);
    }, 1000);
  }

  // 6. Smooth Scroll for Navigation Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
