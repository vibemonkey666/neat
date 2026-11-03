// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { F, EC, L } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { d, G } from "./chunk-fs43t96t.js";
import { Ky, X } from "./chunk-4hww8411.js";
import { I, re, Ad } from "./chunk-a16y5hcz.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Efe } from "./chunk-928ws1pg.js";
import { i } from "./chunk-cj37hmns.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { D5 } from "./chunk-at88wjsn.js";
import { EZ } from "./chunk-5rw2zfa0.js";
import { Uu, Nc } from "./chunk-4nzy53ma.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { Itr, $Ve, kEt, aoi, Ut, k, Re, ue } from "./chunk-ajtyjx88.js";
import { sE } from "./chunk-7svjr0za.js";
import {
  _Ne,
  Lt,
  Em,
  je,
  ar,
  Uj,
  Bj,
  C3o,
  G5,
  kqe,
  Zc,
  t5r,
  Okt,
  wH,
  rB,
  lC,
  NRe,
  Kl,
  jj
} from "./chunk-r1dvrqha.js";
import { fc } from "./chunk-vchq4g74.js";
import { ij, Z } from "./chunk-p27rr8yn.js";
import {
  fjr,
  U1o,
  pjr,
  B1o,
  xXn,
  mjr,
  j6s,
  Bye,
  C2e,
  W6s,
  tSt,
  gjr,
  d7,
  PXn,
  hjr,
  j1o,
  G6s,
  W1o,
  nSt,
  IXn,
  z6s,
  K6s,
  Xpn,
  R2e,
  $Y,
  kU,
  G1o,
  c7,
  Qpn,
  Sjr,
  Zpn,
  V6s,
  emn,
  q1o
} from "./chunk-hp871ge6.js";
import { Oh } from "./chunk-yw4wqxm9.js";
import { mK, N9e } from "./chunk-0hcnhpx5.js";
import { eCr, O9e, SJ, $1n, bwo, F1n, qR, Qae, $me, du } from "./chunk-1vdj04pp.js";
import { Nme } from "./chunk-76g26p0f.js";
import {
  ILe,
  Oy,
  JJs,
  att,
  ZA,
  Zre,
  pzo,
  mzo,
  Wm,
  O7n,
  ltt,
  SV,
  M7n,
  gzo,
  hzo,
  yzo,
  _zo,
  bzo,
  Szo,
  wzo,
  QJs,
  ZJs,
  uz,
  wwt,
  H7n,
  L7n,
  dtt,
  IGt,
  Ezo,
  ctt,
  XGr,
  r9,
  rQs,
  e5,
  DU,
  oQs,
  T$,
  t5,
  kzo,
  iQs,
  MGt,
  oH,
  ny,
  Zgn
} from "./chunk-6dwr3g2n.js";
import { Rwt } from "./chunk-8v77jr62.js";
import { u$, em } from "./chunk-tzm7jehf.js";
import { aV } from "./chunk-jshzmmmx.js";
import { Gft } from "./chunk-etxcb881.js";
import { $Ht, QAr, mwo } from "./chunk-53mweqs6.js";
import { np } from "./chunk-c37wkx9w.js";
import { tnn, Gme } from "./chunk-2g0y4xen.js";
import { m_t } from "./chunk-yyym1yvr.js";
import { Yc, oAe, L_t, pye, f$, N_t, c8n } from "./chunk-9v1g0mex.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { ki } from "./chunk-ngmg7f2n.js";
import { Soe, Sei } from "./chunk-5b88xb0z.js";
import { ge, pc, lr, Tt, qd } from "./chunk-522pfw8k.js";
import { o, v, M, oe, T, u, yt, $e, me, B, A } from "./chunk-0bqrj5ah.js";
import { zfe } from "./chunk-hc5j8sxy.js";
import { et } from "./chunk-c9re0p40.js";
function Otn() {
  return Efe() ? "slack_example_com" : "claude_ai_Slack_beta";
}
import { extname as xo } from "path";
var AEe =
  " The server refuses force:true over a version saved from inside the page; only a publish built on that version is accepted.";
function MAr(e) {
  let n = e.trimEnd();
  if (!n.startsWith("<!--") || !n.endsWith("-->") || n.length < 7) return !1;
  let r = n.slice(4, -3);
  return (
    !r.startsWith(">") &&
    !r.startsWith("->") &&
    !r.includes("-->") &&
    !r.includes("--!>") &&
    !r.includes("<!--") &&
    !r.endsWith("<!-")
  );
}
function Mtn() {
  let e = i.CLAUDE_CODE_ACCOUNT_UUID,
    n = i.CLAUDE_CODE_ORGANIZATION_UUID;
  if (e && n) return { accountUuid: e.toLowerCase(), organizationUuid: n.toLowerCase() };
  let r = ILe();
  if (!r?.accountUuid) return;
  return {
    accountUuid: r.accountUuid.toLowerCase(),
    organizationUuid: r.organizationUuid?.toLowerCase() ?? null
  };
}
var Xr = p(() =>
    u({
      accountUuid: o(),
      organizationUuid: o().nullable(),
      version: o(),
      capabilities: T(o()),
      fetchedAt: v()
    })
  ),
  ma = p(() =>
    u({
      accountUuid: o(),
      organizationUuid: o().nullable(),
      status: v(),
      deniedAt: v(),
      tokenExpiresAt: v()
    })
  );
function Jr(e) {
  let n = Mtn();
  if (
    n === void 0 ||
    !e.success ||
    e.data.accountUuid !== n.accountUuid ||
    e.data.organizationUuid !== n.organizationUuid
  )
    return;
  return e.data;
}
function OSo() {
  return Jr(Xr().safeParse(ue().cachedArtifactRoster));
}
function _xs() {
  return Jr(ma().safeParse(ue().artifactRosterDenied));
}
function DAr() {
  let e = Z().roster;
  if (e !== void 0) return { roster: e, source: "session" };
  let n = i.CLAUDE_CODE_REMOTE ? void 0 : OSo();
  return n === void 0 ? void 0 : { roster: n, source: "disk" };
}
var ba = 3600000;
function CEe(e) {
  let { session: n, epoch: r, roster: s, storageV5: a } = e;
  if (Z() !== n || n.accountEpoch !== r) return { adopted: !1, persisted: Promise.resolve() };
  if (((n.roster = s), s.capabilities.includes("assets"))) n.assetsOnRoster = !0;
  if (i.CLAUDE_CODE_REMOTE) return { adopted: !0, persisted: Promise.resolve() };
  return {
    adopted: !0,
    persisted: MSo(n, r, a, (b, y) => {
      let w = Xr().safeParse(y.cachedArtifactRoster),
        x = w.success ? w.data : void 0,
        P = Date.now();
      if (
        y.artifactRosterDenied === void 0 &&
        x !== void 0 &&
        x.accountUuid === b.accountUuid &&
        x.organizationUuid === b.organizationUuid &&
        x.version === s.version &&
        EC(x.capabilities, s.capabilities) &&
        x.fetchedAt <= P &&
        P - x.fetchedAt < ba
      )
        return;
      return {
        cachedArtifactRoster: {
          ...b,
          version: s.version,
          capabilities: [...s.capabilities],
          fetchedAt: P
        },
        artifactRosterDenied: void 0
      };
    }).catch((b) => {
      t(
        `Could not save the artifact capability roster to config; it will be fetched again next start: ${d(b)}`
      );
    })
  };
}
async function MSo(e, n, r, s) {
  let a = Mtn();
  if (a === void 0 || e.accountEpoch !== n) return;
  await Re((h) => {
    if (e.accountEpoch !== n || Mtn()?.accountUuid !== a.accountUuid) return h;
    let b = s(a, h);
    return b === void 0 ? h : { ...h, ...b };
  }, r);
}
function Qr() {
  return !k("tengu_pewter_canteen", !1);
}
var _a = "data-chart-runtime";
function ei(e) {
  return e.includes(_a);
}
function ya(e) {
  return tSt(e);
}
function ti(e) {
  return Xpn(e) >= 0;
}
function ni(e) {
  let n = [],
    r = e.indexOf(xXn),
    s = -1;
  while (r >= 0) {
    let a = r + xXn.length;
    if (s < a) {
      if (((s = e.indexOf(mjr, a)), s < 0)) break;
    }
    let h = e.indexOf(xXn, a);
    if ((h < 0 || h > s) && ti(e.slice(a, s))) n.push([r, s + mjr.length]);
    r = h;
  }
  return PXn(e, n);
}
var Zr = `(function () {
  if (typeof Chart === 'undefined') return;
  var specEl = document.querySelector('script[type="application/json"][data-chart-runtime]');
  var el = document.getElementById('primary-chart');
  if (!specEl || !el) return;
  var spec;
  try { spec = JSON.parse(specEl.textContent); } catch (e) { return; }
  var series = (spec.series || []).filter(function (s) { return Array.isArray(s.points) && s.points.length; });
  if (!series.length) return; /* keep the fallback's No-data state */

  var chart = null;
  /* Rebuilds the whole config on every call: resolved colors are baked into
     the config at creation, so a theme flip must re-read the custom
     properties (getComputedStyle re-called) and recreate the chart.
     Deterministic: same data, same pixels PER THEME. */
  function render() {
  var rootStyle = getComputedStyle(document.documentElement);
  function cssVar(name, fb) {
    var v = rootStyle.getPropertyValue(name).trim();
    return v || fb;
  }
  function resolveColor(c, fb) {
    c = (c || fb || '').trim();
    var m = /^var\\((--[^,)]+)(?:,([^)]*))?\\)$/.exec(c);
    if (m) return cssVar(m[1], (m[2] || '').trim() || '#2563eb');
    return c || '#2563eb';
  }
  var accent = cssVar('--accent', '#2563eb');
  var inkMuted = cssVar('--ink-muted', '#64748b');
  var gridLine = cssVar('--line', '#e2e8f0');
  var slicePalette = [accent, cssVar('--good', '#059669'), '#d97706', '#7c3aed', inkMuted, '#0ea5e9', '#db2777'];

  var type = spec.type === 'bar' ? 'bar' : spec.type === 'donut' ? 'doughnut' : 'line';
  /* Category scale aligns data by index, so a tick array shorter or longer
     than the point list would drop or misplace points \u2014 the fallback plots
     by x value and tolerates that; same data must render the same chart on
     both paths. Use the tick labels only when they align one-per-point. */
  var ticks = (spec.x && spec.x.ticks) || [];
  var labels = ticks.length === series[0].points.length
    ? ticks
    : series[0].points.map(function (p) { return String(p[0]); });

  var allYs = [];
  series.forEach(function (s) { s.points.forEach(function (p) { allYs.push(p[1]); }); });
  var yMin = spec.y && spec.y.min != null ? spec.y.min : Math.min(0, Math.min.apply(null, allYs));
  var yMax = spec.y && spec.y.max != null ? spec.y.max : Math.max.apply(null, allYs) * 1.05;
  /* Same tick-label precision rule as the fallback renderer, so both paths
     label identically: sub-1 steps get distinguishing decimals; explicit
     domains render the step exactly (<=2 decimals). */
  var step = (yMax - yMin) / 4;
  var dec = step > 0 && step < 1 ? Math.min(6, Math.ceil(-Math.log10(step)) + 1) : 0;
  if (spec.y && spec.y.min != null && spec.y.max != null) {
    for (dec = 0; dec < 2 && step * Math.pow(10, dec) !== Math.round(step * Math.pow(10, dec)); dec++);
  }

  var data, options;
  var base = { responsive: true, maintainAspectRatio: false, animation: false };
  if (type === 'doughnut') {
    data = {
      labels: labels,
      datasets: [{
        data: series[0].points.map(function (p) { return p[1]; }),
        backgroundColor: (series[0].colors || []).map(function (c, i) { return resolveColor(c, slicePalette[i % slicePalette.length]); })
          .concat(slicePalette.slice((series[0].colors || []).length)).slice(0, series[0].points.length),
        borderWidth: 1
      }]
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: true, position: 'right', labels: { color: inkMuted } } },
      cutout: '62%'
    });
  } else {
    data = {
      labels: labels,
      datasets: series.map(function (s) {
        var c = resolveColor(s.color, 'var(--accent)');
        return {
          label: s.name || '',
          data: s.points.map(function (p) { return p[1]; }),
          borderColor: c,
          backgroundColor: c,
          borderWidth: 2,
          pointRadius: type === 'line' ? 0 : undefined,
          tension: 0
        };
      })
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: series.length > 1, labels: { color: inkMuted, boxWidth: 10 } } },
      scales: {
        x: {
          title: spec.x && spec.x.label ? { display: true, text: spec.x.label, color: inkMuted } : undefined,
          grid: { display: false },
          ticks: { color: inkMuted }
        },
        y: {
          min: yMin,
          max: yMax,
          title: spec.y && spec.y.label ? { display: true, text: spec.y.label, color: inkMuted } : undefined,
          grid: { color: gridLine },
          ticks: { color: inkMuted, count: 5, format: { maximumFractionDigits: dec, minimumFractionDigits: 0 } }
        }
      }
    });
  }

  if (chart) { chart.destroy(); chart = null; }
  while (el.firstChild) el.removeChild(el.firstChild);
  var canvas = document.createElement('canvas');
  el.appendChild(canvas);
  chart = new Chart(canvas, { type: type, data: data, options: options });
  }

  render();
  /* Keep the canvas in step with live theme flips, like the SVG fallback's
     native var() behavior and the mermaid precedent. Destroy+recreate is
     idempotent under rapid flips (render() always tears down first). */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mq && mq.addEventListener) mq.addEventListener('change', render);
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();`;
async function zn() {
  let e;
  try {
    let { loadChartBundleJs: r } = await import("./chunk-nxfv8sbm.js");
    e = await r();
  } catch {
    return (f("artifact_publish", "chart_bundle_unreadable"), null);
  }
  if (ya(e) !== null) return (f("artifact_publish", "chart_bundle_unsafe"), null);
  if (tSt(Zr) !== null) return (f("artifact_publish", "chart_init_unsafe"), null);
  let n =
    `
<script>` +
    e +
    `</script>
<script>` +
    Zr +
    `</script>
`;
  if (!ti(n)) return (f("artifact_publish", "chart_block_unstrippable"), null);
  return xXn + n + mjr;
}
function va(e) {
  return tSt(e);
}
var wa = 8;
function Sa(e) {
  return `${pjr}${e}-->`;
}
var ri = 4194304;
function ii(e, n = 0) {
  return (
    e[0] ===
      `
` &&
    IXn(e, 1) > 0 &&
    e.endsWith(`</script>
`) &&
    !e.includes(pjr) &&
    Xpn(e) === n
  );
}
var xa = 2,
  si = { beginPrefix: pjr, end: B1o, lenDigitsMax: wa, maxSpan: ri, openTags: xa, validate: ii },
  Ea = 50000,
  Aa = 250000,
  Ra = 4096;
function ai(e) {
  let n = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (((r = n.indexOf("<code", r)), r < 0)) return !1;
    let s = n[r + 5];
    if (s === void 0) return !1;
    if (!gjr.has(s)) {
      r += 5;
      continue;
    }
    let a = Math.min(r + Ra, n.length),
      h = a;
    for (let y = r + 5; y < a; y++)
      if (n[y] === ">") {
        h = y;
        break;
      }
    let b = n.slice(r + 5, h);
    for (let y of b.matchAll(/language-([\w.+#-]+)/g)) {
      let w = y[1];
      if (
        Object.prototype.hasOwnProperty.call($Ve, w) ||
        Object.prototype.hasOwnProperty.call(kEt, w)
      )
        return !0;
    }
    r = h;
  }
}
function Ta() {
  return `(function(){
if(typeof hljs==='undefined')return;
var budget=${Aa};
var codes=Array.prototype.slice.call(document.querySelectorAll('pre>code'));
for(var i=0;i<codes.length;i++){
var el=codes[i];
if(el.hasAttribute('data-claude-hljs-claimed'))continue;
var m=/(?:^|\\s)language-(\\S+)/.exec(el.className||'');
if(!m||!hljs.getLanguage(m[1]))continue;
if(el.children.length)continue;
var src=(el.textContent||'').replace(/\\n$/,'');
if(src.length>${Ea}||src.length>budget)continue;
budget-=src.length;
el.setAttribute('data-claude-hljs-claimed','1');
try{
var res=hljs.highlight(src,{language:m[1],ignoreIllegals:true});
el.innerHTML=res.value;
el.classList.add('hljs');
}catch(e){}
}
})();`;
}
async function Un() {
  let e;
  try {
    let { loadHljsBundleJs: h } = await import("./chunk-crqz6t7m.js");
    e = await h();
  } catch (h) {
    return (l(h), f("artifact_publish", "hljs_bundle_unreadable"), null);
  }
  let n = Z().bundleEmbedVerdicts;
  if (n.hljs === void 0) n.hljs = va(e);
  if (n.hljs !== null) return (f("artifact_publish", "hljs_bundle_unsafe"), null);
  let r = Ta();
  if (tSt(r) !== null) return (f("artifact_publish", "hljs_init_unsafe"), null);
  let s =
    `
<script>` +
    e +
    `</script>
<script>` +
    r +
    `</script>
`;
  if (s.length >= ri) return (f("artifact_publish", "hljs_bundle_overspan"), null);
  let a = Z().blockStripVerdicts;
  if (a.hljs === void 0) a.hljs = ii(s);
  if (!a.hljs) return (f("artifact_publish", "hljs_block_unstrippable"), null);
  return (
    `
` +
    Sa(s.length) +
    s +
    B1o +
    `
`
  );
}
var ka = {
    light: {
      surface: "#f4efe4",
      text: "#42392e",
      line: "#8a7f6d",
      border: "#7a6c52",
      bg: "#fffdf8"
    },
    dark: { surface: "#262b34", text: "#f2f3f5", line: "#a8adb8", border: "#9aa4b8", bg: "#1f232b" }
  },
  Pa =
    "<style>.mermaid-diagram{margin-block:4px}.mermaid-diagram svg{display:block;margin:0 auto;max-width:100%;height:auto}</style>";
function Ca() {
  return (
    `(function(){
var CFG=` +
    _({ palettes: ka }) +
    `;
if(typeof mermaid==='undefined')return;
var pres=Array.prototype.slice.call(document.querySelectorAll('pre.mermaid')).filter(function(p){if(p.hasAttribute('data-claude-mermaid-claimed'))return false;p.setAttribute('data-claude-mermaid-claimed','1');return true;});
if(!pres.length)return;
var mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
var root=document.documentElement;
var items=pres.map(function(pre){
var mount=document.createElement('div');mount.className='mermaid-diagram';
return {pre:pre,mount:mount,src:pre.textContent||''};
});
var seq=0;
var renderGen=0;
var lastKey='';
function pageBg(fallback){
var els=[document.body,document.documentElement];
for(var i=0;i<els.length;i++){
var c=els[i]&&getComputedStyle(els[i]).backgroundColor;
if(c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)')return c;
}
return fallback;
}
function render(){
var theme=root.getAttribute('data-theme');
var dark=theme==='dark'||(!!(mq&&mq.matches)&&theme!=='light');
var pal=dark?CFG.palettes.dark:CFG.palettes.light;
var bg=pageBg(pal.bg);
var key=(dark?'d':'l')+'|'+bg;
if(key===lastKey)return;
lastKey=key;
var gen=++renderGen;
var font=getComputedStyle(document.body).fontFamily||'sans-serif';
var nat={useMaxWidth:false};
mermaid.initialize({
startOnLoad:false,securityLevel:'strict',theme:'base',
flowchart:nat,sequence:nat,er:nat,state:nat,class:nat,pie:nat,
gantt:nat,journey:nat,timeline:nat,gitGraph:nat,mindmap:nat,xyChart:nat,
quadrantChart:nat,sankey:nat,c4:nat,requirement:nat,block:nat,
packet:nat,kanban:nat,architecture:nat,radar:nat,
themeVariables:{background:bg,mainBkg:pal.surface,primaryColor:pal.surface,
primaryTextColor:pal.text,lineColor:pal.line,primaryBorderColor:pal.border,
nodeBorder:pal.border,clusterBorder:pal.border,edgeLabelBackground:bg,
clusterBkg:'rgba(127,127,127,0.07)',titleColor:pal.text,
darkMode:dark,rowOdd:bg,rowEven:'rgba(127,127,127,0.07)',
attributeBackgroundColorOdd:bg,attributeBackgroundColorEven:'rgba(127,127,127,0.07)',
fontSize:'16px',fontFamily:font},
themeCSS:'.node rect, .node circle, .node polygon, .node path, .cluster rect { stroke-width: 2px; }'
});
items.forEach(function(it){
var id='claude-mermaid-'+seq++;
mermaid.render(id,it.src).then(function(r){
if(gen!==renderGen)return;
var prev=it.pre.previousElementSibling;
if(prev&&prev.className==='mermaid-diagram'&&prev!==it.mount)return;
it.mount.innerHTML=r.svg;
if(!it.mount.parentNode)it.pre.parentNode.insertBefore(it.mount,it.pre);
it.pre.style.display='none';
},function(){
var scratch=document.getElementById(id);
if(scratch)scratch.parentNode.removeChild(scratch);
scratch=document.getElementById('d'+id);
if(scratch)scratch.parentNode.removeChild(scratch);
if(gen!==renderGen)return;
if(it.mount.parentNode)it.mount.parentNode.removeChild(it.mount);
it.pre.style.display='';
});
});
}
render();
if(mq&&mq.addEventListener)mq.addEventListener('change',render);
if(typeof MutationObserver!=='undefined')new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['data-theme']});
})();`
  );
}
var $a = 8;
function Oa(e) {
  return `${fjr}${e}-->`;
}
var Na = 8388608;
function oi(e, n = 0) {
  let r =
    e[0] ===
    `
`
      ? z6s(e, 1)
      : 0;
  if (
    !r ||
    !e.endsWith(`</script>
`) ||
    e.includes(fjr)
  )
    return !1;
  let s = 1 + r,
    a = G6s(e.slice(s));
  if (a === null || e.indexOf("<", s) !== s + a.data) return !1;
  let h = r > 7 ? 1 : 0,
    b = d7(e.slice(s + a.after)),
    y = K6s(b, 0);
  if (y !== null) {
    if (!b.startsWith("</script>", y.len)) return !1;
    ((h += y.annotated ? 1 : 0), (b = b.slice(y.len + 9)));
  }
  let w = Xpn(b);
  return w >= 0 && w + h === n;
}
var Fa = 3,
  li = { beginPrefix: fjr, end: U1o, lenDigitsMax: $a, maxSpan: Na, openTags: Fa, validate: oi },
  Ma = 4096;
function ci(e) {
  let n = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (((r = n.indexOf("<pre", r)), r < 0)) return !1;
    let s = n[r + 4];
    if (s === void 0) return !1;
    if (!gjr.has(s)) {
      r += 4;
      continue;
    }
    let a = Math.min(r + Ma, n.length),
      h = a,
      b = !1;
    for (let y = r + 4; y < a; y++)
      if (n[y] === ">") {
        ((h = y), (b = !0));
        break;
      }
    if (La(n.slice(r + 4, h))) return !0;
    r = b ? h + 1 : h;
  }
}
function La(e) {
  let n = e.length,
    r = 0;
  while (r < n) {
    let s = e.indexOf("class", r);
    if (s < 0) return !1;
    let a = e[s - 1];
    if (!(
      a === " " ||
      a === "\t" ||
      a ===
        `
` ||
      a === "\f" ||
      a === "\r"
    )) {
      r = s + 5;
      continue;
    }
    let h = s + 5;
    while (h < n && /\s/.test(e[h])) h++;
    if (e[h] !== "=") {
      r = s + 5;
      continue;
    }
    h++;
    while (h < n && /\s/.test(e[h])) h++;
    let b = e[h],
      y;
    if (b === '"' || b === "'") {
      let w = e.indexOf(b, h + 1);
      if (w < 0) return !1;
      y = e.slice(h + 1, w);
    } else {
      let w = h;
      while (w < n && !/[\s>]/.test(e[w])) w++;
      y = e.slice(h, w);
    }
    for (let w of y.split(/\s+/)) if (w === "mermaid") return !0;
    r = s + 5;
  }
  return !1;
}
function Vn() {
  let e = Ca();
  if (tSt(e) !== null) return (f("artifact_publish", "mermaid_init_unsafe"), null);
  let n =
      `
` +
      Pa +
      `
` +
      j6s +
      `</script>
<script>` +
      e +
      `</script>
`,
    r = Z().blockStripVerdicts;
  if (r.mermaid === void 0) r.mermaid = oi(n);
  if (!r.mermaid) return (f("artifact_publish", "mermaid_block_unstrippable"), null);
  return (
    `
` +
    Oa(n.length) +
    n +
    U1o +
    `
`
  );
}
function di(e) {
  return { chart: ei(e), mermaid: ci(e), highlight: ai(e) };
}
var gn = "// DOC:anchors:begin",
  Ia =
    /^(P|H1|H2|H3|H4|H5|H6|LI|UL|OL|BLOCKQUOTE|ASIDE|SECTION|DIV|TABLE|TR|TD|TH|DL|DT|DD|FIGURE|FIGCAPTION|CAPTION|PRE|HEADER|FOOTER|NAV|SUMMARY|DETAILS|ADDRESS|HGROUP|HR)$/;
function Da(e) {
  let n = 2166136261;
  for (let r = 0; r < e.length; r++) n = Math.imul(n ^ e.charCodeAt(r), 16777619);
  return (n >>> 0).toString(36);
}
function Ba(e, n, r, s) {
  let a =
    "b-" +
    Da(
      e +
        `
` +
        n
    );
  if (!r.has(a)) return a;
  let h = s.get(a) || 2;
  while (r.has(a + "-" + h)) h++;
  return (s.set(a, h + 1), a + "-" + h);
}
var ui = /^b-[0-9a-z]{1,7}(-[0-9]+)?$/,
  fi = "<!doctype html>",
  ja = 33554432;
function Ha(e, n) {
  if (n === void 0) return;
  let r = /([^\t\n\f\r /=>]+)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:"[^"]*"|'[^']*'|[^\t\n\f\r >]*))?/y;
  r.lastIndex = n.startOffset;
  let s = r.exec(e);
  if (s === null || s[1].toLowerCase() !== "id") return;
  let a = n.startOffset + s[0].length;
  return a < n.endOffset ? void 0 : { start: n.startOffset, end: a };
}
var Wn = (e) => e.attrs?.find((n) => n.name === "id")?.value,
  za = new Set(["", "text/javascript", "application/javascript", "module"]),
  Yn = (e, n) => e.attrs?.some((r) => r.name === n) ?? !1,
  hi = (e) => d7(e.attrs?.find((n) => n.name === "type")?.value ?? "").toLowerCase(),
  Ua = (e) => hi(e) === "module",
  Va = (e) =>
    e.tagName === "script" &&
    e.namespaceURI === tnn &&
    !Yn(e, "src") &&
    !Yn(e, "nomodule") &&
    za.has(hi(e)) &&
    (e.childNodes ?? []).some((n) => n.nodeName === "#text" && (n.value ?? "").includes(gn)),
  Wa = (e, n) =>
    (e.attrs?.find((r) => r.name === "class")?.value ?? "").split(/[\t\n\f\r ]+/).includes(n),
  Ya = (e, n) => {
    for (let r = e.parentNode; r; r = r.parentNode) if (r === n) return !0;
    return !1;
  };
