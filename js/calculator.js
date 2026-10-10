/* ==========================================================================
   DISEÑOWEB STUDIO - HERO WIDGET LOGIC (Free Web Diagnosis Quiz)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Free Web Diagnosis Quiz (Hero Widget)
  const quizStepEl = document.getElementById('quiz-step');
  const quizBackBtn = document.getElementById('quiz-back');
  const quizProgressEl = document.getElementById('quiz-progress-fill');
  const quizQuestionEl = document.getElementById('quiz-question');
  const quizAnswersEl = document.getElementById('quiz-answers');
  const quizBox = document.getElementById('quiz-box');
  const quizResultBox = document.getElementById('quiz-result-box');
  const quizVerdictEl = document.getElementById('quiz-verdict');
  const quizScoreEl = document.getElementById('quiz-score');
  const quizWhatsappBtn = document.getElementById('quiz-whatsapp');
  const quizRestartBtn = document.getElementById('quiz-restart');

  if (quizStepEl && quizQuestionEl && quizAnswersEl && quizBox && quizResultBox) {
    const quizData = {
      es: {
        step: (n, total) => `Pregunta ${n} de ${total}`,
        questions: [
          {
            q: '¿Tu negocio ya tiene un sitio web propio?',
            a: [
              { t: 'Sí, está activo', p: 25 },
              { t: 'Sí, pero desactualizado', p: 15 },
              { t: 'No tengo sitio web', p: 0 }
            ]
          },
          {
            q: 'Cuando alguien busca tu servicio en tu ciudad, ¿apareces en Google?',
            a: [
              { t: 'Sí, en los primeros resultados', p: 25 },
              { t: 'Aparezco, pero muy abajo', p: 12 },
              { t: 'No lo sé', p: 5 },
              { t: 'No aparezco', p: 0 }
            ]
          },
          {
            q: '¿Tu sitio actual se ve y carga bien en celulares?',
            a: [
              { t: 'Sí, sin problemas', p: 20 },
              { t: 'Regular', p: 8 },
              { t: 'No / no tengo sitio', p: 0 }
            ]
          },
          {
            q: '¿Recibes consultas de clientes nuevos por internet (WhatsApp, formularios, llamadas)?',
            a: [
              { t: 'Sí, cada semana', p: 15 },
              { t: 'Algunas veces al mes', p: 8 },
              { t: 'Casi nunca', p: 0 }
            ]
          },
          {
            q: '¿Tienes reseñas de clientes en Google?',
            a: [
              { t: 'Sí, más de 10', p: 15 },
              { t: 'Entre 1 y 10', p: 8 },
              { t: 'Ninguna todavía', p: 0 }
            ]
          }
        ],
        verdicts: [
          { min: 0, max: 20, text: 'Tu negocio es casi invisible en internet y pierdes clientes cada día.' },
          { min: 21, max: 50, text: 'Tienes una base, pero tus competidores te están ganando clientes.' },
          { min: 51, max: 75, text: 'Vas bien, pero hay oportunidades claras de captar más clientes.' },
          { min: 76, max: 100, text: 'Tu presencia digital es sólida. Podemos llevarla al siguiente nivel.' }
        ],
        waTitle: 'DIAGNÓSTICO WEB GRATIS - DISEÑOWEB STUDIO',
        waScore: 'Puntaje',
        waAnswers: 'Mis respuestas',
        waClose: 'Hola DiseñoWeb Studio, quiero recibir mi diagnóstico completo y saber cómo mejorar mi presencia digital.'
      },
      en: {
        step: (n, total) => `Question ${n} of ${total}`,
        questions: [
          {
            q: 'Does your business have its own website?',
            a: [
              { t: 'Yes, it is live', p: 25 },
              { t: 'Yes, but outdated', p: 15 },
              { t: 'No website yet', p: 0 }
            ]
          },
          {
            q: 'When someone searches for your service in your city, do you show up on Google?',
            a: [
              { t: 'Yes, top results', p: 25 },
              { t: 'I show up, but low', p: 12 },
              { t: 'Not sure', p: 5 },
              { t: "I don't show up", p: 0 }
            ]
          },
          {
            q: 'Does your current site look and load well on mobile phones?',
            a: [
              { t: 'Yes, no issues', p: 20 },
              { t: 'So-so', p: 8 },
              { t: 'No / no website', p: 0 }
            ]
          },
          {
            q: 'Do you get inquiries from new customers online (WhatsApp, forms, calls)?',
            a: [
              { t: 'Yes, every week', p: 15 },
              { t: 'A few per month', p: 8 },
              { t: 'Almost never', p: 0 }
            ]
          },
          {
            q: 'Do you have customer reviews on Google?',
            a: [
              { t: 'Yes, more than 10', p: 15 },
              { t: 'Between 1 and 10', p: 8 },
              { t: 'None yet', p: 0 }
            ]
          }
        ],
        verdicts: [
          { min: 0, max: 20, text: 'Your business is nearly invisible online — you are losing customers every day.' },
          { min: 21, max: 50, text: 'You have a base, but competitors are winning your customers.' },
          { min: 51, max: 75, text: 'You are doing well, but there are clear opportunities to win more customers.' },
          { min: 76, max: 100, text: 'Your online presence is solid. We can take it to the next level.' }
        ],
        waTitle: 'FREE WEBSITE DIAGNOSIS - DISEÑOWEB STUDIO',
        waScore: 'Score',
        waAnswers: 'My answers',
        waClose: 'Hello DiseñoWeb Studio, I want to receive my full diagnosis and learn how to improve my online presence.'
      }
    };

    const whatsappNumber = '593988305159';
    const getQuizLang = () => document.documentElement.lang.startsWith('en') ? 'en' : 'es';

    let quizStep = 0;
    let quizAnswers = [];
    let quizLock = false;

    const getQuizScore = (L) => L.questions.reduce((sum, q, i) => (
      quizAnswers[i] !== undefined ? sum + q.a[quizAnswers[i]].p : sum
    ), 0);

    function renderQuiz() {
      const L = quizData[getQuizLang()];
      const total = L.questions.length;
      const current = L.questions[quizStep];

      quizStepEl.textContent = L.step(quizStep + 1, total);
      quizBackBtn.hidden = quizStep === 0;
      quizProgressEl.style.width = ((quizStep / total) * 100) + '%';
      quizQuestionEl.textContent = current.q;
      quizAnswersEl.innerHTML = '';

      current.a.forEach((ans, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-answer' + (quizAnswers[quizStep] === idx ? ' selected' : '');
        btn.textContent = ans.t;
        btn.addEventListener('click', () => selectQuizAnswer(idx, btn));
        quizAnswersEl.appendChild(btn);
      });
    }

    function selectQuizAnswer(idx, btn) {
      if (quizLock) return;
      quizLock = true;
      quizAnswers[quizStep] = idx;
      btn.classList.add('selected');

      setTimeout(() => {
        quizLock = false;
        quizStep++;
        if (quizStep < quizData[getQuizLang()].questions.length) {
          renderQuiz();
        } else {
          showQuizResult();
        }
      }, 240);
    }

    function showQuizResult() {
      const L = quizData[getQuizLang()];
      const score = getQuizScore(L);

      quizBox.hidden = true;
      quizResultBox.hidden = false;
      quizVerdictEl.textContent = L.verdicts.find(v => score >= v.min && score <= v.max).text;

      quizScoreEl.classList.remove('price-pulse');
      void quizScoreEl.offsetWidth;
      quizScoreEl.classList.add('price-pulse');

      const duration = 750;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        quizScoreEl.textContent = Math.round(eased * score);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);

      const lines = L.questions.map((q, i) => `${i + 1}. ${q.q} → ${q.a[quizAnswers[i]].t}`);
      const message = `${L.waTitle}\n\n${L.waScore}: ${score}/100\n\n${L.waAnswers}:\n${lines.join('\n')}\n\n${L.waClose}`;
      quizWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    }

    quizBackBtn.addEventListener('click', () => {
      if (quizStep > 0 && !quizLock) {
        quizStep--;
        renderQuiz();
      }
    });

    quizRestartBtn.addEventListener('click', () => {
      quizStep = 0;
      quizAnswers = [];
      quizResultBox.hidden = true;
      quizBox.hidden = false;
      renderQuiz();
    });

    renderQuiz();
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
