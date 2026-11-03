// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { fo } from "./chunk-brszmkb3.js";
import { _, te } from "./chunk-4kxznmzw.js";
import { Dn, X0 } from "./chunk-qywdxehb.js";
import { p } from "./chunk-qmkm2x59.js";
import { We } from "./chunk-pgnjjhxv.js";
import { RLr, xLr, NL } from "./chunk-fnsjs1v2.js";
import { bl } from "./chunk-jwqtbev0.js";
import { o, v, T, u } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
import { createHash as D } from "crypto";
import { mkdir as S, readdir as h, rm as w, unlink as k } from "fs/promises";
import { join as d } from "path";
var l = 86400000,
  m = 8388608;
function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return d(NL(), `.draft-${c(t)}`);
}
function f(t) {
  return _({ ...t, ts: Date.now() });
}
async function hZt(t, r, e) {
  await ikr(t, r, e);
}
async function ikr(t, r, e) {
  if (z() && e)
    return (
      (
        await e
          .write(We.jobDraft(c(t)), f(r), {
            publishDiscipline: "atomic",
            mode: 438 & ~process.umask()
          })
          .catch(() => {
            return;
          })
      )?.ok === !0
    );
  try {
    return (await S(NL(), { recursive: !0 }), await Dn(n(t), f(r)), !0);
  } catch {
    return !1;
  }
}
function Oho(t, r) {
  try {
    X0(n(t), f(r));
  } catch {}
}
async function Mho(t, r) {
  if (r) {
    await r.delete(We.jobDraft(c(t))).catch(() => {});
    return;
  }
  await k(n(t)).catch(() => {});
}
var g = p(() => u({ q: o(), collapsed: T(o()).optional(), ts: v() }));
async function EAs(t, r) {
  let e = r ? await P(r, t) : await bl(n(t), m);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(te(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let { q: i, collapsed: s, ts: y } = a.data;
  if (Date.now() - y > l) return;
  return { q: i, collapsed: s ?? [] };
}
async function P(t, r) {
  return xLr(t, We.jobDraft(c(r)), { cap: m, screens: x(), screenKey: n(r) });
}
function x() {
  return RLr.of(U().host).drafts;
}
async function X$n() {
  return fo("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(NL());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(
      t
        .filter((e) => e.startsWith(".draft-"))
        .map(async (e) => {
          let a = d(NL(), e),
            i = await bl(a, m);
          if (i !== null)
            try {
              let s = g().safeParse(te(i));
              if (s.success && r - s.data.ts <= l) return;
            } catch {}
          await w(a, { recursive: !0, force: !0 }).catch(() => {});
        })
    );
  });
}
export { hZt, ikr, Oho, Mho, EAs, X$n };

//# sourceMappingURL=chunk-rtx4z8z6.js.map
