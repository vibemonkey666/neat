// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, G } from "./chunk-fs43t96t.js";
import { rr } from "./chunk-ak0cmk10.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { o, T, u, A } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
import { dirname as l, join as w } from "path";
var b = 50,
  D = p(() => u({ version: A(1), sessions: T(u({ id: o(), reason: o(), at: o() })) })),
  f = "device-unbound-creates";
function c() {
  return w(Le(), "state", `${f}.json`);
}
async function m(r) {
  let i = await r.readText();
  if (i === void 0) return [];
  let n = y(i);
  if (!n.success) return [];
  let e = await r.retentionCutoff();
  return e === null ? n.data.sessions : n.data.sessions.filter((s) => !v(s.at, e));
}
function y(r) {
  try {
    return D().safeParse(te(r));
  } catch {
    return { success: !1 };
  }
}
function v(r, i) {
  let n = Date.parse(r);
  return Number.isNaN(n) || n < i.getTime();
}
async function gAi(r, i, n) {
  try {
    let e = rr(r),
      a = [
        ...(await m(n)).filter((g) => rr(g.id) !== e),
        { id: e, reason: i, at: n.now().toISOString() }
      ].slice(-b);
    await n.writeText(
      _({ version: 1, sessions: a }, null, 2) +
        `
`
    );
  } catch (e) {
    t(`[deviceBind] unbound create not recorded (${d(e)})`);
  }
}
async function sho(r, i, n) {
  try {
    let e = rr(r),
      s = (await m(n)).find((a) => rr(a.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0;
  } catch (e) {
    t(`[deviceBind] unbound-create record unreadable (${d(e)})`);
    return;
  }
}
function iho(r) {
  let i = z() && r !== void 0 ? r : void 0,
    n = We.state(f);
  return {
    readText: async () => {
      if (i) {
        let e = await i.readText([n]);
        if (!e.ok) throw Error("device unbound-creates read failed");
        let s = e.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await hn().read(c());
      } catch (e) {
        if (G(e)) return;
        throw e;
      }
    },
    writeText: async (e) => {
      if (i) {
        if (!(await i.write(n, e, { mode: 384 })).ok)
          throw Error("device unbound-creates write failed");
        return;
      }
      let s = c();
      (await hn().mkdir(l(s), 448), await hn().atomicWrite(s, e, 384));
    },
    now: () => new Date(),
    retentionCutoff: async () => {
      let e = await import("./chunk-xsm95eag.js");
      return (await e.isRetentionCleanupSafe(r, 0)) ? e.getCutoffDate() : null;
    }
  };
}
export { gAi, sho, iho };

//# sourceMappingURL=chunk-dezjyrb9.js.map
