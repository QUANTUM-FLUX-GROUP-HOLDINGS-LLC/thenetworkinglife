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
      es: { btn_back: "Volver al Hub", badge: "Próximamente Q4 2026", hero_title: 'Consultoría <span style="color: var(--brand-500);">Digital de Alto Valor</span>.', hero_desc: "Deja de competir por centavos. Aprende a empaquetar tu conocimiento, vender servicios premium y construir una autoridad magnética en tu nicho.", placeholder: "Tu mejor correo electrónico", btn_waitlist: "Unirme a la lista de espera", curriculum_eyebrow: "Temario del Programa", curriculum_title: "Cómo escalar a $10k/mes", card1_title: "Oferta Irresistible", card1_desc: "Cómo estructurar un servicio de alto ticket que los clientes compren sin dudar.", card2_title: "Adquisición de Clientes", card2_desc: "Estrategias B2B en LinkedIn y cold outreach que realmente funcionan.", card3_title: "Ventas Consultivas", card3_desc: "Llama a los clientes sin miedo y cierra contratos de 4 o 5 cifras.", card4_title: "Autoridad y Marca", card4_desc: "Posicionamiento en redes para que los clientes lleguen a ti solos.", cta_title: "Tu conocimiento vale más de lo que crees.", cta_desc: "Únete a la lista de espera y sé el primero en enterarte cuando abramos el programa.", cta_btn: "Quiero estar listo", footer_desc: "Construyendo conexiones profesionales significativas en la era digital.", footer_links: "Enlaces Rápidos", nav_opportunities: "Oportunidades", nav_how: "Cómo funciona", footer_social: "Conéctate con Nosotros", footer_rights: "Todos los derechos reservados." },
      en: { btn_back: "Back to Hub", badge: "Coming Q4 2026", hero_title: 'High-Ticket <span style="color: var(--brand-500);">Digital Consulting</span>.', hero_desc: "Stop competing for pennies. Learn how to package your knowledge, sell premium services, and build magnetic authority in your niche.", placeholder: "Your best email", btn_waitlist: "Join the waitlist", curriculum_eyebrow: "Program Curriculum", curriculum_title: "How to scale to $10k/mo", card1_title: "Irresistible Offer", card1_desc: "How to structure a high-ticket service that clients buy without hesitation.", card2_title: "Client Acquisition", card2_desc: "B2B strategies on LinkedIn and cold outreach that actually work.", card3_title: "Consultative Sales", card3_desc: "Call clients without fear and close 4 or 5-figure contracts.", card4_title: "Authority & Brand", card4_desc: "Social positioning so clients come to you.", cta_title: "Your knowledge is worth more than you think.", cta_desc: "Join the waitlist and be the first to know when we open the program.", cta_btn: "I want to be ready", footer_desc: "Building meaningful professional connections in the digital age.", footer_links: "Quick Links", nav_opportunities: "Opportunities", nav_how: "How it works", footer_social: "Connect With Us", footer_rights: "All rights reserved." }
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
