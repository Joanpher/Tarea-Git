'use client';

import { useEffect } from 'react';

export default function ParticlesBackground() {
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await import('particles.js');
        if (!mounted) return;

        const w = window as unknown as {
          particlesJS?: (id: string, config: unknown) => void;
          pJSDom?: Array<unknown>;
        };

        if (!w.particlesJS) return;

        w.particlesJS('particles-js', {
          particles: {
            number: { value: 240, density: { enable: true, value_area: 900 } },
            color: { value: ['#3f8f56', '#8fb86e', '#fbf7ec'] },
            shape: { type: 'circle', stroke: { width: 0, color: '#15281c' }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.82, random: true, anim: { enable: false, speed: 1, opacity_min: 0.22, sync: false } },
            size: { value: 7.5, random: true, anim: { enable: false, speed: 30, size_min: 0.9, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#3f8f56', opacity: 0.18, width: 1 },
            move: {
              enable: true,
              speed: 1.8,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'bubble' },
              onclick: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              bubble: { distance: 220, size: 5, duration: 0.35, opacity: 1, speed: 3 },
              repulse: { distance: 180, duration: 0.35 },
            },
          },
          retina_detect: true,
        });
      } catch {
        return;
      }
    })();

    return () => {
      mounted = false;
      const el = document.getElementById('particles-js');
      if (el) el.innerHTML = '';
      const w = window as unknown as { pJSDom?: Array<unknown> };
      if (w.pJSDom) w.pJSDom = [];
    };
  }, []);

  return <div id="particles-js" aria-hidden="true" />;
}
