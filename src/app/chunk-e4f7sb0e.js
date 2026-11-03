// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _, te } from "./chunk-4kxznmzw.js";
var Mht = 0,
  Zqn = 1,
  Jan = 262144,
  n = 5,
  Qan = 1048576,
  bDe = 1e4;
function Zan(r) {
  let e = typeof r === "string" ? Buffer.from(r, "utf8") : r,
    t = Buffer.allocUnsafe(n + e.length);
  return (t.writeUInt32BE(e.length, 0), t.writeUInt8(Mht, 4), e.copy(t, n), t);
}
function ZF(r) {
  let e = Buffer.from(_(r), "utf8"),
    t = Buffer.allocUnsafe(n + e.length);
  return (t.writeUInt32BE(e.length, 0), t.writeUInt8(Zqn, 4), e.copy(t, n), t);
}
function e4n(r, e) {
  let t = Buffer.alloc(0),
    o = !1;
  return (l) => {
    if (o) return;
    t = t.length === 0 ? l : Buffer.concat([t, l]);
    while (t.length >= n) {
      let f = t.readUInt32BE(0);
      if (f > Qan) {
        ((o = !0), e(`frame too large (${f} > ${Qan})`));
        return;
      }
      let u = n + f;
      if (t.length < u) return;
      let i = t.readUInt8(4),
        s = t.subarray(n, u);
      if (((t = t.subarray(u)), i === Mht)) r({ kind: Mht, payload: Buffer.from(s) });
      else if (i === Zqn) {
        let c;
        try {
          c = te(s.toString("utf8"));
        } catch {
          ((o = !0), e("bad ctrl json"));
          return;
        }
        r({ kind: Zqn, ctrl: c });
      } else {
        ((o = !0), e(`unknown frame kind ${i}`));
        return;
      }
    }
  };
}
export { Mht, Zqn, Jan, Qan, bDe, Zan, ZF, e4n };

//# sourceMappingURL=chunk-e4f7sb0e.js.map
