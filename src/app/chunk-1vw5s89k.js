// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { ba } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { We } from "./chunk-pgnjjhxv.js";
import { M8 } from "./chunk-d5zj5299.js";
import { Zb } from "./chunk-zjm5ncxc.js";
import { Pso } from "./chunk-myhnqda3.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { z } from "./chunk-p197ae0z.js";
import {
  mkdir as P,
  readFile as f,
  stat as p,
  unlink as v,
  utimes as D,
  writeFile as k
} from "fs/promises";
import { join as A } from "path";
var g = ".consolidate-lock",
  y = 3600000;
function c(e) {
  return A(e, g);
}
function l(e) {
  let n = M8(e);
  return n === void 0 ? void 0 : We.memory(n, [g]);
}
function b(e, n) {
  let [a = "", r = ""] = e.split(`
`),
    o = parseInt(a.trim(), 10),
    i = r.trim() === "" ? NaN : Number(r.trim());
  return {
    holderPid: Number.isFinite(o) ? o : void 0,
    lastConsolidatedAt: Number.isFinite(i) ? i : n
  };
}
function h(e, n) {
  return `${e ?? ""}
${n}`;
}
async function Edt(e = ba(), n) {
  let a = z() && n !== void 0 ? l(e) : void 0;
  if (n && a) {
    let r = await n.readText([a]);
    if (!r.ok || !r.value.items[0].found) return 0;
    let { value: o, mtimeMs: i } = r.value.items[0];
    return b(o, i).lastConsolidatedAt;
  }
  try {
    return (await p(c(e))).mtimeMs;
  } catch {
    return 0;
  }
}
async function Dgs(e) {
  return L(ba(), e);
}
async function L(e, n) {
  let a = z() && n !== void 0 ? l(e) : void 0;
  if (n && a) return S(n, a);
  let r = c(e),
    o,
    i;
  try {
    let [s, w] = await Promise.all([p(r), f(r, "utf8")]);
    o = s.mtimeMs;
    let m = parseInt(w.trim(), 10);
    i = Number.isFinite(m) ? m : void 0;
  } catch {}
  if (o !== void 0 && Date.now() - o < y) {
    if (i !== void 0 && Xa(i))
      return (
        t(
          `[autoDream] lock held by live PID ${i} (mtime ${Math.round((Date.now() - o) / 1000)}s ago)`
        ),
        null
      );
  }
  (await P(e, { recursive: !0 }), await k(r, String(process.pid)));
  let u;
  try {
    u = await f(r, "utf8");
  } catch {
    return null;
  }
  if (parseInt(u.trim(), 10) !== process.pid) return null;
  return o ?? 0;
}
async function sIt(e, n) {
  return C(ba(), e, n);
}
async function C(e, n, a) {
  let r = z() && a !== void 0 ? l(e) : void 0;
  if (a && r) return x(a, r, n);
  let o = c(e);
  try {
    if (n === 0) {
      await v(o);
      return;
    }
    await k(o, "");
    let i = n / 1000;
    await D(o, i, i);
  } catch (i) {
    t(`[autoDream] rollback failed: ${d(i)} \u2014 next trigger delayed to minHours`);
  }
}
async function S(e, n) {
  let a = await e.readText([n]),
    r = a.ok ? a.value.items[0] : void 0,
    o = r?.found ? r.version : void 0,
    i = r?.found ? b(r.value, r.mtimeMs) : void 0;
  if (i !== void 0 && Date.now() - i.lastConsolidatedAt < y) {
    if (i.holderPid !== void 0 && Xa(i.holderPid))
      return (
        t(
          `[autoDream] lock held by live PID ${i.holderPid} (acquired ${Math.round((Date.now() - i.lastConsolidatedAt) / 1000)}s ago)`
        ),
        null
      );
  }
  let u = await e.updateText(
    n,
    (s) =>
      (s?.version ?? void 0) === o
        ? { write: h(process.pid, Date.now()), result: !0 }
        : { skip: !0, result: !1 },
    r?.found ? { publishDiscipline: "inPlace" } : void 0
  );
  if (!u.ok || u.value.result !== !0) return null;
  return i?.lastConsolidatedAt ?? 0;
}
async function x(e, n, a) {
  let r =
    a === 0
      ? await e.delete(n)
      : await e.updateText(n, () => ({ write: h(void 0, a) }), { publishDiscipline: "inPlace" });
  if (!r.ok)
    t(`[autoDream] rollback failed: ${r.error.code} \u2014 next trigger delayed to minHours`);
}
async function Hgs(e, n) {
  let a = Zb(ke());
  return (await Pso(a, !0, void 0, n)).filter((o) => o.mtime > e).map((o) => o.sessionId);
}
export { Edt, Dgs, sIt, Hgs };

//# sourceMappingURL=chunk-1vw5s89k.js.map
