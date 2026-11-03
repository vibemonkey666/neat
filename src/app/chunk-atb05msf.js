// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ZLe, _oe } from "./chunk-pbffp8rf.js";
import { AHn } from "./chunk-kmw53scq.js";
import { uun } from "./chunk-q85nvv4x.js";
import { L } from "./chunk-wrtp8qz8.js";
var Gdo = Object.freeze(["attachment", "hook-context", "compaction"]);
function zdo(t) {
  return t !== void 0 && t.length > 0 && t.every((r) => Gdo.includes(r))
    ? t.map((r) => `session.append{door=${r}}`)
    : [];
}
var Kdo = Object.freeze([
  "prompt.section",
  "prompt.context",
  "prompt.attachment",
  "prompt.compose",
  "skill.prompt",
  "attribution.text",
  "session.compact",
  "settings.read"
]);
function Vdo(t) {
  return t.filter((o) => {
    let r = ZLe.filter((e) => _oe(o, e));
    return r.length > 0 && r.every((e) => e.startsWith("classic.") || Kdo.includes(e));
  });
}
function Gbr(t) {
  return (t.some(uun) ? t.filter((e) => e.tier === "user") : []).flatMap((e) => {
    let s = e.registrationsFor("session.append"),
      n = L([
        ...Vdo(e.patterns),
        ...s.flatMap((p) =>
          zdo(
            AHn(
              e.matcherFor(
                "session.append",
                s.filter((a) => a !== p)
              )
            )
          )
        )
      ]);
    return n.length > 0
      ? [{ type: "hooks-passed-over", source: e.args.pluginStorageId, patterns: n }]
      : [];
  });
}
export { Gdo, zdo, Kdo, Vdo, Gbr };

//# sourceMappingURL=chunk-atb05msf.js.map
