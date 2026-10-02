// The page follows the visitor's day, week and season.
//   morning  05–11            a coffee ring on the paper (two on a Monday)
//   day      11–golden        the plain page
//   golden   1½ h to sunset   warm paper
//   evening  sunset–23        dark page, a lamp is on; pull it to turn the light up
//   night    23–05            darker still, lamp low, a moon
// Sunrise and sunset move with the date, so the lamp comes on around 16:15 in
// December and 21:30 in June. Before sunrise the page is dark as well.
//
// Loaded in <head> without defer on purpose: the state lands on <html> before
// the first paint, so an evening visitor never sees the light page flash by.
// To see another moment, add e.g. ?now=2026-12-21T07:30 to the address.
(() => {
  const root = document.documentElement;
  const q = new URLSearchParams(location.search).get('now');
  const off = q && !isNaN(new Date(q)) ? new Date(q) - Date.now() : 0;

  const NOTES = {
    monday: 'It’s Monday morning. Have a good week.',
    friday: 'It’s Friday afternoon. Whatever you’re about to deploy: Monday is a nice day, too.',
    weekend: 'It’s the weekend, and you’re reading about tech leadership. I like you already.'
  };

  let choice = null;
  try { choice = sessionStorage.getItem('lamp'); } catch (e) {}

  // rough sunrise and sunset on the clock, for central Europe (51°N)
  function sun(d) {
    const N = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
    const decl = -23.44 * Math.cos(2 * Math.PI * (N + 10) / 365) * Math.PI / 180;
    const half = Math.acos(-Math.tan(51 * Math.PI / 180) * Math.tan(decl)) * 12 / Math.PI;
    const summer = (new Date(d.getFullYear(), 0, 1).getTimezoneOffset() - d.getTimezoneOffset()) / 60;
    const noon = 12.35 + summer;
    return { rise: noon - half, set: noon + half };
  }

  function apply() {
    const n = new Date(Date.now() + off), h = n.getHours() + n.getMinutes() / 60, day = n.getDay(), { rise, set } = sun(n);
    const phase = h < 5 || h >= 23 ? 'night' : h >= set ? 'evening' : h >= set - 1.5 ? 'golden' : h < 11 ? 'morning' : 'day';
    const moment = day === 1 && h >= 5 && h < 11 ? 'monday' : day === 5 && h >= 15 && h < 19 ? 'friday' : day === 0 || day === 6 ? 'weekend' : '';
    const dusk = h < rise || h >= set, bright = dusk && choice === 'bright';
    root.dataset.phase = phase;
    root.dataset.moment = moment;
    root.toggleAttribute('data-dusk', dusk);
    root.toggleAttribute('data-dark', dusk && !bright);
    root.toggleAttribute('data-lamp-bright', bright);
    const greeting = h < 5 || h >= 23 ? 'Still up?' : h < 11 ? 'Good morning.' : h >= 12 && h < 13 ? 'Mahlzeit.' :
      h < Math.min(18, set) ? 'Hello.' : 'Good evening.';
    return { greeting, note: NOTES[moment] || '' };
  }
  apply();

  addEventListener('DOMContentLoaded', () => {
    const make = (tag, cls, html = '') => { const e = document.createElement(tag); e.className = cls; e.innerHTML = html; return e; };
    const stain = `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor">
      <filter id="rough"><feTurbulence baseFrequency=".045" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter>
      <g filter="url(#rough)"><circle cx="60" cy="60" r="44" stroke-width="5" opacity=".2"/>
      <circle cx="60" cy="60" r="46.5" stroke-width="1.2" opacity=".35"/>
      <path d="M30 92A44 44 0 0 1 18 48" stroke-width="8" opacity=".1"/></g></svg>`;
    const lamp = make('button', 'lamp', `<i></i>
      <svg viewBox="0 0 44 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">
        <path class="bulb" d="M16 26a6 6 0 0 0 12 0z"/>
        <path class="shade" d="M6 26Q6 2 22 2Q38 2 38 26z"/>
        <path d="M33 26v15"/><circle cx="33" cy="43.5" r="1.8" fill="currentColor"/>
      </svg>`);
    lamp.setAttribute('aria-label', 'Lamp: switch the light');
    const pool = make('div', 'pool');
    const moon = make('div', 'moon', '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M10.5 1a7.5 7.5 0 1 0 4.6 10.3A6.2 6.2 0 0 1 10.5 1z"/></svg>');
    (document.querySelector('[data-lamp-mount]') || document.body).append(lamp);
    document.body.append(pool, make('div', 'ring', stain), make('div', 'ring two', stain), moon);

    const greet = document.querySelector('[data-greet]'), note = document.querySelector('[data-note]');
    // the pool of light follows wherever the lamp hangs
    function aim() {
      const r = lamp.getBoundingClientRect();
      if (!r.width) return;
      pool.style.setProperty('--pool-x', r.left + r.width / 2 + scrollX + 'px');
      pool.style.setProperty('--pool-y', r.bottom + scrollY - 24 + 'px');
    }
    function render() {
      const s = apply();
      if (greet) greet.textContent = s.greeting;
      if (note) note.textContent = s.note;
      requestAnimationFrame(aim);
    }
    lamp.addEventListener('click', () => {
      choice = root.hasAttribute('data-dark') ? 'bright' : 'dim';
      try { sessionStorage.setItem('lamp', choice); } catch (e) {}
      render();
    });
    addEventListener('resize', aim);
    setInterval(render, 60000);
    render();
  });
})();
