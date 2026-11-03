// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { ase, M0 } from "./chunk-7c3thgax.js";
import { rC, kc, il, B_, Q0e, Ai, MKt, jEt, Qnt } from "./chunk-ajtyjx88.js";
import { Adt } from "./chunk-qmxzzq9n.js";
import { cx, XQe, IS, DNr } from "./chunk-yx1anek5.js";
import { LDe, pdn, I_i, M_i, YQe, xNr } from "./chunk-0a97myps.js";
import { F1 } from "./chunk-eq25erm1.js";
import { o, oe, u, me } from "./chunk-0bqrj5ah.js";
import { $r } from "./chunk-a2y39866.js";
var Yso = {};
$r(Yso, {
  IS_WORKTREE_LAUNCH: () => bMn,
  SAVE_FAILURE: () => RMn,
  SIGN_IN_MARGIN_MS: () => vMn,
  default: () => Yso,
  earlyFetchVetoed: () => wMn,
  fetchRefreshesSignIn: () => kMn,
  flagClientQuieted: () => TMn,
  isSavedSwitchOf: () => CMn,
  pluginTestFormOf: () => Kso,
  pluginTestGatesOf: () => Vso,
  pluginTestRefusal: () => qso,
  savedFlags: () => AMn,
  sessionHoldsEarlyFetch: () => SMn,
  signInNearsExpiry: () => EMn,
  switchFetched: () => PMn,
  switchSaveSettled: () => xMn
});
function Kso(e) {
  let r = e[0] === "--file",
    s = e.some((i) => i.startsWith("-"));
  return r ? "file" : s ? "other" : "run";
}
var bMn = !1;
async function SMn() {
  let e = M0();
  return (
    ase() ||
    e?.policyHelpers != null ||
    e?.policyHelper != null ||
    import("./chunk-475stacc.js").then((r) => r.pendingSettingsEnvBlocksEarlyGb(bMn))
  );
}
var wMn = () =>
  Promise.resolve()
    .then(SMn)
    .catch(() => !0);
var vMn = 60000;
async function EMn() {
  let e = await il();
  return e !== null && rC(e.expiresAt, Date.now() + vMn);
}
var kMn = () =>
  Promise.resolve()
    .then(() => kc() || EMn())
    .catch(() => !0);
function TMn() {
  if (Q0e()) Ai().then(MKt, MKt);
}
var AMn = p(() => u({ cachedGrowthBookFeatures: me(o(), oe()).optional() }));
function CMn(e) {
  let r = AMn().safeParse(e),
    s = r.success ? r.data.cachedGrowthBookFeatures?.[B_] : void 0;
  return typeof s === "boolean" ? s : cx;
}
var RMn =
  "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function xMn() {
  return (await Pe(jEt(), F1), pdn() && IS() && !xNr() && !CMn(await Qnt(void 0)) ? RMn : null);
}
var PMn = () =>
  M_i()
    .finally(TMn)
    .then(xMn)
    .catch(
      (e) => (
        t("claude plugin test: the hold for the rollout flag failed: " + d(e), { level: "error" }),
        null
      )
    );
async function Vso({ helperError: e, form: r, envPin: s }) {
  if (r === "file") I_i();
  let i = e === null && r === "run",
    n = i ? ((await Adt(s))?.reason ?? null) : e,
    a = i && n === null && !pdn() && !(await wMn()) && !(await kMn()) ? await PMn() : null;
  return (
    await XQe(),
    { helperError: n ?? a, isRolloutOn: IS(), isSwitchSaved: LDe(), canLoadUserModules: DNr() }
  );
}
function qso({ helperError: e, isRolloutOn: r, isSwitchSaved: s, canLoadUserModules: i }) {
  if (e !== null) return e;
  if (!r)
    return s
      ? `hooks modules are turned off in this process: ${YQe.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely`
      : `hooks modules are turned off in this process: ${YQe.served}, and a plugin's tests run only while it is on`;
  return i
    ? void 0
    : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
export { Kso, bMn, SMn, wMn, vMn, EMn, kMn, TMn, AMn, CMn, RMn, xMn, PMn, Vso, qso, Yso };

//# sourceMappingURL=chunk-ps0xnm7j.js.map
