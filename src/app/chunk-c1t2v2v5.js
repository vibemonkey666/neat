// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, no } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { R, E } from "./chunk-fs43t96t.js";
import { _, ma, te, yn, t } from "./chunk-4kxznmzw.js";
import { pie } from "./chunk-jazcqqqr.js";
import { I, re, Ft } from "./chunk-a16y5hcz.js";
import { ko, a6r, uB, _M, hTt, t6, Gli, ok, zli, Ab } from "./chunk-5rw2zfa0.js";
import { w } from "./chunk-7m7t89vx.js";
import { nD, vk } from "./chunk-t776tmr7.js";
import { Ea } from "./chunk-0bynhaq9.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Me } from "./chunk-rf7g1m78.js";
import { We } from "./chunk-pgnjjhxv.js";
import { le } from "./chunk-vw9e882a.js";
import { XTt } from "./chunk-8r2m7vfp.js";
import { os } from "./chunk-jtb5bzvb.js";
import { HAt, xR } from "./chunk-13nwb0xt.js";
import { Hfe, gt, yst, un, lSe, yr } from "./chunk-wr0p4ndg.js";
import { gwn } from "./chunk-7c3thgax.js";
import { s, n, Kr } from "./chunk-h56pfqh7.js";
import { lt, an } from "./chunk-kk8f9f8q.js";
import { cce, Jn } from "./chunk-d5zj5299.js";
import { qa } from "./chunk-gmxe4kpt.js";
import { Gte, nTo, S0t, Brn, oTo, GN } from "./chunk-j0tbz6ra.js";
import { qC } from "./chunk-n3589fe4.js";
import { ne, tan, KVn } from "./chunk-39xmt821.js";
import { mx, Lk, WA, S8 } from "./chunk-s4n2rnah.js";
import { CSr } from "./chunk-dtja45gv.js";
import { wE } from "./chunk-trysbqrx.js";
import { ZSs, _Ln, ews, bLn, eQt } from "./chunk-svcn34tw.js";
import { Te } from "./chunk-pbpv20s6.js";
import { Fat, fpr, Uat, ppr, Bat, yeo, Seo, weo, veo } from "./chunk-mn51br4e.js";
import { we } from "./chunk-bf8qkzmg.js";
import { V } from "./chunk-j32s98r9.js";
import { Ee } from "./chunk-xzcese97.js";
import { ST } from "./chunk-en1bapsd.js";
import { Tr } from "./chunk-nh2498vy.js";
import { Imr } from "./chunk-q4twv14b.js";
import { Do } from "./chunk-bffrn2r2.js";
import { Ho } from "./chunk-6dqmkjzd.js";
import { vs } from "./chunk-artk45zy.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { BW } from "./chunk-4067vyrh.js";
import { fOt, xSr } from "./chunk-wab8bs58.js";
import { be, P, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { Jye } from "./chunk-b10syt1j.js";
import { S } from "./chunk-a2y39866.js";
j();
import { join as Ui } from "path";
var Hi = 4000,
  Ji = 2000,
  hn = 3,
  bn = [mx, Lk, WA, qC, S8, qa];
async function xn(o, i, { promptFramed: l } = {}) {
  let u = Ui(BW(o), `agent-${i}.jsonl`),
    d;
  try {
    d = await XTt(u);
  } catch (U) {
    return (
      t(
        `readWorkflowAgentTranscript: ${u} not readable (${U instanceof Error ? U.message : String(U)})`
      ),
      null
    );
  }
  let p = d.filter(GN),
    h = p.findIndex((U) => U.type === "user"),
    b = h === -1 ? void 0 : p[h];
  for (let U = h + 1; h !== -1 && U < p.length; U++) {
    let B = p[U];
    if (B === void 0 || B.type !== "user" || B.isMeta === !0) break;
    b = B;
  }
  let x = b?.type === "user" ? b.message?.content : void 0,
    v = typeof x === "string" ? x : ds(x).trim(),
    k = l ? ZSs(v) : v,
    T = [],
    A = _Ln(),
    L = new Map(),
    D,
    W = new Map(),
    q = { pendingCreates: new Map(), tasks: new Map() },
    K = void 0,
    z = "",
    M = "";
  for (let [U, B] of p.entries()) {
    if (B.type === "user") {
      let G = B.message?.content;
      if (Array.isArray(G))
        for (let Y of G) {
          if (!yo(Y) || Y.type !== "tool_result" || typeof Y.tool_use_id !== "string") continue;
          let at = Y.is_error === !0;
          if (
            (bLn(A, Y.tool_use_id, B.isVirtual === !0, at),
            B.isVirtual !== !0 && A.uses.has(Y.tool_use_id))
          )
            D = Y.tool_use_id;
          let H = Gi(Y.content),
            et = H;
          (W.set(Y.tool_use_id, { ...cs(et, Ji), isError: at }),
            Brn(q, { tool_use_id: Y.tool_use_id, is_error: at, content: H }));
        }
      continue;
    }
    if (B.type !== "assistant" || !Array.isArray(B.message?.content)) continue;
    let tt = B.message.id || `entry-${U}`;
    ((M = tt), (D = void 0));
    let nt = "";
    for (let G of B.message.content) {
      if (!yo(G)) continue;
      if (G.type === "tool_use" && typeof G.name === "string") {
        if (
          (ews(A, { id: G.id, name: G.name }, B.isVirtual === !0),
          B.isVirtual === !0 && typeof G.id === "string" && D !== void 0)
        )
          L.set(G.id, D);
        if (
          (T.push({
            id: typeof G.id === "string" ? G.id : "",
            name: G.name,
            input: G.input,
            responseKey: tt
          }),
          typeof G.id === "string" && G.id !== "")
        )
          S0t(q, G);
        if (G.name === mx) K = G.input;
        if (G.name === qa && G.input !== void 0)
          try {
            nt = _(G.input, null, 2);
          } catch {
            nt = String(G.input);
          }
      } else if (G.type === "text" && typeof G.text === "string") nt += G.text;
    }
    if (nt) z = nt;
  }
  let J = T,
    O = (U) => !1,
    Z = F(J, (U) => !O(U)),
    ct = J.map((U) => {
      let B = U.responseKey === M,
        tt = O(U);
      if (!tt) Z--;
      let nt = tt || ((Z < hn || B) && !bn.includes(U.name));
      return {
        name: U.name,
        summary: tt ? "" : eQt(U.input, U.name),
        fromLastResponse: B,
        fields: nt && !tt ? zi(U.input) : [],
        result: Bi(U.id ? W.get(U.id) : void 0, nt)
      };
    }),
    pt = oTo(q),
    bt = pt.length > 0 ? pt : nTo(K);
  return { prompt: k, toolCalls: ct, finalText: z, tasks: bt };
}
var Vi = { head: "", lineCount: 0, truncatedChars: 0 };
function Bi(o, i) {
  if (!o) return null;
  return i ? o : { ...Vi, isError: o.isError };
}
function cs(o, i) {
  let l = o.trimEnd(),
    u = l.length > i ? re(l, i) : l;
  return {
    head: u,
    lineCount:
      Ft(
        l,
        `
`
      ) + 1,
    truncatedChars: l.length - u.length
  };
}
function yo(o) {
  return typeof o === "object" && o !== null && typeof o.type === "string";
}
function ds(o) {
  if (!Array.isArray(o)) return "";
  return o
    .filter(yo)
    .flatMap((i) => (i.type === "text" && typeof i.text === "string" ? i.text : [])).join(`
`);
}
function Gi(o) {
  if (typeof o === "string") return o;
  let i = ds(o);
  if (i || !Array.isArray(o)) return i;
  let l = o.filter(yo);
  return l.length === 0 ? "" : `(${l.map((u) => u.type).join(", ")} content)`;
}
function zi(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [["input", o]]).map(
    ([l, u]) => {
      let d;
      if (typeof u === "string") d = u;
      else
        try {
          d = _(u) ?? String(u);
        } catch {
          d = String(u);
        }
      return { key: l, ...cs(d, Hi) };
    }
  );
}
var us = "  ",
  Yi = 40,
  ms = 8,
  Qi = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
  Cn = ": ";
