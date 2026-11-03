// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { createServer as b } from "http";
function atn(n) {
  let r = Array.isArray(n) ? n[0] : n;
  return r ? r : void 0;
}
var f = 3118;
function p() {
  return {
    range: O() === "windows" ? { min: 39152, max: 49151 } : { min: 49152, max: 65535 },
    fallback: f
  };
}
function t9e(n = f) {
  return `http://localhost:${n}/callback`;
}
function A() {
  let n = i.MCP_OAUTH_CALLBACK_PORT;
  return n !== void 0 && n <= 65535 ? n : void 0;
}
async function bOe(n, r = p()) {
  let t = A();
  if (t) return t;
  if (n && (await u(n))) return n;
  let { min: e, max: o } = r.range,
    a = o - e + 1,
    l = Math.min(a, 100);
  for (let s = 0; s < l; s++) {
    let c = e + Math.floor(Math.random() * a);
    if (await u(c)) return c;
  }
  if (await u(r.fallback)) return r.fallback;
  let d = await m(0);
  if (d !== void 0) return d;
  throw Error("No available ports for OAuth redirect");
}
async function u(n) {
  return (await m(n)) !== void 0;
}
async function m(n) {
  try {
    return await new Promise((r, t) => {
      let e = b();
      (e.once("error", t),
        e.listen(n, "127.0.0.1", () => {
          let o = e.address(),
            a = typeof o === "object" && o ? o.port : void 0;
          e.close(() => (a !== void 0 ? r(a) : t(Error("no address on bound server"))));
        }));
    });
  } catch {
    return;
  }
}
export { atn, t9e, bOe };

//# sourceMappingURL=chunk-bw100rmb.js.map
