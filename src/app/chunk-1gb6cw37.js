// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { q } from "./chunk-wrtp8qz8.js";
import { E, Vt } from "./chunk-fs43t96t.js";
import { ie } from "./chunk-4kxznmzw.js";
import { xM } from "./chunk-qywdxehb.js";
import { jd } from "./chunk-v4kbwz0z.js";
import { cE } from "./chunk-dc0nzty2.js";
import { lstat as u, readdir as w, rmdir as g, unlink as y } from "fs/promises";
import { dirname as h, join as l } from "path";
var Hho = "images",
  Lho = /^(\d+)\.[a-z]+$/;
async function kAs(a, p) {
  let e = { removed: 0, errors: 0 },
    r = ie(),
    n,
    i;
  try {
    ((n = await r.realpath(p ?? jd())), (i = await r.readdir(n)));
  } catch {
    return e;
  }
  let o = q();
  for (let t of i) {
    if (!t.isDirectory()) continue;
    let s = l(n, t.name),
      c;
    try {
      c = await r.readdir(s);
    } catch {
      continue;
    }
    for (let m of c) {
      if (!m.isDirectory() || m.name === o || Kt(m.name) === null) continue;
      let d = l(s, m.name, Hho);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await I(d, a)) e.removed++;
      } catch (f) {
        if (!Vt(f)) e.errors++;
      }
    }
  }
  return e;
}
async function I(a, p) {
  let e = await cE(a, [a], { leaf: "replace" });
  try {
    await e.recheckBeforeWrite();
    let r = await u(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return !1;
    let n = l(a, "any"),
      i = await cE(n, [n], { leaf: "replace" });
    try {
      let o = h(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await w(o)) {
        let s = t.lastIndexOf(".tmp."),
          c = s === -1 ? t : t.slice(0, s);
        if (!Lho.test(c) || (s !== -1 && !xM(t, c))) continue;
        (await i.recheckBeforeWrite(), await y(l(o, t)).catch(() => {}));
      }
    } finally {
      await i.close();
    }
    await e.recheckBeforeWrite();
    try {
      await g(e.ioPath);
    } catch (o) {
      let t = E(o);
      if (t === "ENOTEMPTY" || t === "EEXIST") return !1;
      throw o;
    }
    return !0;
  } finally {
    await e.close();
  }
}
export { Hho, Lho, kAs };

//# sourceMappingURL=chunk-1gb6cw37.js.map
