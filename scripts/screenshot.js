// @ts-check
const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'projects')

const SITES = [
  {
    slug: 'baget',
    url: 'https://baget-pashtet.ru/',
    main: 'baget-main.jpg',
    extra: ['baget-extra-1.jpg', 'baget-extra-2.jpg', 'baget-extra-3.jpg'],
    // pixel offsets from top for the 3 extra crops (desktop 1200px wide)
    extraScrolls: [700, 1600, 2600],
  },
  {
    slug: 'bustorany',
    url: 'https://bustorany.ru/',
    main: 'bustorany-main.jpg',
    extra: ['bustorany-extra-1.jpg', 'bustorany-extra-2.jpg', 'bustorany-extra-3.jpg'],
    extraScrolls: [700, 1600, 2600],
  },
  {
    slug: 'pipyao',
    url: 'https://pipyao.ru/',
    main: 'pipyao-main.jpg',
    extra: ['pipyao-extra-1.jpg', 'pipyao-extra-2.jpg', 'pipyao-extra-3.jpg'],
    extraScrolls: [700, 1600, 2600],
  },
  {
    slug: 'buratino',
    url: 'https://buratino.rest/',
    main: 'buratino-main.jpg',
    extra: ['buratino-extra-1.jpg', 'buratino-extra-2.jpg', 'buratino-extra-3.jpg'],
    extraScrolls: [700, 1600, 2600],
  },
]

async function dismissOverlays(page) {
  // Close common cookie/popup banners
  const selectors = [
    '[class*="cookie"] button',
    '[class*="modal"] button[class*="close"]',
    '[class*="popup"] button[class*="close"]',
    '[aria-label="Close"]',
    '[aria-label="Закрыть"]',
    'button[class*="dismiss"]',
  ]
  for (const sel of selectors) {
    try {
      const el = await page.$(sel)
      if (el) {
        await el.click()
        await new Promise(r => setTimeout(r, 300))
      }
    } catch {}
  }
}

async function screenshotSite(browser, site) {
  console.log(`\n→ ${site.slug}: ${site.url}`)
  const outDir = path.join(OUT_DIR, site.slug)

  // ── Main image 1920×1080 ────────────────────────────────────────────────
  {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 })
    await new Promise(r => setTimeout(r, 1500))
    await dismissOverlays(page)
    await new Promise(r => setTimeout(r, 500))

    const outPath = path.join(outDir, site.main)
    await page.screenshot({
      path: outPath,
      type: 'jpeg',
      quality: 88,
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    })
    console.log(`  ✓ main  → ${site.main}`)
    await page.close()
  }

  // ── Extra images 1200×800 ───────────────────────────────────────────────
  for (let i = 0; i < site.extra.length; i++) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 900 })
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 })
    await new Promise(r => setTimeout(r, 1500))
    await dismissOverlays(page)

    const scrollY = site.extraScrolls[i]
    // Clamp scroll to page height
    const pageHeight = await page.evaluate(() => document.body.scrollHeight)
    const safeScroll = Math.min(scrollY, Math.max(0, pageHeight - 800))
    await page.evaluate(y => window.scrollTo(0, y), safeScroll)
    await new Promise(r => setTimeout(r, 600))

    const outPath = path.join(outDir, site.extra[i])
    await page.screenshot({
      path: outPath,
      type: 'jpeg',
      quality: 88,
      clip: { x: 0, y: safeScroll, width: 1200, height: 800 },
    })
    console.log(`  ✓ extra${i + 1} → ${site.extra[i]}`)
    await page.close()
  }
}

;(async () => {
  console.log('Launching browser…')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  for (const site of SITES) {
    try {
      await screenshotSite(browser, site)
    } catch (err) {
      console.error(`  ✗ ${site.slug}: ${err.message}`)
    }
  }

  await browser.close()
  console.log('\nDone. All screenshots saved to public/images/projects/')
})()
