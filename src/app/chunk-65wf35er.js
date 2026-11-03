// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { R, G, Vt } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { zI, K } from "./chunk-61vn6n52.js";
import { st, k, Re, ue } from "./chunk-ajtyjx88.js";
import { Xfe, i } from "./chunk-cj37hmns.js";
import { O, Wfi } from "./chunk-19xvg81r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { it } from "./chunk-qmmh8tq2.js";
import { le } from "./chunk-vw9e882a.js";
import { Dn } from "./chunk-qywdxehb.js";
import { Fu } from "./chunk-13nwb0xt.js";
import { O$e, vu } from "./chunk-wr0p4ndg.js";
import { No, h4e, Qvn, aar, p$e, bQo, zdi } from "./chunk-8r2m7vfp.js";
import { he } from "./chunk-95k4nfdh.js";
import { qi } from "./chunk-rh5ymkjp.js";
import { Wp, L5 } from "./chunk-rj6gws00.js";
import { _i, fn, ja, zB } from "./chunk-h56pfqh7.js";
import { VI, SUe, Ipe } from "./chunk-rwaeax2b.js";
import { To } from "./chunk-1xqkrp78.js";
import { gy } from "./chunk-hk6ate67.js";
import { Me } from "./chunk-rf7g1m78.js";
import { Blt, AIn, y6e } from "./chunk-90gdrs86.js";
import { J6e, iXt } from "./chunk-t1rf1n9m.js";
import { uDo, _Ge, bGe, Hln, Ihe } from "./chunk-6h7ejyet.js";
import { B6 } from "./chunk-kk8f9f8q.js";
import { L8t, N8t } from "./chunk-0grh2x0w.js";
import { qno, Kh } from "./chunk-r495jyat.js";
import { Cyi, Ryi, rKn } from "./chunk-j0tbz6ra.js";
import { ld } from "./chunk-53nx6xac.js";
import { Vh } from "./chunk-df5gvbw5.js";
import { Y9t, X9t, Kgs, MMn } from "./chunk-6e3yxj2r.js";
import { rIe, vS, gIt } from "./chunk-g2rqnn1x.js";
import { jUe } from "./chunk-pxbfpj2f.js";
import { Qn } from "./chunk-n35x7axc.js";
import { f3, wme, _Cs, $yo, bCs } from "./chunk-ea3kv9gs.js";
import { de, be, P, Bo, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { H } from "./chunk-p8tprgqa.js";
import { $a, KZ, gZo } from "./chunk-2bsye2b3.js";
j();
function R_(e, r, n = !1) {
  P(() => {
    let s = e.current;
    if (!s) return;
    let o = VI(s);
    if (!r) {
      if (n && o.activeElement === s) o.blur();
      return;
    }
    return (
      o.focus(s),
      o.subscribe(() => {
        let u = e.current;
        if (!u || o.activeElement === u) return;
        if (!o.activeElement) {
          o.focus(u);
          return;
        }
        let d = u.parentNode;
        while (d) {
          if (d === o.activeElement) {
            o.focus(u);
            return;
          }
          d = d.parentNode;
        }
      })
    );
  }, [r, e, n]);
}
j();
import { randomBytes as De } from "crypto";
import { copyFile as Ne, mkdir as ft, readFile as $e, writeFile as Ze } from "fs/promises";
import { homedir as Je, platform as We } from "os";
import { dirname as dr, join as ne } from "path";
var p = `
`,
  Ie = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal"
  };
function Qe() {
  let e = i.VSCODE_GIT_ASKPASS_MAIN ?? "",
    r = i.PATH ?? "";
  return (
    e.includes(".vscode-server") ||
    e.includes(".cursor-server") ||
    e.includes(".windsurf-server") ||
    e.includes(".devin-server") ||
    r.includes(".vscode-server") ||
    r.includes(".cursor-server") ||
    r.includes(".windsurf-server") ||
    r.includes(".devin-server")
  );
}
function mgr() {
  if (!i.terminal || !(i.terminal in Ie)) return null;
  return Ie[i.terminal] ?? null;
}
function ze() {
  return "";
}
async function ggr(e, r, n) {
  let s = "",
    o = !0;
  switch (i.terminal) {
    case "Apple_Terminal":
      s = await mr(r, n);
      break;
    case "vscode":
      ((s = await ct(e, "VSCode", r)),
        (s += await ut(e, "VSCode", r)),
        (s += await Kno(e, "VSCode", r)));
      break;
    case "cursor":
      ((s = await ct(e, "Cursor", r)),
        (s += await ut(e, "Cursor", r)),
        (s += await Kno(e, "Cursor", r)));
      break;
    case "windsurf":
      ((s = await ct(e, "Devin Desktop", r)),
        (s += await ut(e, "Devin Desktop", r)),
        (s += await Kno(e, "Devin Desktop", r)));
      break;
    case "alacritty":
      s = await hr(r);
      break;
    case "zed": {
      let u = await pr(r);
      ((s = u.message), (o = u.installed));
      break;
    }
    case null:
      break;
  }
  return (
    await Re((u) => {
      if (o && vt.includes(i.terminal ?? "")) {
        if (u.shiftEnterKeyBindingInstalled === !0) return u;
        return { ...u, shiftEnterKeyBindingInstalled: !0 };
      } else if (i.terminal === "Apple_Terminal") {
        if (u.optionAsMetaKeyInstalled === !0) return u;
        return { ...u, optionAsMetaKeyInstalled: !0 };
      }
      return u;
    }, n),
    s
  );
}
var kt =
  'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"';
