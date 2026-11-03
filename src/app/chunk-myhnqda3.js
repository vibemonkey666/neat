// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _r } from "./chunk-pgnjjhxv.js";
import { Y0, ySe } from "./chunk-t0wrcf3t.js";
import { WG } from "./chunk-zjm5ncxc.js";
import { Pqn, Can } from "./chunk-zg0g4fdz.js";
import { Mp, Mk } from "./chunk-arcvz535.js";
import { la } from "./chunk-8fp2d2p3.js";
import { z } from "./chunk-p197ae0z.js";
import { readdir as P, stat as w } from "fs/promises";
import { basename as ee, join as g } from "path";
function S(s) {
  let e = WG(s);
  return e !== void 0 && _r(e) ? e : void 0;
}
async function Pso(s, e, o, d, a, u) {
  let f = z() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && f !== void 0) {
    let i = new Map();
    try {
      await la(
        (r) =>
          d.listEntries(
            { namespace: "transcript", projectKey: f },
            {
              skipScopeStats: !0,
              ...(e ? {} : { skipKeyStats: !0 }),
              ...(r !== void 0 && { cursor: r })
            }
          ),
        (r) => {
          for (let t of r) {
            if (t.kind !== "key" || t.key.namespace !== "transcript") continue;
            let l = Y0(t.key.sessionId);
            if (!l) continue;
            if (e && t.mtimeMs === void 0) continue;
            let m = e ? Math.trunc(t.mtimeMs ?? 0) : 0,
              p = i.get(l);
            if (p !== void 0) {
              if (m > p.mtime) p.mtime = m;
              continue;
            }
            i.set(l, {
              sessionId: l,
              filePath: g(s, `${t.key.sessionId}.jsonl`),
              mtime: m,
              projectPath: o,
              ownWorktrees: u
            });
          }
        },
        a !== void 0 ? { budget: a } : void 0
      );
    } catch {}
    return [...i.values()];
  }
  let n;
  try {
    n = await P(s);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      n.map(async (i) => {
        if (!i.endsWith(".jsonl")) return null;
        let r = Y0(i.slice(0, -6));
        if (!r) return null;
        let t = g(s, i);
        if (!e) return { sessionId: r, filePath: t, mtime: 0, projectPath: o, ownWorktrees: u };
        try {
          let l = await w(t);
          return {
            sessionId: r,
            filePath: t,
            mtime: l.mtime.getTime(),
            projectPath: o,
            ownWorktrees: u
          };
        } catch {
          return null;
        }
      })
    )
  ).filter((i) => i !== null);
}
var h = 32;
async function Lgs(s, e, o) {
  let d = await Pso(s, !1, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (
      await Promise.all(
        d.slice(a, a + h).map(async (n) => {
          let c = await ySe(n.filePath, Mk(Mp(n.filePath, o)));
          return c !== null &&
            Pqn(c.tail) === e &&
            (await Can(n.filePath, c.head, c.tail, c.size, o))
            ? n.filePath
            : void 0;
        })
      )
    ).find((n) => n !== void 0);
    if (f !== void 0) return f;
  }
  return;
}
export { Pso, Lgs };

//# sourceMappingURL=chunk-myhnqda3.js.map
