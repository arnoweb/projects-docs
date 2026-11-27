// Renders the Malt portfolio covers (1600x900 JPEG) from covers.json.
// Usage: node assets/malt/render.cjs [slug]
// Needs Playwright (resolved from PLAYWRIGHT_PATH or the ai-prefill-studio project) and Google Chrome.
const fs = require("fs");
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "/Users/arnaudbreton/Digital_projects/ai-prefill-studio/node_modules/playwright");

const DIR = __dirname;
const OUT = path.join(DIR, "covers");
const data = JSON.parse(fs.readFileSync(path.join(DIR, "covers.json"), "utf8"));
const only = process.argv[2];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function diagram(d) {
  const box = (title, sub, cls) => `<div class="node ${cls}"><b>${esc(title)}</b><span>${esc(sub)}</span></div>`;
  return `<div class="diagram">
    ${box(d.in[0], d.in[1], "io")}
    <div class="arrow"></div>
    <div class="agents"><div class="agents-label">AGENTS IA</div>${d.steps.map((s, i) => `<div class="step"><i>${String(i + 1).padStart(2, "0")}</i>${esc(s)}</div>`).join("")}</div>
    <div class="arrow"></div>
    ${box(d.out[0], d.out[1], "io out")}
  </div>`;
}

function html(item) {
  const visual = item.diagram
    ? diagram(item.diagram)
    : `<img src="file://${path.join(DIR, item.image)}">`;
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1600px;height:900px;overflow:hidden;font-family:Inter,sans-serif;color:#E6E9F5;
  background:
    radial-gradient(900px 600px at 85% 10%, rgba(99,102,241,.30), transparent 60%),
    radial-gradient(700px 500px at 5% 100%, rgba(34,211,238,.16), transparent 60%),
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px) 0 0/40px 40px,
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px) 0 0/40px 40px,
    #0B1020;}
.left{position:absolute;left:80px;top:78px;width:560px;height:744px;display:flex;flex-direction:column}
.kicker{align-self:flex-start;font:500 15px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#A5B4FC;
  border:1px solid rgba(165,180,252,.45);border-radius:999px;padding:9px 16px;background:rgba(99,102,241,.12)}
