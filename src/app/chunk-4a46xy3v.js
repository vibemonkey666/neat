import {
  fileURLToPath as __filePath_0c527afd8b4c251e,
  URL as __filePath_0c527afd8b4c251e_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, Wr } from "./chunk-wrtp8qz8.js";
import { Gv } from "./chunk-6h7ejyet.js";
import { yn } from "./chunk-4kxznmzw.js";
import { YYt } from "./chunk-jazcqqqr.js";
import { re, zr, b6, dc, mdr } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { rli, pe, d9o, Cwn, y9o, ek, b9o, Pwn } from "./chunk-7c3thgax.js";
import { _m, A$, fz } from "./chunk-0hjcje8e.js";
import { xu } from "./chunk-zvsmc5fn.js";
import { bE } from "./chunk-cpf0ynb1.js";
import { g0e, h0, kc, tl, CVe, V7, uEt, nRe, LV, gn, O0e } from "./chunk-ajtyjx88.js";
import { YC } from "./chunk-spwjh8kb.js";
import { tk, Uwn, Ae, UNe } from "./chunk-dvghjmtr.js";
import { zEt, fI, C5o } from "./chunk-at88wjsn.js";
import { Zo } from "./chunk-13nwb0xt.js";
import { Ri } from "./chunk-wr0p4ndg.js";
import { M9o, Ro } from "./chunk-1e5yp9hx.js";
import { mA, b4e, gq } from "./chunk-7zgz07kc.js";
import { i6, p4t } from "./chunk-v19xty83.js";
import { UZe, g9n } from "./chunk-bbw420pv.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { ag, Y6s } from "./chunk-krgv9fvy.js";
import {
  cXe,
  XIs,
  uWn,
  Gnn,
  znn,
  yLt,
  DGn,
  Oke,
  KCo,
  ggt,
  fWe,
  yw,
  Asn,
  Csn
} from "./chunk-j0tbz6ra.js";
import { ne } from "./chunk-39xmt821.js";
import { aU } from "./chunk-ybr49gcx.js";
import { S7n, w7n, KJs } from "./chunk-fh50nzzj.js";
import { Y$n } from "./chunk-wapyem7a.js";
import { opt } from "./chunk-wr09hc4c.js";
import { j9e } from "./chunk-bejrkm5n.js";
import { zve } from "./chunk-zv0be35s.js";
import { e, r } from "./chunk-f790ajz4.js";
import { bdt } from "./chunk-he7sp1nh.js";
import { Qn } from "./chunk-n35x7axc.js";
import { mPs } from "./chunk-c7qyd6px.js";
import { z } from "./chunk-p197ae0z.js";
function SPn(o) {
  let t = [];
  for (let u of o) {
    let a =
      typeof u.value === "string" ? u.value : Array.isArray(u.value) ? u.value.join(", ") : null;
    if (a === null || a === "" || a === "none") continue;
    t.push(u.label ? { label: u.label, value: a } : { value: a });
  }
  return t;
}
function Y5e(o) {
  let t = o.map((u) => u.filter((a) => !a.antOnly));
  return (t.push(o.flatMap((u) => u.filter((a) => a.antOnly))), t);
}
var vr = import.meta.require(
  __filePath_0c527afd8b4c251e(
    new __filePath_0c527afd8b4c251e_URL("./chunk-nrhb7kdn.js", import.meta.url)
  )
);
function uus() {
  return [];
}
function fus() {
  return [];
}
function pus() {
  return [];
}
function mus(o, t = null, u) {
  let a = o?.find((c) => c.name === "ide");
  if (t) {
    let c = Gv(t.ideType),
      l = Oke(t.ideType) ? "plugin" : "extension";
    if (t.error)
      return [
        {
          label: "IDE",
          value: r(n, {
            children: [
              Qn("error", u)(ne.cross),
              " Error installing ",
              c,
              " ",
              l,
              ": ",
              t.error,
              `
`,
              "Please restart your IDE and try again."
            ]
          })
        }
      ];
    if (t.installed)
      if (a && a.type === "connected")
        if (t.installedVersion !== a.serverInfo?.version)
          return [
            {
              label: "IDE",
              value: `Connected to ${c} ${l} version ${t.installedVersion} (server version: ${a.serverInfo?.version})`
            }
          ];
        else
          return [{ label: "IDE", value: `Connected to ${c} ${l} version ${t.installedVersion}` }];
      else return [{ label: "IDE", value: `Installed ${c} ${l}` }];
  } else if (a) {
    let c = KCo(a) ?? "IDE";
    if (a.type === "connected") return [{ label: "IDE", value: `Connected to ${c} extension` }];
    else return [{ label: "IDE", value: `${Qn("error", u)(ne.cross)} Not connected to ${c}` }];
  }
  return [];
}
function gus(o = [], t) {
  let u = o.filter((l) => l.name !== "ide" && !aU(l));
  if (!u.length) return [];
  let a = { connected: 0, cached: 0, pending: 0, needsAuth: 0, disabled: 0, failed: 0 };
  for (let l of u)
    switch (l.type) {
      case "connected":
        a.connected++;
        break;
      case "cached":
        a.cached++;
        break;
      case "pending":
        a.pending++;
        break;
      case "needs-auth":
        a.needsAuth++;
        break;
      case "disabled":
        a.disabled++;
        break;
      case "failed":
        a.failed++;
        break;
      default:
    }
  let c = [];
  if (a.connected) c.push(Qn("success", t)(`${a.connected} connected`));
  if (a.cached) c.push(Qn("inactive", t)(`${a.cached} cached`));
  if (a.needsAuth) c.push(Qn("warning", t)(`${a.needsAuth} need auth`));
  if (a.pending) c.push(Qn("inactive", t)(`${a.pending} pending`));
  if (a.disabled) c.push(Qn("inactive", t)(`${a.disabled} disabled`));
  if (a.failed) c.push(Qn("error", t)(`${a.failed} failed`));
  return [{ label: "MCP servers", value: `${c.join(", ")} ${Qn("inactive", t)("\xB7 /mcp")}` }];
}
async function hus(o, t, u) {
  if (YC()) return [];
  let a = await yw(o, !1, t, u),
    c = Asn(a),
    l = [],
    d = Csn(a);
  if (d)
    l.push(
      `Instruction files will impact performance: ${d.summary.fileCount} files, ${Ri(d.summary.totalChars)} chars in total > ${Ri(d.summary.totalLimitChars)}`
    );
  let g = fWe();
  c.forEach((p) => {
    let m = Zo(p.path);
    l.push(`Large ${m} will impact performance (${Ri(p.content.length)} chars > ${Ri(g)})`);
  });
  let f = yLt(ggt(o));
  for (let { path: p, why: m } of f.shown) {
    let v = Gnn(m, Zo(p));
    l.push(
      r(
        s,
        {
          flexDirection: "column",
          flexShrink: 1,
          children: [
            e(n, { children: v.lead }),
            r(s, {
              flexDirection: "row",
              children: [
                e(s, { flexShrink: 0, marginRight: 1, children: e(n, { children: v.mark }) }),
                e(n, { bold: !0, wrap: "truncate-start", children: v.path })
              ]
            })
          ]
        },
        p
      )
    );
  }
  if (f.more > 0) l.push(znn(f));
  return l;
}
function y(o = "remote") {
  let t = Cwn();
  if (!t) return null;
  return `Enterprise managed settings (${t.map((a) => (a === "remote" ? o : C(a))).join(" + ")}, merged)`;
}
function yus() {
  let o = Ro(),
    t = d9o(),
    c = [
      {
        label: "Setting sources",
        value: o
          .filter((p) => {
            if (p === "policySettings" && t.composes !== "none") return !0;
            let m = pe(p);
            return m !== null && Object.keys(m).length > 0;
          })
          .map((p) => {
            if (p === "policySettings") {
              if (t.composes !== "none") {
                let v = t.composes === "remoteSlot",
                  S = rli()
                    ? `${v ? "remote " : ""}default settings payload`
                    : v
                      ? "remote helper"
                      : "helper",
                  b = t.mergedOver ? `${S} merged over ${C(t.mergedOver)}` : S;
                return (v ? y(b) : null) ?? `Enterprise managed settings (${b})`;
              }
              let m = ek();
              if (m === null) return null;
              return y() ?? A(m);
            }
            return M9o(p);
          })
          .filter((p) => p !== null)
      }
    ],
    l = b9o();
  if (l.length > 0) c.push({ label: "Skipped sources", value: l.map(A) });
  if (ag()) {
    let p = [...Y6s()];
    c.push({
      label: "Permission rules",
      value: [
        "Managed settings only (allowManagedPermissionRulesOnly)",
        ...(p.length > 0 ? [`allowed-tools ignored this session: ${p.join(", ")}`] : [])
      ]
    });
  }
  let d = cXe();
  if (d && XIs(d)) c.push({ label: "Managed settings (remote)", value: uWn(d) });
  let g = S7n();
  if (KJs(g)) c.push({ label: "Organization policy", value: w7n(g) });
  let f = mPs();
  if (f !== void 0) c.push({ label: "Client data", value: f });
  return c;
}
function _us(o) {
  return [{ label: "Auto mode server", value: DGn(o) ? "Enabled" : "Disabled" }];
}
function bus() {
  return [];
}
function C(o) {
  switch (o) {
    case "helper":
    case "remote":
    case "plist":
      return o;
    case "hklm":
      return "HKLM";
    case "file": {
      let { hasBase: t, hasDropIns: u } = y9o();
      if (t && u) return "file + drop-ins";
      return u ? "drop-ins" : "file";
    }
    case "parent":
      return "parent process";
    case "hkcu":
      return "HKCU";
  }
}
function A(o) {
  return `Enterprise managed settings (${C(o)})`;
}
async function Sus() {
  return (await j9e()).filter((t) => t.type !== "error").map((t) => t.message);
}
async function wus(o) {
  let t = fz(),
    u = _m();
  if (!t && !u) return [];
  let a = [];
  if (u)
    return (
      a.push(
        `${u} \u2014 nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`
      ),
      a
    );
  let c = xu();
  if (
    (a.push(`Self-exec: \`${[c.cmd, ...c.prefixArgs].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`),
    !(await A$()))
  )
    a.push(
      `The launcher \`${c.cmd}\` cannot run right now (deleted or not executable) \u2014 new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`
    );
  let l = await bE(1, o).catch(() => null);
  if (!l) return a;
  let [{ controlRequest: d }, { BG_PROTO: g }] = await Promise.all([
      import("./chunk-9w4wdgpx.js"),
      import("./chunk-kr2c4kqc.js")
    ]),
    f = await d({ proto: g, op: "nudge" }).catch(() => null),
    p = f?.ok && f.op === "nudge" ? (f.processWrapper ?? "") : (l.processWrapper ?? ""),
    m = re(zr(yn(p)), 200);
  if (l.origin === "service")
    a.push(
      `The installed background service predates launcher support and runs outside \`${c.cmd}\`; its sessions are covered, the service process itself is not \u2014 a launcher-aware \`claude daemon install\` will close this`
    );
  if (p !== t)
    a.push(
      `The running background service launches sessions via \`${m || "(no launcher)"}\`, but this session resolves \`${t}\` \u2014 restart it (and your running claude sessions) to converge`
    );
  return a;
}
async function vus(o) {
  let t = await opt({ storageV5: o }),
    u = [],
    { statusNotices: a, invalidEntries: c } = bdt(zve().errors);
  if (c.length > 0) {
    let d = L(c.map((f) => f.file && dc(f.file))).join(", ");
    u.push(`Found invalid entries in: ${d}.`);
    let g = await Y$n(o);
    if (g === "settings_unknowable" || g === "settings_invalid_key_set")
      u.push(
        "Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably)."
      );
  }
  for (let l of a) u.push(l.message);
  for (let [l, d] of Pwn())
    u.push(`${l}
${d}`);
  if (
    (t.warnings.forEach((l) => {
      u.push(l.issue);
    }),
    t.hasUpdatePermissions === !1)
  )
    u.push("No write permissions for auto-updates");
  return u;
}
function X5e(o) {
  if (!(z() && o !== void 0)) return;
  return (async () => ({ refreshKnownDead: tl() && (await LV(o)) }))().catch(() => ({
    refreshKnownDead: !1
  }));
}
function wPn(o) {
  let t = O0e();
  if (!t) return [];
  let u = [];
  if (o !== void 0 && z() ? o.refreshKnownDead : tl() && nRe()) {
    u.push({ label: "Login", value: "Expired \u2014 log in again" });
    let p = gn();
    if (p?.organizationName && !i.IS_DEMO)
      u.push({ label: "Organization", value: p.organizationName });
    if (p?.emailAddress && !i.IS_DEMO) u.push({ label: "Email", value: p.emailAddress });
    return u;
  }
  if (t.subscription) u.push({ label: "Login method", value: `${t.subscription} account` });
  let a = " \xB7 not in use",
    c = t.apiKeySource ?? "none",
    l = CVe(t.tokenSource ?? "none", c);
  if (t.tokenSource)
    u.push({
      label: "Auth token",
      value: l.tokenSource === t.tokenSource ? t.tokenSource : `${t.tokenSource}${a}`
    });
  if (t.apiKeySource)
    u.push({ label: "API key", value: l.apiKey ? t.apiKeySource : `${t.apiKeySource}${a}` });
  let d = uEt();
  if (d && V7())
    u.push({
      label: "apiKeyHelper",
      value: i.IS_DEMO ? "Failing" : `Failing \u2014 last run ${b6(d, mdr)}`
    });
  let g = kc(),
    f = g && CVe("profile", c).tokenSource === "profile";
  if (g) u.push({ label: "Profile", value: `${p4t()}${f ? "" : a}` });
  if (f) {
    let p = i6();
    if (!i.IS_DEMO) {
      if (p?.organizationName || p?.organizationUuid)
        u.push({
          label: "Organization",
          value: [p.organizationName, p.organizationUuid].filter(Boolean).join(" \xB7 ")
        });
      if (p?.accountEmail) u.push({ label: "Email", value: p.accountEmail });
    }
  }
  if (t.organization && !i.IS_DEMO) u.push({ label: "Organization", value: t.organization });
  if (t.email && !i.IS_DEMO) u.push({ label: "Email", value: t.email });
  return u;
}
function h(o) {
  let t;
  try {
    t = new URL(o);
  } catch {
    t = void 0;
  }
  if (t?.host) {
    if (!t.username && !t.password) return o;
    let c = new URL(t.href);
    return ((c.username = "***"), (c.password = ""), c.href);
  }
  let u = o.lastIndexOf("@");
  if (u < 0) return o;
  return `${/^[a-z][a-z0-9+.-]*:\/\//i.exec(o)?.[0] ?? ""}***${o.slice(u)}`;
}
function vPn() {
  let o = Ae(),
    t = [],
    u = g0e();
  if (u !== void 0)
    t.push({
      label: "Allowed providers",
      value:
        u.length === 0
          ? "none (managed allowedProviders is empty)"
          : `${u.map(Uwn).join(", ")} (managed allowedProviders)`
    });
  if (o !== "firstParty") {
    let l = UNe(),
      d = l ? `${tk[o]} + ${tk[l]}` : tk[o];
    t.push({ label: "API provider", value: d });
  }
  if (o === "firstParty") {
    let l = i.ANTHROPIC_BASE_URL;
    if (l) t.push({ label: "Anthropic base URL", value: h(l) });
  } else if (o === "bedrock") {
    let l = i.ANTHROPIC_BEDROCK_BASE_URL;
    if (l) t.push({ label: "Bedrock base URL", value: h(l) });
    t.push({ label: "AWS region", value: E() });
    let d = i.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (d) t.push({ label: "Bedrock service tier", value: d });
    if (i.CLAUDE_CODE_SKIP_BEDROCK_AUTH) t.push({ value: "AWS auth skipped" });
  } else if (o === "vertex") {
    let l = i.ANTHROPIC_VERTEX_BASE_URL;
    if (l) t.push({ label: "Vertex base URL", value: h(l) });
    let d = i.ANTHROPIC_VERTEX_PROJECT_ID;
    if (d) t.push({ label: "GCP project", value: d });
    if ((t.push({ label: "Default region", value: YYt() }), i.CLAUDE_CODE_SKIP_VERTEX_AUTH))
      t.push({ value: "GCP auth skipped" });
  } else if (o === "foundry") {
    let l = i.ANTHROPIC_FOUNDRY_BASE_URL;
    if (l) t.push({ label: "Microsoft Foundry base URL", value: h(l) });
    let d = i.ANTHROPIC_FOUNDRY_RESOURCE;
    if (d) t.push({ label: "Microsoft Foundry resource", value: d });
    if (i.CLAUDE_CODE_SKIP_FOUNDRY_AUTH) t.push({ value: "Microsoft Foundry auth skipped" });
  } else if (o === "anthropicAws") {
    let l = i.ANTHROPIC_AWS_BASE_URL;
    if (l) t.push({ label: "Claude Platform on AWS base URL", value: h(l) });
    let d = i.ANTHROPIC_AWS_WORKSPACE_ID;
    if (d) t.push({ label: "Workspace ID", value: d });
    if ((t.push({ label: "AWS region", value: zEt() }), i.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH))
      t.push({ value: "Claude Platform on AWS auth skipped" });
  } else if (o === "anthropicGoogleCloud") {
    let l = i.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    if (l) t.push({ label: "Claude Platform on Google Cloud base URL", value: h(l) });
    let d = i.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
    if (d) t.push({ label: "Workspace ID", value: d });
    let g = i.ANTHROPIC_GOOGLE_CLOUD_PROJECT || i.GOOGLE_CLOUD_PROJECT;
    if (g) t.push({ label: "GCP project", value: g });
    if (
      (t.push({ label: "GCP location", value: i.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global" }),
      i.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH)
    )
      t.push({ value: "Claude Platform on Google Cloud auth skipped" });
  } else if (o === "gateway") {
    let l = Wr();
    if (l) {
      if ((t.push({ label: "Gateway URL", value: h(l.url) }), l.email && !i.IS_DEMO))
        t.push({ label: "Gateway account", value: l.email });
    }
  }
  if (o === "mantle" || UNe() === "mantle") {
    let l = i.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (l) t.push({ label: "Amazon Bedrock (Mantle) base URL", value: h(l) });
    if (o === "mantle") t.push({ label: "AWS region", value: E() });
    if (i.CLAUDE_CODE_SKIP_MANTLE_AUTH) t.push({ value: "Amazon Bedrock (Mantle) auth skipped" });
  }
  let a = b4e();
  if (a)
    t.push({
      label: "Proxy",
      value: gq(a)
        ? h(a)
        : `${h(a).replace(/\p{Cc}/gu, "")} (invalid \u2014 ignored; fix or unset the proxy env var)`
    });
  let c = mA();
  if (i.NODE_EXTRA_CA_CERTS)
    t.push({ label: "Additional CA cert(s)", value: i.NODE_EXTRA_CA_CERTS });
  if (c) {
    if (c.cert && i.CLAUDE_CODE_CLIENT_CERT)
      t.push({ label: "mTLS client cert", value: i.CLAUDE_CODE_CLIENT_CERT });
    if (c.key && i.CLAUDE_CODE_CLIENT_KEY)
      t.push({ label: "mTLS client key", value: i.CLAUDE_CODE_CLIENT_KEY });
  }
  return t;
}
function E() {
  let { region: o, source: t } = C5o();
  switch (t) {
    case "env":
      return o;
    case "shared-config":
      return `${o} (from AWS config)`;
    case "env-invalid":
    case "default":
      return (
        fI(),
        t === "env-invalid"
          ? `${o} (default \u2014 region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)`
          : `${o} (default \u2014 set AWS_REGION or add a region to your AWS config)`
      );
  }
}
function Eus(o) {
  let t = h0(o),
    u = UZe();
  if (u !== void 0) return `${t} (${g9n(h0(u.previousModel))})`;
  return t;
}
export { SPn, Y5e, uus, fus, pus, mus, gus, hus, yus, _us, bus, Sus, wus, vus, X5e, wPn, vPn, Eus };

//# sourceMappingURL=chunk-4a46xy3v.js.map
