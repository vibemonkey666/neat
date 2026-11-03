// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { freemem as o } from "os";
function xeo() {
  let e = k("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (e <= 0) return { lowMem: !1, level: void 0 };
  if (O() !== "macos") return { lowMem: o() < e, level: void 0 };
  let n = m();
  return { lowMem: n !== void 0 && n >= l, level: n };
}
function gwe() {
  return xeo().lowMem;
}
var r = { normal: 1, warning: 2, critical: 4 },
  l = r.critical;
function m() {
  try {
    let e = Bun.ant.memoryPressureLevel();
    return e === null ? void 0 : r[e];
  } catch (e) {
    t(`bg low-mem: memoryPressureLevel failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "warn"
    });
    return;
  }
}
function Peo() {
  return k("tengu_bg_attach_upgrade", !0);
}
export { xeo, gwe, Peo };

//# sourceMappingURL=chunk-kx54qvc0.js.map
