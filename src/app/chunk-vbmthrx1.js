// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ay, l } from "./chunk-ewvf3tep.js";
import { g, f } from "./chunk-brszmkb3.js";
import { _ } from "./chunk-4kxznmzw.js";
import { yi } from "./chunk-a16y5hcz.js";
import { As } from "./chunk-ajtyjx88.js";
import { Co, _u, Jt, Xi, aC, Kl, Ort, f_ } from "./chunk-r1dvrqha.js";
import { Dd } from "./chunk-2nwr73hs.js";
import { em } from "./chunk-tzm7jehf.js";
import { Nft } from "./chunk-v3dqhn7m.js";
import { Ct, rtt, tc, ym } from "./chunk-khq9hq2s.js";
import { w1n } from "./chunk-2mvh88ym.js";
import { QY, sCe, TLe } from "./chunk-fh50nzzj.js";
import { tp } from "./chunk-th8ddxwf.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { WW, zOt } from "./chunk-8xk8sdq7.js";
import { OIe, kae, ite, G3e, ate } from "./chunk-w40awxqs.js";
import { vXt } from "./chunk-867pw0w3.js";
import { $Ot, UQt } from "./chunk-21pb1ecp.js";
import { CT } from "./chunk-p6azhqzg.js";
import { H } from "./chunk-p8tprgqa.js";
import { u } from "./chunk-0bqrj5ah.js";
var p = "README.md",
  Z6e = "project/README.md",
  K = 12000,
  Y = 7000,
  q = 700,
  SXt = {
    interrupted: "interrupted before it could be read",
    timeout: "reading it took too long",
    failed: "the read failed unexpectedly"
  };