function gs(o, i) {
  let l = o.trim();
  if (i < ms || (!l.startsWith("{") && !l.startsWith("["))) return null;
  try {
    let u = [];
    return (bs(u, te(l), 0, void 0, !1, i), u);
  } catch {
    return null;
  }
}
function Tn(o, i) {
  let l = Math.floor(Math.max(0, i - ms) / us.length);
  return us.repeat(Math.min(o, l));
}
function hs(o) {
  return o.replace(Qi, (i) => `\\u${i.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function ps(o) {
  return hs(ma(o));
}
function wn(o, i) {
  return o === void 0
    ? []
    : [
        { ...o, text: gt(o.text, i - Cn.length) },
        { text: Cn, dimColor: !0 }
      ];
}
function fs(o, i, l, u, d, p) {
  if (l) {
    let x = Tn(i, d);
    o.push([
      { text: x },
      { ...l, text: gt(l.text, d - x.length - 1) },
      { text: ":", dimColor: !0 }
    ]);
  }
  let h = Tn(l ? i + 1 : i, d),
    b = d - h.length;
  for (let x of u) {
    if (x === "") {
      o.push([{ text: "" }]);
      continue;
    }
    for (let v of yst(x, b)) o.push([p ? { text: h + v, color: p } : { text: h + v }]);
  }
}
function bs(o, i, l, u, d, p) {
  let h = Tn(l, p),
    b = p - h.length,
    x = d ? "," : "",
    v = typeof u === "string" ? { text: ps(u), color: "permission" } : void 0;
  if (typeof i === "object" && i !== null) {
    if (l >= Yi) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let L = Array.isArray(i) ? i.map((q, K) => [K, q]) : Object.entries(i),
      [D, W] = Array.isArray(i) ? ["[", "]"] : ["{", "}"];
    if (L.length === 0) {
      let q = D + W + x;
      o.push([{ text: h }, ...wn(v, b - q.length), { text: q, dimColor: !0 }]);
      return;
    }
    o.push([{ text: h }, ...wn(v, b - D.length), { text: D, dimColor: !0 }]);
    for (let q = 0; q < L.length; q++) {
      let [K, z] = L[q];
      bs(o, z, l + 1, K, q < L.length - 1, p);
    }
    o.push([{ text: h }, { text: W + x, dimColor: !0 }]);
    return;
  }
  if (
    typeof i === "number" &&
    (Number.isInteger(i) ? !Number.isSafeInteger(i) : !Number.isFinite(i))
  )
    throw RangeError("JSON outcome number not representable");
  if (
    typeof i === "string" &&
    i.includes(`
`)
  ) {
    fs(
      o,
      l,
      v ?? (typeof u === "number" ? { text: `[${u}]`, dimColor: !0 } : void 0),
      i
        .replace(/(?:\r?\n)+$/, "")
        .split(/\r?\n/)
        .map((L) => Hfe(hs(L))),
      p,
      void 0
    );
    return;
  }
  let k = typeof i === "string" ? ps(i) : String(i),
    T = typeof i === "string" ? "success" : "warning";
  if ((v === void 0 ? 0 : le(v.text) + Cn.length) + le(k) + x.length <= b) {
    o.push([
      { text: h },
      ...wn(v, b),
      { text: k, color: T },
      ...(x ? [{ text: x, dimColor: !0 }] : [])
    ]);
    return;
  }
  fs(o, l, v, [k + x], p, T);
}
j();
import { join as ws } from "path";
import { mkdir as Xi, writeFile as Zi } from "fs/promises";
import { dirname as kn, join as Sn } from "path";
var Ve = "Use a different name or overwrite.";
async function tl(o, i) {
  if (o === "user") return fOt();
  if (no() !== null)
    throw (
      f("workflow_save", "project_scope_unavailable"),
      Error(
        "Project-scope workflow saves are unavailable in a session started with --project-config-root"
      )
    );
  let l = gwn(i);
  if (l === null) return Sn(i, ".claude", "workflows");
  let u = (await Gte("workflows", i))[0];
  if (u !== void 0) return u;
  return Sn(l, ".claude", "workflows");
}
async function vn(o, i) {
  let l = cce(o.name),
    u = await tl(o.scope, o.cwd),
    d = Sn(u, `${l}.js`);
  if (i !== void 0 && o.scope === "user") return el(i, l, d, o);
  let p = o.scope !== "user" && !pie(kn(u));
  if (p)
    try {
      await HAt(kn(kn(u)), u);
    } catch (h) {
      throw (m("workflow_save", "write_failed"), h);
    }
  await Xi(u, { recursive: !0, mode: 448 });
  try {
    if (o.overwrite) await xR(d, o.script, { encoding: "utf8", mode: 384, checkParentDir: p });
    else await Zi(d, o.script, { encoding: "utf8", mode: 384, flag: "wx" });
  } catch (h) {
    if (!o.overwrite && E(h) === "EEXIST")
      throw (
        f("workflow_save", "already_exists"),
        Error(`Dynamic workflow "${l}" already exists at ${d}. ${Ve}`)
      );
    throw (m("workflow_save", "write_failed"), h);
  }
  return xs(l, d, o);
}
async function xs(o, i, l) {
  xSr();
  let { clearCommandMemoizationCaches: u } = await import("./chunk-wv7kvcd3.js");
  return (
    u(),
    g("workflow_save"),
    a("tengu_workflow_saved", {
      scope: c(l.scope),
      overwrite: l.overwrite,
      script_size_chars: l.script.length
    }),
    { name: o, path: i, scope: l.scope }
  );
}
async function el(o, i, l, u) {
  let d = await o.write(
    We.userConfigDir("workflows", [`${i}.js`]),
    u.script,
    u.overwrite
      ? { mode: 384, publishDiscipline: "atomic" }
      : { mode: 384, precondition: { type: "ifAbsent" } }
  );
  if (!d.ok) {
    if (!u.overwrite && d.error.code === "AlreadyExists")
      throw (
        f("workflow_save", "already_exists"),
        new R(`Dynamic workflow "${i}" already exists at ${l}. ${Ve}`, "workflow name collision")
      );
    throw (
      m("workflow_save", "write_failed"),
      new R(`Workflow save failed: ${d.error.code} (${l})`, "workflow save failed")
    );
  }
  return xs(i, l, u);
}
function xl(cn) {
  return cn.cwd;
}
function wl(go) {
  return go === "project" ? "user" : "project";
}
function URt(o) {
  let M = w(54),
    { script: i, defaultName: l, onDone: u } = o,
    { storageV5: d } = Me(),
    { columns: p } = Te(),
    h = ST(xl),
    [b, x] = y(l),
    [v, k] = y(l.length),
    [T, A] = y("project"),
    [L, D] = y(!1),
    [W, q] = y(null),
    [K, z] = y(null),
    J;
  if (M[0] === S)
    ((J = () => {
      (q(null), z(null));
    }),
      (M[0] = J));
  else J = M[0];
  let O = J,
    Z;
  if (M[1] === S)
    ((Z = (ct) => {
      (x(ct), O());
    }),
      (M[1] = Z));
  else Z = M[1];
  let pt = Z,
    bt;
  if (
    M[2] !== W ||
    M[3] !== h ||
    M[4] !== b ||
    M[5] !== u ||
    M[6] !== L ||
    M[7] !== T ||
    M[8] !== i ||
    M[9] !== d
  )
    ((bt = () => {
      if (L) {
        return;
      }
      let U = b.trim();
      if (!U) {
        return;
      }
      (D(!0),
        z(null),
        vn({ name: U, scope: T, script: i, overwrite: W !== null, cwd: h }, d)
          .then((B) => {
            u(
              `Dynamic workflow saved to ${B.path}. Invoke as /${B.name} or Workflow({name: "${B.name}"}) in future sessions.`
            );
          })
          .catch((tt) => {
            let nt = tt instanceof Error ? tt.message : String(tt);
            if (nt.includes(Ve)) {
              let G = nt.match(/at (.+?)\. /);
              q(G?.[1] ?? "(unknown path)");
            } else z(nt);
            D(!1);
          }));
    }),
      (M[2] = W),
      (M[3] = h),
      (M[4] = b),
      (M[5] = u),
      (M[6] = L),
      (M[7] = T),
      (M[8] = i),
      (M[9] = d),
      (M[10] = bt));
  else bt = M[10];
  let Y = bt,
    at;
  if (M[11] !== u) ((at = () => u()), (M[11] = u), (M[12] = at));
  else at = M[12];
  let H = at,
    et;
  if (M[13] === S) ((et = { context: "Settings", isActive: !0 }), (M[13] = et));
  else et = M[13];
  lt("confirm:no", H, et);
  let ut;
  if (M[14] === S)
    ((ut = (Mt) => {
      if (Mt.key === "tab") (Mt.preventDefault(), A(wl), O());
    }),
      (M[14] = ut));
  else ut = M[14];
  let Tt = ut,
    Bt;
  if (M[15] !== b) ((Bt = cce(b.trim() || "workflow")), (M[15] = b), (M[16] = Bt));
  else Bt = M[16];
  let Xt = Bt,
    Et;
  if (M[17] !== T || M[18] !== Xt)
    ((Et = T === "project" ? `.claude/workflows/${Xt}.js` : os(ws(fOt(), `${Xt}.js`))),
      (M[17] = T),
      (M[18] = Xt),
      (M[19] = Et));
  else Et = M[19];
  let xt = Et;
  const Dt = T === "project" ? "Project" : "User";
  let ue;
  if (M[20] !== Dt || M[21] !== xt)
    ((ue = r(n, { dimColor: !0, children: [Dt, " scope \xB7 ", xt] })),
      (M[20] = Dt),
      (M[21] = xt),
      (M[22] = ue));
  else ue = M[22];
  const pe = W ? "overwrite" : "save";
  let qe;
  if (M[23] !== pe) ((qe = e(V, { chord: "enter", action: pe })), (M[23] = pe), (M[24] = qe));
  else qe = M[24];
  let rn, uo;
  if (M[25] === S)
    ((rn = e(V, { chord: "tab", action: "toggle scope" })),
      (uo = e(V, { chord: "escape", action: "cancel" })),
      (M[25] = rn),
      (M[26] = uo));
  else ((rn = M[25]), (uo = M[26]));
  let Zt;
  if (M[27] !== qe) ((Zt = r(Ee, { children: [qe, rn, uo] })), (M[27] = qe), (M[28] = Zt));
  else Zt = M[28];
  let po;
  if (M[29] === S) ((po = e(n, { children: "Save as:" })), (M[29] = po));
  else po = M[29];
  let sn;
  if (M[30] === S) ((sn = e(n, { children: ">" })), (M[30] = sn));
  else sn = M[30];
  const fo = !L,
    mo = !L;
  let st;
  if (M[31] !== p || M[32] !== v || M[33] !== Y || M[34] !== b || M[35] !== fo || M[36] !== mo)
    ((st = r(s, {
      flexDirection: "row",
      gap: 1,
      marginTop: 1,
      children: [
        sn,
        e(Tr, {
          value: b,
          onChange: pt,
          onSubmit: Y,
          focus: fo,
          showCursor: mo,
          columns: p,
          cursorOffset: v,
          onChangeCursorOffset: k
        })
      ]
    })),
      (M[31] = p),
      (M[32] = v),
      (M[33] = Y),
      (M[34] = b),
      (M[35] = fo),
      (M[36] = mo),
      (M[37] = st));
  else st = M[37];
  let Gt;
  if (M[38] !== W)
    ((Gt =
      W &&
      e(s, {
        marginTop: 1,
        children: r(n, {
          color: "warning",
          children: [W, " already exists. Press Enter again to overwrite, or change the name."]
        })
      })),
      (M[38] = W),
      (M[39] = Gt));
  else Gt = M[39];
  let ve;
  if (M[40] !== K)
    ((ve = K && e(s, { marginTop: 1, children: e(vs, { error: K }) })), (M[40] = K), (M[41] = ve));
  else ve = M[41];
  let Ae;
  if (M[42] !== L)
    ((Ae = L && e(s, { marginTop: 1, children: e(n, { dimColor: !0, children: "Saving\u2026" }) })),
      (M[42] = L),
      (M[43] = Ae));
  else Ae = M[43];
  let oe;
  if (M[44] !== st || M[45] !== Gt || M[46] !== ve || M[47] !== Ae)
    ((oe = r(s, { flexDirection: "column", children: [po, st, Gt, ve, Ae] })),
      (M[44] = st),
      (M[45] = Gt),
      (M[46] = ve),
      (M[47] = Ae),
      (M[48] = oe));
  else oe = M[48];
  let ln;
  if (M[49] !== H || M[50] !== ue || M[51] !== Zt || M[52] !== oe)
    ((ln = e(Do, {
      onKeyDown: Tt,
      children: e(we, {
        title: "Save dynamic workflow",
        subtitle: ue,
        onCancel: H,
        color: "permission",
        isCancelActive: !1,
        inputGuide: Zt,
        children: oe
      })
    })),
      (M[49] = H),
      (M[50] = ue),
      (M[51] = Zt),
      (M[52] = oe),
      (M[53] = ln));
  else ln = M[53];
  return ln;
}
var Rn = 3,
  _n = 100,
  Cl = 12,
  Tl = 6;
function Le(o) {
  return Jn(yn(o.replace(/\t/g, "  ")).trimEnd()).trimEnd();
}
function In({ tasks: o, expanded: i, width: l, indent: u }) {
  let d = [],
    p = F(o, (k) => k.status === "completed");
  d.push([
    { text: "Tasks", bold: !0, dimColor: !0 },
    { text: gt(` \xB7 ${p}/${o.length} done`, l - 5), dimColor: !0 }
  ]);
  let h = o.length > Rn,
    b = o,
    x = [];
  if (!i && h) {
    let k = [
        ...o.filter((A) => A.status === "in_progress"),
        ...o.filter((A) => A.status === "pending"),
        ...o.filter((A) => A.status === "completed")
      ],
      T = new Set(k.slice(0, Rn));
    ((b = o.filter((A) => T.has(A))), (x = k.slice(Rn)));
  } else if (i && o.length > _n) ((b = o.slice(0, _n)), (x = o.slice(_n)));
  let v = Math.max(4, l - le(u) - 2);
  for (let k of b) {
    let T = Le(k.content),
      A = i ? yst(T, v) : [gt(T, v)],
      L = A.length > 0 ? A : [""];
    for (let [D, W] of L.entries())
      d.push([
        { text: u },
        D === 0 ? kl(k.status) : { text: " " },
        { text: ` ${W}`, bold: k.status === "in_progress", dimColor: k.status !== "in_progress" }
      ]);
  }
  if (x.length > 0) {
    let k;
    if (i) k = `${x.length} more`;
    else {
      let T = [],
        A = F(x, (W) => W.status === "in_progress"),
        L = F(x, (W) => W.status === "pending"),
        D = F(x, (W) => W.status === "completed");
      if (A > 0) T.push(`${A} in progress`);
      if (L > 0) T.push(`${L} pending`);
      if (D > 0) T.push(`${D} completed`);
      k = T.join(", ");
    }
    d.push([{ text: gt(`${u}\u2026 +${k}`, l), dimColor: !0 }]);
  }
  return { lines: d, capped: h };
}
function kl(o) {
  let { icon: i, color: l } = Imr(o);
  return { text: i, color: l };
}
function Be(o, i) {
  if (o.result === null) return i && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok";
}
function Dn({ call: o, state: i, width: l, indent: u }) {
  let d,
    p = null;
  switch (i) {
    case "running":
      ((d = { text: ko, dimColor: !0 }), (p = { text: " \xB7 running", dimColor: !0 }));
      break;
    case "unanswered":
      ((d = { text: a6r, dimColor: !0 }), (p = { text: " \xB7 no result", dimColor: !0 }));
      break;
    case "ok":
      d = { text: ko, color: "success" };
      break;
    case "error":
      ((d = { text: ko, color: "error" }), (p = { text: " \xB7 error", color: "error" }));
      break;
  }
  let h = Math.max(1, l - le(u) - le(d.text) - 1 - (p ? le(p.text) : 0)),
    b = Le(Jye(o.name)),
    x = h - le(b),
    v = x < 0 ? gt(b, h) : o.summary && x > 3 ? `${b}(${gt(Le(o.summary), x - 2)})` : b;
  return [{ text: u }, d, { text: ` ${v}`, dimColor: i !== "running" }, ...(p ? [p] : [])];
}
function $s({ call: o, state: i, width: l, indent: u }) {
  let d = [Dn({ call: o, state: i, width: l, indent: u })];
  if (bn.includes(o.name)) return d;
  let p = `${u}  `;
  Sl(d, o.fields, { indent: p, width: l, maxLines: Cl });
  let h = `${p}${Gli}  `;
  if (o.result && o.result.head === "")
    d.push([
      {
        text: gt(`${h}(empty)`, l),
        color: o.result.isError ? "error" : void 0,
        dimColor: !o.result.isError
      }
    ]);
  else if (o.result)
    Rs(d, o.result, {
      firstPrefix: h,
      restPrefix: " ".repeat(le(h)),
      width: l,
      maxLines: Tl,
      color: o.result.isError ? "error" : void 0
    });
  else if (i === "unanswered") d.push([{ text: gt(`${h}(none recorded)`, l), dimColor: !0 }]);
  return d;
}
function Sl(o, i, { indent: l, width: u, maxLines: d }) {
  let p = d,
    h = 0,
    b = 0,
    x = `${l}  `;
  for (let v of i) {
    if (p <= 0) {
      h += v.lineCount;
      continue;
    }
    let k = Le(v.key),
      T = `${l}${k}: `;
    if (
      !(v.lineCount === 1 && v.truncatedChars === 0 && le(T) + le(Le(v.head)) <= u) &&
      le(T) > Math.floor(u / 2)
    ) {
      if ((o.push([{ text: gt(`${l}${k}:`, u), dimColor: !0 }]), p--, (T = x), p <= 0)) {
        h += v.lineCount;
        continue;
      }
    }
    let L = Rs(o, v, {
      firstPrefix: T,
      restPrefix: x,
      width: u,
      maxLines: p,
      color: void 0,
      reportHidden: !1
    });
    ((p -= L.lines), (h += L.hiddenLines), (b += L.hiddenChars));
  }
  _s(o, l, u, h, b);
}
function Rs(
  o,
  i,
  { firstPrefix: l, restPrefix: u, width: d, maxLines: p, color: h, reportHidden: b = !0 }
) {
  let x = i.head.split(`
`),
    v = 0,
    k = Math.max(0, i.lineCount - x.length),
    T = !0,
    A = Math.max(1, d - le(u));
  t: for (let [D, W] of x.entries()) {
    let q = Le(W),
      K = re(q, (p - v + 1) * d),
      z = v === 0 ? Math.max(1, d - le(l)) : A,
      M = yst(K, z)[0] ?? "",
      J = K.slice(M.length),
      O = J ? [M, ...yst(J, A)] : [M];
    for (let [Z, ct] of O.entries()) {
      if (v >= p) {
        ((k += x.length - D), (T = !1));
        break t;
      }
      (o.push([{ text: (v === 0 && Z === 0 ? l : u) + ct, color: h, dimColor: h === void 0 }]),
        v++);
    }
    if (K.length < q.length) {
      ((k += x.length - D), (T = !1));
      break;
    }
  }
  let L = T ? i.truncatedChars : 0;
  if (b) _s(o, u, d, k, L);
  return { lines: v, hiddenLines: k, hiddenChars: L };
}
function _s(o, i, l, u, d) {
  let p = u > 0 ? `\u2026 ${u} more ${I(u, "line")}` : d > 0 ? `\u2026 +${d} chars` : "";
  if (p) o.push([{ text: gt(`${i}${p}`, l), dimColor: !0 }]);
}
function gc(v, k) {
  return e(n, { color: v.color, dimColor: v.dimColor, bold: v.bold ?? !1, children: v.text }, k);
}
function hc() {
  return null;
}
function Vt(o, i, l) {
  if (i <= l) return { from: 0, to: i, above: 0, below: 0 };
  let u = Math.floor(l / 2),
    d = Math.max(0, Math.min(o - u, i - l)),
    p = d + l;
  return { from: d, to: p, above: d, below: i - p };
}
function $t(o) {
  return o.state === "start" || o.state === "progress";
}
function It(o, i) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed";
  }
  if (!i) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running";
}
function ao(o) {
  switch (o) {
    case "done":
      return { glyph: ne.tick, color: "success" };
    case "failed":
      return { glyph: ne.cross, color: "error" };
    case "skipped":
      return { glyph: ne.cross, color: "subtle" };
    case "blocked":
      return { glyph: ne.cross, color: "permission" };
    case "queued":
    case "interrupted":
      return { glyph: a6r, color: "subtle" };
    case "running":
      return { glyph: ko, color: "subtle" };
  }
}
var Ut = ["all", "running", "queued", "failed", "done", "skipped", "blocked", "interrupted"];
function Ke(o, i) {
  return i ? `showing ${o} ${i}` : `${o} ${I(o, "agent")}`;
}
function en(o, i) {
  if (o.status === "not-started") return "Not started yet";
  return i ? `No ${i} agents` : "No agents";
}
function Rt(o, i, l) {
  return Math.max(i, Math.min(l, o));
}
function da(o, i) {
  let l = It(o, i),
    u = Fat(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${yr(o.tokens)} tok`);
  if (l === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${un(h * 1000)}`);
  }
  if (l === "queued") d.push("queued");
  if (l === "interrupted") d.push("stopped");
  if (l === "skipped") d.push("skipped");
  if (l === "blocked") d.push("blocked");
  if (l === "failed") d.push("failed");
  let p =
    o.durationMs ??
    (l === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : void 0);
  return { model: u, stats: d.join(" \xB7 "), time: p != null ? lSe(p) : "" };
}
var _i = 6;
function Ur(o, i, l, u) {
  if (i <= 0) return [];
  let { model: d, stats: p, time: h } = da(o, u),
    b = l ? "permission" : void 0,
    x = !l,
    v = (K, z) => (z <= 0 ? "" : gt(K, z)),
    k = h ? v(h, i).padStart(Math.min(_i, i)) : "",
    T = k ? i - le(k) - 1 : i,
    A = (K, z) => (K && z ? 3 : 0),
    L = d,
    D = p;
  if (le(L) + A(L, D) + le(D) > T) {
    if (((D = v(D, T - le(L) - A(L, D))), le(L) + A(L, D) + le(D) > T))
      L = v(L, T - le(D) - A(L, D));
  }
  let W = L && D ? " \xB7 " : "",
    q = Math.max(0, i - le(L) - le(W) - le(D) - le(k));
  return [
    { text: L, color: b, dimColor: x },
    { text: W, color: b, dimColor: x },
    { text: D, color: b, dimColor: x },
    { text: " ".repeat(q) },
    { text: k, color: b, dimColor: x }
  ];
}
var ua = 40,
  pa = 30;
function on(o, i) {
  let l = Math.min(ua, Math.max(22, i - pa), Math.max(4, Math.min(i, Math.max(12, i - _i - 1)))),
    u = o.reduce((d, p) => Math.max(d, le(p.label)), 0);
  return Math.min(Math.max(12, u), l);
}
function Gs(o, i) {
  let l = 0;
  for (let u = 0; u < o.length; u++) {
    let d = o[u],
      p = le(d.text);
    if (l + p > i) {
      let h = i - l,
        b = h > 0 ? gt(d.text, h) : "",
        x = o.slice(0, u);
      if (b) x.push({ ...d, text: b });
      return { segs: x, pad: Math.max(0, h - le(b)) };
    }
    l += p;
  }
  return { segs: o, pad: Math.max(0, i - l) };
}
function Se(o) {
  let u = w(7),
    { segs: i, width: l } = o,
    d,
    p;
  if (u[0] !== i || u[1] !== l) {
    let { segs: h, pad: b } = Gs(i, l);
    d = h.map(gc);
    p = " ".repeat(b);
    ((u[0] = i), (u[1] = l), (u[2] = d), (u[3] = p));
  } else ((d = u[2]), (p = u[3]));
  let x;
  if (u[4] !== d || u[5] !== p)
    ((x = r(Q, { children: [d, p] })), (u[4] = d), (u[5] = p), (u[6] = x));
  else x = u[6];
  return x;
}
function ht(o) {
  let u = w(7),
    { segs: i, contentWidth: l } = o,
    d;
  if (u[0] === S) ((d = r(n, { color: "text", children: [" ", Ab.pipe, " "] })), (u[0] = d));
  else d = u[0];
  let p;
  if (u[1] !== l || u[2] !== i)
    ((p = e(Se, { segs: i, width: l })), (u[1] = l), (u[2] = i), (u[3] = p));
  else p = u[3];
  let h;
  if (u[4] === S) ((h = r(n, { color: "text", children: [" ", Ab.pipe] })), (u[4] = h));
  else h = u[4];
  let b;
  if (u[5] !== p)
    ((b = r(n, { wrap: "truncate-end", children: [d, p, h] })), (u[5] = p), (u[6] = b));
  else b = u[6];
  return b;
}
function kt(o, i) {
  let l = o.from > 0 ? ne.arrowUp : " ",
    u = o.to < i ? ne.arrowDown : " ";
  return `${l} ${o.from + 1}${zli}${o.to} of ${i} ${u}`;
}
function Hr(o) {
  let u = w(5),
    { win: i, total: l } = o,
    d;
  if (u[0] !== l || u[1] !== i) ((d = kt(i, l)), (u[0] = l), (u[1] = i), (u[2] = d));
  else d = u[2];
  const p = `  ${d}`;
  let h;
  if (u[3] !== p)
    ((h = e(n, { dimColor: !0, wrap: "truncate-end", children: p })), (u[3] = p), (u[4] = h));
  else h = u[4];
  return h;
}
function Jr(o) {
  let k = w(53),
    {
      phase: i,
      selectedAgent: l,
      level: u,
      contentWidth: d,
      viewport: p,
      tight: h,
      workflowActive: b,
      filterLabel: x
    } = o,
    v = i.agents,
    T;
  if (k[0] !== d) ((T = t6.repeat(d + 2)), (k[0] = d), (k[1] = T));
  else T = k[1];
  let A = T,
    L,
    D;
  if (
    k[2] !== v ||
    k[3] !== A ||
    k[4] !== d ||
    k[5] !== x ||
    k[6] !== u ||
    k[7] !== i ||
    k[8] !== l ||
    k[9] !== h ||
    k[10] !== p ||
    k[11] !== b
  ) {
    let W = Vt(l, v.length, p);
    D = [];
    let q = Ke(v.length, x);
    if (h) {
      let K = gt(` \xB7 ${q}`, Math.max(1, d - 1));
      let z = Math.max(1, d - le(K));
      let M;
      if (k[14] !== i.title || k[15] !== z)
        ((M = gt(i.title, z)), (k[14] = i.title), (k[15] = z), (k[16] = M));
      else M = k[16];
      let J;
      if (k[17] !== M) ((J = { text: M, color: "permission", bold: !0 }), (k[17] = M), (k[18] = J));
      else J = k[18];
      let O;
      if (k[19] !== K) ((O = { text: K, dimColor: !0 }), (k[19] = K), (k[20] = O));
      else O = k[20];
      let Z;
      if (k[21] !== J || k[22] !== O) ((Z = [J, O]), (k[21] = J), (k[22] = O), (k[23] = Z));
      else Z = k[23];
      let ct;
      if (k[24] !== d || k[25] !== Z)
        ((ct = e(ht, { contentWidth: d, segs: Z }, "title")),
          (k[24] = d),
          (k[25] = Z),
          (k[26] = ct));
      else ct = k[26];
      D.push(ct);
    } else
      (D.push(
        e(
          ht,
          { contentWidth: d, segs: [{ text: gt(i.title, d), color: "permission", bold: !0 }] },
          "title"
        )
      ),
        D.push(e(ht, { contentWidth: d, segs: [{ text: gt(q, d), dimColor: !0 }] }, "count")),
        D.push(e(ht, { contentWidth: d, segs: [{ text: "" }] }, "gap")));
    let pt = D.length;
    if (v.length === 0) {
      let M;
      if (k[27] !== x || k[28] !== i) ((M = en(i, x)), (k[27] = x), (k[28] = i), (k[29] = M));
      else M = k[29];
      let J;
      if (k[30] !== M) ((J = [{ text: M, dimColor: !0 }]), (k[30] = M), (k[31] = J));
      else J = k[31];
      let O;
      if (k[32] !== d || k[33] !== J)
        ((O = e(ht, { contentWidth: d, segs: J }, "empty")), (k[32] = d), (k[33] = J), (k[34] = O));
      else O = k[34];
      D.push(O);
    } else {
      let bt = on(v, d - 5);
      for (let U = W.from; U < W.to; U++) {
        let B = v[U];
        let tt = u === "agents" && U === l;
        let { glyph: nt, color: G } = ao(It(B, b));
        let Y = gt(B.label, bt);
        let at = " ".repeat(Math.max(0, bt - le(Y)));
        let H = Math.max(0, d - (bt + 5));
        D.push(
          e(
            ht,
            {
              contentWidth: d,
              segs: [
                { text: tt ? ne.pointer : " ", color: "permission" },
                { text: " " },
                { text: nt, color: G },
                { text: " " },
                { text: `${Y}${at}`, color: tt ? "permission" : void 0, dimColor: !tt && $t(B) },
                { text: " " },
                ...Ur(B, H, tt, b)
              ]
            },
            `a-${U}`
          )
        );
      }
    }
    let et = D.length - pt;
    for (let ut = et; ut < p; ut++)
      D.push(e(ht, { contentWidth: d, segs: [{ text: "" }] }, `pad-${ut}`));
    if (v.length > p) {
      let Mt = ` ${kt(W, v.length)} `;
      let Tt = Math.max(0, d + 2 - le(Mt));
      let M;
      if (k[35] !== Tt) ((M = t6.repeat(Tt)), (k[35] = Tt), (k[36] = M));
      else M = k[36];
      let J;
      if (k[37] !== M)
        ((J = r(n, { color: "text", children: [" ", ok.bottomLeft, M] })),
          (k[37] = M),
          (k[38] = J));
      else J = k[38];
      let O;
      if (k[39] !== Mt) ((O = e(n, { dimColor: !0, children: Mt })), (k[39] = Mt), (k[40] = O));
      else O = k[40];
      let Z;
      if (k[41] === S) ((Z = e(n, { color: "text", children: ok.bottomRight })), (k[41] = Z));
      else Z = k[41];
      let ct;
      if (k[42] !== J || k[43] !== O)
        ((ct = r(n, { wrap: "truncate-end", children: [J, O, Z] })),
          (k[42] = J),
          (k[43] = O),
          (k[44] = ct));
      else ct = k[44];
      L = ct;
    } else {
      let M;
      if (k[45] !== A)
        ((M = r(n, {
          color: "text",
          wrap: "truncate-end",
          children: [" ", ok.bottomLeft, A, ok.bottomRight]
        })),
          (k[45] = A),
          (k[46] = M));
      else M = k[46];
      L = M;
    }
    ((k[2] = v),
      (k[3] = A),
      (k[4] = d),
      (k[5] = x),
      (k[6] = u),
      (k[7] = i),
      (k[8] = l),
      (k[9] = h),
      (k[10] = p),
      (k[11] = b),
      (k[12] = L),
      (k[13] = D));
  } else ((L = k[12]), (D = k[13]));
  let M;
  if (k[47] !== A)
    ((M = r(n, {
      color: "text",
      wrap: "truncate-end",
      children: [" ", ok.topLeft, A, ok.topRight]
    })),
      (k[47] = A),
      (k[48] = M));
  else M = k[48];
  let J;
  if (k[49] !== L || k[50] !== D || k[51] !== M)
    ((J = r(s, { flexDirection: "column", children: [M, D, L] })),
      (k[49] = L),
      (k[50] = D),
      (k[51] = M),
      (k[52] = J));
  else J = k[52];
  return J;
}
function co(o) {
  let p = w(12),
    { left: i, right: l, leftWidth: u, rightWidth: d } = o,
    h;
  if (p[0] === S) ((h = r(n, { color: "text", children: [" ", Ab.pipe, " "] })), (p[0] = h));
  else h = p[0];
  let b;
  if (p[1] !== i || p[2] !== u)
    ((b = e(Se, { segs: i, width: u })), (p[1] = i), (p[2] = u), (p[3] = b));
  else b = p[3];
  let x;
  if (p[4] === S) ((x = r(n, { color: "text", children: [" ", Ab.pipe, " "] })), (p[4] = x));
  else x = p[4];
  let v;
  if (p[5] !== l || p[6] !== d)
    ((v = e(Se, { segs: l, width: d })), (p[5] = l), (p[6] = d), (p[7] = v));
  else v = p[7];
  let k;
  if (p[8] === S) ((k = r(n, { color: "text", children: [" ", Ab.pipe] })), (p[8] = k));
  else k = p[8];
  let T;
  if (p[9] !== b || p[10] !== v)
    ((T = r(n, { wrap: "truncate-end", children: [h, b, x, v, k] })),
      (p[9] = b),
      (p[10] = v),
      (p[11] = T));
  else T = p[11];
  return T;
}
function Jo(o, i) {
  let l = [],
    u = 0;
  if (i.label) {
    let h = ` ${gt(i.label.text, Math.max(1, o - 2))} `;
    ((u += le(h)),
      l.push(e(n, { color: i.label.color ?? "text", bold: i.label.bold, children: h }, "label")));
  }
  let d = i.tag ? ` ${gt(i.tag, Math.max(0, o - u - 2))} ` : "",
    p = Math.max(0, o - u - le(d));
  if ((l.push(e(n, { color: "text", children: t6.repeat(p) }, "dash")), d))
    l.push(e(n, { dimColor: !0, children: d }, "tag"));
  return l;
}
function Qt(o) {
  let T = w(20),
    {
      pos: i,
      leftWidth: l,
      rightWidth: u,
      leftTitle: d,
      rightTitle: p,
      leftTag: h,
      rightTag: b
    } = o,
    x = i === "top" ? ok.topLeft : ok.bottomLeft,
    v = i === "top" ? Ab.teeDown : Ab.teeUp,
    k = i === "top" ? ok.topRight : ok.bottomRight,
    A;
  if (T[0] !== x) ((A = r(n, { color: "text", children: [" ", x] })), (T[0] = x), (T[1] = A));
  else A = T[1];
  const L = l + 2;
  let D;
  if (T[2] !== h || T[3] !== d || T[4] !== L)
    ((D = Jo(L, { label: d ? { text: d } : void 0, tag: h })),
      (T[2] = h),
      (T[3] = d),
      (T[4] = L),
      (T[5] = D));
  else D = T[5];
  let W;
  if (T[6] !== v) ((W = e(n, { color: "text", children: v })), (T[6] = v), (T[7] = W));
  else W = T[7];
  const q = u + 2;
  let K;
  if (T[8] !== b || T[9] !== p || T[10] !== q)
    ((K = Jo(q, { label: p ? { text: p } : void 0, tag: b })),
      (T[8] = b),
      (T[9] = p),
      (T[10] = q),
      (T[11] = K));
  else K = T[11];
  let z;
  if (T[12] !== k) ((z = e(n, { color: "text", children: k })), (T[12] = k), (T[13] = z));
  else z = T[13];
  let M;
  if (T[14] !== A || T[15] !== D || T[16] !== W || T[17] !== K || T[18] !== z)
    ((M = r(n, { wrap: "truncate-end", children: [A, D, W, K, z] })),
      (T[14] = A),
      (T[15] = D),
      (T[16] = W),
      (T[17] = K),
      (T[18] = z),
      (T[19] = M));
  else M = T[19];
  return M;
}
function si(o, i, l, u, d) {
  let p = i === l,
    h = o.status === "done",
    b = o.status === "failed",
    x = h ? ne.tick : b ? ne.cross : String(i + 1),
    v = p ? "permission" : h ? "success" : b ? "error" : "subtle",
    k = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "",
    T = u === "phases" && p ? `${ne.pointer} ` : "  ",
    A = le(T) + le(x) + 1,
    L = k ? 1 + le(k) : 0,
    D = gt(o.title, Math.max(1, d - A - L)),
    W = Math.max(0, d - A - le(D) - L),
    q = !p && o.status === "not-started",
    K = [
      { text: T, color: p ? "permission" : void 0 },
      { text: x, color: v },
      { text: " " },
      { text: D, color: p ? "permission" : void 0, dimColor: q },
      { text: " ".repeat(W) }
    ];
  if (k) K.push({ text: " " }, { text: k, color: p ? "permission" : "subtle" });
  return K;
}
function ii(o, i, l, u, d, p, h) {
  let b = u === "agents" && i === l,
    { glyph: x, color: v } = ao(It(o, h)),
    k = gt(o.label, p),
    T = " ".repeat(Math.max(0, p - le(k))),
    A = Math.max(0, d - (p + 4));
  return [
    { text: b ? ne.pointer : " ", color: "permission" },
    { text: x, color: v },
    { text: " " },
    { text: `${k}${T}`, color: b ? "permission" : void 0, dimColor: !b && $t(o) },
    { text: " " },
    ...Ur(o, A, b, h)
  ];
}
function li(o, i, l, u, d) {
  let p = i === l,
    { glyph: h, color: b } = ao(It(o, d)),
    x = gt(o.label, Math.max(1, u - 4));
  return [
    { text: p ? `${ne.pointer} ` : "  ", color: "permission" },
    { text: h, color: b },
    { text: " " },
    { text: x, color: p ? "permission" : void 0, dimColor: !p && $t(o) }
  ];
}
function Vr(o) {
  let A = w(41),
    {
      phases: i,
      selectedPhase: l,
      clampedPhase: u,
      clampedAgent: d,
      level: p,
      leftWidth: h,
      rightWidth: b,
      viewport: x,
      workflowActive: v,
      filterLabel: k
    } = o,
    T = l.agents,
    L,
    D,
    W,
    q,
    K,
    z,
    M,
    J,
    O,
    Z;
  if (
    A[0] !== T ||
    A[1] !== d ||
    A[2] !== u ||
    A[3] !== k ||
    A[4] !== h ||
    A[5] !== p ||
    A[6] !== i ||
    A[7] !== b ||
    A[8] !== l ||
    A[9] !== x ||
    A[10] !== v
  ) {
    let ct = Vt(u, i.length, x);
    let pt = Vt(d, T.length, x);
    let bt = on(T, b - 4);
    let U = [];
    for (let B = 0; B < x; B++) {
      let tt = ct.from + B;
      let nt = pt.from + B;
      let G = tt < ct.to ? si(i[tt], tt, u, p, h) : [];
      let Y;
      if (nt < pt.to) Y = ii(T[nt], nt, d, p, b, bt, v);
      else if (T.length === 0 && B === 0) Y = [{ text: en(l, k), dimColor: !0 }];
      else Y = [];
      U.push(e(co, { left: G, right: Y, leftWidth: h, rightWidth: b }, B));
    }
    const at = l.title;
    let H;
    if (A[21] !== T.length || A[22] !== k)
      ((H = Ke(T.length, k)), (A[21] = T.length), (A[22] = k), (A[23] = H));
    else H = A[23];
    let et = `${at} \xB7 ${H}`;
    D = s;
    J = "column";
    if (A[24] !== h || A[25] !== et || A[26] !== b)
      ((O = e(Qt, {
        pos: "top",
        leftWidth: h,
        rightWidth: b,
        leftTitle: "Phases",
        rightTitle: et
      })),
        (A[24] = h),
        (A[25] = et),
        (A[26] = b),
        (A[27] = O));
    else O = A[27];
    Z = U;
    L = Qt;
    W = "bottom";
    q = h;
    K = b;
    z = i.length > x ? kt(ct, i.length) : void 0;
    M = T.length > x ? kt(pt, T.length) : void 0;
    ((A[0] = T),
      (A[1] = d),
      (A[2] = u),
      (A[3] = k),
      (A[4] = h),
      (A[5] = p),
      (A[6] = i),
      (A[7] = b),
      (A[8] = l),
      (A[9] = x),
      (A[10] = v),
      (A[11] = L),
      (A[12] = D),
      (A[13] = W),
      (A[14] = q),
      (A[15] = K),
      (A[16] = z),
      (A[17] = M),
      (A[18] = J),
      (A[19] = O),
      (A[20] = Z));
  } else
    ((L = A[11]),
      (D = A[12]),
      (W = A[13]),
      (q = A[14]),
      (K = A[15]),
      (z = A[16]),
      (M = A[17]),
      (J = A[18]),
      (O = A[19]),
      (Z = A[20]));
  let at;
  if (A[28] !== L || A[29] !== W || A[30] !== q || A[31] !== K || A[32] !== z || A[33] !== M)
    ((at = e(L, { pos: W, leftWidth: q, rightWidth: K, leftTag: z, rightTag: M })),
      (A[28] = L),
      (A[29] = W),
      (A[30] = q),
      (A[31] = K),
      (A[32] = z),
      (A[33] = M),
      (A[34] = at));
  else at = A[34];
  let H;
  if (A[35] !== D || A[36] !== J || A[37] !== O || A[38] !== Z || A[39] !== at)
    ((H = r(D, { flexDirection: J, children: [O, Z, at] })),
      (A[35] = D),
      (A[36] = J),
      (A[37] = O),
      (A[38] = Z),
      (A[39] = at),
      (A[40] = H));
  else H = A[40];
  return H;
}
var Ya = 2,
  Qa = 20,
  Rr = hn,
  fi = 100,
  mi = 250;
function Br(o, i, l, u) {
  let A = w(13),
    [d, p] = y(null),
    b = be(vk)?.setTimeout ?? nD,
    x = C(void 0),
    v = C(0),
    k = C(0),
    T = C(null),
    L,
    D;
  if (A[0] === S)
    ((L = () => () => {
      T.current = null;
    }),
      (D = []),
      (A[0] = L),
      (A[1] = D));
  else ((L = A[0]), (D = A[1]));
  P(L, D);
  let W;
  if (A[2] !== i || A[3] !== u || A[4] !== b || A[5] !== o)
    ((W = () => {
      if (!o || !i) {
        return;
      }
      T.current = { runId: o, agentId: i };
      let q = (v.current = v.current + 1);
      let z = () => {
        xn(o, i, { promptFramed: u })
          .catch(hc)
          .then((K) => {
            if (q > k.current && T.current?.runId === o && T.current.agentId === i)
              ((k.current = q), (x.current = i), p({ agentId: i, transcript: K }));
          });
      };
      if (x.current === i) {
        return b(z, mi);
      }
      z();
    }),
      (A[2] = i),
      (A[3] = u),
      (A[4] = b),
      (A[5] = o),
      (A[6] = W));
  else W = A[6];
  let M;
  if (A[7] !== i || A[8] !== u || A[9] !== l || A[10] !== b || A[11] !== o)
    ((M = [o, i, l, u, b]),
      (A[7] = i),
      (A[8] = u),
      (A[9] = l),
      (A[10] = b),
      (A[11] = o),
      (A[12] = M));
  else M = A[12];
  if ((P(W, M), !o || !i)) {
    return null;
  }
  if (!d || d.agentId !== i) {
    return "loading";
  }
  return d.transcript;
}
function Ir(o, i) {
  let l = [];
  for (let u of o.split(`
`)) {
    if (u === "") {
      l.push("");
      continue;
    }
    for (let d of yst(u, Math.max(1, i))) l.push(d);
  }
  return l;
}
function Ci({ lines: o, title: i, body: l, collapsedLines: u, expanded: d, indent: p, width: h }) {
  let b = l.length - u,
    x = b >= 2 ? b : 0,
    v = [{ text: i, bold: !0, dimColor: !0 }];
  if (x > 0)
    v.push({
      text: gt(` \xB7 ${l.length} lines${d ? "" : ` \xB7 ${hTt} expand`}`, h - le(i)),
      dimColor: !0
    });
  o.push(v);
  let k = d || x === 0 ? l : l.slice(0, u);
  for (let T of k) o.push(T);
  if (!d && x > 0) o.push([{ text: gt(`${p}\u2026 ${x} more ${I(x, "line")}`, h), dimColor: !0 }]);
  return x;
}
function Ti(o, i) {
  let l = 0;
  for (let u of i) {
    if (o < u.end) break;
    l += u.growth;
  }
  return o + l;
}
function ki(o, i) {
  let l = 0;
  for (let u of i) {
    let d = u.end + l;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    l += u.growth;
  }
  return o - l;
}
var nn = {
  queued: "Queued",
  running: "Running",
  done: "Completed",
  failed: "Failed",
  skipped: "Skipped",
  blocked: "Blocked",
  interrupted: "Stopped"
};
function Si({ agent: o, status: i, transcript: l, expanded: u, width: d, nowMs: p }) {
  let h = [],
    b = "  ",
    x = Math.max(8, d - 2),
    v = l === "loading" ? null : l,
    { glyph: k, color: T } = ao(i),
    A = [];
  if (o.model != null) A.push(Fat(o.model, o.fallbackModel));
  if (o.agentType != null) A.push(o.agentType);
  if (o.isolation != null)
    A.push(
      o.isolation === "remote" && o.remoteSessionId ? `remote ${o.remoteSessionId}` : o.isolation
    );
  if (o.cached) A.push("from resume journal");
  if (o.attempt != null && o.attempt > 1) {
    let H =
      o.lastAttemptReason === "throttled"
        ? o.label.endsWith(KVn)
          ? tan
          : "throttled"
        : o.lastAttemptReason === "user-retry"
          ? "user retry"
          : "stalled";
    A.push(`attempt ${o.attempt} (${H})`);
  }
  let L = le(k) + 1 + le(nn[i]),
    D = A.length > 0 ? gt(` \xB7 ${A.join(" \xB7 ")}`, Math.max(0, d - L)) : "";
  h.push([
    { text: k, color: T },
    { text: " " },
    { text: nn[i], color: T, bold: !0 },
    ...(D ? [{ text: D, dimColor: !0 }] : [])
  ]);
  let W = [];
  if (o.tokens != null) W.push(`${yr(o.tokens)} tok`);
  if (o.toolCalls != null && o.toolCalls > 0)
    W.push(`${o.toolCalls} ${I(o.toolCalls, "tool call")}`);
  if (o.durationMs != null) W.push(un(o.durationMs));
  if (i === "queued" && o.queuedAt != null) W.push(`waiting ${un(Math.max(0, p - o.queuedAt))}`);
  if (i === "running" && o.lastProgressAt != null) {
    let H = Math.floor((p - o.lastProgressAt) / 1000);
    if (H >= 30) W.push(`idle ${un(H * 1000)}`);
  }
  if (W.length > 0) h.push([{ text: gt(W.join(" \xB7 "), d), dimColor: !0 }]);
  h.push([{ text: "" }]);
  let q = i !== "queued" && v ? v.toolCalls : [],
    K = i === "running",
    z = q.filter((H) => Be(H, K) === "running"),
    M = q,
    J = v?.tasks ?? [],
    O = J.length > 0 ? In({ tasks: J, expanded: !1, width: d, indent: "  " }) : null,
    Z = J.length > 0 ? In({ tasks: J, expanded: !0, width: d, indent: "  " }) : null,
    ct = u ? Z : O,
    pt = M.length > 0 || (ct?.capped ?? !1),
    bt = l !== "loading" && l?.prompt ? l.prompt : (o.promptPreview ?? ""),
    U = bt
      ? Ir(bt, x).map((H) => [{ text: "  " + H, dimColor: !0 }])
      : [
          [
            {
              text:
                "  " +
                (i === "queued"
                  ? "Available once the agent starts."
                  : l === "loading"
                    ? "Loading\u2026"
                    : i === "running"
                      ? "Not available yet (agent still running)."
                      : "Transcript not available."),
              dimColor: !0
            }
          ]
        ],
    B = Ci({
      lines: h,
      title: "Prompt",
      body: U,
      collapsedLines: Ya,
      expanded: u,
      indent: "  ",
      width: d
    }),
    tt = B > 0 ? B - 1 : 0,
    nt = tt,
    G = [{ end: h.length - (u ? nt : 0), growth: tt }];
  if ((h.push([{ text: "" }]), ct && O && Z)) {
    for (let et of ct.lines) h.push(et);
    let H = Z.lines.length - O.lines.length;
    ((nt += H), G.push({ end: h.length - (u ? nt : 0), growth: H }), h.push([{ text: "" }]));
  }
  if (i !== "queued") {
    let H = M.length - Rr,
      et = Math.max(0, H - Rr);
    while (!1) H--;
    let ut = M.filter((Et, xt) => xt >= H || Be(Et, K) === "running"),
      Mt = [];
    for (let [Et, xt] of ut.entries()) {
      if (Et > 0) Mt.push([{ text: "" }]);
      let Dt = Be(xt, K);
      Mt.push(...$s({ call: xt, state: Dt, width: d, indent: "  " }));
    }
    let Tt = "";
    if (M.length > ut.length)
      Tt = ` \xB7 ${ut.length <= Rr ? "last " : ""}${ut.length} of ${M.length} tool calls`;
    let Bt = Math.max(0, d - le("Activity")),
      Xt = ` \xB7 ${hTt} expand`;
    if (
      ((Tt = !u && pt && le(Tt) + le(Xt) <= Bt ? Tt + Xt : gt(Tt, Bt)),
      h.push([
        { text: "Activity", bold: !0, dimColor: !0 },
        ...(Tt ? [{ text: Tt, dimColor: !0 }] : [])
      ]),
      M.length > 0)
    ) {
      if (u) for (let xt of Mt) h.push(xt);
      else
        for (let xt of ut) {
          let Dt = Be(xt, K);
          h.push(Dn({ call: xt, state: Dt, width: d, indent: "  " }));
        }
      let Et = Mt.length - ut.length;
      ((nt += Et), G.push({ end: h.length - (u ? nt : 0), growth: Et }));
    } else if (o.lastToolName != null) {
      let Et = o.lastToolSummary ? `(${o.lastToolSummary})` : "",
        xt = Jye(o.lastToolName);
      h.push([{ text: gt(`  ${xt}${Et}`, d), dimColor: !0 }]);
    } else
      h.push([
        { text: `  ${i === "running" ? "No tool calls yet." : "No tool calls."}`, dimColor: !0 }
      ]);
    h.push([{ text: "" }]);
  }
  let Y = [];
  switch (i) {
    case "queued":
      Y.push([{ text: "  Waiting for an agent slot.", dimColor: !0 }]);
      break;
    case "running":
      Y.push([{ text: `${"  "}Still running\u2026`, dimColor: !0 }]);
      break;
    case "interrupted":
      Y.push([{ text: "  The workflow stopped before this agent finished.", dimColor: !0 }]);
      break;
    case "skipped":
      Y.push([{ text: "  Skipped by user.", dimColor: !0 }]);
      break;
    case "blocked":
    case "failed": {
      for (let H of Ir(o.error ?? "failed", x)) Y.push([{ text: "  " + H, color: "error" }]);
      break;
    }
    case "done": {
      let H = l !== "loading" && l?.finalText ? l.finalText : (o.resultPreview ?? "");
      if (!H) {
        Y.push([{ text: "  " + (l === "loading" ? "Loading\u2026" : "(empty)"), dimColor: !0 }]);
        break;
      }
      let et = gs(H, x);
      if (et) for (let ut of et) Y.push([{ text: "  " }, ...ut]);
      else for (let ut of Ir(H, x)) Y.push([{ text: "  " + ut }]);
      break;
    }
  }
  let at = Ci({
    lines: h,
    title: "Outcome",
    body: Y,
    collapsedLines: Qa,
    expanded: u,
    indent: "  ",
    width: d
  });
  return { lines: h, expandable: B > 0 || at > 0 || pt, folds: G, detailExpandable: pt };
}
function Gr(o) {
  let A = w(42),
    {
      phase: i,
      clampedAgent: l,
      agentLabel: u,
      detailLines: d,
      cardScroll: p,
      leftWidth: h,
      rightWidth: b,
      viewport: x,
      workflowActive: v,
      filterLabel: k
    } = o,
    T = i.agents,
    L,
    D,
    W,
    q,
    K,
    z,
    M,
    J,
    O,
    Z;
  if (
    A[0] !== u ||
    A[1] !== T ||
    A[2] !== p ||
    A[3] !== l ||
    A[4] !== d ||
    A[5] !== k ||
    A[6] !== h ||
    A[7] !== i.title ||
    A[8] !== b ||
    A[9] !== x ||
    A[10] !== v
  ) {
    let ct = Vt(l, T.length, x);
    let pt = Math.max(0, d.length - x);
    let bt = Rt(p, 0, pt);
    let U = Math.min(d.length, bt + x);
    let B = [];
    for (let tt = 0; tt < x; tt++) {
      let nt = ct.from + tt;
      let G = nt < ct.to ? li(T[nt], nt, l, h, v) : [];
      let Y = bt + tt;
      let at = Y < U ? d[Y] : [];
      B.push(e(co, { left: G, right: at, leftWidth: h, rightWidth: b }, tt));
    }
    D = s;
    J = "column";
    const H = i.title;
    let et;
    if (A[21] !== T.length || A[22] !== k)
      ((et = Ke(T.length, k)), (A[21] = T.length), (A[22] = k), (A[23] = et));
    else et = A[23];
    const ut = `${H} \xB7 ${et}`;
    if (A[24] !== u || A[25] !== h || A[26] !== b || A[27] !== ut)
      ((O = e(Qt, { pos: "top", leftWidth: h, rightWidth: b, leftTitle: ut, rightTitle: u })),
        (A[24] = u),
        (A[25] = h),
        (A[26] = b),
        (A[27] = ut),
        (A[28] = O));
    else O = A[28];
    Z = B;
    L = Qt;
    W = "bottom";
    q = h;
    K = b;
    z = T.length > x ? kt(ct, T.length) : void 0;
    M = d.length > x ? kt({ from: bt, to: U }, d.length) : void 0;
    ((A[0] = u),
      (A[1] = T),
      (A[2] = p),
      (A[3] = l),
      (A[4] = d),
      (A[5] = k),
      (A[6] = h),
      (A[7] = i.title),
      (A[8] = b),
      (A[9] = x),
      (A[10] = v),
      (A[11] = L),
      (A[12] = D),
      (A[13] = W),
      (A[14] = q),
      (A[15] = K),
      (A[16] = z),
      (A[17] = M),
      (A[18] = J),
      (A[19] = O),
      (A[20] = Z));
  } else
    ((L = A[11]),
      (D = A[12]),
      (W = A[13]),
      (q = A[14]),
      (K = A[15]),
      (z = A[16]),
      (M = A[17]),
      (J = A[18]),
      (O = A[19]),
      (Z = A[20]));
  let H;
  if (A[29] !== L || A[30] !== W || A[31] !== q || A[32] !== K || A[33] !== z || A[34] !== M)
    ((H = e(L, { pos: W, leftWidth: q, rightWidth: K, leftTag: z, rightTag: M })),
      (A[29] = L),
      (A[30] = W),
      (A[31] = q),
      (A[32] = K),
      (A[33] = z),
      (A[34] = M),
      (A[35] = H));
  else H = A[35];
  let et;
  if (A[36] !== D || A[37] !== J || A[38] !== O || A[39] !== Z || A[40] !== H)
    ((et = r(D, { flexDirection: J, children: [O, Z, H] })),
      (A[36] = D),
      (A[37] = J),
      (A[38] = O),
      (A[39] = Z),
      (A[40] = H),
      (A[41] = et));
  else et = A[41];
  return et;
}
function zr(o) {
  let b = w(43),
    { agentLabel: i, position: l, detailLines: u, cardScroll: d, contentWidth: p, viewport: h } = o,
    x;
  if (b[0] !== p) ((x = t6.repeat(p + 2)), (b[0] = p), (b[1] = x));
  else x = b[1];
  let v = x,
    k = Math.max(0, u.length - h),
    T,
    A;
  if (
    b[2] !== i ||
    b[3] !== v ||
    b[4] !== d ||
    b[5] !== p ||
    b[6] !== u ||
    b[7] !== k ||
    b[8] !== l ||
    b[9] !== h
  ) {
    let L = Rt(d, 0, k);
    let D = Math.min(u.length, L + h);
    A = [];
    let W = ` \xB7 ${l}`;
    const q = Math.max(1, p - le(W));
    let K;
    if (b[12] !== i || b[13] !== q) ((K = gt(i, q)), (b[12] = i), (b[13] = q), (b[14] = K));
    else K = b[14];
    let z;
    if (b[15] !== K) ((z = { text: K, color: "permission", bold: !0 }), (b[15] = K), (b[16] = z));
    else z = b[16];
    let M;
    if (b[17] !== W) ((M = { text: W, dimColor: !0 }), (b[17] = W), (b[18] = M));
    else M = b[18];
    let J;
    if (b[19] !== z || b[20] !== M) ((J = [z, M]), (b[19] = z), (b[20] = M), (b[21] = J));
    else J = b[21];
    let O;
    if (b[22] !== p || b[23] !== J)
      ((O = e(ht, { contentWidth: p, segs: J }, "title")), (b[22] = p), (b[23] = J), (b[24] = O));
    else O = b[24];
    A.push(O);
    for (let Z = L; Z < D; Z++) A.push(e(ht, { contentWidth: p, segs: u[Z] }, `l-${Z}`));
    for (let ct = D - L; ct < h; ct++)
      A.push(e(ht, { contentWidth: p, segs: [{ text: "" }] }, `pad-${ct}`));
    if (u.length > h) {
      let pt = ` ${kt({ from: L, to: D }, u.length)} `;
      let bt = Math.max(0, p + 2 - le(pt));
      let U;
      if (b[25] !== bt) ((U = t6.repeat(bt)), (b[25] = bt), (b[26] = U));
      else U = b[26];
      let B;
      if (b[27] !== U)
        ((B = r(n, { color: "text", children: [" ", ok.bottomLeft, U] })),
          (b[27] = U),
          (b[28] = B));
      else B = b[28];
      let tt;
      if (b[29] !== pt) ((tt = e(n, { dimColor: !0, children: pt })), (b[29] = pt), (b[30] = tt));
      else tt = b[30];
      let nt;
      if (b[31] === S) ((nt = e(n, { color: "text", children: ok.bottomRight })), (b[31] = nt));
      else nt = b[31];
      let G;
      if (b[32] !== tt || b[33] !== B)
        ((G = r(n, { wrap: "truncate-end", children: [B, tt, nt] })),
          (b[32] = tt),
          (b[33] = B),
          (b[34] = G));
      else G = b[34];
      T = G;
    } else {
      let U;
      if (b[35] !== v)
        ((U = r(n, {
          color: "text",
          wrap: "truncate-end",
          children: [" ", ok.bottomLeft, v, ok.bottomRight]
        })),
          (b[35] = v),
          (b[36] = U));
      else U = b[36];
      T = U;
    }
    ((b[2] = i),
      (b[3] = v),
      (b[4] = d),
      (b[5] = p),
      (b[6] = u),
      (b[7] = k),
      (b[8] = l),
      (b[9] = h),
      (b[10] = T),
      (b[11] = A));
  } else ((T = b[10]), (A = b[11]));
  let q;
  if (b[37] !== v)
    ((q = r(n, {
      color: "text",
      wrap: "truncate-end",
      children: [" ", ok.topLeft, v, ok.topRight]
    })),
      (b[37] = v),
      (b[38] = q));
  else q = b[38];
  let K;
  if (b[39] !== T || b[40] !== A || b[41] !== q)
    ((K = r(s, { flexDirection: "column", children: [q, A, T] })),
      (b[39] = T),
      (b[40] = A),
      (b[41] = q),
      (b[42] = K));
  else K = b[42];
  return K;
}
function Cat({
  workflow: o,
  onDone: i,
  onBack: l,
  onKill: u,
  onSkipAgent: d,
  onRetryAgent: p,
  onPause: h,
  onResume: b,
  initialPhaseIndex: x,
  promptVisibleBelow: v = !1
}) {
  Ea("workflow-detail-dialog");
  let { availableRows: k, width: T, rows: A } = fpr(v),
    L = Math.max(12, T - 6),
    D = Uat(o),
    W = ee(() => yeo(o), [o.workflowProgress, o.phases]),
    q = ee(() => Seo(W, o.agentCount), [W, o.agentCount]),
    [K, z] = y(() => (x !== void 0 ? Math.max(0, x) : 0)),
    [M, J] = y(0),
    [O, Z] = y(x !== void 0 ? "agents" : "phases"),
    [ct, pt] = y(!1),
    [bt, U] = y({ scroll: 0, expanded: !1 }),
    { scroll: B, expanded: tt } = bt,
    [nt, G] = y("all"),
    Y = Math.min(K, Math.max(0, W.length - 1)),
    at = W[Y],
    H = o.status === "running",
    et = ee(() => {
      if (!at || nt === "all" || O === "phases") return at;
      return { ...at, agents: at.agents.filter((N) => It(N, H) === nt) };
    }, [at, nt, O, H]),
    ut = et ? Math.min(M, Math.max(0, et.agents.length - 1)) : 0,
    [Mt, Tt] = y(!1),
    Bt = o.script.length > 0,
    Xt = ee(() => {
      if (!Bt) return "";
      let N = wE(o.script);
      if (!("error" in N)) return N.meta.name;
      return cce(o.summary ?? o.description);
    }, [Bt, o.script, o.summary, o.description]),
    Et = ee(() => weo(o), [o.script, o.description, o.summary]),
    { name: xt, subtext: Dt, stats: ue } = veo(o, Et, q, D);
  function pe() {
    U({ scroll: 0, expanded: !1 });
  }
  function qe(N) {
    (z((wt) => Rt(Rt(wt, 0, W.length - 1) + N, 0, W.length - 1)), J(0), pe());
  }
  function rn(N) {
    if (!et) return;
    (J((wt) => Rt(Rt(wt, 0, et.agents.length - 1) + N, 0, et.agents.length - 1)), pe());
  }
  function uo(N) {
    U((wt) => ({ ...wt, scroll: Math.max(0, wt.scroll + N) }));
  }
  function Zt(N) {
    if (O === "phases") {
      qe(N);
      return;
    }
    rn(N);
  }
  function po() {
    if ((pt(!1), O === "agent")) {
      Z("agents");
      return;
    }
    if (O === "agents") {
      Z("phases");
      return;
    }
    if (l) l();
    else i();
  }
  function sn() {
    if (at && at.agents.length > 0) (J(0), G("all"), Z("agents"));
  }
  function fo() {
    if (!st || !at) return;
    if (nt !== "all") (G("all"), J(at.agents.indexOf(st)));
    if ((pe(), ho === "loading")) pt(!0);
    else Z("agent");
  }
  function mo() {
    if (!at || ct) return;
    let N = new Set(at.agents.map((wt) => It(wt, H)));
    (G((wt) => {
      let vt = Ut.indexOf(wt);
      for (let se = 0; se < Ut.length; se++) {
        vt = (vt + 1) % Ut.length;
        let as = Ut[vt];
        if (as === "all" || N.has(as)) break;
      }
      return Ut[vt];
    }),
      J(0),
      pe());
  }
  let st = O !== "phases" && et ? et.agents[ut] : void 0,
    Gt = st ? It(st, H) : void 0,
    ve = !!st && $t(st) && !!st.agentId && !!d,
    Ae = !!st && $t(st) && !!st.agentId && !!p,
    oe = T - 9,
    ln = et ? Math.max(14, ...et.agents.map((N) => 4 + le(N.label))) : 14,
    cn = Math.max(12, Math.min(30, ln, oe - 30)),
    go = oe - cn,
    dn = O === "agent" && W.length > 0 && T >= 64 && go >= 30,
    Yr = dn ? go : L,
    ho = Br(o.workflowRunId, st?.agentId, st?.lastProgressAt, st?.promptFramed),
    Ii = Kr(ct ? fi : null);
  if (ct) {
    if (!st) pt(!1);
    else if (ho !== "loading" || Ii) (pt(!1), Z("agent"));
  }
  let Qr = Gt === "queued" || Gt === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Ue = ee(
      () =>
        O === "agent" && st && Gt
          ? Si({ agent: st, status: Gt, transcript: ho, expanded: tt, width: Yr, nowMs: Qr })
          : { lines: [], expandable: !1, folds: [], detailExpandable: !1 },
      [O, st, Gt, ho, tt, Yr, Qr]
    ),
    bo = Ue.lines;
  function Di() {
    if (st && $t(st) && st.agentId) d?.(st.agentId);
  }
  function Pi() {
    if (st && $t(st) && st.agentId) p?.(st.agentId);
  }
  an(
    { "confirm:previous": () => Zt(-1), "confirm:next": () => Zt(1) },
    { context: "Confirmation" }
  );
  let pn = o.status === "running" && !!h,
    fn = o.status === "paused" && !!o.scriptPath && !!o.workflowRunId && !!b,
    Xr = o.status === "running" && !!u && O === "phases";
  function Ni() {
    if (pn) h?.();
    else if (fn) b?.(CSr(o));
  }
  let Oi = (N) => {
      if (N.ctrl || N.meta) return;
      if (N.key === "j")
        if ((N.preventDefault(), O === "agent")) uo(1);
        else Zt(1);
      else if (N.key === "k")
        if ((N.preventDefault(), O === "agent")) uo(-1);
        else Zt(-1);
      else if (N.key === "return" || N.key === "right") {
        if ((N.preventDefault(), O === "phases")) sn();
        else if (O === "agents") fo();
        else if (N.key === "return" && Ue.expandable) {
          if (!tt && Ue.detailExpandable) g("workflow_agent_card_detail");
          let { folds: wt } = Ue;
          U(({ scroll: vt, expanded: se }) => ({
            expanded: !se,
            scroll: se ? ki(vt, wt) : Ti(vt, wt)
          }));
        }
      } else if (N.key === "left") (N.preventDefault(), po());
      else if (N.key === "r" && Ae) (N.preventDefault(), Pi());
      else if (N.key === "x" && ve) (N.preventDefault(), Di());
      else if (N.key === "x" && Xr) (N.preventDefault(), u?.());
      else if (N.key === " ") (N.preventDefault(), i());
      else if (N.key === "p" && (pn || fn)) (N.preventDefault(), Ni());
      else if (N.key === "f" && O === "agents") (N.preventDefault(), mo());
      else if (N.key === "s" && Bt) (N.preventDefault(), Tt(!0));
    },
    xo = W.length > 0;
  if (Mt)
    return e(URt, {
      script: o.script,
      defaultName: Xt,
      onDone: (N) => {
        if (N) i(N);
        else Tt(!1);
      }
    });
  let zt = k < 18,
    Zr = k - (zt ? 8 : 11),
    ts = Math.max(1, Zr - 3),
    mn = W.length > ts,
    es = mn ? Math.max(1, ts - 1) : W.length,
    Fi = Math.max(1, Zr - es - (mn ? 1 : 0)),
    wo = Vt(Y, W.length, es),
    ji = Math.max(
      14,
      ...W.map((N, wt) => {
        let vt = N.status === "done" ? ne.tick : N.status === "failed" ? ne.cross : String(wt + 1),
          se = N.totalCount > 0 ? `${N.doneCount}/${N.totalCount}` : "";
        return 2 + le(vt) + 1 + le(N.title) + (se ? 1 + le(se) : 0);
      })
    ),
    ns = Math.max(12, Math.min(34, ji, oe - 24)),
    rs = oe - ns,
    Ki = O !== "agent" && xo && T >= 64 && rs >= 20,
    gn = Math.max(1, k - (zt ? 7 : 8)),
    ss = Math.max(3, k - (zt ? 8 : 9)),
    is = dn ? gn : ss,
    ls = Math.max(0, bo.length - is);
  if (B > ls) U({ scroll: ls, expanded: tt });
  let He = nt !== "all" && O !== "phases" ? nn[nt].toLowerCase() : void 0,
    St = [];
  if (O === "agent") {
    if ((St.push(`${uB}${_M} agent`), bo.length > is)) St.push("j/k scroll");
    if (Ue.expandable) St.push(`${hTt} ${tt ? "collapse" : "expand"}`);
  } else if (xo) St.push(`${uB}${_M} select`);
  if (ve) St.push("x stop");
  if (Xr) St.push("x stop workflow");
  if (Ae) St.push("r restart");
  if (pn) St.push("p pause");
  else if (fn) St.push("p resume");
  if (O === "agents" && xo) St.push(He ? `f filter: ${He}` : "f filter");
  if ((St.push("esc back"), Bt)) St.push("s save");
  let qi = St.join(" \xB7 ");
  return e(Do, {
    onKeyDown: Oi,
    children: e(we, {
      title: null,
      hideBorder: !0,
      hideInputGuide: !0,
      onCancel: po,
      color: "text",
      children: r(s, {
        flexDirection: "column",
        width: T,
        minHeight: Math.max(zt ? 8 : 12, Math.min(k - 1, A - 6)),
        maxHeight: Math.max(zt ? 8 : 11, k - 1),
        overflowY: "hidden",
        children: [
          !xo
            ? r(Q, { children: [e(Ho, { children: "No agents yet." }), e(s, { flexGrow: 1 })] })
            : O === "agent" && st && et
              ? r(Q, {
                  children: [
                    e(Bat, { name: xt, subtext: Dt, stats: ue, width: T }),
                    !zt && e(s, { height: 1 }),
                    dn
                      ? e(Gr, {
                          phase: et,
                          clampedAgent: ut,
                          agentLabel: st.label,
                          detailLines: bo,
                          cardScroll: B,
                          leftWidth: cn,
                          rightWidth: go,
                          viewport: gn,
                          workflowActive: H,
                          filterLabel: He
                        })
                      : e(zr, {
                          agentLabel: st.label,
                          position: `${ut + 1}/${et.agents.length}`,
                          detailLines: bo,
                          cardScroll: B,
                          contentWidth: L,
                          viewport: ss
                        }),
                    e(s, { flexGrow: 1 })
                  ]
                })
              : Ki && et
                ? r(Q, {
                    children: [
                      e(Bat, { name: xt, subtext: Dt, stats: ue, width: T }),
                      !zt && e(s, { height: 1 }),
                      e(Vr, {
                        phases: W,
                        selectedPhase: et,
                        clampedPhase: Y,
                        clampedAgent: ut,
                        level: O === "phases" ? "phases" : "agents",
                        leftWidth: ns,
                        rightWidth: rs,
                        viewport: gn,
                        workflowActive: H,
                        filterLabel: He
                      }),
                      e(s, { flexGrow: 1 })
                    ]
                  })
                : r(Q, {
                    children: [
                      e(Bat, { name: xt, subtext: Dt, stats: ue, width: T }),
                      !zt && e(s, { height: 1 }),
                      W.slice(wo.from, wo.to).map((N, wt) => {
                        let vt = wo.from + wt;
                        return e(
                          ppr,
                          {
                            index: vt + 1,
                            title: N.title,
                            done: N.doneCount,
                            total: N.totalCount,
                            status: N.status,
                            selected: vt === Y
                          },
                          `${vt}-${N.title}`
                        );
                      }),
                      mn && e(Hr, { win: wo, total: W.length }),
                      e(s, { flexGrow: 1 }),
                      et
                        ? e(Jr, {
                            phase: et,
                            selectedAgent: ut,
                            level: O === "phases" ? "phases" : "agents",
                            contentWidth: L,
                            viewport: Fi,
                            tight: zt,
                            workflowActive: H,
                            filterLabel: He
                          })
                        : null
                    ]
                  }),
          r(n, { dimColor: !0, italic: !0, wrap: "truncate-end", children: [" ", qi] })
        ]
      })
    })
  });
}
export { URt, Cat };

//# sourceMappingURL=chunk-c1t2v2v5.js.map
