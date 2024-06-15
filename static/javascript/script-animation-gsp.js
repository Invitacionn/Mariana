gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".left-animation");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "play none none none",
      start: "top 80%", // Ajusta este valor si es necesario
      end: "bottom 20%", // Ajusta este valor si es necesario
      markers: false // Habilita esto para depuración si lo necesitas
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});

gsap.utils.toArray('.fade-in').forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%', // Cuando la parte superior del elemento esté al 80% desde la parte superior de la ventana
      end: 'top 60%', // Cuando la parte superior del elemento esté al 60% desde la parte superior de la ventana
      toggleActions: "play none none none", // Al entrar reproduce, no hay acciones al salir, reentrar o volver a salir
      invalidateOnRefresh: true,
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// Función para recalcular y ajustar animaciones en cambio de tamaño de ventana
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});