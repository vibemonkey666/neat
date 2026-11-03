// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { I } from "./chunk-a16y5hcz.js";
import { _, ma, te, ei, t } from "./chunk-4kxznmzw.js";
import { c } from "./chunk-acd8w9vv.js";
import { d, G } from "./chunk-fs43t96t.js";
import { F, L } from "./chunk-wrtp8qz8.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { l } from "./chunk-ewvf3tep.js";
import { Le } from "./chunk-jazcqqqr.js";
import { p } from "./chunk-qmkm2x59.js";
import { yM, Dbe, gS, tu, Af, Ns, Bw, TI, Vs } from "./chunk-5rw2zfa0.js";
import { Fx } from "./chunk-ajtyjx88.js";
import { f6 } from "./chunk-azq9hjy0.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { Is, Ro, Tf } from "./chunk-1e5yp9hx.js";
import { PZ, f4e, GTt, eP } from "./chunk-d54avynm.js";
import { pe } from "./chunk-7c3thgax.js";
import { br } from "./chunk-wejdb0zs.js";
import { Jn } from "./chunk-d5zj5299.js";
import { Bre, oLe, Ou } from "./chunk-p56qmwgb.js";
import { She, jne, lGs } from "./chunk-6h7ejyet.js";
import { hme, hAs } from "./chunk-z29ek0s6.js";
import { vyt } from "./chunk-d2975tv6.js";
import { Sgt, Rd, Kge, nY, Nle } from "./chunk-j0tbz6ra.js";
import { wY } from "./chunk-tsf65jkw.js";
import { ne } from "./chunk-39xmt821.js";
import { eve, rXt } from "./chunk-g1pb6wzh.js";
import { j$n } from "./chunk-16kd07fp.js";
import { dZt } from "./chunk-fdxhgrmx.js";
import { Mde, df } from "./chunk-gjsrpxk2.js";
import { AV } from "./chunk-mg0tfavz.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, v, T, u, B, A } from "./chunk-0bqrj5ah.js";
import { hostname as yn } from "os";
import { dirname as wn, join as kn } from "path";
var Sn = p(() =>
    u({ version: A(1), choice: B(["accepted", "declined"]), decidedAt: o(), hostname: o() })
  ),
  De = "cloud-plugins-consent";
