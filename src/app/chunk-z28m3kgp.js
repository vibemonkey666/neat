import {
  fileURLToPath as __sourceFilePath_f774335f67d01b9d,
  URL as __sourceFilePath_f774335f67d01b9d_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { L, q, aFe, Tdr, z9r, kX } from "./chunk-wrtp8qz8.js";
import { b } from "./chunk-acd8w9vv.js";
import { R, N, E, Er } from "./chunk-fs43t96t.js";
import { _, te } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { L8e, PFn, Vut } from "./chunk-1qnzd4ya.js";
import { $s } from "./chunk-vw9e882a.js";
import { Ww } from "./chunk-dc0nzty2.js";
import { Dn } from "./chunk-qywdxehb.js";
import { __ } from "./chunk-4nzy53ma.js";
import { Lr } from "./chunk-5z6t3gwt.js";
import { Jv } from "./chunk-wany0nxw.js";
import { At } from "./chunk-at88wjsn.js";
import { ws } from "./chunk-v4kbwz0z.js";
import { EU } from "./chunk-1fnv3zry.js";
import { BK } from "./chunk-6h7ejyet.js";
import { Ygo, $$n } from "./chunk-cyhgb7ss.js";
import { yho } from "./chunk-54jzcsty.js";
import { t2s } from "./chunk-ybr49gcx.js";
import { yx, R_t, x_t } from "./chunk-1ky5r8qb.js";
import { o, v$e } from "./chunk-0bqrj5ah.js";
import { open as k, unlink as S } from "fs/promises";
import { dirname as A, join as h } from "path";
var sRt = 64,
  P = 262144,
  v = new Set(["ELOOP", "ENXIO"]);
function iRt(e) {
  return e.normalize("NFC");
}
function L5t() {
  return (
    kX() === null && __() && EU(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)
  );
}
function N5t(e) {
  let t = aFe();
  return (
    t.size > 0 &&
    e.some(({ fileUuid: r, name: a }) => {
      let n = t.get(iRt(a));
      return n !== void 0 && n.fileUuid !== r.toLowerCase();
    })
  );
}
function KQr(e) {
  return e.length > 0 && L5t() && (Tdr() !== "done" || N5t(e));
}
var g = ".placed-by-name.json";
function O() {
  let e = yx();
  return [
    e,
    ...(kX() === null
      ? x_t()
          .map((t) => h(t, q()))
          .filter((t) => t !== e)
      : [])
  ].map((t) => h(t, g));
}
async function C(e) {
  if (A(e) === R_t()) {
    await S(h(e, g));
    return;
  }
  let t = await L8e(e, 0);
  if (typeof t !== "string")
    try {
      if ((await PFn(t)) === !0) await S(h(t.at, g));
    } finally {
      await t.release();
    }
}
async function mCn() {
  if (Tdr() !== "done") {
    Y("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: b("table_unread")
    });
    return;
  }
  try {
    let e = await Vut(yx());
    try {
      await Dn(h(e.at, g), _([...aFe()]), 384);
    } finally {
      await e.release();
    }
    await Promise.allSettled(
      O()
        .slice(1)
        .map((t) => C(A(t)))
    );
  } catch (e) {
    Y("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: Er(e) ?? b("unknown")
    });
  }
}
function F(e) {
  if (!Array.isArray(e) || e.length !== 2) return !1;
  let [t, r] = e;
  if (typeof t !== "string" || typeof r !== "object" || r === null) return !1;
  let { path: a, fileUuid: n, dev: s, ino: c, mtimeMs: f, size: p, sha256: m, ambiguous: d } = r;
  return (
    typeof a === "string" &&
    typeof n === "string" &&
    [s, c, f, p].every((u) => typeof u === "number" && Number.isFinite(u)) &&
    typeof m === "string" &&
    (d === void 0 || d === !0)
  );
}
function gCn() {
  let e = Tdr();
  if (e !== void 0) return e === "done" ? Promise.resolve() : e;
  let t = M().then((r) => {
    if ((z9r(r.state === "table_unread" ? void 0 : "done"), r.state !== "table_absent"))
      Y("info", "turn_handoff_files_by_name_table", r);
  });
  return (z9r(t), t);
}
async function M() {
  let [e, ...t] = O(),
    r = await T(e);
  if (r.state !== "table_absent") return r;
  for (let a of t) {
    let n = await T(a);
    if (n.state === "table_read") return n;
  }
  return r;
}
async function T(e) {
  let t;
  try {
    let n = await k(e, $s | ws);
    try {
      let s = await n.stat(),
        c = s.isFile() && s.size <= P ? await Ww(n, P, s.size) : void 0;
      t = c === void 0 || c.overLimit ? void 0 : te(c.bytes.toString("utf8"));
    } finally {
      await n.close();
    }
  } catch (n) {
    let s = E(n);
    return {
      state:
        s === "ENOENT"
          ? "table_absent"
          : s === void 0 || v.has(s)
            ? "table_damaged"
            : "table_unread",
      rows: 0
    };
  }
  if (!Array.isArray(t) || t.length > sRt || !t.every(F))
    return { state: "table_damaged", rows: 0 };
  let r = aFe(),
    a = [...r];
  r.clear();
  for (let [n, s] of t) {
    let { path: c, fileUuid: f, dev: p, ino: m, mtimeMs: d, size: u, sha256: y, ambiguous: w } = s;
    r.set(n, {
      path: c,
      fileUuid: f.toLowerCase(),
      dev: p,
      ino: m,
      mtimeMs: d,
      size: u,
      sha256: y,
      ...(w && { ambiguous: w }),
      fromEarlierProcess: !0
    });
  }
  for (let [n, s] of a) (r.delete(n), r.set(n, s));
  for (let n of [...r.keys()].slice(0, Math.max(0, r.size - sRt))) r.delete(n);
  return { state: "table_read", rows: t.length };
}
var D = {
  supported: !0,
  refusedInputFields: $$n,
  decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"]
};
function I() {
  return import.meta.require(
    __sourceFilePath_f774335f67d01b9d(
      new __sourceFilePath_f774335f67d01b9d_URL("./chunk-3ykk7zcv.js", import.meta.url)
    )
  ).PowerShellTool;
}
function VQr(e, t) {
  let r = I(),
    a = Ygo({
      edition: t?.powershell?.edition ?? null,
      buildTools: [],
      onWindows: !0,
      backgroundRuns: !1
    }),
    n = x(r.inputSchema, ["run_in_background"]).extend({
      [Lr]: o()
        .optional()
        .describe(
          "Optional. Names the attached computer this runs on \u2014 the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran."
        )
    }),
    s = Object.defineProperties(
      {},
      {
        ...Object.getOwnPropertyDescriptors(r),
        inputSchema: { value: n, enumerable: !0 },
        prompt: { value: async () => a, enumerable: !0 },
        isEnabled: { value: () => !0, enumerable: !0 },
        remoteExecution: { value: D, enumerable: !0 },
        suppressesAllPermissionUpdates: { value: () => !0, enumerable: !0 },
        call: {
          value: async () => {
            throw new R(
              `PowerShell runs only on ${e}; the session runs it there and it cannot run here.`,
              "session-channel PowerShell tool called without being routed to its machine"
            );
          },
          enumerable: !0
        }
      }
    );
  return t2s(s);
}
function sas(e, t) {
  if (Jv()) return 0;
  let r = L(t.filter((n) => n.tool === At).map((n) => n.host));
  if (r.length === 0) return 0;
  let a;
  try {
    a = r.map((n) => ({ tool: VQr(n, void 0), machine: n }));
  } catch (n) {
    return (l(N(n)), 0);
  }
  return (e.presentUntilAnnounced(a, BK), a.length);
}
function x(e, t) {
  if (!(e instanceof v$e)) throw TypeError("PowerShellTool no longer declares an object schema");
  let r = t.filter((n) => n in e.shape),
    a = Object.fromEntries(r.map((n) => [n, !0]));
  return r.length === 0 ? e : e.omit(a);
}
var H = 8,
  qQr = 256;
