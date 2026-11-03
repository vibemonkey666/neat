// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Pe } from "./chunk-4hww8411.js";
import { Rp, ye, xp, TC } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { he } from "./chunk-95k4nfdh.js";
import { gse } from "./chunk-5rw2zfa0.js";
import { snt, vz, IV, D_e, Dh, OV, qvt, Xvt, S0e, st, jS, Xe, $t } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { tr, ll } from "./chunk-xe386mry.js";
import { er } from "./chunk-1e5yp9hx.js";
import { Un } from "./chunk-7c3thgax.js";
import { aT } from "./chunk-tcvjb2c0.js";
import { js } from "./chunk-96sx3c3k.js";
import { Gi } from "./chunk-d5zj5299.js";
import { Mon, UJ, rv, AS, sb, J0t, Q0t } from "./chunk-j0tbz6ra.js";
import { DL } from "./chunk-yyq6mj0n.js";
import { DBe } from "./chunk-2s471xa8.js";
import { t$n } from "./chunk-p6e9mq3q.js";
import { u8e } from "./chunk-62j8frac.js";
import { Qn } from "./chunk-n35x7axc.js";
import { xA, af, YW } from "./chunk-5jf37pks.js";
function Lve(o = !0, e = !1) {
  if (!o) return gse;
  let n = u8e(js("theme", "dark").value);
  if (e) return he.dim(Qn("promptBorder", n)(gse));
  return Qn("fastMode", n)(gse);
}
var fgo = 8000,
  MBe = "Fast mode unchanged (cancelled)";
function Nve(o) {
  if (Dh(Mon({ ...o, toolPermissionContext: { mode: "default" } }))) return;
  let e = D_e();
  return $t(e) === $t(jS()) ? null : e;
}
async function MEr(o, e, n) {
  let f = Nve(e());
  if (f === void 0 || ll() || !UJ(o)) return { vetted: B7t, messages: [] };
  let i = await xA(o, e, f, "command", { signal: n });
  if (i.decision === "proceed") return { vetted: { target: f }, messages: i.messages };
  return {
    refusal: YW(
      f,
      i.decision === "ask"
        ? `${i.reason ?? "confirmation required"} (use /model to switch, then /fast)`
        : i.reason,
      i.messages
    )
  };
}
var B7t = { unvetted: !0 };
function RMt(o, e) {
  let n = e ? "enabled" : "disabled";
  switch (o.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${n} there`;
    case "stale":
      return `Fast mode was not ${n}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${n} on the workspace: ${o.reason}`;
  }
}
function j7t(o, e, n, f = !0, i, s = B7t) {
  if ((OV(), e)) qvt();
  let k = () => {
      if (f && !ye()) return;
      TC({ ...(xp() ?? {}), fastMode: e });
    },
    M = () => {
      if ((DBe({ fastMode: e }, n), e)) {
        let r = !1,
          m = null;
        if (
          (n((u) => {
            let l = Nve(u);
            if (l === void 0) return u;
            if (!("unvetted" in s) && s.target !== l) return u;
            return (
              rv(o, u, l, "command"),
              (r = !0),
              (m = l),
              { ...u, mainLoopModel: l, mainLoopModelForSession: null }
            );
          }),
          r && snt())
        )
          Rp(m);
      }
      if (!f)
        if (!aT() && snt()) Gi.notifyChange("flagSettings");
        else er();
    };
  if (ll()) {
    k();
    let r = tr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: { fastMode: e ? !0 : null, ...(e && { model: D_e() }) }
    });
    if (!r) return (M(), Promise.resolve(void 0));
    return r.then(
      () => {
        M();
        return;
      },
      (m) => (
        t(`fast mode: workspace did not accept apply_flag_settings: ${d(m)}`, { level: "error" }),
        m instanceof DL ? { kind: "timeout" } : { kind: "refused", reason: af(d(m)) }
      )
    );
  }
  if (e && !("unvetted" in s)) {
    let r = !1;
    if (
      (n((m) => {
        let u = Nve(m);
        return ((r = u !== void 0 && u !== s.target), m);
      }),
      r)
    )
      return Promise.resolve({ kind: "stale" });
  }
  if ((k(), t$n(e, i), f)) Un("userSettings", { fastMode: e ? !0 : void 0 }, void 0, i);
  return (M(), Promise.resolve(void 0));
}
async function W7t(o, e, n, f, i, s = !0, k, M, r, m, u) {
  let l = () =>
      AS(o, async () => {
        if (M) await Pe(M(), fgo);
        if (r?.aborted) return { kind: "refused", refusal: MBe };
        let F = vz(void 0, { sessionOptIn: !s && !aT() && snt(), sessionOnly: !s || ye() });
        if (F && e) return { kind: "refused", refusal: `Fast mode unavailable: ${F}` };
        let w = B7t,
          h = [];
        if (e) {
          let S = await MEr(o, n, r);
          if (r?.aborted) return { kind: "refused", refusal: MBe };
          if (S.refusal !== void 0) return { kind: "refused", refusal: S.refusal };
          ((w = S.vetted), (h = S.messages));
        }
        let P = e && Nve(n()) !== void 0;
        return (
          m?.(),
          { kind: "applied", remote: await j7t(o, e, f, s, k, w), willPromote: P, hookMessages: h }
        );
      }),
    p = {},
    y =
      s && u !== void 0 && !ll()
        ? await u(e, async () => {
            if (((p.outcome = await l()), p.outcome.kind === "refused")) return p.outcome.refusal;
            return p.outcome.remote === void 0 ? void 0 : RMt(p.outcome.remote, e);
          })
        : void 0,
    g = p.outcome ?? (y === void 0 ? await l() : void 0);
  if (g === void 0) return r?.aborted ? MBe : (y ?? "Fast mode was not changed");
  if (g.kind === "refused") return g.refusal;
  if (g.remote !== void 0) return RMt(g.remote, e);
  if ((a("tengu_fast_mode_toggled", { enabled: e, source: c(i), remote: ll() }), e)) {
    let F = Lve(!0),
      w = g.willPromote ? `${Q0t}${sb(IV())}` : "",
      h = st(),
      P = Xe(Dh(h) ? h : $t(D_e())),
      _ = S0e(Xvt(P)),
      S = s ? "" : " (this session only)",
      O =
        g.hookMessages.length > 0
          ? `
${g.hookMessages.map(af).join(`
`)}`
          : "";
    return `${F} ${J0t}${w} \xB7 ${_}${S}${O}`;
  } else return `Fast mode OFF${s ? "" : " (this session only)"}`;
}
export { Lve, fgo, MBe, Nve, MEr, B7t, RMt, j7t, W7t };

//# sourceMappingURL=chunk-wcf33wwb.js.map
