// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Yn, Sg } from "./chunk-h5gbmqm1.js";
import { Pq } from "./chunk-a16y5hcz.js";
import { posix as a } from "path";
var p7n = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,
  c = new RegExp(`^[${p7n}]+`, "u");
function NGo(n) {
  return n.replace(c, "");
}
function kGr(n, r = FGo(n)) {
  return Yn(n) || lwt(n) || Pq.test(r[0]) || r.map(NGo).some((e) => Yn(e) || lwt(e));
}
var u = /^\.\.\//;
function lwt(n) {
  return Sg(n) || Sg(a.normalize(n).replace(u, "/")) || (l(n) && Sg("/" + n));
}
function l(n) {
  let r = a.normalize(n);
  return r === ".." || r.startsWith("../");
}
function $Go(n) {
  let r = n.slice(7);
  return kGr(r) || kGr(r.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g,
  f = /^%[0-9A-Fa-f]{2}/;
function FGo(n) {
  if (!n.includes("%")) return [n, n];
  let r = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
  return [
    n.replace(i, (e, t) => {
      let o = t + e.length;
      return r.decode(s(e), { stream: f.test(n.slice(o, o + 3)) });
    }),
    n.replace(i, (e) => Array.from(s(e), (t) => String.fromCharCode(t)).join(""))
  ];
}
function s(n) {
  return Uint8Array.from(n.slice(1).split("%"), (r) => parseInt(r, 16));
}
export { p7n, NGo, kGr, lwt, $Go, FGo };

//# sourceMappingURL=chunk-971jjch9.js.map
