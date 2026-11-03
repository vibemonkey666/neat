// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, q, J } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { We } from "./chunk-pgnjjhxv.js";
import { Le } from "./chunk-jazcqqqr.js";
import { Yde } from "./chunk-645q4bx1.js";
import { Wy, _, Vo } from "./chunk-4kxznmzw.js";
import { ece } from "./chunk-bbw420pv.js";
import { Ti } from "./chunk-0v8111n2.js";
import { ZG } from "./chunk-q1myka9a.js";
import { et } from "./chunk-c9re0p40.js";
import { z } from "./chunk-p197ae0z.js";
import { promises as f } from "fs";
import { dirname as h, join as y } from "path";
var g = new Set([
    "model",
    "system",
    "tools",
    "max_tokens",
    "thinking",
    "output_config",
    "context_management",
    "metadata"
  ]),
  S = new Set([...g, "thread"]),
  D = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload)=[^;"\\]*;/g,
  R = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g,
  k = 5;
class l {
  recording = !0;
}
var A = new W(() => new l());
function w() {
  return A.of(U().host).recording;
}
function qTs(t) {
  let { stateByAgent: n, retiredInitHashes: e } = Ti().dumpPrompts,
    r = n.get(t)?.writtenInitDataHash;
  if ((n.delete(t), r !== void 0)) e.set(t, r);
}
function YTs() {
  (Ti().dumpPrompts.stateByAgent.clear(), Ti().dumpPrompts.retiredInitHashes.clear());
}
function H(t) {
  return;
}
function P(t) {
  return y(Le(), "dump-prompts", `${t ?? q()}.jsonl`);
}
function E(t, n, e, r) {
  Ti()
    .dumpPrompts.appendQueue.run(t, async () => {
      if (e) {
        if (
          (
            await e.storageV5.append(e.key, [
              {
                data:
                  n +
                  `
`
              }
            ])
          ).ok
        )
          r();
        return;
      }
      if (J()) return;
      (await f.mkdir(h(t), { recursive: !0 }),
        await f.appendFile(
          t,
          n +
            `
`
        ),
        r());
    })
    .catch(() => {});
}
function v(t, n, e, r, p) {
  try {
    return;
  } catch {
  } finally {
    e.dumpInFlight = !1;
  }
}
function XTs(t, n) {
  if (!w()) return ece;
  let e = P(t),
    r = z() && n !== void 0 ? { storageV5: n, key: We.log(t, "apiDump") } : void 0;
  return async (p, u) => {
    let { stateByAgent: m, retiredInitHashes: d } = Ti().dumpPrompts,
      i = d.get(t),
      o = m.get(t) ?? {
        initialized: i !== void 0,
        lastInitDataHash: i ?? "",
        writtenInitDataHash: i,
        dumpInFlight: !1
      };
    if ((m.set(t, o), u?.method === "POST" && u.body && !o.dumpInFlight)) {
      o.dumpInFlight = !0;
      let c = new Date().toISOString();
      setImmediate(v, u.body, c, o, e, r);
    }
    return ece(p, u);
  };
}
function x(t) {
  let n = t.get("thread");
  if (n === void 0) return !1;
  let e = Vo(n);
  if (typeof e !== "object" || e === null || !("type" in e) || e.type !== "continue") return !1;
  if (!t.has("tools")) return !0;
  let r = Vo(t.get("system") ?? "null");
  return Array.isArray(r) && r.length > 0 && r.every((p) => ZG(p));
}
export { qTs, YTs, XTs };

//# sourceMappingURL=chunk-3yfnz98y.js.map
