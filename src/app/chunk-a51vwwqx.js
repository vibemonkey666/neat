// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { G } from "./chunk-fs43t96t.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Dn } from "./chunk-qywdxehb.js";
import { mkdir as v, readFile as g } from "fs/promises";
import { dirname as P } from "path";
function hde(e, f, c) {
  let { defaultValue: a, mode: T, ensureDir: s = !1, indent: p, trailingNewline: w = !1 } = c;
  function u() {
    return S(a) ? a() : a;
  }
  async function m() {
    let n;
    try {
      n = await g(e, "utf8");
    } catch (i) {
      if (G(i)) return u();
      throw i;
    }
    let r;
    try {
      r = te(n);
    } catch (i) {
      return (t(`jsonStore: ${e} is not valid JSON: ${i}`, { level: "warn" }), u());
    }
    let o = f().safeParse(r);
    if (!o.success)
      return (
        t(`jsonStore: ${e} failed schema validation: ${o.error.message}`, { level: "warn" }),
        u()
      );
    return o.data;
  }
  async function d(n) {
    if (s !== !1) await v(P(e), { recursive: !0, mode: s === !0 ? void 0 : s.mode });
    let r =
      _(n, null, p) +
      (w
        ? `
`
        : "");
    await Dn(e, r, T);
  }
  let l = Promise.resolve();
  function y(n) {
    let r = l.then(async () => {
      let o = n(await m());
      return (await d(o), o);
    });
    return (
      (l = r.then(
        () => {
          return;
        },
        () => {
          return;
        }
      )),
      r
    );
  }
  return {
    path() {
      return e;
    },
    read: m,
    write: d,
    update: y
  };
}
function S(e) {
  return typeof e === "function";
}
export { hde };

//# sourceMappingURL=chunk-a51vwwqx.js.map
