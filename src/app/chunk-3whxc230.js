// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uF } from "./chunk-wrtp8qz8.js";
import { MJs, Si } from "./chunk-crvt0hax.js";
import { lde } from "./chunk-6h7ejyet.js";
function kLn(t, r) {
  Si("user_prompt", { prompt_length: String(r?.length ?? 0), ...MJs(r), ...t.attributes });
}
function Bb(t) {
  let r = t.trim();
  if (!r.startsWith("/")) return null;
  let { name: e, args: n } = lde(r);
  if (!e) return null;
  let o = "(MCP)";
  if (n === o) return { commandName: `${e} ${o}`, args: "", isMcp: !0 };
  if (n.startsWith(o) && /\s/.test(n.charAt(o.length)))
    return { commandName: `${e} ${o}`, args: n.slice(o.length).trimStart(), isMcp: !0 };
  return { commandName: e, args: n, isMcp: !1 };
}
function EIe(t, r) {
  if (!t.subcommands) return;
  let e = r.trimStart(),
    n = e.search(/\s/),
    o = n === -1 ? e : e.slice(0, n),
    s = o ? t.subcommands[o.toLowerCase()] : void 0;
  if (s === void 0) return;
  let m = n === -1 ? "" : e.slice(n + 1).trim();
  if (t.subcommandsBareOnly && m !== "") return;
  return { targetName: s, consumedToken: o, remainingArgs: m };
}
function iQt(t, r) {
  let e = uF();
  if (r === void 0) {
    kLn(t, t.text);
    return;
  }
  r({ text: t.text, attributes: { ...(e && { "prompt.id": e }), ...t.attributes } });
}
var _Ot = (t) => (typeof t === "string" ? t : t.map((r) => ({ ...r })));
export { Bb, EIe, kLn, iQt, _Ot };

//# sourceMappingURL=chunk-3whxc230.js.map
