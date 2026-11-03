// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ht, cf } from "./chunk-gdcb8skc.js";
import { bg } from "./chunk-6bbdndfe.js";
import { p } from "./chunk-qmkm2x59.js";
import { wn } from "./chunk-wrtp8qz8.js";
import { oc } from "./chunk-vchq4g74.js";
import { MS } from "./chunk-7yq9w6fa.js";
import { Bc } from "./chunk-ajtyjx88.js";
import { bo, dM, lNe, F5, U5, akt, frt } from "./chunk-9zd34fgb.js";
import { cM } from "./chunk-jwqtbev0.js";
import { g7e } from "./chunk-6ngdk9eb.js";
import { Y1e, XRr, OEo } from "./chunk-j0tbz6ra.js";
import { Mn } from "./chunk-8gjxvrgz.js";
import { o, u, B, A } from "./chunk-0bqrj5ah.js";
var xlo = Object.freeze({
  delivered: () => {
    return;
  },
  refused: () => {
    return;
  },
  [Symbol.dispose]: () => {
    return;
  }
});
function b() {
  let e = Bc();
  return {
    setSessionSendRunner: e.set,
    runSessionSend: (t) => {
      let r = e.get();
      return r ? r(t) : Promise.resolve({ send: t.raised, delivering: xlo });
    }
  };
}
var c = b();
var Dgi = c.runSessionSend;
var Hgi = "Delivered by a plugin hook; nothing else was sent.";
var Lgi = c.setSessionSendRunner;
async function s_s({
  session: e,
  to: t,
  message: r,
  resolved: d,
  appState: n,
  agentLifecycle: s,
  storageV5: i,
  credentials: m
}) {
  if (typeof r !== "string") return { kind: "proceed", pin: void 0 };
  let a = h(d);
  if (a === null) return { kind: "proceed", pin: void 0 };
  let l = bo(a.name),
    f = Object.hasOwn(n.sendMessagePins, l) ? n.sendMessagePins[l] : void 0;
  if (f !== void 0 && f.id === a.id) return { kind: "proceed", pin: f };
  if (f !== void 0) {
    let y = F5(t) !== null;
    if (!y && t === a.name && t !== f.name) return { kind: "proceed", pin: void 0 };
    if (!y) {
      let x = oc(n.teamContext),
        [R, P, _] = await Promise.all([x ? MS(x, i) : null, XRr(), g7e(e, m)]),
        E = U5(n, { teamFile: R, sessions: P, cloud: _.sessions, bridge: OEo(e) }),
        g = akt(E.byName, l);
      return {
        kind: "rebound",
        name: a.name,
        previous: f,
        next: g?.kind === "one" && g.candidate.id === a.id ? g.candidate : void 0
      };
    }
  }
  let S = { id: a.id, name: a.name, ref: frt(a.kind, a.id) };
  return (s.setSendMessagePin(l, S), { kind: "proceed", pin: S });
}
function h(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return { kind: "subagent", id: e.agentId, name: e.agentName };
  }
}
var C = p(() =>
  u({
    success: A(!0),
    pin: u({
      name: o().min(1).max(cM),
      id: o()
        .max(1024)
        .refine((e) => bg(e) !== null),
      ref: o().regex(new RegExp(`^${lNe}$`))
    })
  })
);
function Rlo(e) {
  let t = new Map(),
    r = new Set();
  for (let d of e)
    if (d.type === "assistant") {
      let n = d.message.content;
      if (!Array.isArray(n)) continue;
      for (let s of n) if (s.type === "tool_use" && s.name === Mn) r.add(s.id);
    } else if (d.type === "user") {
      let n = d.message.content;
      if (!Array.isArray(n)) continue;
      if (n.find((m) => m.type === "tool_result" && !m.is_error && r.has(m.tool_use_id)) === void 0)
        continue;
      let i = C().safeParse(d.toolUseResult);
      if (!i.success) continue;
      t.set(bo(i.data.pin.name), { id: i.data.pin.id, name: i.data.pin.name, ref: i.data.pin.ref });
    }
  return Object.fromEntries(t);
}
function i_s(e, t) {
  let r = Rlo(e);
  return wn(r, t) ? null : r;
}
var L = p(() =>
    u({
      name: o()
        .regex(Y1e)
        .refine((e) => !dM(e))
    })
  ),
  D = p(() => u({ status: B(["async_launched", "completed"]), agentId: o() }));
function NDn(e, t) {
  let r = new Map(),
    d = new Map();
  for (let n of e)
    if (n.type === "assistant" && Array.isArray(n.message.content)) {
      for (let s of n.message.content)
        if (s.type === "tool_use" && (s.name === ht || s.name === cf)) {
          let i = L().safeParse(s.input);
          if (i.success && !t.has(i.data.name)) r.set(s.id, i.data.name);
        }
    } else if (n.type === "user" && Array.isArray(n.message.content)) {
      let [s, ...i] = n.message.content.filter((f) => f.type === "tool_result"),
        m = s !== void 0 && i.length === 0 && !s.is_error ? r.get(s.tool_use_id) : void 0;
      if (m === void 0) continue;
      let a = D().safeParse(n.toolUseResult),
        l = a.success ? bg(a.data.agentId) : null;
      if (l !== null) d.set(m, l);
    }
  return d.size > 0 ? new Map([...t, ...d]) : null;
}
export { s_s, Rlo, i_s, NDn, xlo, Dgi, Hgi, Lgi };

//# sourceMappingURL=chunk-v520kt92.js.map
