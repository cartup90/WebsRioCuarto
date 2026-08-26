/* ════════════════════════════════════════════════════════════════════════
   CATRIEL PARDO · Interacciones del sitio
   1. Menú móvil (hamburguesa)
   2. Animaciones de scroll (reveal)
   3. Formulario de contacto
   4. Header que se compacta al scrollear
   ════════════════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  /* ⚙️ CAMBIÁ TU NÚMERO ACÁ (una sola vez).
     Formato: código de país + código de área + número, SIN el "+" inicial.
     Ej. Argentina: 5493581234567 */
  const WA_NUMBER = "5493584180337";

  /* ---------- 1. Menú móvil ---------- */
  const burger = document.getElementById("navBurger");
  const nav = document.querySelector(".nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("nav-open", !isOpen);
    });

    // Cerrar el menú al hacer click en un enlace (móvil)
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        nav.classList.remove("nav-open");
      });
    });
  }

  /* ---------- 2. Animaciones de scroll (reveal) ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback: mostrar todo directo
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- 3. Formulario de contacto ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Validación simple de campos requeridos
      const nombre = form.nombre.value.trim();
      const telefono = form.telefono.value.trim();
      if (!nombre || !telefono) {
        showNote("Por favor completá tu nombre y tu teléfono.", true);
        return;
      }

      // Armamos el mensaje para WhatsApp (sin backend)
      const negocio = form.negocio.value.trim();
      const mensaje = form.mensaje.value.trim();
      const texto =
        `Hola, soy ${nombre}. Quiero una web para mi negocio${negocio ? ` (${negocio})` : ""}.` +
        ` Mi teléfono es ${telefono}.` +
        (mensaje ? ` ${mensaje}` : "");

      const url =
        "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(texto);
      window.open(url, "_blank", "noopener");

      showNote("¡Listo! Abrimos WhatsApp con tu mensaje. Ya te contesto.", false);
      form.reset();
    });
  }

  function showNote(texto, esError) {
    if (!note) return;
    note.textContent = texto;
    note.hidden = false;
    note.style.color = esError ? "#B4552F" : "#8C3E22";
  }

  /* ---------- 4. Header que se compacta al scrollear ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // estado inicial
  }
})();