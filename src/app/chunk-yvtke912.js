// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Nt } from "./chunk-4hww8411.js";
import { Le } from "./chunk-jazcqqqr.js";
import { J } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { fe } from "./chunk-xe386mry.js";
import { hr } from "./chunk-dc0nzty2.js";
import { DG } from "./chunk-gwryn340.js";
import { bHn, SHn } from "./chunk-08zm30dt.js";
import { Q3 } from "./chunk-yyq6mj0n.js";
import { f1t } from "./chunk-1ww4jg8j.js";
import { JC, Abt } from "./chunk-d5zj5299.js";
import { Um } from "./chunk-wany0nxw.js";
import { Ce } from "./chunk-a2y39866.js";
function Fbr() {
  let e = [Le()];
  try {
    e.push(Um());
  } catch {}
  return (a) => e.some((n) => Q3(a, n, !0));
}
var h = Ce(f1t(), 1);
import { readFile as d, stat as R } from "fs/promises";
function hHn(e, a) {
  return { readFileState: a, bashTools: bHn(e), bashHosts: SHn(e) };
}
function yHn(e, a) {
  let n = a;
  if (
    !n?.signals ||
    (!n.signals.cli?.length &&
      !n.signals.filesRead?.length &&
      !n.signals.manifestDeps?.length &&
      !n.signals.hosts?.length &&
      !n.signals.cwd?.length)
  )
    return null;
  let c;
  try {
    if (n.signals.manifestDeps?.length)
      c = n.signals.manifestDeps.map((l) => ({
        file: new RegExp(l.file, "i"),
        pattern: new RegExp(l.pattern)
      }));
  } catch (l) {
    return (
      t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${l}`, {
        level: "warn"
      }),
      null
    );
  }
  let o = n.signals.hosts?.map((l) => l.toLowerCase());
  return {
    cli: n.signals.cli,
    hosts: o,
    filesRead: n.signals.filesRead,
    manifestDep: c,
    cwd: n.signals.cwd
  };
}
async function _Hn(e, a) {
  let { bashTools: n, bashHosts: c } = a ?? {};
  if (e.cli && n?.size) {
    let i = e.cli.find((s) => n.has(s));
    if (i) return { signal: "cli", command: i };
  }
  if (e.hosts?.length && c?.size) {
    let i = e.hosts.find((s) => c.has(s));
    if (i) return { signal: "hosts", host: i };
  }
  if (e.cwd?.length) {
    let i = fe().replaceAll("\\", "/"),
      s = hr(fe())?.replaceAll("\\", "/"),
      f = [i];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some((r) => h.default.isMatch(r, [g, `${g}/**`], { nocase: !0, dot: !0 })))
        return { signal: "cwd" };
    }
  }
  let o = a?.readFileState,
    l = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = Fbr();
    l = Abt(o).filter((s) => !i(s));
  }
  if (e.filesRead?.length && l.length) {
    let i = l.find((s) =>
      h.default.isMatch(s.replaceAll("\\", "/"), e.filesRead, { nocase: !0, dot: !0 })
    );
    if (i) return { signal: "filesRead", file: i };
  }
  if (e.manifestDep && o && l.length > 0) {
    let i = new Map(o.entries()),
      s = (async () => {
        for (let { file: p, pattern: g } of e.manifestDep)
          for (let r of l) {
            if (!p.test(r)) continue;
            try {
              let m = i.get(r),
                u = m && JC(m) ? m.content : void 0;
              if (!u) {
                if (J()) {
                  DG("plugin_relevance");
                  continue;
                }
                if ((await R(r)).size > 524288) continue;
                u = await d(r, "utf8");
              }
              if (g.test(u)) return r;
            } catch {}
          }
        return null;
      })(),
      f = await Nt(s, 50, "manifestDep scan").catch(() => null);
    if (f) return { signal: "manifestDep", file: f };
  }
  return null;
}
export { Fbr, hHn, yHn, _Hn };

//# sourceMappingURL=chunk-yvtke912.js.map