h1{font:700 70px/1.02 "Space Grotesk",sans-serif;letter-spacing:-.02em;margin-top:30px;color:#fff}
.value{font-size:25px;line-height:1.45;color:#C3C9E0;margin-top:24px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}
.chip{font:500 16px "JetBrains Mono",monospace;color:#E0E7FF;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:8px 12px}
.logos{margin-top:30px}.logos small{display:block;font:500 13px "JetBrains Mono",monospace;letter-spacing:.16em;color:#8B93B5;margin-bottom:12px}
.logos>div{display:flex;gap:14px}.logo{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16)}
.logo b{font:700 22px Inter,sans-serif;color:#fff}.logo em{font:500 12px "JetBrains Mono",monospace;font-style:normal;color:#A7F3D0}
.service{margin-top:auto;padding:18px 22px;border-radius:14px;background:linear-gradient(90deg,rgba(99,102,241,.22),rgba(34,211,238,.08));border:1px solid rgba(129,140,248,.35);position:relative}
.service small{display:block;font:500 13px "JetBrains Mono",monospace;letter-spacing:.16em;color:#67E8F9;margin-bottom:6px}
.service p{font:600 21px/1.35 Inter,sans-serif;color:#fff}
.window{position:absolute;left:700px;top:78px;width:820px;height:680px;border-radius:16px;overflow:hidden;background:#111729;
  border:1px solid rgba(255,255,255,.14);box-shadow:0 40px 90px rgba(0,0,0,.55),0 0 0 1px rgba(99,102,241,.25),0 0 80px rgba(99,102,241,.18)}
.bar{height:44px;display:flex;align-items:center;gap:8px;padding:0 16px;background:#161D33;border-bottom:1px solid rgba(255,255,255,.08)}
.bar i{width:12px;height:12px;border-radius:50%;background:#3B4466}
.bar span{margin-left:14px;font:500 14px "JetBrains Mono",monospace;color:#8B93B5}
.shot{position:absolute;top:44px;left:0;right:0;bottom:0;display:flex;align-items:flex-start;justify-content:center;background:#0E1426}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top center}
.footer{position:absolute;left:700px;right:80px;top:780px;display:flex;justify-content:space-between;align-items:center;font:500 16px "JetBrains Mono",monospace;color:#8B93B5}
.footer b{color:#fff;font-weight:500}
.status{display:flex;align-items:center;gap:8px;color:#A7F3D0}
.status:before{content:"";width:9px;height:9px;border-radius:50%;background:#34D399;box-shadow:0 0 10px #34D399}
.diagram{width:100%;height:100%;display:flex;align-items:center;justify-content:center;gap:0;padding:36px}
.node{width:190px;padding:20px 18px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16)}
.node b{display:block;font:700 21px/1.2 "Space Grotesk",sans-serif;color:#fff}
.node span{display:block;margin-top:8px;font:500 14px "JetBrains Mono",monospace;color:#8B93B5}
.node.out{border-color:rgba(52,211,153,.5);background:rgba(52,211,153,.08)}
.arrow{width:46px;height:2px;background:linear-gradient(90deg,#818CF8,#22D3EE);position:relative;flex:none}
.arrow:after{content:"";position:absolute;right:-2px;top:-5px;border:6px solid transparent;border-left:8px solid #22D3EE}
.agents{width:270px;padding:18px;border-radius:16px;border:1px solid rgba(129,140,248,.55);background:rgba(99,102,241,.14);box-shadow:0 0 50px rgba(99,102,241,.25)}
.agents-label{font:500 13px "JetBrains Mono",monospace;letter-spacing:.16em;color:#A5B4FC;margin-bottom:12px}
.step{display:flex;align-items:center;gap:12px;padding:12px 14px;margin-top:8px;border-radius:10px;background:rgba(11,16,32,.7);font:600 17px Inter,sans-serif;color:#E6E9F5}
.step i{font:500 13px "JetBrains Mono",monospace;font-style:normal;color:#67E8F9}
</style></head><body>
<div class="left">
  <div class="kicker">${esc(item.kicker)}</div>
  <h1>${esc(item.title)}</h1>
  <p class="value">${esc(item.value)}</p>
  <div class="chips">${item.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
  ${item.logos ? `<div class="logos"><small>DISPONIBLE DANS</small><div>${item.logos.map((l) => `<span class="logo">${fs.readFileSync(path.join(DIR, l.svg), "utf8").replace(/height="1em"/, 'height="44"').replace(/width="1em"/, 'width="44"').replace(/fill="currentColor"/, 'fill="#ffffff"')}<b>${esc(l.label)}</b>${l.note ? `<em${/revue|review/i.test(l.note) ? ' style="color:#FCD34D"' : ""}>${esc(l.note)}</em>` : ""}</span>`).join("")}</div></div>` : ""}
  <div class="service"><small>CE QUE JE PEUX FAIRE POUR VOUS</small><p>${esc(item.service)}</p></div>
</div>
<div class="window"><div class="bar"><i></i><i></i><i></i><span>${esc(item.frame)}</span></div><div class="shot">${visual}</div></div>
<div class="footer"><span><b>ARNAUD BRETON</b> · ${esc(data.role)}</span><span class="status">${esc(item.status)}</span></div>
</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  for (const item of data.items) {
    if (only && item.slug !== only) continue;
    const file = path.join(OUT, `_${item.slug}.html`);
    fs.writeFileSync(file, html(item));
    await page.goto("file://" + file, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(OUT, `${item.slug}.jpg`), type: "jpeg", quality: 90 });
    fs.unlinkSync(file);
    console.log("ok", item.slug);
  }
  await browser.close();
})();
