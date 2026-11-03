// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { mV } from "./chunk-5z6t3gwt.js";
import { Qu, Nmn, nj } from "./chunk-wany0nxw.js";
import { fe } from "./chunk-xe386mry.js";
import { randomBytes as l } from "crypto";
function jvi(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${l(12).toString("hex")}`);
  return Gcr(e?.content ?? "", t.data, e?.is_error === !0);
}
function Gcr(o, t, e = !1, r = []) {
  return nj({
    envelope: {
      v: Qu,
      outcome: "completed",
      target: T5t(),
      is_error: e,
      content: Nmn(o),
      output: t,
      ...(r.length > 0 && { notes: r })
    },
    content: o
  });
}
function T5t() {
  return { name: mV(), working_dir: fe() };
}
export { jvi, Gcr, T5t };

//# sourceMappingURL=chunk-eedg8dqe.js.map
