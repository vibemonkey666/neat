// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { _, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import { hc, i } from "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import { ue } from "./chunk-ajtyjx88.js";
import "./chunk-4nzy53ma.js";
import "./chunk-afxq0vrk.js";
import "./chunk-95k4nfdh.js";
import "./chunk-c3npf81n.js";
import "./chunk-qmkm2x59.js";
import "./chunk-dvghjmtr.js";
import "./chunk-at88wjsn.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-vw9e882a.js";
import "./chunk-qywdxehb.js";
import "./chunk-6xjawpfq.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-cjnzngfc.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-xe386mry.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-arw2bgak.js";
import { II } from "./chunk-8w2npe9a.js";
import { it } from "./chunk-qmmh8tq2.js";
import "./chunk-rhk37je5.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-zem4yd4w.js";
import "./chunk-7zgz07kc.js";
import "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-v19xty83.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-qakn3b85.js";
import "./chunk-rj6gws00.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-7svjr0za.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import { ags } from "./chunk-rv4ymqf0.js";
import "./chunk-0hjcje8e.js";
import "./chunk-zvsmc5fn.js";
import "./chunk-705btg35.js";
import { rCn, oCn } from "./chunk-22jrhb52.js";
import { Pds } from "./chunk-z2rjm3ha.js";
import { vLn } from "./chunk-34xjg9wp.js";
import "./chunk-8t953dwn.js";
import "./chunk-ny2y84j1.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
import { realpath as R } from "fs/promises";
import { homedir as T } from "os";
import { spawn as x } from "child_process";
import { basename as C } from "path";
var u = [
    { name: "iTerm2", bundleId: "com.googlecode.iterm2", app: "iTerm" },
    { name: "Ghostty", bundleId: "com.mitchellh.ghostty", app: "Ghostty" },
    { name: "Kitty", bundleId: "net.kovidgoyal.kitty", app: "kitty" },
    { name: "Alacritty", bundleId: "org.alacritty", app: "Alacritty" },
    { name: "WezTerm", bundleId: "com.github.wez.wezterm", app: "WezTerm" },
    {
      name: "Terminal.app",
      bundleId: "com.apple.Terminal",
      app: "Terminal",
      termProgramAliases: ["apple_terminal"]
    }
  ],
  I = [
    "ghostty",
    "kitty",
    "alacritty",
    "wezterm",
    "gnome-terminal",
    "konsole",
    "xfce4-terminal",
    "mate-terminal",
    "tilix",
    "xterm"
  ];
