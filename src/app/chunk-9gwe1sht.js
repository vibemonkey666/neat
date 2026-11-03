// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { AYe, CTn } from "./chunk-wrtp8qz8.js";
import { d, G } from "./chunk-fs43t96t.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { hrt } from "./chunk-bh50mq9d.js";
import { p } from "./chunk-qmkm2x59.js";
import { KNe, Yj, TH } from "./chunk-5rw2zfa0.js";
import { Fn, Ci } from "./chunk-dvghjmtr.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { ge, bn, Tt, pM, uh, P0 } from "./chunk-522pfw8k.js";
import { open as A } from "fs/promises";
import { isAbsolute as R } from "path";
var f = new Set(Yj),
  S = new Set([
    ...TH,
    ...Yj.filter(
      (e) =>
        e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" &&
        !e.startsWith("CLAUDE_CODE_ARTIFACT") &&
        !KNe(e)
    ),
    "ANTHROPIC_CUSTOM_HEADERS",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH"
  ]),
  D = p(() => {
    let e = pM([bn(), ge()]).pipe(P0.number());
    return Tt({
      env: uh(ge()),
      expiresAt: e.nullable().default(null),
      pid: bn().int(),
      procStart: e
    });
  }),
  T = 2000,
  E = new Set(),
  l = null;
function _ht() {
  return i.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function cTe() {
  return !!AYe() && (!(Fn() && Ci()) || i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
}
async function C() {
  let e = i.CLAUDE_CODE_HOST_CREDS_FILE;
  if (!e || !R(e)) return null;
  let r;
  try {
    r = await A(e, "r");
    let n = await r.stat();
    if (n.size > 65536) return null;
    if (O() !== "windows") {
      if ((n.mode & 63) !== 0 || n.uid !== process.getuid?.())
        return (
          t("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", {
            level: "warn"
          }),
          null
        );
    }
    let o = await r.readFile({ encoding: "utf8" }),
      s = D().safeParse(te(o));
    if (!s.success || !Number.isFinite(s.data.procStart)) return null;
    let a = s.data;
    if (!Xa(a.pid)) return null;
    let c = await hrt(a.pid);
    if (c !== null && Math.abs(a.procStart - c) > T) return null;
    if (a.expiresAt !== null && a.expiresAt < Date.now()) return null;
    let _ = {};
    for (let [u, g] of Object.entries(a.env)) if (S.has(u)) _[u] = g;
    return { ...a, env: _ };
  } catch (n) {
    if (!G(n)) t(`readHostCredsFile failed: ${d(n)}`, { level: "warn" });
    return null;
  } finally {
    await r?.close().catch(() => {});
  }
}
async function Gqn() {
  if (AYe()) return;
  if (!i.CLAUDE_CODE_HOST_CREDS_FILE || !Ne(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await C();
  if (e) {
    let r = new Map(),
      n = {};
    for (let [o, s] of Object.entries(e.env))
      if (f.has(o)) h(r, o, s);
      else n[o] = s;
    ((l = r), m(n));
  } else
    t(
      `CLAUDE_CODE_HOST_CREDS_FILE is set (${i.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`,
      { level: "warn" }
    );
  CTn(async () => {
    let r = await C();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let n = {};
    for (let [s, a] of Object.entries(r.env))
      if (!f.has(s)) n[s] = a;
      else if (l && l.get(s) !== a)
        throw (
          t(`host-creds refresh rejected: endpoint changed (${s})`, { level: "warn" }),
          Error("host-creds refresh rejected: endpoint changed")
        );
    let o = _ht();
    if (E.has(o) && !n[o]) throw Error("host-creds refresh dropped the bearer key");
    if (!l) {
      let s = new Map();
      for (let [a, c] of Object.entries(r.env)) if (f.has(a)) h(s, a, c);
      l = s;
    }
    return (m(n), { authToken: n[o] ?? null });
  });
}
function h(e, r, n) {
  let o = process.env[r];
  if (o && o !== n) {
    (t(`host-creds seed: keeping the launch env's ${r}; the file names a different endpoint`, {
      level: "warn"
    }),
      e.set(r, o));
    return;
  }
  ((process.env[r] = n), e.set(r, n));
}
function m(e) {
  for (let r of E) if (!(r in e)) delete process.env[r];
  (Object.assign(process.env, e), (E = new Set(Object.keys(e))));
}
export { _ht, cTe, Gqn };

//# sourceMappingURL=chunk-9gwe1sht.js.map
