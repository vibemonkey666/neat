// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k } from "./chunk-ajtyjx88.js";
import { F } from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { yi, re } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { DWe } from "./chunk-j0tbz6ra.js";
import { Kd } from "./chunk-wany0nxw.js";
import { B5s } from "./chunk-wdvpwq3x.js";
var y = 0.5,
  B = 4,
  x = 1600,
  E = 25000;
function c() {
  let e = i.MAX_MCP_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  let r = k("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof r === "number" && Number.isFinite(r) && r > 0) return r;
  return E;
}
function Ume(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e,
    r = !1;
  for (let o of n)
    if (o?.type === "text" && "_meta" in o && o._meta) {
      r = !0;
      break;
    }
  if (!r) return e;
  return n.map((o) => {
    if (o?.type === "text" && "_meta" in o && o._meta) {
      let { _meta: s, ...m } = o;
      return m;
    }
    return o;
  });
}
var T = 65536;
function $xs(e) {
  if (!Array.isArray(e)) return e;
  let n = 0;
  for (let r of e) {
    if (r?.type !== "text" || !("_meta" in r) || !r._meta) continue;
    try {
      n += _(r._meta).length;
    } catch {
      n = 1 / 0;
    }
    if (n > T)
      return (
        t(
          `MCP result: text blocks' _meta (over ${T} characters of JSON in all, or not serializable) left off the retained result`
        ),
        Ume(e)
      );
  }
  return e;
}
function P(e) {
  return e.type === "text";
}
function C(e) {
  return e.type === "image";
}
function x1e(e) {
  if (!e) return 0;
  if (typeof e === "string") return Kd(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, r) => {
    if (P(r)) return n + Kd(r.text);
    else if (C(r)) return n + x;
    return n;
  }, 0);
}
function Bme() {
  return c() * 4;
}
var A = "[OUTPUT TRUNCATED - exceeded ";
function M(e) {
  return e === 1
    ? "[Image left out: it did not fit in the tool output limit]"
    : `[${e} images left out: they did not fit in the tool output limit]`;
}
function R() {
  return `

${A}${c()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function O(e, n) {
  let r = [],
    o = 0,
    s = 0,
    m,
    d;
  for (let [g, a] of e.entries())
    if (P(a)) {
      let f = n - o;
      if (f <= 0) {
        d = g;
        break;
      }
      if (a.text.length <= f) (r.push(a), (o += a.text.length));
      else {
        let p = re(a.text, f);
        if (p) {
          let u = { type: "text", text: p };
          if (a._meta) u._meta = a._meta;
          r.push(u);
        }
        d = g + 1;
        break;
      }
    } else if (C(a)) {
      let f = x * 4;
      if (o + f <= n) (r.push(a), (o += f));
      else {
        let p = n - o,
          u;
        if (p > 0) {
          let h = Math.floor(p * 0.75);
          u = await B5s(a, h).catch(() => {
            return;
          });
        }
        if (u) (r.push(u), (o += u.source.type === "base64" ? u.source.data.length : f));
        else {
          if (m === void 0) ((m = r.length), (o += M(1).length));
          s++;
        }
      }
    } else r.push(a);
  if (d !== void 0) s += F(e.slice(d), C);
  if (s > 0) r.splice(m ?? r.length, 0, { type: "text", text: M(s) });
  return r;
}
async function Ytn(e, n) {
  if (!e) return !1;
  let r = x1e(e);
  if (r <= c() * y) return !1;
  if (x1e(typeof e === "string" ? e : e.filter(P)) > c() * B) return !0;
  try {
    return (
      ((await DWe(
        typeof e === "string" ? [{ role: "user", content: e }] : [{ role: "user", content: e }],
        [],
        void 0,
        { credentials: n }
      )) ?? r) > c()
    );
  } catch (s) {
    return (l(s), r > c());
  }
}
async function Xtn(e) {
  if (!e) return e;
  let n = Bme(),
    r = R();
  if (typeof e === "string") return yi(e, n) + r;
  else {
    let o = await O(e, n);
    return (o.push({ type: "text", text: r }), o);
  }
}
async function jme(e, n) {
  if (!(await Ytn(e, n))) return e;
  return await Xtn(e);
}
export { Ume, $xs, x1e, Bme, Ytn, Xtn, jme };

//# sourceMappingURL=chunk-7pzqzh23.js.map
