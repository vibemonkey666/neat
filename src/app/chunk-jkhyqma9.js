// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Dn } from "./chunk-qywdxehb.js";
import { vb, kd } from "./chunk-bh50mq9d.js";
import { p } from "./chunk-qmkm2x59.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { o, v, u, A } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { randomBytes as g, timingSafeEqual as y } from "crypto";
import { unlinkSync as h } from "fs";
import { mkdir as S, open as w, readdir as R, unlink as f } from "fs/promises";
import { homedir as b } from "os";
import { dirname as P, join as m } from "path";
var x = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/,
  c = 4096,
  z = p(() =>
    u({ version: A(1), pid: v().int().positive(), procStart: o().min(1), nonceSha256: o() })
  );
function l() {
  return m(b(), ".claude", "state", "unattended-serving-runs");
}
function a(n) {
  return m(l(), `${n}.json`);
}
async function uAi() {
  try {
    let n = await vb();
    if (n === void 0) return;
    let e = g(32).toString("hex"),
      r = a(process.pid);
    return (
      await S(P(r), { recursive: !0, mode: 448 }),
      await Dn(
        r,
        `${_({ version: 1, pid: process.pid, procStart: n, nonceSha256: et(e) })}
`,
        384
      ),
      await B(),
      process.once("exit", () => {
        try {
          h(r);
        } catch {}
      }),
      {
        token: `${process.pid}.${e}`,
        remove: async () => {
          try {
            await f(r);
          } catch {}
        }
      }
    );
  } catch (n) {
    t(`unattended run grant: not recorded (${d(n)})`, { level: "warn" });
    return;
  }
}
async function Xmo(n) {
  try {
    let e = n === void 0 ? null : x.exec(n);
    if (!e) return !1;
    let r = Number(e[1]),
      i = await T(a(r));
    if (i === void 0 || i.pid !== r || !j(i.nonceSha256, et(e[2])) || !Xa(r)) return !1;
    return (await kd(r, { skipCache: !0 })) === i.procStart;
  } catch {
    return !1;
  }
}
async function T(n) {
  let e;
  try {
    e = await w(n, "r");
    let r = Buffer.alloc(c + 1),
      { bytesRead: i } = await e.read(r, 0, r.length, 0);
    if (i > c) return;
    let s = z().safeParse(te(r.subarray(0, i).toString("utf8")));
    return s.success ? s.data : void 0;
  } catch {
    return;
  } finally {
    await e?.close().catch(() => {});
  }
}
function j(n, e) {
  let r = Buffer.from(n),
    i = Buffer.from(e);
  return r.length === i.length && y(r, i);
}
async function B() {
  try {
    for (let n of await R(l())) {
      let e = Number(/^([1-9][0-9]{0,9})\.json$/.exec(n)?.[1]);
      if (Number.isInteger(e) && !Xa(e)) await f(a(e)).catch(() => {});
    }
  } catch {}
}
export { uAi, Xmo };

//# sourceMappingURL=chunk-jkhyqma9.js.map