async function S() {
  let r = ue().deepLinkTerminal;
  if (r) {
    let e = u.find((a) => a.app === r);
    if (e) return { name: e.name, command: e.app };
  }
  let n = i.TERM_PROGRAM;
  if (n) {
    let e = n.replace(/\.app$/i, "").toLowerCase(),
      a = u.find(
        (s) =>
          s.app.toLowerCase() === e ||
          s.name.toLowerCase() === e ||
          s.termProgramAliases?.includes(e)
      );
    if (a) return { name: a.name, command: a.app };
  }
  for (let e of u) {
    let { code: a, stdout: s } = await it(
      "mdfind",
      [`kMDItemCFBundleIdentifier == "${e.bundleId}"`],
      { timeout: 5000, useCwd: !1 }
    );
    if (a === 0 && s.trim().length > 0) return { name: e.name, command: e.app };
  }
  for (let e of u) {
    let { code: a } = await it("ls", [`/Applications/${e.app}.app`], { timeout: 1000, useCwd: !1 });
    if (a === 0) return { name: e.name, command: e.app };
  }
  return { name: "Terminal.app", command: "Terminal" };
}
async function F() {
  let r = i.TERMINAL;
  if (r) {
    let e = await hc(r);
    if (e) return { name: C(r), command: e };
  }
  let n = await hc("x-terminal-emulator");
  if (n) return { name: "x-terminal-emulator", command: n };
  for (let e of I) {
    let a = await hc(e);
    if (a) return { name: e, command: a };
  }
  return null;
}
async function A() {
  let r = await hc("wt.exe");
  if (r) return { name: "Windows Terminal", command: r };
  let n = await hc("pwsh.exe");
  if (n) return { name: "PowerShell", command: n };
  let e = await hc("powershell.exe");
  if (e) return { name: "PowerShell", command: e };
  return {
    name: "Command Prompt",
    command: i.ComSpec || `${i.SystemRoot || "C:\\Windows"}\\System32\\cmd.exe`
  };
}
async function M() {
  switch ("linux") {
    case "darwin":
      return S();
    case "linux":
      return F();
    case "win32":
      return A();
    default:
      return null;
  }
}
async function y(r, n) {
  let e = await M();
  if (!e) return (t("No terminal emulator detected", { level: "error" }), !1);
  t(`Launching in terminal: ${e.name} (${e.command})`);
  let a = ["--deep-link-origin"];
  if (n.repo) {
    if ((a.push(`--deep-link-repo=${n.repo}`), n.lastFetchMs !== void 0))
      a.push(`--deep-link-last-fetch=${n.lastFetchMs}`);
  }
  if (n.query) a.push(`--prefill=${n.query}`);
  switch ("linux") {
    case "darwin":
      return k(e, r, a, n);
    case "linux":
      return E(e, r, a, n);
    case "win32":
      return v(e, r, n);
    default:
      return !1;
  }
}
async function k(r, n, e, a) {
  let { cwd: s } = a;
  switch (r.command) {
    case "iTerm": {
      let o = f(n, a),
        l = `tell application "iTerm"
  if running then
    create window with default profile
  else
    activate
  end if
  tell current session of current window
    write text ${w(o)}
  end tell
end tell`,
        { code: c } = await it("osascript", ["-e", l], { useCwd: !1 });
      if (c === 0) return !0;
      break;
    }
    case "Terminal": {
      let o = f(n, a),
        l = `tell application "Terminal"
  do script ${w(o)}
  activate
end tell`,
        { code: c } = await it("osascript", ["-e", l], { useCwd: !1 });
      return c === 0;
    }
    case "Ghostty": {
      let o = ["-na", r.command, "--args", "--window-save-state=never"];
      if (s) o.push(`--working-directory=${s}`);
      o.push("-e", n, ...p(a));
      let { code: l } = await it("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
    case "Alacritty": {
      let o = ["-na", r.command, "--args"];
      if (s) o.push("--working-directory", s);
      o.push("-e", n, ...e);
      let { code: l } = await it("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
    case "kitty": {
      let o = ["-na", r.command, "--args"];
      if (s) o.push("--directory", s);
      o.push(n, ...e);
      let { code: l } = await it("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
    case "WezTerm": {
      let o = ["-na", r.command, "--args", "start"];
      if (s) o.push("--cwd", s);
      o.push("--", n, ...e);
      let { code: l } = await it("open", o, { useCwd: !1 });
      if (l === 0) return !0;
      break;
    }
  }
  return (
    t(`Failed to launch ${r.name}, falling back to Terminal.app`),
    k({ name: "Terminal.app", command: "Terminal" }, n, e, a)
  );
}
async function E(r, n, e, a) {
  let { cwd: s } = a,
    o,
    l;
  switch (r.name) {
    case "gnome-terminal":
      ((o = s ? [`--working-directory=${s}`, "--"] : ["--"]), o.push(n, ...e));
      break;
    case "konsole":
      ((o = s ? ["--workdir", s, "-e"] : ["-e"]), o.push(n, ...e));
      break;
    case "kitty":
      ((o = s ? ["--directory", s] : []), o.push(n, ...e));
      break;
    case "wezterm":
      ((o = s ? ["start", "--cwd", s, "--"] : ["start", "--"]), o.push(n, ...e));
      break;
    case "alacritty":
      ((o = s ? ["--working-directory", s, "-e"] : ["-e"]), o.push(n, ...e));
      break;
    case "ghostty":
      ((o = s ? [`--working-directory=${s}`, "-e"] : ["-e"]), o.push(n, ...p(a)));
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      ((o = s ? [`--working-directory=${s}`, "-x"] : ["-x"]), o.push(n, ...e));
      break;
    case "tilix":
      ((o = s ? [`--working-directory=${s}`, "-e"] : ["-e"]), o.push(n, ...p(a)));
      break;
    default:
      ((o = ["-e", n, ...p(a)]), (l = s));
      break;
  }
  return b(r.command, o, { cwd: l });
}
async function v(r, n, e) {
  let a = [],
    s = p(e),
    o = e.cwd;
  switch (r.name) {
    case "Windows Terminal": {
      let l = (c) => c.replaceAll(";", "\\;");
      if (o) a.push("-d", l(o));
      a.push("--", l(n), ...s);
      break;
    }
    case "PowerShell": {
      a.push("-NoExit", "-Command", `& ${q(n)} ${s.join(" ")}`);
      break;
    }
    default: {
      let l = `${h(n)} ${s.map(h).join(" ")}`;
      a.push("/d", "/v:off", "/s", "/k", `"${l}"`);
      break;
    }
  }
  return b(r.command, a, { windowsVerbatimArguments: r.name === "Command Prompt", cwd: e.cwd });
}
async function b(r, n, e = {}) {
  let a = (s) =>
    new Promise((o) => {
      let l = (d) => {
          (t(`Failed to spawn ${r}: ${d.message}`, { level: "error" }), o(!1));
        },
        c;
      try {
        c = x(r, n, {
          detached: !0,
          stdio: "ignore",
          windowsHide: !1,
          cwd: s,
          windowsVerbatimArguments: e.windowsVerbatimArguments
        });
      } catch (d) {
        return l(d);
      }
      (II(c.pid),
        c.once("error", l),
        c.once("spawn", () => {
          (c.unref(), o(!0));
        }));
    });
  if (await a(e.cwd)) return !0;
  if (e.cwd) return a(void 0);
  return !1;
}
var L = /^[A-Za-z0-9 /._=-]+$/;
function p(r) {
  let n = (a) => Buffer.from(a, "utf8").toString("base64url"),
    e = ["--deep-link-origin"];
  if (r.repo) e.push(`--deep-link-repo=${r.repo}`);
  if (r.lastFetchMs !== void 0) e.push(`--deep-link-last-fetch=${r.lastFetchMs}`);
  if (r.cwd) e.push(`--deep-link-cwd-b64=${n(r.cwd)}`);
  if (r.query) e.push(`--prefill-b64=${n(r.query)}`);
  return e;
}
function f(r, n) {
  let e = p(n).join(" ");
  if (!L.test(e)) throw Error(`Internal error: shell-safe args contain metacharacters: ${e}`);
  if (/^[A-Za-z0-9/._-]+$/.test(r)) return `${r} ${e}`;
  if (/['\\!$\n]/.test(r))
    throw Error(
      `Deep-link launch unsupported: the claude binary path "${r}" contains a single quote, backslash, exclamation mark, dollar sign, or newline, which cannot be portably quoted for every login shell. Reinstall claude to a path without these characters to use deep links with iTerm2 or Terminal.app.`
    );
  return `'${r}' ${e}`;
}
function w(r) {
  return `"${r
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll(
      `
`,
      "\\n"
    )
    .replaceAll("\t", "\\t")}"`;
}
function q(r) {
  if (/[\u2018\u2019\u201A\u201B]/.test(r))
    throw Error(
      "Cannot safely quote a Unicode single-quote variant (U+2018-U+201B) in a PowerShell path; install Windows Terminal (wt.exe)."
    );
  return `'${r.replaceAll('"', "").replaceAll("'", "''")}'`;
}
function h(r) {
  return `"${r
    .replace(/[\n\t]/g, " ")
    .replace(/["%]/g, "")
    .replace(/(\\+)$/, "$1$1")}"`;
}
async function ae(r) {
  t(`Handling deep link URI: ${r}`);
  let n;
  try {
    n = ags(r);
  } catch (o) {
    let l = o instanceof Error ? o.message : String(o);
    return (console.error(`Deep link error: ${l}`), m("deep_link_handle", "parse_failed"), 1);
  }
  t(`Parsed deep link action: ${_(n)}`);
  let e = __invocation_8409fced440e56c1.isSourceMode()
      ? __invocation_8409fced440e56c1.programPath()
      : await R(process.execPath).catch(() => process.execPath),
    a;
  switch (n.action) {
    case "open": {
      let { cwd: o, resolvedRepo: l } = await D(n),
        c = l ? await Pds(o) : void 0;
      a = { query: n.query, cwd: o, repo: l, lastFetchMs: c?.getTime() };
      break;
    }
    case "install-plugin":
      a = { cwd: T(), query: vLn({ plugin: n.plugin, marketplaceSource: n.marketplace }) };
      break;
  }
  let s;
  try {
    s = await y(e, a);
  } catch (o) {
    let l = o instanceof Error ? o.message : String(o);
    return (console.error(`Deep link error: ${l}`), m("deep_link_handle", "launch_error"), 1);
  }
  if (!s)
    return (
      console.error(
        "Failed to open a terminal. Make sure a supported terminal emulator is installed."
      ),
      m("deep_link_handle", "no_terminal"),
      1
    );
  return (g("deep_link_handle"), 0);
}
async function D(r) {
  if (r.cwd) return { cwd: r.cwd };
  if (r.repo) {
    let n = rCn(r.repo),
      e = await oCn(n);
    if (e[0])
      return (t(`Resolved repo ${r.repo} \u2192 ${e[0]}`), { cwd: e[0], resolvedRepo: r.repo });
    t(`No local clone found for repo ${r.repo}, falling back to home`);
  }
  return { cwd: T() };
}
export { ae as handleDeepLinkUri };

import * as __invocation_8409fced440e56c1 from "./__invocation.mjs";

//# sourceMappingURL=chunk-7t0r3jfb.js.map
