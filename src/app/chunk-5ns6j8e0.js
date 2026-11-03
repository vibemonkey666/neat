// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { O } from "./chunk-19xvg81r.js";
import { zTt } from "./chunk-d54avynm.js";
import { constants as t } from "fs";
function vc() {
  return t.O_RDONLY | zTe();
}
function zTe() {
  if (O() === "windows") return 0;
  return t.O_NOFOLLOW | t.O_NONBLOCK;
}
var kVs = [
  "aarch64-apple-darwin",
  "x86_64-apple-darwin",
  "aarch64-unknown-linux-musl",
  "x86_64-unknown-linux-musl"
];
function o(r, e) {
  let n = e === "arm64" ? "aarch64" : e === "x64" ? "x86_64" : void 0;
  if (n === void 0) return;
  switch (r) {
    case "macos":
      return `${n}-apple-darwin`;
    case "linux":
    case "wsl":
      return `${n}-unknown-linux-musl`;
    case "windows":
    case "unknown":
      return;
  }
}
var hFr = 268435456;
function yFr() {
  return o(O(), "x64");
}
function Xyt(r, e) {
  if (r.endsWith(`-${e}`)) {
    let n = r.slice(0, -(e.length + 1));
    return zTt.test(n) ? n : void 0;
  }
  if (r.endsWith(`-${e}.exe`)) {
    let n = r.slice(0, -(e.length + 5));
    return zTt.test(n) ? `${n}.exe` : void 0;
  }
  return;
}
export { vc, zTe, kVs, hFr, yFr, Xyt };

//# sourceMappingURL=chunk-5ns6j8e0.js.map
