/* ==========================================================================
   DISEÑOWEB STUDIO - VIRAL HERO QUICK CALCULATOR LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Viral Hero Quick Estimator Handler
  const quickOptions = document.querySelectorAll('.quick-btn-option');
  const heroDisplayPrice = document.getElementById('viral-hero-price');
  const heroWhatsappBtn = document.getElementById('viral-hero-whatsapp');

  let selectedViralName = "Starter Landing Page";
  let selectedViralPrice = 499;

  if (quickOptions.length > 0) {
    quickOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        quickOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');

        selectedViralName = opt.dataset.name;
        selectedViralPrice = parseInt(opt.dataset.price, 10);

        if (heroDisplayPrice) {
          heroDisplayPrice.textContent = `$${selectedViralPrice}`;
        }

        if (heroWhatsappBtn) {
          const whatsappNumber = "593988305159";
          let message = `SOLICITUD VIRAL RAPIDA - DISEÑOWEB STUDIO\n\n`;
          message += `Servicio Seleccionado: ${selectedViralName}\n`;
          message += `Presupuesto Estimado: $${selectedViralPrice} USD\n\n`;
          message += `Hola DiseñoWeb Studio, deseo aprovechar los cupos disponibles para mi sitio web.`;

          const encodedMsg = encodeURIComponent(message);
          heroWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
        }
      });
    });
  }

  // 2. Main Bento Interactive Calculator Logic
  const planOptions = document.querySelectorAll('.plan-option');
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
  const totalPriceEl = document.getElementById('calc-total-display');
  const planSummaryEl = document.getElementById('calc-plan-summary');
  const addonsSummaryEl = document.getElementById('calc-addons-summary');
  const sendWhatsappBtn = document.getElementById('calc-send-whatsapp');
  const marketBtns = document.querySelectorAll('.market-btn');

  let currentMarket = 'usa'; // Default: EE.UU. Market ($499 / $899 / $1499)

  // Market Switcher Handler
  marketBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      marketBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
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
        priceLabel.textContent = `$${price} USD`;
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
        priceLabel.textContent = `+$${price} USD`;
      }
    });

    // Update main pricing grid cards
    document.querySelectorAll('.pricing-card-val').forEach(cardPrice => {
      const pUsa = cardPrice.dataset.priceUsa;
      const pLatam = cardPrice.dataset.priceLatam;
      const val = currentMarket === 'usa' ? pUsa : pLatam;
      cardPrice.innerHTML = `$${val} <span style="font-size: 1rem; color: var(--text-muted); font-weight: 500;">USD / único</span>`;
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
    const basePrice = selectedPlan ? parseInt(selectedPlan.dataset.price, 10) : 499;
    const selectedPlanName = selectedPlan ? selectedPlan.dataset.name : 'Starter Landing Page';

    let addonsTotal = 0;
    const selectedAddons = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        const price = parseInt(cb.dataset.price, 10);
        addonsTotal += price;
        selectedAddons.push({
          name: cb.dataset.name,
          price: price
        });
      }
    });

    const grandTotal = basePrice + addonsTotal;

    // Update UI
    if (totalPriceEl) {
      totalPriceEl.textContent = `$${grandTotal}`;
    }

    if (planSummaryEl) {
      planSummaryEl.textContent = `${selectedPlanName} ($${basePrice})`;
    }

    if (addonsSummaryEl) {
      if (selectedAddons.length === 0) {
        addonsSummaryEl.textContent = 'Sin servicios adicionales';
      } else {
        addonsSummaryEl.textContent = selectedAddons.map(a => `${a.name} (+$${a.price})`).join(', ');
      }
    }

    // Update WhatsApp link
    if (sendWhatsappBtn) {
      const whatsappNumber = "593988305159";
      const marketLabel = currentMarket === 'usa' ? 'ESTADOS UNIDOS' : 'ECUADOR / LATAM';
      let message = `COTIZACION PROYECTO WEB - DISEÑOWEB STUDIO\n`;
      message += `Mercado: ${marketLabel}\n\n`;
      message += `Paquete Seleccionado: ${selectedPlanName}\n`;
      
      if (selectedAddons.length > 0) {
        message += `Servicios Adicionales: \n` + selectedAddons.map(a => `  - ${a.name} (+$${a.price})`).join('\n') + `\n`;
      } else {
        message += `Servicios Adicionales: Ninguno\n`;
      }

      message += `\nPresupuesto Estimado: $${grandTotal} USD\n\n`;
      message += `Hola DiseñoWeb Studio, deseo iniciar mi proyecto web.`;

      const encodedMsg = encodeURIComponent(message);
      sendWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    }
  }

  // Initialize
  updatePricesForMarket();
  updateCalculator();
});
