// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { KH } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { kp } from "./chunk-ajtyjx88.js";
import { $io, Fio } from "./chunk-zvkjf0mf.js";
import { Rl } from "./chunk-fnsjs1v2.js";
class i {
  activePark = null;
}
var s = new W(() => new i());
async function Mat(r, e, n, a) {
  if (!kp()) return !1;
  let o = s.of(r),
    t = await $io(e, n, a);
  switch (t.kind) {
    case "refused":
      return !1;
    case "already":
      if (o.activePark?.needs !== e) d(o, e, { tempo: "idle", needs: void 0, detail: "" }, a);
      return !0;
    case "wrote":
      return (d(o, e, t.prior, a), !0);
  }
}
function d(r, e, n, a) {
  r.activePark?.unsubscribe();
  let o = KH(() => {
    if (kp()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    ((r.activePark = null), t.unsubscribe(), Fio(e, t.prior, t.storageV5).catch(Rl));
  });
  r.activePark = { needs: e, prior: n, storageV5: a, unsubscribe: o };
}
export { Mat };

//# sourceMappingURL=chunk-320aj1fh.js.map