function tve(e, t, n, o) {
  let r = () =>
    n.abortController.signal.aborted ? "interrupted" : t.aborted ? "timeout" : "failed";
  return new Promise((s) => {
    let i = () => s(o(r()));
    if (t.aborted) {
      (e.catch(() => {}), i());
      return;
    }
    (t.addEventListener("abort", i, { once: !0 }),
      e.then(
        (d) => {
          (t.removeEventListener("abort", i), s(d));
        },
        (d) => {
          t.removeEventListener("abort", i);
          let a = r();
          if (a === "failed") l(d);
          s(o(a));
        }
      ));
  });
}
function Lys(e, t) {
  let n = e.find((o) => o.default !== void 0);
  if (n === void 0 || n.default === void 0)
    return e.length === 0
      ? {
          url: void 0,
          why: "the account lists no design systems \u2014 build without one unless the user names one",
          code: "default_none_listed"
        }
      : {
          url: void 0,
          why: `no default is set among the ${e.length}${t ? " or more" : ""} design systems the account lists \u2014 name the listed systems to the user and ask which to use before creating, then read their pick with its own call; with nobody to ask, build without one; they are ${J(e)}`,
          code: "default_unmarked"
        };
  return { url: n.url, source: { default: n.default, title: n.title } };
}
function J(e) {
  let n = e
    .slice(0, 3)
    .map((o) => `${_(em(aC(o.title, 40)) ?? "Untitled")} ${Xi(o.url, "(unrecognized address)")}`);
  return e.length > 3 ? `${n.join(", ")}, and ${e.length - 3} more` : n.join(", ");
}
async function Gao(e, t, n, o, r, s) {
  let i = Jt(e);
  if (i === null || i.env !== Co())
    return {
      ok: !1,
      why: "it is not an Artifact URL of this session's claude.ai",
      code: "not_a_link"
    };
  let a = [...(OIe() ? ["files"] : []), ...(o ? ["store"] : [])];
  if (a.length === 0) return { ok: !1, ...M("off", "off") };
  if (a.every((b) => x(b, i, e, n, r))) return { ok: !1, why: z, code: "rule" };
  let c = { signal: t, credentials: n.credentials },
    m = await tve(
      tp(i, { toolUseId: n.toolUseId, abortController: { signal: t }, ...c }, s).then(() => {
        return;
      }),
      t,
      n,
      (b) => b
    );
  if (m !== void 0)
    return { ok: !1, why: `${SXt[m]} \u2014 read it with its own call`, code: `probe_${m}` };
  let w = Ct(i.slug);
  if (rtt(w))
    return {
      ok: !1,
      why: "it is in another of the user's organizations, which this login cannot read \u2014 say so rather than guess its values",
      code: "other_org"
    };
  let y = tc(w);
  if (ym(i.slug) && !As(n.agentContext)) return { ok: !1, why: X, code: "notice_pending" };
  await tve($Ot(i, c), t, n, () => {
    return;
  });
  let h = x("files", i, e, n, r),
    A = x("store", i, e, n, r);
  return {
    ok: !0,
    parsed: i,
    owned: y,
    filesRuled: h,
    storeRuled: A,
    filesOk: OIe() && !h && I(i, y, "files", n),
    storeOk: o && !A && I(i, y, "store", n)
  };
}
function zao(e, t, n, o) {
  return (
    !(ym(e.slug) && !As(n.agentContext)) &&
    !x("files", e, t, n, o) &&
    I(e, tc(Ct(e.slug)), "files", n)
  );
}
async function Nys(e, t, n, o, r, s) {
  let i = { default: t.default, title: t.title },
    d = (R, T) => (
      f("artifact_design_system_guide", T),
      { design_system: { url: e, ...i, unavailable: R } }
    ),
    a = await Gao(e, n, o, r, s, "design_system_guide");
  if (!a.ok) return d(a.why, a.code);
  let { parsed: c, owned: m, filesRuled: w, storeRuled: y, filesOk: h, storeOk: A } = a,
    b = j(OIe(), w, h),
    D = j(r, y, A);
  if (!h && !A) {
    let R = M(b, D);
    return d(R.why, R.code);
  }
  let [E, V] = await Promise.all([A ? se(c, n, o) : S, h ? ne(c, n, o) : te]),
    C = oe(V),
    v = C.doc?.path === Z6e,
    F = !v && E.doc !== void 0,
    N = v ? C.doc : (E.doc ?? C.doc);
  if (N === void 0) {
    let R = E.why ?? C.why,
      T = E.moved === !0 && b === "off" ? Z : M(b, D);
    return R === void 0 ? d(T.why, T.code) : d(R, "nothing_read");
  }
  if (!m) A_r(c, F ? "read_db" : "read_file", o);
  g("artifact_design_system_guide", { store: F, project: v, owned: m });
  let P =
    F || v
      ? void 0
      : D === "ruled"
        ? `a permission rule governs reading its store, ${O}`
        : D === "unconsented"
          ? `its store needs approval to read here, ${O}`
          : E.unchecked === !0
            ? `its store could not be checked, ${O}`
            : E.keptButUnread === !0
              ? `its store's README is empty or could not be read here, ${O}`
              : void 0;
  return {
    design_system: {
      url: e,
      ...i,
      ...(F && { store: !0 }),
      docs: [N],
      ...(P !== void 0 && { unavailable: P })
    }
  };
}
var k = "read it with its own call, which may ask the user",
  z = "a permission rule governs reading it \u2014 read it with its own call and that rule decides",
  O = "so this is its published README, which may be older than the one in its store",
  Z = { why: "it moved to its own files, which this session does not serve", code: "nothing_read" };
function x(e, t, n, o, r) {
  return e === "files"
    ? HUe(t, n, "read_file", o, { pipelineRan: r }) ||
        HUe(t, n, "read_file", o, { pipelineRan: r, fields: { path: Z6e } })
    : HUe(t, n, "read_db", o, { pipelineRan: r }) ||
        HUe(t, n, "read_db", o, { pipelineRan: r, fields: L });
}
function j(e, t, n) {
  return !e ? "off" : t ? "ruled" : n ? "read" : "unconsented";
}
function M(e, t) {
  let n = [e, t].filter((o) => o !== "read" && o !== "off");
  if (e !== "read" && t !== "read" && n.length === 0)
    return { why: "this session serves neither its files nor its store", code: "not_served" };
  if (n.includes("unconsented"))
    return e === "read" || t === "read"
      ? {
          why: `its ${e === "unconsented" ? "files" : "store"} cannot be read here without the user's approval \u2014 ${k}`,
          code: "nothing_read"
        }
      : { why: X, code: "not_consented" };
  if (n.includes("ruled")) return { why: z, code: "rule" };
  return e === "off"
    ? {
        why: "its store holds no README for it, and this session does not serve its files",
        code: "nothing_read"
      }
    : {
        why:
          t === "off"
            ? "it has no README to read here (this session does not read stores)"
            : "it has no README to read",
        code: "nothing_read"
      };
}
var X = `reading it here first needs the user's approval, which this call does not ask for \u2014 ${k}`,
  L = { db_op: "get", collection: "ds", doc_id: "meta" },
  Q = { read_file: { path: p }, read_db: { db_op: "get", collection: "files", doc_id: p } };
