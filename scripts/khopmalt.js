// @ts-check
// Generates 4 portfolio images for the Khopmalt beer label project
const puppeteer = require('puppeteer')
const path = require('path')

const OUT = path.join(__dirname, '..', 'public', 'images', 'projects', 'khopmalt')

const LABELS = [
  { name: 'ЯНТАРНЫЙ<br>ЭЛЬ',  num: 1, stripe: '#F97316', nameColor: '#F97316', abv: '4%',   plato: '12.0' },
  { name: 'СУХОЙ<br>СТАУТ',   num: 2, stripe: '#C8A87A', nameColor: '#C8A87A', abv: '4%',   plato: '12'   },
  { name: 'СВЕТЛОЕ',           num: 3, stripe: '#D4990C', nameColor: '#FFE066', abv: '4.3%', plato: '12.4' },
  { name: 'КРАСНЫЙ<br>ЭЛЬ',   num: 4, stripe: '#DC2626', nameColor: '#DC2626', abv: '4.8%', plato: '13.5' },
  { name: 'ПШЕНИЧНОЕ',        num: 5, stripe: '#EA580C', nameColor: '#EA580C', abv: '4.5%', plato: '11.5' },
  { name: 'ЭЛЬ',              num: 6, stripe: '#4D7C0F', nameColor: '#84CC16', abv: '3.8%', plato: '11.0' },
  { name: 'ИПА',               num: 7, stripe: '#6D28D9', nameColor: '#C4B5FD', abv: '5.5%', plato: '14.0' },
]

const GF = `https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&display=swap`

// Renders one shield-shaped badge
function badge(label, w, h) {
  const arch   = Math.round(h * 0.10)
  const numSz  = Math.round(w * 0.22)
  const sW     = Math.round(w * 1.55)
  const sH     = Math.round(h * 0.29)
  const sTop   = Math.round(h * 0.41)
  const sLeft  = Math.round(w * -0.28)

  return `<div style="
      position:relative;width:${w}px;height:${h}px;background:#1C1C1C;
      clip-path:polygon(0 ${arch}px,${w/2}px 0,${w}px ${arch}px,${w}px ${h}px,0 ${h}px);
      overflow:hidden;flex-shrink:0;">
    <!-- stripe -->
    <div style="position:absolute;width:${sW}px;height:${sH}px;background:${label.stripe};
      top:${sTop}px;left:${sLeft}px;transform:rotate(-28deg);opacity:.85;z-index:1;"></div>
    <!-- content -->
    <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;
      align-items:center;padding:${Math.round(h*.065)}px ${Math.round(w*.07)}px ${Math.round(h*.055)}px;">
      <div style="font-family:Oswald;font-size:${Math.round(w*.036)}px;font-weight:300;
        letter-spacing:${Math.round(w*.024)}px;color:#C8A020;text-transform:uppercase;
        margin-bottom:${Math.round(h*.013)}px;white-space:nowrap;">ЧАСТНАЯ ПИВОВАРНЯ</div>
      <div style="font-family:Oswald;font-size:${Math.round(w*.205)}px;font-weight:700;
        color:#F0EAD0;letter-spacing:${Math.round(w*.008)}px;line-height:1;
        margin-bottom:${Math.round(h*.010)}px;">HOPMALT</div>
      <div style="font-family:Oswald;font-size:${Math.round(w*.034)}px;font-weight:300;
        color:#C8A020;letter-spacing:.8px;display:flex;gap:4px;align-items:center;
        margin-bottom:${Math.round(h*.058)}px;">ESTD <span>◆</span> ЯРОСЛАВЛЬ <span>◆</span> 2017</div>
      <div style="font-family:Oswald;font-size:${Math.round(w*.135)}px;font-weight:700;
        color:${label.nameColor};line-height:1.05;text-align:center;
        flex:1;display:flex;align-items:center;justify-content:center;
        padding-right:${Math.round(w*.20)}px;">${label.name}</div>
      <div style="font-family:Oswald;font-size:${Math.round(w*.035)}px;font-weight:300;
        color:#888;text-align:center;border-top:1px solid #2e2e2e;
        width:90%;padding-top:${Math.round(h*.020)}px;white-space:nowrap;">
        450 МЛ &nbsp;|&nbsp; АЛК ${label.abv} &nbsp;|&nbsp; ПЛОТН ${label.plato}</div>
    </div>
    <!-- number circle -->
    <div style="position:absolute;right:${Math.round(w*.045)}px;top:50%;transform:translateY(-50%);
      z-index:3;width:${numSz}px;height:${numSz}px;border-radius:50%;
      border:${Math.round(w*.018)}px solid ${label.stripe};background:#1C1C1C;
      display:flex;align-items:center;justify-content:center;
      font-family:Oswald;font-size:${Math.round(numSz*.58)}px;font-weight:700;
      color:${label.stripe};">${label.num}</div>
  </div>`
}

