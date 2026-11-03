// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wX, yTn } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { Qe, d } from "./chunk-fs43t96t.js";
import { Yn, A_, ml, Sg } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { l } from "./chunk-ewvf3tep.js";
import { xxe, Db, t } from "./chunk-4kxznmzw.js";
import { Mz, k, Re, ue } from "./chunk-ajtyjx88.js";
import { a2, Z9 } from "./chunk-dc0nzty2.js";
import { Ri, m_ } from "./chunk-wr0p4ndg.js";
import { pt, Sa } from "./chunk-7c3thgax.js";
import { he } from "./chunk-95k4nfdh.js";
import { uM } from "./chunk-vchq4g74.js";
import { Bqn, AFt, CFt, Zl } from "./chunk-3xhvyvev.js";
import { uze, MS } from "./chunk-7yq9w6fa.js";
import { CE } from "./chunk-b9vagsrs.js";
import { iu } from "./chunk-9xy6e090.js";
import { xr } from "./chunk-61vn6n52.js";
import { mve, s4 } from "./chunk-6z861t7d.js";
import { P, j } from "./chunk-bq35vvkw.js";
j();
function pxn() {
  let e = xr(),
    n = iu();
  P(() => {
    return;
  }, [e, n]);
}
var Tds = { CLAUDE_CODE_TUI_TRIAL: "fullscreen" };
function v(e, n) {
  Re(
    (r) => ((r.fullscreenUpsellSeenCount ?? 0) >= e ? r : { ...r, fullscreenUpsellSeenCount: e }),
    n
  );
}
function Nfr(e) {
  v(CFt, e);
}
function GZr(e) {
  let n = Bqn();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min((ue().fullscreenUpsellSeenCount ?? 0) + 1, CFt);
  return ((n.upsellImpression = r), v(r, e), r);
}
async function Ads(e) {
  let n = Bqn();
  if (n.persisted || AFt() !== "fullscreen") return !1;
  if (pt().tui !== void 0)
    return (
      t("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"),
      !1
    );
  if (!Zl())
    return (
      t(
        "fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"
      ),
      !1
    );
  let r = !1,
    { error: o } = await Sa(
      "userSettings",
      (i) => ((r = i?.tui !== void 0), r ? null : { tui: "fullscreen" }),
      void 0,
      e
    );
  if (o) return (l(o), f("tui_fullscreen_upsell_trial", "settings_write_failed"), !1);
  if (r)
    return (
      t(
        "fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"
      ),
      !1
    );
  return (
    Nfr(e),
    (n.persisted = !0),
    g("tui_fullscreen_upsell_trial"),
    a("tengu_fullscreen_upsell_trial_persisted", {
      session_age_ms: Math.round(process.uptime() * 1000)
    }),
    t("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"),
    !0
  );
}
async function Cds(e) {
  let n = uM();
  if (!n?.teamName || !n?.agentName) {
    t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  let { teamName: r, agentId: o, agentName: i } = n,
    u = await MS(r, e);
  if (!u) {
    l(
      Qe(
        Error(`[computeInitialTeamContext] Could not read team file for ${r}`),
        "[computeInitialTeamContext] Could not read team file"
      )
    );
    return;
  }
  let s = uze(r),
    m = !o;
  return (
    t(
      `[Reconnection] Computed initial team context for ${m ? "leader" : `teammate ${i}`} in team ${r}`
    ),
    {
      teamName: r,
      teamFilePath: s,
      leadAgentId: u.leadAgentId,
      selfAgentId: o,
      selfAgentName: i,
      isLeader: m,
      teammates: {}
    }
  );
}
async function Rds(e, n, r, o) {
  let i = await MS(n, o);
  if (!i) {
    t(
      `[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) \u2014 team may have been disbanded`,
      { level: "error" }
    );
    return;
  }
  let u = i.members.find((b) => b.name === r);
  if (!u) t(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let s = u?.agentId,
    m = uze(n);
  (e((b) => ({
    ...b,
    teamContext: {
      teamName: n,
      teamFilePath: m,
      leadAgentId: i.leadAgentId,
      selfAgentId: s,
      selfAgentName: r,
      isLeader: !1,
      teammates: {}
    }
  })),
    t(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`));
}
import { stat as w } from "fs/promises";
import { homedir as E } from "os";
import { join as y, sep as F } from "path";
var I = 604800000,
  KZr = 1000;
function xds(e) {
  let n = [`This session was opened by an external deep link in ${R(e.cwd)}`];
  if (e.repo) {
    let r = e.lastFetch ? m_(e.lastFetch) : "never",
      o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > I;
    n.push(
      `Resolved ${e.repo} from local clones \xB7 last fetched ${r}${o ? " \u2014 CLAUDE.md may be stale" : ""}`
    );
  }
  if (e.prefillLength)
    n.push(
      e.prefillLength > KZr
        ? `The prompt below (${Ri(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.`
        : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter."
    );
  return n.join(`
`);
}
async function Pds(e) {
  let n = await Z9(e);
  if (!n) return;
  let r = await a2(n),
    [o, i] = await Promise.all([
      A(y(n, "FETCH_HEAD")),
      r ? A(y(r, "FETCH_HEAD")) : Promise.resolve(void 0)
    ]);
  if (o && i) return o > i ? o : i;
  return o ?? i;
}
async function A(e) {
  try {
    let { mtime: n } = await w(e);
    return n;
  } catch {
    return;
  }
}
function R(e) {
  let n = E();
  if (e === n) return "~";
  if (e.startsWith(n + F)) return "~" + e.slice(n.length);
  return e;
}
function N6t(e, { replacesProcess: n }) {
  return Mz() === void 0 && CE() && !(n && yTn()) && k("tengu_resume_open_live_bg", !0)
    ? e.jobId
    : void 0;
}
async function $fr(e) {
  let n = await L(e);
  return (f("resume_live_background_open", n.reason, { entrypoint: c(e.entrypoint) }), n);
}
async function L({ holder: e, entrypoint: n, prompt: r, storageV5: o }) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return { reason: "not_openable" };
  let i = N6t(e, { replacesProcess: !0 });
  if (i === void 0) return { reason: "not_openable" };
  try {
    await mve();
  } catch (s) {
    return { reason: "open_failed", detail: d(s), promptSent: !1 };
  }
  let u = typeof r === "string" && r.trim() !== "";
  if (u) {
    let s = r.trimStart();
    if (s.startsWith("!") || s.startsWith("/"))
      return {
        reason: "prompt_undelivered",
        detail: `a prompt starting with ${s.startsWith("!") ? "!" : "/"} would run as a command there`,
        delivery: "failed"
      };
    let [{ replyToJob: m }, { getJobDir: b, readJobState: h }] = await Promise.all([
      import("./chunk-8krsprmj.js"),
      import("./chunk-bgfm4egz.js")
    ]);
    if ((await h(b(i), o))?.block !== void 0)
      return {
        reason: "prompt_undelivered",
        detail: "it is waiting on your answer to a question",
        delivery: "failed"
      };
    process.stdout.write(
      he.dim(`Sending your prompt to the background session (${i})\u2026
`)
    );
    let p = await m(i, r, void 0, void 0, void 0, o, { nextTurn: !0 });
    if (p) {
      let S = p.code === "ENOCONN" || p.code === "ETIMEOUT";
      return {
        reason: "prompt_undelivered",
        detail: S
          ? "its supervisor did not answer"
          : p.code === "ENOJOB"
            ? "it is no longer running"
            : p.err,
        delivery: p.queued === !0 ? "queued" : S ? "unconfirmed" : "failed"
      };
    }
  }
  try {
    return await zZr(i, n, o, { promptSent: u });
  } catch (s) {
    return { reason: "open_failed", detail: d(s), promptSent: u };
  }
}
async function zZr(e, n, r, { promptSent: o = !1 } = {}) {
  return (
    g("resume_live_background_open", { entrypoint: c(n), prompt_sent: o }),
    s4(
      {
        args: ["attach", e],
        preSpawn: () =>
          process.stdout.write(
            he.dim(
              o
                ? `Sent your prompt to the background session (${e}); opening it\u2026
`
                : `Opening the background session (${e})\u2026
`
            )
          )
      },
      r
    )
  );
}
import { isAbsolute as D, resolve as B, win32 as _ } from "path";
async function mxn(e, n, r = Db) {
  if (
    !(D(e) || _.isAbsolute(e)) ||
    Yn(e) ||
    A_(e) ||
    A_(_.normalize(e)) ||
    Sg(e) ||
    Sg(B(e)) ||
    ml(e)
  )
    return (
      t(`[${n}] session reported a network-path cwd \u2014 not adopting`, { level: "warn" }),
      !1
    );
  if (await xxe(e, wX(), r))
    return (
      t(
        `[${n}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`,
        { level: "warn" }
      ),
      !1
    );
  return !0;
}
export { pxn, Tds, Nfr, GZr, Ads, N6t, $fr, zZr, Cds, Rds, mxn, KZr, xds, Pds };

//# sourceMappingURL=chunk-z2rjm3ha.js.map
