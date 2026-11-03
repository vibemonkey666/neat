// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { So } from "./chunk-wrtp8qz8.js";
import { p } from "./chunk-qmkm2x59.js";
import { _ } from "./chunk-4kxznmzw.js";
import { aE } from "./chunk-5rw2zfa0.js";
import { ln, Fh, pe, kb } from "./chunk-7c3thgax.js";
import { Lp } from "./chunk-d5zj5299.js";
import { FY, mce } from "./chunk-krgv9fvy.js";
import { oo, Va } from "./chunk-39ayby14.js";
import { EK } from "./chunk-j0tbz6ra.js";
import { LFe } from "./chunk-j36zp7t4.js";
import { ewe, D2, H2 } from "./chunk-bha6jwbq.js";
import { Hcr } from "./chunk-9xbceqjs.js";
import { M2 } from "./chunk-seveay88.js";
import { _dt, Sdt } from "./chunk-he7sp1nh.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { o, v, M, u, B, A } from "./chunk-0bqrj5ah.js";
var Sis = "ReadFileForRemote",
  b5t = 4194304,
  g = 3000000,
  d = p(() =>
    u({
      path: o().max(ewe),
      max_bytes: v().optional(),
      encoding: B(["utf-8", "base64"]).optional()
    })
  ),
  f = p(() => d().extend({ permission_context: D2() }).strict()),
  w = p(() =>
    u({
      file: u({
        contents: o().refine(m),
        truncated: M().optional(),
        encoding: A("base64").optional()
      }).optional()
    })
  );
async function wis(e, c, r) {
  if (mn(e) && H2(e.permission_context)) throw Error("permission_context is too large");
  let { permission_context: l, path: n, max_bytes: t, encoding: a } = f().parse(e),
    i = r.launchPermissionContext && S5t(r.launchPermissionContext),
    s =
      i &&
      (await LFe(
        n,
        t && Math.min(t, g),
        {
          ...M2(l, i, So(r.session).originalCwd),
          ...(i.blockReadsOutsideWorkingDirectories && { blockReadsOutsideWorkingDirectories: !0 })
        },
        { encoding: a, telemetrySource: "headless_stream" }
      ).catch(() => {
        return;
      }));
  if (s && !m(s.contents)) throw Error("the file is too large to send back as text");
  return { summary: s ? `${s.contents.length} characters` : "read denied", output: { file: s } };
}
function S5t(e) {
  let c = [...kb()],
    r = mce("policySettings"),
    l = [pe("policySettings")];
  for (let [t, a] of [
    ["userSettings", ln("userSettings")],
    ["projectSettings", ln("projectSettings")],
    ["localSettings", ln("localSettings")],
    ["localSettings", Fh()]
  ])
    if (a !== void 0) {
      let i = aE(a);
      (c.push(...i.errors), r.push(...FY(i.settings, t)), l.push(i.settings));
    }
  if ((Sdt(_dt(c).slice(0, 10)), Hcr())) return;
  let n = EK(
    e,
    r.filter((t) => t.ruleBehavior !== "allow"),
    { announce: !1 }
  );
  return oo(n, Lp) || Va(n, Lp)
    ? void 0
    : {
        ...n,
        blockReadsOutsideWorkingDirectories: l.some(
          (t) => t?.permissions?.blockReadsOutsideWorkingDirectories
        )
      };
}
function m(e) {
  return e.length <= b5t && Buffer.byteLength(_(e)) <= b5t;
}
export { Sis, b5t, wis, S5t };

//# sourceMappingURL=chunk-wpqtrh1y.js.map
