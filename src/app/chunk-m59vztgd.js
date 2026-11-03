// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Rp, Mns, Hns } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { $o, Ae } from "./chunk-dvghjmtr.js";
import { H2t, mni, MV, Jqo, i_, Xtr, eEt, T0e, vVe, Xe } from "./chunk-ajtyjx88.js";
import { TYn, ATe } from "./chunk-6h7ejyet.js";
import { Ot } from "./chunk-ya7n419k.js";
var YI = { fable: "Fable", sonnet: "Sonnet", opus: "Opus", haiku: "Haiku" };
async function cMt(l, s, d = TYn) {
  let r;
  try {
    return await Promise.race([
      s,
      new Promise((o) => {
        r = setTimeout(
          (u, n, f) => {
            (t(`[3p-probe] ${n} hit ${f}ms deadline; proceeding without it`), u([]));
          },
          d,
          o,
          l,
          d
        );
      })
    ]);
  } finally {
    clearTimeout(r);
  }
}
async function m(l, s, d, r = TYn) {
  let o = Date.now(),
    u = await cMt(`${l}-fallback`, s(), r),
    n = r - (Date.now() - o),
    f = n > 0 ? await cMt(`${l}-document-default`, d(), n) : [];
  return [u, f];
}
function _(l) {
  switch (l) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return i.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !MV("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return i.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !MV("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return i.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 && !MV("haiku");
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return i.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return !1;
  }
}
function k(l, s) {
  switch (l) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      i.set("ANTHROPIC_DEFAULT_SONNET_MODEL", s);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      i.set("ANTHROPIC_DEFAULT_OPUS_MODEL", s);
      break;
    default:
      return;
  }
  (H2t(l, s), mni(l, s));
}
function qvr() {
  Mns({
    sonnet: i.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !MV("sonnet"),
    opus: i.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !MV("opus")
  });
}
async function Omo(l) {
  qvr();
  let s = l?.pendingUserModel?.trim(),
    r = Xtr(s === "default" || s === "inherit" || s === "" ? void 0 : (s ?? void 0)),
    o = T0e(),
    u =
      r != null && r !== "" ? r : s !== void 0 && r == null ? (o ?? void 0) : (i_() ?? o ?? void 0);
  switch (Ae()) {
    case "bedrock":
      return { lines: await p(u), hasHardFailure: !1 };
    case "vertex":
      return { lines: await T(u), hasHardFailure: !1 };
    case "mantle": {
      let n = !1;
      if (o !== null) {
        let e = Ot(o.trim().toLowerCase());
        n = !(e === "opus" || e === "best" || Xe(e) === Xe($o[eEt].firstParty)) && vVe();
      }
      let f = (r != null && r !== "") || i_() != null || n;
      return O(f);
    }
    default:
      return { lines: [], hasHardFailure: !1 };
  }
}
function D(l, s) {
  let d = [];
  for (let r of l)
    (Hns(r.candidate),
      a(s === "bedrock" ? "tengu_bedrock_default_fallback" : "tengu_vertex_default_fallback", {
        tier: c(r.tier ?? "default"),
        default_key: b("document_default"),
        fallback_key: b("tier_default"),
        cross_tier: b("false")
      }),
      d.push(
        `Default model: ${r.name} not available on this account \u2014 not used as this session's default`
      ));
  return d;
}
async function p(l) {
  let {
      checkBedrockDefaultAvailability: s,
      checkBedrockDocumentDefaults: d,
      seedEnvDefaultForUserPin: r
    } = await import("./chunk-b8kwtwc8.js"),
    o = r(l);
  if (o && !_(o.envVar)) k(o.envVar, o.value);
  let [u, n] = await m("bedrock", s, d),
    f = [];
  for (let e of u) {
    if (_(e.envVar)) continue;
    if (
      ((process.env[e.envVar] = e.fallbackBedrockId),
      H2t(e.envVar, e.fallbackBedrockId),
      e.tier === "sonnet")
    )
      Jqo("bedrock", e.fallbackBedrockId, ATe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL"))
        process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
    }
    if (e.crossTier)
      ((process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName),
        (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`));
    (a("tengu_bedrock_default_fallback", {
      tier: c(e.tier),
      default_key: e.documentTargetId ? b("document_target") : c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }),
      f.push(
        e.crossTier
          ? `${YI[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.`
          : `${YI[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`
      ));
  }
  return (f.push(...D(n, "bedrock")), f);
}
async function T(l) {
  let {
      checkVertexDefaultAvailability: s,
      checkVertexDocumentDefaults: d,
      seedEnvDefaultForUserPin: r
    } = await import("./chunk-y963mck0.js"),
    o = r(l);
  if (o && !_(o.envVar)) k(o.envVar, o.value);
  let [u, n] = await m("vertex", s, d),
    f = [];
  for (let e of u) {
    if (_(e.envVar)) continue;
    if (
      ((process.env[e.envVar] = e.fallbackVertexId),
      H2t(e.envVar, e.fallbackVertexId),
      e.tier === "sonnet")
    )
      Jqo("vertex", e.fallbackVertexId, ATe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL"))
        process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
    }
    if (e.crossTier)
      ((process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName),
        (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`));
    (a("tengu_vertex_default_fallback", {
      tier: c(e.tier),
      default_key: e.documentTargetId ? b("document_target") : c(e.defaultKey),
      fallback_key: c(e.fallbackKey),
      cross_tier: b(e.crossTier ? "true" : "false")
    }),
      f.push(
        e.crossTier
          ? `${YI[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.`
          : `${YI[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`
      ));
  }
  return (f.push(...D(n, "vertex")), f);
}
async function O(l) {
  let { checkMantleDefaultAvailability: s } = await import("./chunk-d1hhejwn.js"),
    d = await cMt("mantle-fallback", s(void 0, { userPinned: l })),
    r = [],
    o = !1,
    u;
  for (let n of d)
    if (n.kind === "adminPin") {
      if (!l) (Rp(n.adminMantleId), (u = n.adminMantleId));
    } else if (n.kind === "pinRefuted") {
      if (!l)
        (Rp(n.workingMantleId),
          (u = n.workingMantleId),
          a("tengu_mantle_default_fallback", {
            default_key: c(n.defaultKey),
            fallback_key: c(n.workingKey),
            admin_pin_refuted: b("true")
          }),
          r.push(
            `${YI[n.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${n.workingName} for this session`
          ));
    } else if (n.kind === "fallback") {
      let f = !1;
      if (!_(n.envVar))
        ((process.env[n.envVar] = n.fallbackMantleId), H2t(n.envVar, n.fallbackMantleId), (f = !0));
      if (!l) (Rp(n.fallbackMantleId), (u = n.fallbackMantleId), (f = !0));
      if (f)
        (a("tengu_mantle_default_fallback", {
          default_key: c(n.defaultKey),
          fallback_key: c(n.fallbackKey)
        }),
          r.push(
            `${YI[n.tier]}: ${n.defaultName} not available \u2014 using ${n.fallbackName} for this session`
          ));
    } else
      ((o = !0),
        a("tengu_mantle_default_fallback", { default_key: b("exhausted") }),
        r.push(
          `${YI[n.tier]}: no accessible model (tried ${n.triedNames.join(", ")}). Enable ${n.defaultName} in Amazon Bedrock (Mantle).`
        ));
  return { lines: r, hasHardFailure: o, mantleOverride: u };
}
export { YI, cMt, qvr, Omo };

//# sourceMappingURL=chunk-m59vztgd.js.map
