// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { cF, CC } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import { b, c } from "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import "./chunk-jazcqqqr.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-c3npf81n.js";
import "./chunk-qakn3b85.js";
import "./chunk-ak0cmk10.js";
import "./chunk-zem4yd4w.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-gg53p5cf.js";
import "./chunk-znkwh1rm.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-qmkm2x59.js";
import "./chunk-v19xty83.js";
import "./chunk-7c3thgax.js";
import "./chunk-xt4k95hv.js";
import "./chunk-dc0nzty2.js";
import "./chunk-brszmkb3.js";
import "./chunk-xe386mry.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import "./chunk-azq9hjy0.js";
import "./chunk-vw9e882a.js";
import "./chunk-rhk37je5.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-13nwb0xt.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-6xjawpfq.js";
import "./chunk-4nzy53ma.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-7zgz07kc.js";
import "./chunk-r00j5r9s.js";
import "./chunk-drhbqmbg.js";
import "./chunk-fgeq4nth.js";
import "./chunk-6dsz7zr0.js";
import { q1, iWt } from "./chunk-gv3j9e36.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { Be, At } from "./chunk-at88wjsn.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var G = new Map([
    ["--agent-id", /^agent_[A-Za-z0-9]+$/],
    ["--environment-id", /^env_[A-Za-z0-9]+$/],
    ["--vault-id", /^vlt_[A-Za-z0-9]+$/]
  ]),
  B = /^[1-9][0-9]*$/,
  J = /\bant\b/i,
  H = /(?:^|[^A-Za-z0-9_])(?:agent|env|vlt)_(?:staging|vrtx|bdrk)_/,
  p = /(?:^|[^A-Za-z0-9_])(?:agent|env|vlt)_local_/g,
  q = /^(?:--[a-z][a-z-]*=)?(?:agent|env|vlt)_local_01[1-9A-HJ-NP-Za-km-z]{22}$/,
  P = /['"\\`\u2018-\u201f]/g,
  V = /^(?:~?\/(?:[\w.-]+\/)*)?ant(?:\.exe)?$/,
  K = /^ant(?:\.exe)?$/,
  X = new Set(["&", "subshell", "compound_statement", "if_statement", "case_statement"]),
  I = String.raw`'([^'"\r\n\u2018-\u201f]*)'|([\w:./=~-]+)`,
  Y = /^(?:cd '[^'"\r\n\u2018-\u201f]*' && )+/,
  Q = /^(?:Set-Location -LiteralPath '[^'"\r\n\u2018-\u201f]*'(?: -ErrorAction Stop)?; )+/,
  ee =
    "Claude Code did not run this command: it holds a --transform from the /claude-api managed-agents-secure instructions but is not that `ant` command as written. Run each of those commands alone and exactly as written, with each ID typed inside its single quotes (agent_, env_ or vlt_, then only letters and digits). Add --version only to `ant beta:agents retrieve`, as a whole number with no leading zero. If an ID or version read from the account has another form, do not run the command: ask the developer about it, and mark each report row that needs it CAN'T TELL.",
  te =
    "Claude Code did not run this command: it holds an ID starting agent_, env_ or vlt_ then staging_, vrtx_ or bdrk_, which `ant` commands may not use. Do not run the command another way: tell the developer which ID was refused and ask where it came from. If this is part of /claude-api managed-agents-secure, mark each report row that needs it CAN'T TELL.",
  ne =
    "Claude Code did not run this command: it holds an ID starting agent_local_, env_local_ or vlt_local_, and the ID or the command around it is not in the one form Claude Code accepts. Such IDs come from a self-hosted or local Managed Agents server. Each such ID in the command must have the form agent_, env_ or vlt_, then local_01, then 22 letters and digits other than 0, O, I and l, and must be typed in full as its own argument to ant or ant.exe, named in lowercase with no path. Only cd into a folder, or another ant command, may come before ant; do not run ant through or feed it from another program such as timeout, echo or xargs. The command must be Bash made of plain commands joined by &&, || or ;, with at most one | after ant, into a program such as jq. It must not use: & to run a command in the background; VAR=value, export or any other variable setting; a redirect such as > file or 2>&1; if, for, while, case or function; a ( ) or { } group; $ variables; $( ), <( ), >( ) or backtick substitutions; or here-documents or <<< strings. To reach a self-hosted server, pass its address with ant's --base-url flag, not a variable. If ant is not on PATH, ask the developer to add its folder to PATH in their shell settings and restart Claude Code. If this is part of /claude-api managed-agents-secure, do not run the command again: mark each report row that needs the ID CAN'T TELL. Otherwise, if the ID came from such a server and already has that form, you may run the command again following these rules; if not, do not change the ID: ask the developer where it came from.",
  M =
    "Claude Code did not run this command: /claude-api managed-agents-secure does not support self-hosted or local Managed Agents servers, whose IDs start agent_local_, env_local_ or vlt_local_. Do not run the command another way: tell the developer which ID was refused and that /claude-api managed-agents-secure checks only agents on Anthropic's Managed Agents API, ask where the ID came from, and mark each report row that needs it CAN'T TELL.",
  x = { type: "callback", callback: oe, timeout: 10, internal: !0 },
  R;
function he() {
  if ((CC()?.PreToolUse ?? []).some((s) => s.hooks.some((o) => o === x))) return;
  cF({ PreToolUse: [{ matcher: `${Be}|${At}|${Gs}`, hooks: [x] }] });
}
async function oe(r) {
  if (r.hook_event_name !== "PreToolUse") return {};
  let s = r.tool_input,
    o = typeof s === "object" && s !== null && "command" in s ? s.command : void 0;
  if (typeof o !== "string") return {};
  let d = r.tool_name === At ? "powershell" : "bash",
    h = o.replace(P, ""),
    n = d === "bash" ? await q1(o) : void 0,
    z =
      n?.kind === "simple"
        ? J.test(h) ||
          n.commands.some(({ argv: e }) => e.some((t) => /(?:^|\/)ant(?:\.exe)?$/i.test(t)))
        : !0,
    D = n?.kind === "simple" ? n.commands.flatMap(({ argv: e }) => e).join(" ") : "",
    w = [o, o.replace(/\\\n/g, "")].map((e) => e.replace(P, "")),
    O = w.some((e) => (e.match(p) ?? []).length > 0) || (D.match(p) ?? []).length > 0,
    j =
      n?.kind === "simple"
        ? n.commands.findLastIndex(({ argv: e }) => e.some((t) => (t.match(p) ?? []).length > 0))
        : -1,
    y =
      O &&
      n?.kind === "simple" &&
      !/\$\(|`|<<|[<>]\(/.test(o) &&
      iWt(n.commands).ok &&
      n.bareAssignmentNames.length === 0 &&
      n.hasLoop === !1 &&
      n.tree !== void 0 &&
      !U(n.tree) &&
      n.commands.every(
        ({ argv: e, argvSourceLiteral: t, envVars: _, redirects: m }, i) =>
          t === !0 &&
          _.length === 0 &&
          (i > j ||
            (m.length === 0 &&
              (K.test(e[0] ?? "") ||
                (e.length === 2 && e[0] === "cd" && (e[1]?.match(p) ?? []).length === 0))))
      )
        ? n.commands.flatMap(({ argv: e }) => e.filter((t) => (t.match(p) ?? []).length > 0))
        : void 0,
    L =
      y !== void 0 &&
      y.every((e) => q.test(e)) &&
      w.every((e) => (e.match(p) ?? []).length === y.length),
    A = w.some((e) => H.test(e)) || H.test(D);
  if (z && (A || (O && !L))) {
    a("tengu_claude_api_ant_command_refused", {
      shell: c(d),
      cause: A ? b("id_with_second_part") : b("id_with_local_part")
    });
    let e = !A && (await W().catch(() => [])).some(({ transform: t }) => h.includes(t));
    return F(A ? te : e ? M : ne);
  }
  let v = await W(),
    l,
    k;
  if (d === "powershell") {
    l = v.find(({ transform: t }) => h.includes(t))?.words;
    let e = o.replace(Q, "");
    k = /^[ \t\n]*['"]/.test(e) ? void 0 : E(e);
  } else if (n?.kind !== "simple") l = v.find(({ transform: e }) => h.includes(e))?.words;
  else {
    let e = n.commands.filter(({ argv: i }) => v.some(({ transform: g }) => i.includes(g)));
    l = (
      v.find(({ transform: i }) => e.some(({ argv: g }) => g.includes(i))) ??
      v.find(({ transform: i }) => h.includes(i))
    )?.words;
    let t = n.commands.at(-1),
      _ = n.commands.slice(0, -1),
      m = E(o.replace(Y, ""));
    k =
      e.length === 1 &&
      n.bareAssignmentNames.length === 0 &&
      n.hasLoop === !1 &&
      t !== void 0 &&
      t === e[0] &&
      m !== void 0 &&
      m.length === t.argv.length &&
      m.every((i, g) => i === t.argv[g]) &&
      t.envVars.length === 0 &&
      t.redirects.length === 0 &&
      t.argvSourceLiteral === !0 &&
      _.every(
        ({ argv: i, envVars: g, redirects: Z }) =>
          i.length === 2 && i[0] === "cd" && g.length === 0 && Z.length === 0
      )
        ? t.argv
        : void 0;
  }
  if (l === void 0) return {};
  let u = k ?? [],
    f =
      l[1] === "beta:agents" && l[2] === "retrieve"
        ? u.findIndex((e, t) => t > 2 && (e === "--version" || e.startsWith("--version=")))
        : -1,
    T = u[f]?.startsWith("--version=") === !0,
    S = T ? u[f]?.slice(10) : u[f + 1],
    C =
      f === -1
        ? u
        : S !== void 0 && B.test(S) && !(u[f - 1] ?? "").startsWith("-")
          ? [...u.slice(0, f), ...u.slice(f + (T ? 1 : 2))]
          : [];
  if (
    C.length === l.length &&
    l.every((e, t) => {
      let _ = G.get(l[t - 1] ?? ""),
        m = C[t] ?? "";
      return _ !== void 0 ? _.test(m) : t === 0 ? V.test(m) : m === e;
    })
  )
    return {};
  let N = O && L;
  return (
    a("tengu_claude_api_ant_command_refused", {
      shell: c(d),
      cause: N ? b("local_id") : b("managed_agents_secure_command_changed")
    }),
    F(N ? M : ee)
  );
}
async function W() {
  if (R === void 0) {
    let { SKILL_FILES: r } = await import("./chunk-7kf9j3c4.js");
    R = (r["shared/managed-agents-secure.md"] ?? "")
      .split(
        `
`
      )
      .filter((s) => s.startsWith("ant beta:"))
      .flatMap((s) => {
        let o = E(s),
          d = o?.indexOf("--transform") ?? -1,
          h = d === -1 ? void 0 : o?.[d + 1];
        return o !== void 0 && h ? [{ words: o, transform: h }] : [];
      });
  }
  return R;
}
function U(r) {
  return X.has(r.type) || r.children.some((s) => U(s));
}
function E(r) {
  let s = r.replace(/^[ \t\n]+|[ \t\n]+$/g, "");
  if (!new RegExp(`^(?:${I})(?:[ \\t]+(?:${I}))*$`).test(s)) return;
  return [...s.matchAll(new RegExp(I, "g"))].map((d) => d[1] ?? d[2] ?? "");
}
function F(r) {
  return {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: r
    }
  };
}
export { he as registerManagedAgentsSecureGuard };

//# sourceMappingURL=chunk-20rt2hzh.js.map
