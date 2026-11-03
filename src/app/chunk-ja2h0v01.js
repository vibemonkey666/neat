// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { m } from "./chunk-brszmkb3.js";
import { Lnr, Ant } from "./chunk-ajtyjx88.js";
import { rgt, nWe, iJe, $Or, GF, Oe, M_ } from "./chunk-j0tbz6ra.js";
import { Uo, Gd, Bs, wTe } from "./chunk-6h7ejyet.js";
import { m8, vQ } from "./chunk-783pymr7.js";
import { Bb, EIe } from "./chunk-3whxc230.js";
function XEi(o) {
  let { inputString: e, context: n, uuid: r, origin: t, verifiedSlackHumanTurn: s } = o,
    i = C(e, n.options.commands, !1);
  if (i === void 0) return { kind: "none" };
  let { folded: d, effectiveCmd: l } = i,
    c = nWe(l, { origin: t, relayAuthored: s === !0 });
  if (rgt(l) && c)
    return { kind: "updated", effectiveSkipSlash: !1, effectiveInput: e, effectiveContext: n };
  let u = iJe(l);
  if (u && Gd(l)) {
    let f = { ...u, isEnabled: () => Gd(l) };
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: d
        ? `/${u.name}${d.args ? ` ${d.args}` : ""}`
        : e.replace(/^\/\S+/, `/${u.name}`),
      effectiveContext: { ...n, options: { ...n.options, commands: [f, ...n.options.commands] } },
      bridgeRewrite: f
    };
  }
  return {
    kind: "blocked",
    result: p({ target: i, inputString: e, uuid: r, origin: t, surface: "bridge" })
  };
}
function h(o, e) {
  if (!nWe(o, { origin: e.origin, relayAuthored: e.relayAuthored })) return !1;
  if (o === e.bridgeRewrite) return !0;
  if (!e.relayAuthored && !e.bridgeCarried) return !0;
  return e.inboundOrigin === Lnr || e.inboundOrigin === Ant || $Or(o);
}
function JEi(o) {
  let { inputString: e, context: n, uuid: r, origin: t, inboundOrigin: s } = o,
    i = C(e, n.options.commands, !0);
  if (
    i === void 0 ||
    h(i.effectiveCmd, {
      origin: t,
      relayAuthored: !0,
      inboundOrigin: s,
      bridgeCarried: !1,
      bridgeRewrite: void 0
    })
  )
    return { kind: "none" };
  return {
    kind: "blocked",
    result: p({ target: i, inputString: e, uuid: r, origin: t, surface: "relay" })
  };
}
function QEi(o) {
  let { cmd: e, commandName: n, args: r, inputString: t, uuid: s, author: i } = o;
  if (h(e, i)) return;
  let d = Bb(t);
  return p({
    target: {
      parsed: { commandName: d?.commandName ?? n, args: r, isMcp: !1 },
      cmd: e,
      folded: void 0,
      effectiveCmd: e
    },
    inputString: t,
    uuid: s,
    origin: i.origin,
    surface: i.bridgeCarried ? "bridge" : "relay"
  });
}
function p({
  target: { parsed: o, cmd: e, folded: n, effectiveCmd: r },
  inputString: t,
  uuid: s,
  origin: i,
  surface: d
}) {
  let { sanitizedName: l, skillNameHash: c } = m8({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: GF().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && vQ(e)
  });
  (a("tengu_slash_command_unavailable", {
    command_name: l,
    ...c,
    surface: d === "bridge" ? b("bridge") : b("relay"),
    reason:
      d === "bridge" ? b("unavailable_over_remote_control") : b("withheld_from_relay_participant")
  }),
    m("cmd_dispatch", "cmd_unavailable_bridge"));
  let u = n ? `/${Uo(e)} ${n.consumedToken}` : `/${Uo(r)}`,
    f =
      d === "bridge"
        ? `${u} isn't available over Remote Control.`
        : `${u} isn't available to a relay participant.`,
    g = wTe(e, o.args) || wTe(r, n ? n.args : o.args) ? `/${o.commandName} ***` : t,
    S = Oe({ content: g, uuid: s, origin: i });
  return (
    (S.queueSkipSlashCommands = !0),
    {
      messages: [S, M_(`<local-command-stdout>${f}</local-command-stdout>`)],
      shouldQuery: !1,
      resultText: f
    }
  );
}
function C(o, e, n) {
  let r = Bb(o);
  if (r === null) return;
  let t = Bs(r.commandName, e),
    s = r.args;
  if (n && (t === void 0 || !Gd(t))) {
    let c = s.trimStart(),
      u = c.search(/\s/),
      f = u === -1 ? c : c.slice(0, u),
      g = f ? Bs(`${r.commandName}:${f}`, e) : void 0;
    if (g) ((t = g), (s = u === -1 ? "" : c.slice(u + 1).trimStart()));
  }
  if (!t) return;
  let i = EIe(t, s),
    d = i ? Bs(i.targetName, e) : void 0,
    l =
      i && d && Gd(d)
        ? { command: d, consumedToken: i.consumedToken, args: i.remainingArgs }
        : void 0;
  return {
    parsed: s === r.args ? r : { ...r, args: s },
    cmd: t,
    folded: l,
    effectiveCmd: l ? l.command : t
  };
}
function wro(o, e) {
  let n = C(o, e, !1);
  if (n === void 0) return !0;
  let { effectiveCmd: r } = n;
  return r.type === "prompt" && rgt(r);
}
export { XEi, JEi, QEi, wro };

//# sourceMappingURL=chunk-ja2h0v01.js.map