async function ogi(e) {
  let r = he.dim(kt);
  try {
    let { stdout: n, code: s } = await it("defaults", [
      "read",
      "com.googlecode.iterm2",
      "AllowClipboardAccess"
    ]);
    if (s === 0 && n.trim() === "1")
      return `${Qn("success", e)("iTerm2 clipboard access already enabled")}${p}${p}`;
    let { code: o } = await it("defaults", [
      "write",
      "com.googlecode.iterm2",
      "AllowClipboardAccess",
      "-bool",
      "true"
    ]);
    if (o !== 0)
      return `${Qn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`;
    return `${Qn("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${p}${he.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${p}${p}`;
  } catch (n) {
    return (
      l(n),
      `${Qn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`
    );
  }
}
function sgi() {
  return ue().shiftEnterKeyBindingInstalled === !0;
}
var vt = ["vscode", "cursor", "windsurf", "alacritty", "zed"];
function Cpe() {
  if (i.terminal === "Apple_Terminal" && We() === "darwin") return !0;
  if (i.terminal && i.terminal in Ie) return !0;
  return vt.includes(i.terminal ?? "") && sgi();
}
function Gno() {
  return ue().hasUsedBackslashReturn === !0;
}
function Zus(e) {
  if (!ue().hasUsedBackslashReturn) Re((n) => ({ ...n, hasUsedBackslashReturn: !0 }), e);
}
async function YEi(e, r, n) {
  if (
    We() === "darwin" &&
    i.__CFBundleIdentifier === "com.googlecode.iterm2" &&
    (i.terminal === "iTerm.app" ||
      i.terminal === "tmux" ||
      i.terminal === "screen" ||
      i.terminal === null)
  ) {
    let u = `${await ogi(r.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${ze()}`;
    return (e(u), null);
  }
  if (i.terminal && i.terminal in Ie) {
    let o = `Shift+Enter is natively supported in ${Ie[i.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${ze()}`;
    return (e(o), null);
  }
  if (!jUe()) {
    let o = i.terminal || "your current terminal",
      u = O(),
      d = "";
    if (u === "macos")
      d = `   \u2022 macOS: Apple Terminal
`;
    let h =
        i.LC_TERMINAL === "iTerm2"
          ? `${p}${p}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${p}${he.dim(kt)}`
          : "",
      x = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${he.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${d}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${he.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${h}${ze()}`;
    return (e(x), null);
  }
  let s = await ggr(r.session.host, r.options.theme, r.storageV5);
  return (e(s + ze()), null);
}
var _e = "terminal.integrated.mouseWheelScrollSensitivity",
  Pe = 3,
  qe = "terminal.integrated.gpuAcceleration",
  lt = "off";
async function zno(e) {
  let r = fr();
  if (!r || Qe()) return null;
  try {
    let n = await $e(ne(await hgr.of(e).pathFor(r), "settings.json"), { encoding: "utf-8" }),
      s = p$e(n),
      o = H(s) ? s[_e] : void 0;
    return { editor: r, sensitivity: typeof o === "number" ? o : null, recommended: Pe };
  } catch (n) {
    if (!Vt(n)) l(n);
    return { editor: r, sensitivity: null, recommended: Pe };
  }
}
function fr() {
  switch (i.terminal) {
    case "vscode":
      return "VSCode";
    case "cursor":
      return "Cursor";
    case "windsurf":
      return "Devin Desktop";
    default:
      return null;
  }
}
class _t {
  pathFor = Qr(
    async (e) => {
      let r = (n) =>
        ne(
          Je(),
          We() === "win32"
            ? ne("AppData", "Roaming", n, "User")
            : We() === "darwin"
              ? ne("Library", "Application Support", n, "User")
              : ne(".config", n, "User")
        );
      if (e === "VSCode") return r("Code");
      if (e === "Devin Desktop") {
        let n = r("Devin");
        return (await Fu(n)) ? n : r("Windsurf");
      }
      return r(e);
    },
    (e) => `${e}:${Je()}`
  );
}
var hgr = new W(() => new _t());
async function ut(e, r, n) {
  let s = he.dim(`For smoother scrolling, set "${_e}": ${Pe} in ${r} settings.`);
  if (Qe()) return `${s}${p}`;
  let o = ne(await hgr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}",
      d = !1;
    try {
      ((u = await $e(o, { encoding: "utf-8" })), (d = !0));
    } catch (T) {
      if (!Vt(T)) throw T;
    }
    let h = p$e(u);
    if (!H(h))
      return `${Qn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
    if (_e in h)
      return `${Qn("success", n)(`${r} ${_e} already set; leaving as-is`)}${p}${he.dim(`See ${o}`)}${p}`;
    let x = bQo(u, _e, Pe);
    if (x === u) return `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    if (d) {
      let T = `${o}.${De(4).toString("hex")}.bak`;
      try {
        await Ne(o, T);
      } catch {
        return `${Qn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`;
      }
    }
    return (
      await Ze(o, x, { encoding: "utf-8" }),
      `${Qn("success", n)(`Set ${r} terminal scroll sensitivity to ${Pe}`)}${p}${he.dim(`See ${o}`)}${p}`
    );
  } catch (u) {
    return (
      t(
        `Couldn't update ${r} settings.json at ${o}: ${u instanceof Error ? u.message : String(u)}`,
        { level: "error" }
      ),
      `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`
    );
  }
}
async function Kno(e, r, n) {
  let s = he.dim(
    `To fix garbled text, set "${qe}": "${lt}" in ${r} settings (undo: set it back to "auto").`
  );
  if (Qe()) return (f("terminal_setup_gpu_accel", "remote_ssh"), `${s}${p}`);
  let o = ne(await hgr.of(e).pathFor(r), "settings.json");
  try {
    let u = "{}",
      d = !1;
    try {
      ((u = await $e(o, { encoding: "utf-8" })), (d = !0));
    } catch (T) {
      if (!Vt(T)) throw T;
    }
    let h = p$e(u);
    if (!H(h))
      return (
        f("terminal_setup_gpu_accel", "not_json_object"),
        `${Qn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`
      );
    if (h[qe] === lt)
      return (
        g("terminal_setup_gpu_accel"),
        `${Qn("success", n)(`${r} GPU acceleration already off; leaving as-is`)}${p}${he.dim(`See ${o}`)}${p}`
      );
    let x = bQo(u, qe, lt);
    if (x === u)
      return (
        f("terminal_setup_gpu_accel", "write_failed"),
        `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`
      );
    if (d) {
      let T = `${o}.${De(4).toString("hex")}.bak`;
      try {
        await Ne(o, T);
      } catch {
        return (
          f("terminal_setup_gpu_accel", "backup_failed"),
          `${Qn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`
        );
      }
    }
    return (
      await Ze(o, x, { encoding: "utf-8" }),
      g("terminal_setup_gpu_accel"),
      `${Qn("success", n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${p}${he.dim(`Reload the ${r} window to apply. Undo: set "${qe}" back to "auto".`)}${p}${he.dim(`See ${o}`)}${p}`
    );
  } catch (u) {
    return (
      f("terminal_setup_gpu_accel", "write_failed"),
      t(
        `Couldn't update ${r} settings.json at ${o}: ${u instanceof Error ? u.message : String(u)}`,
        { level: "error" }
      ),
      `${Qn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`
    );
  }
}
async function ct(e, r = "VSCode", n) {
  if (Qe())
    return `${Qn("warning", n)(`Cannot install keybindings from a remote ${r} session.`)}${p}${p}${r} keybindings must be installed on your local machine, not the remote server.${p}${p}To install the Shift+Enter keybinding:${p}1. Open ${r} on your local machine (not connected to remote)${p}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${p}3. Add this keybinding (the file must be a JSON array):${p}${p}${he.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${p}`;
  let s = await hgr.of(e).pathFor(r),
    o = ne(s, "keybindings.json");
  try {
    await ft(s, { recursive: !0 });
    let u = "[]",
      d = [],
      h = !1;
    try {
      ((u = await $e(o, { encoding: "utf-8" })), (h = !0), (d = p$e(u) ?? []));
    } catch (L) {
      if (!Vt(L)) throw L;
    }
    if (h) {
      let L = De(4).toString("hex"),
        N = `${o}.${L}.bak`;
      try {
        await Ne(o, N);
      } catch {
        return `${Qn("warning", n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${p}${he.dim(`See ${o}`)}${p}${he.dim(`Backup path: ${N}`)}${p}`;
      }
    }
    let x = {
        key: "shift+enter",
        command: "workbench.action.terminal.sendSequence",
        args: { text: "\x1B\r" },
        when: "terminalFocus"
      },
      T = d.find((L) => L.key === x.key && L.command === x.command && L.when === x.when);
    if (T) {
      let L = he.dim(`See ${o}`);
      if (T.args?.text === x.args.text)
        return `${Qn("success", n)(`${r} terminal Shift+Enter key binding already configured`)}${p}${L}${p}`;
      return `${Qn("warning", n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${p}${L}${p}`;
    }
    let E = zdi(u, x);
    return (
      await Ze(o, E, { encoding: "utf-8" }),
      `${Qn("success", n)(`Installed ${r} terminal Shift+Enter key binding`)}${p}${he.dim(`See ${o}`)}${p}`
    );
  } catch (u) {
    throw (
      t(
        `Failed to install ${r} terminal Shift+Enter keybinding: ${u instanceof Error ? u.message : String(u)}`,
        { level: "error" }
      ),
      Error(`Failed to install ${r} terminal Shift+Enter key binding`)
    );
  }
}
async function Ct(e) {
  let { code: r } = await it("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`,
    X9t()
  ]);
  if (r !== 0) {
    let { code: n } = await it("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${e}':useOptionAsMetaKey true`,
      X9t()
    ]);
    if (n !== 0)
      return (
        t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, { level: "error" }),
        !1
      );
  }
  return !0;
}
async function $t(e) {
  let { code: r } = await it("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${e}':Bell bool false`,
    X9t()
  ]);
  if (r !== 0) {
    let { code: n } = await it("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${e}':Bell false`,
      X9t()
    ]);
    if (n !== 0)
      return (
        t(`Failed to disable audio bell for Terminal.app profile: ${e}`, { level: "error" }),
        !1
      );
  }
  return !0;
}
async function mr(e, r) {
  let n = (Wfi() ?? 0) >= 27,
    s = Wp();
  if (n && s)
    return `${Qn("success", e)("No Terminal.app changes needed.")}${p}${he.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${p}`;
  try {
    if (!(await Kgs(r)))
      throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let { stdout: u, code: d } = await it("defaults", [
      "read",
      "com.apple.Terminal",
      "Default Window Settings"
    ]);
    if (d !== 0 || !u.trim()) throw Error("Failed to read default Terminal.app profile");
    let { stdout: h, code: x } = await it("defaults", [
      "read",
      "com.apple.Terminal",
      "Startup Window Settings"
    ]);
    if (x !== 0 || !h.trim()) throw Error("Failed to read startup Terminal.app profile");
    let T = !1,
      E = u.trim(),
      L = n ? !1 : await Ct(E),
      N = s ? !1 : await $t(E);
    if (L || N) T = !0;
    let se = h.trim();
    if (se !== E) {
      let ie = n ? !1 : await Ct(se),
        F = s ? !1 : await $t(se);
      if (ie || F) T = !0;
    }
    if (!T) {
      if (n) throw Error("Failed to disable audio bell for any Terminal.app profile");
      if (s) throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
      throw Error(
        "Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile"
      );
    }
    (await it("killall", ["cfprefsd"]), await Y9t(r));
    let q = [Qn("success", e)("Configured Terminal.app settings:")];
    if (!n) q.push(Qn("success", e)('- Enabled "Use Option as Meta key"'));
    if (!s) q.push(Qn("success", e)("- Disabled the audible bell"));
    else q.push(he.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
    let Q = n
      ? he.dim("Shift+Return will now enter a newline.")
      : he.dim("Option+Enter will now enter a newline.");
    return `${q.join(p)}${p}${Q}${p}${he.dim("You must restart Terminal.app for changes to take effect.")}${p}`;
  } catch (o) {
    t(`Terminal.app setup failed: ${o instanceof Error ? o.message : String(o)}`, {
      level: "error"
    });
    let u = await MMn(r),
      d = n
        ? "Failed to disable the audio bell for Terminal.app."
        : "Failed to enable Option as Meta key for Terminal.app.";
    if (u.status === "restored") throw Error(`${d} Your settings have been restored from backup.`);
    else if (u.status === "failed")
      throw Error(
        `${d} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${u.backupPath}`
      );
    else throw Error(`${d} No backup was available to restore from.`);
  }
}
async function hr(e) {
  let n = [],
    s = i.XDG_CONFIG_HOME;
  if (s) n.push(ne(s, "alacritty", "alacritty.toml"));
  else n.push(ne(Je(), ".config", "alacritty", "alacritty.toml"));
  if (We() === "win32") {
    let h = i.APPDATA;
    if (h) n.push(ne(h, "alacritty", "alacritty.toml"));
  }
  let o = null,
    u = "",
    d = !1;
  for (let h of n)
    try {
      ((u = await $e(h, { encoding: "utf-8" })), (o = h), (d = !0));
      break;
    } catch (x) {
      if (!Vt(x)) throw x;
    }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (d) {
      if (u.includes('mods = "Shift"') && u.includes('key = "Return"'))
        return `${Qn("success", e)("Alacritty Shift+Enter key binding already configured")}${p}${he.dim(`See ${o}`)}${p}`;
      let x = De(4).toString("hex"),
        T = `${o}.${x}.bak`;
      try {
        await Ne(o, T);
      } catch {
        return `${Qn("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${p}${he.dim(`See ${o}`)}${p}${he.dim(`Backup path: ${T}`)}${p}`;
      }
    } else await ft(dr(o), { recursive: !0 });
    let h = u;
    if (
      u &&
      !u.endsWith(`
`)
    )
      h += `
`;
    return (
      (h += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`),
      await Ze(o, h, { encoding: "utf-8" }),
      `${Qn("success", e)("Installed Alacritty Shift+Enter key binding")}${p}${Qn("success", e)("You may need to restart Alacritty for changes to take effect")}${p}${he.dim(`See ${o}`)}${p}`
    );
  } catch (h) {
    throw (
      t(`Failed to install Alacritty keybinding: ${h instanceof Error ? h.message : String(h)}`, {
        level: "error"
      }),
      Error("Failed to install Alacritty Shift+Enter key binding")
    );
  }
}
var dt = ["terminal::SendText", "\x1B\r"];
function Lt(e) {
  return H(e) && e.context === "Terminal" && H(e.bindings) && "shift-enter" in e.bindings;
}
async function pr(e) {
  let r = O() === "linux" ? i.XDG_CONFIG_HOME : void 0,
    n = r ? ne(r, "zed") : ne(Je(), ".config", "zed"),
    s = ne(n, "keymap.json"),
    o = he.dim(`See ${s}`),
    u = he.dim(
      `To add the binding yourself, add this block to the keymap array in ${s}:${p}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`
    ),
    d = `${Qn("success", e)("Installed Zed Shift+Enter key binding")}${p}${o}${p}`,
    h = `${Qn("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${p}${u}${p}`,
    x = `${Qn("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${p}${u}${p}`;
  try {
    await ft(n, { recursive: !0 });
    let T = null;
    try {
      T = await $e(s, { encoding: "utf-8" });
    } catch (M) {
      if (!Vt(M)) throw M;
      if (!G(M)) return { message: h, installed: !1 };
    }
    if (T === null || No(T).trim() === "")
      return (
        await Dn(
          s,
          _([{ context: "Terminal", bindings: { "shift-enter": dt } }], null, 2) +
            `
`
        ),
        { message: d, installed: !0 }
      );
    let E = [],
      L = No(T),
      N = h4e(L, E, { allowTrailingComma: !0 });
    if (E.length > 0 || !Array.isArray(N)) return { message: x, installed: !1 };
    if (N.some(Lt))
      return {
        message: `${Qn("success", e)("Zed Shift+Enter key binding already configured")}${p}${o}${p}`,
        installed: !0
      };
    let se = De(4).toString("hex"),
      q = `${s}.${se}.bak`;
    try {
      await Ne(s, q);
    } catch (M) {
      return (
        t(`Failed to back up Zed keymap: ${M instanceof Error ? M.message : String(M)}`, {
          level: "error"
        }),
        {
          message: `${Qn("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${p}${u}${p}`,
          installed: !1
        }
      );
    }
    let Q = N.findIndex((M) => H(M) && M.context === "Terminal" && H(M.bindings)),
      ie = { insertSpaces: !0, tabSize: 2 },
      F = null;
    try {
      let M =
        Q >= 0
          ? Qvn(L, [Q, "bindings", "shift-enter"], dt, { formattingOptions: ie })
          : Qvn(
              L,
              [N.length],
              { context: "Terminal", bindings: { "shift-enter": dt } },
              { formattingOptions: ie, isArrayInsertion: !0 }
            );
      F = M.length > 0 ? aar(L, M) : null;
    } catch (M) {
      t(`Failed to edit Zed keymap: ${M instanceof Error ? M.message : String(M)}`, {
        level: "error"
      });
    }
    let V = [],
      J = F === null ? null : h4e(F, V, { allowTrailingComma: !0 });
    if (F === null || V.length > 0 || !Array.isArray(J) || !J.some(Lt))
      return {
        message: `${Qn("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${p}${u}${p}`,
        installed: !1
      };
    return (await Dn(s, F), { message: d, installed: !0 });
  } catch (T) {
    throw (
      t(
        `Failed to install Zed Shift+Enter key binding: ${T instanceof Error ? T.message : String(T)}`,
        { level: "error" }
      ),
      Error("Failed to install Zed Shift+Enter key binding")
    );
  }
}
var Xe = /[\u001b\u0080-\u009f]/g,
  Pt = "\u2060";
function Mt(e, r, n = vu) {
  let s = e.search(Xe) === -1 ? e : gr(e),
    o = n(s, r, { hard: !0, trim: !1 }).split(`
`),
    u = [],
    d = 0,
    h = !0;
  for (let x of o) {
    if (!s.startsWith(x, d)) return { rows: Rt(e, r), degraded: !0 };
    let T = d + x.length,
      E = s.startsWith(
        `\r
`,
        T
      )
        ? 2
        : s[T] ===
              `
` || s[T] === "\r"
          ? 1
          : 0;
    (u.push({
      text: e.slice(d, T),
      startOffset: d,
      isPrecededByNewline: h,
      endsWithNewline: E > 0
    }),
      (h = E > 0),
      (d = T + E));
  }
  return d === e.length ? { rows: u, degraded: !1 } : { rows: Rt(e, r), degraded: !0 };
}
function gr(e) {
  let r = O$e();
  return e
    .split(
      `
`
    )
    .map((n) =>
      n.search(Xe) === -1
        ? n
        : n
            .split("\r")
            .map((s) =>
              s.search(Xe) === -1
                ? s
                : [...r.feed(s), ...r.flush()]
                    .map((o) =>
                      o.type === "sequence" ? Pt.repeat(o.value.length) : o.value.replace(Xe, Pt)
                    )
                    .join("")
            )
            .join("\r")
    ).join(`
`);
}
function Rt(e, r) {
  let n = [],
    s = 0;
  for (let o of e.split(/\r\n|[\n\r]/)) {
    let u = 0,
      d = 0;
    for (let { segment: T, index: E } of $a().segment(o)) {
      let L = le(T);
      if (d + L > r && E > u)
        (n.push({
          text: o.slice(u, E),
          startOffset: s + u,
          isPrecededByNewline: u === 0,
          endsWithNewline: !1
        }),
          (u = E),
          (d = 0));
      d += L;
    }
    let h = s + o.length,
      x = e.startsWith(
        `\r
`,
        h
      )
        ? 2
        : h < e.length
          ? 1
          : 0;
    (n.push({
      text: o.slice(u),
      startOffset: s + u,
      isPrecededByNewline: u === 0,
      endsWithNewline: x > 0
    }),
      (s = h + x));
  }
  return n;
}
var br = /^[\p{L}\p{N}\p{M}_]+$/u,
  wr = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu,
  Le = /\s/,
  mt =
    "(?:\\[(?:Pasted text|Image|\\.\\.\\.Truncated text|\u2726 Team setup guide) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[\u29C9 [^\\]\\n]+\\])",
  xr = new RegExp(mt + "$"),
  It = new RegExp("^" + mt),
  efs = (e, r) => e[r] === "[" && It.test(e.slice(r)),
  Dt = new RegExp(mt, "g");
function tfs(e) {
  return e.replace(Dt, (r) => " ".repeat(r.length));
}
var g6e = (e) => br.test(e),
  Dlt = (e) => Le.test(e),
  Hlt = (e) => e.length > 0 && !Dlt(e) && !g6e(e);
class xi {
  measuredText;
  selection;
  offset;
  constructor(e, r = 0, n = 0) {
    this.measuredText = e;
    this.selection = n;
    this.offset = Math.max(0, Math.min(this.text.length, r));
  }
  static fromText(e, r, n = 0, s = 0) {
    return new xi(new Bt(e, r - 1), n, s);
  }
  getViewportStartLine(e) {
    if (e === void 0 || e <= 0) return 0;
    let { line: r } = this.getPosition(),
      n = this.measuredText.getWrappedText();
    if (n.length <= e) return 0;
    let s = Math.floor(e / 2),
      o = Math.max(0, r - s),
      u = Math.min(n.length, o + e);
    if (u - o < e) o = Math.max(0, u - e);
    return o;
  }
  getRenderedRowStartOffsets(e) {
    let { startLine: r, endLine: n } = this.getViewportLineRange(e);
    return this.measuredText
      .getWrappedLines()
      .slice(r, n)
      .map((s) => s.displayStartOffset);
  }
  getViewportLineRange(e) {
    let r = this.measuredText.getWrappedLines().length,
      n = this.getViewportStartLine(e),
      s = e !== void 0 && e > 0 ? Math.min(r, n + e) : r;
    return { startLine: n, endLine: s };
  }
  render(e, r, n, s, o, u, d, h, x, T) {
    let E = this.measuredText.getWrappedLines(),
      { startLine: L, endLine: N } = this.getViewportLineRange(o);
    if (u !== void 0) {
      let F = Math.min(u, this.offset),
        V = Math.max(u, this.offset),
        J = d ? this.findLogicalLineStart(F) : F,
        M = d ? this.findLogicalLineEnd(V) : this.measuredText.nextOffset(V);
      return E.slice(L, N).map((Y, me) => {
        let S = (h ?? !1) && (Y.endsWithNewline || me + L === E.length - 1),
          { displayText: U, displayStartOffset: Z } = Y,
          z = Z + U.length;
        if (M <= Z || J >= z) {
          if (Z === z && J <= Z && (d ? M >= z : M > z)) return (h ?? !1) ? "" : n(" ");
          return S ? U : U.trimEnd();
        }
        if (Z === z) return (h ?? !1) ? "" : n(" ");
        let ae = Math.max(0, J - Z),
          te = Math.min(U.length, M - Z);
        if (h ?? !1) {
          let D = S ? U : U.trimEnd(),
            B = Math.min(ae, D.length),
            fe = Math.min(te, D.length);
          return (
            D.slice(0, B) +
            Wt(D, { from: B, to: fe }, n, { spans: x ?? [], rowStart: Z }) +
            D.slice(fe)
          );
        }
        return (
          U.slice(0, ae) +
          Wt(U, { from: ae, to: te }, n, { spans: x ?? [], rowStart: Z }) +
          U.slice(te).trimEnd()
        );
      }).join(`
`);
    }
    let { line: se, column: q } = this.getPosition(),
      Q = this.measuredText.getWrappedText(),
      ie = this.measuredText.getWrappedLines();
    return Q.slice(L, N).map((F, V) => {
      let J = V + L,
        M = (h ?? !1) && ((ie[J]?.endsWithNewline ?? !1) || J === Q.length - 1),
        Y = F;
      if (r) {
        let D = Array.from($a().segment(F));
        if (J === Q.length - 1 && !T) {
          let B = Math.min(6, D.length),
            fe = D.length - B,
            re = D.length > B ? D[fe].index : 0;
          Y = r.repeat(fe) + F.slice(re);
        } else Y = r.repeat(D.length);
      }
      if (se !== J) return M ? Y : Y.trimEnd();
      let me = "",
        S = e,
        U = "",
        Z = 0,
        z = !1;
      for (let { segment: D } of $a().segment(Y)) {
        if (z) {
          U += D;
          continue;
        }
        let B = Z + le(D);
        if (B > q) ((S = D), (z = !0));
        else ((Z = B), (me += D));
      }
      let ae,
        te = "";
      if (s && J === Q.length - 1 && this.isAtEnd() && s.text.length > 0) {
        let D = KZ(s.text) || s.text[0];
        ae = e ? n(D) : D;
        let B = s.text.slice(D.length);
        if (B.length > 0) te = s.dim(B);
      } else ae = e ? n(S) : S;
      if (h && !M && e === "") return (me + ae + te + U).trimEnd();
      return me + ae + te + (M ? U : U.trimEnd());
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new xi(this.measuredText, e.start);
    let r = this.measuredText.prevOffset(this.offset);
    return new xi(this.measuredText, r);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let e = this.placeholderStartingAt(this.offset);
    if (e) return new xi(this.measuredText, e.end);
    let r = this.measuredText.nextOffset(this.offset);
    return new xi(this.measuredText, Math.min(r, this.text.length));
  }
  placeholderEndingAt(e) {
    if (this.text[e - 1] !== "]") return null;
    let r = this.text.slice(0, e).match(xr);
    return r ? { start: e - r[0].length, end: e } : null;
  }
  placeholderStartingAt(e) {
    if (this.text[e] !== "[") return null;
    let r = this.text.slice(e).match(It);
    return r ? { start: e, end: e + r[0].length } : null;
  }
  placeholderContaining(e) {
    for (let r of this.text.matchAll(Dt)) {
      let n = r.index,
        s = n + r[0].length;
      if (e > n && e < s) return { start: n, end: s };
      if (n >= e) break;
    }
    return null;
  }
  snapOutOfPlaceholder(e, r) {
    let n = this.placeholderContaining(e);
    if (!n) return e;
    return r === "start" ? n.start : n.end;
  }
  up() {
    let { line: e, column: r } = this.getPosition();
    if (e === 0) return this;
    let n = this.measuredText.getWrappedText()[e - 1];
    if (n === void 0) return this;
    let s = le(n);
    if (r > s) {
      let u = this.getOffset({ line: e - 1, column: s });
      return new xi(this.measuredText, u, 0);
    }
    let o = this.getOffset({ line: e - 1, column: r });
    return new xi(this.measuredText, o, 0);
  }
  down() {
    let { line: e, column: r } = this.getPosition();
    if (e >= this.measuredText.lineCount - 1) return this;
    let n = this.measuredText.getWrappedText()[e + 1];
    if (n === void 0) return this;
    let s = le(n);
    if (r > s) {
      let u = this.getOffset({ line: e + 1, column: s });
      return new xi(this.measuredText, u, 0);
    }
    let o = this.getOffset({ line: e + 1, column: r });
    return new xi(this.measuredText, o, 0);
  }
  startOfCurrentLine() {
    let { line: e } = this.getPosition();
    return new xi(this.measuredText, this.getOffset({ line: e, column: 0 }), 0);
  }
  startOfLine() {
    let { line: e, column: r } = this.getPosition();
    if (r === 0 && e > 0)
      return new xi(this.measuredText, this.getOffset({ line: e - 1, column: 0 }), 0);
    return this.startOfCurrentLine();
  }
  firstNonBlankInLine() {
    let { line: e } = this.getPosition(),
      n = (this.measuredText.getWrappedText()[e] || "").match(/^\s*\S/),
      s = n?.index ? n.index + n[0].length - 1 : 0,
      o = this.getOffset({ line: e, column: s });
    return new xi(this.measuredText, o, 0);
  }
  endOfLine() {
    let { line: e, column: r } = this.getPosition(),
      n = this.measuredText.getLineLength(e);
    if (r >= n && e < this.measuredText.lineCount - 1) {
      let o = this.measuredText.getLineLength(e + 1),
        u = this.getOffset({ line: e + 1, column: o });
      return new xi(this.measuredText, u, 0);
    }
    let s = this.getOffset({ line: e, column: n });
    return new xi(this.measuredText, s, 0);
  }
  findLogicalLineStart(e = this.offset) {
    if (e === 0) return 0;
    let r = this.text.lastIndexOf(
      `
`,
      e - 1
    );
    return r === -1 ? 0 : r + 1;
  }
  findLogicalLineEnd(e = this.offset) {
    let r = this.text.indexOf(
      `
`,
      e
    );
    return r === -1 ? this.text.length : r;
  }
  getLogicalLineBounds() {
    return { start: this.findLogicalLineStart(), end: this.findLogicalLineEnd() };
  }
  createCursorWithColumn(e, r, n) {
    let s = r - e,
      o = Math.min(n, s),
      u = e + o,
      d = this.measuredText.snapToGraphemeBoundary(u);
    return new xi(this.measuredText, d, 0);
  }
  endOfLogicalLine() {
    return new xi(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  lastCharInLogicalLine() {
    let e = this.findLogicalLineStart(),
      r = this.findLogicalLineEnd(),
      n = r > e ? this.measuredText.prevOffset(r) : e;
    return new xi(this.measuredText, n, 0);
  }
  startOfLogicalLine() {
    return new xi(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let { start: e, end: r } = this.getLogicalLineBounds(),
      s = this.text.slice(e, r).match(/\S/),
      o = e + (s?.index ?? 0);
    return new xi(this.measuredText, o, 0);
  }
  upLogicalLine() {
    let { start: e } = this.getLogicalLineBounds();
    if (e === 0) return new xi(this.measuredText, 0, 0);
    let r = this.offset - e,
      n = e - 1,
      s = this.findLogicalLineStart(n);
    return this.createCursorWithColumn(s, n, r);
  }
  downLogicalLine() {
    let { start: e, end: r } = this.getLogicalLineBounds();
    if (r >= this.text.length) return new xi(this.measuredText, this.text.length, 0);
    let n = this.offset - e,
      s = r + 1,
      o = this.findLogicalLineEnd(s);
    return this.createCursorWithColumn(s, o, n);
  }
  forwardWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new xi(this.measuredText, e.end);
    for (let r of this.measuredText.getReadlineWordBoundaries())
      if (r.end > this.offset) {
        let n = this.snapOutOfPlaceholder(r.end, "end");
        return new xi(this.measuredText, n);
      }
    return new xi(this.measuredText, this.text.length);
  }
  backwardWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) return new xi(this.measuredText, e.start);
    let r = this.measuredText.getReadlineWordBoundaries();
    for (let n = r.length - 1; n >= 0; n--) {
      let s = r[n];
      if (s.start < this.offset) {
        let o = this.snapOutOfPlaceholder(s.start, "start");
        return new xi(this.measuredText, o);
      }
    }
    return new xi(this.measuredText, 0);
  }
  killWord() {
    let e = this.forwardWord();
    if (e.offset === this.offset) return { cursor: this, killed: "" };
    return this.killRange(this.offset, e.offset);
  }
  backwardKillWord() {
    let e = this.backwardWord();
    if (e.offset === this.offset) return { cursor: this, killed: "" };
    return this.killRange(e.offset, this.offset);
  }
  nextVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e) {
      let o = e.end;
      while (o < this.text.length && Le.test(this.graphemeAt(o)))
        o = this.measuredText.nextOffset(o);
      return new xi(this.measuredText, o);
    }
    let r = this.offset,
      n = (o) => this.measuredText.nextOffset(o),
      s = this.graphemeAt(r);
    if (!s) return this;
    if (g6e(s)) while (r < this.text.length && g6e(this.graphemeAt(r))) r = n(r);
    else if (Hlt(s)) while (r < this.text.length && Hlt(this.graphemeAt(r))) r = n(r);
    while (r < this.text.length && Le.test(this.graphemeAt(r))) r = n(r);
    return new xi(this.measuredText, this.snapOutOfPlaceholder(r, "end"));
  }
  endOfVimWord() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new xi(this.measuredText, e.end - 1);
    let r = this.text,
      n = this.offset,
      s = (d) => this.measuredText.nextOffset(d);
    if (this.graphemeAt(n) === "") return this;
    n = s(n);
    while (n < r.length && Le.test(this.graphemeAt(n))) n = s(n);
    if (n >= r.length) return new xi(this.measuredText, r.length);
    let o = this.graphemeAt(n);
    if (g6e(o))
      while (n < r.length) {
        let d = s(n);
        if (d >= r.length || !g6e(this.graphemeAt(d))) break;
        n = d;
      }
    else if (Hlt(o))
      while (n < r.length) {
        let d = s(n);
        if (d >= r.length || !Hlt(this.graphemeAt(d))) break;
        n = d;
      }
    let u = this.placeholderStartingAt(n) ?? this.placeholderContaining(n);
    if (u) n = u.end - 1;
    return new xi(this.measuredText, n);
  }
  prevVimWord() {
    if (this.isAtStart()) return this;
    let e = this.placeholderEndingAt(this.offset);
    if (e) return new xi(this.measuredText, e.start);
    let r = this.placeholderContaining(this.offset);
    if (r) return new xi(this.measuredText, r.start);
    let n = this.offset,
      s = (u) => this.measuredText.prevOffset(u);
    n = s(n);
    while (n > 0 && Le.test(this.graphemeAt(n))) n = s(n);
    if (n === 0 && Le.test(this.graphemeAt(0))) return new xi(this.measuredText, 0);
    let o = this.graphemeAt(n);
    if (g6e(o))
      while (n > 0) {
        let u = s(n);
        if (!g6e(this.graphemeAt(u))) break;
        n = u;
      }
    else if (Hlt(o))
      while (n > 0) {
        let u = s(n);
        if (!Hlt(this.graphemeAt(u))) break;
        n = u;
      }
    return new xi(this.measuredText, this.snapOutOfPlaceholder(n, "start"));
  }
  nextWORD() {
    let e = this;
    while (!e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    while (e.isOverWhitespace() && !e.isAtEnd()) e = e.right();
    return e;
  }
  endOfWORD() {
    if (this.isAtEnd()) return this;
    let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
    if (e && this.offset < e.end - 1) return new xi(this.measuredText, e.end - 1);
    let r = this;
    if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd()))
      return ((r = r.right()), r.endOfWORD());
    if (r.isOverWhitespace()) {
      r = r.nextWORD();
      let s = r.placeholderStartingAt(r.offset);
      if (s) return new xi(this.measuredText, s.end - 1);
    }
    while (!r.right().isOverWhitespace() && !r.isAtEnd()) r = r.right();
    return r;
  }
  prevWORD() {
    let e = this;
    if (e.left().isOverWhitespace()) e = e.left();
    while (e.isOverWhitespace() && !e.isAtStart()) e = e.left();
    if (!e.isOverWhitespace()) while (!e.left().isOverWhitespace() && !e.isAtStart()) e = e.left();
    return e;
  }
  modifyText(e, r = "") {
    let n = this.offset,
      s = e.offset,
      o = this.text.slice(0, n) + r,
      u = o + this.text.slice(s),
      d = o.normalize("NFC").length,
      h = xi.fromText(u, this.columns, d),
      x = d !== n + r.normalize("NFC").length,
      { measuredText: T, offset: E } = h;
    if (x && T.snapToGraphemeBoundary(E) !== E) return new xi(T, T.nextOffset(E));
    return h;
  }
  insert(e) {
    return this.modifyText(this, e);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart(e) {
    if (
      this.offset > 0 &&
      this.text[this.offset - 1] ===
        `
`
    )
      return {
        cursor: this.left().modifyText(this),
        killed: `
`
      };
    let r = e ?? this.startOfLine();
    return this.killRange(r.offset, this.offset);
  }
  deleteToLineEnd(e) {
    if (
      this.text[this.offset] ===
      `
`
    )
      return {
        cursor: this.modifyText(this.right()),
        killed: `
`
      };
    return this.killRange(this.offset, (e ?? this.endOfLine()).offset);
  }
  deleteToLogicalLineEnd() {
    if (
      this.text[this.offset] ===
      `
`
    )
      return this.modifyText(this.right());
    return this.killRange(this.offset, this.endOfLogicalLine().offset).cursor;
  }
  deleteWORDBefore() {
    if (this.isAtStart()) return { cursor: this, killed: "" };
    return this.killRange(this.prevWORD().offset, this.offset);
  }
  killRange(e, r) {
    let n = this.snapOutOfPlaceholder(e, "start"),
      s = this.snapOutOfPlaceholder(r, "end"),
      o = new xi(this.measuredText, n),
      u = new xi(this.measuredText, s);
    return { cursor: o.modifyText(u), killed: this.text.slice(n, s) };
  }
  graphemeAt(e) {
    if (e >= this.text.length) return "";
    let r = this.measuredText.nextOffset(e);
    return this.text.slice(e, r);
  }
  isOverWhitespace() {
    let e = this.text[this.offset] ?? "";
    return /\s/.test(e);
  }
  equals(e) {
    return this.offset === e.offset && this.measuredText === e.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new xi(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let e = this.text.lastIndexOf(`
`);
    if (e === -1) return this.startOfLine();
    return new xi(this.measuredText, e + 1, 0);
  }
  goToLine(e) {
    let r = this.text.split(`
`),
      n = Math.min(Math.max(0, e - 1), r.length - 1),
      s = 0;
    for (let o = 0; o < n; o++) s += (r[o]?.length ?? 0) + 1;
    return new xi(this.measuredText, s, 0);
  }
  endOfFile() {
    return new xi(this.measuredText, this.text.length, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(e) {
    return this.measuredText.getOffsetFromPosition(e);
  }
  findCharacter(e, r, n = 1) {
    let s = r === "f" || r === "t",
      o = r === "t" || r === "T",
      u = 0;
    if (s) {
      let d = this.findLogicalLineEnd(),
        h = this.measuredText.nextOffset(this.offset);
      while (h < d) {
        if (this.graphemeAt(h) === e) {
          if ((u++, u === n)) return o ? Math.max(this.offset, this.measuredText.prevOffset(h)) : h;
        }
        h = this.measuredText.nextOffset(h);
      }
    } else {
      let d = this.findLogicalLineStart();
      if (this.offset <= d) return null;
      let h = this.measuredText.prevOffset(this.offset);
      while (h >= d) {
        if (this.graphemeAt(h) === e) {
          if ((u++, u === n)) return o ? Math.min(this.offset, this.measuredText.nextOffset(h)) : h;
        }
        if (h === d) break;
        h = this.measuredText.prevOffset(h);
      }
    }
    return null;
  }
}
class Nt {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  displayText;
  displayStartOffset;
  constructor(e, r, n, s) {
    this.text = e;
    this.startOffset = r;
    this.isPrecededByNewline = n;
    this.endsWithNewline = s;
    ((this.displayText = n ? e : e.trimStart()),
      (this.displayStartOffset = r + (e.length - this.displayText.length)));
  }
  equals(e) {
    return this.text === e.text && this.startOffset === e.startOffset;
  }
}
class Bt {
  columns;
  _wrappedLines;
  text;
  navigationCache;
  graphemeBoundaries;
  constructor(e, r) {
    this.columns = r;
    ((this.text = e.normalize("NFC")), (this.navigationCache = new Map()));
  }
  get wrappedLines() {
    if (!this._wrappedLines) {
      let { rows: e, degraded: r } = Mt(this.text, this.columns);
      if (r) yr(this.columns, this.text.length);
      this._wrappedLines = e.map(
        (n) => new Nt(n.text, n.startOffset, n.isPrecededByNewline, n.endsWithNewline)
      );
    }
    return this._wrappedLines;
  }
  getGraphemeBoundaries() {
    if (!this.graphemeBoundaries) {
      this.graphemeBoundaries = [];
      for (let { index: e } of $a().segment(this.text)) this.graphemeBoundaries.push(e);
      this.graphemeBoundaries.push(this.text.length);
    }
    return this.graphemeBoundaries;
  }
  wordBoundariesCache;
  getWordBoundaries() {
    if (!this.wordBoundariesCache) {
      this.wordBoundariesCache = [];
      for (let e of gZo().segment(this.text))
        this.wordBoundariesCache.push({ start: e.index, end: e.index + e.segment.length });
    }
    return this.wordBoundariesCache;
  }
  readlineWordBoundariesCache;
  getReadlineWordBoundaries() {
    if (!this.readlineWordBoundariesCache) {
      let e = [],
        r = !1;
      for (let n of this.getWordBoundaries()) {
        let s = this.text.slice(n.start, n.end);
        for (let o of s.matchAll(wr)) {
          let u = this.snapToGraphemeBoundary(n.start + o.index),
            d = n.start + o.index + o[0].length,
            h = this.snapToGraphemeBoundary(d),
            x = h === d ? d : this.nextOffset(h),
            T = e.at(-1);
          if (T && (u < T.end || (u === T.end && r))) T.end = Math.max(T.end, x);
          else e.push({ start: u, end: x });
          r = x !== d;
        }
      }
      this.readlineWordBoundariesCache = e;
    }
    return this.readlineWordBoundariesCache;
  }
  binarySearchBoundary(e, r, n) {
    let s = 0,
      o = e.length - 1,
      u = n ? this.text.length : 0;
    while (s <= o) {
      let d = Math.floor((s + o) / 2),
        h = e[d];
      if (h === void 0) break;
      if (n)
        if (h > r) ((u = h), (o = d - 1));
        else s = d + 1;
      else if (h < r) ((u = h), (s = d + 1));
      else o = d - 1;
    }
    return u;
  }
  stringIndexToDisplayWidth(e, r) {
    if (r <= 0) return 0;
    if (r >= e.length) return le(e);
    return le(e.substring(0, r));
  }
  displayWidthToStringIndex(e, r) {
    if (r <= 0) return 0;
    if (!e) return 0;
    if (e === this.text) return this.offsetAtDisplayWidth(r);
    let n = 0,
      s = 0;
    for (let { segment: o, index: u } of $a().segment(e)) {
      let d = le(o);
      if (n + d > r) break;
      ((n += d), (s = u + o.length));
    }
    return s;
  }
  offsetAtDisplayWidth(e) {
    if (e <= 0) return 0;
    let r = 0,
      n = this.getGraphemeBoundaries();
    for (let s = 0; s < n.length - 1; s++) {
      let o = n[s],
        u = n[s + 1];
      if (o === void 0 || u === void 0) continue;
      let d = this.text.substring(o, u),
        h = le(d);
      if (r + h > e) return o;
      r += h;
    }
    return this.text.length;
  }
  getWrappedText() {
    return this.wrappedLines.map((e) => e.displayText);
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(e) {
    let r = this.wrappedLines;
    return r[Math.max(0, Math.min(e, r.length - 1))];
  }
  getOffsetFromPosition(e) {
    let r = this.getLine(e.line);
    if (r.text.length === 0 && r.endsWithNewline) return r.startOffset;
    let n = r.displayStartOffset - r.startOffset,
      s = e.column + n,
      o = this.displayWidthToStringIndex(r.text, s),
      u = r.startOffset + o;
    return this.snapToGraphemeBoundary(u);
  }
  getLineLength(e) {
    let r = this.getLine(e);
    return le(r.text);
  }
  getPositionFromOffset(e) {
    let r = this.wrappedLines;
    for (let o = 0; o < r.length; o++) {
      let u = r[o],
        d = r[o + 1];
      if (e >= u.startOffset && (!d || e < d.startOffset)) {
        let h = e - u.startOffset,
          x;
        if (u.isPrecededByNewline) x = this.stringIndexToDisplayWidth(u.text, h);
        else {
          let T = u.displayStartOffset - u.startOffset;
          if (h < T) x = 0;
          else {
            let E = u.displayText,
              L = h - T;
            x = this.stringIndexToDisplayWidth(E, L);
          }
        }
        return { line: o, column: Math.max(0, x) };
      }
    }
    let n = r.length - 1,
      s = this.wrappedLines[n];
    return { line: n, column: le(s.text) };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  withCache(e, r) {
    let n = this.navigationCache.get(e);
    if (n !== void 0) return n;
    let s = r();
    return (this.navigationCache.set(e, s), s);
  }
  nextOffset(e) {
    return this.withCache(`next:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !0);
    });
  }
  prevOffset(e) {
    if (e <= 0) return 0;
    return this.withCache(`prev:${e}`, () => {
      let r = this.getGraphemeBoundaries();
      return this.binarySearchBoundary(r, e, !1);
    });
  }
  snapToGraphemeBoundary(e) {
    if (e <= 0) return 0;
    if (e >= this.text.length) return this.text.length;
    let r = this.getGraphemeBoundaries(),
      n = 0,
      s = r.length - 1;
    while (n < s) {
      let o = (n + s + 1) >> 1;
      if (r[o] <= e) n = o;
      else s = o - 1;
    }
    return r[n];
  }
}
function Wt(e, { from: r, to: n }, s, { spans: o, rowStart: u }) {
  let d = r,
    h = "";
  for (let x of o) {
    let T = Math.max(d, x.start - u),
      E = Math.min(n, x.end - u);
    if (E <= T) continue;
    ((h += (T > d ? s(e.slice(d, T)) : "") + e.slice(T, E)), (d = E));
  }
  return d === r || n > d ? h + s(e.slice(d, n)) : h;
}
function yr(e, r) {
  if (!qi().claim("measured_text_wrap_fallback")) return;
  l(
    new R(
      `Wrapped rows do not tile the text (columns=${e}, length=${r}); fell back to plain hard wrapping`,
      "Wrapped rows do not tile the text; fell back to plain hard wrapping"
    )
  );
}
class Ft {
  prewarmed = !1;
  claim() {
    if (this.prewarmed) return !1;
    return ((this.prewarmed = !0), !0);
  }
  reset() {
    this.prewarmed = !1;
  }
}
var Pn = new W(() => new Ft());
function Ht() {}
function Gt(e) {
  return !1;
}
var fIn = 3000,
  pIn = "Press \u2190 again to go back to agents",
  ygr = "Ambiguous \u2190, press again to detach",
  Kt = 1000,
  _gr = 150,
  Tr = 150;
function bgr() {
  return {
    editedEmptyAtMs: 0,
    armedAtMs: 0,
    absorbAnchorMs: 0,
    lastQualifiedLeftPressMs: 0,
    attachConfirmArmedAtMs: 0,
    absorbLogged: !1
  };
}
function Sgr(e, r, n, s = k("tengu_left_arrow_editing_guard", !0), o = iXt(r), u = J6e()) {
  if (n !== !0) return "reject";
  let d = (x) => x !== 0 && x >= u;
  if (o) {
    if (d(e.absorbAnchorMs) && r - e.absorbAnchorMs < Kt) return "attach-absorb";
    if (d(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3000)
      return r - e.attachConfirmArmedAtMs >= Tr ? "fire" : "attach-absorb";
    return "attach-arm";
  }
  if (!s) return "fire";
  if (d(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < _gr) return "absorb";
  if (d(e.armedAtMs) && r - e.armedAtMs <= 3000) return "fire";
  if (d(e.absorbAnchorMs) && r - e.absorbAnchorMs < Kt) return "absorb";
  return d(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2000 ? "arm" : "fire";
}
function wgr(e, r, n) {
  switch (r) {
    case "fire":
      if (e.armedAtMs !== 0) e.editedEmptyAtMs = 0;
      ((e.armedAtMs = 0),
        (e.attachConfirmArmedAtMs = 0),
        (e.absorbAnchorMs = n),
        (e.lastQualifiedLeftPressMs = n),
        (e.absorbLogged = !1));
      return;
    case "arm":
      ((e.armedAtMs = n),
        (e.absorbAnchorMs = n),
        (e.lastQualifiedLeftPressMs = n),
        (e.absorbLogged = !1));
      return;
    case "absorb":
      if (n - e.lastQualifiedLeftPressMs < _gr) e.absorbAnchorMs = n;
      e.lastQualifiedLeftPressMs = n;
      return;
    case "reject":
      return;
    case "attach-arm":
      e.attachConfirmArmedAtMs = n;
      return;
    case "attach-absorb":
      return;
  }
}
function vgr(e, r, n) {
  let s = r - J6e();
  switch (e) {
    case "fire":
      return;
    case "arm":
      a("tengu_left_arrow_blocked", { reason: b("editing-quiet") });
      return;
    case "attach-arm":
      (a("tengu_left_arrow_blocked", { reason: b("attach-quiet-hint"), ms_since_stamp: s }),
        t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${s})`, { level: "debug" }));
      return;
    case "attach-absorb":
      (a("tengu_left_arrow_blocked", { reason: b("attach-quiet"), ms_since_stamp: s }),
        t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${s})`, {
          level: "debug"
        }));
      return;
    case "reject":
      if (qi().claim("left_arrow_not_solo_reject"))
        a("tengu_left_arrow_blocked", { reason: b("not-solo") });
      return;
    case "absorb":
      if (n.absorbAnchorMs === r || n.absorbLogged) return;
      n.absorbLogged = !0;
      let o = r - n.absorbAnchorMs;
      (a("tengu_left_arrow_blocked", { reason: b("absorb"), ms_since_press: o }),
        t(
          `leftArrowGesture: human-cadence press absorbed, too soon after the last \u2190 that fired or showed the hint (ms_since_press=${o})`,
          { level: "debug" }
        ));
      return;
  }
}
var mIn = (e, r) => e.filter((n) => n.start < r),
  Egr = (e, r) => e.normalize("NFC") === e && r.text.normalize("NFC") === r.text;
function Sr(e, r, n) {
  let s = n === "up" || n === "down",
    o = e.cursorOver(r);
  for (;;) {
    let u = o[n]();
    if (u.equals(o)) return r;
    let d = u.getPosition().line,
      h = uDo(e.text, u.offset),
      x = (s ? [h, r.measuredText.nextOffset(h), r.measuredText.prevOffset(h)] : [h]).find(
        (T) => T !== r.offset && (!s || e.rowOf(T) === d)
      );
    if (x !== void 0) return new xi(r.measuredText, x);
    o = u;
  }
}
function ht({ buffer: e, texts: r, columns: n, side: s }) {
  if (r.length === 0) return;
  let o = Hln(e, r);
  if (!Egr(e, o)) return;
  let { measuredText: u } = xi.fromText(o.text, n),
    d = (x) => new xi(u, bGe(o, x.offset, s)),
    h = (x) => u.getPositionFromOffset(bGe(o, x, s)).line;
  return {
    text: o,
    cursorOver: d,
    rowOf: h,
    lastRow: () => {
      let x = bGe(o, e.length, "before");
      return u.getPositionFromOffset(
        e.endsWith(`
`)
          ? x
          : u.prevOffset(x)
      ).line;
    },
    rowMoved: (x, T) => Sr({ text: o, cursorOver: d, rowOf: h }, x, T)
  };
}
function gIn({ buffer: e, offset: r, texts: n, columns: s, side: o }) {
  let u = xi.fromText(e, s, r),
    d = ht({ buffer: e, texts: n, columns: s, side: o });
  if (d === void 0) return { cursor: u, bufferOffset: (h) => h };
  return { cursor: d.cursorOver(u), bufferOffset: (h) => uDo(d.text, h) };
}
var Er = () => {};
function Ar(e, r) {
  if (e === "") return;
  if (r !== "") {
    L5("deleted");
    return;
  }
  let n =
    e.trim() === ""
      ? e.includes(`
`)
        ? "new line"
        : e.includes("\t")
          ? "tab"
          : "space"
      : e
          .replaceAll(
            `
`,
            " "
          )
          .trim();
  L5(n);
}
var Or = new Set([
  "insert",
  "clear",
  "enter",
  "center",
  "undefined",
  "mouse",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12"
]);
function O8t() {
  return i.terminal === "Apple_Terminal" && Gt("shift");
}
function jt(e) {
  let r = new Map(e);
  return function (n) {
    return (r.get(n) ?? Er)(n);
  };
}
function M8t({
  value: e,
  onChange: r,
  onSubmit: n,
  onExit: s,
  onExitMessage: o,
  onEscapeMessage: u,
  historyOnClear: d = !0,
  onLeftArrowOnEmpty: h,
  leftArrowConfirmHint: x,
  onHistoryUp: T,
  onHistoryDown: E,
  onHistoryReset: L,
  mask: N = "",
  maskWhole: se = !1,
  multiline: q = !1,
  disableBackslashReturn: Q = !1,
  clearOnSubmit: ie = !0,
  disableCtrlCClear: F = !1,
  cursorChar: V,
  preserveTrailingWhitespace: J = !1,
  invert: M,
  columns: Y,
  leadingPill: me,
  onImagePaste: S,
  disableCursorMovementForUpDownKeys: U = !1,
  disableEscapeDoublePress: Z = !1,
  maxVisibleLines: z,
  externalOffset: ae,
  onOffsetChange: te,
  inputFilter: D,
  getPastedContents: B,
  getInputMode: fe,
  inlineGhostText: re,
  dim: ye,
  virtualTexts: oe,
  isCursorOnCharacter: Te = !1,
  editRelay: we,
  commitEdit: xe,
  selectionAnchor: Oe,
  selectionLinewise: Yt = !1
}) {
  let gt = _i(),
    Se = y6e();
  if (i.terminal === "Apple_Terminal") Ht();
  let Be = ae,
    Fe = te,
    I = me?.text ?? "",
    w = xi.fromText(I + e, Y, I.length + Be),
    bt = re && ye && re.insertPosition === Be ? { text: re.text, dim: ye } : void 0,
    wt = bt !== void 0 && Be >= e.length,
    et = ee(
      () =>
        oe === void 0 || oe.length === 0 || e === "" || N !== ""
          ? void 0
          : ht({
              buffer: I + e,
              texts: _Ge(wt ? mIn(oe, e.length) : oe, I.length),
              columns: Y,
              side: Te ? "after" : "before"
            }),
      [oe, e, N, I, wt, Y, Te]
    ),
    tt = !1,
    rt,
    He = !1;
  function Ee(c) {
    return D && rt ? D(c, rt) : c;
  }
  let { addNotification: Ge, removeNotification: nt } = To(),
    { storageV5: ot } = Me(),
    [pe] = y(bgr),
    Ke = "left-arrow-again-for-agents",
    je = C({ key: "Ctrl-C", pending: !1 }),
    zt = B6(
      (c) => {
        ((je.current.pending = c), o?.(c, je.current.key));
      },
      () => s?.(),
      () => {
        if (!F && e) (r(""), Fe(0), L?.());
      }
    );
  function xt(c) {
    if (!je.current.pending) je.current.key = c;
    zt();
  }
  let qt = B6(
    (c) => {
      if (!e) return;
      if (u) {
        u(c);
        return;
      }
      if (!c) return;
      Ge({
        key: "escape-again-to-clear",
        kind: "feedback",
        text: "Esc again to clear",
        row1Hint: "Esc again to clear",
        priority: "immediate",
        timeoutMs: 1000
      });
    },
    () => {
      if ((u?.(!1), nt("escape-again-to-clear"), e)) {
        if (d && N === "" && e.trim() !== "") {
          let c = B ? Ko(B(), (ce) => ce.type === "text" && ce.unavailable === !0) : void 0,
            A = fe?.(),
            v = A !== void 0 ? rIe(e, A) : e,
            X = c ? { display: v, pastedContents: c } : v;
          if (A !== void 0) Ihe(X, ot, { submitMode: A });
          else Ihe(X, ot);
        }
        (r(""), Fe(0), L?.());
      }
    }
  );
  function Jt() {
    if (w.text === I && e === "") return (xt("Ctrl-D"), w);
    return w.del();
  }
  function yt() {
    if (I !== "" && w.offset === I.length) return xi.fromText(w.text.slice(I.length), Y);
    return w.backspace();
  }
  function ke(c, A) {
    let v = c.startsWith(I) ? c.slice(I.length) : c;
    return (
      Se.dispatch(N === "" ? { type: "kill", text: v, direction: A } : { type: "interrupt" }),
      Ar(v, N),
      v
    );
  }
  function at() {
    let { cursor: c, killed: A } = w.deleteToLineEnd(ge("endOfLine"));
    return (ke(A, "append"), c);
  }
  function Tt() {
    let { cursor: c, killed: A } = w.deleteToLineStart(ge("startOfLine")),
      v = ke(A, "prepend");
    if (N === "" && v.length >= 3)
      Ge({
        key: "kill-paste-hint",
        kind: "hint",
        text: "Ctrl+Y to paste deleted text",
        row1Hint: "ctrl+y to undo delete",
        priority: "immediate",
        timeoutMs: 5000
      });
    return c;
  }
  function Zt() {
    let { cursor: c, killed: A } = w.killWord();
    return (ke(A, "append"), c);
  }
  function Qt() {
    let { cursor: c, killed: A } = w.backwardKillWord();
    return (ke(A, "prepend"), c);
  }
  function Xt() {
    let { cursor: c, killed: A } = w.deleteWORDBefore();
    return (ke(A, "prepend"), c);
  }
  function er() {
    let c = Ee(Blt(Se.state));
    if (c.length > 0) {
      let A = w.offset - I.length,
        v = w.insert(c);
      return (Se.dispatch({ type: "yank", start: A, length: c.length }), v);
    }
    return w;
  }
  function tr() {
    let c = AIn(Se.state);
    if (!c) return w;
    let { text: A, length: v } = c,
      X = I.length + c.start,
      ce = Ee(A);
    Se.dispatch({ type: "yankPop" });
    let Ae = w.text.slice(0, X),
      Ye = w.text.slice(X + v),
      ur = Ae + ce + Ye,
      cr = X + ce.length;
    return (Se.dispatch({ type: "updateYankLength", length: ce.length }), xi.fromText(ur, Y, cr));
  }
  let rr = jt([
      ["a", () => w.startOfLogicalLine()],
      ["b", () => w.left()],
      ["c", () => (xt("Ctrl-C"), w)],
      ["d", Jt],
      ["e", () => w.endOfLogicalLine()],
      ["f", () => w.right()],
      ["h", yt],
      ["k", at],
      ["n", () => At()],
      ["p", () => Et()],
      ["u", Tt],
      ["w", Xt],
      ["y", er]
    ]),
    nr = jt([
      ["b", () => w.backwardWord()],
      ["f", () => w.forwardWord()],
      ["d", Zt],
      ["y", tr]
    ]);
  function sr({ meta: c, shift: A }) {
    if (q && !Q && w.offset > 0 && w.text[w.offset - 1] === "\\")
      return (
        Zus(ot),
        w.backspace().insert(
          Ee(`
`)
        )
      );
    if (c || A)
      return w.insert(
        Ee(`
`)
      );
    if (O8t())
      return w.insert(
        Ee(`
`)
      );
    if (n) (n(w.text.slice(I.length)), (tt = !0));
    return w;
  }
  function Ue() {
    pe.editedEmptyAtMs = Date.now();
  }
  function St() {
    if (pe.armedAtMs === 0) return;
    ((pe.armedAtMs = 0), nt(Ke));
  }
  function Ve() {
    return et !== void 0 && w.text === et.text.draft ? et : void 0;
  }
  function ge(c) {
    return Ve()?.rowMoved(w, c) ?? w[c]();
  }
  function Et() {
    if (U) return (Ue(), T?.(), w);
    let c = Ve();
    if (
      T &&
      (c
        ? c.rowOf(w.offset) <= c.rowOf(I.length)
        : w.getPosition().line <= w.measuredText.getPositionFromOffset(I.length).line)
    )
      return (Ue(), T(), w);
    let A = ge("up");
    if (!A.equals(w)) return A;
    if (q) {
      let v = w.upLogicalLine();
      if (!v.equals(w)) return v;
    }
    return w;
  }
  function At() {
    if (U) return (Ue(), E?.(), w);
    let c = Ve();
    if (
      E &&
      (c ? c.rowOf(w.offset) >= c.lastRow() : w.getPosition().line >= w.measuredText.lineCount - 1)
    )
      return (Ue(), E(), w);
    let A = ge("down");
    if (!A.equals(w)) return A;
    if (q) {
      let v = w.downLogicalLine();
      if (!v.equals(w)) return v;
    }
    return w;
  }
  function ir(c) {
    if (c.ctrl && (c.key === "k" || c.key === "u" || c.key === "w")) return !0;
    if (c.meta && !c.ctrl && c.key === "d") return !0;
    if (c.key === "backspace" && (c.meta || c.superKey || c.ctrl)) return !0;
    if (c.key === "delete" && (c.meta || c.superKey)) return !0;
    return !1;
  }
  function or(c) {
    return (c.ctrl || c.meta) && c.key === "y";
  }
  function ar(c, A) {
    switch (c.name) {
      case "escape":
        if (Z) return;
        return (qt(), w);
      case "left":
        if (c.superKey) return ge("startOfLine");
        if (c.ctrl || c.meta || c.fn) return w.backwardWord();
        if (h && !c.shift && w.text === I) {
          let v = Date.now(),
            X = Sgr(pe, v, c.soloKeypress),
            ce = pe.armedAtMs === 0 ? void 0 : v - pe.absorbAnchorMs;
          switch ((wgr(pe, X, v), vgr(X, v, pe), X)) {
            case "fire":
              return (nt(Ke), h(ce), w);
            case "arm":
              return (
                Ge({
                  key: Ke,
                  kind: "feedback",
                  text: x ?? "Press \u2190 again",
                  priority: "immediate",
                  timeoutMs: fIn
                }),
                w
              );
            case "absorb":
              return w;
            case "attach-arm":
              return (
                Ge({ key: Ke, kind: "feedback", text: ygr, priority: "immediate", timeoutMs: fIn }),
                w
              );
            case "attach-absorb":
              return w;
            case "reject":
              return w.left();
          }
        }
        return w.left();
      case "right":
        if (c.superKey) return ge("endOfLine");
        if (c.ctrl || c.meta || c.fn) return w.forwardWord();
        return w.right();
      case "up":
        if (c.shift || c.ctrl || c.meta) return;
        return Et();
      case "down":
        if (c.shift || c.ctrl || c.meta) return;
        return At();
      case "backspace":
        if (c.superKey) return Tt();
        if (c.meta || c.ctrl) return Qt();
        return yt();
      case "delete":
        if (c.superKey) return at();
        if (c.meta) return at();
        return w.del();
      case "home":
        if (c.ctrl) return;
        return ge("startOfLine");
      case "end":
        if (c.ctrl) return;
        return ge("endOfLine");
      case "pagedown":
        if (gt || c.ctrl) return;
        return ge("endOfLine");
      case "pageup":
        if (gt || c.ctrl) return;
        return ge("startOfLine");
      case "return":
        if (c.ctrl) return;
        return sr(c);
      case "enter":
        return w.insert(
          Ee(`
`)
        );
      case "tab":
        return;
    }
    if (q && c.ctrl && !c.shift && !c.meta && c.name === "j")
      return w.insert(
        Ee(`
`)
      );
    if (c.ctrl) return rr(c.key);
    if (c.meta) return nr(c.key);
    if (Or.has(c.name)) return;
    if (A.length === 0) return;
    if (fe !== void 0 && w.offset === I.length && gIt(A) && fe() !== vS(A))
      return ((He = !0), w.insert(A).left());
    return w.insert(A);
  }
  function lr(c) {
    ((rt = c), (He = !1));
    let A = D ? D(c.key, c) : c.key;
    if (A === "" && c.key !== "") {
      c.preventDefault();
      return;
    }
    if (!ir(c) && !or(c)) Se.dispatch({ type: "interrupt" });
    if (!(c.name === "left" && !c.ctrl && !c.meta && !c.fn && !c.superKey && !c.shift)) St();
    let v = ar(c, A);
    if (v === void 0) return;
    if ((c.preventDefault(), !w.equals(v))) {
      let X = v.text.startsWith(I);
      if (X && v.offset < I.length) v = new xi(v.measuredText, I.length);
      let ce = w.text.slice(I.length),
        Ae = X ? v.text.slice(I.length) : v.text,
        Ye = v.offset - (X ? I.length : 0);
      if (ce !== "" && Ae === "") pe.editedEmptyAtMs = Date.now();
      if (ce !== Ae)
        if (xe !== void 0 && !He) xe(() => r(Ae));
        else r(Ae);
      if ((Fe(Ye), we?.isRecording() === !0 && !He))
        we.record({
          before: { text: ce, cursor: Math.max(0, w.offset - I.length) },
          after: { text: Ae, cursor: Ye },
          key: c
        });
      if (((w = v), !X)) ((I = ""), me?.onDelete());
    }
    if (tt) {
      if (((tt = !1), ie)) w = xi.fromText(I, Y, I.length);
    }
  }
  let Ce = Ve(),
    ve = Ce?.cursorOver(w) ?? w,
    Ot = ve.getPosition();
  return {
    handleKeyDown: lr,
    renderedValue: ve.render(
      V,
      N,
      M,
      bt,
      z,
      Oe === void 0 || Oe === null
        ? void 0
        : Ce
          ? bGe(Ce.text, I.length + Oe, "after")
          : I.length + Oe,
      Yt,
      J,
      Ce?.text.spans,
      se
    ),
    offset: Be,
    setOffset: Fe,
    cursorLine: Ot.line - ve.getViewportStartLine(z),
    cursorColumn: Ot.column,
    renderedRowStartOffsets: ve.getRenderedRowStartOffsets(z),
    shown: Ce && { text: Ce.text, cursorOffset: ve.offset },
    noteKeystrokeEmptied: () => {
      pe.editedEmptyAtMs = Date.now();
    },
    disarmLeftArrowConfirm: St
  };
}
var pt = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",
  Cr = 0.7,
  $r = 1.8,
  Lr = 0.15;
function oPt() {
  let e = K((V) => Vh(V.settings.prefersReducedMotion)),
    r = qno(),
    n = Kh((V) => V.voiceState) === "recording",
    s = Kh((V) => V.voiceAudioLevels),
    o = n && !e,
    [u, d] = ja(o ? 50 : null);
  if (!o) return [u, null];
  let h = s.at(-1) ?? 0,
    x = Math.min(h * $r, 1),
    T = r.next(x, Cr),
    E = Math.max(1, Math.min(Math.round(T * (pt.length - 1)), pt.length - 1)),
    L = h < Lr,
    N = ((d / 1000) * 90) % 360,
    se = gy() ? L8t(N) : N,
    { r: q, g: Q, b: ie } = L ? { r: 128, g: 128, b: 128 } : N8t(se),
    F = `#${((q << 16) | (Q << 8) | ie).toString(16).padStart(6, "0")}`;
  return [u, { char: pt[E], hex: F }];
}
j();
import { basename as kr, isAbsolute as vr } from "path";
var _r = 50;
function Ut() {
  return ld(st());
}
function Llt({ onPaste: e, handleKeyDown: r, onImagePaste: n }) {
  let s = fn(),
    o = be(zI),
    [u, d] = y(!1),
    h = C(!0),
    x = C(!1),
    T = C(!1),
    [E, L] = y(0),
    N = ee(() => O() === "macos", []),
    se = ee(() => O() === "wsl", []);
  P(
    () => () => {
      h.current = !1;
    },
    []
  );
  let q = Bo(() => {
    r(
      new SUe({
        kind: "key",
        name: "return",
        fn: !1,
        ctrl: !1,
        meta: !1,
        shift: !1,
        option: !1,
        super: !1,
        sequence: "\r",
        raw: "\r",
        code: void 0,
        col: void 0,
        row: void 0
      })
    );
  });
  P(() => {
    if (E === 0) return;
    return s.setTimeout(() => {
      if (((x.current = !1), T.current)) ((T.current = !1), q());
    }, 0);
  }, [E, s]);
  let Q = de(() => {
      if (!n || !h.current) return;
      wme(Ut())
        .then((S) => {
          if (S && h.current) n(S.base64, { mediaType: S.mediaType, dimensions: S.dimensions });
        })
        .catch((S) => {
          if (h.current) (m("input_image_paste", "clipboard_read_failed"), l(S));
        })
        .finally(() => {
          V();
        });
    }, [n]),
    ie = zB(Q, _r);
  function F(S) {
    if (e) {
      e(S);
      return;
    }
    r(
      new SUe({
        kind: "key",
        name: void 0,
        fn: !1,
        ctrl: !1,
        meta: !1,
        shift: !1,
        option: !1,
        super: !1,
        sequence: S,
        raw: S,
        code: void 0,
        col: void 0,
        row: void 0
      })
    );
  }
  function V() {
    if (!h.current) return;
    ((x.current = !1), (T.current = !1), d(!1));
  }
  function J() {
    (d(!1), L((S) => S + 1));
  }
  function M(S, U = S.length === 0, Z = S.endsWith("[I") || S.endsWith("[O")) {
    x.current = !0;
    let z = Z ? S.replace(/\[[IO]$/, "") : S;
    if (U && (N || se) && n) {
      ie();
      return;
    }
    let ae = z
        .split(/ (?=\/|[A-Za-z]:\\)/)
        .flatMap((B) =>
          B.split(`
`)
        )
        .filter((B) => B.trim()),
      te = [],
      D = [];
    for (let B of ae)
      if (_Cs(B)) te.push(B);
      else D.push(B);
    if (n && te.length > 0) {
      let B = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(z),
        fe = Ut();
      Promise.all(
        te.map((re) =>
          bCs(re, fe, (ye) =>
            Cyi(
              ye,
              () => {
                let oe = o?.getState().toolPermissionContext;
                return oe ? [oe, Ryi(oe)] : [];
              },
              (oe, Te) => rKn(oe, Te, "person")
            )
          )
        )
      )
        .then((re) => {
          if (!h.current) return;
          let ye = re.includes("refused"),
            oe = te.every((we) => vr($yo(we) ?? "")),
            Te = re.filter((we) => we !== null && we !== "refused");
          if (Te.length > 0) {
            for (let [we, xe] of Te.entries()) {
              let Oe = kr(xe.path);
              n(xe.base64, {
                mediaType: xe.mediaType,
                filename: Oe,
                dimensions: xe.dimensions,
                sourcePath: xe.path,
                continuesGesture: we > 0
              });
            }
            if (D.length > 0)
              F(
                D.join(`
`)
              );
            V();
          } else if (B && N && !ye && oe) ie();
          else (f("input_image_drag", ye ? "read_withheld" : "read_failed"), F(z), V());
        })
        .catch((re) => {
          if (!h.current) return;
          (m("input_image_drag", "read_threw"),
            t(`Image paste read failed: ${re instanceof Error ? re.message : String(re)}`, {
              level: "error"
            }),
            F(z),
            V());
        });
      return;
    }
    (F(z), J());
  }
  function Y(S) {
    (S.preventDefault(), d(!0), M(S.text, S.rawEmpty, S.rawEndedWithFocusTail));
  }
  function me(S) {
    if (x.current && S.name === "return") {
      (S.preventDefault(), (T.current = !0));
      return;
    }
    if ((e || n) && !S.ctrl && !S.meta && S.key.length > f3 && !S.defaultPrevented) {
      (S.preventDefault(), d(!0));
      let U = new Ipe(S.key);
      M(U.text, U.rawEmpty, U.rawEndedWithFocusTail);
      return;
    }
    r(S);
  }
  return { handleKeyDown: me, handlePaste: Y, isPasting: u };
}
export {
  R_,
  mgr,
  ggr,
  ogi,
  sgi,
  Cpe,
  Gno,
  Zus,
  YEi,
  zno,
  hgr,
  Kno,
  efs,
  tfs,
  g6e,
  Dlt,
  Hlt,
  xi,
  fIn,
  pIn,
  ygr,
  _gr,
  bgr,
  Sgr,
  wgr,
  vgr,
  mIn,
  Egr,
  gIn,
  O8t,
  M8t,
  oPt,
  Llt
};

//# sourceMappingURL=chunk-65wf35er.js.map
