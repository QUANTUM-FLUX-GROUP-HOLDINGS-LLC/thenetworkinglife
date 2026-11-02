/* ==========================================================================
   The Networking Life — main.js
   Menú móvil + Header Scroll + Carrusel Centrado
   ========================================================================== */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Menú móvil accesible ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  }

  /* ---------- 2. Header Scroll ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 3. Carrusel de Oportunidades (Math Center) ---------- */
  const track = document.getElementById('carousel-track');
  const cards = document.querySelectorAll('.course-card');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  if (track && cards.length > 0) {
    
    // Función para calcular qué tarjeta está exactamente en el centro
    const updateCenterCard = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      
      let closestCard = null;
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(trackCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCard = card;
        }
      });

      cards.forEach(card => card.classList.remove('is-centered'));
      if (closestCard) closestCard.classList.add('is-centered');
    };

    // Escuchar el evento de scroll en el carrusel
    let isScrolling;
    track.addEventListener('scroll', () => {
      window.cancelAnimationFrame(isScrolling);
      isScrolling = window.requestAnimationFrame(updateCenterCard);
    }, { passive: true });

    // Botones de flecha (Snap exacto a la siguiente tarjeta)
    btnPrev.addEventListener('click', () => {
      const currentCentered = document.querySelector('.course-card.is-centered');
      const prevCard = currentCentered?.previousElementSibling;
      if (prevCard) {
        prevCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });

    btnNext.addEventListener('click', () => {
      const currentCentered = document.querySelector('.course-card.is-centered');
      const nextCard = currentCentered?.nextElementSibling;
      if (nextCard) {
        nextCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });

    // Forzar el centrado en la tarjeta de Amway al cargar la página
    // La tarjeta de Amway es la segunda (índice 1)
    setTimeout(() => {
      if (cards[1]) {
        cards[1].scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
      }
      updateCenterCard();
    }, 100);
  }

  /* ---------- 4. Formspree AJAX ---------- */
  document.querySelectorAll('form[action*="formspree.io"]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = '...';
      try {
        await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        alert('✅ Thank you! We will contact you soon.');
        form.reset();
      } catch (err) {
        alert('❌ Error. Please try again.');
      } finally {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
  });

  /* ---------- 5. Año dinámico ---------- */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

})();

/* ==========================================
   LÓGICA DEL BOTÓN SCROLL TO TOP
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  if (scrollTopBtn) {
    // Mostrar/ocultar el botón al hacer scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('is-visible');
      } else {
        scrollTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    // Hacer scroll hacia arriba suavemente
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
