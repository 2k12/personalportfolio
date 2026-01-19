import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// @ts-ignore
import { Observer } from "gsap/Observer";

// Registrar plugins solo en el lado del cliente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Observer);

  // Configuración global opcional
  gsap.defaults({
    ease: "power2.out",
    duration: 0.6,
  });

  // GSAP Ticker para optimización si es necesario
  // gsap.ticker.lagSmoothing(1000, 16);
}

export { gsap, ScrollTrigger, Observer };