function head(bg = '#FFD000') {
  return `<head><meta charset="UTF-8">
    <link href="${GF}" rel="stylesheet">
    <style>*{margin:0;padding:0;box-sizing:border-box;}body{background:${bg};overflow:hidden;}</style>
  </head>`
}

// ── Image 1: Main 1920×1080 — all 7 badges in a row ──────────────────────────
const page1 = `<!DOCTYPE html><html>${head()}<body style="
  width:1920px;height:1080px;display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:30px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-family:Oswald;font-size:11px;font-weight:300;letter-spacing:8px;
      color:#1C1C1C;opacity:.45;text-transform:uppercase;">Частная пивоварня · Ярославль · Est.&thinsp;2017</div>
    <div style="font-family:Oswald;font-size:82px;font-weight:700;color:#1C1C1C;
      letter-spacing:10px;line-height:1;">HOPMALT</div>
    <div style="font-family:Oswald;font-size:10px;font-weight:300;letter-spacing:5px;
      color:#1C1C1C;opacity:.40;text-transform:uppercase;">Дизайн линейки этикеток · 7 сортов</div>
  </div>
  <div style="display:flex;gap:14px;align-items:flex-start;">
    ${LABELS.map(l => badge(l, 218, 305)).join('')}
  </div>
</body></html>`

// ── Image 2: Extra-1 1200×800 — 4 featured badges 2×2 ────────────────────────
const featured = [LABELS[0], LABELS[3], LABELS[6], LABELS[4]] // Янтарный, Красный, ИПА, Пшеничное
const page2 = `<!DOCTYPE html><html>${head()}<body style="
  width:1200px;height:800px;display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:16px;">
  <div style="font-family:Oswald;font-size:9px;font-weight:300;letter-spacing:6px;
    color:#1C1C1C;opacity:.45;text-transform:uppercase;margin-bottom:4px;">
    Линейка этикеток HOPMALT — детали дизайна</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
    ${featured.map(l => badge(l, 255, 352)).join('')}
  </div>
</body></html>`