function HUe(e, t, n, o, r = {}) {
  let s = r.fields ?? (n === "list_files" ? {} : Q[n]),
    i = ae(o);
  return (
    n === "read_file"
      ? [
          { action: n, fields: s },
          { action: "read", fields: s }
        ]
      : n === "list_files"
        ? [
            { action: n, fields: s },
            { action: "list", fields: { ...s, scope: "files" } }
          ]
        : [{ action: n, fields: s }]
  ).some((a) =>
    ["deny", "ask"].some(
      (c) =>
        CT(i, e, t, c, {
          action: a.action,
          fields: a.fields,
          wholeToolAskAnswered: r.pipelineRan === !0
        }) !== null
    )
  );
}
function I(e, t, n, o) {
  if (!WW(o)) {
    let r = ate(e, o, n === "store");
    return !r.ask || (r.remember === "artifact" && sCe(r, e.slug, TLe(t, e)));
  }
  return n === "store" ? t || G3e(o, e.slug) : kae(o, e, "files", "land");
}
function A_r(e, t, n) {
  if (!WW(n) && !QY("foreign_read", e.slug)) {
    let o = t === "read_db" ? G3e(n, e.slug) : ite(n, e.slug);
    zOt(t, e.slug, void 0, o || void 0);
  }
}
var S = { doc: void 0, why: void 0 };
async function G(e, t, n, o, r) {
  let s = await tve(
    Nft(e, t, o, r.credentials, "artifact_design_system_guide_read"),
    o,
    r,
    (a) => ({ err: SXt[a], late: a })
  );
  if (s.err === null) return s.html.trim() === "" ? S : { doc: U(s.html, t), why: void 0 };
  if (s.missingFile === !0 || (n && s.status === 404 && s.errorCode === void 0)) return S;
  let d = s.late !== void 0 ? SXt[s.late] : "the content host refused or failed";
  return { doc: void 0, why: ee(t, d), failed: d };
}
var ee = (e, t) => `its ${e} could not be fetched (${t}) \u2014 ${k}`,
  te = { root: S, project: S };
