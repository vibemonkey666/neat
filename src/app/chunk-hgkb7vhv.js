// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { I, dc } from "./chunk-a16y5hcz.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { J9 } from "./chunk-adv24f35.js";
import { JE, que } from "./chunk-bh50mq9d.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { o, Bd, u } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
import { join as l } from "path";
function iJt() {
  return l(Le(), "daemon.status.json");
}
function aJt() {
  return We.state("daemon-status");
}
async function mdo(s, n) {
  let r = {
    supervisorPid: process.pid,
    supervisorProcStart: que(),
    writtenAt: Date.now(),
    workers: s
  };
  if (z() && n !== void 0)
    try {
      let e = await n.write(aJt(), _(r, null, 2), { mode: 438 & ~process.umask() });
      if (!e.ok) t(`writeDaemonStatus: ${e.error.code}`);
      return e.ok;
    } catch (e) {
      return (t(`writeDaemonStatus: ${d(e)}`), !1);
    }
  try {
    return (await hn().atomicWrite(iJt(), _(r, null, 2)), !0);
  } catch (e) {
    return (t(`writeDaemonStatus: ${d(e)}`), !1);
  }
}
async function gdo(s) {
  if (z() && s !== void 0) {
    try {
      let n = await s.delete(aJt());
      if (!n.ok) t(`removeDaemonStatus: ${n.error.code}`);
    } catch (n) {
      t(`removeDaemonStatus: ${d(n)}`);
    }
    return;
  }
  try {
    await hn().delete(iJt());
  } catch {}
}
async function bbr(s) {
  let n;
  if (z() && s !== void 0) {
    let i;
    try {
      i = await s.readText([aJt()]);
    } catch {
      return null;
    }
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c.found) return null;
    n = c.value;
  } else
    try {
      n = await hn().read(iJt());
    } catch {
      return null;
    }
  let r = ot(n, !1);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null)
    return null;
  try {
    process.kill(e.supervisorPid, 0);
  } catch {
    return null;
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!(await JE(e.supervisorPid, a))) return null;
  return r;
}
var m = 4096,
  p = 200,
  Sbr = 64,
  f = 32;
function S(s) {
  let n = [],
    r = u({ servedFolder: u({ dir: o().min(1).max(m), sessions: Bd().positive().max(Sbr) }) });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) n.push(a.data.servedFolder);
  }
  return n;
}
async function hdo(s, n) {
  try {
    let r = await bbr(n);
    return r?.supervisorPid === s ? S(r) : [];
  } catch (r) {
    t(`readServedFolders: ${d(r)}`);
  }
  return [];
}
function ydo(s) {
  let r = s
      .slice(0, f)
      .map(
        ({ dir: a, sessions: i }) =>
          `serving tools: ${i} ${I(i, "cloud session")} in ${J9(dc(a), p)}`
      ),
    e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${I(e, "folder")}`) : r;
}
export { iJt, aJt, mdo, gdo, bbr, Sbr, hdo, ydo };

//# sourceMappingURL=chunk-hgkb7vhv.js.map
