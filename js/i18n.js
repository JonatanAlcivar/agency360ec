/**
 * i18n Language Switcher — DiseñoWeb Studio
 * Handles [data-i18n] keyed translations AND [data-es]/[data-en] inline attributes.
 */

const translations = {
  es: {
    // Nav
    nav_home: 'Inicio', nav_industries: 'Industrias', nav_portfolio: 'Portafolio',
    nav_plans: 'Planes', nav_quote: 'Cotizador',

    // Hero
    hero_badge: 'Últimos 3 Cupos Disponibles Esta Semana (EE.UU. &amp; LATAM)',
    hero_h1: 'Obtén un Sitio Web que <span class="gradient-text">Genera Llamadas en 5 Días</span>',
    hero_subtitle: 'Desarrollamos páginas web profesionales de alta conversión para pequeños negocios en <strong>Miami, Houston, Nueva York y Latinoamérica</strong>. Sin contratos largos. 100% de garantía de entrega.',
    hero_feat1: 'Entrega en 5–7 días', hero_feat2: 'Sin contratos complejos', hero_feat3: 'Soporte en Español',
    quote_title: 'Cotizador Rápido en 3 Segundos',
    quote_subtitle: 'Selecciona lo que tu negocio necesita y conoce tu valor estimado al instante:',

    // Sections headers
    ind_badge: 'Soluciones por Sector Comercial',
    ind_h2: 'Sitios Web Diseñados para <span class="gradient-text">Tu Industria en EE.UU.</span>',
    ind_p: 'Estructuras web con arquitectura de conversión comprobada para los 5 sectores comerciales de mayor crecimiento.',
    port_badge: 'Proyectos Reales 8K',
    port_h2: 'Demostración de <span class="gradient-text">Proyectos Desarrollados</span>',
    port_p: 'Casos de éxito reales en Miami, Houston, Nueva York y Latinoamérica.',
    test_badge: 'Casos de Éxito',
    test_h2: 'Lo Que Dicen <span class="gradient-text">Nuestros Clientes</span>',
    test_p: 'Propietarios de negocios reales que transformaron sus ventas con nuestras páginas web.',
    price_badge: 'Paquetes Transparentes',
    price_h2: 'Planes de Diseño Web <span class="gradient-text">Sin Sorpresas</span>',
    price_p: 'Ahorras más del 60% comparado con agencias locales estadounidenses manteniendo calidad idéntica.',

    // Portfolio
    port1_h3: 'Servicios de Aire Acondicionado &amp; HVAC', port1_p: 'Landing page de alta conversión que incrementó las llamadas de clientes en +240%.',
    port2_h3: 'Contratista de Roofing &amp; Construcción', port2_p: 'Sitio web corporativo bilingüe posicionado en el Top #1 de Google Maps en Houston.',
    port3_h3: 'Tienda Online E-commerce Pro', port3_p: 'Catálogo de productos con pasarela de pagos con tarjeta y pedidos automatizados.',
    port4_city: 'NUEVA YORK, NY', port4_h3: 'Firma de Abogados &amp; Casos Legales', port4_p: 'Diseño corporativo premium que transmite alta autoridad y confianza para clientes de alto perfil.',
    port5_h3: 'Agencia Inmobiliaria Luxury', port5_p: 'Catálogo dinámico de propiedades con filtros avanzados de búsqueda y formularios integrados.',
    port6_h3: 'Restaurante Gastronómico &amp; Pedidos', port6_p: 'Menú digital interactivo y sistema de pedidos online directo a la cocina por WhatsApp sin comisiones.',

    // Testimonials
    test1_quote: '"El equipo entendió exactamente lo que necesitaba para mi empresa de roofing. Desde que lanzamos el sitio, las llamadas de presupuesto aumentaron un 300%. Además, el diseño es increíble."',
    test1_role: 'Houston, TX - Contratista',
    test2_quote: '"Necesitábamos una imagen más profesional para nuestra clínica dental y poder agendar citas en línea. La página superó nuestras expectativas, es muy fácil de usar para los pacientes."',
    test2_role: 'Miami, FL - Odontóloga',
    test3_quote: '"Trabajar con DiseñoWeb Studio fue la mejor inversión. Entregaron la tienda online a tiempo y todo funciona perfecto. Mis ventas por internet se dispararon en el primer mes."',
    test3_role: 'Guayaquil, EC - E-commerce',

    // Footer
    footer_p: 'Agencia de Diseño Web y Marketing Digital de Alta conversión para Negocios Hispanos en Estados Unidos y Latinoamérica.',
    footer_cities: 'Ciudades EE.UU.', footer_latam: 'Cobertura LATAM', footer_contact: 'Contacto Directo',
    footer_chat: 'Chat en WhatsApp',
    footer_copy: '© 2026 DiseñoWeb Studio (disenoweb.agency). Todos los derechos reservados.',

    // Industry cards full HTML
    industry_grid_html: `
      <div class="industry-card">
        <img src="images/industry_roofing.jpg" alt="Roofing" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">MÁXIMAS LLAMADAS LOCALES</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-helmet-safety"></i></div>
              <h4>Contratistas &amp; Roofing</h4>
            </div>
            <p>Páginas web optimizadas para recibir solicitudes de presupuesto telefónico y formularios de estimación rápida para techadores, plomería y remodelación.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Formulario de solicitud de presupuesto en 1 clic</li>
            <li><i class="fa-solid fa-check"></i> Galería de proyectos y trabajos realizados</li>
            <li><i class="fa-solid fa-check"></i> Posicionamiento destacado en Google Maps</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_medical.jpg" alt="Médicos" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">AGENDAMIENTO EN LÍNEA</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-user-doctor"></i></div>
              <h4>Clínicas &amp; Dentistas</h4>
            </div>
            <p>Plataformas web de alta confianza médica que permiten a los pacientes agendar su cita directamente en tu calendario digital.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Sistema de reserva de citas 24/7</li>
            <li><i class="fa-solid fa-check"></i> Sección de testimonios de pacientes verificados</li>
            <li><i class="fa-solid fa-check"></i> Información de seguros y especialidades médicas</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_lawyer.jpg" alt="Abogados" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">CONSULTAS LEGALES</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-scale-balanced"></i></div>
              <h4>Firmas de Abogados</h4>
            </div>
            <p>Portales corporativos de alta autoridad para firmas legales y abogados independientes en EE.UU., optimizados para captar nuevos casos.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Formulario de evaluación de casos 24/7</li>
            <li><i class="fa-solid fa-check"></i> Áreas de práctica detalladas</li>
            <li><i class="fa-solid fa-check"></i> Perfil de abogados y credenciales</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_restaurant.jpg" alt="Restaurantes" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">MENÚ DIGITAL &amp; PEDIDOS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-utensils"></i></div>
              <h4>Restaurantes &amp; Alimentos</h4>
            </div>
            <p>Menús digitales interactivos optimizados para celulares con pedidos a domicilio sin pagar comisiones a terceros.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Menú fotográfico interactivo con precios</li>
            <li><i class="fa-solid fa-check"></i> Pedidos directos a cocina por WhatsApp</li>
            <li><i class="fa-solid fa-check"></i> Ubicación exacta y horario en Google Maps</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_realestate.jpg" alt="Bienes Raíces" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">PROPIEDADES EXCLUSIVAS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-house"></i></div>
              <h4>Bienes Raíces &amp; Realtors</h4>
            </div>
            <p>Portales inmobiliarios de elegancia superior para agentes (Realtors) y agencias en EE.UU., mostrando catálogos de propiedades.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Catálogo de propiedades / áreas de práctica</li>
            <li><i class="fa-solid fa-check"></i> Formularios de evaluación de casos o inmuebles</li>
            <li><i class="fa-solid fa-check"></i> Perfil corporativo de alta reputación</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_beauty.jpg" alt="Belleza" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">RESERVAS DIRECTAS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-scissors"></i></div>
              <h4>Belleza &amp; Barberías</h4>
            </div>
            <p>Portafolio visual de alta gama para salones de belleza, spas y barberías, integrado con agendas de disponibilidad para clientes.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Sistema de reserva por especialista</li>
            <li><i class="fa-solid fa-check"></i> Menú de precios por tipo de servicio</li>
            <li><i class="fa-solid fa-check"></i> Galería fotográfica de "Antes y Después"</li>
          </ul>
        </div>
      </div>`,

    // Pricing cards full HTML
    pricing_grid_html: `
      <div class="pricing-card">
        <div>
          <h3>Landing Básica</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Una página profesional para presentar tu negocio y recibir consultas.</p>
          <div class="pricing-amount pricing-card-val" data-price-usa="299" data-price-latam="299">$299 <span>USD / Único</span></div>
        </div>
        <ul class="pricing-features">
          <li><i class="fa-solid fa-check"></i> Diseño profesional de una página</li>
          <li><i class="fa-solid fa-check"></i> Diseño adaptable a celulares</li>
          <li><i class="fa-solid fa-check"></i> Botones de contacto y WhatsApp</li>
          <li><i class="fa-solid fa-check"></i> Estructura enfocada en conversiones</li>
          <li><i class="fa-solid fa-check"></i> Optimización básica para buscadores</li>
        </ul>
        <a href="#cotizador" class="btn btn-secondary" style="width: 100%;">Elegir plan</a>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-ribbon">MÁS RECOMENDADO</div>
        <div>
          <h3 class="gradient-text">Landing Pro</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Una landing page mejorada para atraer y convertir más clientes.</p>
          <div class="pricing-amount pricing-card-val" data-price-usa="499" data-price-latam="499" style="color: var(--primary);">$499 <span>USD / Único</span></div>
        </div>
        <ul class="pricing-features">
          <li><i class="fa-solid fa-check"></i> Todo lo incluido en Landing Básica</li>
          <li><i class="fa-solid fa-check"></i> Contenido y secciones ampliadas</li>
          <li><i class="fa-solid fa-check"></i> Integración de herramientas de seguimiento</li>
          <li><i class="fa-solid fa-check"></i> Optimización para campañas digitales</li>
          <li><i class="fa-solid fa-check"></i> Soporte después de la entrega</li>
        </ul>
        <a href="#cotizador" class="btn btn-primary" style="width: 100%;">Elegir plan</a>
      </div>
      <div class="pricing-card">
        <div>
          <h3>Pack Campaña</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Landing page y configuración inicial para lanzar tu campaña.</p>
          <div class="pricing-amount pricing-card-val" data-price-usa="799" data-price-latam="799">$799 <span>USD / Único</span></div>
        </div>
        <ul class="pricing-features">
          <li><i class="fa-solid fa-check"></i> Todo lo incluido en Landing Pro</li>
          <li><i class="fa-solid fa-check"></i> Configuración inicial de campaña digital</li>
          <li><i class="fa-solid fa-check"></i> Integración de analítica y seguimiento</li>
          <li><i class="fa-solid fa-check"></i> Preparación de llamadas a la acción</li>
          <li><i class="fa-solid fa-check"></i> Acompañamiento para el lanzamiento</li>
        </ul>
        <a href="#cotizador" class="btn btn-secondary" style="width: 100%;">Elegir plan</a>
      </div>`
  },

  en: {
    // Nav
    nav_home: 'Home', nav_industries: 'Industries', nav_portfolio: 'Portfolio',
    nav_plans: 'Plans', nav_quote: 'Quote',

    // Hero
    hero_badge: 'Last 3 Spots Available This Week (USA &amp; LATAM)',
    hero_h1: 'Get a Website that <span class="gradient-text">Generates Calls in 5 Days</span>',
    hero_subtitle: 'We build high-conversion professional websites for small businesses in <strong>Miami, Houston, New York and Latin America</strong>. No long contracts. 100% delivery guarantee.',
    hero_feat1: 'Delivered in 5–7 days', hero_feat2: 'No complex contracts', hero_feat3: 'Spanish &amp; English Support',
    quote_title: '3-Second Quick Quote',
    quote_subtitle: 'Select what your business needs and get your instant estimate:',

    // Section headers
    ind_badge: 'Solutions by Business Sector',
    ind_h2: 'Websites Designed for <span class="gradient-text">Your Industry in the USA</span>',
    ind_p: 'Proven conversion architecture for the 5 fastest-growing commercial sectors.',
    port_badge: 'Real Projects 8K',
    port_h2: 'Showcase of <span class="gradient-text">Developed Projects</span>',
    port_p: 'Real success stories in Miami, Houston, New York and Latin America.',
    test_badge: 'Success Stories',
    test_h2: 'What Our <span class="gradient-text">Clients Say</span>',
    test_p: 'Real business owners who transformed their sales with our websites.',
    price_badge: 'Transparent Packages',
    price_h2: 'Web Design Plans <span class="gradient-text">No Hidden Fees</span>',
    price_p: 'Save over 60% compared to local US agencies with identical quality.',

    // Portfolio
    port1_h3: 'Air Conditioning &amp; HVAC Services', port1_p: 'High-conversion landing page that increased customer calls by +240%.',
    port2_h3: 'Roofing &amp; Construction Contractor', port2_p: 'Bilingual corporate website ranked Top #1 on Google Maps in Houston.',
    port3_h3: 'E-commerce Pro Online Store', port3_p: 'Product catalog with card payment gateway and automated orders.',
    port4_city: 'NEW YORK, NY', port4_h3: 'Law Firm &amp; Legal Cases', port4_p: 'Premium corporate design conveying high authority and trust for high-profile clients.',
    port5_h3: 'Luxury Real Estate Agency', port5_p: 'Dynamic property catalog with advanced search filters and integrated forms.',
    port6_h3: 'Gourmet Restaurant &amp; Orders', port6_p: 'Interactive digital menu and online ordering system direct to kitchen via WhatsApp, commission-free.',

    // Testimonials
    test1_quote: '"The team understood exactly what I needed for my roofing company. Since launching the site, quote calls increased by 300%. The design is incredible."',
    test1_role: 'Houston, TX - Contractor',
    test2_quote: '"We needed a more professional image for our dental clinic and to schedule appointments online. The page exceeded our expectations — very easy for patients to use."',
    test2_role: 'Miami, FL - Dentist',
    test3_quote: '"Working with DiseñoWeb Studio was the best investment. They delivered the online store on time and everything works perfectly. My online sales skyrocketed in the first month."',
    test3_role: 'Guayaquil, EC - E-commerce',

    // Footer
    footer_p: 'High-Conversion Web Design &amp; Digital Marketing Agency for Hispanic Businesses in the United States and Latin America.',
    footer_cities: 'US Cities', footer_latam: 'LATAM Coverage', footer_contact: 'Direct Contact',
    footer_chat: 'Chat on WhatsApp',
    footer_copy: '© 2026 DiseñoWeb Studio (disenoweb.agency). All rights reserved.',

    // Industry cards full HTML
    industry_grid_html: `
      <div class="industry-card">
        <img src="images/industry_roofing.jpg" alt="Roofing" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">MAX LOCAL CALLS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-helmet-safety"></i></div>
              <h4>Contractors &amp; Roofing</h4>
            </div>
            <p>Websites optimized to receive phone estimate requests and quick estimation forms for roofers, plumbers, and remodelers.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> 1-click quote request form</li>
            <li><i class="fa-solid fa-check"></i> Project gallery &amp; completed work</li>
            <li><i class="fa-solid fa-check"></i> Featured ranking on Google Maps</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_medical.jpg" alt="Medical" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">ONLINE SCHEDULING</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-user-doctor"></i></div>
              <h4>Clinics &amp; Dentists</h4>
            </div>
            <p>High-trust medical websites that let patients book appointments directly on your digital calendar.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> 24/7 appointment booking system</li>
            <li><i class="fa-solid fa-check"></i> Verified patient testimonials section</li>
            <li><i class="fa-solid fa-check"></i> Insurance info &amp; medical specialties</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_lawyer.jpg" alt="Law Firm" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">LEGAL CONSULTATIONS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-scale-balanced"></i></div>
              <h4>Law Firms</h4>
            </div>
            <p>High-authority corporate portals for law firms and independent attorneys in the USA, optimized to attract new cases.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> 24/7 case evaluation form</li>
            <li><i class="fa-solid fa-check"></i> Detailed practice areas</li>
            <li><i class="fa-solid fa-check"></i> Attorney profiles &amp; credentials</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_restaurant.jpg" alt="Restaurants" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">DIGITAL MENU &amp; ORDERS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-utensils"></i></div>
              <h4>Restaurants &amp; Food</h4>
            </div>
            <p>Interactive digital menus optimized for mobile with home delivery ordering — no third-party commissions.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Interactive photo menu with prices</li>
            <li><i class="fa-solid fa-check"></i> Direct kitchen orders via WhatsApp</li>
            <li><i class="fa-solid fa-check"></i> Exact location &amp; hours on Google Maps</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_realestate.jpg" alt="Real Estate" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">EXCLUSIVE PROPERTIES</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-house"></i></div>
              <h4>Real Estate &amp; Realtors</h4>
            </div>
            <p>Premium real estate portals for agents (Realtors) and agencies in the USA, showcasing property catalogs.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Property catalog / practice areas</li>
            <li><i class="fa-solid fa-check"></i> Case or property evaluation forms</li>
            <li><i class="fa-solid fa-check"></i> High-reputation corporate profile</li>
          </ul>
        </div>
      </div>
      <div class="industry-card">
        <img src="images/industry_beauty.jpg" alt="Beauty" class="industry-card-img">
        <div class="industry-card-content">
          <div>
            <span class="industry-badge-top">DIRECT BOOKINGS</span>
            <div class="industry-header-flex">
              <div class="industry-icon-circle"><i class="fa-solid fa-scissors"></i></div>
              <h4>Beauty &amp; Barbershops</h4>
            </div>
            <p>High-end visual portfolios for beauty salons, spas, and barbershops, integrated with availability schedules for clients.</p>
          </div>
          <ul class="industry-feature-list">
            <li><i class="fa-solid fa-check"></i> Booking system by specialist</li>
            <li><i class="fa-solid fa-check"></i> Price menu by service type</li>
            <li><i class="fa-solid fa-check"></i> Before &amp; After photo gallery</li>
          </ul>
        </div>
      </div>`,

    // Pricing cards full HTML
    pricing_grid_html: `
      <div class="pricing-card">
        <div>
          <h3>Basic Landing Page</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">A professional page to present your business and get inquiries.</p>
          <div class="pricing-amount pricing-card-val" data-price-usa="299" data-price-latam="299">$299 <span>USD / One-time</span></div>
        </div>
        <ul class="pricing-features">
          <li><i class="fa-solid fa-check"></i> Professional single-page design</li>
          <li><i class="fa-solid fa-check"></i> Mobile-responsive layout</li>
          <li><i class="fa-solid fa-check"></i> Contact and WhatsApp buttons</li>
          <li><i class="fa-solid fa-check"></i> Conversion-focused structure</li>
          <li><i class="fa-solid fa-check"></i> Basic search optimization</li>
        </ul>
        <a href="#cotizador" class="btn btn-secondary" style="width: 100%;">Choose plan</a>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-ribbon">RECOMMENDED</div>
        <div>
          <h3 class="gradient-text">Landing Pro</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">An enhanced landing page to attract and convert more customers.</p>
          <div class="pricing-amount pricing-card-val" data-price-usa="499" data-price-latam="499" style="color: var(--primary);">$499 <span>USD / One-time</span></div>
        </div>
        <ul class="pricing-features">
          <li><i class="fa-solid fa-check"></i> Everything in Basic Landing Page</li>
          <li><i class="fa-solid fa-check"></i> Expanded content and sections</li>
          <li><i class="fa-solid fa-check"></i> Tracking tool integration</li>
          <li><i class="fa-solid fa-check"></i> Optimized for digital campaigns</li>
          <li><i class="fa-solid fa-check"></i> Post-launch support</li>
        </ul>
        <a href="#cotizador" class="btn btn-primary" style="width: 100%;">Choose plan</a>
      </div>
      <div class="pricing-card">
        <div>
          <h3>Campaign Pack</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">A landing page and initial setup to launch your campaign.</p>
          <div class="pricing-amount pricing-card-val" data-price-usa="799" data-price-latam="799">$799 <span>USD / One-time</span></div>
        </div>
        <ul class="pricing-features">
          <li><i class="fa-solid fa-check"></i> Everything in Landing Pro</li>
          <li><i class="fa-solid fa-check"></i> Initial digital campaign setup</li>
          <li><i class="fa-solid fa-check"></i> Analytics and tracking integration</li>
          <li><i class="fa-solid fa-check"></i> Conversion-focused calls to action</li>
          <li><i class="fa-solid fa-check"></i> Launch support</li>
        </ul>
        <a href="#cotizador" class="btn btn-secondary" style="width: 100%;">Choose plan</a>
      </div>`
  }
};

let currentLang = localStorage.getItem('dws_lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dws_lang', lang);
  const t = translations[lang];

  // 1. Translate elements with [data-i18n] key
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // 2. Translate elements with direct [data-es]/[data-en] attributes (no data-i18n)
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    if (!el.hasAttribute('data-i18n')) {
      el.innerHTML = el.getAttribute('data-' + lang);
    }
  });

  // 3. Swap full section HTML for complex sections
  const sectionSwaps = {
    'industry-grid': t.industry_grid_html,
    'pricing-grid': t.pricing_grid_html,
  };
  Object.entries(sectionSwaps).forEach(([id, html]) => {
    const el = document.getElementById(id);
    if (el && html) el.innerHTML = html;
  });

  // 4. Toggle active class on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // 5. Update html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es-US' : 'en';

  // 6. Re-init market pricing after grid swap (pricing-card-val values)
  if (typeof updatePricing === 'function') updatePricing();
}

// Apply saved language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
