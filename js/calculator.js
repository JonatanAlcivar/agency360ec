/* ==========================================================================
   DISEÑOWEB STUDIO - VIRAL HERO QUICK CALCULATOR LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Viral Hero Quick Estimator Handler
  const quickOptions = document.querySelectorAll('.quick-btn-option');
  const heroDisplayPrice = document.getElementById('viral-hero-price');
  const heroWhatsappBtn = document.getElementById('viral-hero-whatsapp');

  let selectedViralName = "Landing Básica";
  let selectedViralPrice = 299;

  if (quickOptions.length > 0) {
    const activeOption = document.querySelector('.quick-btn-option.active');
    if (activeOption) {
      selectedViralName = activeOption.dataset.name;
      selectedViralPrice = parseInt(activeOption.dataset.price, 10);
    }

    const updateHeroQuote = () => {
      if (heroDisplayPrice) {
        const locale = document.documentElement.lang.startsWith('en') ? 'en-US' : 'es-US';
        heroDisplayPrice.textContent = `$${selectedViralPrice.toLocaleString(locale)}`;
        heroDisplayPrice.classList.remove('price-pulse');
        void heroDisplayPrice.offsetWidth;
        heroDisplayPrice.classList.add('price-pulse');
      }

      if (heroWhatsappBtn) {
        const whatsappNumber = "593988305159";
        const isEn = document.documentElement.lang.startsWith('en');
        const message = isEn
          ? `QUICK ESTIMATE - DISEÑOWEB STUDIO\n\nSelected Plan: ${selectedViralName}\nEstimated Investment: $${selectedViralPrice} USD\n\nHello DiseñoWeb Studio, I'd like to get started with this project.`
          : `SOLICITUD COTIZADOR RÁPIDO - DISEÑOWEB STUDIO\n\nPlan Seleccionado: ${selectedViralName}\nInversión Estimada: $${selectedViralPrice} USD\n\nHola DiseñoWeb Studio, deseo aprovechar este plan para mi sitio web.`;
        heroWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      }
    };

    quickOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        quickOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');

        selectedViralName = opt.dataset.name;
        selectedViralPrice = parseInt(opt.dataset.price, 10);
        updateHeroQuote();
      });

      opt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          opt.click();
        }
      });
    });

    updateHeroQuote();
  }

  // 2. Main Bento Interactive Calculator Logic
  const planOptions = document.querySelectorAll('.plan-option');
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
  const totalPriceEl = document.getElementById('calc-total-display');
  const planSummaryEl = document.getElementById('calc-plan-summary');
  const addonsSummaryEl = document.getElementById('calc-addons-summary');
  const sendWhatsappBtn = document.getElementById('calc-send-whatsapp');
  const recurringTotalEl = document.getElementById('calc-recurring-display');
  const marketBtns = document.querySelectorAll('.market-btn');
  const isEnglish = document.documentElement.lang.startsWith('en');

  let currentMarket = 'usa';

  function formatPrice(price) {
    return Number(price).toLocaleString(isEnglish ? 'en-US' : 'es-US');
  }

  // Market Switcher Handler
  marketBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      marketBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      marketBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      currentMarket = btn.dataset.market;
      
      updatePricesForMarket();
      updateCalculator();
    });
  });

  function updatePricesForMarket() {
    planOptions.forEach(opt => {
      const priceUsa = opt.dataset.priceUsa;
      const priceLatam = opt.dataset.priceLatam;
      const price = currentMarket === 'usa' ? priceUsa : priceLatam;
      
      opt.dataset.price = price;
      const priceLabel = opt.querySelector('.option-price');
      if (priceLabel) {
        priceLabel.textContent = `$${formatPrice(price)} USD`;
      }
    });

    addonCheckboxes.forEach(cb => {
      const priceUsa = cb.dataset.priceUsa;
      const priceLatam = cb.dataset.priceLatam;
      const price = currentMarket === 'usa' ? priceUsa : priceLatam;
      
      cb.dataset.price = price;
      const parentOption = cb.closest('.calc-option');
      const priceLabel = parentOption ? parentOption.querySelector('.option-price') : null;
      if (priceLabel) {
        const billingLabel = cb.dataset.billingCycle === 'monthly'
          ? (isEnglish ? ' / month' : ' / mes')
          : '';
        priceLabel.textContent = `+$${formatPrice(price)} USD${billingLabel}`;
      }
    });

    // Update main pricing grid cards
    document.querySelectorAll('.pricing-card-val').forEach(cardPrice => {
      const pUsa = cardPrice.dataset.priceUsa;
      const pLatam = cardPrice.dataset.priceLatam;
      const val = currentMarket === 'usa' ? pUsa : pLatam;
      const paymentLabel = document.documentElement.lang.startsWith('en') ? 'One-time' : 'único';
      cardPrice.innerHTML = `$${formatPrice(val)} <span style="font-size: 1rem; color: var(--text-muted); font-weight: 500;">USD / ${paymentLabel}</span>`;
    });
  }

  // Plan Selection Handler
  planOptions.forEach(option => {
    option.addEventListener('click', () => {
      planOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      
      const radio = option.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      updateCalculator();
    });
  });

  document.querySelectorAll('[data-select-plan]').forEach(button => {
    button.addEventListener('click', () => {
      const option = [...planOptions].find(plan => plan.dataset.name === button.dataset.selectPlan);
      if (option) option.click();
    });
  });

  // Addons Selection Handler
  addonCheckboxes.forEach(checkbox => {
    checkbox.closest('.calc-option').addEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT') {
        checkbox.checked = !checkbox.checked;
      }
      
      const parent = checkbox.closest('.calc-option');
      if (checkbox.checked) {
        parent.classList.add('selected');
      } else {
        parent.classList.remove('selected');
      }

      updateCalculator();
    });
  });

  function updateCalculator() {
    const selectedPlan = document.querySelector('.plan-option.selected');
    const basePrice = selectedPlan ? parseInt(selectedPlan.dataset.price, 10) : 299;
    const selectedPlanName = selectedPlan ? selectedPlan.dataset.name : 'Landing Básica';

    let addonsTotal = 0;
    let recurringTotal = 0;
    const selectedAddons = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        const price = parseInt(cb.dataset.price, 10);
        const isRecurring = cb.dataset.billingCycle === 'monthly';
        if (isRecurring) {
          recurringTotal += price;
        } else {
          addonsTotal += price;
        }
        selectedAddons.push({
          name: cb.dataset.name,
          price: price,
          isRecurring: isRecurring
        });
      }
    });

    const grandTotal = basePrice + addonsTotal;

    // Update UI
    if (totalPriceEl) {
      totalPriceEl.textContent = `$${formatPrice(grandTotal)}`;
    }

    if (planSummaryEl) {
      planSummaryEl.textContent = `${selectedPlanName} ($${formatPrice(basePrice)})`;
    }

    if (addonsSummaryEl) {
      if (selectedAddons.length === 0) {
        addonsSummaryEl.textContent = isEnglish ? 'No add-ons selected' : 'Sin adicionales seleccionados';
      } else {
        addonsSummaryEl.textContent = selectedAddons.map(a => {
          const billingLabel = a.isRecurring ? (isEnglish ? ' / month' : ' / mes') : '';
          return `${a.name} (+$${formatPrice(a.price)}${billingLabel})`;
        }).join(', ');
      }
    }

    if (recurringTotalEl) {
      if (recurringTotal > 0) {
        recurringTotalEl.textContent = isEnglish
          ? `Recurring services: $${formatPrice(recurringTotal)} USD / month`
          : `Servicios recurrentes: $${formatPrice(recurringTotal)} USD / mes`;
        recurringTotalEl.style.display = 'block';
      } else {
        recurringTotalEl.textContent = '';
        recurringTotalEl.style.display = 'none';
      }
    }

    // Update WhatsApp link
    if (sendWhatsappBtn) {
      const whatsappNumber = "593988305159";
      const marketLabel = currentMarket === 'usa'
        ? (isEnglish ? 'UNITED STATES' : 'ESTADOS UNIDOS')
        : (isEnglish ? 'ECUADOR / LATAM' : 'ECUADOR / LATAM');
      const messageLabels = isEnglish
        ? {
            title: 'WEB PROJECT QUOTE - DISEÑOWEB STUDIO',
            market: 'Market',
            plan: 'Selected Package',
            addons: 'Additional Services',
            recurring: 'Recurring services',
            none: 'None',
            estimate: 'Estimated Budget',
            greeting: 'Hello DiseñoWeb Studio, I would like to get started on my website project.'
          }
        : {
            title: 'COTIZACION PROYECTO WEB - DISEÑOWEB STUDIO',
            market: 'Mercado',
            plan: 'Paquete Seleccionado',
            addons: 'Servicios Adicionales',
            recurring: 'Servicios recurrentes',
            none: 'Ninguno',
            estimate: 'Presupuesto Estimado',
            greeting: 'Hola DiseñoWeb Studio, deseo iniciar mi proyecto web.'
          };
      let message = `${messageLabels.title}\n`;
      message += `${messageLabels.market}: ${marketLabel}\n\n`;
      message += `${messageLabels.plan}: ${selectedPlanName}\n`;
      
      if (selectedAddons.length > 0) {
        message += `${messageLabels.addons}: \n` + selectedAddons.map(a => {
          const billingLabel = a.isRecurring ? (isEnglish ? ' / month' : ' / mes') : '';
          return `  - ${a.name} (+$${formatPrice(a.price)}${billingLabel})`;
        }).join('\n') + `\n`;
      } else {
        message += `${messageLabels.addons}: ${messageLabels.none}\n`;
      }

      message += `\n${messageLabels.estimate}: $${formatPrice(grandTotal)} USD\n`;
      if (recurringTotal > 0) {
        message += `${messageLabels.recurring}: $${formatPrice(recurringTotal)} USD / ${isEnglish ? 'month' : 'mes'}\n`;
      }
      message += '\n';
      message += messageLabels.greeting;

      const encodedMsg = encodeURIComponent(message);
      sendWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    }
  }

  // Initialize
  updatePricesForMarket();
  updateCalculator();
});
