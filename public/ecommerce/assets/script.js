// Lógica del Slider
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 4000);

    // Lógica de Traducción
    const trans = {
      es: { btn_back: "Volver al Hub", badge: "Próximamente Q3 2026", hero_title: 'Domina el <span style="color: var(--gold-400);">Dropshipping</span>.', hero_desc: "Aprende a crear tiendas automatizadas, encontrar proveedores de élite y escalar tus ventas sin necesidad de mantener inventario físico.", placeholder: "Tu mejor correo electrónico", btn_waitlist: "Unirme a la lista de espera", curriculum_eyebrow: "Temario del Programa", curriculum_title: "Lo que construiremos juntos", card1_title: "Creación de Tienda", card1_desc: "Configuración de Shopify desde cero, personalización de tema y pasarelas de pago.", card2_title: "Proveedores", card2_desc: "Cómo encontrar productos ganadores en AliExpress y CJ Dropshipping.", card3_title: "Tráfico y Ads", card3_desc: "Campañas rentables en Meta Ads y TikTok Ads paso a paso.", card4_title: "Automatización", card4_desc: "Conecta herramientas para que los pedidos se procesen solos.", cta_title: "¿Estás listo para dejar de vender tu tiempo por dinero?", cta_desc: "Únete a la lista de espera y recibe un descuento exclusivo de lanzamiento.", cta_btn: "Asegurar mi lugar", footer_desc: "Construyendo conexiones profesionales significativas en la era digital.", footer_links: "Enlaces Rápidos", nav_opportunities: "Oportunidades", nav_how: "Cómo funciona", footer_social: "Conéctate con Nosotros", footer_rights: "Todos los derechos reservados." },
      en: { btn_back: "Back to Hub", badge: "Coming Q3 2026", hero_title: 'Master <span style="color: var(--gold-400);">Dropshipping</span>.', hero_desc: "Learn how to create automated stores, find elite suppliers, and scale your sales without holding physical inventory.", placeholder: "Your best email", btn_waitlist: "Join the waitlist", curriculum_eyebrow: "Program Curriculum", curriculum_title: "What we will build together", card1_title: "Store Creation", card1_desc: "Shopify setup from scratch, theme customization, and payment gateways.", card2_title: "Suppliers", card2_desc: "How to find winning products on AliExpress and CJ Dropshipping.", card3_title: "Traffic & Ads", card3_desc: "Profitable campaigns on Meta Ads and TikTok Ads step by step.", card4_title: "Automation", card4_desc: "Connect tools so orders process themselves.", cta_title: "Ready to stop trading time for money?", cta_desc: "Join the waitlist and get an exclusive launch discount.", cta_btn: "Secure my spot", footer_desc: "Building meaningful professional connections in the digital age.", footer_links: "Quick Links", nav_opportunities: "Opportunities", nav_how: "How it works", footer_social: "Connect With Us", footer_rights: "All rights reserved." }
    };
    document.getElementById('lang-selector').addEventListener('change', (e) => {
      const lang = e.target.value;
      document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = trans[lang][el.getAttribute('data-i18n')]; });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = trans[lang][el.getAttribute('data-i18n-placeholder')]; });
    });
    document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());


/* Lógica del Scroll */
document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('is-visible', window.scrollY > 300);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
  
  // Iniciar Chatbot
  if (typeof chatbotlite !== 'undefined') {
    chatbotlite.mount({
      endpoint: "https://tnl-chatbot-api.maximumflashpower.workers.dev",
      title: "Asistente TNL",
      primaryColor: "#1e3a5f"
    });
  }
});
