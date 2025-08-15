import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return;
    initialized.current = true;

    // Simple smooth scrolling without ScrollToPlugin
    const setupSmoothScrolling = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            const target = document.querySelector(href) as HTMLElement;
            if (target) {
              const headerOffset = 80;
              const elementPosition = target.offsetTop;
              const offsetPosition = elementPosition - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }
        });
      });
    };

    // Fade in animations
    const setupScrollAnimations = () => {
      // Hero section animation
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        gsap.fromTo(heroContent, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      }

      // Section animations
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((element: any) => {
        gsap.fromTo(element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Gallery items stagger animation
      const galleryItems = document.querySelectorAll('.gallery-item');
      galleryItems.forEach((element: any, index) => {
        gsap.fromTo(element,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    };

    // Initialize after DOM is ready
    const initTimer = setTimeout(() => {
      setupSmoothScrolling();
      setupScrollAnimations();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { gsap, ScrollTrigger };
};