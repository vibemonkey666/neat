// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { X } from "./chunk-4hww8411.js";
import { Lv } from "./chunk-cm8k0hcd.js";
import { createInterface as b } from "readline";
var E = 5,
  pdt = 250,
  xoo = "That answer arrived too quickly after the question to count. Please answer again.";
async function N6e(
  e,
  a = process.stdin,
  { ignoreAnswersWithinMs: r = 0, reaskPreamble: c = "", signal: s } = {}
) {
  if (r > 0) {
    if (await R(a, r)) return !1;
  }
  if (s?.aborted === !0) return !1;
  let o = () => {},
    n = new Promise((d) => {
      o = d;
    }),
    t = b({ input: a, output: process.stdout }),
    f = 0,
    l = () => {
      let d = performance.now();
      t.question(`${e} [y/N] `, (m) => {
        if (r > 0 && performance.now() - d < r) {
          if (++f > E) {
            (o(!1), t.close());
            return;
          }
          (process.stdout.write(`${c}${xoo}
`),
            l());
          return;
        }
        let i = m.trim().toLowerCase();
        (o(i === "y" || i === "yes"), t.close());
      });
    };
  return (
    l(),
    t.once("close", () => o(!1)),
    s?.addEventListener("abort", () => t.close(), { once: !0 }),
    n
  );
}
async function R(e, a) {
  let r = "isTTY" in e && e.isTTY === !0,
    c = "isRaw" in e && e.isRaw === !0,
    s = !1,
    o = () => {
      s = !0;
    },
    n = () => {};
  if ((e.once("end", o), e.once("close", o), e.on("data", n), r)) Lv(e, !0);
  try {
    (e.resume(), await X(a));
  } finally {
    if (
      (e.removeListener("data", n),
      e.removeListener("end", o),
      e.removeListener("close", o),
      e.pause(),
      r)
    )
      Lv(e, c);
  }
  return (
    s ||
    ("readableEnded" in e && e.readableEnded === !0) ||
    ("destroyed" in e && e.destroyed === !0)
  );
}
export { pdt, xoo, N6e };

//# sourceMappingURL=chunk-16vs4h5f.js.map