async function ne(e, t, n) {
  let [o, r] = await Promise.all([G(e, p, !1, t, n), G(e, Z6e, !0, t, n)]);
  return { root: o, project: r };
}
function oe({ project: e, root: t }) {
  if (e.doc !== void 0 || t.doc !== void 0) return e.doc !== void 0 ? e : t;
  if (e.failed !== void 0 && t.failed !== void 0)
    return {
      doc: void 0,
      why: `its ${e.failed === t.failed ? `${Z6e} and ${p} could not be fetched (${t.failed})` : `${Z6e} (${e.failed}) and ${p} (${t.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user`
    };
  return e.why !== void 0 ? e : t;
}
var re = new Set(["store_unavailable", "busy", "quota_or_rate", "quota_exceeded", "upstream_auth"]);
function W(e, t, n, o, r) {
  return tve(
    w1n(
      r.session.host,
      { slug: e.slug, op: "get", collection: t, docId: n },
      o,
      r.storageV5,
      r.credentials
    ),
    o,
    r,
    (s) => ({ kind: "error", code: "store_unavailable", message: SXt[s], reason: s })
  );
}
async function se(e, t, n) {
  let [o, r] = await Promise.all([W(e, L.collection, L.doc_id, t, n), W(e, "files", p, t, n)]);
  if (o.kind !== "ok")
    return o.kind !== "error" || o.code === "not_declared"
      ? { doc: void 0, why: void 0 }
      : {
          doc: void 0,
          why: `its store could not be read (${o.message}) \u2014 ${k}`,
          ...(re.has(o.code) && { unchecked: !0 })
        };
  if (ie(o.docs[0]?.data)) return { doc: void 0, why: void 0, moved: !0 };
  let s = de(r);
  return {
    ...(s === void 0 && r.kind !== "not_found" && { keptButUnread: !0 }),
    doc: s === void 0 ? void 0 : U(s),
    why:
      r.kind === "error"
        ? `its store could not be read (${r.message}) \u2014 ${k}`
        : r.kind === "ok" && s === void 0
          ? typeof r.docs[0]?.data.data === "string"
            ? "its README.md in the store is empty"
            : "its README.md is a stored file rather than an inline document \u2014 read it from the system with its own call"
          : void 0
  };
}
function ie(e) {
  let t = H(e) ? e.movedTo : void 0;
  return H(t) && typeof t.path === "string" && typeof t.at === "string";
}
function de(e) {
  if (e.kind !== "ok") return;
  let t = e.docs[0]?.data.data;
  return typeof t === "string" && t.trim() !== "" ? t : void 0;
}
function C_r(e, t, n) {
  let o = Kl(t),
    r = Array.from(o).length;
  return r > n
    ? { path: e, text: Kl(yi(o, n)), chars: r, clipped: !0 }
    : { path: e, text: o, chars: r };
}
var le = [
    `
## Consuming this system (generated`,
    `
## Index (generated`
  ],
  B = "[\u2026authored guide clipped here; its generated tail follows\u2026]";
function U(e, t = p) {
  let n = K,
    o = Kl(e),
    r = Array.from(o).length;
  if (r <= n) return { path: t, text: o, chars: r };
  let s = le.map((c) => o.lastIndexOf(c)).find((c) => c !== -1) ?? -1;
  if (s === -1) return C_r(t, o, n);
  let i = yi(o.slice(s), Y),
    d = n - Array.from(i).length - Array.from(B).length - 2,
    a = yi(o.slice(0, s), d);
  return {
    path: t,
    text: Kl(`${a}
${B}
${i}`),
    chars: r,
    clipped: !0
  };
}
function ue(e, t, n) {
  if (n)
    return `Its other cards are not attached: read one when you need it with ${Dd('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "project/api/tokens.md" (palette, type, fonts); "project/tokens.json" (exact token values); or, where the README's index is shown, a card it names, at "project/" followed by the path the index gives.`;
  return t
    ? `Its other cards are not attached: read one when you need it with ${Dd('action "read_db" and `db_op`: "get"', () => `the ${_u} tool, action "get"`)}, \`url\`: ${_(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.`
    : `Its other cards are not attached: read one when you need it with ${Dd('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "api/tokens.md" (palette, type, fonts); "tokens.json" (exact token values); or, where the README's index is shown, a card it names, by its path there.`;
}
function wXt(e, t) {
  let n = Array.from(e).length > t;
  return (
    Kl(yi(e, t)).replace(f_, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() +
    (n ? " \u2026" : "")
  );
}
function R_r(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    !("docs" in e) ||
    !Array.isArray(e.docs) ||
    !e.docs.some((t) => t !== null && typeof t === "object" && "text" in t && t.text !== "")
  )
    return;
  return {
    ...e,
    docs: e.docs.map((t) => (t !== null && typeof t === "object" ? { ...t, text: "" } : t))
  };
}
function $ys(e) {
  let t = u(vXt()).safeParse({ design_system: e }),
    n = t.success ? t.data.design_system : void 0;
  if (n === void 0) return { text: "", attached: !1 };
  let o = n.unavailable === void 0 ? void 0 : wXt(n.unavailable, q);
  if (typeof n.url !== "string")
    return {
      text: `

[Design system not attached \u2014 ${o ?? "no default could be found"}.]`,
      attached: !1
    };
  let r = Xi(n.url, "(unrecognized address)"),
    s =
      typeof n.title === "string"
        ? ` ${_(wXt(Ort(em(aC(n.title, 200)) ?? ""), 200) || "Untitled")}`
        : "",
    i = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`,
    d = (n.docs ?? []).find((h) => (h.path === p || h.path === Z6e) && h.text !== "");
  if (d === void 0)
    return {
      text: `

[Design system not attached (${i}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`,
      attached: !1
    };
  let a = U(d.text),
    c = a.clipped === !0 || d.clipped === !0,
    m = Math.max(a.chars, d.chars),
    w =
      " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.",
    y = c
      ? `
[\u2026clipped at ${Array.from(a.text).length} of ${m} characters; read the whole file from the design system if you need the rest]`
      : "";
  return {
    text: `

${ay}
Design system ${i}.${w} Its ${d.path} (${n.store === !0 ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${c ? " unless you need the clipped remainder" : ""}.${o !== void 0 ? ` (${o}.)` : ""} ${ue(r, n.store === !0, d.path === Z6e)}

${d.path}:
${UQt(a.text + y)}`,
    attached: !0
  };
}
export { Z6e, SXt, tve, Lys, Gao, zao, Nys, HUe, A_r, C_r, wXt, R_r, $ys };

//# sourceMappingURL=chunk-vbmthrx1.js.map
