// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N, E, G } from "./chunk-fs43t96t.js";
import { GM } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { te, J$e, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { p } from "./chunk-qmkm2x59.js";
import { O } from "./chunk-19xvg81r.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Qt, Tf } from "./chunk-1e5yp9hx.js";
import { fXo, Cb } from "./chunk-5rw2zfa0.js";
import { g, m } from "./chunk-brszmkb3.js";
import { No } from "./chunk-8r2m7vfp.js";
import { pe } from "./chunk-7c3thgax.js";
import { oe, T, u, $e } from "./chunk-0bqrj5ah.js";
import { constants as w } from "fs";
import { open as U, realpath as j } from "fs/promises";
import { isAbsolute as k } from "path";
var jdo = "org-tip:",
  jbr = "custom-tip-",
  P = 500,
  B = 200,
  h = 262144,
  b = "Tip",
  H = /^[A-Za-z0-9._-]{1,64}$/,
  X = 40,
  L = ["policySettings", "flagSettings", "userSettings"],
  K = [...Tf],
  Y = "org-tip:file:",
  J = new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]),
  Z = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function A(e) {
  return J$e(e)
    .replace(/[\t\n\r\u2028\u2029]+/g, " ")
    .replace(Z, "")
    .replace(/ {2,}/g, " ")
    .trim();
}
function q(e) {
  if (e === void 0) return b;
  let i = re(A(e), X);
  return i === "" ? b : i;
}
var Q = p(() => $e([T(oe()), u({ tips: T(oe()) }).transform((e) => e.tips)]));
async function V(e) {
  try {
    let i = O() === "windows" ? 0 : w.O_NOFOLLOW | w.O_NONBLOCK,
      r = await U(await j(e), w.O_RDONLY | i),
      n;
    try {
      let f = await r.stat();
      if (!f.isFile())
        return (
          m("tips_org_tips_file_load", "not_regular_file"),
          t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, {
            level: "warn"
          }),
          { entries: [], transient: !1 }
        );
      if (f.size > h)
        return (
          m("tips_org_tips_file_load", "too_large"),
          t(`spinnerTipsOverride.tipsFile ${e} is larger than ${h} bytes; ignoring it`, {
            level: "warn"
          }),
          { entries: [], transient: !1 }
        );
      let c = Buffer.alloc(h + 1),
        { bytesRead: _ } = await r.read(c, 0, c.length, 0);
      if (_ > h) return (m("tips_org_tips_file_load", "too_large"), { entries: [], transient: !1 });
      n = No(c.toString("utf8", 0, _));
    } finally {
      await r.close();
    }
    let l = Q().safeParse(te(n)),
      d = l.success ? fXo().parse(l.data) : void 0;
    if (d === void 0)
      return (
        m("tips_org_tips_file_load", "wrong_shape"),
        t(
          `spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`,
          { level: "warn" }
        ),
        { entries: [], transient: !1 }
      );
    return (g("tips_org_tips_file_load"), { entries: d, transient: !1 });
  } catch (i) {
    let r = E(i),
      n = G(i)
        ? "not_found"
        : r === "ELOOP" || r === "EISDIR"
          ? "not_regular_file"
          : i instanceof SyntaxError
            ? "parse_failed"
            : "read_failed";
    return (
      m("tips_org_tips_file_load", n),
      t(
        G(i)
          ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded`
          : `spinnerTipsOverride.tipsFile ${e} could not be read: ${N(i).message}`,
        { level: "warn" }
      ),
      { entries: [], transient: r !== void 0 && J.has(r) }
    );
  }
}
class C {
  #e = new Map();
  get size() {
    return this.#e.size;
  }
  read(e) {
    let i = this.#e.get(e);
    if (i) return i;
    let r = V(e).then((n) => {
      if (n.transient) this.#e.delete(e);
      return n;
    });
    return (this.#e.set(e, r), r);
  }
}
var ee = new W(() => new C());
function ie() {
  if (Cb()?.spinnerTipsOverride?.tipsFile)
    return (
      t(
        "spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json",
        { level: "warn" }
      ),
      !0
    );
  return !1;
}
function ne(e) {
  if (!e) return;
  if (!k(e) && e !== "~" && !e.startsWith("~/")) {
    t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, {
      level: "warn"
    });
    return;
  }
  if (GM(e)) {
    t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", {
      level: "warn"
    });
    return;
  }
  try {
    let i = ut(e);
    return GM(i) ? void 0 : i;
  } catch (i) {
    t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${N(i).message}`, {
      level: "warn"
    });
    return;
  }
}
function I(e) {
  let i = [];
  for (let r of e) {
    if (!Qt(r)) continue;
    let n = pe(r)?.spinnerTipsOverride;
    if (n) i.push({ source: r, override: n });
  }
  return i;
}
function z(e, i) {
  return e.find((r) => r.override[i] !== void 0)?.override[i];
}
function gIe() {
  let e = I(L);
  if (z(e, "excludeDefault") !== !0) return !1;
  return e.some((i) => !!i.override.tipsFile) || e.some((i) => (i.override.tips?.length ?? 0) > 0);
}
async function THn(e) {
  let i = I(L),
    r = I(K);
  if (i.length === 0 && r.length === 0) return { tips: [], trustedCount: 0 };
  let n = q(z(i, "label")),
    l = i.find((s) => !!s.override.tipsFile),
    d = l?.source,
    f = ne(d === "policySettings" && ie() ? void 0 : l?.override.tipsFile);
  for (let { source: s, override: o } of r)
    if (o.tipsFile || o.label !== void 0)
      t(
        `spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`,
        { level: "warn" }
      );
  let c = f ? (await ee.of(e).read(f)).entries : [],
    _ = new Set(),
    v = [],
    F = (s, o, a, S, M) => {
      if (v.length >= B) return;
      let y = A(o);
      if (y === "") {
        t(`spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`, { level: "warn" });
        return;
      }
      if (y.length > P) {
        t(`spinnerTipsOverride: tip "${s}" is longer than ${P} characters; dropped`, {
          level: "warn"
        });
        return;
      }
      if (_.has(s)) {
        t(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, { level: "warn" });
        return;
      }
      (_.add(s),
        v.push({
          id: s,
          label: M,
          content: async () => y,
          cooldownSessions: a,
          priority: S,
          isRelevant: async () => !0,
          providerAgnostic: !0
        }));
    },
    x = 0;
  for (let { source: s, override: o } of i) {
    for (let a of o.tips ?? []) R(a, `${jbr}${x++}`, n, F);
    if (s === d) c.forEach((a, S) => R(a, `${Y}${S}`, n, F));
  }
  let D = v.length;
  for (let { source: s, override: o } of r)
    for (let a of o.tips ?? []) {
      let S = `${jbr}${x++}`;
      if (typeof a === "string") R(a, S, b, F);
      else
        t(
          `spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`,
          { level: "warn" }
        );
    }
  return { tips: v, trustedCount: D };
}
function R(e, i, r, n) {
  if (typeof e === "string") {
    n(i, e, 0, 0, r);
    return;
  }
  if (typeof e.text !== "string") {
    t('spinnerTipsOverride: tip object without a "text" string; dropped', { level: "warn" });
    return;
  }
  if (typeof e.id !== "string" || !H.test(e.id)) {
    t(
      'spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped',
      { level: "warn" }
    );
    return;
  }
  let l =
      typeof e.cooldownSessions === "number" &&
      Number.isInteger(e.cooldownSessions) &&
      e.cooldownSessions >= 0
        ? Math.min(e.cooldownSessions, 1000)
        : 0,
    d =
      typeof e.priority === "number" && Number.isFinite(e.priority)
        ? Math.max(-10, Math.min(10, Math.trunc(e.priority)))
        : 0;
  n(`${jdo}${e.id}`, e.text, l, d, r);
}
export { jdo, jbr, gIe, THn };

//# sourceMappingURL=chunk-veg1r3k2.js.map
