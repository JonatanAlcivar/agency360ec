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

  // 4. Smooth Scroll for Navigation Anchors
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