// ── Image 3: Extra-2 1200×800 — can + bottle mockup ──────────────────────────
function can(label, h = 340) {
  const w = Math.round(h * 0.47)
  return `<div style="display:flex;flex-direction:column;align-items:center;">
    <!-- lid -->
    <div style="width:${Math.round(w*.85)}px;height:16px;
      background:linear-gradient(to right,#555,#bbb,#888,#bbb,#555);
      border-radius:4px 4px 0 0;"></div>
    <!-- body -->
    <div style="position:relative;width:${w}px;height:${h}px;overflow:hidden;
      background:linear-gradient(to right,#111 0%,#222 18%,#2a2a2a 42%,#1a1a1a 50%,#2a2a2a 58%,#222 82%,#111 100%);
      box-shadow:5px 10px 32px rgba(0,0,0,.4),-3px 0 14px rgba(0,0,0,.25);">
      <!-- stripe -->
      <div style="position:absolute;width:220%;height:33%;background:${label.stripe};
        top:43%;left:-60%;transform:rotate(-25deg);opacity:.85;"></div>
      <!-- label content -->
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2;">
        <div style="text-align:center;padding:0 32px 0 16px;">
          <div style="font-family:Oswald;font-size:${Math.round(w*.066)}px;font-weight:300;
            letter-spacing:2px;color:#C8A020;text-transform:uppercase;">ЧАСТНАЯ ПИВОВАРНЯ</div>
          <div style="font-family:Oswald;font-size:${Math.round(w*.26)}px;font-weight:700;
            color:#F0EAD0;line-height:1;letter-spacing:1px;">HOPMALT</div>
          <div style="font-family:Oswald;font-size:${Math.round(w*.055)}px;font-weight:300;
            color:#C8A020;letter-spacing:1px;margin-bottom:${Math.round(h*.06)}px;">
            ESTD ◆ ЯРОСЛАВЛЬ ◆ 2017</div>
          <div style="font-family:Oswald;font-size:${Math.round(w*.20)}px;font-weight:700;
            color:${label.nameColor};line-height:1.05;">${label.name}</div>
          <div style="font-family:Oswald;font-size:${Math.round(w*.054)}px;font-weight:300;
            color:#888;margin-top:${Math.round(h*.04)}px;border-top:1px solid #333;
            padding-top:${Math.round(h*.025)}px;">
            450МЛ &nbsp;|&nbsp; АЛК ${label.abv} &nbsp;|&nbsp; ПЛОТН ${label.plato}</div>
        </div>
      </div>
      <!-- number circle -->
      <div style="position:absolute;right:10px;top:50%;transform:translateY(-50%);z-index:3;
        width:${Math.round(w*.22)}px;height:${Math.round(w*.22)}px;border-radius:50%;
        border:${Math.round(w*.018)}px solid ${label.stripe};background:#1a1a1a;
        display:flex;align-items:center;justify-content:center;
        font-family:Oswald;font-size:${Math.round(w*.13)}px;font-weight:700;
        color:${label.stripe};">${label.num}</div>
    </div>
    <!-- bottom -->
    <div style="width:${Math.round(w*.82)}px;height:14px;
      background:linear-gradient(to right,#444,#999,#666,#999,#444);
      border-radius:0 0 6px 6px;"></div>
    <div style="width:${Math.round(w*.75)}px;height:10px;
      background:rgba(0,0,0,.18);border-radius:50%;margin-top:5px;filter:blur(5px);"></div>
  </div>`
}

function bottle(label, h = 380) {
  const bw  = Math.round(h * 0.33) // full body width
  // neck: middle 30% of bw; shoulder flares out from nB% to sB% of height
  const nL = 35, nR = 65, nB = 22, sB = 34

  const clip = `polygon(${nL}% 0%,${nR}% 0%,${nR}% ${nB}%,100% ${sB}%,100% 96%,0% 96%,0% ${sB}%,${nL}% ${nB}%)`

  const lblTop = Math.round(h * 0.38)
  const lblH   = Math.round(h * 0.44)

  return `<div style="position:relative;width:${bw}px;height:${h}px;">
    <!-- drop-shadow wrapper follows clip-path shape -->
    <div style="position:absolute;inset:0;filter:drop-shadow(4px 8px 22px rgba(0,0,0,.40));">
      <div style="width:100%;height:100%;
        background:linear-gradient(to right,#3d2c00,#6B4C0A 22%,#9B7818 43%,#7A5A10 50%,#9B7818 57%,#6B4C0A 78%,#3d2c00);
        clip-path:${clip};"></div>
    </div>
    <!-- metal cap -->
    <div style="position:absolute;top:-5px;left:${nL}%;width:${nR-nL}%;height:14px;
      background:linear-gradient(to right,#555,#bbb,#888,#bbb,#555);
      border-radius:3px 3px 0 0;z-index:3;"></div>
    <!-- paper label (positioned in body area) -->
    <div style="position:absolute;left:8px;right:8px;top:${lblTop}px;height:${lblH}px;
      background:#FFD000;overflow:hidden;z-index:2;">
      <div style="position:absolute;width:160%;height:32%;background:${label.stripe};
        top:40%;left:-30%;transform:rotate(-22deg);opacity:.82;"></div>
      <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;
        align-items:center;justify-content:center;padding:6px 5px;">
        <div style="font-family:Oswald;font-size:${Math.round(bw*.069)}px;font-weight:300;
          letter-spacing:1.5px;color:#C8A020;text-transform:uppercase;margin-bottom:2px;">
          ЧАСТНАЯ ПИВОВАРНЯ</div>
        <div style="font-family:Oswald;font-size:${Math.round(bw*.255)}px;font-weight:700;
          color:#F0EAD0;line-height:1;letter-spacing:.5px;">HOPMALT</div>
        <div style="font-family:Oswald;font-size:${Math.round(bw*.062)}px;font-weight:300;
          color:#C8A020;margin-bottom:${Math.round(lblH*.055)}px;">ЯРОСЛАВЛЬ ◆ 2017</div>
        <div style="font-family:Oswald;font-size:${Math.round(bw*.22)}px;font-weight:700;
          color:${label.nameColor};line-height:1.0;text-align:center;">${label.name}</div>
        <div style="font-family:Oswald;font-size:${Math.round(bw*.06)}px;font-weight:300;
          color:#888;margin-top:${Math.round(lblH*.05)}px;border-top:1px solid rgba(28,28,28,.2);
          padding-top:4px;text-align:center;">450МЛ | АЛК ${label.abv}</div>
      </div>
    </div>
    <!-- floor shadow -->
    <div style="position:absolute;bottom:-9px;left:8%;width:84%;height:9px;
      background:rgba(0,0,0,.18);border-radius:50%;filter:blur(5px);"></div>
  </div>`
}