function pi(e) {
  let n = [],
    r = [...(e.childNodes ?? [])].reverse();
  while (r.length > 0) {
    let s = r.pop();
    if (s.tagName === void 0) continue;
    n.push(s);
    let a = s.childNodes ?? [];
    for (let h = a.length - 1; h >= 0; h--) r.push(a[h]);
  }
  return n;
}
function Ga(e) {
  let n = new Map(),
    r = [{ node: e, exit: !1 }];
  while (r.length > 0) {
    let s = r.pop(),
      a = s.node.childNodes ?? [];
    if (!s.exit) {
      r.push({ node: s.node, exit: !0 });
      for (let b = a.length - 1; b >= 0; b--)
        if (a[b].tagName !== void 0) r.push({ node: a[b], exit: !1 });
      continue;
    }
    let h = "";
    for (let b of a)
      if (b.nodeName === "#text") h += b.value ?? "";
      else if (b.tagName !== void 0) h += n.get(b) ?? "";
    n.set(s.node, h);
  }
  return n;
}
function qa(e) {
  let n = (y) => y.sourceCodeLocation?.startOffset ?? 1 / 0,
    r = e.filter((y) => Wa(y, "page")),
    s = 1 / 0;
  for (let y of r) s = Math.min(s, n(y));
  let a = r.some((y) => n(y) === 1 / 0),
    h = e.filter(Va).sort((y, w) => n(y) - n(w)),
    b = !1;
  for (let y of h) {
    if (!y.sourceCodeLocation?.endTag) continue;
    if (Ua(y)) {
      if (Yn(y, "async")) {
        f("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      b = !0;
      continue;
    }
    let w = n(y);
    if (!(s < w)) {
      if (a) {
        f("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      continue;
    }
    let x = r.findIndex((j) => n(j) < w),
      P = r[x];
    if (r.slice(0, x).some((j) => n(j) === 1 / 0) || Ya(y, P)) {
      f("artifact_publish", "block_ids_load_point_unsure");
      return;
    }
    return { page: P, seen: y.sourceCodeLocation.endOffset };
  }
  return b && r[0] !== void 0 ? { page: r[0], seen: 1 / 0 } : void 0;
}
function Ka(e, n) {
  let r = pi(n),
    s = qa(r);
  if (s === void 0) return [];
  let { page: a, seen: h } = s,
    b = pi(a),
    y = new Map();
  for (let q of b) {
    let D = Wn(q);
    if (D !== void 0 && !y.has(D)) y.set(D, q);
  }
  let w = new Set(),
    x = [];
  for (let q of r) {
    let D = Wn(q);
    if (D === void 0) continue;
    let K = q.sourceCodeLocation?.attrs?.id?.startOffset;
    if (K === void 0 ? h === 1 / 0 : K < h) w.add(D);
    else if (K === void 0) x.push(D);
  }
  if (x.some((q) => !w.has(q) && ui.test(q)))
    return (f("artifact_publish", "block_ids_unplaced_id"), []);
  let P = Ga(a),
    R = new Map(),
    j = [],
    H = 0;
  for (let q of b) {
    let D = q.tagName.toUpperCase(),
      K = q.namespaceURI === tnn && !/[^a-z0-9]/.test(q.tagName) && Ia.test(D),
      C = Wn(q),
      U = C !== void 0 && y.get(C) === q;
    if (!K || (U && C !== "")) continue;
    let N = P.get(q) ?? "";
    if (((H += N.length), H > ja)) return null;
    let ie = Ba(D, N, w, R);
    w.add(ie);
    let ce = q.sourceCodeLocation;
    if (!ce?.startTag || !ui.test(ie)) continue;
    let Y = Ha(e, ce.attrs?.id);
    if (C !== void 0 && Y !== void 0) j.push({ start: Y.start, end: Y.end, text: `id="${ie}"` });
    else if (C === void 0) {
      let be = ce.startTag.startOffset + 1 + q.tagName.length;
      j.push({ start: be, end: be, text: ` id="${ie}"` });
    }
  }
  return j;
}
function Xa(e, n) {
  if (n.length === 0) return e;
  n.sort((a, h) => a.start - h.start);
  let r = "",
    s = 0;
  for (let a of n) {
    if (a.start < s) continue;
    ((r += e.slice(s, a.start) + a.text), (s = a.end));
  }
  return r + e.slice(s);
}
async function gi(e) {
  if (!e.includes(gn)) return e;
  try {
    let { nestingBudgetExceeded: n } = await import("./chunk-s1qy9af9.js");
    if (n(e)) return (f("artifact_publish", "block_ids_nesting_budget"), e);
    let { parse: r } = await import("./chunk-vr646sbz.js"),
      s = fi + e,
      a = Gme(r(s, { sourceCodeLocationInfo: !0 })),
      h = Ka(s, a);
    if (h === null)
      return (
        f("artifact_publish", "block_ids_text_budget"),
        t("[artifact] doc block ids skipped: too much text to hash"),
        e
      );
    return Xa(s, h).slice(fi.length);
  } catch (n) {
    return (
      f("artifact_publish", "block_ids_parse_failed"),
      t(`[artifact] doc block ids skipped: ${String(n)}`),
      e
    );
  }
}
function Ja(e, n) {
  let r = e.length > n ? re(e, n) : e;
  return {
    escaped: v1n(r).replace(/[\\"\n\t]/g, (h) => {
      switch (h) {
        case "\\":
          return "\\\\";
        case '"':
          return '\\"';
        case `
`:
          return "\\n";
        case "\t":
          return "\\t";
        default:
          return h;
      }
    }),
    elided: e.length - r.length
  };
}
function bxs(e, n) {
  let { escaped: r, elided: s } = Ja(e, n),
    a = `"${v1n(lC(r, r.length))}"`;
  return s > 0 ? `${a} \u2026(+${s} chars)` : a;
}
function v1n(e) {
  return e.replace(wH, "'").replace(rB, "'");
}
var Za = 10,
  Qa = 120,
  mi = "Artifact publishing is rate-limited right now, so nothing was published.",
  bi =
    " Nothing is wrong with the call: a publishing rate limit refused it, and this tool already waited and sent it once more.",
  _i = " Send the same call again",
  mn = ' with url: "',
  Gn = '"',
  qn = " after about ",
  eo = (e) =>
    ` seconds \u2014 publishing limits are shared, so the wait can be longer while others publish; change nothing${e ? " else" : ""} about the call to get past this.`,
  to =
    " That artifact was reserved for this publish and nothing has been published to it; targeting it avoids reserving another.",
  Kn = " The refused step was ",
  no =
    /^(?:the upload preflight that copying \d{1,4} files? from another artifact needs|staging this publish's \d{1,4} copied files? \((?:"(?:[^"\\\n]|\\.){0,1100}" from artifact [A-Za-z0-9-]{22,36}(?:, (?=")|))+(?:, and \d{1,4} more)?\)); nothing was staged\.$/;
function yi(e) {
  let n = e.slice(0, 3).map((s) => `${_(s.path)} from artifact ${s.fromSlug}`),
    r = e.length > 3 ? `, and ${e.length - 3} more` : "";
  return `staging this publish's ${e.length} copied ${I(e.length, "file")} (${n.join(", ")}${r}); nothing was staged`;
}
function vi(e) {
  return `the upload preflight that copying ${e} ${I(e, "file")} from another artifact needs; nothing was staged`;
}
var ro =
    "Not published: artifact publishing is rate-limited right now. Claude can try again shortly.",
  io =
    /^https?:\/\/[A-Za-z0-9.-]{1,100}(?::\d{1,5})?(?:\/[A-Za-z0-9._-]{1,40}){0,4}\/[A-Za-z0-9-]{22,36}$/;
function wi(e) {
  let n = Math.ceil((e ?? 0) / 1000);
  return Math.min(Math.max(n, Za), Qa);
}
function Xn(e, n, r) {
  let s = n !== void 0;
  return (
    mi +
    bi +
    _i +
    (s ? `${mn}${n}${Gn}` : "") +
    `${qn}${e}${eo(s)}` +
    (s ? to : "") +
    (r !== void 0 ? `${Kn}${r}.` : "")
  );
}
function Sxs(e) {
  let n = mi + bi + _i;
  if (!e.startsWith(n)) return;
  let r = n.length,
    s;
  if (e.startsWith(mn, r)) {
    let y = e.indexOf(Gn, r + mn.length);
    if (y === -1) return;
    if (((s = e.slice(r + mn.length, y)), !io.test(s))) return;
    r = y + Gn.length;
  }
  if (!e.startsWith(qn, r)) return;
  let a = /^\d{1,3}/.exec(e.slice(r + qn.length))?.[0];
  if (a === void 0) return;
  let h = e.indexOf(Kn, r),
    b = h === -1 ? e : e.slice(0, h);
  if (h !== -1 && !no.test(e.slice(h + Kn.length))) return;
  return b === Xn(Number(a), s) ? ro : void 0;
}
var Jn =
    "Nothing was published and nothing is wrong with the call: this tool chose that contract because it is the server's newest, and it has not reached every server yet. Send the same call again in about a minute; do not pin an older contract to get past this.",
  so = "Not published: the artifact service is mid-update. Claude can try again in about a minute.",
  ao =
    /^deploy 422: contract ([0-9A-Za-z.+-]{1,32}) is newer than the preferred ([0-9A-Za-z.+-]{1,32})\. /;
function oo(e, n) {
  return `deploy 422: contract ${e} is newer than the preferred ${n}. ${Jn}`;
}
function wxs(e) {
  let n = ao.exec(e);
  if (n === null) return;
  return e === oo(n[1], n[2]) ? so : void 0;
}
import { randomUUID as Eo } from "crypto";
function Si(e) {
  return zfe(e.subarray(0, 4)) === "utf16le" ? "utf-16le" : "utf-8";
}
function bn(e, n) {
  let r = e.slice(0, n),
    s = 1;
  for (
    let b = r.indexOf(`
`);
    b !== -1;
    b = r.indexOf(
      `
`,
      b + 1
    )
  )
    s++;
  let a = 1;
  for (let b of r.slice(
    r.lastIndexOf(`
`) + 1
  ))
    a++;
  let h = 0;
  for (let b = e.indexOf("\uFFFD", n + 1); b !== -1; b = e.indexOf("\uFFFD", b + 1)) h++;
  return `line ${s}, column ${a}${h > 0 ? ` (+${h} more)` : ""}`;
}
function lo(e, n, r) {
  let s = r === "utf-8",
    a = s ? (n[0] === 239 && n[1] === 187 && n[2] === 191 ? 3 : 0) : 2;
  for (let h = 0; h < e.length;) {
    let b = e.codePointAt(h) ?? 0;
    if (b === 65533) {
      if (
        !(s
          ? n[a] === 239 && n[a + 1] === 191 && n[a + 2] === 189
          : n[a] === 253 && n[a + 1] === 255)
      )
        return h;
    }
    let y = b > 65535 ? 2 : 1;
    ((a += s ? (b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4) : y * 2), (h += y));
  }
  return -1;
}
function vxs(e) {
  return new TextDecoder(Si(e)).decode(e);
}
function R9e(e) {
  let n = Si(e);
  try {
    let r = new TextDecoder(n, { fatal: !0 }).decode(e),
      s = r.indexOf("\uFFFD");
    if (s === -1) return { text: r };
    return { problem: { kind: "replacement_char", encoding: n, where: bn(r, s) } };
  } catch {
    let r = new TextDecoder(n).decode(e),
      s = lo(r, e, n);
    return {
      problem: {
        kind: "undecodable",
        encoding: n,
        where: bn(r, s === -1 ? r.indexOf("\uFFFD") : s)
      }
    };
  }
}
var co = 8,
  OT = /^[A-Za-z0-9._-]{1,64}$/,
  xi = { ownVers: {}, inFlight: {} },
  DSo = Soe("ownPublishes", xi);
function rCi() {
  return Sei(xi);
}
function CHt(e, n, r, s = {}) {
  if (!OT.test(r)) return;
  e.set((a) => {
    let h = a.ownVers[n] ?? [],
      b = a.mergedVers?.[n] ?? [],
      y = h.includes(r),
      w = b.includes(r);
    if (y && (s.merged !== !0 || w)) return a;
    let x = y ? h : [...h, r].slice(-co),
      P = (s.merged === !0 && !w ? [...b, r] : b).filter((R) => x.includes(R));
    return {
      ...a,
      ownVers: { ...a.ownVers, [n]: x },
      ...((a.mergedVers?.[n] !== void 0 || P.length > 0) && {
        mergedVers: { ...a.mergedVers, [n]: P }
      })
    };
  });
}
function Dtn(e, n, r) {
  return e.get().ownVers[n]?.includes(r) ?? !1;
}
function Ome(e, n, r) {
  let s = e.get();
  return (s.ownVers[n]?.includes(r) ?? !1) && !(s.mergedVers?.[n]?.includes(r) ?? !1);
}
function HSo(e, n) {
  return (e.get().ownVers[n]?.length ?? 0) > 0;
}
function LSo(e, n, r) {
  return Ome(e, n, r) ? "self-session" : "unverified";
}
async function HAr(e, n, r) {
  LAr(e, n);
  try {
    return await r();
  } finally {
    NAr(e, n);
  }
}
function LAr(e, n) {
  e.set((r) => ({ ...r, inFlight: { ...r.inFlight, [n]: (r.inFlight[n] ?? 0) + 1 } }));
}
function NAr(e, n) {
  e.set((r) => {
    let s = r.inFlight[n] ?? 0;
    if (s === 0) return r;
    if (s === 1) {
      let { [n]: a, ...h } = r.inFlight;
      return { ...r, inFlight: h };
    }
    return { ...r, inFlight: { ...r.inFlight, [n]: s - 1 } };
  });
}
function x9e(e, n) {
  return (e.get().inFlight[n] ?? 0) > 0;
}
import { randomUUID as uo } from "crypto";
import {
  lstat as Ei,
  mkdir as Ai,
  realpath as _n,
  rm as Qn,
  unlink as fo,
  writeFile as po
} from "fs/promises";
import Ve from "path";
async function Ri(e, n, r) {
  let s = r.slug !== void 0,
    a = r.slug ?? uo();
  if (!ar.test(a))
    return { url: null, slug: null, version: null, err: `not an artifact slug: ${a}` };
  let h = `${kqe}${a}`,
    b = Ve.join(e, a),
    y = Ve.dirname(e),
    w = await Ei(y).catch(() => null);
  if (w === null || !w.isDirectory() || (await _n(y).catch(() => null)) !== y)
    return {
      url: null,
      slug: null,
      version: null,
      err: "the stub publish directory is not inside a real directory"
    };
  (await Zn(e), await Zn(b), await RHt(Ve.join(b, "index.html"), n));
  for (let [U, N] of [
    ["thumbnail.img", r.thumbnail],
    ["thumbnail_dark.img", r.thumbnailDark]
  ])
    if (N !== void 0) await RHt(Ve.join(b, U), N);
    else await Qn(Ve.join(b, U), { recursive: !0, force: !0 });
  let x = Ve.join(b, "files");
  await Zn(x);
  let P = await _n(x),
    R = [],
    j = (U) => U === P || U.startsWith(P + Ve.sep),
    H = async (U) => {
      let N = Ve.resolve(x, U);
      if (!N.startsWith(x + Ve.sep)) return null;
      if (EZ(N, x + Ve.sep, aV))
        return (
          R.push({
            path: U,
            reason: "names a git, IDE/toolchain, or shell configuration component"
          }),
          null
        );
      for (let ie = Ve.dirname(N); ; ie = Ve.dirname(ie))
        try {
          return j(await _n(ie)) ? N : null;
        } catch (ce) {
          if (!G(ce) || ie === x) throw ce;
        }
    },
    q = async (U) => {
      try {
        return j(await _n(Ve.dirname(U)));
      } catch (N) {
        if (G(N)) return "absent";
        throw N;
      }
    },
    D = [];
  for (let U of r.removeFiles ?? [])
    try {
      let N = await H(U);
      if (N === null) continue;
      let ie = await q(N);
      if (ie === !1) continue;
      if (ie === "absent") {
        D.push(U);
        continue;
      }
      (await fo(N).catch((ce) => {
        if (!G(ce)) throw ce;
      }),
        D.push(U));
    } catch (N) {
      t(`artifact stub: skipping removal of ${U}: ${N}`, { level: "warn" });
    }
  let K = [];
  for (let U of r.files ?? []) {
    try {
      let N = await H(U.path);
      if (N === null) continue;
      if ((await Ai(Ve.dirname(N), { recursive: !0 }), (await q(N)) !== !0)) continue;
      await RHt(N, U.content);
    } catch (N) {
      t(`artifact stub: skipping supporting file ${U.path}: ${N}`, { level: "warn" });
      continue;
    }
    K.push({ path: U.path, contentType: U.contentType, bytes: Buffer.byteLength(U.content) });
  }
  for (let U of R) t(`artifact stub: not materializing ${U.path}: ${U.reason}`, { level: "warn" });
  let C = {
    slug: a,
    url: h,
    redeploy: s,
    title: r.title,
    favicon: r.favicon,
    ...(r.icon !== void 0 && { icon: r.icon }),
    ...(r.label !== void 0 && { label: r.label }),
    ...(r.note !== void 0 && { note: r.note }),
    ...(r.description !== void 0 && { description: r.description }),
    files: K,
    ...(D.length > 0 && { removed: D }),
    ...(R.length > 0 && { notMaterialized: R }),
    ...((r.copiedFiles?.length ?? 0) > 0 && { copied: r.copiedFiles }),
    ...(r.capabilities !== void 0 && { capabilities: r.capabilities }),
    ...(r.contract !== void 0 && { contract: r.contract }),
    ...(r.thumbnail !== void 0 && { thumbnail: { bytes: r.thumbnail.length } }),
    ...(r.thumbnailDark !== void 0 && { thumbnailDark: { bytes: r.thumbnailDark.length } }),
    publishedAtMs: Date.now()
  };
  return (
    await RHt(Ve.join(b, "manifest.json"), _(C, null, 2)),
    { url: h, slug: a, version: "1", err: null }
  );
}
async function Zn(e) {
  try {
    if (!(await Ei(e)).isDirectory()) await Qn(e, { force: !0 });
  } catch (n) {
    if (!G(n)) throw n;
  }
  await Ai(e, { recursive: !0 });
}
async function RHt(e, n) {
  (await Qn(e, { recursive: !0, force: !0 }), await po(e, n, { flag: "wx" }));
}
var Ti = 4096,
  Exs =
    /^(?!\/)(?!.*\/\/)(?!.*\/$)(?!(?:^|.*\/)\.\.?(?:\/|$))[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029\\?#%:;]{1,512}$/u,
  nn = /^[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029]{1,1024}$/u,
  Pi = p(() =>
    T(
      u({
        path: o().regex(nn),
        doc: o()
          .max(64)
          .optional()
          .catch(void 0),
        headSeq: v()
          .int()
          .nonnegative()
          .optional()
          .catch(void 0)
      })
    ).max(Ti)
  );
function $Ar(e) {
  if (e.docs !== void 0) return Pi().safeParse(e.docs).success ? E1n(e) : void 0;
  return e.files !== void 0 ? E1n(e) : void 0;
}
function E1n(e) {
  let n = e.docs === void 0 ? void 0 : Pi().safeParse(e.docs);
  if (n?.success && n.data.length > 0) return n.data;
  if (e.artifactKind !== ZA) return [];
  if (e.files !== void 0 && !ho(e)) return [];
  return [
    {
      path: Zre,
      ...(typeof e.headSeq === "number" &&
        Number.isSafeInteger(e.headSeq) &&
        e.headSeq >= 0 && { headSeq: e.headSeq })
    }
  ];
}
function ho(e) {
  return (
    (typeof e.headSubscriptionToken === "string" && e.headSubscriptionToken !== "") ||
    (typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0)
  );
}
var go = p(() =>
  T(
    u({
      path: o().regex(nn),
      sha256: o()
        .regex(/^[0-9a-f]{64}$/)
        .optional()
        .catch(void 0),
      contentType: o()
        .max(255)
        .optional()
        .catch(void 0),
      doc: o()
        .max(64)
        .optional()
        .catch(void 0)
    })
  ).max(Ti)
);
function kxs(e) {
  if (e.files === void 0) return;
  let n = go().safeParse(e.files);
  if (!n.success) return;
  let r = new Set(E1n(e).map((a) => a.path)),
    s = new Map();
  for (let a of n.data)
    s.set(a.path, {
      ...(a.sha256 !== void 0 && { sha256: a.sha256 }),
      ...(a.contentType !== void 0 && { contentType: a.contentType }),
      live: (a.doc !== void 0 && a.doc !== "") || r.has(a.path)
    });
  return s;
}
function Txs() {
  return np() ? Em : Lt;
}
function NSo() {
  return np()
    ? `the ${Em} tool (load it with ${ki}, query \`select:${Em}\`, if it is not loaded)`
    : `the ${Lt} tool`;
}
function k4(e) {
  return `${Em} tool, action "${e === "comments" ? "read" : e}"`;
}
function Dd(e, n) {
  return np() ? n() : e;
}
function Axs(e, n) {
  return np() ? { name: Em, input: Gft("comments", n) } : { name: e, input: n };
}
var mo = "no_file",
  bo = /^[A-Za-z][A-Za-z0-9_-]{0,63}$/,
  $i = 16,
  _o = 160;
function Oi() {
  let e = Z().leaveOutMissingRefusedAt;
  return e !== void 0 && Date.now() - e < mwo ? {} : { leave_out_missing: !0 };
}
function er() {
  Z().leaveOutMissingRefusedAt = Date.now();
}
function Ni(e, n) {
  let r = f$(e);
  if (!pye.test(r)) return;
  if (N_t(r, "leave_out_missing")) return "named";
  return /unknown field ["']/i.test(r) || Object.keys(n).some((a) => N_t(r, a))
    ? void 0
    : "unnamed";
}
function Fi(e, n) {
  return e < 500 && e !== 401 && e !== 403 && e !== 429 && !(e === 400 && pye.test(f$(n)));
}
function Mi({ mode: e, isFirstPublish: n, removedCount: r }) {
  return r === 0 && (e === "patch" || n);
}
function Li(e) {
  let n = e.length,
    r = I(n, "file"),
    s = n === 1 ? "was" : "were";
  return `${n} copied ${r} ${s} left out of this version; the other files in this publish were saved. Tell the user which ${r} ${s} left out${Ii(e)}. At each left-out path the artifact keeps the file it had before; if it had none, the path is empty, so change or remove any reference to it. Left out: ${Di(e)}.`;
}
function yn(e, n) {
  let r = e.length,
    s = I(r, "file"),
    a = r === 1 ? "was" : "were",
    h = `Nothing was published, and the artifact is unchanged: the server left out ${r} copied ${s}`,
    b = `Tell the user which ${s} ${a} left out${Ii(e)}.`,
    y = `Left out: ${Di(e)}.`;
  switch (n) {
    case "removes_files":
      return `${h}, and this publish also removes files, so publishing without the copies could remove a file one of them was meant to replace. ${b} To save the rest, publish again without the left-out copies, and keep any file one of them was meant to replace. ${y}`;
    case "replaces_files":
      return `${h}, and this publish replaces every file in the artifact, so publishing without the copies could delete a file it has. ${b} To save the rest, read the artifact to see which files it has, then publish again without the left-out copies. ${y}`;
    case "no_other_file":
      return `${h}, and nothing else in this publish would have changed the artifact. ${b} Send a copy again only when the reason it was left out no longer applies. ${y}`;
  }
}
function Ii(e) {
  let n = e.length - $i;
  return n > 0 ? ` (${n} more are not named here)` : "";
}
function Ci(e) {
  let n = re(e, _o);
  return _(n === e ? e : `${n}\u2026`);
}
function Di(e) {
  return e
    .slice(0, $i)
    .map(({ file: n, why: r }) => {
      let s =
        r === mo
          ? "which has no file there"
          : bo.test(r)
            ? `left out by the server for the reason ${_(r)}`
            : "left out by the server";
      return `${Ci(n.path)} (a copy of ${Ci(n.from.path)} in artifact ${n.from.slug}, ${s})`;
    })
    .join("; ");
}
var $So = ["editor", "commenter", "reader", "viewer"];
function k1n(e) {
  return e === "editor" ? "can edit" : e === "commenter" ? "can comment" : "can view";
}
var yo = 1048576,
  vo = 50,
  Bi = 5000,
  wo = p(() => Tt({ frames: lr(pc()).nullable() })),
  So = p(() =>
    Tt({
      slug: ge().regex(ar),
      title: ge().max(4000).optional(),
      role: qd($So)
        .optional()
        .catch(void 0)
    })
  );
async function FAr(e) {
  let n = (y, w) => {
      if (!e.signal?.aborted)
        f("artifact_list_external", y, { ...(w !== void 0 && { status: w }) });
      return { listed: !1 };
    },
    r = Ts(e.signal, { timeoutMs: Bi }),
    s;
  try {
    s = await du.getRelayBound("/api/frame/frames/external", {
      refreshOAuth: !0,
      credentials: e.credentials,
      headers: Yc(),
      timeout: Bi,
      maxContentLength: yo,
      signal: r.signal
    });
  } catch {
    return n("request_error");
  } finally {
    r.cleanup();
  }
  if (!s.ok)
    return n(
      s.reason === "relay-unavailable" || s.reason === "relay-not-served" ? "unsent" : "not_ok",
      "status" in s ? s.status : void 0
    );
  if (!s.fromFrame) return n("relay_error", s.status);
  if (s.status < 200 || s.status >= 300) return n("refused", s.status);
  let a = wo().safeParse(s.data);
  if (!a.success) return n("malformed_body");
  let h = [],
    b = a.data.frames ?? [];
  for (let y of b) {
    let w = So().safeParse(y);
    if (!w.success) continue;
    h.push({
      slug: w.data.slug,
      ...(w.data.title !== void 0 && { title: w.data.title }),
      ...(w.data.role !== void 0 && { role: w.data.role })
    });
  }
  return (
    g("artifact_list_external", { rows: h.length }),
    { listed: !0, rows: h, mayHaveMore: b.length >= vo || h.length < b.length }
  );
}
var ji = null,
  Dm = 16777216,
  Ao = "/api/frame/contract/latest";
function p1() {
  return k("tengu_cobalt_plinth_fern", !0);
}
function Uft() {
  return k("tengu_cobalt_plinth_moss", !0);
}
var Ro = 2000;
function FSo() {
  return Ro;
}
function REe() {
  let e = k("tengu_cobalt_plinth_sill", null);
  return typeof e === "number" && Number.isFinite(e) && e >= 0 ? Math.min(Math.floor(e), G5) : C3o;
}
function wL() {
  return i.CLAUDE_CODE_ARTIFACT_MULTI_FILE ?? k("tengu_cobalt_plinth_bracken", !1);
}
function k1e() {
  return k("tengu_cobalt_plinth_samphire", !1);
}
function USo() {
  return k("tengu_tidy_widget", !0);
}
function BSo() {
  return k("tengu_cobalt_plinth_tansy", !1);
}
function jSo() {
  return k("tengu_cobalt_plinth_mallow", !1);
}
function Mme() {
  return k("tengu_slate_lantern", !1);
}
function Dme() {
  return k("tengu_slate_lantern_ember", !1);
}
function xHt() {
  return i.CLAUDE_CODE_ARTIFACT_HOT ?? k("tengu_copper_hinge_wren", !1);
}
function To() {
  return Z().frozenHotUpdate ?? xHt();
}
function _J() {
  return k("tengu_cobalt_plinth_campion", !1) === !0;
}
var ko = p(() =>
    u({
      version: o().regex(r9),
      capabilities: T(o().regex(e5)).max(256),
      claude: M()
        .optional()
        .catch(void 0),
      core: T(o().regex(e5))
        .max(256)
        .optional()
        .catch(void 0),
      features: me(
        o().regex(e5),
        me(o().regex(e5), $e([me(o(), oe()), A(!0).transform(() => ({}))]))
      )
        .optional()
        .catch(void 0)
    })
  ),
  Po = "/api/frame/contract/latest",
  Co = 262144,
  $o = 65536,
  Oo = 5000,
  No = "x-contract-missing-caps",
  Fo = 16384;
async function Rr(e, n, r) {
  let s;
  try {
    s = await du.get(e, {
      refreshOAuth: !0,
      ...(n.recoverOAuth401 && { recoverOAuth401: !0, storageV5: n.storageV5 }),
      headers: Yc(),
      maxContentLength: Fo,
      ...r,
      ...(n.timeoutMs !== void 0 && { timeout: n.timeoutMs }),
      ...(n.signal && { signal: n.signal }),
      credentials: n.credentials
    });
  } catch (h) {
    return { err: d(h), cause: "transport" };
  }
  if (!s.ok)
    return {
      err: `unavailable: ${s.reason}`,
      cause: s.reason === "no-auth" ? "no_auth" : "client_policy"
    };
  if (!s.fromFrame) return { err: `relay HTTP ${s.status}`, cause: "relay", status: s.status };
  if (s.status < 200 || s.status >= 300) {
    let h = Rwt({
      status: s.status,
      headers: s.response?.headers,
      data: s.data,
      redact: (b) => b,
      label: "[artifact] contract fetch"
    });
    return {
      err: `HTTP ${s.status}`,
      cause: s.status === 404 ? "http_404" : s.status >= 500 ? "http_5xx" : "http_4xx",
      status: s.status,
      ...(h !== void 0 && { proxyDeny: h })
    };
  }
  let a = s.response?.headers?.[No];
  return { body: s.data, ...(typeof a === "string" && { missingCapsHeader: a }) };
}
async function qae(e) {
  if (e.version !== void 0 && !r9.test(e.version))
    return { err: "invalid contract version", cause: "malformed" };
  let n = await Rr(e.version !== void 0 ? `/api/frame/contract/${e.version}` : Po, e);
  if ("err" in n) return n;
  let r = ko().safeParse(n.body);
  if (!r.success) return { err: "malformed contract response", cause: "malformed" };
  return r.data;
}
async function WSo(e, n, r) {
  if (!r9.test(e) || !e5.test(n))
    return { err: "invalid contract version or capability name", cause: "malformed" };
  let s = await Rr(`/api/frame/contract/${e}/${n}.d.ts`, r, {
    responseType: "text",
    maxContentLength: Co
  });
  if ("err" in s) return s;
  if (typeof s.body !== "string" || s.body.trim() === "")
    return { err: "empty or non-text defs body", cause: "malformed" };
  return { dts: s.body };
}
async function GSo(e, n) {
  if (!r9.test(e)) return { err: "invalid contract version", cause: "malformed" };
  let r = await Rr(`/api/frame/contract/${e}/prompt`, n, {
    responseType: "text",
    maxContentLength: $o
  });
  if ("err" in r) return r;
  if (typeof r.body !== "string" || r.body.trim() === "")
    return { err: "empty or non-text prompt body", cause: "malformed" };
  let s =
    r.missingCapsHeader === void 0
      ? []
      : r.missingCapsHeader
          .slice(0, 4096)
          .split(",")
          .map((a) => a.trim())
          .filter((a) => e5.test(a));
  return { promptMd: r.body, missingCaps: s };
}
function Hme(e) {
  let n = Uu(),
    r = !e.isNonInteractiveSession || n === "claude-vscode" || Nc(),
    s =
      e.agentType === "teammate" || fc()
        ? "teammate"
        : e.agentId !== void 0
          ? "subagent"
          : Ut()
            ? "bg_session"
            : n === "sdk-ts" || n === "sdk-py"
              ? "sdk"
              : r
                ? "interactive"
                : "print";
  return { hasInteractiveUI: r, publishContext: s };
}
function xEe(e) {
  return (n) => {
    let r = e();
    return { ver: r.artifactReadVersions?.[n], observers: r.artifactReadObservers?.[n] };
  };
}
function eG(e, n, r) {
  return (
    `${e ?? "main"}
${n ?? ""}` +
    (r === void 0
      ? ""
      : `
${r}`)
  );
}
var Hi = { page_data: 0, summary: 1, source: 2 };
function Htn(e, n, r, s) {
  let a = Z().readDeliveries.get(ij(e, n));
  return a !== void 0 &&
    s !== void 0 &&
    s !== "" &&
    a.ver === r &&
    a.batch === s &&
    a.kind !== "source"
    ? a.kind
    : void 0;
}
function Lme(e, n, r) {
  let s = Z().readDeliveries.get(ij(e, n));
  return s !== void 0 && s.ver === r && !s.sourced;
}
var ss = "\x00own-mint";
function T1e(e) {
  return `${e ?? "main"}
${ss}`;
}
function Ltn(e, n) {
  return e.ver === n && e.observers !== void 0 && Object.values(e.observers).includes("");
}
function $te(e, n) {
  return as({ ver: e.artifactReadVersions?.[n], observers: e.artifactReadObservers?.[n] });
}
function as(e) {
  return m_t(e.observers) ? e.ver : void 0;
}
function zSo(e, n) {
  return () => as(e(n));
}
function KSo(e) {
  return (n, r, s) => {
    if (r !== void 0 && !Uj.test(r)) return;
    let a =
        s?.indexOf(`
`) ?? -1,
      h = s === void 0 ? void 0 : s.slice(0, a),
      b = s === void 0 ? "" : s.slice(a + 1),
      y = b.indexOf(`
`),
      w = y < 0 ? b : b.slice(0, y),
      x = b.slice(y + 1),
      P = y < 0 ? void 0 : x === "summary" || x === "page_data" ? x : void 0,
      R = w === ss,
      j = R ? "" : w;
    if (h !== void 0) {
      let H = Z().readDeliveries,
        q = ij(h, n),
        D = H.get(q),
        K = P ?? "source",
        C = K === "source" || (D !== void 0 && D.ver === r && D.sourced);
      if (r === void 0) H.delete(q);
      else if (D === void 0 || D.ver !== r || D.batch !== j || Hi[K] > Hi[D.kind])
        H.set(q, { ver: r, batch: j, kind: K, sourced: C });
    }
    if (h !== void 0 && !R) {
      let H = Z().refusedPublishBodies.get(ij(h, n));
      if (H !== void 0 && H.observedFrom === void 0 && (j === "" || j !== H.batch))
        H.observedFrom = j;
      if (
        H?.sourceless !== void 0 &&
        !P &&
        r !== void 0 &&
        (H.live === void 0 || r === H.live || (u$(r, H.live) ?? -1) > 0)
      )
        (delete H.sourceless, (H.live ??= r));
    }
    if (h !== void 0 && r !== void 0) {
      let H = Z().refusedPublishBodies.get(ij(h, n));
      if (H?.withheld) delete H.withheld;
    }
    e((H) => {
      let q = H.artifactReadVersions?.[n],
        D = H.artifactReadObservers?.[n],
        K =
          r === void 0 || h === void 0
            ? void 0
            : r === q
              ? D === void 0 || Object.hasOwn(D, h)
                ? D
                : { ...D, [h]: j }
              : { [h]: j };
      if (q === r && D === K) return H;
      let { [n]: C, ...U } = H.artifactReadVersions ?? {},
        { [n]: N, ...ie } = H.artifactReadObservers ?? {};
      return {
        ...H,
        artifactReadVersions: r === void 0 ? U : { ...U, [n]: r },
        artifactReadObservers: K === void 0 ? ie : { ...ie, [n]: K }
      };
    });
  };
}
function T1n(e, n, r, s) {
  let a = e?.[n];
  if (a === void 0) return { observed: !0, siblingInFlight: !1 };
  let h = r ?? "main",
    b = Object.hasOwn(a, h) ? a[h] : void 0,
    y = b !== void 0 && b !== "" && b === s;
  return { observed: b !== void 0 && !y, siblingInFlight: y };
}
function VSo(e) {
  return (n, r, s) =>
    e((a) => {
      let h = DU(r),
        b = a.artifactRefs ?? [],
        y = b.find((x) => x.slug === n),
        w = h ?? y?.pin;
      if (s?.cachePinOnly) {
        if (y !== void 0) {
          if (y.pin === w) return a;
          return {
            ...a,
            artifactRefs: b.map((x) =>
              x.slug === n ? { slug: n, ...(w !== void 0 && { pin: w }) } : x
            )
          };
        }
        if (w === void 0) return a;
        if (b.length === 0) return a;
        return { ...a, artifactRefs: [...b, { slug: n, pin: w }] };
      }
      if (b[0]?.slug === n && b[0].pin === w) return a;
      return {
        ...a,
        artifactRefs: [
          { slug: n, ...(w !== void 0 && { pin: w }) },
          ...b.filter((x) => x.slug !== n)
        ]
      };
    });
}
function qSo(e) {
  return () => {
    let n = e().artifactRefs ?? [],
      r = {};
    for (let s of n) if (s.pin !== void 0) r[s.slug] = s.pin;
    return { targetSlug: n[0]?.slug, pins: r };
  };
}
var os =
    "body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>",
  Mo = "<style>:root{color-scheme:light}" + os,
  Lo =
    "<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}" +
    os,
  Ntn = 256,
  Io = p(() =>
    u({
      contract: o().max(64),
      capabilities: me(o().max(64), oe()).nullish(),
      type: oe().optional()
    })
  ),
  Do = p(() =>
    yt({
      slug: o().regex(ar),
      target: o().max(64).nullish(),
      current: o().max(64),
      latest: oe().optional(),
      blocked: oe().optional()
    })
  ),
  Bo = p(() => o().min(1).max(64)),
  jo = p(() =>
    yt({
      to: o()
        .min(1)
        .max(64)
        .optional()
        .catch(void 0),
      reason: o().max(64).catch(""),
      conflict_count: v()
        .int()
        .min(0)
        .max(1e6)
        .optional()
        .catch(void 0),
      paths: T(o().max(PHt))
        .max($tn)
        .optional()
        .catch(void 0)
    })
  ),
  PHt = 1024,
  $tn = 4096,
  ls = p(() =>
    yt({
      manifest: me(
        o().max(PHt),
        yt({
          src: yt({}).nullish(),
          doc: o()
            .max(64)
            .nullish()
            .catch(void 0)
        })
      ).refine((e) => Object.keys(e).length <= $tn)
    })
  );
function IHt(e) {
  let n = ls().safeParse(e);
  if (!n.success) return;
  let r = [],
    s = [];
  for (let [a, h] of Object.entries(n.data.manifest)) (h.src != null ? s : r).push(a);
  return { own: r.sort(), type: s.sort() };
}
function Bft(e) {
  if (e == null) return;
  let n = Do().safeParse(e);
  if (!n.success) return;
  let r = Bo().safeParse(n.data.latest),
    s = n.data.blocked,
    a = jo().safeParse(s);
  return {
    slug: n.data.slug,
    target: n.data.target ?? null,
    current: n.data.current,
    ...(r.success && { latest: r.data }),
    ...(a.success
      ? {
          blocked: {
            ...(a.data.to !== void 0 && { to: a.data.to }),
            reason: a.data.reason,
            ...(a.data.conflict_count !== void 0 && { conflictCount: a.data.conflict_count }),
            ...(a.data.paths !== void 0 && { paths: a.data.paths })
          }
        }
      : s != null && { blocked: { reason: "" } })
  };
}
function wn(e) {
  if (e.status !== void 0) return { readback_status: e.status };
  if (e.relayStatus !== void 0) return { readback_relay_status: e.relayStatus };
  return e.unsent ? { readback_unsent: !0 } : e.request;
}
function or(e) {
  return (
    e.request?.transport === !0 ||
    (e.status !== void 0 && e.status >= 500) ||
    (e.relayStatus !== void 0 && e.relayStatus >= 500)
  );
}
var cr = 500;
function Ho(e) {
  let n = e?.mcp?.servers;
  return (
    Array.isArray(n) && n.some((r) => typeof r?.server === "string" && dtt(r.server) !== void 0)
  );
}
function cs(e) {
  return {
    ...(e.slug && { slug: e.slug }),
    title: e.title,
    ...(e.favicon && { favicon: e.favicon }),
    ...(e.icon && { icon: e.icon }),
    ...(e.label && { label: e.label }),
    ...(e.note && { note: e.note }),
    ...(e.description && { description: e.description }),
    ...(e.publishContext && { publish_context: e.publishContext }),
    ...!1,
    ...(e.template && { template: e.template }),
    ...(e.autoEditAttribution && {
      auto_edit_attribution: {
        thread_id: e.autoEditAttribution.threadId,
        comment_id: e.autoEditAttribution.commentId
      }
    }),
    ...(_J() && e.thumbnail && { thumbnail: e.thumbnail.toString("base64") }),
    ...(_J() && e.thumbnailDark && { thumbnail_dark: e.thumbnailDark.toString("base64") }),
    ...(Tr(e) && { deadline: e.deadline }),
    ...oAe(e.requestId)
  };
}
function Tr(e) {
  return To() && e.deadline !== void 0 && e.slug !== void 0;
}
var Sn =
  "a session that is allowed to fetch the contract (when this session is a sandboxed agent acting for the user, the user's own Claude Code session usually is one)";
async function zo(e) {
  let { capabilities: n, echoPin: r, explicitPin: s, upgrade: a, pageBytes: h, credentials: b } = e,
    y = (P, R, j) => {
      let H = oQs(P, R);
      if (H.length === 0) return null;
      m("artifact_publish", "unknown_capability", { page_bytes: h, unknown_count: H.length });
      let q = oH(H, 8, ny).join(", "),
        D = R.capabilities.join(", "),
        K = j === null ? void 0 : DAr()?.roster,
        C =
          j !== null &&
          K !== void 0 &&
          rQs(K.version, R.version) &&
          H.every((U) => K.capabilities.includes(U))
            ? ` ${q} ${H.length === 1 ? "exists" : "exist"} in contract ${K.version}; this publish is pinned to ${R.version} by ` +
              (j === "passed" ? "the `contract` you passed." : "the artifact's stored contract.")
            : "";
      return `unknown ${I(H.length, "capability", "capabilities")}: ${q} \u2014 contract ${R.version} supports: ${D || "(none)"}.${C} Fix or drop the declaration; the control plane would reject it anyway.`;
    },
    w = (P, R, j, H) => {
      let q = iQs(P, R);
      if ("errMsg" in q)
        return (m("artifact_publish", "dual_spelling_ambiguous", { page_bytes: h }), q);
      let D = y(q.caps, R, H);
      if (D !== null) return { errMsg: D };
      return { fields: { contract: j, capabilities: q.caps } };
    },
    x = async (P) => {
      let R = Z(),
        j = R.accountEpoch,
        H = await qae({ credentials: b });
      if ("err" in H) {
        m("artifact_publish", "contract_fetch_failed", { page_bytes: h, cause: c(H.cause) });
        let q =
          H.cause === "http_4xx" && H.status === 403 && H.proxyDeny !== "content_scan_transient";
        return {
          errMsg:
            `couldn't fetch the capability contract (${H.err}) \u2014 ` +
            (q
              ? `the server, or a proxy in front of it, refused this request, so retrying from this session will usually not help. ${P.refused}`
              : P.retry)
        };
      }
      return (CEe({ session: R, epoch: j, roster: H, storageV5: void 0 }), H);
    };
  if (s !== null) {
    if (n !== void 0) {
      let P = await qae({ version: s, credentials: b });
      if (!("err" in P)) return w(n, P, s, "passed");
    }
    return { fields: { contract: s, ...(n !== void 0 && { capabilities: kzo(n) }) } };
  }
  if (n !== void 0 && r !== null) {
    let P = await qae({ version: r, credentials: b });
    if ("err" in P) return { fields: { contract: r, capabilities: kzo(n) } };
    return w(n, P, r, "stored");
  }
  if (n !== void 0) {
    let P =
        e.latestFetchRemedy ??
        (Object.keys(n).length === 0
          ? {
              retry:
                "clearing a stored declaration also needs the current " +
                "contract. Retry when the contract service is reachable \u2014 " +
                "until the clear lands, the stored grants stay live.",
              refused: `Nothing was cleared: clearing a stored declaration needs the current contract, so any stored grants are still live. Tell the user that, and that the declaration has to be cleared from ${Sn}.`
            }
          : {
              retry:
                "a publish that declares capabilities needs the current contract from the server. Retry; or publish without the capabilities field and declare them on a later redeploy (a stored declaration carries forward unchanged).",
              refused: `Nothing was published: a publish that declares capabilities needs the current contract from the server. Tell the user that the declaration has to be published from ${Sn}. Do not publish without the capabilities field unless every capability the page needs is already stored or the user asks: a declaration already stored carries forward unchanged, but capabilities declared for the first time are not granted, so a page that depends on them will not work. If you do publish without the field (and without contract: 'latest' if you passed it), tell the user which capabilities were not granted.`
            }),
      R = await x(P);
    if ("errMsg" in R) return R;
    return w(n, R, R.version, null);
  }
  if (r !== null) return { fields: { contract: r } };
  if (a) {
    let P = await x({
      retry:
        "an upgrade stamps the current contract, which requires the contract service. Retry when it is reachable.",
      refused: `Nothing was published: an upgrade stamps the current contract. Tell the user that the upgrade has to be published from ${Sn}. To publish the content anyway, publish without the contract field (a stored contract stays as it is; if none is stored the page is published without one).`
    });
    if ("errMsg" in P) return P;
    return { fields: { contract: P.version } };
  }
  return { fields: {} };
}
var Ftn = 8192,
  A1e = 300000,
  zi = 'window.__FRAME_PREAMBLE={"v":1';
function UAr(e) {
  return e.startsWith(zi) && ",}".includes(e[zi.length] ?? " ");
}
var Uo = new RegExp(`^<base[\\t\\n\\f\\r ]+href="\\/_f\\/[^">]*"(?:${nSt})?[\\t\\n\\f\\r ]*\\/?>`),
  Vo = new RegExp(`<base\\s+href="\\/_f\\/[^">]*"(?:${nSt})?\\s*\\/?>\\n?`, "gi");
function Ui(e) {
  let n = d7(e),
    r = n.match(Uo);
  if (r) n = d7(n.slice(r[0].length));
  else if (!n.length) return !1;
  let s = r !== null;
  while (n.length) {
    if (!/^<script(?=[\t\n\f\r />])/.test(n)) return !1;
    let a = R2e(n, 7);
    if (a < 0) return !1;
    let h = n.slice(a);
    if (!s && (IXn(n, 0) !== a || !UAr(h))) return !1;
    s = !0;
    let b = j1o(h);
    if (b < 0) return !1;
    n = d7(h.slice(b));
  }
  return !0;
}
function ds(e) {
  let n = d7(e);
  if (n.startsWith("<head>") && n.endsWith("</head>")) return Ui(n.slice(6, -7));
  return Ui(n);
}
function jft(e, n = () => !0) {
  let r = 4,
    s = e.indexOf(Bye);
  while (s >= 0 && s < Ftn && r > 0) {
    let a = s + Bye.length,
      h = e.subarray(0, s + A1e + C2e.length).indexOf(C2e, a);
    if (h >= 0 && ds(e.toString("utf8", a, h))) {
      let b = Buffer.concat([e.subarray(0, s), e.subarray(h + C2e.length)]);
      if (n(b)) return b;
      r--;
    }
    s = e.indexOf(Bye, a);
  }
  return;
}
var Wo = /^<body(?=[\t\n\f\r />])/i,
  Vi = /^<base(?=[\t\n\f\r />])/i,
  Yo =
    /^<(script|style|title|textarea|xmp|iframe|noembed|noframes|noscript|plaintext)(?=[\t\n\f\r />])/i;
function on(e, n, r) {
  let s = /[\t\n\f\r />]/g,
    a = r;
  for (;;) {
    if (((a = e.indexOf("<", a)), a < 0)) return -1;
    if (e.startsWith("<!--", a)) {
      let b = -1;
      if (e.startsWith(">", a + 4)) b = a + 5;
      else if (e.startsWith("->", a + 4)) b = a + 6;
      else
        for (let y = e.indexOf("--", a + 4); y >= 0;) {
          if (e.startsWith(">", y + 2)) b = y + 3;
          else if (e.startsWith("!>", y + 2)) b = y + 4;
          else {
            y = e.indexOf("--", y + 1);
            continue;
          }
          break;
        }
      if (b < 0) return -1;
      a = b;
      continue;
    }
    let h = Yo.exec(e.slice(a, a + 11));
    if (h) {
      let b = h[1].toLowerCase(),
        y = b === "plaintext" ? -1 : R2e(e, a + 1 + b.length),
        w = new RegExp(`</${b}(?=[\\t\\n\\f\\r />])`, "gi");
      w.lastIndex = Math.max(y, 0);
      let x = y < 0 ? null : w.exec(e),
        P = x === null ? -1 : R2e(e, x.index + x[0].length);
      if (P < 0 || (b === "script" && hjr(e.slice(y, x.index)))) return -1;
      a = P;
    } else if (n.test(e.slice(a, a + 8))) return a;
    else if (/^<\/?[a-zA-Z]/.test(e.slice(a, a + 3))) {
      s.lastIndex = a + 2;
      let b = s.exec(e);
      if (((a = b === null ? -1 : R2e(e, b.index)), a < 0)) return -1;
    } else if (/^<(?:[?!]|\/(?!>))/.test(e.slice(a, a + 3))) {
      if (((a = e.indexOf(">", a + 2)), a < 0)) return -1;
      a++;
    } else a++;
  }
}
function Utn(e) {
  return hs(e, gs, fs(Go, "blocks"));
}
var Go = 64,
  qo = 96,
  us = 64;
function fs(e, n) {
  return { spent: 0, cap: e, exhausted: n };
}
function ps(e) {
  if (e.spent === e.cap) throw new Yae(e.exhausted, e.spent);
  e.spent++;
}
class Yae extends je {
  passes;
  constructor(e = "blocks", n) {
    super(Xo[e], Ko[e]);
    this.passes = n;
  }
}
var Ko = {
    blocks: "strip_unsettled",
    author: "strip_unsettled",
    levels: "nested_repair_depth_cap"
  },
  Xo = {
    blocks:
      "This page carries `<!-- frame-runtime -->` serve-marker blocks or `data-frame-runtime` attributes nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete those comment blocks and attributes from the source and publish again.",
    author:
      'This page carries runtime-marker comment blocks (`<!-- frame-runtime -->\u2026<!-- /frame-runtime -->`, `<!-- chart-runtime -->\u2026<!-- /chart-runtime -->`, `<!--claude-mermaid-runtime-begin\u2026`, `<!--claude-hljs-runtime-begin\u2026`), `data-frame-runtime` attributes, `<base href="/_f/\u2026">` tags, or repeated artifact skeletons (`<!doctype html><html><head>\u2026` wrapped around the page again and again) nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete every such comment block, attribute, tag, and repeated outer skeleton from the source, keep the innermost document, and publish again.',
    levels: `This page is a published artifact page wrapped inside more than ${us} nested copies of the artifact skeleton (\`<!doctype html><html><head><!-- frame-runtime -->\u2026\` repeated) \u2014 nothing a genuine page contains. Publish the innermost document on its own: delete the repeated outer skeletons from the source and publish again.`
  };
function hs(e, n, r) {
  for (;;) {
    ps(r);
    let s = n(e);
    if (s === e) return s;
    e = s;
  }
}
function gs(e) {
  let n = [],
    r = 0,
    s = on(e, Wo, 0),
    a = s < 0 ? 1 / 0 : s,
    h = e.indexOf(Bye),
    b = -1;
  while (h >= 0 && h < a && h - r < Ftn) {
    let y = h + Bye.length;
    if (b < y) {
      if (((b = e.indexOf(C2e, y)), b < 0)) break;
    }
    let w = e.indexOf(Bye, y);
    if ((w < 0 || w > b) && b - h < A1e && ds(e.slice(y, b))) {
      let x = b + C2e.length;
      if (
        e[x] ===
        `
`
      )
        x++;
      (n.push([h, x]), (r += x - h));
    }
    h = w;
  }
  return (
    (e = Jo(PXn(e, n))),
    (e = Zo(e)),
    e.replace(Vo, "").replace(/\sdata-frame-runtime="[^">]*"/gi, "")
  );
}
function P9e(e) {
  return ms(e).body;
}
function ms(e) {
  let n = (y) => ni(gs(y)),
    r = fs(qo, "author"),
    s = (y) => hs(y, n, r),
    a = s(e),
    h = ks(a);
  if (h === null) return { body: a, unwrapped: !1, passes: r.spent };
  let b = kl(h.body, h.lang, h.cover, s, r);
  return {
    body: b.body,
    passes: r.spent,
    lang: b.lang,
    cover: b.cover,
    unwrapped: !0,
    ...(b.outcome && { repair: b.outcome }),
    ...(h.hoistedCommentsDropped && { hoistedCommentsDropped: !0 })
  };
}
function YSo(e) {
  let n;
  try {
    n = Utn(e);
  } catch (s) {
    if (s instanceof Yae) return !1;
    throw s;
  }
  let r = ks(n);
  return r !== null && Ps(r.body);
}
var bs = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;
function kr(e) {
  return e.length <= 35 && bs.test(e);
}
async function A1n(e) {
  if (!e.includes(gn) || Buffer.byteLength(e, "utf8") > Dm) return e;
  return gi(e);
}
async function C1n(e, n = {}) {
  let {
      injectDiagramRuntime: r,
      injectHighlightRuntime: s,
      expectRoundTrippedPage: a,
      docBlockIds: h
    } = n,
    b = ms(e),
    { body: y, lang: w, cover: x } = b,
    P;
  switch (b.repair) {
    case "repaired":
    case "partial":
      P = b.repair;
      break;
    case "miss":
      f("artifact_publish", "nested_repair_miss");
      break;
    case void 0:
      break;
  }
  if (!b.unwrapped && a === !0) f("artifact_publish", "round_trip_unwrap_miss");
  if (W6s(y)) f("artifact_publish", "runtime_sentinel_residual");
  let R = 0;
  if (h !== !1) {
    let N = await A1n(y);
    if (N !== y)
      ((R = Math.max(0, Buffer.byteLength(N, "utf8") - Buffer.byteLength(y, "utf8"))), (y = N));
  }
  let j = di(y),
    H = j.chart && Qr(),
    q = r === !0 && j.mermaid,
    D = s === !0 && j.highlight,
    K = "";
  if (H) {
    let N = await zn();
    if (N !== null) K += N;
  }
  let C = !1;
  if (q) {
    let N = Vn();
    if (N !== null) ((K += N), (C = !0));
  }
  let U = !1;
  if (D) {
    let N = await Un();
    if (N !== null) ((K += N), (U = !0));
  }
  if (K !== "") {
    let { runtimeBlockInsertionIndex: N } = await import("./chunk-h45q9ewb.js"),
      ie = N(y);
    if (ie === void 0) (f("artifact_publish", "runtime_blocks_over_budget"), (C = !1), (U = !1));
    else y = y.slice(0, ie) + K + y.slice(ie);
  }
  return {
    body: y,
    mermaidInjected: C,
    hljsInjected: U,
    roundTripLang: w,
    ...(x !== void 0 && { roundTripCover: x }),
    unnested: P,
    blockIdBytes: R,
    ...(b.hoistedCommentsDropped && { hoistedCommentsDropped: !0 })
  };
}
function Jo(e) {
  return _s(e, li);
}
function Zo(e) {
  return _s(e, si);
}
function _s(e, n) {
  let r = [],
    s = e.indexOf(n.beginPrefix);
  while (s >= 0) {
    let a = s + n.beginPrefix.length,
      h = e.indexOf(n.beginPrefix, a),
      b = a,
      y = a + n.lenDigitsMax;
    while (b < y) {
      let w = e.charCodeAt(b);
      if (w < 48 || w > 57) break;
      b++;
    }
    if (b > a && e.startsWith("-->", b)) {
      let w = Number(e.slice(a, b)),
        x = b + 3,
        P = 0,
        R = x + w;
      while (P <= n.openTags && !e.startsWith(n.end, R)) (P++, (R += W1o));
      if (w < n.maxSpan && P <= n.openTags && (h < 0 || h > R) && n.validate(e.slice(x, R), P)) {
        let j = R + n.end.length;
        if (
          e[j] ===
          `
`
        )
          j++;
        let H =
          s > 0 &&
          e[s - 1] ===
            `
`
            ? s - 1
            : s;
        r.push([H, j]);
      }
    }
    s = h;
  }
  return PXn(e, r);
}
var ys = 2097152;
function BAr(e) {
  let n = Io().safeParse(e);
  if (!n.success) {
    t(`[artifact] malformed read-back body: ${n.error.message}`);
    return;
  }
  let { contract: r, capabilities: s } = n.data,
    a = Bft(n.data.type);
  return {
    contract: r,
    ...(s != null && { capabilities: s }),
    ...(a !== void 0 && { typeLock: a })
  };
}
async function iO(e, n, r) {
  let s = performance.now();
  try {
    let a = await du.get(`/api/frame/read/${encodeURIComponent(e)}`, {
      refreshOAuth: !0,
      headers: Yc(),
      timeout: 15000,
      maxContentLength: ys,
      ...(n && { signal: n }),
      credentials: r
    });
    if (!a.ok) return { err: `read-back unavailable: ${a.reason}`, unsent: !0 };
    if (!a.fromFrame) return { err: `read-back relay HTTP ${a.status}`, relayStatus: a.status };
    if (a.status === 404) return null;
    if (a.status < 200 || a.status >= 300)
      return (
        t(`[artifact] read-back ${a.status}: ${MT(a.data)}`),
        { err: `read-back HTTP ${a.status}`, status: a.status }
      );
    let h = BAr(a.data);
    if (h === void 0) return { err: "malformed read-back body", status: a.status };
    return h;
  } catch (a) {
    return { err: a instanceof Error ? a.message : String(a), request: mK(a, s) };
  }
}
async function vs(e, n, r, s) {
  let a = await e;
  if (a.err !== null || n === void 0 || a.readBackEchoed) return a;
  let h = await iO(n, s, r);
  if (h === null || "err" in h) {
    if (h !== null) t(`[artifact] read-back skipped: ${h.err}`);
    return a;
  }
  let { typeLock: b, ...y } = h,
    w = b !== void 0 ? { ...a, typeLock: b } : a;
  if (
    a.stored?.capabilities !== void 0 ||
    (!uz(y.capabilities ?? void 0) && DU(y.contract) === null)
  )
    return w;
  return { ...w, stored: { ...y, ...(uz(y.capabilities ?? void 0) && { carried: !0 }) } };
}
function Qo(e) {
  let n = /[\t\n\f\r ]/,
    r = on(e, Vi, 0);
  while (r >= 0) {
    let s = R2e(e, r + 5);
    if (s < 0) return;
    let a = r + 5;
    while (a < s - 1) {
      let h = e[a];
      if (n.test(h) || h === "/") {
        a++;
        continue;
      }
      let b = a++;
      while (a < s - 1 && !n.test(e[a]) && !"/=".includes(e[a])) a++;
      let y = e.slice(b, a).toLowerCase();
      while (a < s - 1 && n.test(e[a])) a++;
      if (e[a] !== "=") continue;
      a++;
      while (a < s - 1 && n.test(e[a])) a++;
      let w = a,
        x,
        P = e[a];
      if (P === '"' || P === "'") {
        let R = e.indexOf(P, a + 1);
        ((a = R < 0 ? s : R + 1), (x = e.slice(w + 1, a - 1)));
      } else {
        while (a < s - 1 && !n.test(e[a])) a++;
        x = e.slice(w, a);
      }
      if (y === "href") {
        if (!x.startsWith("/_f/")) return x;
        break;
      }
    }
    r = on(e, Vi, s);
  }
  return;
}
var el = /^[\f ]*(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[/\\])/;
function tl(e) {
  let n = Qo(e);
  if (n === void 0) return !1;
  let r = n.replace(/[\t\n\r]/g, "");
  return r.includes("&") || el.test(r);
}
var nl =
    "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and publish those files alongside the page (`files`), referenced by relative path.",
  rl =
    "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and make those references work without it (inline what the page needs).";
function il(e) {
  let n = typeof e === "string" ? e.slice(0, 16384) : e.subarray(0, 16384).toString("utf8"),
    r = n.startsWith("\uFEFF") ? 1 : 0;
  for (;;) {
    while (r < n.length && /\s/.test(n[r])) r++;
    if (!n.startsWith("<!--", r)) break;
    let s = n.indexOf("-->", r + 4);
    if (s === -1) return !1;
    r = s + 3;
  }
  return /^<!doctype html[\s>]/i.test(n.slice(r, r + 16));
}
function sl(e, n) {
  if (e.err !== null) return e;
  let r = al(n).filter((s) => !(e.livePaths ?? []).includes(s));
  if (r.length === 0) return e;
  return (
    f("artifact_publish", "files_html_no_doctype", { raw_html_pages: r.length }),
    { ...e, warnings: [...(e.warnings ?? []), ol(r)] }
  );
}
function al(e) {
  return e
    .filter(
      (n) => kU(n.contentType) === "text/html" && n.live !== !0 && n.reseed !== !0 && !il(n.content)
    )
    .map((n) => n.path);
}
function ol(e) {
  let n = e.slice(0, 3).map((h) => _(h)),
    r = e.length - n.length,
    s = n.join(", ") + (r > 0 ? ` and ${r} more` : ""),
    a = e.length === 1;
  return `files: ${s} ${a ? "has" : "have"} no <!doctype html> \u2014 supporting HTML pages are served exactly as written (only the page itself is wrapped in the skeleton), so if ${a ? "it is a page" : "they are pages"} people open, start ${a ? "it" : "each"} with a doctype, charset and viewport meta and its base styles and publish again (a fragment the page fetches and inserts can stay as written); as published ${a ? "it renders" : "they render"} in quirks mode.`;
}
async function ll(e, n) {
  let r = await e;
  return r.err === null && n.length > 0 ? { ...r, warnings: [...(r.warnings ?? []), ...n] } : r;
}
var kn = 8,
  cl = 0.7,
  dl = Math.floor((Bj * cl) / (kn * 2));
function dr(e) {
  let n = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(n)) return [];
  let r = [];
  for (let s of n) {
    if (r.length >= kn) break;
    if (typeof s !== "string") continue;
    let a = Zgn(s, dl);
    if (a !== void 0) r.push(ul(a) ?? a);
  }
  return r;
}
function ul(e) {
  if (/^live_over_budget:(.{1,1024})$/.exec(e)) return e;
  if (/^render_unavailable:(.{1,1024})$/.exec(e)) return e;
  if (e === "render_over_budget") return e;
  return;
}
function ws(e) {
  let n = e !== null && typeof e === "object" && "docs" in e ? $Ar(e) : void 0;
  if (n !== void 0)
    return n
      .map((s) => ({ path: s.path, ...(s.doc !== void 0 && { doc: s.doc }) }))
      .sort((s, a) => (s.path < a.path ? -1 : s.path > a.path ? 1 : 0));
  let r = ls().safeParse(e);
  if (!r.success) return;
  return Object.entries(r.data.manifest)
    .flatMap(([s, a]) =>
      nn.test(s) && a.src == null && typeof a.doc === "string" && a.doc !== ""
        ? [{ path: s, doc: a.doc }]
        : []
    )
    .sort((s, a) => (s.path < a.path ? -1 : s.path > a.path ? 1 : 0));
}
function Ss(e) {
  return e.flatMap((n) => []);
}
function fl() {
  return [];
}
function pl(e) {
  return e.flatMap((n) => []);
}
function hl(e, n) {
  return [];
}
function gl(e) {
  return e.flatMap((n) => []);
}
function xs(e, n) {
  return (e ?? []).filter((r) => !n.has(r)).flatMap((r) => []);
}
var ml = 32,
  bl = 16,
  _l = 200,
  yl = /^[\w./-]{1,64}$/,
  vl = p(() =>
    u({
      pins: T(oe())
        .optional()
        .catch(void 0),
      warnings: T(oe())
        .optional()
        .catch(void 0)
    })
  ),
  wl = p(() =>
    u({
      uuid: o().regex(ar),
      path: o().regex(yl),
      module: M()
        .optional()
        .catch(void 0),
      files: v()
        .int()
        .min(0)
        .max(1e6)
        .optional()
        .catch(void 0)
    })
  ),
  Sl = p(() =>
    u({
      src: o()
        .optional()
        .catch(void 0),
      reason: o().regex(att),
      count: v()
        .int()
        .min(1)
        .max(1e5)
        .optional()
        .catch(void 0)
    })
  );
function ur(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    !("embeds" in e) ||
    e.embeds === null ||
    e.embeds === void 0
  )
    return;
  let n = vl().safeParse(e.embeds);
  if (!n.success) return { pins: [], warnings: [] };
  let r = [];
  for (let a of n.data.pins ?? []) {
    if (r.length >= ml) break;
    let h = wl().safeParse(a);
    if (!h.success) continue;
    let { uuid: b, path: y, module: w, files: x } = h.data;
    r.push({ uuid: b, path: y, module: w === !0, ...(x !== void 0 && { files: x }) });
  }
  let s = [];
  for (let a of n.data.warnings ?? []) {
    if (s.length >= bl) break;
    let h = Sl().safeParse(a);
    if (!h.success) continue;
    let { reason: b, count: y } = h.data,
      w = h.data.src === void 0 ? void 0 : Zgn(h.data.src, _l);
    s.push({ reason: b, ...(w !== void 0 && { src: w }), ...(y !== void 0 && { count: y }) });
  }
  return { pins: r, warnings: s };
}
async function Pn() {
  let e = Z(),
    n =
      e.workshopBlessedHashes ??
      (async () => {
        let [{ extractInlineScriptHashes: r }, s] = await Promise.all([
            import("./chunk-yn6dvbvf.js"),
            import("./chunk-yayv0m3f.js")
          ]),
          a = r(s.WORKSHOP_PAGE_TEMPLATE);
        for (let b of r(s.WORKSHOP_TEMPLATE)) a.add(b);
        let h = !0;
        for (let b of [await zn(), Vn(), await Un()])
          if (b !== null) for (let y of r(b)) a.add(y);
          else h = !1;
        return { hashes: a, complete: h };
      })();
  e.workshopBlessedHashes = n;
  try {
    let { hashes: r, complete: s } = await n;
    if (!s)
      ((e.workshopBlessedHashes = void 0),
        t(
          "workshopBlessedScriptHashes: a runtime leg degraded \u2014 returning an incomplete (stricter) allowlist for this call only"
        ));
    return r;
  } catch (r) {
    throw ((e.workshopBlessedHashes = void 0), r);
  }
}
var Nt = "<!doctype html>",
  Pr = "<html",
  An = Nt + Pr,
  xl = new RegExp(`^${Nt}`, "i"),
  Es =
    '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">',
  As = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">',
  Wi = /^<(?:meta|wbr)(?=[\t\n\f\r />])/i,
  tr = /<meta(?=[\t\n\f\r /])/gi,
  El = 1024,
  Al = /([^\t\n\f\r =,]+)[^=,]*[\t\n\f\r =]*([^\t\n\f\r =,]*)/g;
function xn(e) {
  let n = "";
  for (let [, r = "", s = ""] of e.matchAll(Al))
    if (r.toLowerCase() === "viewport-fit") n = s.toLowerCase();
  return n === "cover";
}
function fr(e, n, r) {
  let s = new Map(),
    a = r - 1,
    h = n;
  for (;;) {
    while (h < a && /[\t\n\f\r /]/.test(e[h])) h++;
    if (h >= a) return s;
    let b = "";
    do ((b += e[h].toLowerCase()), h++);
    while (h < a && !/[\t\n\f\r /=>]/.test(e[h]));
    while (h < a && /[\t\n\f\r ]/.test(e[h])) h++;
    let y = "";
    if (h < a && e[h] === "=") {
      h++;
      while (h < a && /[\t\n\f\r ]/.test(e[h])) h++;
      let w = e[h];
      if (h < a && (w === '"' || w === "'")) {
        let x = e.indexOf(w, h + 1);
        if (x < 0 || x >= a) return s;
        ((y = e.slice(h + 1, x)), (h = x + 1));
      } else {
        let x = h;
        while (h < a && !/[\t\n\f\r >]/.test(e[h])) h++;
        y = e.slice(x, h);
      }
    }
    if (!s.has(b)) s.set(b, y);
  }
}
function Rl(e, n = !0) {
  if (!/<meta[\t\n\f\r />]/i.test(e)) return n;
  let r,
    s = e + "<wbr>",
    a = 0,
    h = on(s, Wi, 0);
  while (h >= 0 && h < e.length) {
    let b = s[h + 1] === "m" || s[h + 1] === "M" ? 5 : 4,
      y = R2e(s, h + b);
    if (y < 0 || y > e.length) {
      h = -1;
      break;
    }
    if (b === 5) {
      let w = fr(s, h + b, y);
      if (w.get("name")?.toLowerCase() === "viewport") r = w.get("content") ?? "";
    }
    ((a = y), (h = on(s, Wi, y)));
  }
  if (h < 0 && !(r !== void 0 && xn(r))) {
    tr.lastIndex = a;
    for (let b = tr.exec(e); b !== null; b = tr.exec(e)) {
      let y = e.slice(b.index, b.index + El),
        w = y.includes(">") ? R2e(y, 5) : -1;
      if (w < 0) continue;
      let x = fr(y, 5, w);
      if (x.get("name")?.toLowerCase() === "viewport") {
        if (((r = x.get("content") ?? ""), xn(r))) return !0;
      }
    }
  }
  return r === void 0 ? n : xn(r);
}
var Rs = `</head><body>
`,
  En = `
</body></html>`,
  XSo = new RegExp(
    `^(?:${Nt}|${Nt.replace("doctype", "DOCTYPE")})?${Pr}(?: lang="(?=[^"]{1,35}")${bs.source.slice(1, -1)}")?(?:${nSt})?><head(?:${nSt})?>$`
  );
function R1n(e, n, r) {
  let s = n !== void 0 && kr(n) ? ` lang="${n}"` : "",
    a = Rl(e, r) ? Es + Lo : As + Mo;
  return `${An}${s}><head>${a}${Rs}${e}${En}`;
}
function rr(e, n, r) {
  return R2e(e, n) === r;
}
function Btn(e) {
  return xl.test(e) && e.startsWith(Pr, Nt.length);
}
function ks(e) {
  if (!Btn(e)) return null;
  if (!e.startsWith(Nt)) e = Nt + e.slice(Nt.length);
  let n = e.match(/^<!doctype html><html(?=[\t\n\f\r >])([^>]*)><head(?=[\t\n\f\r >])[^>]*>/);
  if (!n) return null;
  let r = An.length + n[1].length + 1;
  if (!rr(e, An.length, r) || !rr(e, r + 5, n[0].length)) return null;
  let s = e.indexOf("</head><body", n[0].length);
  if (s === -1) return null;
  let h = e
    .slice(n[0].length, s)
    .match(
      /^<meta[\t\n\f\r ]+charset="?utf8"?(?=[\t\n\f\r >"])[^>]*>(<meta[\t\n\f\r ]+name="?viewport"?(?=[\t\n\f\r >"])[^>]*>)<style(?:[\t\n\f\r ][^>]*)?>([\s\S]*)<\/style>$/
    );
  if (!h || /<\/style/i.test(h[2])) return null;
  {
    let q = n[0].length;
    for (let D of ["<meta", "<meta", "<style"]) {
      let K = e.indexOf(">", q + D.length) + 1;
      if (!e.startsWith(D, q) || !rr(e, q + D.length, K)) return null;
      q = K;
    }
  }
  let b = s + 12,
    y = R2e(e, b);
  if (y < 0) return null;
  let w = e.slice(b, y - 1);
  if (!/^(?:[\t\n\f\r ][^>]*)?$/.test(w)) return null;
  let x = y;
  if (
    e[x] ===
    `
`
  )
    x++;
  let P = Tl(e, x);
  if (!P) return null;
  let R = P.bodyEnd;
  if (
    R > x &&
    e[R - 1] ===
      `
`
  )
    R--;
  let j = n[1].match(/[\t\n\f\r ]lang="([^"]*)"/)?.[1],
    H = fr(h[1], 5, h[1].length);
  return {
    body: e.slice(x, R),
    ...(j !== void 0 && kr(j) && { lang: j }),
    cover: xn(H.get("content") ?? ""),
    ...(P.commentsDropped && { hoistedCommentsDropped: !0 })
  };
}
function Tl(e, n) {
  let r = !1,
    s = e.length,
    a = !1;
  for (;;) {
    while (
      s > n &&
      `	
\f\r `.includes(e[s - 1])
    )
      s--;
    if (e.endsWith("-->", s)) {
      let h = e.lastIndexOf("<!--", s - 7);
      if (h < n || !MAr(e.slice(h, s))) return null;
      ((r = !0), (s = h));
    } else if (!a && s - n >= 7 && e.endsWith("</html>", s)) ((a = !0), (s -= 7));
    else if (a && s - n >= 7 && e.endsWith("</body>", s)) {
      let h = s - 7;
      if (r) {
        let b = e.lastIndexOf("<!--", h);
        if (b >= n && e.lastIndexOf("-->", h) < b + 4) return null;
      }
      return { bodyEnd: h, commentsDropped: r };
    } else return null;
  }
}
function kl(e, n, r, s, a) {
  let h = 0,
    b = !1;
  for (;;) {
    ps(a);
    let w = Pl(e);
    if (w !== null) {
      if (h === us) throw new Yae("levels", a.spent);
      ((e = w.body), (n = w.lang ?? n), (r = w.cover), h++, (b = !1));
      continue;
    }
    b ||= Ps(e);
    let x = s(e);
    if (x === e) break;
    e = x;
  }
  let y = b ? (h > 0 ? "partial" : "miss") : h > 0 ? "repaired" : void 0;
  return { body: e, lang: n, cover: r, outcome: y };
}
function Ps(e) {
  if (!Btn(e)) return !1;
  let n = e.indexOf(Bye);
  return n !== -1 && n < Ftn;
}
function Pl(e) {
  if (!Btn(e)) return null;
  let n = An.length,
    r = (w) => {
      if (!e.startsWith(w, n)) return !1;
      return ((n += w.length), !0);
    },
    s;
  if (r(' lang="')) {
    let w = e.indexOf('"', n);
    if (w === -1 || !kr(e.slice(n, w))) return null;
    ((s = e.slice(n, w)), (n = w + 1));
  }
  if (!r("><head>" + Bye)) return null;
  let a = n + A1e,
    h = 0;
  while (h < 2 && r("<script>")) {
    let w = e.indexOf("</script>", n);
    if (w === -1 || w > a) return null;
    let x = e.slice(n, w);
    if (x === "" || x.includes("<!--") || /<\/script/i.test(x)) return null;
    ((n = w + 9), h++);
  }
  if (h === 0 || !r(C2e)) return null;
  let b = r(Es);
  if (!b && !r(As)) return null;
  if (!r("<style>")) return null;
  let y = e.indexOf("</style>", n);
  if (y === -1 || e.slice(n, y).includes("<")) return null;
  if (((n = y + 8), !r(Rs))) return null;
  if (e.length - n < En.length || !e.endsWith(En)) return null;
  return { body: e.slice(n, e.length - En.length), lang: s, cover: b };
}
function JSo(e) {
  let n = Object.freeze({ slug: e });
  return (Z().mintedRoundTripPublishSignals.add(n), n);
}
function QSo(e) {
  return typeof e === "object" && e !== null && Z().mintedRoundTripPublishSignals.has(e);
}
function Cr(e, n = "supporting file") {
  for (let r of e) {
    if (!Tn.has(r.contentType)) {
      m("artifact_publish", "file_not_servable", zAr(r.path, r.contentType));
      let s = kU(r.contentType),
        a = Tn.has(s) ? s : void 0;
      return O(q1o(n, r.path, r.contentType, a));
    }
    if (TOe.has(r.contentType)) {
      if (typeof r.content === "string" ? r.content.includes("\x1B") : r.content.includes(27))
        return (
          m("artifact_publish", "file_esc_byte"),
          O(
            `${n} "${r.path}" carries an ESC byte \u2014 publish ` +
              "text content without escape sequences (nothing was published)"
          )
        );
      if (typeof r.content === "string" ? r.content.includes("\x00") : r.content.includes(0))
        return (
          m("artifact_publish", "file_nul_byte"),
          O(
            `${n} "${r.path}" carries NUL bytes \u2014 publish ` +
              "text content as UTF-8 without embedded NULs (nothing was published)"
          )
        );
    }
    if (Gl.has(r.contentType)) {
      let s = typeof r.content === "string" ? r.content : r.content.toString("utf8");
      if (/<!(?:DOCTYPE|ENTITY)/i.test(s))
        return (
          m("artifact_publish", "file_dtd"),
          O(
            `${n} "${r.path}" carries a DOCTYPE or ENTITY ` +
              "declaration \u2014 XML supporting files must not use DTD " +
              "machinery (nothing was published)"
          )
        );
      let a = s.startsWith("\uFEFF") ? s.slice(1) : s,
        h = a.indexOf("<?");
      if (h !== -1) {
        if (!(h === 0 && /^<\?xml[\s?]/i.test(a)) || a.indexOf("<?", 2) !== -1)
          return (
            m("artifact_publish", "file_pi"),
            O(
              `${n} "${r.path}" carries a processing ` +
                "instruction \u2014 XML supporting files may carry only a " +
                "leading XML declaration (nothing was published)"
            )
          );
      }
    }
    if (
      typeof r.content !== "string" &&
      TOe.has(r.contentType) &&
      r.content.length >= 2 &&
      ((r.content[0] === 255 && r.content[1] === 254) ||
        (r.content[0] === 254 && r.content[1] === 255))
    )
      return (
        m("artifact_publish", "file_utf16_bom"),
        O(
          `${n} "${r.path}" is UTF-16 encoded \u2014 publish ` +
            "supporting text files as UTF-8 (nothing was published)"
        )
      );
  }
  return null;
}
async function ZSo(e, n) {
  let r = Zc();
  if (r !== null) {
    let b = Buffer.byteLength(e, "utf8");
    if (b > Dm)
      return O(`too large: page is ${Math.ceil(b / 1024 / 1024)}MB (max ${Dm / 1024 / 1024}MB)`);
    let y = await A1n(e),
      w = Buffer.byteLength(y, "utf8") > Dm ? e : y;
    if (n.verifyWorkshopHtml !== void 0) {
      let { verifyWorkshopHtml: j } = await import("./chunk-yn6dvbvf.js"),
        H = j(w, await Pn(), n.verifyWorkshopHtml);
      if (!H.ok)
        return O(
          `workshop page refused by the structural verifier \u2014 fix and republish:
` +
            H.violations.slice(0, 12).map((q) => `- [${q.rule}] ${q.where} \u2014 ${q.hint}`).join(`
`)
        );
    }
    let x = n.files ?? [],
      P = n.removeFiles ?? [];
    if (x.length > 0 || P.length > 0) {
      let j = Cn(w, x, P);
      if (j !== null) return O(j.msg);
    }
    let R = Mr(w, x, n.copiedFiles ?? [], P);
    if (R !== null) return O(R);
    return Ri(r, w, n);
  }
  let s = n.slug,
    a = n.relayOnly === !0 ? { count: 0 } : void 0,
    h;
  try {
    h = !s ? await Yi(e, n, a) : await HAr(n.ownPublishes, s, () => Yi(e, n, a));
  } catch (b) {
    if (a?.count === 0 && b instanceof Error) Object.defineProperty(b, Cs, { value: !0 });
    throw b;
  }
  return a !== void 0 &&
    h.err !== null &&
    h.notCarried !== !0 &&
    h.refusedShape !== !0 &&
    a.count === 0
    ? { ...h, refusedBeforeSend: !0 }
    : h;
}
var Cs = Symbol("refusedBeforeSend");
function ewo(e) {
  return e instanceof Error && Reflect.get(e, Cs) === !0;
}
async function Yi(e, n, r) {
  let s = performance.now(),
    a = r !== void 0 ? Ul(n) : void 0;
  if (a !== void 0)
    return (
      m("artifact_publish", "relay_only_not_fresh_page"),
      {
        ...O(
          `Nothing was published: a publish made without asking may only create a new artifact, naming no url and setting no capabilities, contract, force, file removals or live files, but this one ${a}. Every publish in this session now goes through the usual permission check, which may need a person's approval.`
        ),
        refusedShape: !0
      }
    );
  let {
      slug: h,
      title: b,
      favicon: y,
      icon: w,
      label: x,
      note: P,
      description: R,
      capabilities: j,
      session: H,
      hostServers: q,
      readBack: D,
      publishContext: K,
      originMetadata: C
    } = n,
    U = n.copiedFiles ?? [];
  if (
    n.createPath !== void 0 &&
    (h !== void 0 ||
      n.force === !0 ||
      n.baseVersion !== void 0 ||
      U.length > 0 ||
      (n.removeFiles !== void 0 && n.removeFiles.length > 0) ||
      n.liveFiles !== void 0)
  )
    return (m("artifact_publish", "create_bad_combo"), O("invalid publish options"));
  let N = !!h,
    ie = j !== void 0,
    ce = p1(),
    Y = n.force === !0,
    be =
      (n.files?.length ?? 0) > 0 ||
      U.length > 0 ||
      (n.removeFiles?.length ?? 0) > 0 ||
      n.liveFiles !== void 0,
    Be = n.autoEditAttribution !== void 0 || be ? n.baseVersion : ce ? n.baseVersion : void 0,
    he = {
      slug: h,
      title: b,
      favicon: y,
      ...(w && { icon: w }),
      label: x,
      note: P,
      ...(h !== void 0 && n.deadline !== void 0 && { deadline: n.deadline }),
      ...(n.requestId !== void 0 && { requestId: n.requestId }),
      createConfirmed: n.createConfirmed,
      description: R,
      publishContext: K,
      originMetadata: C,
      ...(n.autoEditAttribution && { autoEditAttribution: n.autoEditAttribution }),
      ...(n.createPath === void 0 && n.thumbnail && { thumbnail: n.thumbnail }),
      ...(n.createPath === void 0 && n.thumbnailDark && { thumbnailDark: n.thumbnailDark })
    },
    Ke = Cr(n.files ?? []);
  if (Ke !== null) return Ke;
  let ut = {
      injectDiagramRuntime: n.injectDiagramRuntime,
      injectHighlightRuntime: n.injectHighlightRuntime,
      expectRoundTrippedPage: n.expectRoundTrippedPage
    },
    ke = await C1n(e, ut),
    Te = R1n(ke.body, ke.roundTripLang, ke.roundTripCover),
    z = Buffer.byteLength(Te, "utf8");
  if (z > Dm && ke.blockIdBytes > 0 && z - ke.blockIdBytes <= Dm)
    (f("artifact_publish", "block_ids_over_cap"),
      (ke = await C1n(e, { ...ut, docBlockIds: !1, expectRoundTrippedPage: !1 })),
      (Te = R1n(ke.body, ke.roundTripLang, ke.roundTripCover)),
      (z = Buffer.byteLength(Te, "utf8")));
  let {
      body: Et,
      mermaidInjected: Ze,
      hljsInjected: Oe,
      unnested: Ne,
      hoistedCommentsDropped: He
    } = ke,
    Ft = tl(Et) ? [wL() ? nl : rl] : [];
  if (z > Dm)
    return (
      m("artifact_publish", "too_large", {
        page_bytes: z,
        mermaid_injected: Ze,
        hljs_injected: Oe,
        block_id_bytes: ke.blockIdBytes
      }),
      O(
        `too large: rendered page is ${Math.ceil(z / 1024 / 1024)}MB (max ${Dm / 1024 / 1024}MB)` +
          (Oe
            ? " \u2014 includes the inline syntax-highlight runtime (~0.6MB), added because the page contains fenced code"
            : "")
      )
    );
  let We = !1,
    Qe = 0,
    Ie,
    ze = [];
  if (n.files !== void 0 && n.files.length > 0)
    ze = n.files.filter((E) => G1o(E.contentType)).map((E) => `${E.path} (${E.contentType})`);
  if (n.verifyWorkshopHtml !== void 0) {
    let { verifyWorkshopHtml: E } = await import("./chunk-yn6dvbvf.js"),
      J = await Pn(),
      W = E(Te, J, n.verifyWorkshopHtml);
    if (!W.ok) {
      (f("workshop_html_publish", "verifier_refused"),
        m("artifact_publish", "workshop_verifier_refused", { page_bytes: z }));
      let ve = W.violations
          .slice(0, 12)
          .map((Se) => `- [${Se.rule}] ${Se.where} \u2014 ${Se.hint}`),
        Le =
          W.violations.length > 12
            ? `
(and ${W.violations.length - 12} more)`
            : "";
      return {
        url: null,
        slug: null,
        version: null,
        err:
          `workshop page refused by the structural verifier \u2014 fix and republish:
` +
          ve.join(`
`) +
          Le
      };
    }
    if (((We = W.workshopSurface), (Qe = W.decisionCount ?? 0), W.workshopSurface))
      Ie = {
        state: W.workshopState ?? "in-progress",
        deliverables: W.deliverables ?? { n: 0, pr: 0, artifact: 0, other: 0 }
      };
    if (We) {
      let ve = ac(n.slug, n.refusedSidecarHistory?.());
      if (ve !== null) {
        if (ve.kind === "priors")
          (f("workshop_html_publish", "sidecar_refused"),
            m("artifact_publish", "workshop_sidecar_refused", { page_bytes: z }));
        else
          (f("workshop_html_publish", "sidecar_contract"),
            m("artifact_publish", "workshop_sidecar_contract", { page_bytes: z }));
        return O(ve.err);
      }
    }
    if (n.files !== void 0 && n.files.length > 0)
      if (We) {
        if (ze.length > 0)
          return (
            f("workshop_html_publish", "sidecar_refused"),
            m("artifact_publish", "workshop_sidecar_refused", { page_bytes: z }),
            {
              url: null,
              slug: null,
              version: null,
              err:
                "workshop pages cannot ship renderable or executable sidecar files \u2014 " +
                "each is a URL that bypasses the publish-time verifier: " +
                c7(ze.join(", "))
            }
          );
      } else {
        let ve = await Nr(n.files, J, z);
        if (ve !== null) return ve;
      }
    if (We) g("workshop_html_publish", { count: Qe });
  }
  let tt =
    We && (n.template === void 0 || n.template === "plain") ? "workshop" : (n.template ?? "plain");
  he.template = tt;
  let Fe = j,
    Ye = [],
    Me = [];
  if (j !== void 0 && H !== void 0) {
    let { connectorNames: E, serverNames: J } = H,
      W = Szo(j, E, J, { hostServers: q });
    if (W.ok && q === void 0 && W.servers.some((fe) => dtt(fe) !== void 0)) {
      let fe = Z(),
        qe = fe.accountEpoch,
        Ce = await qae({
          timeoutMs: Oo,
          ...(n.signal && { signal: n.signal }),
          credentials: n.credentials
        });
      if (!("err" in Ce)) {
        CEe({ session: fe, epoch: qe, roster: Ce, storageV5: void 0 });
        let Dt = L7n(Ce, "mcp", H7n);
        if ((n.noteHostServers?.(Dt), !Dt)) W = Szo(j, E, J, { hostServers: !1 });
      } else f("artifact_publish", "host_roster_fetch_failed", { cause: c(Ce.cause) });
    }
    if (!W.ok) {
      let fe = F(W.malformed, (_e) => _e.kind === "host_unavailable"),
        qe = F(W.malformed, (_e) => _e.kind === "unknown_tools"),
        Ce = F(
          W.malformed,
          (_e) =>
            _e.kind === "opaque_id" ||
            _e.kind === "known_id" ||
            _e.kind === "tool_name" ||
            _e.kind === "connector_as_host" ||
            _e.kind === "undeclarable_name"
        ),
        Dt = F(W.malformed, (_e) => _e.kind === "local_server_as_first_party");
      m(
        "artifact_publish",
        fe > 0
          ? "host_server_unavailable"
          : W.internal.length > 0
            ? "internal_host_server_name"
            : Dt > 0
              ? "first_party_server_collision"
              : W.unresolved.length > 0
                ? "unresolved_mcp_server"
                : Ce > 0
                  ? "opaque_mcp_server_id"
                  : qe > 0
                    ? "unknown_mcp_tool"
                    : W.malformed.length > 0
                      ? "malformed_mcp_manifest"
                      : "mcp_manifest_over_caps",
        {
          page_bytes: z,
          unresolved_count: W.unresolved.length,
          internal_count: W.internal.length,
          malformed_count: W.malformed.length - Ce - fe - qe,
          opaque_id_count: Ce,
          host_unavailable_count: fe,
          unknown_tools_count: qe,
          oversized_count: W.oversized.length,
          ...(W.serverCount !== null && { server_count: W.serverCount })
        }
      );
      let Pt = lc(W.malformed);
      if (W.unresolved.length > 0) {
        let _e = oH(W.unresolved, 8, (ht) => `"${Wm(ht)}"`),
          vt = E.filter(ltt),
          en = oH(L(vt.map((ht) => ht.server)), 8, (ht) => `"${Wm(ht)}"`),
          fn = en.length === 0 ? "" : ` (connectors this session: ${en.join(", ")})`,
          pn = vt.some((ht) => Kt(ht.toolPrefix) !== null);
        Pt.push(
          `unknown ${I(W.unresolved.length, "connector")}: ${_e.join(", ")} \u2014 ` +
            (pn
              ? "set `server` to the connector's exact display name"
              : `set \`server\` to the segment between \`mcp__\` and the next \`__\` of a tool name from this session (for \`mcp__${Otn()}__search\`, use \`${Otn()}\`, copied exactly), or to the connector's exact display name`) +
            `${fn}. The control plane would accept this manifest, but the page would break at view time`
        );
      }
      if (W.internal.length > 0) {
        let _e = oH(L(W.internal), 8, (vt) => `"${Wm(vt)}"`);
        Pt.push(
          `built-in ${I(W.internal.length, "server")} ${_e.join(", ")} ` +
            "\u2014 the Claude app's own servers, which it never exposes to " +
            "pages as host servers; declare only servers from the MCP configuration (host:<name> for the `mcp__<name>__<tool>` tools of a server you configured). The control plane would accept this manifest, but the page would break at view time"
        );
      }
      for (let _e of W.oversized)
        Pt.push(
          `${IGt(_e.server)} "${Wm(_e.server)}" declares ${_e.toolCount} tools, counted after any same-name entries merge (max ${pzo}) \u2014 trim the tools ` +
            "list; the control plane would reject it anyway"
        );
      if (W.serverCount !== null)
        Pt.push(
          `manifest declares ${W.serverCount} servers (max ${mzo}) \u2014 declare only the servers ` +
            "the page actually calls; the control plane would reject it anyway"
        );
      return O(`mcp manifest rejected: ${Pt.join("; ")}.`);
    }
    ((Fe = W.caps), (Ye = W.warnings), (Me = W.servers));
    let ve = [
        e,
        ...(n.files ?? []).flatMap((fe) => (TOe.has(fe.contentType) ? [mr(fe.content)] : []))
      ],
      Le = W.servers.length > 0 ? wzo(ve, W.servers, 64) : [],
      Se = QJs(ve, W.renamed).filter(([fe]) => !Le.includes(fe));
    if (Se.length > 0)
      Ye = [
        ...Ye,
        `the page source still holds ${I(Se.length, "a server name", "server names")} this publish rewrote in the manifest, as ${I(Se.length, "a quoted string", "quoted strings")} \u2014 ${oH(Se, 8, ([fe, qe]) => `"${Wm(fe)}" (viewers resolve only "${Wm(qe)}")`).join(", ")} \u2014 so if the page passes ${Se.length === 1 ? "it" : "them"} to callTool(\u2026) / watchTool(\u2026), those calls fail for every viewer; use the display ${I(Se.length, "name")} there.`
      ];
  } else if (j !== void 0) {
    let E = ZJs(j).length;
    if (E > 0) f("artifact_publish", "slug_without_pairs", { page_bytes: z, slug_count: E });
  }
  let Ht = Object.keys(Fe ?? {}),
    ft,
    At = ctt(i.CLAUDE_ARTIFACT_HOST_GRANT);
  if (Fe !== void 0) {
    let E = XGr(Fe, At);
    if (!E.ok) {
      m("artifact_publish", "host_grant_unreadable", {
        page_bytes: z,
        host_server_count: E.refused.length
      });
      let J = oH(E.refused, 8, (W) => `"${Wm(W)}"`);
      return O(
        `mcp manifest rejected: this computer's local-server grant (${Ezo}, set by the app that launched this session; not something to fix from here) could not be read, so ` +
          `no host: server can be declared from this session \u2014 ${J.join(", ")}; declare only claude.ai connectors (set "server" to the connector's display name), or to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration).`
      );
    }
    if (E.dropped.length > 0) {
      (f("artifact_publish", "host_grant_narrowed", {
        page_bytes: z,
        dropped_count: E.dropped.length
      }),
        (Fe = E.caps),
        (Me = Me.filter((W) => E.servers.includes(W))));
      let J = E.dropped.length === 1 ? "it" : "them";
      ((ft = E.caps),
        (Ye = [
          ...Ye,
          `this computer did not grant the page these local tools, so they were left out of the manifest: ${ea(E.dropped)} \u2014 the page's ` +
            `calls to ${J} fail for every viewer; tell the user which local tools were left out` +
            (E.servers.length === 0
              ? ', and that the page now has no connector access at all (no declared server remained, so this publish carries no "mcp" and any stored "mcp" declaration is replaced)'
              : "") +
            "."
        ]));
    }
  }
  if (H !== void 0 && Me.length > 0) {
    let E = [e, ...(n.files ?? []).flatMap((W) => (TOe.has(W.contentType) ? [mr(W.content)] : []))],
      J = wzo(E, Me, 64);
    if (J.length > 0)
      Ye = [
        ...Ye,
        `the page calls callTool/watchTool with ${I(J.length, "a server name", "server names")} not in this manifest \u2014 ${oH(J, 8, (W) => `"${Wm(W)}"`).join(", ")} \u2014 and ${MGt((ft ?? Fe)?.mcp) ? "under this dynamic declaration each viewer is asked to approve them at first use (a name the viewer has no connector for is refused)" : "those calls fail for every viewer"}; the manifest declares ${oH(Me, 8, (W) => `"${Wm(W)}"`).join(", ")}.`
      ];
  }
  if (
    n.contract !== void 0 &&
    n.contract !== "latest" &&
    (!r9.test(n.contract) || n.contract === wwt)
  )
    return (
      m("artifact_publish", "invalid_contract", { page_bytes: z }),
      O(
        `invalid contract ${_(n.contract)} \u2014 pass 'latest' ` +
          "or a published version like 0.1.0."
      )
    );
  let se = n.contract === "latest",
    we = n.contract !== void 0 && n.contract !== "latest" ? n.contract : null,
    mt = n.contract !== void 0,
    Mt = h && !mt ? n.storedPin : null,
    Pe;
  if (h && !mt && Mt === void 0) {
    let E = await iO(h, void 0, n.credentials);
    if (E !== null && "err" in E && n.onPinReadError !== "assume_none" && or(E)) {
      let J = wn(E);
      if ((await X(cr, n.signal), !n.signal?.aborted))
        ((E = await iO(h, n.signal, n.credentials)),
          f("artifact_publish", "pin_readback_retried", {
            page_bytes: z,
            ...J,
            recovered: !(E !== null && "err" in E)
          }));
    }
    if (E !== null && "err" in E)
      if (n.onPinReadError === "assume_none")
        (f("artifact_publish", "pin_readback_assumed_none", { page_bytes: z }), (Mt = null));
      else
        return (
          m("artifact_publish", "pin_readback_failed", { page_bytes: z, ...wn(E) }),
          O(
            `couldn't read the artifact's stored contract pin (${E.err}) \u2014 ` +
              "a republish preserves the stored pin, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics)."
          )
        );
    else ((Mt = E === null ? null : DU(E.contract)), (Pe = E?.capabilities ?? {}));
  }
  let nt = DU(Mt);
  if (h && Pe === void 0 && Object.keys(j ?? {}).length > 0) {
    let E = await iO(h, void 0, n.credentials);
    if (E !== null && "err" in E && n.contract === void 0 && or(E)) {
      if ((await X(cr, n.signal), !n.signal?.aborted)) E = await iO(h, void 0, n.credentials);
    }
    if (E !== null && "err" in E) {
      if (n.contract === void 0)
        return (
          m("artifact_publish", "capability_readback_failed", { page_bytes: z, ...wn(E) }),
          O(
            `couldn't read the artifact's stored capability declaration (${E.err}) \u2014 ` +
              "a republish that declares capabilities must not silently revoke stored ones, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics, and the capabilities you send then replace the stored ones)."
          )
        );
      f("artifact_publish", "retrofit_guard_skipped");
    } else Pe = E?.capabilities ?? {};
  }
  if (j === void 0 && h) {
    let E = await dn({
      slug: h,
      hostGrant: At,
      storedCaps: Pe,
      signal: n.signal,
      credentials: n.credentials,
      pageBytes: z,
      lane: "page"
    });
    if (!E.ok) return O(E.err);
    Pe = E.storedCaps;
  }
  let bt = (E) => (E === t5 ? T$ : E),
    un = Object.keys(Pe ?? {}).map(bt),
    zt = Ht.map(bt),
    it = Object.entries(Pe ?? {}).filter(([E]) => !zt.includes(bt(E))),
    st = M7n(Pe?.db) ?? [],
    Ue = Fe?.db,
    Ge = st.length > 0 && (Ue === !0 || (SV(Ue) && !Object.hasOwn(Ue, "rules"))),
    rt = bzo(st),
    at = gzo(Pe?.user) ?? [],
    _t = Fe?.user,
    Vt = at.length > 0 && (_t === !0 || (SV(_t) && !Object.hasOwn(_t, "scopes"))),
    Qt = hzo(at),
    It = () => {
      let E = _(at),
        J = ny(E, { max: 200 });
      return Qt && J === E ? J : "";
    };
  if (n.createPath === void 0 && it.length > 0 && zt.some((E) => !un.includes(E))) {
    m("artifact_publish", "capability_retrofit_refused");
    let E = oH(it, 8, ([fe]) => ny(fe)),
      J = _({
        ...Object.fromEntries(it),
        ...Fe,
        ...(Ge && { db: Pe?.db }),
        ...(Vt && { user: Pe?.user })
      }),
      W = ny(J, { max: 600 }),
      ve = Ge || it.some(([fe]) => fe === "db"),
      Le = Vt || it.some(([fe]) => fe === "user"),
      Se =
        W === J &&
        !/[<>]/.test(sE(J)) &&
        Kl(J) === J &&
        (!ve || _zo(Pe?.db)) &&
        (!Le || yzo(Pe?.user))
          ? W
          : "";
    return O(
      `your capabilities declaration omits the stored ${I(it.length, "capability", "capabilities")} ${E.join(", ")} while adding new ones \u2014 a sent declaration replaces the stored one, so this publish would have silently revoked ${it.length === 1 ? "it" : "them"}. To keep ${it.length === 1 ? "it" : "them"}, republish declaring the union${Se !== "" ? `: ${Se}` : " (republish with capabilities omitted to read the stored declaration back, then resend it plus your additions)"}. To revoke on purpose, publish that union first, then republish without the revoked names (a declaration that adds no new name goes out as sent); capabilities: {} clears everything.`
    );
  }
  if (n.createPath === void 0 && Ge) {
    m("artifact_publish", "db_rules_reset_refused");
    let E = _(st),
      J = ny(E, { max: 600 }),
      W = rt && J === E ? J : "",
      ve = Vt
        ? ` The sent user block likewise omits its stored scopes${It() !== "" ? ` (${It()})` : ""}: resend user with them as well, or user: {"scopes": []} to drop them.`
        : "";
    return O(
      `your capabilities declaration re-sends db without its rules while the artifact stores ${st.length} ${I(st.length, "access rule")}${W !== "" ? `: ${W}` : ' (not listed here; read the artifact with action "read" to see them)'} \u2014 ` +
        `a sent db block replaces the stored one, rules included, so this publish would have reset them to the defaults (anyone who can open the artifact can read its shared data, and anyone with more than view-only access can write it). To keep them, ${W !== "" ? "resend db with those rules" : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend db with its rules"}; to reset them on purpose, send db: {"rules": []}.` +
        ve
    );
  }
  if (n.createPath === void 0 && Vt) {
    m("artifact_publish", "user_scopes_reset_refused");
    let E = It();
    return O(
      `your capabilities declaration re-sends user without its scopes while the artifact stores ${at.length} ${I(at.length, "scope")}${E !== "" ? `: ${E}` : ""} \u2014 ` +
        `a sent user block replaces the stored one, scopes included, so this publish would have dropped ${at.length === 1 ? "it" : "them"} (for profile, the page would no longer receive the viewer's name and avatar). To keep ${at.length === 1 ? "it" : "them"}, ${E !== "" ? `resend user with scopes: ${E}` : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend user with its scopes"}; to drop ${at.length === 1 ? "it" : "them"} on purpose, send user: {"scopes": []}.`
    );
  }
  let le = await zo({
    capabilities: Fe,
    echoPin: nt,
    explicitPin: we,
    upgrade: se,
    pageBytes: z,
    ...(n.createPath !== void 0 && {
      latestFetchRemedy: {
        retry: "nothing was created; retry.",
        refused: `Nothing was created; tell the user the page has to be created from ${Sn}.`
      }
    }),
    credentials: n.credentials
  });
  if ("errMsg" in le) return O(le.errMsg);
  let pt = le.fields,
    Rt = {
      capNames: Object.keys(Fe ?? {}).map(bt),
      hostDecl: Ho(Fe),
      latestContract: "contract" in pt && we === null && nt === null
    },
    ot,
    kt = (E) =>
      ll(vs(E, D ? h : void 0, n.credentials, n.signal), [...Ye, ...Ft]).then((J) => {
        if (J.err === null && Ne !== void 0)
          f(
            "artifact_publish",
            Ne === "repaired" ? "nested_page_repaired" : "nested_repair_partial"
          );
        if (J.err === null && He) f("artifact_publish", "hoisted_comment_dropped");
        let W = J.err === null ? [...ze, ...(J.refusedClassSidecarTypes ?? [])] : [];
        if (J.err !== null)
          return ot !== void 0 && J.strandedSlug === void 0 && !J.conflict && !J.gone
            ? { ...J, reservedSlug: ot }
            : J;
        return {
          ...sl(J, n.files ?? []),
          ...(W.length > 0 && { refusedClassSidecarTypes: W }),
          ...(ft !== void 0 && { sentCapabilities: ft })
        };
      }),
    De = n.files ?? [],
    S = n.removeFiles ?? [];
  if (De.length > 0 || U.length > 0 || S.length > 0 || n.liveFiles !== void 0) {
    if (!wL())
      return (
        m("artifact_publish", "multifile_flag_off", {
          n_files: De.length + U.length,
          n_removed: S.length
        }),
        O(
          S.length > 0
            ? "Supporting files can't be published or removed right now, so nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting `files`) would update the page but can't remove a file."
            : "Supporting files can't be published right now, so nothing was published. Publish the page as a single file instead: inline what it needs and omit `files`."
        )
      );
    if (U.length > 0 && !k1e())
      return (m("artifact_publish", "copy_from_flag_off", { n_copied: U.length }), O(Fr));
    if (n.createPath !== void 0)
      return kt(
        ir(he, (E) =>
          Ki(
            Te,
            E,
            pt,
            void 0,
            !1,
            {
              t0: s,
              pageBytes: z,
              lane: "inline",
              isRedeploy: N,
              hasCaps: ie,
              template: tt,
              ...(Ie && { workshopInfo: Ie }),
              forced: !1,
              ...(nt !== null && { echoedPin: nt }),
              ...(n.liveFilesGate === !0 && { liveFilesOn: !0 }),
              sent: Rt
            },
            n.ownPublishes,
            n.credentials,
            We,
            n.createPath,
            n.onRetry,
            n.signal,
            De
          )
        )
      );
    return kt(
      ir(he, (E, J) =>
        Lr(Te, De, U, S, E, pt, {
          workshopSurface: We,
          baseVersion: J ?? Be,
          force: Y,
          ...(n.liveFiles !== void 0 && { liveFiles: n.liveFiles }),
          ...(n.copiedCrossOrgOk === !0 && { copiedCrossOrgOk: !0 }),
          ...(ot !== void 0 && { reservedSlug: ot }),
          ownPublishes: n.ownPublishes,
          tele: {
            t0: s,
            pageBytes: z,
            lane: "inline",
            isRedeploy: N,
            hasCaps: ie,
            template: tt,
            ...(Ie && { workshopInfo: Ie }),
            forced: Y,
            ...(nt !== null && { echoedPin: nt }),
            ...(n.liveFilesGate === !0 && { liveFilesOn: !0 }),
            sent: Rt
          },
          onRetry: n.onRetry,
          onReserved: (W) => {
            ot = W;
          },
          signal: n.signal,
          credentials: n.credentials,
          relayOnly: r
        })
      )
    );
  }
  let Q =
    h === void 0 && n.createPath === void 0 && wL()
      ? await Cl(n.credentials, n.signal, s, r)
      : void 0;
  if (((ot = Q), n.signal?.aborted)) return O("publish cancelled \u2014 nothing was published.");
  return kt(
    ir(he, (E) =>
      Ki(
        Te,
        E,
        pt,
        Be,
        Y,
        {
          t0: s,
          pageBytes: z,
          lane: "inline",
          isRedeploy: N,
          hasCaps: ie,
          template: tt,
          ...(Ie && { workshopInfo: Ie }),
          forced: Y,
          ...(nt !== null && { echoedPin: nt }),
          ...(n.liveFilesGate === !0 && { liveFilesOn: !0 }),
          sent: Rt
        },
        n.ownPublishes,
        n.credentials,
        We,
        n.createPath,
        n.onRetry,
        n.signal,
        void 0,
        Q,
        r
      )
    )
  );
}
async function Cl(e, n, r, s) {
  if (n?.aborted) return;
  try {
    let a = {
        refreshOAuth: !0,
        headers: Yc(),
        timeout: 30000,
        credentials: e,
        relayOnCredentialRefusal: !0
      },
      h;
    try {
      h =
        s !== void 0
          ? await Or("/api/frame/deploy/prepare", $Ht(), a, s, n)
          : await du.post("/api/frame/deploy/prepare", $Ht(), a);
    } catch (b) {
      if (b instanceof Je) return;
      throw b;
    }
    if (h.ok && h.status === 200 && typeof h.data?.slug === "string" && ar.test(h.data.slug))
      return h.data.slug;
    if (!h.ok || (h.status !== 403 && h.status !== 404))
      f("artifact_publish", "reserve_unavailable", { reserve_status: h.ok ? h.status : 0 });
  } catch (a) {
    f("artifact_publish", "reserve_unavailable", { reserve_status: 0, ...mK(a, r) });
  }
  return;
}
async function ir(e, n) {
  let r = await n(e);
  if (
    r.err === null ||
    r.thumbnailRejected === void 0 ||
    r.strandedSlug !== void 0 ||
    r.liveVersion !== void 0
  )
    return r;
  if (e.thumbnail === void 0 && e.thumbnailDark === void 0)
    return (m("artifact_publish", "thumbnail_rejected"), r);
  f("artifact_publish", "thumbnail_rejected");
  let { thumbnail: s, thumbnailDark: a, ...h } = e,
    b =
      r.created === void 0
        ? await n(h)
        : await n({ ...h, slug: r.created.slug }, r.created.version);
  return b.err === null
    ? {
        ...b,
        warnings: [
          ...(b.warnings ?? []),
          `The custom thumbnail was not accepted by the server (${r.thumbnailRejected}); published with the automatic screenshot instead.`
        ]
      }
    : b;
}
function two() {
  if (Uu() === "claude-vscode") return "epitaxy_pane";
  if (Nc()) return "desktop_pane";
  return "terminal_link";
}
async function jAr(e, n) {
  try {
    let r = await du.post(
      "/api/frame/track",
      {
        event_name: e,
        ...(n.slug && { slug: n.slug }),
        ...(n.via && { via: n.via }),
        ...(n.mode && { mode: n.mode })
      },
      { refreshOAuth: !0, headers: Yc(), timeout: 5000, credentials: n.credentials }
    );
    if (!r.ok) t(`[artifact] /track skipped: ${r.reason}`);
    else if (r.status !== 204) t(`[artifact] /track ${r.status}: ${MT(r.data)}`);
  } catch (r) {
    t(`[artifact] /track failed: ${r instanceof Error ? r.message : String(r)}`);
  }
}
var $l = ["frame_daily_publish_cap_reached", "frame_daily_push_cap_reached"],
  Ol = {
    frame_daily_publish_cap_reached: "daily_new",
    frame_daily_push_cap_reached: "daily_pushes"
  },
  Nl = p(() => u({ error: B($l), message: o().catch("") })),
  Fl = {
    daily_new: "daily new-artifact limit for your plan reached \u2014 resets at UTC midnight",
    daily_pushes: "daily publish limit for your plan reached \u2014 resets at UTC midnight"
  },
  WAr = "publish 429: ",
  $s = "x-frame-push-remaining";
function Os(e) {
  let n = typeof e === "string" ? e.trim() : "";
  return /^\d{1,9}$/.test(n) ? Number(n) : void 0;
}
function OHt(e = Date.now()) {
  let n = new Date(e);
  return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1) / 1000;
}
function Ns(e) {
  let n = typeof e === "string" ? Date.parse(e) : Number.NaN;
  return OHt(Number.isFinite(n) ? n : Date.now());
}
function Bt(e) {
  let n = Nl().safeParse(e);
  if (!n.success) return;
  let r = Ol[n.data.error],
    s = jj(n.data.message, 200),
    a = s !== "" ? s : Fl[r];
  return { capType: r, message: `${WAr}${a}` };
}
var Gi = 3,
  Ml = 5000;
var $r = 20000,
  Ll = 30000;
function Fs(e) {
  let n = Oh(e) ?? 2000;
  return n <= Ll ? n : void 0;
}
function Ms(e) {
  return Math.min(Oh(e) ?? Bl, $r);
}
function Ls(e, n) {
  let r = Math.round(
      Ky({ attempt: e - 1, baseMs: Ml, jitter: { kind: "proportional", ratio: 0.25 } })
    ),
    s = Oh(n) ?? 0;
  return Math.min(Math.max(s, r), $r);
}
class cn extends Error {
  startedAtMs;
  constructor(e, n, r) {
    super(e, r);
    this.startedAtMs = n;
  }
}
class jt extends cn {}
class $t extends cn {
  seen;
  resent;
  constructor(e, n, r, s, a) {
    super(e, n, r);
    this.seen = s;
    this.resent = a;
  }
}
function Il(e) {
  return e.seen !== void 0 && aoi(e.seen);
}
function Is(e) {
  let n = 0,
    r = 0;
  return (s) => {
    if (
      ((n += s.json_bytes),
      (r += s.wire_bytes),
      (e.json_bytes = n),
      (e.wire_bytes = r),
      (e.body_gzip = e.body_gzip === !0 || s.body_gzip),
      s.gzip_skip !== void 0)
    )
      e.gzip_skip = c(s.gzip_skip);
    if (s.gzip_fallback_status !== void 0) e.gzip_fallback_status ??= s.gzip_fallback_status;
  };
}
function Ds(e, n) {
  let r = [
    ...(e.attemptId === void 0 ? [] : [`attempt_id=${e.attemptId}`]),
    ...(e.attemptId !== void 0 && e.resend ? ["resend=1"] : []),
    ...(n.createConfirmed === !0 ? [L_t] : [])
  ];
  return r.length === 0 ? "/api/frame/deploy/direct" : `/api/frame/deploy/direct?${r.join("&")}`;
}
async function Dl(e, n, r) {
  let s = { ...mK(n.cause, n.startedAtMs), ...n.seen };
  t(
    `[artifact] publish request died before its whole body left this machine (socket took ${s.bytes_flushed} of ${s.body_bytes} bytes) \u2014 re-sending once on a fresh connection`
  );
  let a = 0;
  try {
    let h = await e();
    return ((a = h.ok ? h.status : 0), h);
  } finally {
    f("artifact_publish", "deploy_resent", { ...r, ...s, deploy_final_status: a });
  }
}
var Bs = 2,
  Bl = 2000;
function js(e) {
  return e.ok && e.fromFrame && e.status === 409 && dt(e.data) === "publish_settling";
}
function jl(e) {
  return typeof e === "object" && e !== null && "replayed" in e && e.replayed === !0;
}
async function Hl(e, n, r, s) {
  let a = {
    ...mK(n.cause, n.startedAtMs),
    ...(n instanceof $t && n.seen),
    ...(n.cause instanceof N9e && { deploy_first_status: n.cause.status }),
    leg: c(n instanceof jt ? "relay" : "direct")
  };
  t(
    "[artifact] publish request ended without a clear answer \u2014 re-sending it once, marked as a re-send, so a publish that already landed is answered rather than repeated"
  );
  let h = 0,
    b,
    y = 0,
    w = !1,
    x = !1;
  try {
    let P = await e();
    b = c(P.route);
    while (js(P) && y < Bs) {
      let R = Ms(P.response?.headers?.["retry-after"]);
      if (
        (t(
          `[artifact] the first attempt landed and its content is still being stored \u2014 re-sending in ${R}ms`
        ),
        await X(R, s),
        s?.aborted)
      )
        break;
      ((y += 1), (P = await e()), (b = c(P.route)));
    }
    if (((h = P.ok ? P.status : 0), P.route === "direct" && $1n(P) && n instanceof jt))
      throw ((x = !0), n);
    return ((w = P.ok && P.status >= 200 && P.status < 300 && jl(P.data)), P);
  } finally {
    f("artifact_publish", "deploy_resent", {
      ...r,
      ...a,
      deploy_final_status: h,
      ...(b !== void 0 && { resend_route: b }),
      settle_resends: y,
      replayed: w,
      ...(x && { resend_refused: !0 }),
      ...(s?.aborted && { cancelled: !0 })
    });
  }
}
function zl(e) {
  if (!e.ok || e.status === 408 || e.status === 499) return !0;
  if (e.status === 429) return Bt(e.data) === void 0;
  return e.status >= 500 && ln(e.status, e.data) === null && dt(e.data) !== "render_busy";
}
class Hs extends cn {}
async function vn(e) {
  let n = performance.now();
  try {
    return await e();
  } catch (r) {
    if (r instanceof Je) throw r;
    throw new Hs(r instanceof Error ? r.message : String(r), n, { cause: r });
  }
}
function pr(e, n) {
  return e instanceof cn
    ? {
        ...mK(e.cause, e.startedAtMs),
        ...(e instanceof $t && e.resent && { resent: !0 }),
        ...(e.cause instanceof N9e && { deploy_status: e.cause.status })
      }
    : mK(e, n);
}
async function hr(e, n, r, s, a, h = {}, b = void 0, y) {
  let w = {
      refreshOAuth: !0,
      headers: Yc(),
      streamUpload: {
        tailFloorMs: qi,
        onSettled: (R) => {
          ((h.seen = R), s(R));
        }
      },
      gzipBody: { tailFloorMs: qi(void 0), onEncoding: a },
      ...(h.freshConnection && { freshConnection: !0 }),
      relayOnCredentialRefusal: !0,
      maxBodyLength: 2 * Dm,
      maxContentLength: ys,
      relayProbe: Ao,
      credentials: r
    },
    P = await (b !== void 0 ? Or(e, n, w, b, y) : du.post(e, n, w)).catch((R) => {
      if (R instanceof N9e) ((h.seen = void 0), s(void 0));
      throw R;
    });
  return (s(void 0), P);
}
function Ul(e) {
  if (e.slug !== void 0 || e.baseVersion !== void 0) return "names an existing artifact";
  if (e.force === !0) return "sets force";
  if (e.capabilities !== void 0) return "declares capabilities";
  if (e.contract !== void 0) return "sets a contract";
  if ((e.removeFiles?.length ?? 0) > 0) return "removes files";
  if (
    e.createPath !== void 0 ||
    e.liveFiles !== void 0 ||
    (e.files ?? []).some((n) => n.live !== void 0 || n.reseed === !0)
  )
    return "makes or changes a live file";
  return;
}
function Vl(e) {
  return nr() && (F1n("POST", e, "only") !== "relay" || !Itr());
}
function zs(e) {
  return (
    m("artifact_publish", "relay_only_unsent", e),
    {
      ...O(
        "Nothing was published: a publish made without asking must go through the cloud session's gateway, which could not carry it. Publishing it again now goes through the usual permission check, which may need a person's approval."
      ),
      notCarried: !0
    }
  );
}
function Us() {
  return O("publish cancelled \u2014 nothing was published.");
}
function Vs(e) {
  return e instanceof Error && e.cause instanceof gt;
}
class Je extends Error {
  constructor(
    e = "this request never reached the artifact server: the session gateway did not carry it"
  ) {
    super(e);
    this.name = "RelayOnlyUnsentError";
  }
}
class gt extends Je {
  constructor() {
    super(
      "this request was not sent again: the publish was cancelled while the session gateway was busy"
    );
    this.name = "RelayOnlyCancelledError";
  }
}
var GAr = 5000;
async function Or(e, n, r, s, a) {
  for (let h = !1; ; h = !0) {
    if (Vl(e)) throw new Je();
    s.count += 1;
    let b = await du.postRelayOnly(e, n, r);
    if (O9e(b)) throw new Je();
    if (!b.ok || b.gatewayRetryAfterMs === void 0) return b;
    if (((s.count -= 1), a?.aborted)) throw new gt();
    if (h) throw (f("artifact_publish", "relay_only_busy"), new Je());
    if ((await X(Math.min(b.gatewayRetryAfterMs, GAr), a), a?.aborted)) throw new gt();
  }
}
function qi(e) {
  return (eCr(e) + 30) * 1000;
}
async function Ws(e, n, r, s, a = !1, h = !1, b = !1) {
  let y = Eo(),
    w = !1,
    x = async (N = !1) => {
      let ie = { attemptId: y, ...(N && { freshConnection: N }), ...(w && { resend: !0 }) },
        ce = performance.now();
      try {
        let Y = await e(ie);
        if (((s.wire = Qae(Y)), Y.mcpDoubt !== void 0)) s.deploy_status = Y.mcpDoubt;
        return Y;
      } catch (Y) {
        if (Y instanceof Je) {
          if (P === 1 && b) throw Y;
          throw new $t(
            xt(
              Y instanceof gt
                ? "the publish was cancelled before a later send of it went out"
                : "a later send of this publish could not go through the cloud session's gateway"
            ),
            ce,
            { cause: Y },
            ie.seen,
            N
          );
        }
        s.wire = $me(Y);
        let be = MT(Y instanceof Error ? Y.message : String(Y));
        throw qR(Y)
          ? new jt(xt(`relay request failed: ${be}`), ce, { cause: Y })
          : new $t(
              Y instanceof N9e ? Jt() : xt(`deploy request failed: ${be}`),
              ce,
              { cause: Y },
              ie.seen,
              N
            );
      }
    },
    P = 1,
    R,
    j;
  try {
    R = await x();
  } catch (N) {
    if (r?.aborted) throw N;
    if (N instanceof $t && N.cause instanceof N9e) j = N;
    if (h && (N instanceof jt || (N instanceof $t && (D5(N.cause) || N === j))))
      ((P += 1), (w = !0), (R = await Hl(() => x(!0), N, s, r)));
    else if (N instanceof $t && D5(N.cause) && Il(N)) ((P += 1), (R = await Dl(() => x(!0), N, s)));
    else throw N;
  }
  let H = !1,
    q,
    D = (N) => {
      ((q ??= N.status === 429 ? 429 : 503),
        t(
          `[artifact] /deploy/direct ${N.status} \u2014 retrying in ${N.delayMs}ms (attempt ${N.attempt} of ${N.maxAttempts})`
        ),
        n?.(N));
    },
    K = async (N) => {
      if ((await X(N, r), r?.aborted))
        return (t("[artifact] /deploy/direct retry cancelled by user"), !1);
      return ((P += 1), (H = !0), (R = await x()), (H = !1), !0);
    },
    C = () => {
      if (j !== void 0 && zl(R)) throw j;
      return R;
    },
    U = R.ok && R.fromFrame && R.status === 503 && dt(R.data) === "render_busy";
  try {
    if (R.ok && R.fromFrame && R.status === 429) {
      if (Bt(R.data) !== void 0)
        return (t("[artifact] /deploy/direct 429 is a plan cap \u2014 not retrying"), C());
      let Y = Fs(R.response?.headers?.["retry-after"]);
      if (Y === void 0) return C();
      return (D({ status: 429, attempt: 2, maxAttempts: 2, delayMs: Y }), await K(Y), C());
    }
    if (U && R.ok) {
      let Y = Math.min(Oh(R.response?.headers?.["retry-after"]) ?? 1000, $r);
      return (D({ status: 503, attempt: 2, maxAttempts: 2, delayMs: Y }), await K(Y), C());
    }
    let N = 2,
      ie = !1;
    while (R.ok && R.fromFrame && R.status === 503 && !(a && ln(R.status, R.data)) && N <= Gi) {
      let Y = Ls(N, R.response?.headers?.["retry-after"]);
      if (
        (D({ status: 503, attempt: N, maxAttempts: Gi, delayMs: Y }),
        h && !w && !ln(R.status, R.data))
      )
        ((w = !0), (ie = !0));
      if (!(await K(Y))) break;
      N += 1;
    }
    let ce = 0;
    while (ie && js(R) && ce < Bs) {
      let Y = Ms(R.response?.headers?.["retry-after"]);
      if (
        (t(
          `[artifact] an earlier attempt landed and its content is still being stored \u2014 re-sending in ${Y}ms`
        ),
        !(await K(Y)))
      )
        break;
      ce += 1;
    }
    return C();
  } finally {
    if (q !== void 0)
      (f("artifact_publish", q === 503 ? "deploy_503_retried" : "deploy_429_retried", {
        ...s,
        deploy_attempts: P,
        deploy_final_status: H || !R.ok ? 0 : R.status,
        ...(r?.aborted && { cancelled: !0 }),
        ...(U && { render_busy: !0 })
      }),
        n?.({ settled: !0 }));
  }
}
function Rn(e, n) {
  if (!(n.ok && n.fromFrame && n.status === 400)) return;
  let r = f$(n.data),
    s = pye.test(r);
  if (Tr(e) && s && /["']deadline["']/.test(r)) return "deadline";
  if (oAe(e.requestId).request_id !== void 0 && s && /["']request_id["']/.test(r))
    return "request_id";
  if (
    e.icon &&
    ((s && /["']icon["']/.test(r)) || /^icon (?:must be|and tint can only)\b/.test(r.trimStart()))
  )
    return "icon";
  return;
}
function Ys(e, n) {
  switch (n) {
    case "deadline":
      return { ...e, deadline: void 0 };
    case "icon":
      return { ...e, icon: void 0 };
    case "request_id":
      return { ...e, requestId: void 0 };
  }
}
function gr() {
  return xt(
    "the server answered for a different artifact than the one targeted, so its answer was not adopted"
  );
}
function Jt() {
  return xt("deploy returned an incomplete or malformed response");
}
async function Ki(e, n, r, s, a, h, b, y, w, x, P, R, j, H, q = void 0) {
  let D = {
      page_bytes: h.pageBytes,
      lane: c(h.lane),
      forced: h.forced,
      is_redeploy: h.isRedeploy,
      has_base_version: s !== void 0,
      ...(H !== void 0 && { reserved: !0 }),
      template: c(h.template),
      ...Gs(n),
      ...(j !== void 0 && j.length > 0 && { n_files: j.length })
    },
    K;
  if (x !== void 0 && j !== void 0 && j.length > 0) {
    let Y = Cn(e, j, []);
    if (Y !== null) return (m("artifact_publish", Y.kind, D), O(Y.msg));
    let be = Object.create(null);
    be["index.html"] = { content: e, contentType: "text/html", live: !0 };
    let Be = br - Ot(e);
    for (let he of j) {
      let Ke = an(he);
      if (((Be -= Ot(Ke)), Be < 0))
        return (m("artifact_publish", "too_large", D), O("file too large"));
      be[he.path] = {
        content: Ke,
        contentType: he.contentType,
        ...(he.live === !0 && { live: !0 })
      };
    }
    K = be;
  }
  let C = null,
    U = "none",
    N = !n.slug,
    ie,
    ce = Is(D);
  try {
    let Y = a,
      be = s,
      Be = !1,
      he = H !== void 0 ? { ...n, slug: H } : n;
    t(
      `[artifact] publish \u2192 ${x ?? "/api/frame/deploy/direct"}${K !== void 0 ? ` (files: ${Object.keys(K).length})` : ""}`
    );
    let Ke = !0,
      ut = () => {
        let se = Ke;
        return (
          (Ke = !1),
          Ws(
            (we) =>
              hr(
                x ?? Ds(we, n),
                {
                  ...cs(he),
                  ...$Ht(),
                  ...QAr(),
                  ...r,
                  ...(x === void 0 && Y && { force: !0 }),
                  ...(x === void 0 && be && { baseVersion: be }),
                  ...(x === void 0 && Be && !be && he.slug && { expectUnpublished: !0 }),
                  ...(K !== void 0 ? { files: K } : { content: e })
                },
                y,
                (mt) => (ie = mt),
                ce,
                we,
                q,
                R
              ),
            P,
            R,
            D,
            !0,
            x === void 0 && he.slug !== void 0,
            se
          )
        );
      },
      ke = { deadline: !1, icon: !1, request_id: !1 },
      Te = async () => {
        let se = await ut();
        for (let we = Rn(he, se); we !== void 0; we = Rn(he, se))
          (f("artifact_publish", `${we}_rejected`, D),
            t(`[artifact] ${we} refused upstream \u2014 retrying without it`),
            (he = Ys(he, we)),
            (ke[we] = !0),
            (se = await ut()));
        return se;
      },
      z = await Te();
    if (Y && z.ok && z.fromFrame && z.status === 400) {
      let se = f$(z.data);
      if (pye.test(se) && (/\bforce\b/.test(se) || (be !== void 0 && /\bbaseVersion\b/.test(se))))
        (f("artifact_publish", "force_field_rejected", D),
          t("[artifact] CP rejected force/baseVersion as unknown \u2014 retrying without them"),
          (Y = !1),
          (be = void 0),
          (z = await Te()));
    }
    if (
      Y &&
      be &&
      z.ok &&
      z.fromFrame &&
      z.status === 400 &&
      /force and baseVersion are mutually exclusive/.test(f$(z.data))
    )
      (f("artifact_publish", "exclusivity_retry", D),
        t(
          "[artifact] pre-relaxation CP rejected force+baseVersion \u2014 retrying without the precondition"
        ),
        (be = void 0),
        (z = await Te()));
    let Et = (se) =>
      se.reason === "no-auth" ? Oy(se.detail) : `publish unavailable: ${se.reason}`;
    if (!z.ok) return (m("artifact_publish", z.reason, D), O(Et(z)));
    if (((C = z.fromFrame ? ln(z.status, z.data) : null), C && !N && C.slug !== n.slug))
      return (m("artifact_publish", "deploy_slug_mismatch", D), O(gr()));
    if (C && C.kind === void 0 && x === void 0 && !R?.aborted) {
      let se = Ls(2, z.response?.headers?.["retry-after"]);
      (t(
        `[artifact] /deploy/direct 503 after commit (${C.slug}) \u2014 retrying against it in ${se}ms`
      ),
        P?.({ status: 503, attempt: 2, maxAttempts: 2, delayMs: se }));
      try {
        if ((await X(se, R), !R?.aborted)) {
          if (N) ((he = { ...he, slug: C.slug }), (Be = C.live === void 0), (Y = !1));
          if (C.live !== void 0) be = C.live;
          ((U = "unknown"), (Ke = !0));
          try {
            z = await Te();
          } catch (we) {
            if (!(we instanceof Je)) throw we;
            return (
              (U = we instanceof gt ? "cancelled" : "unsent"),
              St(
                O(
                  U === "cancelled"
                    ? "publish cancelled"
                    : "The publish failed with a server error (503)"
                ),
                C,
                N,
                U
              )
            );
          }
          U = "answered";
        }
      } finally {
        (f("artifact_publish", "deploy_stranded_retried", {
          ...D,
          fresh_publish: N,
          deploy_final_status: U === "answered" && z.ok ? z.status : 0,
          ...(R?.aborted && { cancelled: !0 })
        }),
          P?.({ settled: !0 }));
      }
      if (!z.ok) return (m("artifact_publish", z.reason, D), St(O(Et(z)), C, N, U));
    }
    if (!z.fromFrame)
      return (
        m("artifact_publish", "relay_error", { ...D, deploy_status: z.status }),
        St(O(wr(z.status)), C, N, U)
      );
    if (((be ?? s) || Be || p1()) && z.status === 409) {
      let se = ta(z.data);
      if (se)
        return (
          m("artifact_publish", "conflict", D),
          St({ ...O(Qs(se)), conflict: !0, conflictDetail: se }, C, N, U)
        );
    }
    if (x !== void 0 && z.status === 404)
      return (
        m("artifact_publish", "create_not_enabled", { ...D, deploy_status: 404 }),
        O("create endpoint not available (404) \u2014 nothing was created")
      );
    if (z.status === 400 && Ar(f$(z.data), { ldx: !1 }))
      return (m("artifact_publish", "ldx_unsupported", D), St(O(Er(f$(z.data))), C, N, U));
    if (z.status < 200 || z.status >= 300) {
      let se = xr(
        z.status,
        z.data,
        h.isRedeploy,
        h.echoedPin !== void 0 ? { pin: h.echoedPin, declaredCaps: h.hasCaps } : void 0,
        h.liveFilesOn === !0,
        h.sent,
        {
          retryAfter: z.response?.headers?.["retry-after"],
          reservedSlug: H,
          created: N && C !== null
        }
      );
      if (se.code !== "thumbnail_rejected")
        m("artifact_publish", se.code ?? "deploy_failed", {
          ...D,
          deploy_status: z.status,
          ...se.extra
        });
      let we = se.code === "path_is_live" ? ca(z.data) : void 0;
      return St(
        {
          ...vr(se, `deploy ${z.status}: ${MT(z.data)}`),
          ...(we !== void 0 && { refusedLivePath: we })
        },
        C,
        N,
        U
      );
    }
    let Ze = _r().safeParse(z.data);
    if (!Ze.success) return (m("artifact_publish", "deploy_incomplete", D), St(O(Jt()), C, N, U));
    let { slug: Oe, version: Ne, read: He, shared: Ft, kind: We } = Ze.data;
    if (he.slug && Oe !== he.slug)
      return (m("artifact_publish", "deploy_slug_mismatch", D), St(O(gr()), C, N, U));
    if (x !== void 0 && (ji == null || We !== ji.LIVE_DOC_KIND))
      return (m("artifact_publish", "deploy_incomplete", D), O(Jt()));
    let Qe = ws(z.data),
      Ie = Qe?.map((se) => se.path),
      ze =
        x === void 0
          ? new Set()
          : new Set([
              "index.html",
              ...Object.entries(K ?? {})
                .filter(([, se]) => se.live === !0)
                .map(([se]) => se)
            ]),
      tt = (Ie ?? []).filter((se) => ze.has(se)),
      Fe = [
        ...dr(z.data),
        ...Ss(tt),
        ...xs(Ie, new Set(["index.html", ...Object.keys(K ?? {})]))
      ].slice(0, kn),
      Ye = ur(z.data),
      Me = Os(z.response?.headers?.[$s]),
      Ht = Ns(z.response?.headers?.date),
      ft = qs(
        Ze.data,
        Y ? void 0 : be,
        new Set(["index.html", ...Object.keys(K ?? {}), ...(Ie ?? [])])
      );
    CHt(b, Oe, Ne, { merged: yr(z.data) });
    let At = Zs(Ze.data);
    return (
      g("artifact_publish", {
        ...D,
        e2e_ms: Math.round(performance.now() - h.t0),
        is_redeploy: h.isRedeploy,
        has_caps: h.hasCaps,
        push_remaining_seen: Me !== void 0,
        ...Ks(ft.mergedOver),
        read_back_echoed: At.readBackEchoed === !0
      }),
      {
        url: Ag(Oe),
        slug: Oe,
        version: Ne,
        err: null,
        ...(Me !== void 0 && { pushRemaining: Me, pushResetAt: Ht }),
        ...(w && { workshopSurface: !0 }),
        ...(h.workshopInfo && { workshop: h.workshopInfo }),
        ...(He !== void 0 && { read: He }),
        ...(Ft !== void 0 && { shared: Ft }),
        ...Xs(Ze.data, Tr(he)),
        ...ft,
        ...(ke.deadline && { deadlineDropped: !0 }),
        ...(ke.icon && { iconDropped: !0 }),
        ...Js(Ze.data, r, x !== void 0),
        ...At,
        ...(We !== void 0 && { kind: We }),
        ...(Fe.length > 0 && { warnings: Fe }),
        ...(Ye !== void 0 && { embeds: Ye }),
        ...(Ie !== void 0 && { livePaths: Ie }),
        ...(Qe !== void 0 && { liveDocs: Qe }),
        ...(tt.length > 0 && { bornLive: tt })
      }
    );
  } catch (Y) {
    if (Y instanceof Je) return Y instanceof gt ? Us() : zs(D);
    if (!Vs(Y))
      m("artifact_publish", Y instanceof jt ? "relay_request_error" : "request_error", {
        ...D,
        ...pr(Y, h.t0),
        ...ie
      });
    return St(O(Y instanceof Error ? Y.message : String(Y)), C, N, U);
  }
}
var PEe = 4;
function mr(e) {
  return typeof e === "string" ? e : e.toString("utf8");
}
async function Nr(e, n, r, s = "sidecar file") {
  let a = e.filter((b) => Qpn.has(kU(b.contentType)));
  if (a.length === 0) return null;
  let { verifyWorkshopHtml: h } = await import("./chunk-yn6dvbvf.js");
  for (let b of a) {
    let y = h(mr(b.content), n, "probe");
    if (y.ok) continue;
    (f("workshop_html_publish", "verifier_refused"),
      m("artifact_publish", "workshop_verifier_refused", {
        page_bytes: r,
        sidecar_bytes: Buffer.byteLength(b.content, "utf8")
      }));
    let w = y.violations.slice(0, 6).map((P) => `- [${P.rule}] ${P.where} \u2014 ${P.hint}`),
      x =
        y.violations.length > 6
          ? `
(and ${y.violations.length - 6} more)`
          : "";
    return O(
      `${s} ${c7(b.path)} refused by the workshop structural verifier:
` +
        w.join(`
`) +
        x
    );
  }
  return null;
}
var TOe = new Set([
    "text/html",
    ...[],
    "text/css",
    "text/plain",
    "text/markdown",
    "text/csv",
    "text/javascript",
    "application/javascript",
    "application/json",
    "application/manifest+json",
    "application/xml",
    "text/xml",
    "image/svg+xml"
  ]),
  Tn = new Set([
    ...TOe,
    "application/wasm",
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/x-icon",
    "image/vnd.microsoft.icon",
    "font/woff",
    "font/woff2",
    "font/ttf",
    "font/otf",
    "application/font-woff",
    "application/font-woff2",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "video/mp4",
    "video/webm",
    "video/ogg",
    "application/pdf"
  ]),
  Wl = [
    "py",
    "ipynb",
    "yaml",
    "yml",
    "toml",
    "ini",
    "cfg",
    "conf",
    "env",
    "lock",
    "sh",
    "bash",
    "ps1",
    "bat",
    "ts",
    "tsx",
    "jsx",
    "vue",
    "scss",
    "less",
    "rs",
    "go",
    "java",
    "kt",
    "c",
    "h",
    "cpp",
    "cs",
    "rb",
    "php",
    "r",
    "swift",
    "lua",
    "sql",
    "db",
    "sqlite",
    "parquet",
    "jsonl",
    "ndjson",
    "log",
    "tex",
    "rtf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "odt",
    "ods",
    "epub",
    "key",
    "pages",
    "numbers",
    "zip",
    "tar",
    "gz",
    "tgz",
    "7z",
    "rar",
    "mov",
    "avi",
    "m4a",
    "aac",
    "flac",
    "heic",
    "bmp",
    "tif",
    "tiff",
    "psd",
    "fig",
    "eot",
    "xhtml",
    "htm",
    "bin",
    "exe",
    "dmg",
    "tsv",
    "pkl",
    "npy",
    "npz",
    "pt",
    "onnx",
    "safetensors",
    "h5",
    "svelte",
    "mdx",
    "jsonc"
  ],
  Yl = [
    "text/x-python",
    "text/x-python-script",
    "application/x-python-code",
    "application/x-ipynb+json",
    "application/x-yaml",
    "application/yaml",
    "text/yaml",
    "text/x-yaml",
    "application/toml",
    "text/x-toml",
    "text/x-sh",
    "text/x-shellscript",
    "application/x-sh",
    "application/typescript",
    "text/typescript",
    "text/x-typescript",
    "text/jsx",
    "text/x-scss",
    "text/x-sql",
    "application/sql",
    "application/x-sqlite3",
    "application/vnd.apache.parquet",
    "application/x-ndjson",
    "application/jsonl",
    "application/ld+json",
    "application/geo+json",
    "application/octet-stream",
    "text/x-log",
    "text/rtf",
    "application/rtf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.oasis.opendocument.text",
    "application/epub+zip",
    "application/zip",
    "application/x-zip-compressed",
    "application/gzip",
    "application/x-tar",
    "application/x-7z-compressed",
    "video/quicktime",
    "video/x-msvideo",
    "audio/mp4",
    "audio/x-m4a",
    "audio/aac",
    "audio/flac",
    "image/heic",
    "image/bmp",
    "image/tiff",
    "image/vnd.adobe.photoshop",
    "application/x-figma",
    "application/vnd.ms-fontobject",
    "application/xhtml+xml",
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "image/jpg",
    "text/json",
    "text/x-markdown",
    "application/x-javascript",
    "text/x-java-source",
    "text/x-c"
  ];
function zAr(e, n) {
  let r = xo(e).toLowerCase().slice(1),
    s = Wl.find((w) => w === r),
    a = r === "" ? c("none") : $Y(e) !== void 0 ? c("served") : s !== void 0 ? c(s) : c("other");
  if (n === void 0) return { refused_ext: a };
  let h = kU(n),
    b = Yl.find((w) => w === h),
    y = Tn.has(h) ? c("served_variant") : b !== void 0 ? c(b) : c("other");
  return { refused_ext: a, refused_type: y };
}
var Gl = new Set(["image/svg+xml", "text/xml", "application/xml"]),
  bJ = 67108864,
  MHt = 268435456,
  KAr = 15728640,
  br = 12582912,
  ql = 1048576,
  sr = 20971520,
  Zt = 256,
  x1n = 512,
  Xi = /\b(manifest|mode)\b/;
function an(e) {
  if (TOe.has(e.contentType))
    return typeof e.content === "string" ? e.content : e.content.toString("utf8");
  return (typeof e.content === "string" ? Buffer.from(e.content, "utf8") : e.content).toString(
    "base64"
  );
}
function Gs(e) {
  let n = (e.thumbnail !== void 0 ? 1 : 0) + (e.thumbnailDark !== void 0 ? 1 : 0);
  return n > 0 && _J() ? { thumbnails: n } : {};
}
function Ji(e) {
  return e !== void 0 && _J() ? Math.ceil(e.length / 3) * 4 : 0;
}
function Xl(e) {
  return typeof e.content === "string" ? Buffer.byteLength(e.content, "utf8") : e.content.length;
}
function Ot(e) {
  return Buffer.byteLength(_(e), "utf8") - 2;
}
function Jl(e, n) {
  let r = Object.create(null),
    s = Object.keys(e);
  if (s.length === 0) return;
  for (let a of s) {
    let h = e[a],
      b = n.get(a);
    if (b === void 0 || h === void 0) return;
    if (h === null) {
      if (b === null) return;
      r[a] = { delete: !0, ifMatch: b };
      continue;
    }
    if (!("contentType" in h) || h.live !== void 0 || h.reseed !== void 0) return;
    r[a] = { ...h, ifMatch: b };
  }
  return r;
}
var Zl = /unknown field "(live|reseed)"/,
  Ql = /manifest must not be empty/;
function Cn(e, n, r) {
  let s = (w) => ({ kind: "files_invalid", msg: w }),
    a = (w) => ({ kind: "too_large", msg: w });
  if (n.length + r.length + (e === null ? 0 : 1) > Zt)
    return s(
      `This publish lists ${n.length} ${I(n.length, "file")}${r.length > 0 ? ` and ${r.length} ${I(r.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Zt} entries in one publish. Nothing was published: send at most ${Zt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${x1n} in all.`
    );
  let b = new Set(["index.html"]);
  for (let w of r) {
    if (!w || w === "index.html")
      return s(
        w
          ? `"index.html" is the page itself and can't be removed. Drop that entry.`
          : "A removal in `files` has an empty path. Name the published path to remove."
      );
    if (b.has(w)) return s(`${_(w)} is listed more than once in \`files\`. List each path once.`);
    b.add(w);
  }
  let y = e === null ? 0 : Buffer.byteLength(e, "utf8");
  for (let w of n) {
    if (!w.path || w.path === "index.html")
      return s(
        w.path
          ? e === null
            ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here`
            : 'files must not contain "index.html" \u2014 the page argument is the index'
          : "every file needs a non-empty path"
      );
    if (b.has(w.path))
      return s(`${_(w.path)} is listed more than once in \`files\`. List each path once.`);
    if ((b.add(w.path), typeof w.content === "string" && !TOe.has(w.contentType)))
      return s(
        `file ${_(w.path)}: contentType ${_(w.contentType)} ` +
          "is binary \u2014 pass its content as a Buffer (raw bytes), not a string"
      );
    let x = TOe.has(w.contentType),
      P = Xl(w),
      R = x ? Dm : KAr;
    if (P > R)
      return a(
        `file ${_(w.path)} is ${Math.ceil(P / 1024 / 1024)}MB (per-file max ${R / 1024 / 1024}MB${x ? "" : " for binary files, which must fit an upload request base64-encoded"})`
      );
    if (x) {
      let j = typeof w.content === "string" ? w.content : w.content.toString("utf8");
      if (typeof w.content !== "string" && !Buffer.from(j, "utf8").equals(w.content))
        return s(
          `file ${_(w.path)}: contentType ${_(w.contentType)} ` +
            "is a text type but the Buffer is not valid UTF-8 \u2014 fix the " +
            "encoding, or use a binary contentType"
        );
      let H = j.indexOf("\uFFFD");
      if (H !== -1 || !Ad(j))
        return s(
          `file ${_(w.path)} ` +
            (H !== -1
              ? `has the replacement character U+FFFD at ${bn(j, H)}`
              : "holds an unpaired surrogate (half of a split character)") +
            " \u2014 replace it with the intended text" +
            (w.contentType === "text/html"
              ? " (in HTML, write an intended U+FFFD as &#xFFFD;)"
              : "")
        );
    }
    if (x && P > sr / 6) {
      let j = Ot(an(w));
      if (j > sr)
        return a(
          `file ${_(w.path)} is ${Math.ceil(j / 1024 / 1024)}MB JSON-encoded on the wire (per-request max ${sr / 1024 / 1024}MB) \u2014 ` +
            "heavily escaped text (quotes, backslashes, control characters) inflates when JSON-encoded; split or shrink the file"
        );
    }
    y += P;
  }
  if (y > bJ)
    return a(
      `total content is ${Math.ceil(y / 1024 / 1024)}MB \u2014 one publish may send at most ${bJ / 1024 / 1024}MB. Nothing was published: send part of the files now and the rest with another publish to the same url (files left out of a later publish are kept; a version may total ${MHt / 1024 / 1024}MB).`
    );
  return null;
}
var Fr =
  "copying files from another artifact is not enabled for this account \u2014 nothing was published; publish with local files instead";
function Mr(e, n, r, s) {
  if (r.length === 0) return null;
  if (n.length + r.length + s.length + (e === null ? 0 : 1) > Zt)
    return `This publish lists ${n.length + r.length} ${I(n.length + r.length, "file")} (copies included)${s.length > 0 ? ` and ${s.length} ${I(s.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Zt} entries in one publish. Nothing was published: send at most ${Zt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${x1n} in all.`;
  let h = new Set(["index.html", ...n.map((y) => y.path), ...s]),
    b = new Set();
  for (let y of r) {
    if (!y.path || y.path === "index.html")
      return y.path
        ? e === null
          ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here`
          : 'files must not contain "index.html" \u2014 the page argument is the index'
        : "every file needs a non-empty path";
    if (h.has(y.path))
      return `${_(y.path)} is listed more than once in \`files\` (once as a copy from another artifact). List each path once.`;
    if ((h.add(y.path), !ar.test(y.from.slug) || !y.from.path))
      return `file ${_(y.path)}: its source must name an artifact and a published path`;
    if (y.from.path === "index.html")
      return `file ${_(y.path)}: another artifact's page (index.html) is not a copyable file \u2014 read it and publish your own content`;
    for (let w of [y.path, y.from.path]) {
      let x = $Y(w);
      if (x !== void 0 && Zpn.has(kU(x)))
        return `file ${_(y.path)}: an HTML or XML document cannot be copied from another artifact \u2014 read it with action "read_file" and publish it as your own file`;
    }
    b.add(`${y.from.slug}@${y.from.ver ?? ""}`);
  }
  if (b.size > PEe)
    return `files copy from ${b.size} source artifact versions; at most ${PEe} per publish`;
  return null;
}
async function nwo(e, n, r) {
  let s = Cr(e, "file");
  if (s !== null) return s.err;
  if (n.length > 0 && !k1e())
    return (m("artifact_publish", "copy_from_flag_off", { n_copied: n.length }), Fr);
  let a = Cn(null, e, [])?.msg ?? Mr(null, e, n, []);
  if (a !== null || r === void 0) return a;
  return (await Nr(e, await Pn(), 0, "file"))?.err ?? null;
}
async function rwo(e, n) {
  if (Zc() !== null)
    return O(
      "publishing to an Artifact created from an Artifact type is not available in eval stub mode"
    );
  let r = n.copiedFiles ?? [];
  if (!(Z().frozenArtifactTypes?.typesOn ?? wL())) {
    let y = n.removeFiles ?? [];
    return (
      m("artifact_publish", "multifile_flag_off", {
        n_files: e.length + r.length,
        n_removed: y.length
      }),
      O(
        "This artifact was created from an artifact type, so it takes supporting files only, and " +
          (y.length > 0
            ? "its files can't be changed from this session. Nothing was published or removed; the artifact is unchanged."
            : "supporting files can't be published from this session. Nothing was published; the artifact is unchanged.")
      )
    );
  }
  if (r.length > 0 && !k1e())
    return (m("artifact_publish", "copy_from_flag_off", { n_copied: r.length }), O(Fr));
  let a = Cr(e, "file");
  if (a !== null) return a;
  if (n.verifyWorkshopHtml !== void 0) {
    let y = await Nr(e, await Pn(), 0, "file");
    if (y !== null) return y;
  }
  let h = await dn({
    slug: n.slug,
    hostGrant: ctt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: n.signal,
    credentials: n.credentials,
    lane: "files"
  });
  if (!h.ok) return O(h.err);
  let b = {
    slug: n.slug,
    title: n.title,
    favicon: n.favicon,
    ...(n.label !== void 0 && { label: n.label }),
    ...(n.note !== void 0 && { note: n.note }),
    ...(n.deadline !== void 0 && { deadline: n.deadline }),
    ...(n.requestId !== void 0 && { requestId: n.requestId }),
    ...(n.description !== void 0 && { description: n.description }),
    ...(n.publishContext !== void 0 && { publishContext: n.publishContext }),
    ...(n.originMetadata !== void 0 && { originMetadata: n.originMetadata }),
    ...(n.autoEditAttribution && { autoEditAttribution: n.autoEditAttribution })
  };
  return HAr(n.ownPublishes, n.slug, () =>
    vs(
      Lr(
        null,
        e,
        r,
        n.removeFiles ?? [],
        b,
        {},
        {
          baseVersion: n.baseVersion,
          force: n.force,
          ownPublishes: n.ownPublishes,
          tele: {
            t0: performance.now(),
            pageBytes: 0,
            lane: "inline",
            isRedeploy: !0,
            hasCaps: !1,
            template: "plain",
            forced: n.force,
            ...(n.baseRebase !== void 0 && { baseRebase: n.baseRebase })
          },
          ...(n.copiedCrossOrgOk === !0 && { copiedCrossOrgOk: !0 }),
          ...(n.preconditions !== void 0 && { preconditions: n.preconditions }),
          onRetry: n.onRetry,
          signal: n.signal,
          credentials: n.credentials
        }
      ),
      n.slug,
      n.credentials,
      n.signal
    )
  );
}
async function owo(e) {
  if (Zc() !== null) return O("invalid publish options");
  if (!wL())
    return (
      m("artifact_publish", "multifile_flag_off", { n_files: 0, n_removed: 0 }),
      O("invalid publish options")
    );
  if (![...e.base.values()].some((s) => s.live === !0)) return O("invalid publish options");
  let n = await dn({
    slug: e.slug,
    hostGrant: ctt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
  if (!n.ok) return O(n.err);
  let r = {
    slug: e.slug,
    title: e.title,
    favicon: e.favicon,
    ...(e.label !== void 0 && { label: e.label }),
    ...(e.deadline !== void 0 && { deadline: e.deadline }),
    ...(e.requestId !== void 0 && { requestId: e.requestId }),
    ...(e.publishContext !== void 0 && { publishContext: e.publishContext })
  };
  return HAr(e.ownPublishes, e.slug, () =>
    Lr(
      null,
      [],
      [],
      [],
      r,
      {},
      {
        baseVersion: e.baseVersion,
        force: !1,
        ownPublishes: e.ownPublishes,
        tele: {
          t0: performance.now(),
          pageBytes: 0,
          lane: "inline",
          isRedeploy: !0,
          hasCaps: !1,
          template: "plain",
          forced: !1,
          liveFilesOn: !0
        },
        liveFiles: { detach: [], base: e.base },
        onRetry: e.onRetry,
        signal: e.signal,
        credentials: e.credentials
      }
    )
  );
}
async function Lr(e, n, r, s, a, h, b) {
  let { baseVersion: y, force: w, tele: x, onRetry: P, signal: R, credentials: j } = b,
    H = b.relayOnly,
    q = b.copiedCrossOrgOk === !0,
    D = b.liveFiles,
    K = D?.detach ?? [],
    C = {
      page_bytes: x.pageBytes,
      lane: c(x.lane),
      n_files: n.length + r.length,
      n_copied: r.length,
      n_removed: s.length,
      forced: x.forced,
      template: c(x.template),
      is_redeploy: x.isRedeploy,
      has_base_version: y !== void 0,
      reserved: !1,
      ...Gs(a),
      ...(x.baseRebase !== void 0 && { base_rebase: c(x.baseRebase) })
    },
    U = (S) => (m("artifact_publish", "files_invalid", C), O(S)),
    N = (S) => (m("artifact_publish", "too_large", C), O(S)),
    ie = e === null || (a.slug !== void 0 && y !== void 0) ? "patch" : "replace";
  if (s.length > 0 && ie === "replace")
    return U(
      a.slug === void 0
        ? "A `null` entry in `files` removes a file from an existing artifact, and a first publish has nothing to remove, so nothing was published. Drop the `null` entries."
        : "A removal applies to the artifact's current version, and this publish didn't name that version (`baseVersion`), so nothing was published. Publish again with the version named, or without the `null` entries."
    );
  if (D !== void 0 && a.slug !== void 0 && ie === "replace") return U("invalid publish options");
  if (D?.page?.reseed === !0 && D.page.live !== void 0) return U("invalid publish options");
  let ce =
    K.length > 0 ||
    D?.page?.reseed === !0 ||
    D?.page?.live === !1 ||
    n.some((S) => S.reseed === !0 || S.live === !1);
  if (ce && ie === "replace") return U("invalid publish options");
  for (let S of n) {
    if (S.reseed === !0 && S.live !== void 0) return U("invalid publish options");
    if ((S.live === !0 || S.reseed === !0) && !V6s.has(kU(S.contentType)))
      return U("invalid publish options");
    let Q = D?.base?.get(S.path);
    if (D?.base !== void 0 && Q?.live !== !0 && (S.reseed === !0 || S.live === !1))
      return U("invalid publish options");
  }
  for (let S of K)
    if (D?.base !== void 0 && D.base.get(S)?.live !== !0) return U("invalid publish options");
  if (
    D?.base !== void 0 &&
    D.base.get("index.html")?.live !== !0 &&
    (D.page?.reseed === !0 || D.page?.live === !1)
  )
    return U("invalid publish options");
  for (let S of s) if (D?.base?.get(S)?.live === !0) return U("invalid publish options");
  let Y = Cn(e, n, [...s, ...K]);
  if (Y !== null) return Y.kind === "too_large" ? N(Y.msg) : U(Y.msg);
  let be = Mr(e, n, r, [...s, ...K]);
  if (be !== null) return U(be);
  for (let S of r) if (D?.base?.get(S.path)?.live === !0) return U("invalid publish options");
  let Be = (S, Q) =>
      ie === "patch" && D?.base?.get(S)?.live === !0 && Q.reseed !== !0 && Q.live !== !1,
    he =
      ce ||
      D?.page?.live === !0 ||
      n.some((S) => S.live === !0) ||
      [...(D?.base?.values() ?? [])].some((S) => S.live),
    ut = ie === "patch" && !w && b.preconditions === void 0 && (e !== null || he),
    ke = (S, Q, E) => {
      let J = ut ? D?.base?.get(S) : void 0;
      return (
        J !== void 0 && !J.live && J.sha256 !== void 0 && J.contentType === E && J.sha256 === et(Q)
      );
    },
    Te = [],
    z = D?.page ?? {},
    Et = e !== null && z.live === !1,
    Ze = Et ? ["index.html", ...K] : K,
    Oe;
  if (Be("index.html", z)) Te.push("index.html");
  else if (
    e !== null &&
    !Et &&
    !(he && z.live === void 0 && z.reseed !== !0 && ke("index.html", e, "text/html"))
  )
    Oe = {
      content: e,
      contentType: "text/html",
      ...(z.live !== void 0 && { live: z.live }),
      ...(z.reseed === !0 && { reseed: !0 })
    };
  let Ne = Object.create(null);
  if (Oe !== void 0) Ne["index.html"] = Oe;
  let He = [],
    Ft = Oe?.content !== void 0 ? Ot(Oe.content) : 0,
    We = Ji(a.thumbnail) + Ji(a.thumbnailDark),
    Qe = br - Ft - We,
    Ie = (S) => !Be(S.path, S) && (S.live === !0 || S.reseed === !0 || S.live === !1),
    ze = Object.create(null);
  for (let S of n.filter(Ie)) {
    let Q = an(S),
      E = Ot(Q);
    if (E > Qe) {
      let J = br - Ft - Qe;
      return N("file too large");
    }
    ((Qe -= E),
      (ze[S.path] = {
        content: Q,
        contentType: S.contentType,
        ...(S.live !== void 0 && { live: S.live }),
        ...(S.reseed === !0 && { reseed: !0 })
      }),
      (Ne[S.path] = ze[S.path]));
  }
  let tt = [],
    Fe = 0;
  for (let S of n) {
    if (Ie(S)) continue;
    if (Be(S.path, S)) {
      Te.push(S.path);
      continue;
    }
    if (S.live === void 0 && ke(S.path, S.content, S.contentType)) {
      Fe += 1;
      continue;
    }
    tt.push(S);
  }
  let Ye = 0;
  for (let S of tt) {
    let Q = an(S),
      E = Ot(Q);
    if (E <= Qe) ((Qe -= E), (Ye += E), (Ne[S.path] = { content: Q, contentType: S.contentType }));
    else {
      let J = et(S.content);
      (He.push({ f: S, sha: J, wire: Q }),
        (Ne[S.path] = { sha256: J, contentType: S.contentType }));
    }
  }
  for (let S of s) Ne[S] = null;
  for (let S of Ze) Ne[S] = { live: !1 };
  let Me = {
      liveKey:
        Ze.length > 0 || Object.keys(ze).length > 0 || Oe?.live !== void 0 || Oe?.reseed === !0,
      emptyPatch: he && Object.keys(Ne).length === 0 && r.length === 0,
      ldx: !1
    },
    Ht,
    ft = (S) => (Ht = S),
    At = Is(C),
    se = !1,
    we = (S) =>
      Ws(
        (Q) =>
          hr(Ds(Q, a), S, j, ft, At, Q, H, R).then(
            (E) => ((se = !0), E),
            (E) => {
              if (!(E instanceof Je)) se = !0;
              throw E;
            }
          ),
        P,
        R,
        C,
        !1,
        typeof S.slug === "string",
        H !== void 0 && a.slug === void 0 && !se
      ),
    mt = !1,
    Mt = (S) => {
      let Q = ie === "patch" && !w && b.preconditions !== void 0 ? Jl(S, b.preconditions) : void 0;
      return ((mt = Q !== void 0), Q ?? S);
    },
    Pe = { ...cs(a), ...$Ht(), ...QAr(), ...h },
    nt = { deadline: !1, icon: !1, request_id: !1 },
    bt = async (S) => {
      let Q = await we(S);
      for (let E = Rn(a, Q); E !== void 0 && S[E] !== void 0; E = Rn(a, Q)) {
        (f("artifact_publish", `${E}_rejected`, C),
          t(`[artifact] ${E} refused upstream \u2014 retrying without it`),
          delete Pe[E],
          (a = Ys(a, E)),
          (nt[E] = !0));
        let { [E]: J, ...W } = S;
        ((S = W), (Q = await we(S)));
      }
      return Q;
    },
    un = 15728640,
    zt = [];
  {
    let S = [],
      Q = 0;
    for (let E of He) {
      let J = Ot(E.wire);
      if (S.length > 0 && Q + J > un) (zt.push(S), (S = []), (Q = 0));
      (S.push(E), (Q += J));
    }
    if (S.length > 0) zt.push(S);
  }
  let it = async (S) => {
      let Q = Fs(S);
      if (Q === void 0) return !1;
      if ((await X(Q, R), R?.aborted)) return (t("[artifact] 429 retry cancelled by user"), !1);
      return !0;
    },
    st = (S) => {
      let Q = S.fromFrame && S.status === 429 ? Bt(S.data) : void 0;
      if (Q) m("artifact_publish", "publish_cap_reached", { ...C, cap_type: c(Q.capType) });
      return Q;
    },
    Ue = r.map((S) => ({ c: S })),
    Ge = [],
    rt = [],
    at = { askedToLeaveOut: !1 },
    _t = [],
    Vt = (S) =>
      "c" in S
        ? {
            path: S.c.path,
            from: {
              slug: S.c.from.slug,
              path: S.c.from.path,
              ...(S.c.from.ver !== void 0 && { ver: S.c.from.ver })
            }
          }
        : { path: S.f.path, content: S.wire, contentType: S.f.contentType },
    Qt = async (S, Q) => {
      let E = Q.some((Ce) => "c" in Ce),
        J = q && E,
        W = E ? Oi() : {},
        ve = () => ({ slug: S, ...(J && { cross_org_ok: !0 }), ...W, files: Q.map(Vt) }),
        Le = () => hr("/api/frame/upload", ve(), j, ft, At, {}, H, R),
        Se = async () => {
          let Ce = await vn(Le);
          return Ce.ok &&
            Ce.fromFrame &&
            Ce.status === 429 &&
            Bt(Ce.data) === void 0 &&
            (await it(Ce.response?.headers?.["retry-after"]))
            ? vn(Le)
            : Ce;
        },
        fe = await Se(),
        qe =
          "leave_out_missing" in W && fe.ok && fe.fromFrame && fe.status === 400
            ? Ni(fe.data, ve())
            : void 0;
      if (qe !== void 0 && !R?.aborted) {
        if (qe === "named") (er(), f("artifact_publish", "copy_leave_out_unsupported", C));
        if (
          ((W = {}),
          (fe = await Se()),
          qe === "unnamed" && fe.ok && fe.fromFrame && Fi(fe.status, fe.data))
        )
          (er(), f("artifact_publish", "copy_leave_out_unsupported", C));
      }
      if (E) at.askedToLeaveOut = "leave_out_missing" in W;
      return fe;
    },
    It = (S, Q, E) => {
      if (Q) t(`[artifact] manifest publish refused (HTTP ${S}): ${MT(Q)}`);
      let J = E?.maybeGone ? ", or the artifact no longer exists or isn't yours to update" : "";
      if (s.length > 0)
        return O(
          `The server didn't accept this update's file changes (HTTP ${S})${J}. Nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting \`files\`) would update the page but can't remove a file.${E?.debris ?? ""}`
        );
      let W = E?.debris
        ? " This publish didn't finish."
        : a.slug !== void 0
          ? " Nothing was published; the artifact is unchanged."
          : " Nothing was published.";
      return O(
        `The server didn't accept this publish's supporting files (HTTP ${S})${J}.${W} Publish the page as a single file instead: inline what it needs and omit \`files\`.${E?.debris ?? ""}`
      );
    },
    le = "",
    pt,
    Rt = (S) => {
      ((pt = S),
        (C.reserved = !0),
        (le = ` (A slug was reserved for it: publish again to slug ${S} rather than publishing fresh.)`),
        b.onReserved?.(S));
    };
  if (a.slug === void 0 && b.reservedSlug !== void 0) Rt(b.reservedSlug);
  let ot = (S) => S.fromFrame && oa(S.status, S.data),
    kt = (S, Q) => (
      m("artifact_publish", "rate_limited", { ...C, refused_status: S.status, ...ra(S.data) }),
      {
        ...O(
          aa({
            retryAfter: S.response?.headers?.["retry-after"],
            reservedSlug: pt,
            ...(Q !== void 0 && { refusedStep: Q })
          })
        ),
        transient: "rate_limited"
      }
    ),
    De = () => O(`publish cancelled \u2014 nothing more was sent.${le}`);
  try {
    let S = a.slug ?? b.reservedSlug,
      Q,
      E,
      J = y,
      W = async (V, ee) => {
        let xe = {
            ...(V !== void 0 && { slug: V }),
            ...(ee.length > 0 && { shas: ee }),
            ...(V === void 0 && $Ht())
          },
          ae = {
            refreshOAuth: !0,
            headers: Yc(),
            timeout: 30000,
            credentials: j,
            relayOnCredentialRefusal: !0
          },
          de = async () => {
            if (H === void 0) return du.post("/api/frame/deploy/prepare", xe, ae);
            return Or("/api/frame/deploy/prepare", xe, ae, H, R);
          },
          Ee = await vn(de);
        if (
          Ee.ok &&
          Ee.fromFrame &&
          Ee.status === 429 &&
          Bt(Ee.data) === void 0 &&
          (await it(Ee.response?.headers?.["retry-after"]))
        )
          Ee = await vn(de);
        return Ee;
      },
      ve = (V) => (typeof V?.slug === "string" && ar.test(V.slug) ? V.slug : void 0),
      Le = !1,
      Se = !1,
      fe = a.slug !== void 0 && !(ut && D?.base !== void 0),
      qe = He.length > 0 || Ue.length > 0 || (fe && Ye > ql);
    if (qe) {
      let V = tt.map((ae) => ({ f: ae, sha: et(ae.content), wire: an(ae) })),
        ee,
        xe = "";
      for (let ae = 0; ae < 2; ae++) {
        if (R?.aborted) return De();
        let de = await W(
          S,
          V.map((te) => te.sha)
        );
        if (R?.aborted) {
          let te = le === "" && S === void 0 && de.ok && de.status === 200 ? ve(de.data) : void 0;
          if (te !== void 0) Rt(te);
          return De();
        }
        if (!de.ok) {
          ee = {
            status: 0,
            why: de.reason === "no-auth" ? Oy(de.detail) : `preflight unavailable: ${de.reason}`
          };
          break;
        }
        if (de.status === 404) {
          if (SJ(de.data))
            return (
              m("artifact_publish", "prepare_not_found", C),
              {
                ...O(
                  "the server does not recognize this artifact for updating (it may no longer exist or may not be yours to update). The files were NOT published."
                ),
                ...(a.slug !== void 0 && { gone: !0 })
              }
            );
          ee = { status: 404, why: "the preflight route answered 404" };
          break;
        }
        let Ee = st(de);
        if (Ee)
          return O(
            le
              ? `${Ee.message} \u2014 this publish didn't finish; try again after the reset.${le}`
              : `${Ee.message} \u2014 nothing was published; try again after the reset.`
          );
        if (ot(de)) {
          if (Ue.length > 0 || He.length > 0 || Se)
            return kt(de, Ue.length > 0 ? vi(Ue.length) : void 0);
          (t("[artifact] preflight rate-limited \u2014 sending the one inline deploy instead"),
            (ee = { status: 429, why: "the preflight was rate-limited" }));
          break;
        }
        if (de.status !== 200) {
          ee = {
            status: de.status,
            why: de.fromFrame
              ? `preflight ${de.status}: ${MT(de.data)}`
              : `preflight relay HTTP ${de.status}`
          };
          break;
        }
        let Mn = ve(de.data),
          Ln = de.data?.missing;
        if (
          Mn === void 0 ||
          !Array.isArray(Ln) ||
          !Ln.every((te) => typeof te === "string" && /^[0-9a-f]{64}$/.test(te))
        ) {
          ee = { status: 200, why: "a malformed preflight answer" };
          break;
        }
        if (S !== void 0 && Mn !== S)
          return (
            m("artifact_publish", "prepare_slug_mismatch", C),
            O(
              "the server answered the upload preflight for a different " +
                "artifact \u2014 not publishing."
            )
          );
        if (((Se = !0), (S = Mn), a.slug === void 0)) Rt(S);
        let fa = new Set(Ln),
          pa = V.filter((te) => fa.has(te.sha)),
          In = [];
        {
          let te = [],
            ye = 0;
          for (let wt of pa) {
            let tn = Ot(wt.wire);
            if (te.length > 0 && ye + tn > un) (In.push(te), (te = []), (ye = 0));
            (te.push(wt), (ye += tn));
          }
          if (te.length > 0) In.push(te);
        }
        for (let te of In) {
          if (R?.aborted) return De();
          let ye = await Qt(S, te);
          if (!ye.ok)
            return (
              m("artifact_publish", ye.reason, C),
              O(
                ye.reason === "no-auth"
                  ? Oy(ye.detail) + le
                  : `upload unavailable: ${ye.reason}. The publish was NOT completed; retry publishing to slug ${S}.`
              )
            );
          if (ye.status !== 200) {
            let wt = st(ye);
            if (wt)
              return O(
                `${wt.message} \u2014 this publish didn't finish. ` +
                  `Publish again to slug ${S} after the reset.`
              );
            if (ot(ye)) return kt(ye);
            return (
              m(
                "artifact_publish",
                ye.fromFrame ? "prepare_upload_failed" : "prepare_upload_relay_error",
                { ...C, upload_status: ye.status }
              ),
              O(
                (ye.fromFrame
                  ? `file upload ${ye.status} after the preflight: ${MT(ye.data)}`
                  : `file upload failed after the preflight (relay HTTP ${ye.status})`) +
                  ` \u2014 the publish was NOT completed. Retry publishing to slug ${S}.`
              )
            );
          }
        }
        if (Ue.length > 0) {
          if (R?.aborted) return De();
          let te = await Qt(S, Ue);
          if (!te.ok)
            return (
              m("artifact_publish", te.reason, C),
              O(
                te.reason === "no-auth"
                  ? Oy(te.detail) + le
                  : `copying files from another artifact unavailable: ${te.reason}. The publish was NOT completed; retry publishing to slug ${S}.`
              )
            );
          if (te.status !== 200) {
            let pe = st(te);
            if (pe)
              return O(
                `${pe.message} \u2014 this publish didn't finish. Publish again to slug ${S} after the reset.`
              );
            if (ot(te))
              return kt(te, yi(Ue.map(({ c: qr }) => ({ path: qr.path, fromSlug: qr.from.slug }))));
            let lt = q && te.fromFrame && te.status === 400 && c8n(te.data, "cross_org_ok");
            m(
              "artifact_publish",
              lt
                ? "copy_predates_cross_org"
                : te.fromFrame
                  ? "copy_upload_failed"
                  : "copy_upload_relay_error",
              { ...C, upload_status: te.status }
            );
            let Ae = MT(te.data),
              qt = /^files\[(\d+)\]: (.*)$/.exec(Ae),
              ct = qt !== null ? Ue[Number(qt[1])]?.c : void 0,
              Gr = qt !== null ? qt[2] : Ae,
              Hn = te.fromFrame && ct !== void 0 && /not found/.test(Gr) ? ct : void 0,
              ga =
                " \u2014 the source artifact doesn't exist, this account can't open it, or it can't be copied from (all three get the same answer)";
            if (lt)
              return O(
                "copying files from another organization's artifact isn't available on this server yet, so nothing was published. Don't retry the copy. Publish without the copied file instead, or tell the user cross-organization copies aren't supported yet."
              );
            return {
              ...O(
                (te.fromFrame
                  ? ct !== void 0
                    ? `copying ${_(ct.path)} from artifact ${ct.from.slug} (${_(ct.from.path)}) was refused (${te.status}: ${Gr})${Hn !== void 0 ? ga : ""}`
                    : te.status === 404
                      ? "the server does not recognize this artifact for staging copied files (it may no longer exist, may not be yours to update, or copying is not enabled on this path)"
                      : `staging the copied files was refused (${te.status}: ${Ae})`
                  : `staging the copied files failed (relay HTTP ${te.status})`) +
                  ` \u2014 the publish was NOT completed. Retry publishing to slug ${S} once the cause is fixed.`
              ),
              ...(Hn !== void 0 && { copySourceNotFound: Hn })
            };
          }
          let ye = () =>
              O(
                `the server staged the copied files but its answer was incomplete, so nothing was published \u2014 retry publishing to slug ${S}.${le}`
              ),
            wt = te.data?.files;
          if (!Array.isArray(wt) || wt.length !== Ue.length)
            return (m("artifact_publish", "copy_echo_malformed", C), ye());
          let tn = [],
            Yt = [];
          for (let [pe, lt] of Ue.entries()) {
            let Ae = wt[pe];
            if (Ae?.leftOut !== void 0) {
              if (
                !at.askedToLeaveOut ||
                typeof Ae.leftOut !== "string" ||
                Ae.leftOut === "" ||
                Ae.sha256 !== void 0 ||
                Ae.size !== void 0 ||
                Ae.contentType !== void 0 ||
                (Ae.path !== void 0 && Ae.path !== lt.c.path)
              )
                return (m("artifact_publish", "copy_echo_malformed", C), ye());
              Yt.push({ file: lt.c, why: Ae.leftOut });
              continue;
            }
            if (
              typeof Ae?.sha256 !== "string" ||
              !/^[0-9a-f]{64}$/.test(Ae.sha256) ||
              typeof Ae.contentType !== "string" ||
              !Tn.has(Ae.contentType)
            )
              return (m("artifact_publish", "copy_echo_malformed", C), ye());
            ((lt.sha = Ae.sha256), (lt.contentType = Ae.contentType), tn.push(lt));
          }
          ((Ge = tn), (rt = Yt));
          let ha = a.slug === void 0 && b.reservedSlug === void 0;
          if (Yt.length > 0 && !Mi({ mode: ie, isFirstPublish: ha, removedCount: s.length })) {
            let pe = { ...C, n_left_out: Yt.length };
            if (s.length > 0)
              return (
                m("artifact_publish", "copy_left_out_removes_files", pe),
                O(yn(Yt, "removes_files") + le)
              );
            return (
              m("artifact_publish", "copy_left_out_replaces_files", pe),
              O(yn(Yt, "replaces_files") + le)
            );
          }
          if (
            ((_t = Ge.filter((pe) => G1o(pe.contentType ?? "")).map(
              (pe) => `${pe.c.path} (${pe.contentType})`
            )),
            b.workshopSurface && _t.length > 0)
          )
            return (
              m("artifact_publish", "copy_refused_sidecar", C),
              O(
                `workshop pages cannot ship renderable or executable sidecar files \u2014 each is a URL that bypasses the publish-time verifier: ${c7(_t.join(", "))} (copied). Nothing was published.${le}`
              )
            );
          let Dn = Ge.filter((pe) => Zpn.has(kU(pe.contentType ?? "")));
          if (Dn.length > 0)
            return (
              m("artifact_publish", "copy_refused_document", C),
              O(
                `copied file ${_(Dn[0].c.path)} is ${Dn[0].contentType}: a page or XML document cannot be copied from another artifact into a publish (its content must pass this tool's checks, which a server-side copy skips) \u2014 read it with action "read_file" and publish it from the local copy instead. Nothing was published.${le}`
              )
            );
          let hn = (pe) => $Y(pe) === Sjr,
            Wr = (pe) => kU(pe ?? "") === Sjr,
            Gt = Ge.filter((pe) => !Wr(pe.contentType) && (hn(pe.c.path) || hn(pe.c.from.path)));
          if (Gt.length > 0) {
            m("artifact_publish", "copy_refused_svg_mismatch", C);
            let pe = Gt.slice(0, 20).map((ct) => `${_(ct.c.path)} (${ct.contentType})`),
              lt = Gt.length - pe.length,
              Ae = Gt.length === 1,
              qt = Gt.every((ct) => !hn(ct.c.from.path))
                ? `copy ${Ae ? "it" : "each"} to a path that does not end .svg, or `
                : "";
            return O(
              `copied ${I(Gt.length, "file")} ${pe.join(", ")}${lt > 0 ? ` and ${lt} more` : ""}: a file copied to or from a name ending .svg must be stored as an SVG image \u2014 ${qt}read ${Ae ? "it" : "each"} with action "read_file" and publish it from the local copy instead. Nothing was published.${le}`
            );
          }
          let Bn = Ge.find((pe) => Wr(pe.contentType) && !hn(pe.c.path));
          if (Bn !== void 0)
            return (
              m("artifact_publish", "copy_refused_svg_mismatch", C),
              O(
                `copied file ${_(Bn.c.path)} is ${Bn.contentType}: an SVG image is copied only to a name ending .svg \u2014 copy it to a path ending .svg, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${le}`
              )
            );
          let Yr = (pe) => emn.has(kU($Y(pe) ?? "")),
            jn =
              e === null
                ? Ge.find(
                    (pe) =>
                      emn.has(kU(pe.contentType ?? "")) && !Yr(pe.c.path) && !Yr(pe.c.from.path)
                  )
                : void 0;
          if (jn !== void 0)
            return (
              m("artifact_publish", "copy_refused_script", C),
              O(
                `copied file ${_(jn.c.path)} is ${jn.contentType}: a script its source stores under a name that does not say so cannot be copied into an artifact made from a type (the approval counted it as data) \u2014 copy it to a path with a script extension, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${le}`
              )
            );
        }
        if (R?.aborted) return De();
        let Ct = Object.create(null);
        if (Oe !== void 0) Ct["index.html"] = Oe;
        for (let [te, ye] of Object.entries(ze)) Ct[te] = ye;
        for (let te of V) Ct[te.f.path] = { sha256: te.sha, contentType: te.f.contentType };
        for (let te of Ge) Ct[te.c.path] = { sha256: te.sha, contentType: te.contentType };
        for (let te of s) Ct[te] = null;
        for (let te of Ze) Ct[te] = { live: !1 };
        if (rt.length > 0 && Object.keys(Ct).length === 0)
          return (
            m("artifact_publish", "copy_left_out_no_other_file", { ...C, n_left_out: rt.length }),
            O(yn(rt, "no_other_file") + le)
          );
        let Xe = await bt({
            ...Pe,
            slug: S,
            ...(w && { force: !0 }),
            ...(y && { baseVersion: y }),
            manifest: Mt(Ct),
            mode: ie
          }),
          Vr = Xe.ok ? dt(Xe.data) : void 0;
        if (
          Xe.ok &&
          Xe.fromFrame &&
          Xe.status === 422 &&
          ae === 0 &&
          (Vr === "content_pending" ||
            (Vr === void 0 &&
              !Sr(Xe.data) &&
              !sa.test(Xt(Xe.data, 300)) &&
              !(Me.liveKey && typeof Xe.data === "string")))
        ) {
          xe = MT(Xe.data);
          continue;
        }
        if (Xe.ok && Xe.status === 200 && !Xe.data?.version)
          return (m("artifact_publish", "prepare_no_version", C), O(Jt() + le));
        ((E = Xe), (Le = !0));
        break;
      }
      if (Ue.length > 0 && !Le && !Se)
        return (
          m("artifact_publish", "copy_no_preflight", { ...C, prepare_status: ee?.status ?? 0 }),
          O(
            `copying files from another artifact needs the upload preflight, which was unavailable here (${ee?.why ?? "no answer"}) \u2014 nothing was published.${le}`
          )
        );
      if (Se && !Le)
        return (
          m("artifact_publish", "prepare_rerun_failed", { ...C, prepare_status: ee?.status ?? 0 }),
          O(
            `the deploy was refused (422: ${xe}), and re-checking with the server before re-sending failed (${ee?.why ?? "no answer"}) \u2014 the publish was NOT ` +
              `completed. Retry publishing to slug ${S}.`
          )
        );
    } else if (S === void 0) {
      if (R?.aborted) return De();
      let V,
        ee = "no answer",
        xe,
        ae = !1;
      try {
        V = await W(void 0, []);
      } catch (Ee) {
        if (Ee instanceof gt) throw Ee;
        ((ae = Ee instanceof Je),
          (ee = MT(Ee instanceof Error ? Ee.message : String(Ee))),
          (xe = pr(Ee, x.t0)));
      }
      let de = V?.ok && V.status === 200 ? ve(V.data) : void 0;
      if (de !== void 0) ((S = de), Rt(de));
      if (R?.aborted) return De();
      if (de === void 0) {
        let Ee = V?.ok ? st(V) : void 0;
        if (Ee) return O(`${Ee.message} \u2014 nothing was published; try again after the reset.`);
        if (!ae && (!V?.ok || (V.status !== 403 && V.status !== 404)))
          f("artifact_publish", "reserve_unavailable", {
            ...C,
            reserve_status: V?.ok ? V.status : 0,
            ...xe
          });
        t(
          `[artifact] could not reserve a slug before publishing (${V === void 0 ? ee : V.ok ? `HTTP ${V.status}` : V.reason}); publishing without one \u2014 the server assigns it`
        );
      }
    }
    let Ce,
      Dt = [],
      Pt = {};
    if (!Le && He.length > 0 && !S) {
      let V = Object.create(null);
      for (let [ae, de] of Object.entries(Ne))
        if (de !== null && "content" in de && de.content !== void 0) V[ae] = de;
      if (R?.aborted) return De();
      let ee = await bt({ ...Pe, ...(w && { force: !0 }), manifest: V, mode: "replace" });
      if (!ee.ok)
        return (m("artifact_publish", ee.reason, C), O(`publish unavailable: ${ee.reason}`));
      if (!ee.fromFrame)
        return (
          m("artifact_publish", "relay_error", { ...C, deploy_status: ee.status }),
          O(wr(ee.status))
        );
      if (ee.status === 400 || ee.status === 404) {
        let ae = f$(ee.data);
        if (ee.status === 400 && is(ae, Me))
          return (m("artifact_publish", "live_files_unsupported", C), O(rs(ae, Me.emptyPatch)));
        if (ee.status === 400 && Ar(ae, Me))
          return (m("artifact_publish", "ldx_unsupported", C), O(Er(ae)));
        if (ee.status === 404 || (pye.test(ae) && Xi.test(ae)))
          return (m("artifact_publish", "multifile_unsupported", C), It(ee.status, ae));
      }
      if (ee.status !== 200) {
        let ae = xr(
          ee.status,
          ee.data,
          x.isRedeploy,
          x.echoedPin !== void 0 ? { pin: x.echoedPin, declaredCaps: x.hasCaps } : void 0,
          x.liveFilesOn === !0,
          x.sent,
          { retryAfter: ee.response?.headers?.["retry-after"] }
        );
        if (ae.code !== "thumbnail_rejected")
          m("artifact_publish", ae.code ?? "deploy_failed", {
            ...C,
            deploy_status: ee.status,
            ...ae.extra
          });
        return vr(ae, `deploy ${ee.status}: ${MT(ee.data)}`);
      }
      let xe = _r().safeParse(ee.data);
      if (!xe.success) return (m("artifact_publish", "deploy_incomplete", C), O(Jt()));
      ((S = xe.data.slug),
        (Q = xe.data.version),
        (Ce = ur(ee.data)),
        (Dt = dr(ee.data)),
        (Pt = {
          contract: xe.data.contract,
          preferredContract: xe.data.preferredContract,
          capabilities: xe.data.capabilities
        }),
        CHt(b.ownPublishes, S, Q, { merged: yr(ee.data) }),
        (le = ` (The artifact was created with its inline files: to add the remaining files, fix the problem and publish again to slug ${S}.)`));
    }
    if (!Le && He.length > 0) {
      if (S === void 0)
        return (
          m("artifact_publish", "deploy_incomplete", C),
          O("internal: no slug available for staged upload")
        );
      let V = new Set();
      for (let xe of zt) {
        if (R?.aborted) return De();
        let ae = await Qt(S, xe);
        if (!ae.ok)
          return (m("artifact_publish", ae.reason, C), O(`upload unavailable: ${ae.reason}.${le}`));
        if (ae.status === 404)
          return (
            m("artifact_publish", "multifile_unsupported", C),
            It(404, "", { maybeGone: a.slug !== void 0, debris: le })
          );
        if (ae.status !== 200) {
          let de = st(ae);
          if (de) return O(`${de.message} \u2014 try again after the reset.${le}`);
          if (ot(ae) && Q === void 0) return kt(ae);
          return (
            m("artifact_publish", ae.fromFrame ? "upload_failed" : "upload_relay_error", {
              ...C,
              upload_status: ae.status
            }),
            O(
              ae.fromFrame
                ? `file upload ${ae.status}: ${MT(ae.data)}.${le}`
                : `file upload failed (relay HTTP ${ae.status}).${le}`
            )
          );
        }
        for (let de of ae.data?.files ?? []) if (de.sha256) V.add(de.sha256);
      }
      let ee = He.filter((xe) => !V.has(xe.sha));
      if (ee.length > 0)
        return (
          m("artifact_publish", "upload_hash_mismatch", C),
          O(
            `file upload did not stage ${ee.length} file(s) under the ` +
              "expected content hash \u2014 not publishing a manifest that would " +
              `reference unstaged content.${le}`
          )
        );
    }
    if (!Le && He.length > 0 && Q !== void 0) {
      let V = Object.create(null);
      for (let ee of He) {
        let xe = { sha256: ee.sha, contentType: ee.f.contentType };
        ((Ne[ee.f.path] = xe), (V[ee.f.path] = xe));
      }
      if (R?.aborted) return De();
      ((J = Q), (E = await bt({ ...Pe, slug: S, manifest: V, mode: "patch", baseVersion: Q })));
    } else if (!Le) {
      if (R?.aborted) return De();
      E = await bt({
        ...Pe,
        ...(S && { slug: S }),
        ...(w && { force: !0 }),
        ...(y && { baseVersion: y }),
        manifest: Mt(Ne),
        mode: ie
      });
    }
    if (E === void 0)
      return (
        m("artifact_publish", "deploy_incomplete", C),
        O("internal: publish flow completed without a deploy")
      );
    if (!E.ok)
      return (
        m("artifact_publish", E.reason, C),
        O((E.reason === "no-auth" ? Oy(E.detail) : `publish unavailable: ${E.reason}`) + le)
      );
    if (!E.fromFrame)
      return (
        m("artifact_publish", "relay_error", { ...C, deploy_status: E.status }),
        O(wr(E.status) + le)
      );
    if (E.status === 400 || E.status === 404) {
      let V = f$(E.data);
      if (E.status === 400 && is(V, Me))
        return (m("artifact_publish", "live_files_unsupported", C), O(rs(V, Me.emptyPatch) + le));
      if (E.status === 400 && Ar(V, Me))
        return (m("artifact_publish", "ldx_unsupported", C), O(Er(V) + le));
      let ee = E.status === 404 && x.isRedeploy && SJ(E.data);
      if ((E.status === 404 && !ee) || (pye.test(V) && Xi.test(V)))
        return (
          m("artifact_publish", "multifile_unsupported", C),
          It(E.status, V, { maybeGone: E.status === 404 && a.slug !== void 0, debris: le })
        );
    }
    if ((y !== void 0 || Q !== void 0 || p1()) && E.status === 409) {
      let V =
        ta(E.data) ??
        (mt ? cc(E.data, new Set([...Object.keys(Ne), ...Ge.map((ee) => ee.c.path)])) : null);
      if (V)
        return (
          m("artifact_publish", "conflict", {
            ...C,
            ...(x.baseRebase !== void 0 && { if_match_sent: mt }),
            ...(V.paths !== void 0 && {
              conflict_reason: c("precondition_failed"),
              conflict_paths: V.paths.length
            })
          }),
          {
            url: null,
            slug: null,
            version: null,
            err: (V.paths !== void 0 ? oc(V, V.paths) : Qs(V)) + le,
            conflict: !0,
            conflictDetail: V
          }
        );
    }
    if (E.status !== 200) {
      let V = xr(
        E.status,
        E.data,
        x.isRedeploy,
        x.echoedPin !== void 0 ? { pin: x.echoedPin, declaredCaps: x.hasCaps } : void 0,
        x.liveFilesOn === !0,
        x.sent,
        {
          retryAfter: E.response?.headers?.["retry-after"],
          reservedSlug: pt,
          created: pt === void 0 && le !== ""
        }
      );
      if (V.code !== "thumbnail_rejected")
        m("artifact_publish", V.code ?? "deploy_failed", {
          ...C,
          deploy_status: E.status,
          ...V.extra
        });
      let ee = V.code === "path_is_live" ? ca(E.data) : void 0;
      return {
        ...vr(
          V,
          `deploy ${E.status}: ${MT(E.data)}`,
          V.code === "rate_limited" && pt !== void 0 ? "" : le
        ),
        ...(ee !== void 0 && { refusedLivePath: ee }),
        ...(a.slug === void 0 &&
          S !== void 0 &&
          Q !== void 0 && { created: { slug: S, version: Q } })
      };
    }
    let _e = _r().safeParse(E.data);
    if (!_e.success) return (m("artifact_publish", "deploy_incomplete", C), O(Jt() + le));
    let { slug: vt, version: en, read: fn, shared: pn, kind: ht } = _e.data;
    if (S && vt !== S) return (m("artifact_publish", "deploy_slug_mismatch", C), O(gr() + le));
    let $n = ws(E.data),
      Wt = $n?.map((V) => V.path),
      On = (Wt ?? []).filter((V) => (V === "index.html" ? Oe : ze[V])?.live === !0),
      Nn = (Wt ?? []).filter((V) => (V === "index.html" ? Oe : ze[V])?.reseed === !0),
      Dr = L([
        ...(rt.length > 0 ? [Li(rt)] : []),
        ...Dt,
        ...dr(E.data),
        ...Ss(On),
        ...pl(Nn),
        ...gl(Te.filter((V) => V !== "index.html")),
        ...(Et ? fl() : []),
        ...hl(
          K,
          Object.keys(ze).filter((V) => ze[V]?.live === !1)
        ),
        ...xs(
          Wt?.filter((V) => !Te.includes(V)),
          new Set([...Object.keys(Ne), ...Ge.map((V) => V.c.path)])
        )
      ]).slice(0, kn),
      da = Te.includes("index.html"),
      Br = ur(E.data) ?? Ce,
      Fn = Os(E.response?.headers?.[$s]),
      ua = Ns(E.response?.headers?.date),
      jr = qs(
        _e.data,
        w ? void 0 : J,
        new Set([...Object.keys(Ne), ...Ge.map((V) => V.c.path), ...(Wt ?? [])])
      );
    CHt(b.ownPublishes, vt, en, { merged: yr(E.data) });
    let Hr = Zs(_e.data),
      zr = {
        ...C,
        ...(r.length > 0 && { n_left_out: rt.length }),
        e2e_ms: Math.round(performance.now() - x.t0),
        is_redeploy: x.isRedeploy,
        has_caps: x.hasCaps,
        push_remaining_seen: Fn !== void 0,
        read_back_echoed: Hr.readBackEchoed === !0,
        staged_files: He.length,
        files_omitted: Fe,
        publish_path: c(Le ? "preflight" : qe ? "legacy" : "inline"),
        ...(x.baseRebase !== void 0 && { if_match_sent: mt }),
        ...Ks(jr.mergedOver)
      };
    if (rt.length > 0) f("artifact_publish", "copy_left_out", zr);
    else g("artifact_publish", zr);
    let Ur = e === null ? IHt(E.data) : void 0;
    return {
      url: Ag(vt),
      slug: vt,
      version: en,
      err: null,
      ...(Fn !== void 0 && { pushRemaining: Fn, pushResetAt: ua }),
      ...(b.workshopSurface && { workshopSurface: !0 }),
      ...(b.tele.workshopInfo && { workshop: b.tele.workshopInfo }),
      ...(_t.length > 0 && { refusedClassSidecarTypes: _t }),
      ...(rt.length > 0 && { copiedLeftOut: rt.map((V) => V.file) }),
      ...(fn !== void 0 && { read: fn }),
      ...(pn !== void 0 && { shared: pn }),
      ...Xs(_e.data, Pe.deadline !== void 0),
      ...jr,
      ...(nt.deadline && { deadlineDropped: !0 }),
      ...(nt.icon && { iconDropped: !0 }),
      ...Js(_e.data.contract !== void 0 ? _e.data : { ..._e.data, ...Pt }, h),
      ...Hr,
      ...(ht !== void 0 && { kind: ht }),
      ...(Dr.length > 0 && { warnings: Dr }),
      ...(Br !== void 0 && { embeds: Br }),
      ...(Ur !== void 0 && { manifestPaths: Ur }),
      ...(Wt !== void 0 && { livePaths: Wt }),
      ...($n !== void 0 && { liveDocs: $n }),
      ...(On.length > 0 && { bornLive: On }),
      ...(Nn.length > 0 && { reseeded: Nn }),
      ...(da && { pageCarriedLive: !0 })
    };
  } catch (S) {
    if (S instanceof Je) {
      if (!se && a.slug === void 0) return S instanceof gt ? Us() : zs(C);
      if (S instanceof gt)
        return O(xt("the publish was cancelled before a later request of it went out") + le);
      return (
        m("artifact_publish", "relay_only_unsent_after_deploy", C),
        O(xt("a later request could not go through the cloud session's gateway") + le)
      );
    }
    if (!Vs(S))
      m("artifact_publish", S instanceof jt ? "relay_request_error" : "request_error", {
        ...C,
        ...pr(S, x.t0),
        ...Ht
      });
    return O((S instanceof Error ? S.message : String(S)) + le);
  }
}
function Ag(e) {
  return new URL(t5r(e), _Ne() ?? rn().CLAUDE_AI_ORIGIN).toString();
}
var Wft = ["mine", "shared"];
function P1n(e) {
  return Wft.includes(e);
}
var jtn = ["mine", "shared", "all"],
  ec = p(() =>
    u({
      frames: T(oe()).nullable(),
      starsEnabled: M()
        .optional()
        .catch(void 0)
    })
  ),
  tc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function VAr(e, n) {
  let r = e === "" || (typeof e === "string" && att.test(e)) ? e : void 0,
    s = n === "" || (typeof n === "string" && OT.test(n)) ? n : void 0;
  return { read: n === void 0 || s !== void 0 ? r : void 0, shared: s };
}
var _r = p(() =>
  u({
    slug: o().regex(ar),
    version: o().regex(OT),
    read: oe().optional(),
    shared: oe().optional(),
    kind: o()
      .regex(att)
      .optional()
      .catch(void 0),
    contract: o()
      .regex(r9)
      .optional()
      .catch(void 0),
    preferredContract: o()
      .regex(r9)
      .optional()
      .catch(void 0),
    capabilities: me(o().max(64), oe())
      .optional()
      .catch(void 0),
    typeInstance: M()
      .optional()
      .catch(void 0),
    type: oe().optional(),
    ...nc(),
    ...rc()
  }).transform(({ read: e, shared: n, ...r }) => ({ ...r, ...VAr(e, n) }))
);
function nc() {
  return {
    seq: v()
      .int()
      .nonnegative()
      .optional()
      .catch(void 0),
    deadline: u({ until: v().int().positive().max(DHt) })
      .optional()
      .catch(void 0),
    unchanged: A(!0)
      .optional()
      .catch(void 0),
    replayed: A(!0)
      .optional()
      .catch(void 0)
  };
}
function rc() {
  return {
    appliedOver: o()
      .regex(OT)
      .optional()
      .catch(void 0),
    mergedFrom: o()
      .regex(OT)
      .optional()
      .catch(void 0),
    changed: T(
      u({
        path: o().min(1).max(PHt),
        sha256: o()
          .regex(/^[0-9a-f]{64}$/)
          .nullable()
      })
    )
      .max(2 * $tn)
      .optional()
      .catch(void 0)
  };
}
function yr(e) {
  if (typeof e !== "object" || e === null || !("mergedFrom" in e)) return !1;
  let { mergedFrom: n } = e;
  return typeof n === "string" ? n !== "" : n != null;
}
function qs(e, n, r) {
  let s = e.mergedFrom;
  if (s === void 0 || s !== n || s === e.version || s === e.appliedOver) return {};
  let a = e.changed?.filter((h) => !r.has(h.path));
  return {
    mergedOver: {
      base: s,
      ...(e.appliedOver !== void 0 && { live: e.appliedOver }),
      ...(a !== void 0 && { changed: a })
    }
  };
}
function Ks(e) {
  if (e === void 0) return {};
  return { merged_over: !0, ...(e.changed !== void 0 && { merged_changed: e.changed.length }) };
}
var DHt = 253402300799999;
function Xs(e, n) {
  return {
    ...(e.seq !== void 0 && { seq: e.seq }),
    ...(n && e.deadline !== void 0 && { deadline: { until: e.deadline.until } }),
    ...(e.unchanged && !e.replayed && { unchanged: !0 })
  };
}
function Js(e, n, r = !1) {
  let s = "contract" in n ? n.contract : void 0,
    a = e.contract ?? s,
    h = e.capabilities,
    b = uz(h),
    y = !("capabilities" in n) && b,
    w =
      e.contract !== void 0 && (b || DU(e.contract) !== null)
        ? {
            contract: e.contract,
            ...(h !== void 0 && {
              capabilities: h,
              ...(y && (r ? { declaredByRoute: !0 } : { carried: !0 }))
            })
          }
        : void 0;
  return {
    ...(a !== void 0 && { contract: a }),
    ...(e.preferredContract !== void 0 && { preferredContract: e.preferredContract }),
    ...(w !== void 0 && { stored: w })
  };
}
function Zs(e) {
  let n = e.typeInstance === !0 ? Bft(e.type) : void 0;
  return e.typeInstance === !1 || (n !== void 0 && (n.latest === void 0 || n.latest === n.current))
    ? { ...(n !== void 0 && { typeLock: n }), readBackEchoed: !0 }
    : {};
}
var ic = p(() =>
    u({
      slug: o().regex(ar),
      title: o().max(4000).optional(),
      favicon: oe().optional(),
      rel: o(),
      updatedAt: o()
        .regex(tc)
        .optional()
        .catch(void 0),
      softDeleted: M().optional(),
      starred: M()
        .optional()
        .catch(void 0)
    })
  ),
  Zi = NRe,
  sc = 4194304;
async function swo(e, n) {
  let { scope: r = "mine", pins: s = !1, signal: a, credentials: h } = n,
    b = r === "mine" ? void 0 : FAr({ credentials: h, ...(a && { signal: a }) }),
    y;
  for (let ce = 0; ; ce++) {
    try {
      y = await du.get(`/api/frame/frames?limit=${Zi}`, {
        refreshOAuth: !0,
        headers: Yc(),
        timeout: 15000,
        maxContentLength: sc,
        ...(a && { signal: a }),
        credentials: h
      });
    } catch (Y) {
      if (ce === 0 && !a?.aborted) {
        await X(300 + Math.random() * 500);
        continue;
      }
      if (!a?.aborted) m("artifact_list", "request_error", { wire: $me(Y) });
      return { err: `artifact listing failed: ${d(Y)}`, reason: "request_error" };
    }
    if (y.ok && y.status >= 500 && ce === 0 && !a?.aborted) {
      await X(300 + Math.random() * 500);
      continue;
    }
    break;
  }
  let w = Qae(y);
  if (!y.ok)
    return (
      m("artifact_list", "not_ok", { wire: w }),
      {
        err: y.reason === "no-auth" ? Oy(y.detail) : `artifact listing unavailable: ${y.reason}`,
        reason: "not_ok"
      }
    );
  if (!y.fromFrame)
    return (
      m("artifact_list", "relay_error", { wire: w }),
      { err: `artifact listing failed (relay HTTP ${y.status})`, reason: "relay_error" }
    );
  if (y.status < 200 || y.status >= 300) {
    let ce = y.status >= 500 ? "http_5xx" : "http_4xx";
    return (
      m("artifact_list", ce, { wire: w }),
      { err: `artifact listing failed (HTTP ${y.status})`, reason: ce }
    );
  }
  let x = ec().safeParse(y.data);
  if (!x.success)
    return (
      m("artifact_list", "malformed_body", { wire: w }),
      { err: "artifact listing failed: malformed response", reason: "malformed_body" }
    );
  let P = x.data.frames ?? [],
    R = x.data.starsEnabled === !0,
    j = [],
    H = new Set(),
    q = 0,
    D = 0,
    K = !1,
    C = !1;
  for (let ce of P) {
    let Y = ic().safeParse(ce);
    if (!Y.success) {
      D++;
      continue;
    }
    let { slug: be, title: Be, rel: he, updatedAt: Ke, softDeleted: ut, starred: ke } = Y.data;
    if (P1n(he)) {
      if (he !== "mine") K = !0;
      else if (K) C = !0;
    }
    let Te = Okt(Y.data.favicon);
    if (ut === !0 || !P1n(he)) continue;
    if (r !== "all" && he !== r) continue;
    if ((H.add(be), q++, j.length >= e)) continue;
    let z = em(Be ?? "") ?? "Untitled";
    j.push({
      title: z,
      url: Ag(be),
      ...(Te !== void 0 && he === "mine" && { favicon: Te }),
      ...(Ke !== void 0 && { updatedAt: Ke }),
      ...(r !== "mine" && { rel: he }),
      ...(s && R && ke === !0 && { pinned: !0 })
    });
  }
  if (P.length > 0 && j.length === 0 && D === P.length)
    return (
      m("artifact_list", "all_rows_dropped", { wire: w }),
      { err: "artifact listing failed: response rows were unreadable", reason: "all_rows_dropped" }
    );
  let U = await b;
  for (let ce of U?.listed ? U.rows : []) {
    if (H.has(ce.slug)) continue;
    if ((H.add(ce.slug), q++, j.length >= e)) continue;
    j.push({
      title: em(ce.title ?? "") ?? "Untitled",
      url: Ag(ce.slug),
      rel: "shared",
      external: !0,
      ...(ce.role !== void 0 && { role: ce.role })
    });
  }
  if ((g("artifact_list", { wire: w }), r !== "mine"))
    g(r === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all");
  let N = K && !C,
    ie =
      (P.length >= Zi && !(r === "mine" && N)) ||
      D > 0 ||
      (r !== "mine" && U?.listed === !0 && U.mayHaveMore);
  return {
    err: null,
    rows: j,
    total: q,
    totalAtLeast: ie,
    truncated: j.length < q || ie,
    ...(s && { pinsEnabled: R }),
    ...(U?.listed === !0 && { externalListed: !0 })
  };
}
function iwo(e, n) {
  if (
    n.err !== null ||
    n.refusedClassSidecarTypes === void 0 ||
    n.refusedClassSidecarTypes.length === 0
  )
    return null;
  return { ...(e ?? {}), [n.slug]: n.refusedClassSidecarTypes };
}
function awo(e, n) {
  return e?.[n] ?? [];
}
function ac(e, n) {
  if (e !== void 0 && n === void 0)
    return {
      kind: "contract",
      err: "workshop publish contract violation: redeploys must pass refusedSidecarHistory (the AppState sidecar record for the target slug; [] when none) \u2014 refusing rather than skipping the sidecar-ordering gate"
    };
  if (n !== void 0 && n.length > 0)
    return {
      kind: "priors",
      err:
        `this artifact was previously published with renderable or executable sidecar files (${c7(n.join(", "))}) \u2014 those URLs would remain addressable beside the workshop page. ` +
        "Publish the workshop to a new artifact, or republish this one without workshop surface."
    };
  return null;
}
function lwo(e, n) {
  if (n.err !== null || n.workshopSurface !== !0) return null;
  if ((e ?? []).includes(n.slug)) return null;
  return [...(e ?? []), n.slug];
}
var Wtn = "conflict: nothing was published \u2014 ";
function Qs(e) {
  let { readRemedy: n, forceAdvisory: r, contentReadsBlocked: s } = Nme();
  return (
    `${Wtn}${HHt(e)} is live and this publish was not built on it. ` +
    (s ?? `Re-read it (${n}), merge your edits on top, then publish again.`) +
    (e.forceRefused ? AEe : r)
  );
}
function oc(e, n) {
  if (n.length === 0)
    return `${Wtn}${HHt(e)} changed some of the files this publish writes or removes, but its answer named none of them. List the artifact's files, read each file you are changing that changed, re-apply your change to what it holds now, and publish again.`;
  let r = n.slice(0, 20).map((a) => _(a.path)),
    s = n.length - r.length;
  return `${Wtn}${HHt(e)} changed ${I(n.length, "a file", "files")} this publish writes or removes: ${r.join(", ")}${s > 0 ? ` and ${s} more` : ""}. Read ${n.length === 1 ? "it" : "each one"} again, re-apply your change to what it holds now, and publish again.`;
}
function HHt(e) {
  return (
    `a newer version (${e.live})` +
    (e.liveEntry === "page" || e.liveEntry === "editor"
      ? " saved from inside the page (someone's edits or input on it)"
      : e.liveEntry === "publish"
        ? " published by another session or agent"
        : " published elsewhere (by another session, or by someone saving from the page itself)") +
    (e.createdAt ? ` at ${e.createdAt}` : "")
  );
}
async function dn(e) {
  let { hostGrant: n } = e,
    r = e.storedCaps;
  if (n.kind === "absent") return { ok: !0, storedCaps: r };
  let s = e.pageBytes !== void 0 && { page_bytes: e.pageBytes };
  if (r === void 0) {
    let a = await iO(e.slug, void 0, e.credentials);
    if (a !== null && "err" in a && or(a)) {
      if ((await X(cr, e.signal), !e.signal?.aborted)) a = await iO(e.slug, void 0, e.credentials);
    }
    if (a !== null && "err" in a)
      return (
        m("artifact_publish", "host_grant_readback_failed", { ...s, ...wn(a) }),
        {
          ok: !1,
          err:
            `couldn't read the artifact's stored capability declaration (${a.err}) \u2014 ` +
            "this computer's local-server grant bounds what a publish carries forward, so this publish cannot proceed without it. This is usually transient: retry." +
            (e.lane === "page"
              ? " If the read keeps failing, publish the page declaring the capabilities you intend (capabilities: {} clears the stored declaration) together with contract: 'latest', which needs no read."
              : "")
        }
      );
    r = a?.capabilities ?? {};
  }
  return qAr(r, n, e.lane, s);
}
function qAr(e, n, r, s = !1) {
  if (n.kind === "absent") return { ok: !0, storedCaps: e };
  let a = XGr(e, n);
  if (!a.ok) {
    m("artifact_publish", "host_grant_carry_unreadable", {
      ...s,
      host_server_count: a.refused.length
    });
    let h = oH(a.refused, 8, (y) => `"${Wm(y)}"`),
      b = XGr(e, { kind: "granted", tools: new Map() });
    return {
      ok: !1,
      err:
        `this computer's local-server grant (${Ezo}) could not be read. It is set by the app that launched this session and is not something to fix from here. The artifact's stored declaration names ` +
        `local servers \u2014 ${h.join(", ")} \u2014 that a publish declaring nothing ` +
        "would carry forward, so this publish cannot proceed" +
        (r === "page"
          ? ". Declare what to send instead: publish the page with capabilities " +
            es(b.ok ? b.caps : {}, "its local servers") +
            ", or with capabilities: {} to clear the stored declaration."
          : Qi(r))
    };
  }
  if (a.dropped.length === 0) return { ok: !0, storedCaps: e };
  return (
    m("artifact_publish", "host_grant_carry_refused", { ...s, dropped_count: a.dropped.length }),
    {
      ok: !1,
      err:
        "the artifact's stored declaration carries local tools this computer " +
        `did not grant \u2014 ${ea(a.dropped)} \u2014 and a publish ` +
        "that declares nothing would carry them forward, so this publish cannot proceed" +
        (r === "page"
          ? ". Declare what to send instead: publish the page with capabilities " +
            es(a.caps, "them") +
            ", or with capabilities: {} to clear the stored declaration."
          : Qi(r))
    }
  );
}
function Qi(e) {
  return e === "files"
    ? " from this session: this artifact's declaration comes from its type and cannot be changed from here."
    : " from this session: an Artifact made from this type carries its declaration, and that cannot be changed from here.";
}
function es(e, n) {
  let r = ny(_(e), { max: 600 });
  return r.length < 600
    ? `set to the stored declaration without ${n}: ${r}`
    : `set to the stored declaration without ${n} (it is too long to print here)`;
}
async function dwo(e) {
  return dn({
    slug: e.slug,
    hostGrant: ctt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "files"
  });
}
async function cwo(e) {
  return dn({
    slug: e.slug,
    hostGrant: ctt(i.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
}
function ea(e) {
  return oH(e, 8, (n) =>
    n.tool === null
      ? `all of "${Wm(n.server)}"`
      : `tool "${Wm(n.tool, { max: 128 })}" on "${Wm(n.server)}"`
  ).join("; ");
}
function O(e) {
  return { url: null, slug: null, version: null, err: e };
}
function ln(e, n) {
  if (
    e !== 503 ||
    !n ||
    typeof n !== "object" ||
    !("slug" in n) ||
    typeof n.slug !== "string" ||
    !ar.test(n.slug)
  )
    return null;
  return {
    slug: n.slug,
    ...("live" in n && typeof n.live === "string" && OT.test(n.live) && { live: n.live }),
    ...("kind" in n && typeof n.kind === "string" && att.test(n.kind) && { kind: n.kind })
  };
}
function St(e, n, r, s) {
  if (!n) return e;
  let a =
    s === "answered"
      ? ", and the automatic retry did not repair it"
      : s === "unknown"
        ? "; the automatic retry was sent but got no answer, so it may or may not have repaired it"
        : s === "unsent"
          ? "; the automatic retry could not go through the cloud session's gateway, so it was not sent"
          : s === "cancelled"
            ? "; the publish was cancelled before the automatic retry was sent"
            : "";
  if (!r)
    return e.conflict
      ? e
      : {
          ...e,
          err: `${e.err} \u2014 the new version was recorded but its content was not stored${a}.`,
          ...(n.live !== void 0 && { liveVersion: e.liveVersion ?? n.live })
        };
  let h = Ag(n.slug);
  if (n.kind !== void 0)
    return {
      ...e,
      err: `${e.err} \u2014 the server created ${h} but could not store its content, and that artifact cannot be published over: publishing again creates a new one.`
    };
  return {
    ...e,
    err: e.conflict
      ? `${e.err} \u2014 ${h} is the artifact this publish's first attempt created without storing its content.`
      : `${e.err} \u2014 the server created ${h} but could not store its content${a}.`,
    strandedSlug: n.slug,
    ...(!e.conflict &&
      (e.liveVersion ?? n.live) !== void 0 && { liveVersion: e.liveVersion ?? n.live })
  };
}
function lc(e) {
  return oH(e, 8, (s) => {
    switch (s.kind) {
      case "not_object":
        return `capabilities.mcp must be an object of the form {"servers": [${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}]} \u2014 not an array, a string, or any other shape; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
      case "no_servers":
        return `capabilities.mcp declares no servers \u2014 put one ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'} entry under "servers" for each connector the page calls; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'} \u2014 an empty "servers" list is refused`;
      case "dynamic_not_boolean":
        return 'capabilities.mcp "dynamic" must be the JSON boolean true (or left out) \u2014 no other value is accepted, a string or a number included; with "dynamic": true the page may call connectors the declaration does not list, and "servers" may then be empty';
      case "entry_shape":
        return (
          `servers[${s.index}] has no "server" string \u2014 each entry is ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}` +
          (s.wrongKey === null ? "" : ` (the key is "server", not "${Wm(s.wrongKey)}")`)
        );
      case "tools_shape":
        return `${IGt(s.server)} "${Wm(s.server)}": "tools" must be an array of tool-name strings`;
      case "no_tools": {
        let a = Wm(s.display ?? s.server),
          h = s.display === null ? "" : ` (declared as "${Wm(s.server)}")`,
          b =
            s.available.length === 0
              ? ""
              : ` (available this session: ${oH([...s.available], 12, (y) => `"${Wm(y)}"`).join(", ")})`;
        return `${IGt(s.server)} "${a}"${h} lists no tools \u2014 set "tools" to the upstream names of the "${a}" tools the page calls${b}; an empty or omitted "tools" list is refused and never means "all tools"`;
      }
      case "unknown_tools": {
        let a = Wm(s.display ?? s.server),
          h = s.display === null ? "" : ` (declared as "${Wm(s.server)}")`,
          b = oH([...s.unknown], 8, (w) => `"${Wm(w)}"`),
          y =
            s.available.length === 0
              ? " (none it lists this session fits the manifest grammar)"
              : `, here: ${oH([...s.available], 12, (w) => `"${Wm(w)}"`).join(", ")}`;
        return `${IGt(s.server)} "${a}"${h} has no ${I(s.unknown.length, "tool")} named ${b.join(", ")} in this session \u2014 "tools" takes that connector's own top-level tool names${y}; if this connector fronts other tools through its own search/execute tools (an MCP gateway), declare those and have the page reach the inner ones through them. The control plane would accept this manifest, but the page's calls would fail for viewers of this connector`;
      }
      case "opaque_id":
        return `"${Wm(s.server, { max: 70 })}" is a connector id, which no viewer can resolve \u2014 set "server" to that connector's name exactly as shown in claude.ai (Settings \u2192 Connectors) and pass the same name to callTool/watchTool in the page; if you don't know the name, ask the user, describing the connector by its tools (the user cannot see the id)`;
      case "known_id": {
        let a = Wm(s.display);
        return `"${Wm(s.server)}" is the id of connector "${a}" \u2014 set "server" to "${a}": approval prompts and viewers know connectors by name only, and the page must call it by that name too`;
      }
      case "tool_name":
        return (
          `"${Wm(s.server, { max: 70 })}" is a tool name, not a connector name \u2014 "server" takes the connector's display name` +
          (s.display === null ? "" : `, here "${Wm(s.display)}"`) +
          ', and "tools" takes the bare upstream tool names'
        );
      case "connector_as_host": {
        let a = Wm(s.display);
        return `"${Wm(s.server, { max: 70 })}" names the claude.ai connector "${a}", not a local server \u2014 declare it as {"server": "${a}", "tools": [...]} and call it by that name in the page`;
      }
      case "local_server_as_first_party": {
        let a = Wm(s.local);
        return `"${Wm(s.server, { max: 70 })}" would bind the Claude app's own built-in server, but this session also has an MCP server named "${a}" \u2014 the page may have been built against that server, which no viewer can reach; rename or remove "${a}" (or drop the declaration) and publish again`;
      }
      case "undeclarable_name":
        return `connector "${O7n(s.name)}" cannot be declared until it is renamed in claude.ai (Settings \u2192 Connectors): a manifest "server" must be 1\u201364 characters with no control characters, line breaks, unusual spaces or text-direction controls, must not begin or end with a space or invisible character, and must not read as host: or be shaped like an id or a claude_ai_/mcp__ prefix \u2014 tell the user`;
      case "host_unavailable":
        return `"${Wm(s.server, { max: 70 })}" names a locally-configured MCP server, and host servers aren't available in this session \u2014 declare only claude.ai connectors (set "server" to the connector's display name), or ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
    }
  });
}
function vr(e, n, r = "") {
  return {
    ...O((e.msg ?? n) + r),
    ...(e.code === "slug_gone" && { gone: !0 }),
    ...(e.code === "thumbnail_rejected" && { thumbnailRejected: e.msg ?? n }),
    ...((e.code === "rate_limited" || e.code === "contract_rollout") && { transient: e.code })
  };
}
function ta(e) {
  return dt(e) === void 0 ? na(e) : null;
}
function cc(e, n) {
  if (dt(e) !== "precondition_failed") return null;
  let r = na(e);
  if (r === null) return null;
  let s = typeof e === "object" && e !== null && "paths" in e ? e.paths : void 0,
    a = [];
  for (let h of Array.isArray(s) ? s : []) {
    let b = dc().safeParse(h);
    if (b.success && n.has(b.data.path)) a.push(b.data);
  }
  return { ...r, paths: a };
}
var dc = p(() =>
  u({
    path: o(),
    expected: o()
      .regex(/^[0-9a-f]{64}$/)
      .nullable(),
    actual: o()
      .regex(/^[0-9a-f]{64}$/)
      .nullable()
  })
);
function na(e) {
  if (
    !e ||
    typeof e !== "object" ||
    !("conflict" in e) ||
    e.conflict !== !0 ||
    !("live" in e) ||
    typeof e.live !== "string" ||
    !Uj.test(e.live)
  )
    return null;
  let n = e;
  return {
    live: e.live,
    ...(typeof n.createdAt === "string" &&
      /^[\w:.+ -]{1,40}$/.test(n.createdAt) && { createdAt: n.createdAt }),
    ...((n.liveEntry === "editor" || n.liveEntry === "page" || n.liveEntry === "publish") && {
      liveEntry: n.liveEntry
    }),
    ...(n.forceRefused === !0 && { forceRefused: !0 })
  };
}
function Xae(e) {
  if (
    e &&
    typeof e === "object" &&
    "error" in e &&
    typeof e.error === "string" &&
    "reason" in e &&
    typeof e.reason === "string"
  )
    return { error: e.error, reason: e.reason };
  return null;
}
var Gtn = "publish denied: ",
  uc = [
    "compliance_restricted",
    "org_mismatch",
    "org_toggle_disabled",
    "summon_foreign_sender",
    "user_entitlement_denied",
    "write_gate_disabled"
  ],
  hc = [
    "acl_unsupported",
    "artifact_limit_reached",
    "audience_conflict",
    "auto_edit_refused",
    "bad_json",
    "capability_refused",
    "cas_link_refused",
    "cmek_key_disabled",
    "content_pending",
    "content_refused",
    "content_too_large",
    "contract_refused",
    "credential_required",
    "database_org_cap",
    "database_too_large",
    "embeds_too_large",
    "external_sharing_disabled",
    "group_grant_forbidden",
    "instance_dup_unavailable",
    "instance_locked",
    "invalid_request",
    "invalid_slug",
    "live_doc",
    "live_over_budget",
    "live_path_cap",
    "live_path_delete",
    "live_refused",
    "multi_file_unavailable",
    "never_published",
    "not_found",
    "not_owner",
    "one_live_path",
    "origin_required",
    "owner_mode_only",
    "patch_no_base",
    "path_is_live",
    "pin_unsupported",
    "provision_conflict",
    "public_mode_disabled",
    "publish_settling",
    "rate_limited",
    "read_mode_refused",
    "read_timeout",
    "render_busy",
    "render_embeds_container",
    "render_over_budget",
    "render_unavailable",
    "soft_deleted",
    "soft_deleted_swept",
    "source_refused",
    "title_invalid",
    "too_many_concurrent",
    "type_cap_unavailable",
    "type_cross_org",
    "type_instances_off",
    "type_is_instance",
    "type_no_release",
    "type_single_file",
    "unknown_version",
    "write_conflict"
  ];
function ra(e) {
  let n = dt(e),
    r = hc.find((s) => s === n);
  return r ? { refusal_reason: c(r) } : {};
}
function Xt(e, n) {
  let r = typeof e === "string" ? e.trimEnd().replace(Ir, "") : (Xae(e)?.error ?? f$(e));
  return jj(r, n);
}
var ia = /^capabilities\.([a-z][a-z0-9_]*)(?=[:. ])/;
function ts(e) {
  return /^contract[ :]/.test(e);
}
var gc = / is newer than the preferred /,
  sa = /the artifact's type|built from an artifact type/,
  mc = { capNames: [], hostDecl: !1 };
function aa(e) {
  return Xn(
    wi(Oh(e.retryAfter)),
    e.reservedSlug !== void 0 ? Ag(e.reservedSlug) : void 0,
    e.refusedStep
  );
}
function oa(e, n) {
  let r = dt(n);
  return e === 429 && Bt(n) === void 0 && (r === "rate_limited" || r === "too_many_concurrent");
}
function sn(e, n) {
  return /[.!?]$/.test(e) ? `${e} ${n}` : `${e}. ${n}`;
}
function ns(e, n) {
  let r = ia.exec(e)?.[1];
  if (r === void 0)
    return "Nothing was published; correct the declaration as described and publish again.";
  if (/: unavailable$/.test(e)) {
    if (!n.capNames.includes(r))
      return `Nothing was published; an earlier version declares capabilities.${r}, it is not available to this account now, and a declaration that drops it cannot be stored \u2014 publish without a capabilities block to keep the stored set, or tell the user.`;
    return r === "mcp" && n.hostDecl
      ? "Nothing was published; the connectors declaration names locally-configured (host:) MCP servers, which this session cannot publish \u2014 declare only claude.ai connectors, or publish a version that does not call them."
      : `Nothing was published; capabilities.${r} is not available to this account here \u2014 publish a version that does not use it instead of retrying the same declaration.`;
  }
  if (e.includes("part of the runtime"))
    return `Nothing was published; drop capabilities.${r} \u2014 the runtime provides it without a declaration.`;
  return `Nothing was published; correct capabilities.${r} as described and publish again.`;
}
var bc =
    "Nothing was published. Only the artifact's owner can change who it is shared with (in its share settings on claude.ai), not this session \u2014 if the page can do without what the message names, publish a version without it; otherwise tell the user.",
  I9e = "the artifact you're updating was deleted, or you no longer have write access to it";
function wr(e) {
  return xt(`relay HTTP ${e}`);
}
var YAr = "publish outcome unknown (";
function xt(e) {
  return `${YAr}${e}) \u2014 it may have published; check the artifact list before publishing again`;
}
var LHt = "this file belongs to the artifact's type and can't be changed here";
function Sr(e) {
  return f$(e).includes(LHt);
}
var _c =
    " \u2014 this Artifact was created from an Artifact type: its page (index.html) and the type's other files can't be changed on it. Publish only its own files (`file_path` naming one, more in `files`, with this `url`); to change the page, publish a new Artifact instead.",
  la =
    "Nothing was published and the Artifact is unchanged; retrying cannot help, so tell the user it can't be changed from this session",
  yc = ` \u2014 this Artifact was created from an Artifact type and nothing can be published to it from this session: its page (index.html) and the type's other files can't be changed on it, and publishing its own files is not available. ${la}.`,
  uwo = `this file can't be published: the Artifact being updated was created from an Artifact type, and no file or page can be published to it from this session. ${la}`,
  fwo =
    "If the Artifact being updated was created from an Artifact type, that will be refused too, because nothing can be published to it from this session; in that case tell the user so.";
function xr(e, n, r, s, a = !1, h = mc, b = {}) {
  let y = vc(e, n, r, s, a, h, b),
    w = ra(n);
  return w.refusal_reason === void 0 ? y : { ...y, extra: { ...y.extra, ...w } };
}
function vc(e, n, r, s, a, h, b) {
  let y = Sc(e, n, a);
  if (y !== void 0) return y;
  let w = dt(n);
  if (e === 400) {
    let P = f$(n);
    if (/^thumbnail/i.test(P.trimStart()) || (pye.test(P) && /["']thumbnail(?:_dark)?["']/.test(P)))
      return { code: "thumbnail_rejected", msg: `deploy 400: ${MT(n)}` };
  }
  if (ln(e, n)) return { code: "publish_stranded" };
  if (e === 409 && w === "publish_settling")
    return {
      code: "publish_settling",
      msg: xt("the first attempt reached claude.ai and its content is still being stored")
    };
  if (e === 422 && dt(n) === "deadline_invalid") return { code: "deadline_invalid" };
  let x = e === 422 ? Xt(n, 300) : "";
  if (e === 422 && (w === "instance_locked" || Sr(n) || sa.test(x))) {
    let P = Sr(n) || x.includes("publish its files with a manifest"),
      R = Z().frozenArtifactTypes?.typesOn;
    return { code: "type_locked", msg: `deploy 422: ${x}${!P || R === void 0 ? "" : R ? _c : yc}` };
  }
  if (e === 422 && w === "audience_conflict")
    return { code: "audience_conflict", msg: `deploy 422: ${sn(x, bc)}` };
  if (e === 422 && w === "capability_refused") {
    let P = Xt(n, 1500)
        .split(/; (?=capabilities[.: ]|\d+ more\b)/)
        .filter(Boolean),
      R = P.length > 1 && /^\d+ more\b/.test(P.at(-1)) ? P.pop() : void 0;
    if (P.length <= 1 && R === void 0)
      return { code: "capability_refused", msg: `deploy 422: ${sn(x, ns(x, h))}` };
    let j = "",
      H = 0;
    for (let K of P) {
      let C = j === "" ? K : `${j}; ${K}`;
      if (C.length > 600 && H > 0) break;
      ((j = C), H++);
    }
    let q = [P.length > H ? `${P.length - H} more not shown` : "", R ?? ""].filter(Boolean),
      D = L(
        P.filter(
          (K) =>
            (/: unavailable$/.test(K) && !h.capNames.includes(ia.exec(K)?.[1] ?? "")) ||
            (K.startsWith("capabilities.mcp: unavailable") && h.hostDecl)
        ).map((K) => ns(K, h).replace(/^Nothing was published; /, ""))
      );
    return {
      code: "capability_refused",
      msg: `deploy 422: ${sn([j, ...q].join("; "), ["Nothing was published; fix each capabilities entry named \u2014 drop the unavailable ones, correct the others as described \u2014 and publish again.", ...D].join(" Also: "))}`
    };
  }
  if (
    e === 422 &&
    s === void 0 &&
    h.latestContract === !0 &&
    (w === "contract_refused" || (w === void 0 && ts(x))) &&
    gc.test(x)
  )
    return { code: "contract_rollout", msg: `deploy 422: ${sn(x, Jn)}` };
  if (e === 422 && s !== void 0 && (w === "contract_refused" || (w === void 0 && ts(x))))
    return {
      code: "contract_echo_rejected",
      extra: { echo_declared_caps: s.declaredCaps },
      msg:
        `deploy ${e}: ${Xt(n, 200)} \u2014 this republish echoed the artifact's stored ` +
        `contract pin (${s.pin}) and nothing was published. If the reason above says the pin was yanked, pass contract: 'latest' to move the artifact to the current contract (this changes the page's runtime semantics); otherwise tell the user what the service said.`
    };
  if (e === 403 && w === "not_owner")
    return {
      code: "publish_denied",
      msg: `${Gtn}this account can open the artifact but is not allowed to publish to it \u2014 nothing was published; ask its owner for edit access, or publish it as a new artifact (omit \`url\`).`
    };
  if (e === 403 && bwo(f$(n))) return { code: "ccr_credential_refused" };
  if (e === 403 && w !== "credential_required") {
    let P = Xae(n);
    if (P) {
      let R = uc.find((H) => H === P.reason),
        j = R ? c(R) : void 0;
      return {
        code: "publish_denied",
        ...(j && { extra: { deny_reason: j } }),
        msg: Gtn + jj(P.error, 300)
      };
    }
  }
  if (e === 404 && r && SJ(n)) return { code: "slug_gone", msg: I9e };
  if (e === 429) {
    let P = Bt(n);
    if (P)
      return {
        code: "publish_cap_reached",
        extra: { cap_type: c(P.capType) },
        msg: `${P.message} \u2014 try again after the reset.`
      };
    if (oa(e, n) && b.created !== !0) return { code: "rate_limited", msg: aa(b) };
  }
  if (e === 408 && w === "read_timeout")
    return {
      msg: `deploy 408: ${sn(Xt(n, 200), "Nothing was published; the server stopped waiting for the upload \u2014 retry once.")}`
    };
  return {};
}
function dt(e) {
  if (typeof e === "string") return Ir.exec(e.trimEnd())?.[1];
  if (e === null || typeof e !== "object" || !("reason" in e)) return;
  let n = e.reason;
  return typeof n === "string" && att.test(n) ? n : void 0;
}
var Ir = new RegExp(` \\[(${JJs})\\]$`);
function ca(e) {
  if (e === null || typeof e !== "object" || !("path" in e)) return;
  let n = e.path;
  return typeof n === "string" && nn.test(n) ? n : void 0;
}
function wc(e) {
  if (e === null || typeof e !== "object" || !("max" in e)) return;
  let n = e.max;
  return typeof n === "number" && Number.isSafeInteger(n) && n > 0 ? n : void 0;
}
function Sc(e, n, r) {
  let s = dt(n);
  if (e === 409 && s === "path_is_live")
    return { code: "path_is_live", msg: `deploy 409: ${MT(n)}` };
  if (e === 422 && s === "one_live_path")
    return { code: "one_live_path", msg: `deploy 422: ${MT(n)}` };
  if (e === 422 && s === "live_path_cap") {
    let a = wc(n);
    return { code: "live_path_cap", msg: `deploy 422: ${MT(n)}` };
  }
  if (e === 422 && s === "live_path_delete")
    return { code: "live_path_delete", msg: `deploy 422: ${MT(n)}` };
  if (e === 422 && s === "render_over_budget")
    return { code: "live_over_budget", msg: `deploy 422: ${MT(n)}` };
  if (e === 422 && s === "render_unavailable")
    return { code: "render_unavailable", msg: `deploy 422: ${MT(n)}` };
  if (e === 422 && s === "live_over_budget")
    return {
      code: "live_over_budget",
      msg:
        typeof n === "string"
          ? `deploy 422: ${jj(n.trimEnd().replace(Ir, ""), 500)}`
          : `deploy 422: ${Xt(n, 500)}`
    };
  if (e === 422 && typeof n === "string" && xc.test(n))
    return { code: "live_over_budget", msg: `deploy 422: ${jj(n, 500)}` };
  if (e === 503 && s === "render_busy") return { code: "render_busy", msg: `deploy 503: ${MT(n)}` };
  return;
}
var xc = /exceeds the live-editing budget/;
function rs(e, n) {
  return `deploy 400: ${jj(e, 200)}`;
}
function Er(e) {
  return `deploy 400: ${jj(e, 200)}`;
}
function Ar(e, n) {
  return !1;
}
function is(e, n) {
  return (n.liveKey && Zl.test(e)) || (n.emptyPatch && Ql.test(e));
}
function MT(e) {
  return jj(f$(e), 200);
}
export {
  Otn,
  AEe,
  MAr,
  Mtn,
  OSo,
  _xs,
  DAr,
  CEe,
  MSo,
  bxs,
  v1n,
  Sxs,
  wxs,
  vxs,
  R9e,
  OT,
  DSo,
  rCi,
  CHt,
  Dtn,
  Ome,
  HSo,
  LSo,
  HAr,
  LAr,
  NAr,
  x9e,
  RHt,
  Exs,
  $Ar,
  E1n,
  kxs,
  Txs,
  NSo,
  k4,
  Dd,
  Axs,
  $So,
  k1n,
  FAr,
  Dm,
  p1,
  Uft,
  FSo,
  REe,
  wL,
  k1e,
  USo,
  BSo,
  jSo,
  Mme,
  Dme,
  xHt,
  _J,
  qae,
  WSo,
  GSo,
  Hme,
  xEe,
  eG,
  Htn,
  Lme,
  T1e,
  Ltn,
  $te,
  zSo,
  KSo,
  T1n,
  VSo,
  qSo,
  Ntn,
  PHt,
  $tn,
  IHt,
  Bft,
  Ftn,
  A1e,
  UAr,
  jft,
  Utn,
  Yae,
  P9e,
  YSo,
  A1n,
  C1n,
  BAr,
  iO,
  XSo,
  R1n,
  Btn,
  JSo,
  QSo,
  ZSo,
  ewo,
  two,
  jAr,
  WAr,
  OHt,
  GAr,
  PEe,
  TOe,
  zAr,
  bJ,
  MHt,
  KAr,
  x1n,
  nwo,
  rwo,
  owo,
  Ag,
  Wft,
  P1n,
  jtn,
  VAr,
  DHt,
  swo,
  iwo,
  awo,
  lwo,
  Wtn,
  HHt,
  qAr,
  dwo,
  cwo,
  Xae,
  Gtn,
  I9e,
  YAr,
  LHt,
  uwo,
  fwo,
  MT
};

//# sourceMappingURL=chunk-2nwr73hs.js.map