function Ne() {
  return We.state(De);
}
function KFe() {
  return kn(Le(), "state", `${De}.json`);
}
async function xe(e) {
  let n;
  try {
    n = await e.readText();
  } catch (r) {
    return (
      t(`cloud-plugins consent: store unreadable (${d(r)})`, { level: "warn" }),
      "unreadable"
    );
  }
  if (n === void 0) return "unset";
  try {
    let r = Sn().safeParse(te(n));
    return r.success && r.data.hostname === e.hostname() ? r.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function bn(e) {
  let n = await xe(e);
  return n === "unreadable" ? "unset" : n;
}
function Pn(e, n) {
  return n === "declined" || (n === "unset" && e) ? "declined" : "accepted";
}
async function Dcs(e, n) {
  try {
    return (
      await n.writeText(
        _(
          { version: 1, choice: e, decidedAt: n.now().toISOString(), hostname: n.hostname() },
          null,
          2
        ) +
          `
`
      ),
      !0
    );
  } catch (r) {
    return (t(`cloud-plugins consent: answer not saved (${d(r)})`, { level: "warn" }), !1);
  }
}
function mxt(e) {
  return {
    readText: async () => {
      if (e) {
        let n = await e.readText([Ne()]);
        if (!n.ok) throw Error("cloud-plugins consent read failed");
        let r = n.value.items[0];
        return r.found ? r.value : void 0;
      }
      try {
        return await hn().read(KFe());
      } catch (n) {
        if (G(n)) return;
        throw n;
      }
    },
    writeText: async (n) => {
      if (e) {
        if (!(await e.write(Ne(), n, { mode: 384 })).ok)
          throw Error("cloud-plugins consent write failed");
        return;
      }
      let r = KFe();
      (await hn().mkdir(wn(r), 448), await hn().atomicWrite(r, n, 384));
    },
    now: () => new Date(),
    hostname: yn
  };
}
function Hcs() {
  return { value: null, persisted: !1, given: !1 };
}
async function elt(e, n, r) {
  let { answer: s, given: i } = await Rn(e, n);
  if (s !== "accepted" || i || r === void 0 || !(await r.storeUntrusted().catch(() => !0)))
    return s;
  return (Cn(r.onUntrusted), "unset");
}
async function Rn(e, n) {
  let r = !1;
  if (e.value === null)
    ((r = !0), (e.value = bn(n).then((x) => ((e.persisted = x !== "unset"), x))), (e.given = !1));
  let { value: s, given: i } = e,
    k = await s;
  if (k !== "accepted" || r) return { answer: k, given: i };
  let P = await xe(n),
    { value: S, given: h } = e;
  if (S !== null && S !== s) return { answer: await S, given: h };
  if (P === "accepted") e.persisted = !0;
  let O = Pn(e.persisted, P);
  if (O === "declined")
    return ((e.value = Promise.resolve(O)), (e.given = !1), { answer: O, given: !1 });
  return { answer: O, given: i };
}
function Cn(e) {
  try {
    e?.();
  } catch (n) {
    t(`cloud-plugins consent: callback failed (${d(n)})`, { level: "warn" });
  }
}
var $e = ["userSettings", "projectSettings", "localSettings", "flagSettings"],
  vn = new Set(["userSettings", "flagSettings"]),
  En = Is.toReversed(),
  Fn = 200,
  An = 32,
  Pe = 2000,
  Tn = 256,
  On = 1024,
  Nn = 140,
  Dn = 128,
  Ln = 256,
  xn = 16,
  In = 128,
  Mn = 262144,
  jn = new Set([df, "claude-code-marketplace"]),
  $n = new Set(["https:", "ssh:", "git+ssh:", "git+https:"]),
  Ie = new Set(["http:", "git:", "git+http:"]),
  Un = new Set(["ssh:", "git+ssh:"]),
  Wn = new Set(["https:"]),
  Bn = /^[\x21-\x7e]+$/,
  Kn = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Hn = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/,
  Gn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/,
  Yn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/,
  zn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/,
  Ue = /(?:^|[/:])\.\.(?:$|[/?#;])/,
  Be = /%2e|%2f|%5c|%3b|%3f|%23|\\/i,
  Vn = /^[^:]*:\/\/[^/?#]*%/,
  qn = [
    "invalid_id",
    "invalid_value",
    "directory_loaded",
    "unknown_builtin",
    "ambiguous_marketplace",
    "blocked_by_policy",
    "not_installed_here",
    "unknown_marketplace",
    "untrusted_for_folder",
    "reserved_name_conflict",
    "not_provided_by_container",
    "local_marketplace",
    "needs_credentials",
    "insecure_transport",
    "invalid_marketplace",
    "over_cap",
    "guard_builtin_not_own_choice"
  ];
function I3t(e) {
  let n = _t(),
    r = [],
    s = new Map(),
    i = [],
    k = ot(e),
    P = { byPolicy: Me(e.policyRefusedMarketplaces), asReserved: Me(e.reservedNameConflicts) };
  for (let [E, R] of [...Qn(e, n)].sort(([V], [q]) => ye(V, q))) {
    let V = Vs(E) ?? "",
      q = s.get(V) ?? rt(V, e, P);
    s.set(V, q);
    let M = tt(E, R, V, q, k, e);
    if (M !== void 0) {
      if ((n[M]++, M !== "directory_loaded")) r.push({ id: E, reason: M });
      continue;
    }
    let ee = {
      id: E,
      value: R.value === !0,
      ownMention: R.ownMention,
      marketplace: V,
      declaration: q.kind === "declare" && R.value === !0 ? q.source : void 0
    };
    (i.push(ee), i.push(...TI(E).map((j) => ({ ...ee, id: j }))));
  }
  let S = ht(gt(i, n, r), n, r),
    h = {
      enabledPlugins: Object.fromEntries(S.map(({ id: E, value: R }) => [E, R])),
      extraKnownMarketplaces: Object.fromEntries(
        S.flatMap(({ marketplace: E, declaration: R }) =>
          R === void 0 ? [] : [[E, { source: R }]]
        ).sort(([E], [R]) => ye(E, R))
      )
    },
    O = {
      forwarded: S.length,
      forwardedDisabled: F(S, ({ value: E }) => !E),
      marketplacesDeclared: Object.keys(h.extraKnownMarketplaces).length,
      dropped: n
    };
  r.sort((E, R) => ye(E.id, R.id));
  let x = et(e)
    ? "over_read_cap"
    : !Dbe(h).safeParse(h).success
      ? "schema_rejected"
      : Buffer.byteLength(Zn(h), "utf8") > Mn
        ? "too_large"
        : void 0;
  if (x !== void 0)
    return {
      patch: { enabledPlugins: {}, extraKnownMarketplaces: {} },
      dropped: [...r, ...S.map(({ id: E }) => ({ id: E, reason: "over_cap" }))].sort((E, R) =>
        ye(E.id, R.id)
      ),
      counts: {
        forwarded: 0,
        forwardedDisabled: 0,
        marketplacesDeclared: 0,
        dropped: { ...n, over_cap: n.over_cap + S.length }
      },
      refusedWhole: x
    };
  return { patch: h, dropped: r, counts: O };
}
function Zn(e) {
  return _(yM(e));
}
function Ke(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(qn.map((n) => [`dropped_${n}`, e.dropped[n]]))
  };
}
function Xn(e, n) {
  if (!H(n)) return { kind: "drop", reason: "invalid_marketplace" };
  switch (J(n, "source")) {
    case "github":
      return at(e, n);
    case "git":
      return dt(e, n);
    case "url":
      return lt(e, n);
    case "directory":
    case "file":
    case "npm":
    case "settings":
      return { kind: "drop", reason: "local_marketplace" };
    default:
      return { kind: "drop", reason: "invalid_marketplace" };
  }
}
function Qn(e, n) {
  let r = new Map(),
    s = new Set();
  for (let i of $e) {
    let k = e.enabledPluginsByTier[i];
    if (!H(k)) continue;
    let P = vn.has(i) || (i === "localSettings" && e.localSettingsAreOwnChoice),
      S = Object.keys(k);
    n.over_cap += Math.max(0, S.length - Pe);
    for (let h of S.slice(0, Pe)) {
      let O = k[h],
        x = He(k, h);
      if (O === void 0 || x === void 0) continue;
      if (!AV.includes(i) && e.trustedOnlyBuiltinIds.has(x.toLowerCase())) {
        n.guard_builtin_not_own_choice++;
        continue;
      }
      if (!nt(x)) {
        s.add(x);
        continue;
      }
      let E = r.get(x);
      r.set(x, {
        value: O,
        ownChoice: (E?.ownChoice ?? !1) || (P && O === !0),
        ownMention: (E?.ownMention ?? !1) || (P && typeof O === "boolean")
      });
    }
  }
  return ((n.invalid_id += s.size), r);
}
function et(e) {
  return $e.some((n) => {
    let r = e.enabledPluginsByTier[n];
    return H(r) && Object.keys(r).length > Pe;
  });
}
function nt(e) {
  return e.length <= Tn && eP().safeParse(e).success;
}
function tt(
  e,
  n,
  r,
  s,
  i,
  { installedPluginIds: k, builtinPluginIds: P, directoryPluginsAllowedByPolicy: S }
) {
  let h = r.toLowerCase();
  if (h === tu) return "directory_loaded";
  if (typeof n.value !== "boolean") return "invalid_value";
  if (h === Af && !S) return "blocked_by_policy";
  if (h === Ns && !P.has(e)) return "unknown_builtin";
  if (n.value && i.has(e.toLowerCase())) return "blocked_by_policy";
  if (s.kind === "drop" && n.value) return s.reason;
  if (n.value && !n.ownChoice && !k.has(e) && h !== Ns && h !== Af) return "not_installed_here";
  return;
}
function ot({ enabledPluginsByTier: e }) {
  let n = e.policySettings;
  return new Set(
    H(n)
      ? Object.keys(n)
          .filter((r) => n[r] === !1)
          .flatMap((r) => He(n, r) ?? [])
          .map((r) => r.toLowerCase())
      : []
  );
}
function He(e, n) {
  let r = Bw(n),
    s = [r, ...TI(r)],
    i = s.indexOf(n);
  return s.slice(0, i === -1 ? s.length : i).some((P) => Object.hasOwn(e, P) && e[P] !== void 0)
    ? void 0
    : r;
}
function Me(e) {
  return new Set([...e].map((n) => n.toLowerCase()));
}
function rt(e, n, r) {
  let s = e.toLowerCase();
  if (s === Ns || s === Af) return { kind: "reserved" };
  if (r.byPolicy.has(s)) return { kind: "drop", reason: "blocked_by_policy" };
  let i = st(e, n),
    k = PZ.has(s);
  if (i === void 0 && n.marketplaceRestrictionPolicyActive && s !== df)
    return { kind: "drop", reason: k ? "blocked_by_policy" : je(e, n) };
  if (k)
    return r.asReserved.has(s)
      ? { kind: "drop", reason: "reserved_name_conflict" }
      : jn.has(s)
        ? { kind: "reserved" }
        : { kind: "drop", reason: "not_provided_by_container" };
  if (f4e(e)) return { kind: "drop", reason: "reserved_name_conflict" };
  if (i === void 0) return { kind: "drop", reason: je(e, n) };
  return Xn(e, i);
}
function je(e, n) {
  return it(e, n) ? "untrusted_for_folder" : "unknown_marketplace";
}
function st(e, n) {
  let r = H(n.registeredMarketplaces) ? J(n.registeredMarketplaces, e) : void 0;
  if (r !== void 0) return H(r) ? (J(r, "source") ?? null) : null;
  for (let s of En) {
    if (Tf.has(s) && !n.folderTrustedForProjectPlugins) continue;
    let i = Ge(n, s, e);
    if (i !== void 0) return H(i) ? (J(i, "source") ?? null) : null;
  }
  return;
}
function it(e, n) {
  return !n.folderTrustedForProjectPlugins && [...Tf].some((r) => Ge(n, r, e) !== void 0);
}
function Ge(e, n, r) {
  let s = e.declaredMarketplacesByTier[n];
  return H(s) ? J(s, r) : void 0;
}
function at(e, n) {
  let r = J(n, "repo");
  if (typeof r !== "string" || r.length > Nn || !Kn.test(r) || r.split("/").some(qe))
    return { kind: "drop", reason: "invalid_marketplace" };
  let s = ze(n);
  return s === void 0
    ? { kind: "drop", reason: "invalid_marketplace" }
    : Re(e, { source: "github", repo: r, ...s });
}
function dt(e, n) {
  let r = J(n, "url"),
    s = Ye(r);
  if (s === void 0) return { kind: "drop", reason: "invalid_marketplace" };
  let i = pt(s);
  if (i !== "network") return { kind: "drop", reason: i };
  if (!vyt(s)) return { kind: "drop", reason: "invalid_marketplace" };
  let k = ze(n);
  return k === void 0
    ? { kind: "drop", reason: "invalid_marketplace" }
    : Re(e, { source: "git", url: s, ...k });
}
function lt(e, n) {
  let r = Ye(J(n, "url"));
  if (r === void 0) return { kind: "drop", reason: "invalid_marketplace" };
  let s = J(n, "headers");
  if (J(n, "headersHelper") !== void 0 || (s !== void 0 && !(H(s) && Object.keys(s).length === 0)))
    return { kind: "drop", reason: "needs_credentials" };
  let i = Ze(r, Wn);
  return i === "network" ? Re(e, { source: "url", url: r }) : { kind: "drop", reason: i };
}
function Ye(e) {
  return typeof e === "string" && e.length > 0 && e.length <= On && Bn.test(e) ? e : void 0;
}
function ze(e) {
  let n = J(e, "ref"),
    r = J(e, "path"),
    s = J(e, "sparsePaths"),
    i = J(e, "skipLfs");
  if (
    (n !== void 0 && !ut(n)) ||
    (r !== void 0 && !ct(r)) ||
    (s !== void 0 && !ft(s)) ||
    (i !== void 0 && typeof i !== "boolean")
  )
    return;
  return {
    ...(n !== void 0 && { ref: n }),
    ...(r !== void 0 && { path: r }),
    ...(s !== void 0 && { sparsePaths: s }),
    ...(i !== void 0 && { skipLfs: i })
  };
}
function ut(e) {
  return typeof e === "string" && e.length <= Dn && Yn.test(e) && !e.split("/").some(qe);
}
function ct(e) {
  return typeof e === "string" && e.length <= Ln && Ve(e);
}
function ft(e) {
  return (
    Array.isArray(e) &&
    e.length <= xn &&
    e.every((n) => typeof n === "string" && n.length <= In && Ve(n))
  );
}
function Ve(e) {
  return zn.test(e) && !e.startsWith("/") && !e.split("/").some((n) => n === "..");
}
function qe(e) {
  return e === "." || e === "..";
}
function Re(e, n) {
  return gS("extraKnownMarketplaces").safeParse({ [e]: { source: n } }).success
    ? { kind: "declare", source: n }
    : { kind: "drop", reason: "invalid_marketplace" };
}
function pt(e) {
  if (e.startsWith("-") || Gn.test(e) || f6(e)) return "invalid_marketplace";
  if (e.includes("://")) return Ze(e, $n);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let n = Hn.exec(e);
  if (n === null) return "invalid_marketplace";
  let [, , r = "", s = ""] = n;
  if (s.length === 0 || /^[-:]/.test(s) || Ue.test(s) || Be.test(s)) return "invalid_marketplace";
  if (/[?#]/.test(s)) return "needs_credentials";
  return Xe(r) ? "local_marketplace" : "network";
}
function Ze(e, n) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return "invalid_marketplace";
  }
  if (r.protocol === "file:") return "local_marketplace";
  if (
    !(n.has(r.protocol) || Ie.has(r.protocol)) ||
    Vn.test(e) ||
    r.hostname === "" ||
    /^\[?-/.test(r.hostname) ||
    r.username.startsWith("-")
  )
    return "invalid_marketplace";
  if (
    r.password !== "" ||
    (r.username !== "" && !Un.has(r.protocol)) ||
    r.search !== "" ||
    r.hash !== "" ||
    e.includes("?") ||
    e.includes("#")
  )
    return "needs_credentials";
  if (Xe(r.hostname)) return "local_marketplace";
  if (Ue.test(e) || Be.test(e)) return "invalid_marketplace";
  return Ie.has(r.protocol) ? "insecure_transport" : "network";
}
function Xe(e) {
  return hAs(e, "address") || hme(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}
function gt(e, n, r) {
  let s = new Map();
  for (let { marketplace: i, declaration: k } of e)
    if (k !== void 0) {
      let P = i.toLowerCase(),
        S = s.get(P) ?? new Set();
      (S.add(ma(yM(k))), s.set(P, S));
    }
  return e.filter(({ id: i, marketplace: k, declaration: P }) => {
    if (P === void 0 || (s.get(k.toLowerCase())?.size ?? 0) <= 1) return !0;
    return (n.ambiguous_marketplace++, r.push({ id: i, reason: "ambiguous_marketplace" }), !1);
  });
}
function ht(e, n, r) {
  let s = new Set(mt(e).slice(0, An)),
    i = e.filter(({ declaration: S, marketplace: h }) => S === void 0 || s.has(h)),
    k = [
      ...i.filter(({ value: S, ownMention: h }) => h && !S),
      ...i.filter(({ value: S, ownMention: h }) => h && S),
      ...i.filter(({ value: S, ownMention: h }) => !h && S),
      ...i.filter(({ value: S, ownMention: h }) => !h && !S)
    ]
      .slice(0, Fn)
      .sort((S, h) => ye(S.id, h.id)),
    P = new Set(k.map(({ id: S }) => S));
  for (let { id: S } of e) if (!P.has(S)) (n.over_cap++, r.push({ id: S, reason: "over_cap" }));
  return k;
}
function mt(e) {
  let n = e.filter(({ declaration: i }) => i !== void 0),
    r = L(n.filter(({ ownMention: i }) => i).map(({ marketplace: i }) => i)).sort(),
    s = new Set(r);
  return [
    ...r,
    ...L(n.map(({ marketplace: i }) => i))
      .filter((i) => !s.has(i))
      .sort()
  ];
}
function ye(e, n) {
  return e < n ? -1 : e > n ? 1 : 0;
}
function _t() {
  return {
    invalid_id: 0,
    invalid_value: 0,
    directory_loaded: 0,
    unknown_builtin: 0,
    ambiguous_marketplace: 0,
    blocked_by_policy: 0,
    not_installed_here: 0,
    unknown_marketplace: 0,
    untrusted_for_folder: 0,
    reserved_name_conflict: 0,
    not_provided_by_container: 0,
    local_marketplace: 0,
    needs_credentials: 0,
    insecure_transport: 0,
    invalid_marketplace: 0,
    over_cap: 0,
    guard_builtin_not_own_choice: 0
  };
}
function J(e, n) {
  return Object.hasOwn(e, n) ? e[n] : void 0;
}
function Je({
  admission: e,
  readChoices: n,
  transport: r,
  clock: s,
  bound: i,
  onNotice: k,
  onOutcome: P,
  onState: S
}) {
  let h = i === void 0 ? {} : { bound: i },
    O = "idle",
    x = null,
    E = (y) => {
      if (((O = y), y !== "skipped")) x = null;
      fe(() => S?.(y), ke);
    },
    R = null,
    V = null,
    q = !1,
    M = null,
    ee = !1,
    j = null,
    z = null,
    he = !1;
  function oe(y, b) {
    if (b === "read_failed" || b === "internal_error" || b === "refused_whole")
      m("ccr_cloud_plugins_forward", b, h);
    ((x = b),
      E("skipped"),
      a("tengu_cloud_plugins_skipped", { reason: c(b), ...h, reattach: y.reattach }));
  }
  function ue(y) {
    fe(() => P?.(y), ke);
    let b = _(
      y.refusedByWorker === void 0
        ? [y.forwarded, y.forwardedDisabled, y.loaded, y.notApplied, y.stayed]
        : ["refused", y.refusedByWorker, y.stayed]
    );
    if (b !== M || (y.messageWentFirst && !ee))
      fe(() => {
        (k(y), (M = b), (ee = y.messageWentFirst));
      }, ke);
  }
  function ge(y, b, C, K) {
    let Y = j !== null;
    return {
      forwarded: b.forwarded,
      forwardedDisabled: b.forwardedDisabled,
      loaded: Y ? null : C,
      stayed: b.stayed,
      notApplied: K || Y,
      messageWentFirst: !Y && !K && y.messageWentFirst,
      ...(j !== null && { refusedByWorker: j.reason })
    };
  }
  function ie(y) {
    return fe(() => r.post(y), St);
  }
  function re(y, b, C, K) {
    q = !0;
    let Y = ie({ subtype: "apply_flag_settings", settings: { [eve]: b.patch } }),
      de = () => Ce(y, K) === "current";
    return (
      Y.response.then(
        () => {
          if (de()) j = null;
        },
        (_e) => {
          let se = kt(_e);
          if (
            (a("tengu_cloud_plugins_apply_unconfirmed", {
              at: c(C),
              ...h,
              standing: c(Ce(y, K)),
              ...(se !== null && { refused_by_worker: c(se) })
            }),
            se !== null && de())
          )
            ((j = { reason: se, generation: K }), ue(ge(y, b, null, !0)));
        }
      ),
      Y
    );
  }
  function me(y, b) {
    let C = I3t(b);
    if (
      (a("tengu_cloud_plugins_forwarded", {
        ...Ke(C.counts),
        refused_whole: C.refusedWhole !== void 0,
        ...h,
        reattach: y.reattach
      }),
      C.refusedWhole !== void 0)
    ) {
      (ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: C.dropped,
        notApplied: !0,
        messageWentFirst: !1
      }),
        oe(y, "refused_whole"));
      return;
    }
    if (
      C.counts.forwarded === 0 &&
      C.counts.marketplacesDeclared === 0 &&
      !y.reattach &&
      !y.workerKnownAtConnect &&
      !q
    ) {
      if (C.dropped.length > 0)
        ue({
          forwarded: 0,
          forwardedDisabled: 0,
          loaded: null,
          stayed: C.dropped,
          notApplied: !1,
          messageWentFirst: !1
        });
      oe(y, "nothing_to_forward");
      return;
    }
    let K = {
      patch: C.patch,
      patchKey: _(C.patch),
      forwardedEnabledIds: new Set(
        Object.entries(C.patch.enabledPlugins)
          .filter(([, Y]) => Y)
          .map(([Y]) => Y.toLowerCase())
      ),
      forwarded: C.counts.forwarded,
      forwardedDisabled: C.counts.forwardedDisabled,
      stayed: C.dropped
    };
    if (((y.plan = K), E("waiting_for_worker"), y.generation !== null))
      ((y.earlyApply = "skipped"), U(y, K, y.generation, "connect"));
    else
      ve(re(y, K, "connect", null)).then((Y) => {
        y.earlyApply = Y;
      });
  }
  function U(y, b, C, K) {
    if (y.handledGeneration !== null && C <= y.handledGeneration) return;
    let Y = y.handledGeneration !== null;
    ((y.handledGeneration = C), (y.reloadTaken = !1), (j = yt(C, y, j)), (ee = !1));
    let de = () => Ce(y, C),
      _e = (Z) => {
        a("tengu_cloud_plugins_reload", {
          early_apply: c(y.earlyApply),
          generation_changed: Y,
          install_frames_seen: y.installFrames,
          forwarded_enabled: b.forwardedEnabledIds.size,
          ...h,
          reattach: y.reattach,
          ...Z
        });
      };
    E("posted");
    let se = null,
      we = (Z, w, W) => {
        let D = Z === "accepted" && w === "accepted";
        if (de() === "current") {
          if (((y.reloadTaken = D), D && j === null)) z = { generation: C, patchKey: b.patchKey };
          let X = Z === "session_inactive" || w === "session_inactive";
          if (!D) {
            if (X) f("ccr_cloud_plugins_forward", "session_inactive", { ...h });
            else m("ccr_cloud_plugins_forward", "posts_refused", { ...h });
            ue(ge(y, b, null, !0));
          } else if (j !== null) f("ccr_cloud_plugins_forward", "refused_by_worker", { ...h });
          else g("ccr_cloud_plugins_forward", { ...h, message_went_first: y.messageWentFirst });
          E(D ? "settled" : "failed");
        }
        W.then((X) => {
          if (
            (_e({
              apply_outcome: c(Z),
              reload_outcome: c(w),
              standing: c(de()),
              message_went_first: y.messageWentFirst,
              reload_rtt_ms: se === null ? -1 : s.now() - se,
              answered: X !== null,
              loaded_of_forwarded: X?.loaded ?? -1,
              worker_error_count: X?.workerErrors ?? -1
            }),
            de() === "current" && (D || X !== null))
          ) {
            if ((ue(ge(y, b, X?.loaded ?? null, !1)), (y.messageWentFirst = !1), X !== null)) {
              if (((y.reloadTaken = !0), j === null)) z = { generation: C, patchKey: b.patchKey };
              E("settled");
            }
          }
        });
      };
    ve(re(y, b, K, C)).then((Z) => {
      if (Z !== "accepted" || de() !== "current") {
        we(Z, "not_posted", Promise.resolve(null));
        return;
      }
      se = s.now();
      let w = ie({ subtype: "reload_plugins" }),
        W = w.response.then(
          (D) => Pt(b, D),
          () => null
        );
      ve(w).then((D) => {
        we(Z, D, W);
      });
    });
  }
  function ce(y) {
    return (
      z !== null &&
      y.generation === z.generation &&
      (y.plan === null || y.plan.patchKey === z.patchKey)
    );
  }
  function ae(y) {
    let b = he && !(z !== null && V === z.generation);
    return (
      (he = !1),
      {
        reattach: y,
        workerKnownAtConnect: V !== null,
        reloadTaken: !1,
        messageWentFirst: b,
        closed: !1,
        plan: null,
        generation: V,
        handledGeneration: null,
        earlyApply: "pending",
        installFrames: 0
      }
    );
  }
  return {
    connected({ reattach: y }) {
      if (R !== null) R.closed = !0;
      let b = ae(y);
      R = b;
      let C = fe(e, () => "internal_error");
      if (C !== "admitted") {
        oe(b, C);
        return;
      }
      (E("reading"),
        Promise.resolve()
          .then(n)
          .then(
            (K) => {
              if (!b.closed)
                fe(
                  () => me(b, K),
                  () => oe(b, "internal_error")
                );
            },
            () => {
              if (!b.closed) oe(b, "read_failed");
            }
          ));
    },
    workerUp(y) {
      if (V !== null && y < V) return;
      if (((V = y), R === null || (R.generation !== null && y <= R.generation))) return;
      R.generation = y;
      let b = R,
        C = b.plan;
      if (C !== null)
        fe(
          () => U(b, C, y, "worker_up"),
          () => oe(b, "internal_error")
        );
    },
    pluginInstallFrame() {
      if (R !== null) R.installFrames++;
    },
    messageSent() {
      if (R === null) {
        he = !0;
        return;
      }
      if (!R.reloadTaken && O !== "skipped" && !ce(R)) R.messageWentFirst = !0;
    },
    disconnected() {
      if (R !== null) ((R.closed = !0), (R = null));
      E("idle");
    },
    state: () => O,
    skipped: () => (O === "skipped" ? x : null)
  };
}
function Ce(e, n) {
  return e.closed ? "disconnected" : e.handledGeneration === n ? "current" : "superseded";
}
function yt(e, n, r) {
  if (r === null || r.generation === e) return r;
  return r.generation === null && !n.workerKnownAtConnect ? { ...r, generation: e } : null;
}
function fe(e, n) {
  try {
    return e();
  } catch (r) {
    return (l(r), n(r));
  }
}
function ke() {}
var wt = [
  "not_managed_cloud_worker",
  "entrypoint",
  "disabled",
  "hermetic",
  "not_admitted",
  "flag_off",
  "flag_unsettled",
  "malformed",
  "other"
];
function kt(e) {
  let n = e instanceof Error ? e.message : typeof e === "string" ? e : "";
  if (n === rXt) return "other";
  let r = `${rXt}: `;
  if (!n.startsWith(r)) return null;
  let s = n.slice(r.length).trim();
  return wt.find((i) => i === s) ?? "other";
}
function St(e) {
  let n = Promise.reject(e);
  return (n.catch(ke), { posted: Promise.resolve("failed"), response: n });
}
function ve(e) {
  return e.posted.catch(() => "failed");
}
var bt = p(() => u({ plugins: T(u({ source: o().optional() })), error_count: v().int() }));
function Pt(e, n) {
  let r = bt().safeParse(n);
  if (!r.success) return { loaded: null, workerErrors: -1 };
  return {
    loaded: new Set(
      r.data.plugins.flatMap(({ source: s }) =>
        s !== void 0 && e.forwardedEnabledIds.has(s.toLowerCase()) ? [s.toLowerCase()] : []
      )
    ).size,
    workerErrors: r.data.error_count
  };
}
async function $pr(e) {
  let n = Ro().map((h) => [h, pe(h)]),
    [r, s] = await Promise.all([Rd(e), nY(e)]),
    i = Sgt(),
    k = n
      .filter(([h]) => i || !Tf.has(h))
      .flatMap(([, h]) =>
        Object.entries(h?.extraKnownMarketplaces ?? {}).map(([O, { source: x }]) => [O, x])
      ),
    P = [...k, ...Object.entries(r).map(([h, { source: O }]) => [h, O]), [df, Mde]],
    S = n.find(([h]) => h === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(n.map(([h, O]) => [h, O?.enabledPlugins])),
    declaredMarketplacesByTier: Object.fromEntries(
      n.map(([h, O]) => [h, O?.extraKnownMarketplaces])
    ),
    registeredMarketplaces: r,
    folderTrustedForProjectPlugins: i,
    localSettingsAreOwnChoice:
      !(H(S) && Object.keys(S).length > 0) || !Fx({ onIndeterminate: "tracked" }),
    directoryPluginsAllowedByPolicy: Bre(),
    builtinPluginIds: new Set([...br().builtinPlugins.keys()].map((h) => `${h}@${Ns}`)),
    trustedOnlyBuiltinIds: new Set(
      [...br().builtinPlugins.keys()]
        .map((h) => `${h}@${Ns}`)
        .filter(wY)
        .map((h) => h.toLowerCase())
    ),
    installedPluginIds: new Set(
      Object.entries(s.plugins)
        .filter(([, h]) => Nle(h))
        .map(([h]) => h)
    ),
    policyRefusedMarketplaces: new Set(P.filter(([, h]) => !Ou(h)).map(([h]) => h)),
    marketplaceRestrictionPolicyActive: oLe(),
    reservedNameConflicts: new Set([
      ...Object.entries(r)
        .filter(([h, O]) => Kge(h, O) !== null)
        .map(([h]) => h),
      ...k.filter(([h, O]) => !Object.hasOwn(r, h) && GTt(h, O) !== null).map(([h]) => h)
    ])
  };
}
var Xeo = 5000,
  Ee = 6;
function Fpr(e) {
  if (e === void 0) return;
  if (e.refusedByWorker !== void 0) return "refused_by_worker";
  if (e.notApplied) return "not_applied";
  let n = e.forwarded - e.forwardedDisabled;
  if (e.forwarded === 0) return e.stayed.length > 0 ? "none_to_send" : void 0;
  if (n === 0) return;
  if (e.loaded === null) return "not_confirmed";
  if (e.loaded < n) return e.loaded === 0 ? "not_installed" : "some_not_installed";
  return;
}
function Rt(e) {
  return e === "skipped" || e === "failed";
}
function Ct(e) {
  return e === "reading" || e === "posted";
}
function vt(e) {
  return e === "read_failed" || e === "internal_error" ? e : void 0;
}
var Jeo = {
  now: () => Date.now(),
  setTimeout(e, n) {
    let r = setTimeout(e, n);
    return () => clearTimeout(r);
  }
};
function oPn(e) {
  let { sessionId: n, reattach: r, manager: s, memory: i } = e,
    k = (w) => {
      try {
        e.say(w);
      } catch (W) {
        l(W);
      }
    },
    P = e.readChoices ?? (() => $pr(e.storageV5)),
    S = e.clock ?? Jeo,
    h = e.muted ?? She,
    O = (w) =>
      new Promise((W, D) => {
        let X = S.setTimeout(() => D(Error("a local read for plugin forwarding timed out")), Xeo);
        Promise.resolve().then(w).then(W, D).finally(X);
      }),
    x = () => O(P),
    E = e.consentDeps ?? mxt(e.storageV5),
    R = e.distrust ?? Qeo(e.reach),
    V = () => O(() => elt(i.consentPin, E, R)),
    q = new AbortController(),
    M = "no_consent",
    ee,
    j,
    z = () => {
      try {
        e.onChange?.();
      } catch (w) {
        l(w);
      }
    },
    he = (w) => {
      ((j = w), Qe(w, k), z());
    },
    oe = !1,
    ue = !1,
    ge = !1,
    ie = h(),
    re = !1,
    me = !1,
    U = Je({
      admission: () => M,
      readChoices: () =>
        x().then(
          (w) => ((oe = !1), w),
          (w) => {
            throw ((oe = !0), w);
          }
        ),
      transport: {
        post(w) {
          let { posted: W, response: D } = s.postControlRequest(w, { answerExpected: !1 });
          return { posted: W.then(({ outcome: X }) => X), response: D };
        }
      },
      clock: S,
      ...(e.bound !== void 0 && { bound: e.bound }),
      onNotice: (w) => {
        if (
          w.forwarded > w.forwardedDisabled &&
          w.loaded !== 0 &&
          !w.notApplied &&
          w.refusedByWorker === void 0
        )
          ue = !0;
        Qe(w, k);
      },
      onOutcome: (w) => {
        ((j = w), z());
      },
      onState: () => z()
    }),
    ce = !1,
    ae = null,
    y = () => {
      if (!me) ((me = !0), k({ line: Et, level: "notice" }));
    },
    b = () => {
      if (re) return;
      ((re = !0),
        (j = void 0),
        U.disconnected(),
        y(),
        a("tengu_cloud_plugins_admission", {
          admission: c("flag_off"),
          source: c("muted"),
          reattach: r
        }),
        z());
    },
    C = () => {
      if (
        ((re = !1), (j = void 0), k({ line: Ft, level: "notice" }), U.connected({ reattach: r }), Y)
      )
        U.messageSent();
      z();
    },
    K = (w) => {
      if (q.signal.aborted) return;
      if ((i.setAsideSessions.delete(n), !ce)) {
        ae = w;
        return;
      }
      let W = w === "accepted" ? "admitted" : "opted_out";
      if (W === M && !oe) return;
      let D = "decided";
      if (
        ((M = W),
        (ee = D),
        (j = void 0),
        z(),
        a("tengu_cloud_plugins_admission", { admission: c(W), source: c(D), reattach: r }),
        W === "admitted" && ie)
      ) {
        b();
        return;
      }
      if (((re = !1), U.disconnected(), U.connected({ reattach: r }), Y)) U.messageSent();
    },
    Y = !1,
    de = i.decided.subscribe((w) => {
      try {
        K(w);
      } catch (W) {
        l(W);
      }
    }),
    _e = (e.onMuteRecheck ?? jne)(() => {
      try {
        let w = h();
        if (q.signal.aborted || w === ie) return;
        if (((ie = w), w)) {
          if (M === "admitted" && ce && Ct(U.state())) {
            b();
            return;
          }
          z();
          return;
        }
        if (((me = !1), re)) {
          C();
          return;
        }
        z();
      } catch (w) {
        l(w);
      }
    }),
    se = () => {
      if (M !== "admitted") return;
      elt(i.consentPin, E, R).then(
        (w) => {
          if (w !== "accepted") K("declined");
        },
        () => {}
      );
    };
  we()
    .catch((w) => (l(w), { admission: "no_consent", source: "internal_error", unsent: [] }))
    .then((w) => {
      if (
        (a("tengu_cloud_plugins_admission", {
          admission: c(w.admission),
          source: c(w.source),
          reattach: r
        }),
        q.signal.aborted)
      )
        return;
      if (w.source === "read_failed" || w.source === "internal_error") {
        if (
          (m("ccr_cloud_plugins_forward", w.source), (ee = w.source), (ce = !0), z(), ae !== null)
        )
          K(ae);
        return;
      }
      if (((M = w.admission), (ee = w.source), (ce = !0), M === "admitted" && ie)) b();
      else (U.connected({ reattach: r }), z());
      if (w.unsent.length > 0) he(Nt(w.unsent));
      if (ae !== null) K(ae);
    })
    .catch((w) => {
      l(w);
    });
  async function we() {
    let w = await V().catch(() => null);
    if (w === null) return { admission: "no_consent", source: "read_failed", unsent: [] };
    if (w !== "unset")
      return {
        admission: w === "accepted" ? "admitted" : "opted_out",
        source: "stored",
        unsent: []
      };
    let W = await x().then(
      (mn) => mn,
      () => null
    );
    if (W === null) return { admission: "no_consent", source: "read_failed", unsent: [] };
    let D = I3t(W);
    if (D.counts.forwarded === 0 && D.counts.marketplacesDeclared === 0)
      return { admission: "no_consent", source: "not_asked", unsent: D.dropped };
    if (q.signal.aborted) return { admission: "no_consent", source: "detached", unsent: [] };
    let X = R.withheld();
    if (X !== null) {
      if ((i.setAsideSessions.add(n), ae === null)) k({ line: Tt(X), level: "warning" });
      return { admission: "no_consent", source: "untrusted_store", unsent: [] };
    }
    if (!i.pointedToCommand.shown && ae === null)
      ((i.pointedToCommand.shown = !0),
        k({
          line: Ot(D.counts.forwarded - D.counts.forwardedDisabled, D.counts.forwarded),
          level: "debug"
        }));
    return { admission: "no_consent", source: "undecided", unsent: [] };
  }
  let Z = (w) => () => {
    try {
      w();
    } catch (W) {
      l(W);
    }
  };
  return {
    workerKnownUp: Z(() => {
      if (M === "admitted" && ie) b();
      U.workerUp(i.generations.known(n));
    }),
    workerCameUp: Z(() => {
      if (M === "opted_out" && ue && !ge) ((ge = !0), k({ line: At, level: "notice" }));
      se();
      let w = i.generations.next(n);
      if (M === "admitted" && ie) b();
      else if (M === "admitted" && ce && oe) {
        if (((j = void 0), U.disconnected(), U.connected({ reattach: r }), Y)) U.messageSent();
      }
      U.workerUp(w);
    }),
    pluginInstallFrame: Z(() => U.pluginInstallFrame()),
    messageSent: Z(() => {
      ((Y = !0), U.messageSent());
    }),
    teardown: Z(() => {
      if (q.signal.aborted) return;
      (i.setAsideSessions.delete(n), q.abort(), _e(), de(), U.disconnected());
    }),
    state: () => ({
      settled: ce,
      admission: M,
      source: ee,
      notice: j,
      muted: re,
      answerPending: M === "admitted" && !re && j === void 0 && !Rt(U.state()),
      gaveUp: vt(U.skipped())
    })
  };
}
var Et =
    "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.",
  Ft =
    "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.",
  At =
    "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";
function Qeo(e) {
  let n = null,
    r = null,
    s = null,
    i = () =>
      (n ??= Promise.resolve()
        .then(() => e.judge())
        .catch(() => "unknown")
        .then((k) => ((r = k), k)));
  return {
    storeUntrusted: () => i().then((k) => k !== "outside"),
    onUntrusted: () => {
      s = r === null || r === "outside" ? "unknown" : r;
    },
    withheld: () => s
  };
}
function Tt(e) {
  let n = Jn(KFe());
  return `The saved answer about your plugins is not used for this cloud session, because ${e === "in_launch_dir" ? `the session itself can change ${n} from the folder or repository it runs in` : e === "in_other_root" ? `the session itself can change ${n} through a folder it may write on this machine (an added directory or a settings write grant)` : `it could not be checked that the session cannot change ${n}`}; run /cloud-plugins to decide for this session.`;
}
function Ot(e, n) {
  return `${e > 0 ? `Your ${e} enabled ${I(e, "plugin")} can be used in` : `Your ${n} plugin ${I(n, "choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`;
}
function Nt(e) {
  return {
    forwarded: 0,
    forwardedDisabled: 0,
    loaded: null,
    stayed: e,
    notApplied: !1,
    messageWentFirst: !1
  };
}
function Qe(e, n) {
  Dt(e).forEach(n);
}
function Dt(e) {
  return [...Lt(e), ...xt(e.stayed, e.forwarded === 0)];
}
function Lt(e) {
  if (e.forwarded === 0 && e.refusedByWorker === void 0 && !e.notApplied) return [];
  if (e.refusedByWorker !== void 0)
    return [
      {
        line: `This cloud session did not take your plugins: ${Mt[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
        level: "warning"
      }
    ];
  if (e.notApplied)
    return [
      {
        line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
        level: "warning"
      }
    ];
  let n = e.forwarded - e.forwardedDisabled,
    r = e.forwardedDisabled,
    s = r > 0 ? ` (${r} you turned off here ${I(r, "stays", "stay")} off there)` : "";
  if (n === 0)
    return [
      {
        line: `The ${r} ${I(r, "plugin")} you turned off here ${I(r, "is", "are")} off in this cloud session too.`,
        level: "debug"
      }
    ];
  let i = e.loaded !== null && e.loaded >= n,
    k = I(n, "it", "them"),
    P =
      e.loaded === null
        ? `Sent your ${n} enabled ${I(n, "plugin")} to this cloud session${s}; it has not confirmed ${k} \u2014 /reload-plugins shows what loaded.`
        : e.loaded >= n
          ? `Using your ${n} ${I(n, "plugin")} in this cloud session${s}.`
          : e.loaded === 0
            ? `${n === 1 ? "Your enabled plugin could not" : `None of your ${n} enabled plugins could`} be installed in this cloud session yet${s} \u2014 the session is still fetching ${n === 1 ? "it" : "them"} or cannot reach ${n === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`
            : `Using ${e.loaded} of your ${n} plugins in this cloud session${s}; the other ${n - e.loaded} could not be installed there yet \u2014 the session is still fetching ${n - e.loaded === 1 ? "it" : "them"} or cannot reach ${n - e.loaded === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`,
    S = !e.messageWentFirst
      ? ""
      : e.loaded === null
        ? ` If ${I(n, "it", "they")} loaded, ${I(n, "it applies", "they apply")} from your next prompt; the one already sent may have run without ${k}.`
        : ` ${I(n, "It applies", "They apply")} from your next prompt; the one already sent may have run without ${k}.`;
  return [{ line: `${P}${S}`, level: i && !e.messageWentFirst ? "debug" : "notice" }];
}
function xt(e, n) {
  if (e.length === 0) return [];
  let r = e
      .slice(0, Ee)
      .map(({ id: k, reason: P }) => `${ei(k, { maxCodeUnits: 80 })} (${It[P]})`)
      .join("; "),
    s = e.length > Ee ? `; and ${e.length - Ee} more` : "";
  return [
    {
      line: `${n ? `Not using your plugins in this cloud session; ${e.length} ${I(e.length, "stays", "stay")} on this machine` : `${e.length} of your plugin choices ${I(e.length, "stays", "stay")} on this machine`}: ${r}${s}.`,
      level: "debug"
    }
  ];
}
var It = {
    invalid_id: "not a plugin@marketplace id",
    invalid_value: "its setting is not true or false",
    directory_loaded: "loaded with --plugin-dir, which exists only on this machine",
    unknown_builtin: "this build has no such built-in plugin",
    ambiguous_marketplace: "its marketplace name is spelled in conflicting ways here",
    blocked_by_policy: "your organization's policy does not allow it",
    not_installed_here:
      "only the repository\u2019s settings enable it and it is not installed on this machine; the cloud session goes by its own copy of the repository for that",
    unknown_marketplace: "its marketplace is not known on this machine",
    untrusted_for_folder:
      "its marketplace is declared by this folder's files, which you have not trusted for plugins",
    reserved_name_conflict:
      "its marketplace name is reserved for an official marketplace it does not match",
    not_provided_by_container:
      "its marketplace name is reserved for an official marketplace that cloud sessions do not have",
    local_marketplace: "its marketplace lives on this machine or your network",
    needs_credentials: "its marketplace needs credentials, which are never sent",
    insecure_transport: "its marketplace is fetched over an unencrypted connection",
    invalid_marketplace: "its marketplace source is malformed",
    over_cap: "over the limit of plugins one cloud session is sent",
    guard_builtin_not_own_choice:
      "a repository set it, and only your own settings may decide this one"
  },
  Mt = {
    disabled: "plugin forwarding is switched off in that container",
    not_managed_cloud_worker: "that kind of cloud session does not take plugins from your machine",
    entrypoint: "that kind of cloud session does not take plugins from your machine",
    hermetic: "that cloud session runs sealed off from outside configuration",
    not_admitted: "plugin forwarding is not available there",
    flag_off: "plugin forwarding is not switched on for your account there",
    flag_unsettled: "it could not confirm in time that plugin forwarding is on for your account",
    malformed: "it did not accept the request",
    other: "it did not accept the request"
  };
var Upr = "Synced from this computer:",
  Zeo = {
    files: "A message is waiting \xB7 esc to take it back",
    settings: "A message is waiting for your settings to upload \xB7 esc to take it back"
  },
  _Pe = {
    projectFiles: "Project files",
    settings: "Settings",
    plugins: "Plugins",
    localTools: "Local tools"
  },
  an = ["projectFiles", "settings", "plugins"],
  jt = ne.tick,
  Bpr = ne.cross,
  $t = "\u2026",
  Te = { mark: "synced" },
  Ae = { mark: "pending" };
function N(e) {
  return { mark: "not_synced", words: e };
}
function Ut(e) {
  switch (e.mark) {
    case "synced":
      return jt;
    case "pending":
      return $t;
    case "not_synced":
      return Bpr;
  }
}
function be(e, n) {
  let r = `${Ut(n)} ${e}`;
  switch (n.mark) {
    case "synced":
      return n.note === void 0 ? r : `${r} (${n.note})`;
    case "pending":
      return r;
    case "not_synced":
      return `${r} \u2014 ${n.words}`;
  }
}
function Wt(e) {
  return [
    Upr,
    ...an.flatMap((n) => {
      let r = e[n];
      return r === void 0 ? [] : [be(_Pe[n], r)];
    }),
    ...(e.localTools === void 0 ? [] : [be(_Pe.localTools, e.localTools)])
  ];
}
function Lcs(e) {
  let [n, ...r] = Wt(e),
    s = `${n} ${r.join(" \xB7 ")}`,
    i = jpr(e),
    k = i === void 0 ? s : `${s}. ${i}`,
    P = Wpr(e);
  if (P === void 0) return k;
  return i === void 0 ? `${k}. ${P}.` : `${k} ${P}.`;
}
function jpr(e) {
  return;
}
function Wpr(e) {
  if (e.repositoryTrust === void 0 || e.repositoryTrust === "nothing_to_mark") return;
  return lGs(e.repositoryTrust);
}
function Ncs(e, n) {
  return (
    e.whileClosed === n.whileClosed &&
    e.repositoryTrust === n.repositoryTrust &&
    en(e.localTools, n.localTools) &&
    an.every((r) => en(e[r], n[r]))
  );
}
function $cs(e, n, r) {
  if (n !== void 0 && e?.on !== !0) return N(n);
  if (e === void 0) return;
  return e.on
    ? { mark: "synced", note: `served by this machine (${e.name})` }
    : N("not serving this session");
}
function en(e, n) {
  return e === void 0 || n === void 0 ? e === n : Bt(e, n);
}
function Bt(e, n) {
  return be("", e) === be("", n);
}
function Fcs(e) {
  switch (e) {
    case "elsewhere":
      return "not_from_here";
    case "unknown":
    case "failed":
      return "lookup_failed";
    case "here_only":
      return "not_opted_in";
    case "held":
    case "nowhere":
    case "not_looked":
    case void 0:
      return "not_set_up";
  }
}
function Ucs(e, n) {
  return e.state === "absent" && e.reason === "not_offered" ? void 0 : Kt(e, n);
}
function Kt(e, n) {
  switch (e.state) {
    case "seeding":
    case "armed":
      return N(Se("off", void 0, n));
    case "absent":
      return N(Se(e.state, e.reason, n));
    case "off":
    case "stopped":
      return N(Se(e.state, e.reason, n));
  }
}
function eto(e) {
  return;
}
function Bcs(e) {
  return !1;
}
function sPn(e) {
  return { fromUpload: e?.kind === "bundle" };
}
var nn = "not set up for this session",
  Fe = {
    not_opted_in: nn,
    not_from_here: "this session was not started from this folder",
    not_set_up: nn,
    lookup_failed: "this computer could not check its records of this session"
  },
  Ht = {},
  tn = { ...Fe, ...Ht, seeded_elsewhere: Fe.not_from_here, not_seeded: Fe.not_set_up };
function Se(e, n, r, s) {
  return (
    (n !== void 0 && Object.hasOwn(tn, n) ? tn[n] : void 0) ??
    (e === "stopped" ? "sync stopped for this session" : "sync is off for this session")
  );
}
function jcs(e) {
  return (e.kind === "absent"
    ? e.reason
    : e.outcome?.kind === "none"
      ? e.outcome.reason
      : void 0) === "no_project_files"
    ? { kind: "absent", reason: "not_sent" }
    : e;
}
function Wcs(e) {
  if (e.kind === "absent") return N(le[e.reason]);
  let { outcome: n, readBack: r } = e;
  if (n === void 0) return Ae;
  let s = n.keptForCredential,
    i = n.keptAsLinks === void 0 ? [] : [Gt(n.keptAsLinks)];
  if (n.kind === "none") {
    let h = [
      ...(s === void 0
        ? []
        : [
            `${on(s)} kept here: ${I(s.others + (s.claudeMd ? 1 : 0), "it looks like it holds", "they look like they hold")} a credential`
          ]),
      ...i
    ];
    return N(h.length > 0 && n.reason === "nothing_to_send" ? h.join("; also ") : zt(n.reason));
  }
  let k = [...(s === void 0 ? [] : [`without ${on(s)}`]), ...i],
    P = k.length === 0 ? Te : { mark: "synced", note: k.join("; also ") },
    S = n.settingsRefused === void 0 ? void 0 : N(dn[n.settingsRefused]);
  switch (n.outcome) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return S ?? (r === void 0 ? P : rn(r, P));
    case "deadline":
      return S ?? (r === void 0 ? N("the upload took too long") : rn(r, P));
    case "raced":
      return N("another launch of this session sent its settings first");
    case "not_forwarded_at_create":
      return N(un);
    case "lane_full":
      return N("the session holds as many uploaded files as it may");
    case "unavailable":
      return N("not available for this session");
    case "unauthorized":
      return N(dZt);
    case "failed":
      return N("the upload failed");
    case "aborted":
      return N("the upload was cancelled");
  }
}
function on({ claudeMd: e, others: n }) {
  if (!e) return `${n} ${I(n, "file")}`;
  return n === 0 ? "CLAUDE.md" : `CLAUDE.md and ${n} more ${I(n, "file")}`;
}
function Gt({ names: e, more: n }) {
  let r = n > 0 ? `${e.join(", ")} and ${n} more` : e.join(" and ");
  return e.length + n === 1
    ? `${r} is a link, so it wasn't sent`
    : `${r} are links, so they weren't sent`;
}
function rn(e, n) {
  switch (e.verdict) {
    case "applied_before_first_ask":
    case "applied_late":
      return e.left === null ? n : N(j$n[e.left]);
    case "behind":
      return n;
    case "not_applied":
      return N("the cloud session could not apply them");
    case "stale":
      return N("the cloud session holds a different copy");
    case "not_seen":
      return N("the cloud session has not confirmed them");
    case "unreadable":
      return N("the cloud session's answer could not be read");
  }
}
var dn = {
    schema_rejected: "your settings file has errors",
    settings_too_large: "your settings file is too large",
    settings_unreadable: "your settings file could not be read"
  },
  Oe = "turned off by Anthropic for now (emergency switch)",
  Yt = "your rules don't apply on a self-hosted runner",
  ln = `not sent: ${Yt}`,
  un = "this machine has no record of sending them to this session",
  le = {
    unsupported: "not available in this version",
    not_enabled: "not enabled for this account",
    kept_on_this_machine: "you chose not to send them",
    not_decided: "not decided on this machine yet (/config, for new sessions)",
    launch_keeps_them: "this launch keeps them on this machine",
    not_sent: "not sent with this session",
    no_project_files: "not sent with this session"
  };
function zt(e) {
  switch (e) {
    case "flag_off":
      return le.not_enabled;
    case "no_consent":
      return "kept on this machine (see /config)";
    case "user_settings_disabled":
      return "this launch does not load your user settings";
    case "unbound":
      return "this session is not bound to this machine";
    case "aborted":
      return "the upload was cancelled";
    case "failed":
      return "preparing them failed";
    case "too_slow":
      return "preparing them took too long";
    case "no_project_files":
      return le.no_project_files;
    case "self_hosted_runner":
      return ln;
    case "home_unvettable":
      return "your settings folder could not be fully examined";
    case "nothing_to_send":
      return "nothing to send from this machine";
    case "rules_unreadable":
      return "a settings file here has errors";
  }
}
function Gcs(e, n, r) {
  return e === void 0
    ? { kind: "absent", reason: n }
    : { kind: "seed", outcome: e.outcome(), readBack: r };
}
var cn = {
  not_enabled: "not enabled for this account",
  switched_off: "switched off on this machine",
  attach_failed: "could not be sent from this machine"
};
function zcs(e) {
  if (e.kind === "pending") return Ae;
  if (e.kind === "absent") return N(cn[e.reason]);
  let { state: n } = e;
  if (n.muted) return N(Oe);
  if (!n.settled || n.answerPending) return Ae;
  switch (n.admission) {
    case "flag_off":
      return N("not enabled for this account");
    case "opted_out":
      return N("you chose not to send them");
    case "no_consent":
      return N(fn(n.source));
    case "admitted":
      return Vt(n);
  }
}
function fn(e) {
  switch (e) {
    case "not_asked":
      return "no plugins to send from this machine";
    case "read_failed":
      return "your plugin choices here could not be read";
    case "detached":
    case "internal_error":
      return "they could not be sent this time";
    case "bound_elsewhere":
      return "this machine could not show that this session is bound to it";
    case "binding_unknown":
      return "could not check this session's binding";
    case "muted":
      return Oe;
    case "untrusted_store":
      return "the saved answer here could be changed by this session; run /cloud-plugins to decide for it";
    case void 0:
    case "undecided":
    case "stored":
    case "decided":
      return "run /cloud-plugins to send them";
  }
}
function Vt(e) {
  let n = Fpr(e.notice);
  if (n !== void 0) return N(pn[n]);
  return e.notice === void 0 && e.gaveUp !== void 0 ? N(fn(e.gaveUp)) : Te;
}
var pn = {
  refused_by_worker: "this cloud session does not take plugins",
  not_applied: "the cloud session did not accept them",
  none_to_send: "no plugins to send from this machine",
  not_confirmed: "sent, not confirmed by the session",
  not_installed: "they could not be installed there",
  some_not_installed: "some could not be installed there"
};
function Kcs(e, n) {
  let r = e.directory_sync;
  return {
    projectFiles: N(
      Se(
        r.state === "stopped" ? "stopped" : "off",
        r.reason,
        { fromUpload: r.started_from_upload === !0 },
        n
      )
    ),
    settings: sn(e.settings),
    plugins: sn(e.plugins),
    ...qt(r),
    ...(e.repository_trust !== void 0 && { repositoryTrust: e.repository_trust })
  };
}
function qt(e) {
  let n = eto(
    e.state === "armed"
      ? {
          state: "armed",
          direction: e.direction ?? "pending",
          firstUpload:
            e.first_upload === void 0 ? null : e.first_upload === "landed" ? "landed" : "pending"
        }
      : { state: e.state }
  );
  return n === void 0 ? {} : { whileClosed: n };
}
function sn(e) {
  if (e === void 0) return N("not enabled for this launch");
  if (e.state === "forwarded") return Te;
  return N(e.reason !== void 0 && Zt(e.reason) ? gn[e.reason] : "not sent from this machine");
}
function Zt(e) {
  return Object.hasOwn(gn, e);
}
var gn = {
  unsupported: le.unsupported,
  flag_off: le.not_enabled,
  launch_flag: le.launch_keeps_them,
  declined: le.kept_on_this_machine,
  no_consent: "not decided yet on this machine",
  unbound: "this session is not bound to this machine",
  switched_off: cn.switched_off,
  bound_elsewhere: "this machine could not show that this session is bound to it",
  binding_unknown: "could not check this session's binding",
  not_seeded: le.not_sent,
  nothing_to_forward: "nothing to send from this machine",
  nothing_to_send: "nothing to send from this machine",
  rules_unreadable: "a settings file here has errors",
  plan_failed: "preparing them failed",
  user_settings_disabled: "this launch does not load your user settings",
  muted: Oe,
  too_slow: "preparing them took too long",
  no_project_files: le.no_project_files,
  self_hosted_runner: ln,
  home_unvettable: "your settings folder could not be fully examined",
  aborted: "the upload was cancelled",
  deadline: "the upload took too long",
  raced: "another launch of this session sent its settings first",
  not_forwarded_at_create: un,
  lane_full: "the session holds as many uploaded files as it may",
  unavailable: "not available for this session",
  unauthorized: dZt,
  failed: "the upload failed",
  ...dn,
  ...pn,
  unreadable: "your plugin choices here could not be read",
  could_not_send: "they could not be sent this time"
};
export {
  KFe,
  Dcs,
  mxt,
  Hcs,
  elt,
  I3t,
  $pr,
  Xeo,
  Fpr,
  Jeo,
  oPn,
  Qeo,
  Upr,
  Zeo,
  _Pe,
  Bpr,
  Lcs,
  jpr,
  Wpr,
  Ncs,
  $cs,
  Fcs,
  Ucs,
  eto,
  Bcs,
  sPn,
  jcs,
  Wcs,
  Gcs,
  zcs,
  Kcs
};

//# sourceMappingURL=chunk-nzn0v5d3.js.map
