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

  // 5. Smooth Scroll for Navigation Anchors
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
