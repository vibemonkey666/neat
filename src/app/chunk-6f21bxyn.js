// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-qmkm2x59.js";
import "./chunk-gg53p5cf.js";
import "./chunk-acd8w9vv.js";
import { E } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-a16y5hcz.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-928ws1pg.js";
import { Fot } from "./chunk-d54avynm.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import { oes, O } from "./chunk-19xvg81r.js";
import { ot } from "./chunk-8r2m7vfp.js";
import "./chunk-njpzwa1b.js";
import { readdir as u, readFile as d, stat as p } from "fs/promises";
import { homedir as m } from "os";
import { join as l } from "path";
async function g() {
  let o = O();
  if (!oes.includes(o))
    throw Error(
      `Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`
    );
  if (o === "macos")
    return l(m(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let a = i.USERPROFILE ? i.USERPROFILE.replace(/\\/g, "/") : null;
  if (a) {
    let e = `/mnt/c${a.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return (await p(e), e);
    } catch {}
  }
  try {
    try {
      let e = await u("/mnt/c/Users", { withFileTypes: !0 });
      for (let r of e) {
        if (
          r.name === "Public" ||
          r.name === "Default" ||
          r.name === "Default User" ||
          r.name === "All Users"
        )
          continue;
        let s = l(
          "/mnt/c/Users",
          r.name,
          "AppData",
          "Roaming",
          "Claude",
          "claude_desktop_config.json"
        );
        try {
          return (await p(s), s);
        } catch {}
      }
    } catch {}
  } catch (n) {
    t(`Failed scanning /mnt/c/Users for Claude Desktop config: ${n}`, { level: "error" });
  }
  throw Error(
    "Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows."
  );
}
async function R() {
  if (!oes.includes(O()))
    throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(),
      a;
    try {
      a = await d(o, { encoding: "utf8" });
    } catch (s) {
      if (E(s) === "ENOENT") return {};
      throw s;
    }
    let n = ot(a);
    if (!n || typeof n !== "object") return {};
    let e = n.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = Fot().safeParse(c);
      if (f.success) r[s] = f.data;
    }
    return r;
  } catch (o) {
    return (t(`Failed to read Claude Desktop MCP servers: ${o}`, { level: "error" }), {});
  }
}
export { R as readClaudeDesktopMcpServers };

//# sourceMappingURL=chunk-6f21bxyn.js.map
