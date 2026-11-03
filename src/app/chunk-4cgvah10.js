// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { es } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
function Z4t(t) {
  let e;
  for (let n in t)
    if (n.startsWith("_PROTO_")) {
      if (e === void 0) e = { ...t };
      delete e[n];
    }
  return e ?? t;
}
var u = 1000;
function l() {
  return { eventQueue: [], sink: null, droppedEventCount: 0 };
}
function i(t, e) {
  if (t.eventQueue.length >= u) (t.eventQueue.shift(), t.droppedEventCount++);
  t.eventQueue.push(e);
}
class r {
  state = l();
}
var c = new W(() => new r());
function s() {
  return es(c);
}
function ZZo(t) {
  let e = s().state;
  if (e.sink !== null) return !1;
  if (((e.sink = t), e.eventQueue.length > 0)) {
    let n = e.eventQueue;
    ((e.eventQueue = []),
      queueMicrotask(() => {
        for (let o of n)
          if (o.async) t.logEventAsync(o.eventName, o.metadata);
          else t.logEvent(o.eventName, o.metadata);
      }));
  }
  return !0;
}
function a(t, e) {
  let n = s().state;
  if (n.sink === null) {
    i(n, { eventName: t, metadata: e, async: !1 });
    return;
  }
  n.sink.logEvent(t, e);
}
async function Zs(t, e) {
  let n = s().state;
  if (n.sink === null) {
    i(n, { eventName: t, metadata: e, async: !0 });
    return;
  }
  await n.sink.logEventAsync(t, e);
}
export { Z4t, ZZo, a, Zs };

//# sourceMappingURL=chunk-4cgvah10.js.map
