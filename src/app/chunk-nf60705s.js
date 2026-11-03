// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { PB, kYe } from "./chunk-wrtp8qz8.js";
import { bO } from "./chunk-fnsjs1v2.js";
import { Co, U$, ar, gZ, xn } from "./chunk-r1dvrqha.js";
function Qws(a) {
  let e = a.trim(),
    r = Co(),
    t = U$(e);
  if (t !== null) return { slug: t, url: xn({ slug: t, env: r }) };
  let n = e.toLowerCase();
  if (ar.test(n)) return { slug: n, url: xn({ slug: n, env: r }) };
  let o = gZ(e);
  if (o === null)
    return { error: "Error: --watch-artifact expects an artifact id or a claude.ai artifact URL" };
  if (o.env !== r)
    return {
      error: `Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}`
    };
  return { slug: o.slug, url: xn(o) };
}
var s = null;
function Zws(a) {
  s = a;
}
function evs() {
  let a = s;
  return ((s = null), a);
}
function tvs() {
  return s;
}
function kQt(a) {
  let e = [];
  for (let r = 0; r < a.length; r++) {
    let t = a[r];
    if (t === "--watch-artifact" || t === "--watch-artifact-no-autoreact") {
      r++;
      continue;
    }
    if (t.startsWith("--watch-artifact=") || t.startsWith("--watch-artifact-no-autoreact="))
      continue;
    e.push(t);
  }
  return e;
}
function iwr(a, e) {
  a = a.toLowerCase();
  let r = ["--watch-artifact", "--watch-artifact-no-autoreact"],
    t = PB(),
    n = [],
    o = !1;
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (
      r.some((u) => (c === u && t[i + 1]?.toLowerCase() === a) || c.toLowerCase() === `${u}=${a}`)
    ) {
      if (c.indexOf("=") === -1) i++;
      o = !0;
      continue;
    }
    n.push(c);
  }
  if (o) (kYe(n), bO("--watch-artifact", ["--watch-artifact-no-autoreact"], null, void 0, e));
}
function nvs(a) {
  let e = PB(),
    r;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n === "--watch-artifact" && e[t + 1] !== void 0) r = e[t + 1].toLowerCase();
    else if (n.startsWith("--watch-artifact=")) r = n.slice(17).toLowerCase();
  }
  if (r === void 0) return !1;
  return (
    kYe([...kQt(PB()), "--watch-artifact-no-autoreact", r]),
    bO("--watch-artifact-no-autoreact", ["--watch-artifact"], r, void 0, a),
    !0
  );
}
export { Qws, Zws, evs, tvs, kQt, iwr, nvs };

//# sourceMappingURL=chunk-nf60705s.js.map
