// Hidden on purpose: "Technology vs. People". Nothing on the page points to it.
// Start: press and hold the word "People" (touch or mouse), or press P.
// The court follows the screen: sideways on desktop, upright on a phone.
(() => {
  const WIN = 5, MARGIN = 28, HOLD = 550;
  let playing = false;

  addEventListener('keydown', e => {
    if (playing || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable) return;
    if (e.key.toLowerCase() === 'p') play();
  });
  document.querySelectorAll('[data-gem]').forEach(el => {
    let t;
    const cancel = () => clearTimeout(t);
    el.addEventListener('pointerdown', () => { cancel(); t = setTimeout(play, HOLD); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(n => el.addEventListener(n, cancel));
    el.addEventListener('contextmenu', e => e.preventDefault());
  });

  function play() {
    if (playing) return;
    playing = true;
    // borrow ink, paper and typeface from whatever page we are on
    const body = getComputedStyle(document.body);
    const ink = body.color, font = body.fontFamily;
    const paper = getComputedStyle(document.documentElement).backgroundColor;
    const wrap = document.createElement('div'), c = document.createElement('canvas'), x = c.getContext('2d');
    const leave = document.createElement('button');
    wrap.style.cssText = 'position:fixed;inset:0;z-index:999;opacity:0;transition:opacity .25s;touch-action:none;background:' +
      paper.replace('rgb(', 'rgba(').replace(')', ',.94)');
    c.style.cssText = 'display:block;width:100%;height:100%;cursor:none';
    leave.textContent = 'leave';
    leave.style.cssText = 'position:absolute;background:none;border:0;padding:14px 18px;text-decoration:underline;cursor:pointer;opacity:.55;color:' +
      ink + ';font:15px/1 ' + font;
    wrap.append(c, leave);
    document.body.appendChild(wrap);
    requestAnimationFrame(() => wrap.style.opacity = 1);
    const root = document.documentElement, overflow = root.style.overflow;
    root.style.overflow = 'hidden';

    // u runs along the court (Technology at 0, People at LEN), v across it
    let W, H, LEN, BR, tall, raf, last = 0, over = null;
    const keys = {}, score = [0, 0];
    const pad = { w: 10, h: 0, tech: 0, people: 0 };
    const ball = { u: 0, v: 0, vu: 0, vv: 0, s: 12 };
    const clamp = v => Math.max(0, Math.min(BR - pad.h, v));
    const rect = (u, v, du, dv) => tall ? x.fillRect(v, u, dv, du) : x.fillRect(u, v, du, dv);

    function size() {
      const r = devicePixelRatio || 1;
      W = wrap.clientWidth; H = wrap.clientHeight; tall = H > W;
      LEN = tall ? H : W; BR = tall ? W : H;
      c.width = W * r; c.height = H * r; x.setTransform(r, 0, 0, r, 0, 0);
      pad.h = Math.max(70, BR * .16);
      Object.assign(leave.style, tall
        ? { right: '0', top: '50%', left: '', bottom: '', transform: 'translateY(-50%)' }
        : { left: '50%', bottom: '6px', right: '', top: '', transform: 'translateX(-50%)' });
    }
    function serve(dir) {
      const sp = Math.max(380, LEN * .42);
      ball.u = LEN / 2; ball.v = BR / 2;
      ball.vu = dir * sp; ball.vv = (Math.random() - .5) * sp * .8;
    }
    function hit(pu, pv, dir) {
      if (Math.sign(ball.vu) === dir) return;
      if (ball.u < pu + pad.w && ball.u + ball.s > pu && ball.v + ball.s > pv && ball.v < pv + pad.h) {
        const off = (ball.v + ball.s / 2 - (pv + pad.h / 2)) / (pad.h / 2);
        const sp = Math.hypot(ball.vu, ball.vv) * 1.05, a = off * Math.PI / 3.5;
        ball.vu = dir * sp * Math.cos(a); ball.vv = sp * Math.sin(a);
      }
    }
    function point(who) {
      if (++score[who] === WIN) over = who ? ['People decide', 'what happens.'] : ['Technology decides', 'what’s possible.'];
      else serve(who ? -1 : 1);
    }
    function step(dt) {
      if (keys.ArrowUp || keys.ArrowLeft || keys.w || keys.a) pad.people -= BR * 1.1 * dt;
      if (keys.ArrowDown || keys.ArrowRight || keys.s || keys.d) pad.people += BR * 1.1 * dt;
      // technology follows the ball, but only so fast
      const reach = BR * .62 * dt;
      pad.tech += Math.max(-reach, Math.min(reach, ball.v - pad.h / 2 - pad.tech));
      pad.tech = clamp(pad.tech); pad.people = clamp(pad.people);
      ball.u += ball.vu * dt; ball.v += ball.vv * dt;
      if (ball.v < 0 || ball.v > BR - ball.s) { ball.vv *= -1; ball.v = ball.v < 0 ? 0 : BR - ball.s; }
      hit(MARGIN, pad.tech, 1); hit(LEN - MARGIN - pad.w, pad.people, -1);
      if (ball.u < -ball.s) point(1); else if (ball.u > LEN) point(0);
    }
    function draw() {
      x.clearRect(0, 0, W, H); x.fillStyle = ink;
      rect(MARGIN, pad.tech, pad.w, pad.h);
      rect(LEN - MARGIN - pad.w, pad.people, pad.w, pad.h);
      if (over) {
        x.textAlign = 'center';
        x.font = '700 ' + (tall ? 30 : Math.min(44, W * .05)) + 'px ' + font;
        if (tall) { x.fillText(over[0], W / 2, H / 2 - 8); x.fillText(over[1], W / 2, H / 2 + 30); }
        else x.fillText(over.join(' '), W / 2, H / 2);
        x.globalAlpha = .55; x.font = '15px ' + font;
        x.fillText('Technology ' + score[0] + ' : ' + score[1] + ' People', W / 2, H / 2 + (tall ? 70 : 44));
        x.globalAlpha = 1;
        return;
      }
      if (tall) {
        x.textAlign = 'left';
        x.font = '700 44px ' + font;
        x.fillText(score[0], 20, H / 2 - 40); x.fillText(score[1], 20, H / 2 + 72);
        x.globalAlpha = .55; x.font = '14px ' + font;
        x.fillText('Technology', 20, H / 2 - 16); x.fillText('People', 20, H / 2 + 28);
        x.globalAlpha = 1;
        for (let i = 120; i < W - 80; i += 28) x.fillRect(i, H / 2 - 1, 12, 2);
      } else {
        x.textAlign = 'center';
        x.font = '700 64px ' + font;
        x.fillText(score[0], W / 2 - 90, 96); x.fillText(score[1], W / 2 + 90, 96);
        x.globalAlpha = .55; x.font = '15px ' + font;
        x.fillText('Technology', W / 2 - 90, 126); x.fillText('People', W / 2 + 90, 126);
        x.globalAlpha = 1;
        for (let i = 150; i < H - 60; i += 28) x.fillRect(W / 2 - 1, i, 2, 12);
      }
      rect(ball.u, ball.v, ball.s, ball.s);
    }
    function frame(t) {
      const dt = Math.min(.033, (t - last) / 1000 || 0); last = t;
      if (!over) step(dt);
      draw(); raf = requestAnimationFrame(frame);
    }
    function down(e) {
      if (e.key === 'Escape' || (over && (e.key === 'Enter' || e.key === ' '))) return quit();
      keys[e.key] = true;
      if (e.key.startsWith('Arrow') || e.key === ' ') e.preventDefault();
    }
    const up = e => { keys[e.key] = false; };
    const move = e => { pad.people = (tall ? e.clientX : e.clientY) - pad.h / 2; };
    function quit() {
      cancelAnimationFrame(raf);
      removeEventListener('keydown', down); removeEventListener('keyup', up); removeEventListener('resize', size);
      root.style.overflow = overflow; wrap.remove(); playing = false;
    }

    addEventListener('keydown', down); addEventListener('keyup', up); addEventListener('resize', size);
    wrap.addEventListener('pointermove', move);
    wrap.addEventListener('pointerdown', e => { if (over && e.target === c) quit(); else move(e); });
    leave.addEventListener('click', quit);
    size(); pad.tech = pad.people = (BR - pad.h) / 2; serve(Math.random() < .5 ? -1 : 1);
    raf = requestAnimationFrame(frame);
  }
})();