function ias(e = () => performance.now()) {
  let t = [],
    r = [],
    a = 0,
    n = 0,
    s = !1,
    c = !1,
    f = !1,
    p = De();
  return {
    noteStagedRow(m) {
      if (m.mount_path !== yho) return !1;
      let d = m.content_sha256,
        u = typeof d === "string" && d.length > 0 && d.length <= qQr ? d : null;
      if (u === null) {
        if (!f) ((f = !0), Y("warn", "home_seed_stage_without_usable_etag", {}));
        return !1;
      }
      n++;
      let y = { etag: u, beforeFirstCommand: !s && !c, ordinal: n };
      ((t = [...t, y].slice(-H)),
        (r = [...r, { etag: u, ordinal: n, heardAtMs: e(), turnsAtHoldBefore: a }].slice(-H)));
      try {
        p.emit(y);
      } catch {
        Y("error", "home_seed_announcement_listener_threw", {});
      }
      return !0;
    },
    noteStagedRowRead(m) {
      if (m.mount_path !== yho) return;
      let d = r.find((u) => u.etag === m.content_sha256);
      if (d === void 0) return { onRecord: !1 };
      return (
        (r = r.filter((u) => u !== d)),
        {
          onRecord: !0,
          ordinal: d.ordinal,
          behindMs: Math.round(e() - d.heardAtMs),
          turnsAtHoldBefore: d.turnsAtHoldBefore,
          turnAtHoldMeanwhile: a > d.turnsAtHoldBefore
        }
      );
    },
    markTurnAtHold() {
      a++;
    },
    markUserFrameDelivered() {
      c = !0;
    },
    markFirstCommandDequeued() {
      s = !0;
    },
    firstCommandDequeued() {
      return s;
    },
    announcements() {
      return t;
    },
    announcementCount() {
      return n;
    },
    announcementForEtag(m) {
      return t.findLast((d) => d.etag === m);
    },
    announced: { subscribe: p.subscribe }
  };
}
export { sRt, iRt, L5t, N5t, KQr, mCn, gCn, VQr, sas, qQr, ias };

//# sourceMappingURL=chunk-z28m3kgp.js.map
