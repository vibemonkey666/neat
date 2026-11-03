// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { es, J, cm } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { bt, _, ie } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { dirname as m } from "path";
import { AsyncLocalStorage as u } from "async_hooks";
function ikn(e, t) {
  let n = !1;
  for (let o of e) {
    let s = o.deref();
    if (s === void 0) e.delete(o);
    else if (s === t) n = !0;
  }
  if (n) return !1;
  return (e.add(new WeakRef(t)), !0);
}
function Sst(e) {
  let t = [];
  for (let n of e) {
    let o = n.deref();
    if (o === void 0) e.delete(n);
    else t.push(o);
  }
  return t;
}
var p = new u(),
  f = !1;
function Hse() {
  return f;
}
function Nfe() {
  return p.getStore() !== void 0;
}
var l = new W(() => new Set());
function S() {
  return es(l);
}
function Hui() {
  let e = [];
  for (let t of Sst(S())) {
    let n = t.session?.hookRegistry;
    e.push(
      n ? n.holder().registeredHooks : t.registeredHooks,
      n ? n.mainThreadAgentHooks() : t.mainThreadAgentHooks
    );
  }
  return e;
}
function d() {}
async function k(e, t) {
  let n = ie();
  try {
    await n.appendFile(e, t);
  } catch {
    (await n.mkdir(m(e)).catch(d), await n.appendFile(e, t));
  }
}
class c {
  pendingWrite = Promise.resolve();
  cleanupRegistered = !1;
  append(e, t) {
    if (
      ((this.pendingWrite = this.pendingWrite.then(k.bind(null, e, t)).catch(d)),
      !this.cleanupRegistered)
    )
      ((this.cleanupRegistered = !0), bt(() => this.flush()));
  }
  flush() {
    return this.pendingWrite;
  }
}
var h = new W(() => new c());
function g() {
  return es(h);
}
function Y(e, t, n, o = "queued") {
  let s = x();
  if (!s) return;
  let r;
  try {
    r = a(e, t, y(n));
  } catch {
    r = a(e, t, { diagnostics_payload_failed: !0 });
  }
  if (o === "now")
    try {
      ie().appendFileSync(s, r);
    } catch {}
  else g().append(s, r);
}
function y(e) {
  try {
    return (typeof e === "function" ? e() : e) ?? {};
  } catch {
    return { diagnostics_payload_failed: !0 };
  }
}
function a(e, t, n) {
  let o = { timestamp: new Date().toISOString(), level: e, event: t, data: n };
  return (
    _(o) +
    `
`
  );
}
function D$e() {
  return g().flush();
}
function x() {
  return C() ? void 0 : i.CLAUDE_CODE_DIAGNOSTICS_FILE;
}
function C() {
  return Nfe() ? J() : cm();
}
async function CAt(e, t, n) {
  let o = Date.now();
  Y("info", `${e}_started`);
  try {
    let s = await t(),
      r = n ? n(s) : {};
    return (Y("info", `${e}_completed`, { duration_ms: Date.now() - o, ...r }), s);
  } catch (s) {
    throw (Y("error", `${e}_failed`, { duration_ms: Date.now() - o }), s);
  }
}
export { ikn, Sst, Hse, Nfe, Hui, Y, D$e, CAt };

//# sourceMappingURL=chunk-arw2bgak.js.map