const page3 = `<!DOCTYPE html><html>${head('#FFD000')}<body style="
  width:1200px;height:800px;display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:0;">
  <div style="font-family:Oswald;font-size:9px;font-weight:300;letter-spacing:6px;
    color:#1C1C1C;opacity:.40;text-transform:uppercase;margin-bottom:36px;">
    Применение этикеток на упаковке</div>
  <div style="display:flex;align-items:flex-end;justify-content:center;gap:80px;">
    ${can(LABELS[3], 350)}
    ${bottle(LABELS[5], 400)}
  </div>
  <div style="font-family:Oswald;font-size:9px;font-weight:300;letter-spacing:4px;
    color:#1C1C1C;opacity:.35;text-transform:uppercase;margin-top:28px;">
    Красный Эль (банка 0,45 л) &nbsp;·&nbsp; Эль (бутылка 0,45 л)</div>
</body></html>`

// ── Image 4: Extra-3 1200×800 — all 7 badges compact strip ───────────────────
const page4 = `<!DOCTYPE html><html>${head()}<body style="
  width:1200px;height:800px;display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:14px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:6px;">
    <div style="font-family:Oswald;font-size:9px;font-weight:300;letter-spacing:6px;
      color:#1C1C1C;opacity:.42;text-transform:uppercase;">
      Коллекция этикеток · HOPMALT · 2017</div>
  </div>
  <!-- Row 1: 4 -->
  <div style="display:flex;gap:10px;align-items:flex-start;">
    ${LABELS.slice(0, 4).map(l => badge(l, 254, 340)).join('')}
  </div>
  <!-- Row 2: 3, left-aligned with row 1 -->
  <div style="display:flex;gap:10px;align-items:flex-start;">
    ${LABELS.slice(4).map(l => badge(l, 254, 340)).join('')}
    <!-- spacer to left-align with row 1 -->
    <div style="width:254px;height:1px;opacity:0;"></div>
  </div>
</body></html>`

// ── Runner ────────────────────────────────────────────────────────────────────
;(async () => {
  console.log('Launching browser…')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  const SHOTS = [
    { html: page1, w: 1920, h: 1080, file: 'khopmalt-main.jpg' },
    { html: page2, w: 1200, h: 800,  file: 'khopmalt-extra-1.jpg' },
    { html: page3, w: 1200, h: 800,  file: 'khopmalt-extra-2.jpg' },
    { html: page4, w: 1200, h: 800,  file: 'khopmalt-extra-3.jpg' },
  ]

  for (const shot of SHOTS) {
    const page = await browser.newPage()
    await page.setViewport({ width: shot.w, height: shot.h, deviceScaleFactor: 1 })
    await page.setContent(shot.html, { waitUntil: 'networkidle0' })
    // Wait for Google Fonts to load
    await page.waitForFunction(() => document.fonts.ready).catch(() => {})
    await new Promise(r => setTimeout(r, 800))

    const out = path.join(OUT, shot.file)
    await page.screenshot({ path: out, type: 'jpeg', quality: 90,
      clip: { x: 0, y: 0, width: shot.w, height: shot.h } })
    console.log(`✓ ${shot.file}`)
    await page.close()
  }

  await browser.close()
  console.log('\nDone.')
})()
