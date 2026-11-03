// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { rr } from "./chunk-ak0cmk10.js";
import { uI, ue } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { p } from "./chunk-qmkm2x59.js";
import { o, v, T, u, A } from "./chunk-0bqrj5ah.js";
import { createHash as l } from "crypto";
var f = 64,
  c = p(() =>
    u({
      generation: v().int().min(1),
      etag: o().optional(),
      allow: T(o()),
      at: v(),
      tried: A(!0).optional()
    })
  );
function dho(n) {
  return l("sha256").update(n, "utf8").digest("hex").slice(0, 32);
}
function m(n) {
  return rr(n);
}
function lZt(n) {
  let e = ue().remoteHomeSettingsSent?.[m(n)];
  if (e === void 0) return;
  let r = c().safeParse(e);
  return r.success ? r.data : void 0;
}
function aAs(n) {
  let e = lZt(n);
  return e !== void 0 && e.tried !== !0;
}
async function ZEr(n, e, r) {
  let i = m(n);
  if (
    !(await uI(
      (d) => ({
        ...d,
        remoteHomeSettingsSent: w({
          ...d.remoteHomeSettingsSent,
          [i]: S(d.remoteHomeSettingsSent?.[i], e)
        })
      }),
      r
    ))
  )
    (a("tengu_home_seed_record_unwritten", {}),
      t("home settings: the record of what was sent could not be written", { level: "warn" }));
}
function S(n, e) {
  let r = c().safeParse(n).data,
    { tried: i, ...s } = e,
    d = !e.etag && (r ? r.tried : e.tried);
  return {
    ...s,
    ...(d && { tried: !0 }),
    generation: Math.max(e.generation, r?.generation ?? 0),
    allow: e.allow.filter((g) => e.etag || !r || r.allow.includes(g))
  };
}
function w(n) {
  let e = Object.entries(n).flatMap(([r, i]) => {
    let s = c().safeParse(i);
    return s.success && Number.isFinite(s.data.at) ? [[r, s.data]] : [];
  });
  return Object.fromEntries(e.toSorted(([, r], [, i]) => i.at - r.at).slice(0, f));
}
export { dho, lZt, aAs, ZEr };

//# sourceMappingURL=chunk-rn3z3xww.js.map
