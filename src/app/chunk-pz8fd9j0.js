// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qe, N } from "./chunk-fs43t96t.js";
import { ci, ye, Il } from "./chunk-wrtp8qz8.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { fk } from "./chunk-xc1j8sdj.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ro, Tf } from "./chunk-1e5yp9hx.js";
import { mg, pe } from "./chunk-7c3thgax.js";
import { tl, T5, Cs, sM } from "./chunk-ajtyjx88.js";
import { q2o, x7s, xtt } from "./chunk-2shtjvf4.js";
import { ve } from "./chunk-vk5p9xv3.js";
function QLo() {
  if (!Il()) {
    let e = xtt({ anthropicAuthEnabled: tl(), oauthScopes: T5(fk) ? [fk] : [] });
    if (x7s({ isSubscriber: e })) return P();
  }
  return;
}
function ZLo() {
  try {
    let e = QLo(),
      n = e === void 0 ? R : `${e.project?.taggedId}|${e.project?.source}|${e.ignored.join(",")}`;
    if (e !== void 0 && n !== S.last) {
      let { project: o, ignored: u } = e;
      if (u.length > 0)
        if (
          (t(`Attribution Project: ignored a value that names no Project (from ${u.join(", ")})`, {
            level: "warn"
          }),
          o === void 0)
        )
          m("attribution_project", "not_a_project_id");
        else f("attribution_project", "not_a_project_id");
      else if (o !== void 0) g("attribution_project");
      if (o !== void 0) t(`Attribution Project: ${o.taggedId} (from ${o.source})`);
    }
    return ((S.last = n), e?.project);
  } catch (e) {
    if (S.last !== E)
      ((S.last = E),
        m("attribution_project", "resolution_failed"),
        l(Qe(N(e), "attribution Project resolution failed")));
    return;
  }
}
function P() {
  let e = [],
    n = i.CLAUDE_CODE_ATTRIBUTION_PROJECT;
  if (n !== void 0 && n.trim() !== "") {
    let r = A(n);
    if (r !== void 0)
      return { project: { taggedId: r, source: "harness" }, written: n.trim(), ignored: e };
    e.push("harness");
  }
  let o = Ro(),
    u = o.includes("userSettings") && mg(),
    c,
    d = null;
  for (let r = o.length - 1; r >= 0; r--) {
    let s = o[r];
    if (s === "projectSettings" && u) continue;
    if (pe(s)?.attributionProject === void 0) continue;
    if (Tf.has(s)) {
      if (c === void 0)
        if (ye()) {
          let _ = ci();
          c = _ !== null && sM(_);
        } else c = Cs();
      if (!c) continue;
    }
    d = s;
    break;
  }
  let a = d === null ? void 0 : pe(d)?.attributionProject;
  if (d !== null && typeof a === "string" && a.trim() !== "") {
    let r = I[d],
      s = A(a);
    if (s !== void 0) return { project: { taggedId: s, source: r }, written: a.trim(), ignored: e };
    e.push(r);
  }
  let p = pe("policySettings")?.attributionProjectPolicy,
    j = typeof p === "object" && p !== null && "default" in p ? p.default : void 0;
  if (typeof j === "string" && j.trim() !== "") {
    let r = A(j);
    if (r !== void 0)
      return { project: { taggedId: r, source: "admin_default" }, written: j.trim(), ignored: e };
    e.push("admin_default");
  }
  return { project: void 0, written: void 0, ignored: e };
}
function A(e) {
  let n = e.trim();
  if (h.test(n)) {
    let u = BigInt(`0x${n.replaceAll("-", "")}`),
      c = "";
    while (u > 0n) ((c = b[Number(u % 58n)] + c), (u /= 58n));
    return `claude_proj_01${c.padStart(T, b[0])}`;
  }
  if (!q2o.test(n)) return;
  let o = 0n;
  for (let u of n.slice(-T)) o = o * 58n + BigInt(b.indexOf(u));
  return o <= O ? n : void 0;
}
var I = {
    userSettings: "user",
    projectSettings: "project",
    localSettings: "local",
    flagSettings: "flag",
    policySettings: "managed"
  },
  h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  b = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  T = 22,
  O = (1n << 128n) - 1n,
  R = "not sent",
  E = "failed",
  S = ve({ last: void 0 }, (e) => {
    e.last = void 0;
  });
export { QLo, ZLo };

//# sourceMappingURL=chunk-pz8fd9j0.js.map
