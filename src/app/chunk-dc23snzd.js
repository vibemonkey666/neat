// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { dos } from "./chunk-wrtp8qz8.js";
import { G } from "./chunk-fs43t96t.js";
import { bt, _, te } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { bl } from "./chunk-jwqtbev0.js";
import { rc, mH } from "./chunk-ajtyjx88.js";
import { Rl } from "./chunk-fnsjs1v2.js";
import { OUe } from "./chunk-83z0zmh5.js";
import { ys } from "./chunk-j0tbz6ra.js";
import { o, v, Ue } from "./chunk-0bqrj5ah.js";
import { rm as a } from "fs/promises";
import { join as t } from "path";
var s = ".pending-wakeup",
  m = 1024,
  u = p(() =>
    Ue({
      toolUseId: o().min(1).max(256),
      scheduledFor: v().int().positive(),
      chainStartedAt: v().int().nonnegative()
    })
  );
async function h3t(i, r) {
  let e = t(i, s);
  try {
    if (r === void 0) {
      if (
        await a(e, { force: !0 }).then(
          () => !0,
          (d) => (Rl(d), !1)
        )
      )
        return;
    }
    await OUe(e, r === void 0 ? "" : _(r));
  } catch (n) {
    if (!G(n)) Rl(n);
  }
}
async function ycs(i) {
  let r = await bl(t(i, s), m);
  if (!r) return null;
  try {
    let e = u().safeParse(te(r));
    return e.success ? e.data : null;
  } catch {
    return null;
  }
}
class Ieo {
  #o = Promise.resolve();
  #r = 0;
  #e;
  #i;
  constructor() {
    this.#i = dos(this.#n);
  }
  #n = (i) => {
    try {
      if (!rc()) return;
      let r = mH();
      if (r === void 0) return;
      if (i !== void 0 && ys()) return;
      this.#e ??= bt(() => this.#o);
      let e = ++this.#r;
      this.#o = this.#o.then(() => (e === this.#r ? h3t(r, i) : void 0));
    } catch (r) {
      l(r);
    }
  };
  flush() {
    return this.#o;
  }
  dispose() {
    (this.#i(), this.#o.then(() => this.#e?.()));
  }
}
export { h3t, ycs, Ieo };

//# sourceMappingURL=chunk-dc23snzd.js.map
