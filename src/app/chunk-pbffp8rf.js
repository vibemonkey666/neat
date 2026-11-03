import {
  fileURLToPath as __filePath_18e458ad48e22626,
  URL as __filePath_18e458ad48e22626_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ns, TI, or } from "./chunk-5rw2zfa0.js";
import { R, N, d } from "./chunk-fs43t96t.js";
import { _ } from "./chunk-4kxznmzw.js";
import { re, Ft } from "./chunk-a16y5hcz.js";
import { L } from "./chunk-wrtp8qz8.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { Ud, Wg, i3r, UTt, ZJo } from "./chunk-d54avynm.js";
import { l } from "./chunk-ewvf3tep.js";
import { br } from "./chunk-wejdb0zs.js";
import { m } from "./chunk-brszmkb3.js";
import { qf } from "./chunk-cj37hmns.js";
import { $s } from "./chunk-vw9e882a.js";
import { Ro } from "./chunk-1e5yp9hx.js";
import { pe, pr, qRe } from "./chunk-7c3thgax.js";
import { He } from "./chunk-1hp0t8kv.js";
import { t2t } from "./chunk-p2qv5xd4.js";
import { o0e, qer, Yer } from "./chunk-2mh7w975.js";
import { i0e } from "./chunk-bm0f9j8a.js";
import { Jer, _9 } from "./chunk-mg0tfavz.js";
import { Pvt } from "./chunk-pdcz0wmt.js";
import { RV } from "./chunk-s6fbb5tf.js";
import { H } from "./chunk-p8tprgqa.js";
import { Tst } from "./chunk-m25ae09s.js";
import { Gse } from "./chunk-f9x3sh8a.js";
import { Fe } from "./chunk-a2y39866.js";
var Wn = 4294967295,
  zn = Wn - 1,
  { floor: Xn, min: qn } = Math;
function Kn(e, o, r, t) {
  var n = 0,
    s = e == null ? 0 : e.length;
  if (s === 0) return 0;
  o = r(o);
  var p = o !== o,
    i = o === null,
    a = Gse(o),
    f = o === void 0;
  while (n < s) {
    var u = Xn((n + s) / 2),
      x = r(e[u]),
      y = x !== void 0,
      c = x === null,
      g = x === x,
      k = Gse(x);
    if (p) var h = t || g;
    else if (f) h = g && (t || y);
    else if (i) h = g && y && (t || !c);
    else if (a) h = g && y && !c && (t || !k);
    else if (c || k) h = !1;
    else h = t ? x <= o : x < o;
    if (h) n = u + 1;
    else s = u;
  }
  return qn(s, zn);
}
var hr = Kn;
var Yn = 4294967295,
  Jn = Yn >>> 1;
function Qn(e, o, r) {
  var t = 0,
    n = e == null ? t : e.length;
  if (typeof o == "number" && o === o && n <= Jn) {
    while (t < n) {
      var s = (t + n) >>> 1,
        p = e[s];
      if (p !== null && !Gse(p) && (r ? p <= o : p < o)) t = s + 1;
      else n = s;
    }
    return n;
  }
  return hr(e, o, Tst, r);
}
var Ue = Qn;
function Zn(e, o) {
  return Ue(e, o);
}
var Ho = Zn;
function es(e, o) {
  return Ue(e, o, !0);
}
var kr = es;
var UKr = Ud;
var Ge = UKr.map((e) => `classic.${e}`);
var Oer = [
  "model.complete",
  "model.classify",
  "model.fork",
  "audio.play",
  "audio.speak",
  "mcp.call",
  "mcp.connect",
  "session.cwd",
  "session.root",
  "session.model",
  "session.turns",
  "session.id",
  "session.messages",
  "session.repo",
  "session.surface",
  "session.surfaces",
  "session.authorize",
  "session.identity",
  "session.usage",
  "session.version",
  "turn.abort",
  "prompt.read",
  "flag.value",
  "tool.list",
  "tool.register",
  "command.list",
  "command.register",
  "config.list",
  "agent.list",
  "agent.register",
  "ui.toast",
  "ui.status",
  "ui.log",
  "ui.notice",
  "ui.invalidate",
  "ui.open",
  "ui.close",
  "ui.panes",
  "ui.selection",
  "ui.copy",
  "ui.view",
  "ui.notify",
  "ui.blit",
  "fs.read",
  "fs.write",
  "fs.list",
  "fs.exists",
  "fs.stat",
  "fs.ancestors",
  "store.get",
  "store.set",
  "store.delete",
  "store.keys",
  "state.get",
  "state.set",
  "clock.now",
  "clock.sleep",
  "clock.after",
  "clock.every",
  "http.fetch",
  "process.run",
  "process.spawn",
  "settings.read",
  "env.get",
  "env.set"
];
var ZLe = [
  ...Ge,
  "tool.call",
  "tool.check",
  "ui.render",
  "ui.resolve",
  "ui.press",
  "ui.input",
  "ui.select",
  "ui.message",
  "ui.fault",
  "ui.scroll",
  "ui.focus",
  "agent.offer",
  "agent.spawn",
  "prompt.submit",
  "prompt.fill",
  "prompt.suggest",
  "prompt.edit",
  "prompt.change",
  "prompt.autocomplete",
  "prompt.section",
  "prompt.context",
  "prompt.attachment",
  "prompt.mention",
  "prompt.compose",
  "tool.describe",
  "command.run",
  "command.describe",
  "config.set",
  "config.describe",
  "telemetry.log",
  "telemetry.mark",
  "skill.prompt",
  "attribution.text",
  "session.start",
  "session.receive",
  "session.append",
  "session.send",
  "session.compact",
  "session.attach",
  "session.detach",
  "session.measure",
  "session.end",
  "plugin.register",
  "turn.start",
  "turn.step",
  "turn.complete",
  "engine.create",
  ...Oer
];
var uSi = Ge.filter((e) => e !== "classic.PreToolUse");
var e0e = (e) => ZLe.includes(e);
var BVo = (e) => Oer.includes(e);
var BKr = ["turn.step", "process.spawn"];
var xyn = (e) => BKr.includes(e);
var wr = new Set(ZLe.filter((e) => e.includes(".")).map((e) => e.slice(0, e.indexOf("."))));
var Ve =
  String.raw`(?!\p{Default_Ignorable_Code_Point})[\p{ID_Start}$_]` +
  String.raw`(?:(?!\p{Default_Ignorable_Code_Point})[\p{ID_Continue}$])*`;
var Sr = new RegExp(String.raw`^${Ve}\.${Ve}$`, "u");
var Xzt = (e) => Sr.test(e) && !wr.has(e.slice(0, e.indexOf(".")));
var XZs = ["managed", "user", "project", "local", "memory"];
var Pyn = ["replace", "append", "insert"];
var Mer = (e) => typeof e === "string" && Pyn.includes(e);
var me = Symbol.for("claude-code.state.atom");
function Do(e) {
  if (typeof e !== "object" || e === null || Object.isFrozen(e)) return e;
  for (let o of Object.values(e)) Do(o);
  return Object.freeze(e);
}
function Q(e, o = e.id) {
  let { plugin: r, key: t } = e;
  return Object.freeze(o === void 0 ? { plugin: r, key: t } : { plugin: r, key: t, id: o });
}
var Bl = (e, o, r) =>
  Object.freeze({
    [me]: !0,
    ref: Q(e),
    initial: Do(o),
    ...(r?.shape !== void 0 && { shape: r.shape })
  });
function We(e, o) {
  if (e.shape === void 0) return o === void 0 ? e.initial : o;
  let r = o;
  return r?.shape === e.shape && r.value !== void 0 ? r.value : e.initial;
}
var le = Symbol.for("claude-code.state.derived");
var ze = (e, o) => typeof e === "object" && e !== null && e[o] !== void 0;
var I = (e) => ze(e, me);
var Xe = (e) => ze(e, le);
var ql = (e, o) => {
  let r = {};
  return Object.freeze({
    [le]: r,
    sources: Object.freeze(e.map((t) => (I(t) || Xe(t) ? t : Q(t)))),
    compute: o
  });
};
var Ql = (e, o) =>
  I(e) ? Object.freeze({ ...e, [me]: !0, ref: Q(e.ref, o.requestId) }) : Q(e, o.requestId);
async function Mo(e, o) {
  if (I(o)) {
    let p = await e.get(o.ref);
    return { value: We(o, p.value), versions: [p.version] };
  }
  if (!Xe(o)) {
    let p = await e.get(o);
    return { value: p.value, versions: [p.version] };
  }
  let r = await Promise.all(o.sources.map((p) => Mo(e, p))),
    t = r.flatMap((p) => p.versions),
    n = t.join(","),
    s = o[le];
  if (s?.versions !== n && s !== void 0)
    ((s.value = o.compute(...r.map((p) => p.value))), (s.versions = n));
  return { value: s?.value, versions: t };
}
var rd = async (e, o) => (await Mo(e.state, o)).value;
var Tr = (e, o) => (e.shape === void 0 ? o : { shape: e.shape, value: o });
var vr = 64;
var pd = async (e, o, r) => {
  let t = e.state,
    n = I(o) ? o.ref : o;
  for (let s = 0; s < vr; s += 1) {
    let p = await t.get(n),
      i = I(o) ? We(o, p.value) : p.value,
      a = r(i),
      f = I(o) ? Tr(o, a) : a;
    if ((await t.set(n, f, { ifVersion: p.version })).isSet) return a;
  }
  throw Error(
    "update: the value was written by another every time it was read, up to the bound on tries; nothing was written"
  );
};
var MR = Bl;
var LR = ql;
var UR = Ql;
var WR = rd;
var qR = pd;
var JZs = ["prepend", "user", "append", "builtin", "core"];
var QZs = ["allow", "ask", "deny"];
var Svt = (e) => JZs.indexOf(e);
function jVo(e, o) {
  let r = Svt(o);
  return e.find((t) => Svt(t.from) < r && r < Svt(t.to))?.plugin;
}
var Jzt = (e) =>
  ({ prepend: ["append", "builtin", "core"], user: [], append: ["core"], builtin: [], core: [] })[
    e
  ];
var jKr = (e) => Jzt("prepend").includes(e);
var ZZs = ["prepend", "append"];
function WVo(e, o) {
  return Object.freeze([
    ...e,
    Object.freeze({ ...o, to: e.reduce((r, t) => (Svt(t.to) > Svt(r) ? t.to : r), o.to) })
  ]);
}
var GVo = (e) => `next.to:${e}`;
var wvt = Object.freeze([]);
import { join as gu } from "path";
var ou = "scripts/bundle-builtin-hooks-module.ts";
function ru(e) {
  let o = H(e) ? e.files : void 0;
  return Object.freeze(
    Object.fromEntries((H(o) ? Object.entries(o) : []).filter((r) => typeof r[1] === "string"))
  );
}
function tu(e, o) {
  let r = H(e) ? e.scan : void 0;
  if (
    H(r) &&
    Array.isArray(r.hooks) &&
    Array.isArray(r.calls) &&
    (r.nextTo === void 0 || Array.isArray(r.nextTo))
  )
    return r;
  throw new R(
    `the build carried no hooks module scan for ${o}`,
    "the build carried no hooks module scan for a built-in"
  );
}
var su = (e, o) =>
  new R(`the hooks module of ${e} cannot ship: ${o}`, "the hooks module of a built-in cannot ship");
var Ne = "hooks/register.ts";
var Ar = (e) => `builtin:${e}/${Ne}`;
var Co = "mods";
var $o = "mods/";
import { resolve as fu } from "path";
var Te = () => fu(import.meta.dirname, "../../../../../..");
import { dirname as du, relative as cu, resolve as uu, sep as xu } from "path";
var Or = "builtin-hooks-module:";
function yu(e, o) {
  let r = o.slice(Or.length);
  return r.startsWith($o)
    ? `${Co}/${r.slice($o.length)}`
    : cu(Te(), uu(du(e), r))
        .split(xu)
        .join("/");
}
var Lo = "builtin-hooks-module";
var XH = {
  name: Lo,
  setup(e) {
    (e.onResolve({ filter: /^builtin-hooks-module:/ }, (o) => ({
      path: yu(o.importer, o.path),
      namespace: Lo
    })),
      e.onLoad({ filter: /.*/, namespace: Lo }, async (o) => {
        let r = Bun.spawn([process.execPath, "--smol", gu(Te(), ou), o.path], {
            cwd: Te(),
            stdout: "pipe",
            stderr: "pipe",
            windowsHide: !0
          }),
          [t, n, s] = await Promise.all([
            new Response(r.stdout).text(),
            new Response(r.stderr).text(),
            r.exited
          ]);
        if (s !== 0) throw su(o.path, n);
        return { contents: `module.exports = ${t}`, loader: "js" };
      }));
  }
};
var Ke = (e, o) => new He(`${e}: ${o}: changed while it was read`);
class ve extends He {}
var U = (e) => (e instanceof Error && "code" in e ? String(e.code) : "EIO");
var Rr = (e, o, r) => new He(`${e}: ${o}: no such file`, { cause: U(r) });
var Pr = ["EMFILE", "ENFILE"];
async function Z(e, o) {
  try {
    return await e;
  } catch (r) {
    throw o(r);
  }
}
function Ir(e, o, r) {
  let t = U(r);
  return Pr.includes(t)
    ? new He(`${e}: ${o}: not read, no file descriptor free (${t})`)
    : Rr(e, o, r);
}
var Su = (e, o, r) => new He(`${e}: ${o}: not readable (${U(r)})`);
import { sep as Pu } from "path";
var Fr = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
var _o = (e) => i3r[UTt.find((o) => e.endsWith(o)) ?? ""] ?? "js";
function Hr(e) {
  let o = typeof e === "object" && e ? e : {},
    r = "errors" in o ? o.errors : void 0;
  return Array.isArray(r) ? r : [o];
}
function Dr(e, o) {
  let r = typeof e === "object" && e !== null,
    t = r && "message" in e ? String(e.message) : "",
    n = r && "position" in e ? e.position : void 0;
  if (!(
    typeof n === "object" &&
    n !== null &&
    "line" in n &&
    typeof n.line === "number" &&
    "column" in n
  ))
    return t;
  return `${t} (line ${Number(n.line) - o}, column ${String(n.column)})`;
}
var Mr = (e, o) =>
  Hr(e)
    .map((r) => Dr(r, o))
    .filter((r) => r !== "")
    .join("; ") || String(e);
function Per(e, o) {
  let r = _o(e),
    t = r === "js",
    n = r === "ts" ? "" : Fr;
  if (t) return o;
  try {
    let s = { loader: r, macro: !1 };
    return new Bun.Transpiler(s).transformSync(`${n}${o}`);
  } catch (s) {
    throw new He(
      Mr(
        s,
        Ft(
          n,
          `
`
        )
      )
    );
  }
}
var NVo = (e) => UTt.some((o) => e.endsWith(o));
var Bo = 32;
var Yzt = 1048576;
var Cr = 8388608;
function $r(e) {
  let o = [e];
  if (e.endsWith(".js")) {
    let r = e.slice(0, -3);
    o.push(`${r}.ts`, `${r}.tsx`);
  }
  if (e.endsWith(".jsx")) o.push(`${e.slice(0, -4)}.tsx`);
  if (e.endsWith(".mjs")) o.push(`${e.slice(0, -4)}.mts`);
  if (e.endsWith(".cjs")) o.push(`${e.slice(0, -4)}.cts`);
  for (let r of UTt) (o.push(`${e}${r}`), o.push(`${e}${Pu}index${r}`));
  return o;
}
var bvt = "claude-code";
var qZs = (e, o, r) =>
  new He(
    `${e}: cannot import "${o}" (from ${r}): a hooks module imports its own files by relative path and "${bvt}", nothing else`
  );
import { dirname as Lr, resolve as _r } from "path";
var Br = (e, o) => ([".", "..", "./", "../"].includes(e) ? _r(Lr(o), e, "index") : _r(Lr(o), e));
var $Vo = (e) => e === "." || e === ".." || e.startsWith("./") || e.startsWith("../");
var Ur = ["no such file", "not a regular file", "resolves outside the plugin's folder"];
import { isAbsolute as rx, relative as Xr, sep as tx } from "path";
import { constants as Gu } from "fs";
import { open as Vu } from "fs/promises";
class Uo extends ve {}
var Ae = (e, o) => new Uo(`${e}: ${o} is over ${Yzt} bytes and was not read`);
async function Gr(e, o) {
  let r = Buffer.allocUnsafe(o),
    t = 0;
  for (;;) {
    let { bytesRead: n } = await e.read(r, t, o - t, t);
    if (((t += n), n === 0 || t === o)) return r.subarray(0, t);
  }
}
import { readlink as _u, realpath as Bu } from "fs/promises";
function Vr(e, o) {
  return _u(`/proc/self/fd/${e}`).catch((r) => {
    let t = U(r);
    if (t !== "ENOENT" && t !== "ENOTDIR") throw r;
    return Bu(o);
  });
}
async function Je(e, { real: o, size: r }, t) {
  if (r > Yzt) throw Ae(t, e);
  let n = (f) => Ir(t, e, f);
  await using s = await Z(Vu(o, Gu.O_RDONLY | $s), (f) => (U(f) === "ELOOP" ? Ke(t, e) : n(f)));
  let p = await Z(s.stat(), n);
  if (!p.isFile()) throw Ke(t, e);
  if ((await Z(Vr(s.fd, o), n)) !== o) throw Ke(t, e);
  if (p.size > Yzt) throw Ae(t, e);
  let a = await Z(Gr(s, Yzt + 1), n);
  if (a.length > Yzt) throw Ae(t, e);
  return { real: o, source: a.toString("utf8") };
}
import { lstat as zu, realpath as Wr } from "fs/promises";
import { basename as Xu, isAbsolute as qu, relative as Ku, sep as Yu } from "path";
async function Ztt(e, o, r) {
  let t = await Z(Wr(o), (f) => Su(r, Xu(o), f)),
    n = (f) => Ir(r, e, f),
    s = await Z(Wr(e), n),
    p = Ku(t, s);
  if (p === ".." || p.startsWith(`..${Yu}`) || qu(p))
    throw new He(`${r}: ${e}: ${s} resolves outside the plugin's folder`);
  let a = await Z(zu(s), n);
  if (!a.isFile()) throw new He(`${r}: ${e}: not a regular file`);
  return { real: s, size: a.size };
}
var zr = (e, o) =>
  new ve(
    `${e}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` +
      ZJo
  );
function Qe(e, o, r) {
  let t = [o, r].find((n) => !NVo(n));
  if (t !== void 0) throw zr(e, t);
}
var FVo = (e, o) => (o.startsWith(`${e}: `) ? o.slice(`${e}: `.length) : o);
async function YZs({ spelled: e, importer: o, root: r, pluginName: t }, n, s) {
  let p = `${t}: cannot import "${e}" (from ${Xr(r, o) || o}):`,
    i = Br(e, o),
    a = Xr(r, i);
  if (a === ".." || a.startsWith(`..${tx}`) || rx(a))
    throw new He(`${p} it is outside the plugin's folder (${r})`);
  let u = [];
  for (let x of $r(i)) {
    let y = n.get(x);
    if (y !== void 0) return { file: x, source: y };
    try {
      let c = await Ztt(x, r, t);
      Qe(t, x, c.real);
      let g = s.get(c.real),
        k = g === void 0 ? void 0 : n.get(g);
      if (g !== void 0 && k !== void 0) return { file: g, source: k };
      let { real: E, source: j } = await Je(x, c, t);
      return { file: x, source: j, real: E };
    } catch (c) {
      let g = d(c);
      if (!(c instanceof He) || !Ur.some((E) => g.endsWith(E))) throw new He(`${p} ${FVo(t, g)}`);
      let h = c.cause === void 0;
      u.push(h ? g : `${g} (${String(c.cause)})`);
    }
  }
  throw new He(`${p} no such file under ${r}`, u.length === 0 ? void 0 : { cause: u.join("; ") });
}
var qr = (e, o, r) => new He(`${e}: ${o} ${r}`);
var ax = (e, o) => qr(e, o, `takes the module over ${Cr} bytes in total and was not read`);
async function fx(e, o, r) {
  let t = await Ztt(e, o, r);
  return (Qe(r, e, t.real), Je(e, t, r));
}
var UVo = () => t2t();
var Ze = Kr();
var Yr = 80;
function Ier() {
  let e = new Map();
  return {
    get: (o) => e.get(o),
    set: (o, r) => {
      e.set(o, r);
    }
  };
}
var Jr = Ier();
function Kr() {
  let e = Ier(),
    o = Ier();
  return {
    register: (r, t) => {
      e.set(r, t);
    },
    source: (r) => e.get(r),
    registerScan: (r, t) => {
      o.set(r, t);
    },
    scan: (r) => o.get(r)
  };
}
function Oe({ call: e, scanned: o, what: r, holder: t }) {
  let { endOf: n, functionOf: s } = o.climbs,
    p = n(e);
  if (p === void 0) return;
  let { value: i, parent: a } = p;
  if (!(
    a.type === "ExpressionStatement" ||
    ((a.type === "ReturnStatement" || (a.type === "ArrowFunctionExpression" && a.body === i)) &&
      s(i) === t)
  ))
    throw o.refuse(
      i,
      `the value of ${r} is kept (assigned, passed, read, or returned from a nested function); it takes .catch(handler) where it is called and nothing else`
    );
}
var ce = "Client";
var Zr = (e, o) => e.id === o || e.params.includes(o);
var ot = {
  VariableDeclarator: (e, o) => e.id === o,
  FunctionDeclaration: Zr,
  FunctionExpression: Zr,
  ArrowFunctionExpression: (e, o) => e.params.includes(o),
  ClassDeclaration: (e, o) => e.id === o,
  ClassExpression: (e, o) => e.id === o,
  CatchClause: (e, o) => e.param === o,
  AssignmentPattern: (e, o) => e.left === o,
  RestElement: (e, o) => e.argument === o,
  ArrayPattern: (e, o) => e.elements.includes(o),
  Property: (e, o, r) => e.value === o && r?.type === "ObjectPattern",
  ImportSpecifier: (e, o) => e.local === o,
  ImportDefaultSpecifier: (e, o) => e.local === o,
  ImportNamespaceSpecifier: (e, o) => e.local === o
};
var Ex = (e) => ot[e.type];
var wx = (e, o) =>
  (o?.type === "Property" || o?.type === "PropertyDefinition" || o?.type === "MethodDefinition") &&
  o.key === e &&
  !o.computed;
var Go = (e) => typeof e === "object" && e !== null && typeof e.type === "string";
function Nx(e) {
  let o = new WeakMap();
  return (r) => {
    let t = o.get(r);
    if (t !== void 0) return t;
    let n = e(r);
    return (o.set(r, n), n);
  };
}
function p0(e, o, r) {
  let t = [{ node: e, parent: void 0, grandparent: void 0 }];
  for (let n = t.pop(); n !== void 0; n = t.pop()) {
    if ((o(n), r?.(n.node))) continue;
    let s = Object.keys(n.node);
    for (let p = s.length - 1; p >= 0; p -= 1) {
      let i = s[p];
      if (i === void 0 || i === "loc" || i === "type" || i === "start" || i === "end") continue;
      let f = n.node[i];
      if (Array.isArray(f))
        for (let u = f.length - 1; u >= 0; u -= 1) {
          let x = f[u];
          if (Go(x)) t.push({ node: x, parent: n.node, grandparent: n.parent });
        }
      else if (Go(f)) t.push({ node: f, parent: n.node, grandparent: n.parent });
    }
  }
}
function Ax(e) {
  let o = new Map();
  return (
    p0(e, ({ node: r, parent: t }) => {
      if (t !== void 0) o.set(r, t);
    }),
    o
  );
}
function rt(e) {
  let o;
  for (let r of e.properties) {
    if (r.type === "SpreadElement") {
      o = o && { ...o, isSpreadAfter: !0 };
      continue;
    }
    let { key: t } = r;
    if (
      !r.computed &&
      r.kind === "init" &&
      ((t.type === "Identifier" && t.name === "module") ||
        (t.type === "Literal" && t.value === "module"))
    )
      o = { property: r, isSpreadAfter: !1 };
  }
  return o;
}
function oe(e) {
  if (e === void 0) return "no argument";
  switch (e.type) {
    case "Identifier":
      return `the variable ${e.name}`;
    case "TemplateLiteral":
      return "a template with a substitution";
    case "SpreadElement":
      return "a spread";
    case "Literal":
      return `the literal ${e.raw ?? String(e.value)}`;
    case "MemberExpression":
      return "a member read";
    case "CallExpression":
      return "a call";
    case "BinaryExpression":
      return "a concatenation";
    case "ObjectExpression":
      return "an object whose plugin or key is not a string literal";
    default:
      return `a ${e.type}`;
  }
}
function V(e) {
  if (e.type === "Literal") return typeof e.value === "string" ? e.value : void 0;
  if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) return;
  let o = e.quasis[0]?.value.cooked;
  return o === void 0 || o === null ? void 0 : o;
}
function tt(e, o) {
  if (!o || o.type !== "ObjectExpression")
    return {
      at: o ?? e,
      problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${oe(o)})`
    };
  let r = rt(o);
  if (!r)
    return {
      at: o,
      problem: `Client names no module: give it module, the surface module's path as a string literal ("./board.tsx")`
    };
  if (r.isSpreadAfter)
    return {
      at: r.property,
      problem: "a spread after module in Client(...) could replace it: put module after the spread"
    };
  let { value: t } = r.property,
    n = V(t);
  if (n === void 0)
    return {
      at: t,
      problem: `Client module must be a string literal, the surface module's path relative to this file (got ${oe(t)})`
    };
  return { at: t, spelled: n };
}
var Vo = (e) =>
  (e.type === "Identifier" && e.name === ce) ||
  (e.type === "Literal" && e.value === ce) ||
  (e.type === "MemberExpression" &&
    !e.computed &&
    e.property.type === "Identifier" &&
    e.property.name === ce);
var nt = "h";
function st(e) {
  let { callee: o } = e;
  if (o.type !== "Super" && Vo(o)) return { argument: e.arguments[0] };
  let [r, t] = e.arguments;
  return o.type === "Identifier" &&
    o.name === nt &&
    r !== void 0 &&
    r.type !== "SpreadElement" &&
    Vo(r)
    ? { argument: t }
    : void 0;
}
function Wo(e) {
  let o = [];
  return (
    p0(e, ({ node: r }) => {
      if (r.type !== "CallExpression") return;
      let t = st(r);
      if (t) o.push(tt(r, t.argument));
    }),
    o.toSorted((r, t) => t.at.start - r.at.start)
  );
}
var Pe = "default";
function T(e) {
  let o = e.type === "Identifier",
    r = e.type === "Literal";
  return o ? e.name : r ? String(e.value) : "";
}
function pt(e) {
  let o = [];
  for (let r of e.body)
    if (r.type === "ExportDefaultDeclaration") o.push(Pe);
    else if (r.type === "ExportAllDeclaration") {
      if (r.exported !== null && r.exported) o.push(T(r.exported));
    } else if (r.type === "ExportNamedDeclaration") {
      let { declaration: t } = r;
      if (t?.type === "FunctionDeclaration" || t?.type === "ClassDeclaration") o.push(t.id.name);
      else if (t?.type === "VariableDeclaration") {
        for (let { id: s } of t.declarations) if (s.type === "Identifier") o.push(s.name);
      }
      for (let s of r.specifiers) o.push(T(s.exported));
    }
  return o;
}
var it = (e) => /^[A-Z][A-Za-z0-9]*$/.test(e) && /[a-z]/.test(e);
function dSi(e) {
  let o = pt(e);
  if (o.includes(Pe)) return { component: Pe };
  let r = o.filter(it),
    [t] = r;
  if (r.length === 1 && t !== void 0) return { component: t };
  return {
    problem: `exports ${r.length === 0 ? "no component" : r.join(", ")}: give it a default export or a single capitalized one (export function Board(props, surface) { ... })`
  };
}
import { dirname as Wx, isAbsolute as zx, relative as Xx, resolve as at, sep as ft } from "path";
function zo(e) {
  let { spelled: o, file: r, root: t } = e,
    n = `Client module "${o}"`;
  if (!$Vo(o))
    return {
      problem: `${n} is not relative: spell the surface module's path from this file ("./board.tsx")`
    };
  if (!NVo(o))
    return { problem: `${n} is not named like code: a surface module's path ends in ` + ZJo };
  let s = at(Wx(r), o),
    p = Xx(at(t), s);
  return p === ".." || p.startsWith(`..${ft}`) || zx(p)
    ? { problem: `${n} leaves the plugin's folder` }
    : { module: p.split(ft).join("/") };
}
function mt(e) {
  try {
    return UVo().parse(e, { ecmaVersion: "latest", sourceType: "module" });
  } catch {
    return;
  }
}
function cSi(e, o, r) {
  if (!e.includes(ce)) return e;
  let t = mt(e),
    n = e;
  for (let s of t ? Wo(t) : []) {
    if (!("spelled" in s)) continue;
    let p = zo({ spelled: s.spelled, file: o, root: r });
    if ("module" in p) n = n.slice(0, s.at.start) + _(p.module) + n.slice(s.at.end);
  }
  return n;
}
function dt(e) {
  let o = new Set();
  for (let [r, t] of e.files)
    for (let n of Wo(t.scanned.program)) {
      if ("problem" in n) throw t.scanned.refuse(n.at, n.problem);
      let s = zo({ spelled: n.spelled, file: r, root: e.root });
      if ("problem" in s) throw t.scanned.refuse(n.at, s.problem);
      o.add(s.module);
    }
  return [...o].sort();
}
function eo(e) {
  switch (e.type) {
    case "Identifier":
      return `the variable ${e.name}`;
    case "TemplateLiteral":
      return "a template string";
    case "CallExpression":
      return "a call";
    case "ConditionalExpression":
      return "a conditional";
    case "MemberExpression":
      return "a member read";
    case "BinaryExpression":
      return "a concatenation";
    case "SpreadElement":
      return "a spread";
    case "Literal":
      return "regex" in e ? "a RegExp" : `the literal ${e.raw ?? String(e.value)}`;
    default:
      return `a ${e.type}`;
  }
}
function ct(e) {
  let o = !1;
  for (let { scanned: r } of e.files.values())
    p0(
      r.program,
      (t) => {
        if (t.node.type === "ImportExpression") o = !0;
      },
      () => o
    );
  return o;
}
function F(e) {
  switch (e?.type) {
    case "Identifier":
      return [e];
    case "ArrayPattern":
      return e.elements.flatMap(F);
    case "ObjectPattern":
      return e.properties.flatMap((o) => F(o.type === "Property" ? o.value : o));
    case "AssignmentPattern":
      return F(e.left);
    case "RestElement":
      return F(e.argument);
    default:
      return [];
  }
}
function ut(e) {
  let o = [],
    r = [];
  return (
    p0(e, ({ node: t }) => {
      switch (t.type) {
        case "AssignmentExpression":
          o.push(...F(t.left));
          break;
        case "UpdateExpression":
          o.push(...F(t.argument));
          break;
        case "ForInStatement":
        case "ForOfStatement":
          (o.push(...F(t.left)), r.push(...F(t.left)));
          break;
        default:
          break;
      }
    }),
    { byName: Map.groupBy(o, (t) => t.name), inLoopHeads: Map.groupBy(r, (t) => t.name) }
  );
}
var ue = (e, o, r) => o !== void 0 && (Ex(o)?.(o, e, r) ?? !1);
function Xo(e, o) {
  let r = [];
  return (
    p0(e, ({ node: t, parent: n, grandparent: s }) => {
      if (t.type === "Identifier" && t.name === o && ue(t, n, s)) r.push(t);
    }),
    r
  );
}
var oo = (e, o, r) =>
  !ue(e, o, r) &&
  !(o?.type === "MemberExpression" && o.property === e && !o.computed) &&
  !wx(e, o) &&
  o?.type !== "LabeledStatement" &&
  o?.type !== "BreakStatement" &&
  o?.type !== "ContinueStatement" &&
  o?.type !== "ExportSpecifier" &&
  o?.type !== "ImportSpecifier" &&
  o?.type !== "ImportDefaultSpecifier" &&
  o?.type !== "ImportNamespaceSpecifier" &&
  o?.type !== "MetaProperty" &&
  o?.type !== "ExportAllDeclaration" &&
  o?.type !== "ImportAttribute";
function xt(e) {
  let o = new Map();
  function r(t) {
    let n = t.type === "VariableDeclaration" && t.kind === "const";
    if (t.type === "FunctionDeclaration" && t.id !== null) o.set(t.id.name, t);
    else if (n)
      for (let s of t.declarations) {
        let { id: p, init: i } = s;
        if (
          p.type === "Identifier" &&
          (i?.type === "FunctionExpression" || i?.type === "ArrowFunctionExpression")
        )
          o.set(p.name, i);
      }
  }
  for (let t of e.body)
    if ((r(t), t.type === "ExportNamedDeclaration" || t.type === "ExportDefaultDeclaration")) {
      let s = t.declaration;
      if (s !== null && s !== void 0) r(s);
    }
  return o;
}
function qo(e) {
  let o = [],
    r = [];
  return (
    p0(e, ({ node: t, parent: n, grandparent: s }) => {
      if (t.type !== "Identifier") return;
      if (ue(t, n, s)) o.push(t);
      else if (oo(t, n, s)) r.push(t);
    }),
    { declared: Map.groupBy(o, (t) => t.name), read: Map.groupBy(r, (t) => t.name) }
  );
}
function yt(e) {
  let o = [],
    r = [],
    t = [];
  return (
    e
      .filter((n) => n.start < n.end)
      .flatMap((n) => [
        { place: n.start, span: n, isStart: !0, rank: -n.end },
        { place: n.end, span: n, isStart: !1, rank: -n.start }
      ])
      .toSorted(
        (n, s) => n.place - s.place || Number(n.isStart) - Number(s.isStart) || n.rank - s.rank
      )
      .forEach((n) => {
        (n.isStart ? o.push(n.span) : o.splice(o.lastIndexOf(n.span), 1),
          r.push(n.place),
          t.push(o.at(-1)?.declaration));
      }),
    (n) => t[kr(r, n) - 1]
  );
}
function gt(e, o) {
  switch (e.type) {
    case "SequenceExpression":
    case "ChainExpression":
    case "ParenthesizedExpression":
    case "AwaitExpression":
      return !0;
    case "LogicalExpression":
      return e.right === o;
    case "ConditionalExpression":
      return e.test !== o;
    case "UnaryExpression":
      return e.operator === "void";
    default:
      return !1;
  }
}
function D(e) {
  if (e.type !== "Property") return;
  let { key: o } = e,
    r = !e.computed && o.type === "Identifier",
    t = !e.computed && o.type === "Literal";
  return r ? o.name : t ? String(o.value) : void 0;
}
var W = (e) =>
  e.properties.some(
    (o) => o.type === "Property" && (o.kind !== "init" || (!o.shorthand && D(o) === "__proto__"))
  );
var z = (e) =>
  e?.type === "FunctionDeclaration" ||
  e?.type === "FunctionExpression" ||
  e?.type === "ArrowFunctionExpression";
var ht = (e, o) => z(e) || (e.type === "PropertyDefinition" && !e.static && e.value === o);
function kt(e, o, r) {
  switch (e.type) {
    case "ArrayExpression":
      return !0;
    case "Property":
      return e.value === o;
    case "ObjectExpression":
      return o.type === "Property" && !r(e);
    default:
      return !1;
  }
}
function jt(e) {
  switch (e.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "StaticBlock":
    case "BlockStatement":
    case "SwitchStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return !0;
    default:
      return !1;
  }
}
function Et(e) {
  switch (e.type) {
    case "Property":
    case "ObjectPattern":
    case "ArrayPattern":
    case "RestElement":
    case "AssignmentPattern":
      return !0;
    default:
      return !1;
  }
}
function wt(e, o) {
  switch (e.type) {
    case "Program":
    case "StaticBlock":
      return !0;
    case "BlockStatement":
      return z(o);
    default:
      return z(e);
  }
}
function X(e, o) {
  let r = new Map();
  return (t) => {
    let n = r.get(t);
    if (n !== void 0) return n ?? void 0;
    let s = t,
      p = e(t),
      i = p === void 0 ? null : (o(p, s) ?? r.get(p));
    while (p !== void 0 && i === void 0)
      ((s = p), (p = e(p)), (i = p === void 0 ? null : (o(p, s) ?? r.get(p))));
    for (let a = t; a !== void 0 && a !== p; a = e(a)) r.set(a, i ?? null);
    return i ?? void 0;
  };
}
function wy(e) {
  let o = Qr(W);
  return {
    parentOf: e,
    functionOf: X(e, (r) => (z(r) ? r : void 0)),
    lexicalScopeOf: X(e, (r) => (jt(r) ? r : void 0)),
    varScopeOf: X(e, (r) => (wt(r, e(r)) ? r : void 0)),
    declarerOf: X(e, (r) => (Et(r) ? void 0 : r)),
    deferrerOf: X(e, (r, t) => (ht(r, t) ? r : void 0)),
    endOf: X(e, (r, t) => (gt(r, t) ? void 0 : { value: t, parent: r })),
    heldAt: X(e, (r, t) => (kt(r, t, o) ? void 0 : { value: t, parent: r }))
  };
}
function by(e) {
  switch (e.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassDeclaration":
    case "ClassExpression":
    case "StaticBlock":
    case "BlockStatement":
    case "CatchClause":
    case "SwitchStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return !0;
    default:
      return !1;
  }
}
var bt = (e) => (typeof e === "string" || by(e) ? e : "unplaced");
function Ie(e, { parentOf: o, declarerOf: r, lexicalScopeOf: t, varScopeOf: n }) {
  let s = r(e);
  switch (s?.type) {
    case "VariableDeclarator": {
      let p = o(s);
      return (p?.type === "VariableDeclaration" && p.kind !== "var" ? t(s) : n(s)) ?? "unplaced";
    }
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return s.id === e ? (t(s) ?? "unplaced") : s;
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "CatchClause":
      return s;
    case "ImportSpecifier":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
      return n(s) ?? "unplaced";
    case "AssignmentExpression":
    case "ForInStatement":
    case "ForOfStatement":
      return "nothing";
    default:
      return "unplaced";
  }
}
function St(e, o, r) {
  return [...e].flatMap(([t, n]) => {
    if (typeof t === "string") return [];
    if (t.type === "SwitchStatement") {
      let { discriminant: a } = t;
      return [
        { start: t.start, end: a.start, declaration: n },
        { start: a.end, end: t.end, declaration: n }
      ];
    }
    let s = o(t),
      i =
        r === "engine" && t.type === "BlockStatement" && s !== void 0 && z(s) && !e.has(s) ? s : t;
    return [{ start: i.start, end: i.end, declaration: n }];
  });
}
function Ko(e, o, r) {
  let t = new Map(),
    n = new Map(),
    s = new Map(),
    { parentOf: p } = o;
  return (i) => {
    let a = s.get(i);
    if (a !== void 0) return a ?? void 0;
    let f =
      t.get(i.name) ??
      new Map(
        (e.get(i.name) ?? [])
          .map((c) => [bt(Ie(c, o)), c])
          .filter(([c]) => c !== "nothing" && (typeof c === "string" || c.type !== "Program"))
      );
    if ((t.set(i.name, f), p(i) === void 0)) return i;
    if (f.size === 0) return;
    let u = f.get("unplaced");
    if (u !== void 0) return u;
    let x = n.get(i.name) ?? yt(St(f, p, r));
    n.set(i.name, x);
    let y = x(i.start);
    return (s.set(i, y ?? null), y);
  };
}
function Hy(e, o) {
  let { declared: r, read: t } = qo(e),
    n = ut(e);
  return {
    functions: xt(e),
    assigned: new Set(n.byName.keys()),
    assignedAt: n.byName,
    loopAssigned: n.inLoopHeads,
    declared: r,
    read: t,
    shadowOf: Ko(r, o, "engine"),
    writtenShadowOf: Ko(r, o, "written")
  };
}
function Dy(e, o) {
  for (let r of e.scanned.program.body) {
    let t = r.type === "ExportNamedDeclaration",
      n = t ? r.source : null,
      s = t ? r.specifiers.find((i) => T(i.exported) === o) : void 0;
    if (n !== null && n !== void 0 && s !== void 0)
      return { specifier: s, spelled: String(n.value) };
  }
  return;
}
function q(e, o, r = "all") {
  let t = [];
  return (
    p0(
      e,
      ({ node: s, parent: p, grandparent: i }) => {
        if (s.type === "Identifier" && s.name === o && oo(s, p, i)) t.push(s);
      },
      r === "own"
        ? (s) => s !== e && (s.type === "FunctionExpression" || s.type === "FunctionDeclaration")
        : void 0
    ),
    t
  );
}
function Nt(e, o, r) {
  let t = new Set();
  for (let n of e.body) {
    if (n.type === "ExportDefaultDeclaration") {
      let { declaration: a } = n;
      if (a === o || (a.type === "Identifier" && r !== void 0 && a.name === r)) t.add("default");
      continue;
    }
    if (n.type !== "ExportNamedDeclaration") continue;
    let { declaration: s, source: p, specifiers: i } = n;
    if (s?.type === "FunctionDeclaration" && s === o) t.add(s.id.name);
    if (s?.type === "VariableDeclaration") {
      for (let a of s.declarations)
        if (a.init === o && a.id.type === "Identifier") t.add(a.id.name);
    }
    if (p !== null && p !== void 0) continue;
    for (let a of i) if (r !== void 0 && T(a.local) === r) t.add(T(a.exported));
  }
  return t;
}
function Tt(e, o) {
  return e.type === "Identifier" ? e.name === o : Xo(e, o).length > 0;
}
function xe(e) {
  switch (e.type) {
    case "Identifier":
      return [e.name];
    case "ObjectPattern":
      return e.properties.flatMap((o) => xe(o.type === "RestElement" ? o.argument : o.value));
    case "ArrayPattern":
      return e.elements.flatMap((o) => (o === null ? [] : xe(o)));
    case "AssignmentPattern":
      return xe(e.left);
    case "RestElement":
      return xe(e.argument);
    default:
      return [];
  }
}
var vt = 4;
function to(e, o) {
  for (let r of e.program.body) {
    let n = r.type === "ExportNamedDeclaration" ? r.declaration : r;
    if (!(n?.type === "VariableDeclaration" && n.kind === "const")) continue;
    for (let p of n.declarations)
      if (p.id.type === "Identifier" && p.id.name === o && p.init) return p.init;
  }
  return;
}
function no(e) {
  let o = e === null || e === void 0;
  return e?.type === "VariableDeclaration"
    ? e.declarations.flatMap((t) => xe(t.id))
    : o
      ? []
      : [e.id.name];
}
function so(e, o) {
  switch (e.type) {
    case "VariableDeclaration":
      return e.declarations.some((r) => Tt(r.id, o));
    case "FunctionDeclaration":
    case "ClassDeclaration":
      return e.id?.name === o;
    case "ImportDeclaration":
      return e.specifiers.some((r) => r.local.name === o);
    case "ExportNamedDeclaration":
    case "ExportDefaultDeclaration":
      return e.declaration !== null && e.declaration !== void 0 && so(e.declaration, o);
    default:
      return !1;
  }
}
var At = /^(?!(?:true|false|null|undefined|NaN|Infinity)$)(?![-\d])[\w:@*!$#-]+$/;
var Ot = 16;
var po = 120;
function io(e) {
  let o = e.slice(0, po),
    r = e.length - o.length,
    t = JSON.stringify(o)
      .replace(/[^\x20-\x7e]/g, (n) => "\\u".concat(n.charCodeAt(0).toString(Ot).padStart(vt, "0")))
      .replace(/ {2,}/g, (n) => " ".concat(n.slice(1).replaceAll(" ", "\\u0020")));
  return r === 0 ? t : `${t}[+${r} chars]`;
}
function M(e) {
  return e.length <= po && At.test(e) ? e : io(e);
}
var A = "?";
function ao(e, o, r) {
  let t = e.properties.map((s) => D(s)),
    n = t.lastIndexOf(void 0);
  return e.properties
    .flatMap((s, p) => {
      let i = t[p],
        a = s.type !== "Property",
        f = i !== void 0 && t.includes(i, p + 1),
        u = i !== void 0 && p < n,
        x = i === void 0 ? A : M(i),
        y = `${x}=${A}`,
        c = a ? `...${A}` : `${x}${Rt(s.value, o, r)}`;
      return f ? [] : [u ? y : c];
    })
    .join(", ");
}
function ye(e, o) {
  let r = e.shadowOf(o);
  if (r === void 0) return { kind: "free" };
  let t = e.parentOf(r),
    n = t && e.parentOf(t),
    s = n && e.parentOf(n);
  return t?.type === "VariableDeclarator" &&
    t.id === r &&
    n?.type === "VariableDeclaration" &&
    n.kind === "const" &&
    n.declarations.length === 1 &&
    s?.type === "ForOfStatement" &&
    s.left === n &&
    o.start >= s.body.start &&
    o.start < s.body.end
    ? { kind: "loop", loop: s }
    : { kind: "shadowed" };
}
function Pt(e, o) {
  let t = ye(e, o).kind === "free" ? to(e, o.name) : void 0;
  return (t?.type === "Literal" && t.regex === void 0 && typeof t.value !== "bigint") ||
    (t?.type === "TemplateLiteral" && t.expressions.length === 0) ||
    t?.type === "Identifier"
    ? t
    : void 0;
}
function It(e, o) {
  let t = ye(e, o).kind === "free" ? to(e, o.name) : void 0;
  return (t?.type === "ObjectExpression" ||
    t?.type === "ArrayExpression" ||
    (t?.type === "Literal" && t.regex !== void 0)) &&
    e.isSealed(o.name)
    ? t
    : void 0;
}
var ge = (e, o) => Pt(e, o) ?? It(e, o);
function fo(e, o, r) {
  let t = e,
    n = r;
  while (t.type === "Identifier" && !n.has(t.name)) {
    let i = ge(o, t);
    if (i === void 0) break;
    ((n = new Set([...n, t.name])), (t = i));
  }
  let s = t.type === "ObjectExpression" ? t : void 0;
  return s !== void 0 && !W(s) ? { node: s, seen: n } : void 0;
}
function Yo(e, o) {
  let [r, ...t] = e.node.properties,
    n = t.length === 0 && r?.type === "Property",
    s = n ? D(r) : void 0,
    p = n ? fo(r.value, o, e.seen) : void 0;
  return s !== void 0 && p !== void 0 ? `.${M(s)}${Yo(p, o)}` : ` has {${ao(e.node, o, e.seen)}}`;
}
function Ht(e) {
  let o = [];
  for (let r of e.elements) {
    if (r === null) return;
    if (r.type === "Literal") {
      let { value: s } = r;
      if (!(typeof s === "string" || typeof s === "number" || typeof s === "boolean")) return;
      o.push(typeof s === "string" ? M(s) : String(s));
      continue;
    }
    let n =
      r.type === "TemplateLiteral" && r.expressions.length === 0
        ? r.quasis[0]?.value.cooked
        : void 0;
    if (n === void 0 || n === null) return;
    o.push(M(n));
  }
  return L(o);
}
function Dt(e, o, r) {
  let { right: t } = o;
  return t.type === "ArrayExpression" &&
    !e.program.body.some((s) => s.type === "ImportDeclaration" && so(s, r))
    ? Ht(t)?.join("|")
    : void 0;
}
function Mt(e, o, r) {
  if (r.has(e.name)) return A;
  let t = ye(o, e),
    n = t.kind === "loop",
    s = n ? Dt(o, t.loop, e.name) : void 0;
  if (n) return s ?? A;
  let p = ge(o, e);
  if (p === void 0) return A;
  return te(p, o, new Set([...r, e.name]));
}
var Ct = (e, o) => `/${io(e)}/${o}`;
function te(e, o, r = new Set()) {
  switch (e.type) {
    case "Literal": {
      let { regex: t, value: n } = e,
        s = typeof n === "string",
        p = typeof n === "bigint",
        i = s ? M(n) : String(n);
      return t ? Ct(t.pattern, t.flags) : p ? A : i;
    }
    case "TemplateLiteral": {
      let t = e.quasis[0]?.value.cooked;
      return e.expressions.length === 0 && t !== void 0 && t !== null ? M(t) : A;
    }
    case "ArrayExpression":
      return e.elements.map((t) => (t === null ? "" : te(t, o, r))).join("|");
    case "ObjectExpression":
      return W(e) ? A : `{${ao(e, o, r)}}`;
    case "Identifier":
      return Mt(e, o, r);
    default:
      return A;
  }
}
function Rt(e, o, r) {
  let t = fo(e, o, r);
  if (t === void 0) return `=${te(e, o, r)}`;
  return Yo(t, o);
}
var dg = (e, o, r) => (o === void 0 ? e : `${e}${te(o, r)}`);
function mo(e, o, r = new Set()) {
  if (e.type === "Literal") return e.regex ? (e.value ?? new RegExp("")) : e.value;
  if (e.type === "ArrayExpression")
    return e.elements.map((n) => (n ? mo(n, o, r) : new RegExp("")));
  if (e.type === "ObjectExpression") {
    if (W(e)) return new RegExp("");
    let n = [];
    for (let s of e.properties) {
      let p = D(s);
      if (s.type !== "Property" || p === void 0) return new RegExp("");
      n.push([p, mo(s.value, o, r)]);
    }
    return Object.fromEntries(n);
  }
  if (e.type !== "Identifier" || r.has(e.name)) return new RegExp("");
  let t = ge(o, e);
  if (!t) return new RegExp("");
  return mo(t, o, new Set([...r, e.name]));
}
function Qo(e, o) {
  if (e.type === "ExportDefaultDeclaration") {
    let { declaration: i } = e;
    return i.type === "Identifier" && i.name === o;
  }
  if (e.type !== "ExportNamedDeclaration") return !1;
  let { declaration: r, source: t, specifiers: n } = e,
    s = r !== null && r !== void 0 && so(r, o),
    p = (t === null || t === void 0) && n.some((i) => T(i.local) === o);
  return s || p;
}
var lo = (e, o) => e.body.some((r) => Qo(r, o));
function Lt(e, o) {
  let r = e.holderFiles.get(o);
  if (r === void 0) return;
  let { scanned: t } = r,
    n = [...t.names.functions].find(([, a]) => a === o)?.[0],
    s = n === void 0 ? [] : (t.names.read.get(n) ?? []),
    p = Nt(t.program, o, n),
    i = [];
  for (let a of s)
    if (t.parentOf(a)?.type !== "ExportDefaultDeclaration") i.push({ reference: a, scanned: t });
  for (let a of e.graph.files.values())
    for (let f of a.scanned.program.body) {
      let x =
        f.type === "ImportDeclaration" ||
        f.type === "ExportAllDeclaration" ||
        f.type === "ExportNamedDeclaration"
          ? f.source
          : void 0;
      if (!(p.size > 0 && x !== null && x !== void 0 && a.links.get(String(x.value)) === t.file))
        continue;
      if (
        f.type === "ExportAllDeclaration" ||
        (f.type === "ExportNamedDeclaration" && f.specifiers.some((h) => p.has(T(h.local)))) ||
        (f.type === "ImportDeclaration" &&
          f.specifiers.some((h) => h.type === "ImportNamespaceSpecifier"))
      )
        return;
      let k = f.type === "ImportDeclaration" ? f.specifiers : [];
      for (let h of k) {
        let j = h.type === "ImportSpecifier" ? T(h.imported) : "default",
          w = h.local.name;
        if (!p.has(j)) continue;
        if (lo(a.scanned.program, w)) return;
        for (let b of a.scanned.names.read.get(w) ?? [])
          i.push({ reference: b, scanned: a.scanned });
      }
    }
  return i;
}
function _t(e) {
  let o = new Map(),
    r = new Map(),
    t = Map.groupBy(e.holderCalls, (i) => i.call),
    n;
  function s({ reference: i, scanned: a }, f, u) {
    let x = a.parentOf(i);
    return (x?.type === "CallExpression" && x.callee === i ? (t.get(x) ?? []) : []).some(
      (c) => c.callee === f && c.position === u && p(c.caller, c.callerPosition)
    );
  }
  function p(i, a) {
    n ??= ct(e.graph);
    let f = o.get(i)?.get(a),
      u = r.get(i)?.has(a) === !0;
    if (n || u || f !== void 0) return f ?? !1;
    r.set(i, (r.get(i) ?? new Set()).add(a));
    let y = i.type === "FunctionExpression" && i.id !== null && i.id !== void 0 ? void 0 : Lt(e, i),
      c = i === e.register && a === 0,
      g = y !== void 0 && (y.length > 0 || c) && y.every((k) => s(k, i, a));
    return (o.set(i, (o.get(i) ?? new Map()).set(a, g)), r.get(i)?.delete(a), g);
  }
  return p;
}
function co(e, o) {
  let r = o.scanned.parentOf(e);
  return (
    r?.type === "MemberExpression" &&
    r.object === e &&
    !r.computed &&
    r.property.type === "Identifier" &&
    r.property.name === "catch"
  );
}
function Bt(e, o) {
  let t = o.type === "Identifier" ? e.scanned.names.functions.get(o.name) : o;
  if (!(
    t?.type === "FunctionExpression" ||
    t?.type === "ArrowFunctionExpression" ||
    t?.type === "FunctionDeclaration"
  ))
    return !0;
  let [, , s] = t.params;
  return (
    (s !== void 0 && (s.type !== "Identifier" || q(t, s.name).length > 0)) ||
    q(t, "eval").length > 0
  );
}
var uo = (e) => e.type === "SpreadElement" || e.computed || e.kind !== "init";
var he = (e, o) =>
  e.type === "Property" &&
  ((e.key.type === "Identifier" && e.key.name === o) ||
    (e.key.type === "Literal" && e.key.value === o));
function Ut(e) {
  switch (e.type) {
    case "Literal": {
      let o = e.value;
      return typeof o === "string" ? [o] : void 0;
    }
    case "ArrayExpression": {
      let o = e.elements.map((t) => {
        let n = t?.type === "Literal" ? t.value : void 0;
        return typeof n === "string" ? n : void 0;
      });
      return o.every((t) => t !== void 0) ? o.filter((t) => t !== void 0) : void 0;
    }
    default:
      return;
  }
}
function ne(e) {
  switch (e?.type) {
    case "ObjectExpression": {
      let o = e.properties.filter((s) => he(s, "command")),
        r = e.properties.some(uo),
        [t] = o;
      return !r && o.length === 1 && t?.type === "Property" ? Ut(t.value) : void 0;
    }
    case "ArrayExpression": {
      let o = e.elements.map((t) => (t === null || t.type === "SpreadElement" ? void 0 : ne(t)));
      return o.every((t) => t !== void 0) ? o.flatMap((t) => t ?? []) : void 0;
    }
    default:
      return;
  }
}
function Gt(e, o, r) {
  let { parentOf: t } = o.linked.scanned,
    n = co(e, o.linked) ? t(e) : void 0,
    s = n === void 0 ? void 0 : t(n),
    p = [...e.arguments.slice(-1), ...(s?.type === "CallExpression" ? s.arguments : [])],
    i = ne(o.matcher) ?? [];
  return (
    o.event === "command.run" &&
    !p.some((a) => Bt(o.linked, a)) &&
    i.length > 0 &&
    i.every((a) => r.has(a))
  );
}
function Vt(e, o, r) {
  let t = o.climbs.heldAt(r);
  if (t === void 0) return;
  let { value: n, parent: s } = t;
  if (s.type === "VariableDeclarator" && s.init === n) {
    let { id: f } = s,
      u = o.parentOf(s),
      x = u && o.parentOf(u);
    return f.type === "Identifier" &&
      u?.type === "VariableDeclaration" &&
      u.kind === "const" &&
      (x?.type === "Program" || x?.type === "ExportNamedDeclaration")
      ? { kind: "const", name: f.name }
      : void 0;
  }
  let i = s.type === "CallExpression" ? e.registrations.get(s) : void 0;
  return i !== void 0 && i.matcher === n ? { kind: "matcher", held: i } : void 0;
}
function Wt(e, o) {
  let r = new Map(),
    t = new Map();
  function n(s, p) {
    let i = r.get(s)?.get(p);
    if (t.get(s)?.has(p) === !0 || i !== void 0) return i ?? !1;
    t.set(s, (t.get(s) ?? new Set()).add(p));
    let { scanned: f } = s,
      u = f.names.read.get(p) ?? [],
      x =
        !lo(f.program, p) &&
        u.length > 0 &&
        u.every((y) => {
          let c = Vt(e, f, y);
          switch (c?.kind) {
            case "matcher":
              return o(c.held.holder, c.held.position);
            case "const":
              return n(s, c.name);
            case void 0:
              return !1;
          }
        });
    return (r.set(s, (r.get(s) ?? new Map()).set(p, x)), t.get(s)?.delete(p), x);
  }
  return n;
}
function zt(e) {
  let o = Wt(e, _t(e)),
    r = new Map(),
    t = [],
    n = [],
    s = [];
  for (let [p, i] of e.registrations) {
    let { event: a, matcher: f, linked: u } = i,
      { program: x, parentOf: y, names: c } = u.scanned,
      g = r.get(u) ?? { program: x, parentOf: y, shadowOf: c.shadowOf, isSealed: (E) => o(u, E) };
    r.set(u, g);
    let k = dg(a, f, g),
      h = a === "command.run";
    if (
      (t.push(k),
      s.push({
        registration: k,
        pattern: a,
        hasCatch: co(p, u),
        isOwnCommand: Gt(p, i, e.registeredCommands),
        commands: (h ? ne(f) : void 0) ?? []
      }),
      a === "ui.render" && f !== void 0)
    )
      n.push({ registration: k, matcher: mo(f, g) });
  }
  return { registrations: t, renderMatchers: n, catchReads: s };
}
var Xt = "anthropic";
var ke = ["anthropic", "collector"];
var Dg = (e) => ke.includes(e);
var C = ({ onName: e, event: o }) =>
  '"to" is a string literal, or a list of them, from ' +
  ke.map((r) => `"${r}"`).join(", ") +
  `, written in the call, so the streams a module's hooks stand on can be listed: ${e}("${o}", { to: "collector" }, hook)`;
function qt(e, o) {
  let { onName: r, event: t, refuse: n } = o;
  return (e.type === "ArrayExpression" ? e.elements : [e]).map((s) => {
    if (s === null)
      throw n(e, `${r}("${t}") names its destinations as a list with a hole; ${C(o)}`);
    let p = s.type === "Literal" ? s.value : void 0;
    if (typeof p !== "string")
      throw n(s, `${r}("${t}") names its destination as ${eo(s)}; ${C(o)}`);
    if (!Dg(p))
      throw n(
        s,
        `${r}("${t}") names the destination "${p}", which is no telemetry stream; ${C(o)}`
      );
    return p;
  });
}
var $g =
  (e, o) =>
  (r, t, { known: n, reals: s }) =>
    YZs({ spelled: r, importer: t, root: e, pluginName: o }, n, s);
var xo = (e, o) => (o === "env.get" ? e.envReads : e.envWrites);
function K({ graph: e, pluginName: o }, r) {
  let t = e.files.get(r);
  if (t === void 0) throw new He(`${o}: ${r} was not linked`);
  return t;
}
function yo(e, o, r) {
  let { scan: t, linked: n } = e,
    s = n.links.get(o);
  if (s === void 0)
    throw n.scanned.refuse(
      void 0,
      `"${r}" is looked for through a re-export from "${o}", which is not a file of the module's own: nothing is followed through it`
    );
  return { scan: t, linked: K(t, s) };
}
function Y(e) {
  let { scan: o, linked: r } = e,
    t = o.ownExports.get(r);
  if (t !== void 0) return t;
  let n = new Map(),
    s = new Map(),
    p = new Map(),
    i = [],
    a = [];
  for (let u of r.scanned.program.body) {
    if (u.type === "ExportDefaultDeclaration") n.set("default", u);
    if (u.type === "ExportNamedDeclaration") {
      for (let g of no(u.declaration)) n.set(g, u);
      for (let g of u.specifiers) (n.set(T(g.exported), u), s.set(T(g.exported), g));
    }
    if (u.type !== "ExportAllDeclaration") continue;
    let { exported: x } = u,
      y = r.links.get(String(u.source.value));
    if (x !== null && x !== void 0) {
      p.set(T(x), u);
      continue;
    }
    y === void 0 ? a.push(u) : i.push({ from: r, statement: u, to: K(o, y) });
  }
  let f = { named: n, listed: s, namespaces: p, stars: i, foreign: a };
  return (o.ownExports.set(r, f), f);
}
var Zo = 500000;
function P(e, o) {
  let { scan: r, linked: t } = e;
  if (((r.exportSteps.taken += o), r.exportSteps.taken > Zo))
    throw t.scanned.refuse(
      void 0,
      `the re-exports of "${r.pluginName}" took ${r.exportSteps.taken} steps to follow, more than the ${Zo} a scan allows: write fewer \`export *\`, or import each name from the file that declares it`
    );
}
function go(e, o, r) {
  let { names: t, refuse: n } = e.scanned,
    s = r === "default" ? "the default export" : r,
    p = T(o.local),
    i = t.functions.get(p);
  if (i === void 0)
    throw n(
      o,
      `${s} is exported as "${p}", which is not a function declared at the top of this file`
    );
  if (t.assigned.has(p)) throw n(o, `${s} ("${p}") is assigned to elsewhere`);
  return i;
}
function ho(e, o, r) {
  let { names: t, refuse: n } = e.scanned,
    { functions: s, assigned: p } = t,
    i = r === "default" ? "the default export" : r;
  function a(c, g) {
    if (p.has(c)) throw n(g, `${i} ("${c}") is assigned to elsewhere`);
  }
  if (o.type === "ExportDefaultDeclaration" && r === "default") {
    let { declaration: c } = o;
    if (c.type === "FunctionDeclaration") {
      if (c.id !== null) a(c.id.name, c);
      return c;
    }
    if (c.type === "FunctionExpression" || c.type === "ArrowFunctionExpression") return c;
    let h = c.type === "Identifier" ? s.get(c.name) : void 0;
    if (h === void 0 || c.type !== "Identifier")
      throw n(c, `${i} is something other than a function declared at the top of this file`);
    return (a(c.name, c), h);
  }
  if (o.type !== "ExportNamedDeclaration") return;
  let { declaration: f } = o;
  if (f?.type === "FunctionDeclaration" && f.id.name === r) return (a(r, f), f);
  if (f?.type === "VariableDeclaration") {
    for (let c of f.declarations)
      if (c.id.type === "Identifier" && c.id.name === r) {
        let { init: k } = c;
        if (
          f.kind === "const" &&
          (k?.type === "FunctionExpression" || k?.type === "ArrowFunctionExpression")
        )
          return k;
        throw n(c, `${i} is exported as something other than a const function`);
      }
  }
  if (no(f).includes(r))
    throw n(
      o,
      `${i} is exported as something other than a function declared at the top of this file`
    );
  let x = o.specifiers.find((c) => T(c.exported) === r);
  return x !== void 0 && o.source === null ? go(e, x, r) : void 0;
}
function Ee(e, o, r) {
  let { linked: t } = e,
    n = Y(e),
    s = n.named.get(o),
    p = n.namespaces.get(o);
  if (p !== void 0)
    throw t.scanned.refuse(
      p,
      `${o === "default" ? "the default export" : o} is the namespace of "${String(p.source.value)}" (export * as), not a function`
    );
  let i = n.listed.get(o),
    a = s?.type === "ExportNamedDeclaration" ? s.source : null;
  if (i !== void 0 && a !== null && a !== void 0) return r(yo(e, String(a.value), o), T(i.local));
  if (i !== void 0) return { fn: go(t, i, o), linked: t };
  let x = s?.type === "ExportNamedDeclaration" ? s.declaration : void 0,
    y = x?.type === "VariableDeclaration";
  P(e, y ? x.declarations.length : 0);
  let c = s === void 0 ? void 0 : ho(t, s, o);
  return c === void 0 ? void 0 : { fn: c, linked: t };
}
var ko = (e, o, r) => {
  e.set(o, (e.get(o) ?? new Set()).add(r));
};
function jo(e) {
  let { scan: o, linked: r } = e,
    t = o.exportTables.get(r);
  if (t !== void 0) return t;
  let n = new Map(),
    s = new Map(),
    p = [],
    i = new Set([r]),
    a = [r];
  for (let u = a.pop(); u !== void 0; u = a.pop()) {
    let x = Y({ scan: o, linked: u }),
      y = u === r ? [] : [...x.named.keys(), ...x.namespaces.keys()];
    if ((P(e, x.stars.length + y.length + 1), x.foreign.length > 0)) p.push(u);
    for (let c of y) if (c !== "default") n.set(c, (n.get(c) ?? new Set()).add(u));
    for (let c of x.stars) if ((ko(s, c.to, c), !i.has(c.to))) (i.add(c.to), a.push(c.to));
  }
  let f = { givers: n, parents: s, wild: p };
  return (o.exportTables.set(r, f), f);
}
function Kt(e, o) {
  let r = jo(e),
    t = new Map(),
    n = new Set(),
    s = [...(r.givers.get(o) ?? []), ...r.wild];
  for (let p = s.pop(); p !== void 0; p = s.pop()) {
    let a = n.has(p) ? [] : [...(r.parents.get(p) ?? [])];
    (n.add(p), P(e, a.length + 1));
    for (let f of a) (ko(t, f.from, f), s.push(f.from));
  }
  return t;
}
function Yt(e, o, r) {
  let { scan: t } = e,
    n = Kt(e, o),
    s = new Set();
  function p(i) {
    let a = { scan: t, linked: i },
      f = Y(a),
      u = s.has(i);
    if ((s.add(i), P(e, 1), u)) return;
    if (f.named.has(o)) return Ee(a, o, r);
    let x = f.namespaces.get(o),
      c = [
        ...[...(x === void 0 ? [] : [x]), ...f.foreign].map((k) => ({ statement: k, to: void 0 })),
        ...(n.get(i) ?? [])
      ].toSorted((k, h) => k.statement.start - h.statement.start),
      g;
    P(e, c.length);
    for (let { statement: k, to: h } of c) {
      let j =
        k.exported !== null && k.exported !== void 0
          ? Ee(a, o, r)
          : p(h ?? yo(a, String(k.source.value), o).linked);
      if (j !== void 0 && g !== void 0 && j.fn !== g.fn)
        throw i.scanned.refuse(
          k,
          `${o} is given by more than one \`export *\` of this file, each from a different declaration: the engine binds neither`
        );
      g = j ?? g;
    }
    return g;
  }
  return p(e.linked);
}
function Jt(e, o, r) {
  let t = Y(e),
    n = t.namespaces.has(o);
  if (t.named.has(o) || (o === "default" && n)) return Ee(e, o, r);
  if (o === "default") return;
  let p = jo(e),
    i = p.givers.get(o) ?? new Set(),
    [a] = i;
  if (!(!n && p.wild.length === 0 && i.size <= 1)) return Yt(e, o, r);
  if (a === void 0) return;
  return Ee({ scan: e.scan, linked: a }, o, r);
}
function er(e, o) {
  let { scan: r, linked: t } = e,
    { exportsOpen: n, exportsUnderWay: s, exportsHeld: p } = r,
    i = r.exportsRead.get(t) ?? new Map(),
    a = p.get(t) ?? new Map(),
    f = n.get(t) ?? new Map(),
    u = f.get(o),
    x = a.get(o);
  if (i.has(o)) return i.get(o);
  if (x !== void 0 || u !== void 0) return ((s.lowest = Math.min(s.lowest, u ?? 0)), x?.found);
  let { depth: y, lowest: c } = s;
  (P(e, 1),
    (s.depth = y + 1),
    (s.lowest = y),
    n.set(t, f.set(o, y)),
    p.set(t, a),
    r.exportsRead.set(t, i));
  try {
    let g = Jt(e, o, er);
    return (s.lowest === y ? i.set(o, g) : a.set(o, { found: g }), g);
  } finally {
    if (((s.lowest = Math.min(c, s.lowest)), (s.depth = y), f.delete(o), y === 0))
      (n.clear(), p.clear());
  }
}
var sh = ["atom", "derive", "memberOf", "read", "update"];
var Qt = Fe(
  __filePath_18e458ad48e22626(
    new __filePath_18e458ad48e22626_URL(
      "../text-modules/state-library.js-wy8y4843.txt.cjs",
      import.meta.url
    )
  )
);
var FKr = Qt;
function se(e, o) {
  let { callee: r } = o;
  if (r.type !== "Identifier" || o.optional) return;
  let t = e.imports.get(r.name),
    n = sh.find((p) => p === t?.imported);
  return t?.specifier === bvt && n !== void 0 && e.names.shadowOf(r) === void 0 ? n : void 0;
}
function en(e, o) {
  for (let r of e.scanned.program.body) {
    let t = ho(e, r, o);
    if (t !== void 0) return t;
  }
  return;
}
function on(e, o, r = "") {
  let t = en(e, o);
  if (t !== void 0) return t;
  let { program: n, refuse: s } = e.scanned,
    p = o === "default" ? "the default export" : o,
    i = Dy(e, o);
  if (i !== void 0) throw s(i.specifier, `${p} is re-exported from another file`);
  let a = n.body.find((f) => f.type === "ExportAllDeclaration");
  if (a !== void 0)
    throw s(
      a,
      `${p} is not exported here by name; what \`export *\` re-exports from another file is not followed`
    );
  throw s(void 0, `no export named ${p}${r}`);
}
function gh(e, { names: o, refuse: r, what: t }) {
  let n = o.functions.get(e.name);
  if (n === void 0) return;
  if (o.assigned.has(e.name)) throw r(e, `${t} "${e.name}" is assigned to elsewhere`);
  let s = o.shadowOf(e);
  if (s !== void 0)
    throw r(
      s,
      `${t} "${e.name}" is declared more than once in this file: this declaration hides the top-level function where it is used`
    );
  return n;
}
function rr(e, { refuse: o }) {
  if (e.type !== "ObjectPattern")
    throw o(e, "next is destructured other than into an object pattern of plain keys");
  for (let r of e.properties) {
    if (r.type === "RestElement") throw o(r, "a rest of next (it holds next.to)");
    if (!(!r.computed && r.key.type === "Identifier"))
      throw o(r, "a computed or quoted key destructured from next");
    if (r.key.type === "Identifier" && r.key.name === "to")
      throw o(
        r,
        `next.to is destructured from next; it is reached only as next.to(e, "<tier>") on the hook's own next`
      );
  }
}
function rn(e, { refuse: o, parentOf: r, recordTo: t }) {
  if (e.optional) throw o(e, "next.to is reached through optional chaining");
  let n = r(e);
  if (!(n?.type === "CallExpression" && n.callee === e && !n.optional))
    throw o(
      e,
      'next.to is used as a value (bound, passed or read) instead of called as next.to(e, "<tier>")'
    );
  let [p, i, a] = n.arguments;
  if (p === void 0 || p.type === "SpreadElement")
    throw o(n, 'next.to is called without (e, "<tier>") or with a spread');
  if (a !== void 0) throw o(a, 'next.to is called with more than (e, "<tier>")');
  if (!(i?.type === "Literal" && typeof i.value === "string"))
    throw o(
      i ?? n,
      "next.to names its tier other than as a string literal (a variable, a template or an expression)"
    );
  let u = i.value;
  if (!jKr(u))
    throw o(
      i,
      `next.to names "${String(u)}", which is not a tier a dispatch continues at (append, builtin, core)`
    );
  return (t(u), n);
}
var Eh = (e) => on(e, "register", " (export function register(on, options) {...})");
var tn = new RegExp(`^${Ve}$`, "u");
var ent = (e) => e === "*" || e.endsWith(".*") || e.startsWith("!");
var Eo = (e) => e.startsWith("telemetry.");
function wo(e) {
  if (typeof e !== "string") return `${typeof e} is not an event name or a pattern (a string)`;
  let o = e.startsWith("!"),
    r = o ? e.slice(1) : e;
  if (o && r === "*") return `"${e}" is not a pattern: it selects no event`;
  if (o && r.startsWith("!")) return `"${e}" is not a pattern: "!" negates once`;
  let t = r === "*",
    n = r.endsWith(".*"),
    s = (n ? r.slice(0, -2) : r).split(".");
  if (!(t || s.every((i) => tn.test(i))))
    return `"${e}" is not an event name or a pattern ("*", "<prefix>.*", or "!" before either)`;
  return {
    isNegated: o,
    selection: t
      ? { kind: "every" }
      : n
        ? { kind: "prefix", prefix: s.join(".") }
        : { kind: "name", name: r }
  };
}
function bo(e) {
  let o = wo(e);
  if (typeof o === "string") throw new He(o);
  return o;
}
function eei(e) {
  let { selection: o } = bo(e);
  return o.kind === "name" ? o.name : void 0;
}
function WKr(e) {
  let o = wo(e);
  return typeof o === "string" ? o : void 0;
}
function _oe(e, o) {
  let { isNegated: r, selection: t } = bo(e),
    n;
  switch (t.kind) {
    case "every":
      n = !0;
      break;
    case "prefix":
      n = o.startsWith(`${t.prefix}.`);
      break;
    case "name":
      n = o === t.name;
      break;
  }
  return r ? !n : n;
}
var Qzt = (e, o, r) => _oe(e, o) && (r.isBuiltin || !Eo(o) || Eo(e));
var Me = (e) => e.arguments.find((o) => o.type === "SpreadElement");
function Ph(e, o, r) {
  let t = Me(e);
  if (t !== void 0) throw o(t, `${r}() is called with a spread argument`);
  let [n, ...s] = e.arguments;
  if (n === void 0 || s.length === 0 || s.length > 2)
    throw o(
      e,
      `${r}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`
    );
  let i = V(n);
  if (i === void 0) throw o(n, `the event name passed to ${r}() is not a string literal`);
  let a = WKr(i);
  if (a !== void 0) throw o(n, a);
  let f = ent(i) || e0e(i) || Xzt(i),
    u = eei(i),
    x = u !== void 0 && !e0e(u) && !Xzt(u);
  if (!f || x) throw o(n, `"${u ?? i}" is not an event`);
  let y = s.at(-1);
  if (y === void 0) throw o(e, `${r}() takes (event, hook); got no hook`);
  return { event: i, hook: y, matcher: s.length === 2 ? s[0] : void 0 };
}
var nn = "command.register";
var sn = {
  VariableDeclarator: "bound to a name",
  AssignmentExpression: "assigned",
  SpreadElement: "spread",
  ReturnStatement: "returned",
  ArrowFunctionExpression: "returned",
  Property: "put in an object",
  ArrayExpression: "put in an array",
  ChainExpression: "optionally chained",
  TemplateLiteral: "put in a template"
};
function nr(e, o) {
  if (!(e.type === "CallExpression" || e.type === "NewExpression"))
    return sn[e.type] ?? `used in a ${e.type}`;
  return e.callee === o ? "called" : "passed as an argument";
}
var Ce = "plugin";
var pn = ["env.get", "env.set"];
var tei = (e) => pn.includes(e);
var an = ["state.get", "state.set"];
var Her = (e) => an.includes(e);
var sr = (e) => (/^[\w$@-]+$/.test(e) ? e : JSON.stringify(e));
var vvt = (e) => `${sr(e.plugin)}.${sr(e.key)}`;
var Zzt = (e) =>
  e(
    () => !1,
    (o, r) => r(),
    (o) => o()
  );
var e2t = (e) => e.endsWith("@builtin") && e.indexOf("@") === e.length - 8 && e.length > 8;
var t0e = "core";
var fSi = (e) => e.withheldBy?.at(-1);
var zVo = (e, o) => `$.${e}: removed by plugin \`${o}\``;
var GKr = (e) =>
  [e, ...(e.surfaceModules ?? [])].flatMap((o) => [
    { file: o.modulePath, source: o.source },
    ...o.linked
  ]);
function mn(e, o, r) {
  let [t] = e.arguments,
    s = t !== void 0 && t.type !== "SpreadElement" ? V(t) : void 0;
  if (s === void 0)
    throw r(
      t ?? e,
      `$.${o} takes a literal name as its first argument, so the variables a module reads and writes can be listed (got ${oe(t)})`
    );
  return s;
}
var ir = (e, o) => e?.type === "MemberExpression" && e.object === o && !e.computed && !e.optional;
var ar = (e, o) => o.writtenShadowOf(e) === void 0 || o.writtenShadowOf(e) !== o.shadowOf(e);
var we = (e, o) => (o === void 0 ? void 0 : { at: o, cause: e });
var xj = Object.freeze({
  declared: "is declared here too, so the value it names cannot be listed. Declare it once",
  assigned:
    "is assigned here, so the value it names cannot be listed. Leave it unassigned, or write the reference at the call",
  doubted:
    "may be assigned here, where the engine can bind the name apart from the text, so the value it names cannot be listed. Rename one of the two",
  looped:
    "is spelled in a loop's head here, and the engine can write such a target past a nearer name of that spelling, so the value it names cannot be listed. Rename one of the two",
  early:
    "is read here as the file loads, above its declaration, where it is still undefined, so the value it names cannot be listed. Declare it above this read"
});
function ln(e, { names: o, climbs: r }) {
  let { name: t } = e,
    n = (o.declared.get(t) ?? []).filter((p) => {
      let i = Ie(p, r);
      return typeof i !== "string" && i.type === "Program";
    }),
    s = (o.assignedAt.get(t) ?? []).filter((p) => ar(p, o));
  return (
    we("declared", n.includes(e) ? n[1] : e) ??
    we(
      "assigned",
      s.find((p) => o.writtenShadowOf(p) === void 0)
    ) ??
    we("doubted", s[0]) ??
    we("looped", o.loopAssigned.get(t)?.[0]) ??
    we(
      "early",
      o.read.get(t)?.find((p) => p.start < e.start && r.deferrerOf(p) === void 0 && ar(p, o))
    )
  );
}
function So(e, { consts: o, names: r, climbs: t, program: n, refuse: s }) {
  let p = r.shadowOf(e);
  if (p !== r.writtenShadowOf(e))
    throw s(
      e,
      `"${e.name}" is read among the parameters of a function whose body declares that name again: the engine may bind such a read apart from the text, so the value it names cannot be listed. Rename one of the two`
    );
  let i = p === void 0 ? n : Ie(p, t);
  if (typeof i === "string") return;
  let a = o.inits(i).get(e.name),
    f = a?.isVar ? o.rebound(a.id) : void 0;
  if (f !== void 0)
    throw s(f.at, `the var ${e.name}, read for a $.state reference, ` + xj[f.cause]);
  return a === void 0 ? void 0 : { init: a.init, scope: i };
}
function cn(e) {
  return e.type === "Program" || e.type === "BlockStatement" || e.type === "StaticBlock"
    ? e.body
    : [];
}
function un(e) {
  let o = new Map();
  for (let r of cn(e)) {
    let t = r.type === "ExportNamedDeclaration",
      n = t ? r.declaration : r,
      s = n?.type === "VariableDeclaration" && n.kind === "var" && e.type === "Program" && !t;
    if (!(n?.type === "VariableDeclaration" && (n.kind === "const" || s))) continue;
    for (let { id: i, init: a } of n.declarations)
      if (i.type === "Identifier" && a) o.set(i.name, { id: i, init: a, isVar: s });
  }
  return o;
}
function xn(e) {
  let o = new Map();
  for (let r of e.body) {
    let t = r.type === "ExportDefaultDeclaration",
      n = r.type === "ExportNamedDeclaration",
      s = n ? r.declaration : void 0,
      p = s?.type === "VariableDeclaration",
      i = [
        ...(t ? [r.declaration] : []),
        ...(p ? s.declarations.flatMap((a) => F(a.id)) : [s?.id]),
        ...(n ? r.specifiers.map((a) => a.local) : [])
      ];
    for (let a of i)
      if (a?.type === "Identifier" && !o.has(a.name) && Qo(r, a.name)) o.set(a.name, r);
  }
  return o;
}
function No(e, o, r) {
  let t = o(e);
  if (t?.type === "CallExpression") {
    let n = r.library.get(t),
      s = n === "read" || n === "update",
      p = n === "atom" || n === "memberOf" || r.state.has(t);
    return t.arguments[s ? 1 : 0] === e && (s || p);
  }
  if (t?.type === "ArrayExpression") {
    let n = o(t);
    return n?.type === "CallExpression" && r.library.get(n) === "derive" && n.arguments[0] === t;
  }
  return t?.type === "SpreadElement" && t.argument === e && o(t)?.type === "ObjectExpression";
}
var yn = ({ placed: e, starts: o }, r) =>
  e.slice(Ho(o, r.start), Ho(o, r.end)).toSorted((t, n) => t.at - n.at);
function gn({ read: e, binding: o }, { consts: r, names: t, parentOf: n, refuse: s }, p) {
  let { scope: i } = o,
    { name: a } = e,
    f = t.writtenShadowOf(e),
    u = i.type === "Program" ? r.exporting.get(a) : void 0;
  if (u !== void 0) return u;
  let x = (r.counted(a).owned.get(f) ?? []).filter(
    (h) => h.use.start >= i.start && h.use.start < i.end
  );
  if (!x.some((h) => h.use === e))
    throw s(
      e,
      `the scan lost track of this read of "${a}" and cannot show that every use of the const is a plain read. This is a fault of the scan, not of the module, which is refused rather than passed`
    );
  let c = x.find((h) => !No(h.use, n, p)),
    g = yn(r.apart(a)(p), i).at(0);
  return g !== void 0 && (c === void 0 || g.at < c.at) ? g.use : c?.use;
}
function hn(e, o) {
  let r = e.map((t, n) => ({ use: t, at: n }));
  return {
    owned: Map.groupBy(r, (t) => o.writtenShadowOf(t.use)),
    doubted: r.filter((t) => o.writtenShadowOf(t.use) !== o.shadowOf(t.use))
  };
}
function kn(e) {
  let o = e.toSorted((r, t) => r.use.start - t.use.start);
  return { placed: o, starts: o.map((r) => r.use.start) };
}
function jn(e, o, r) {
  let t = Qr((n) => hn(o.read.get(n) ?? [], o));
  return {
    inits: Nx(un),
    exporting: xn(e),
    rebound: Qr((n) => ln(n, { names: o, climbs: r })),
    counted: t,
    apart: Qr((n) => Qr((s) => kn(t(n).doubted.filter((p) => !No(p.use, r.parentOf, s)))))
  };
}
function To(e, o, r = new Set()) {
  if (e.type === "Identifier") {
    let n = r.has(e.name) ? void 0 : So(e, o),
      s = n === void 0 ? void 0 : To(n.init, o, new Set([...r, e.name]));
    return n !== void 0 && s !== void 0
      ? { ...s, consts: [{ read: e, binding: n }, ...s.consts] }
      : void 0;
  }
  if (e.type !== "ObjectExpression") return;
  let t = { consts: [] };
  for (let n of e.properties) {
    if (n.type === "SpreadElement") {
      let p = To(n.argument, o, r);
      if (p === void 0) return;
      t = { ...t, ...p, consts: [...t.consts, ...p.consts] };
      continue;
    }
    let s = D(n);
    if (s === void 0 || n.kind !== "init") return;
    if (s === "plugin" || s === "key") {
      let p = V(n.value);
      if (p === void 0) return;
      t = { ...t, [s]: p };
    }
  }
  return t;
}
function ie(e, o, r = new Set()) {
  if (e.type === "Identifier" && r.has(e.name)) return;
  let n = e.type === "Identifier" ? So(e, o.scanned) : void 0;
  if (n !== void 0 && n.init.type !== "ObjectExpression" && e.type === "Identifier")
    return ie(n.init, o, new Set([...r, e.name]));
  if (e.type !== "CallExpression") {
    let x = To(e, o.scanned);
    return x === void 0 ? void 0 : [x];
  }
  let p = o.libraryHelper(e),
    [i] = e.arguments;
  if ((p === "atom" || p === "memberOf") && i !== void 0 && i.type !== "SpreadElement")
    return ie(i, o, r);
  if (p !== "derive" || i?.type !== "ArrayExpression") return;
  let f = i.elements.map((x) => (x !== null && x.type !== "SpreadElement" ? ie(x, o, r) : void 0));
  return f.every((x) => x !== void 0) ? f.flat() : void 0;
}
function En(e, o, { refuse: r, scanned: t, libraryHelper: n }) {
  let [s] = e.arguments,
    p = s !== void 0 && s.type !== "SpreadElement",
    [i, ...a] = (p ? ie(s, { scanned: t, libraryHelper: n }) : void 0) ?? [],
    { plugin: f, key: u, consts: x = [] } = i ?? {};
  if (!(a.length === 0 && f !== void 0 && u !== void 0))
    throw r(
      s ?? e,
      `$.${o} takes a reference whose plugin and key are string literals ({ plugin: "p", key: "k" }, written there or in a const of this file; only id may be computed), so the values a module reads and writes can be listed (got ${oe(s)})`
    );
  return { call: e, spelling: o, named: { plugin: f, key: u }, consts: x };
}
function fr(
  e,
  o,
  {
    refuse: r,
    parentOf: t,
    scanned: n,
    record: s,
    recordEnv: p,
    recordCommand: i,
    recordState: a,
    libraryHelper: f,
    bind: u,
    follow: x
  }
) {
  let y = e,
    c = t(y);
  while (c?.type === "AwaitExpression") ((y = c), (c = t(y)));
  if (c === void 0) throw r(e, "$ stands alone");
  if (c.type === "MemberExpression" && c.object === y) {
    if (c.computed || c.optional) throw r(c, "a computed or optional member access on $");
    let k = c.property;
    if (k.type !== "Identifier") throw r(c, "a member access on $ that is not a name");
    if (k.name === Ce) {
      let ae = t(c);
      if (ir(ae, c) && ae.property.type === "Identifier") return;
      throw r(c, `$.${Ce} is used other than as $.${Ce}.name or $.${Ce}.root`);
    }
    let h = t(c);
    if (!ir(h, c) || h.property.type !== "Identifier")
      throw r(c, `$.${k.name} is used as a value (a noun of $ bound, passed or read)`);
    let j = t(h);
    if (j?.type !== "CallExpression" || j.callee !== h || j.optional)
      throw r(
        h,
        `$.${k.name}.${h.property.name} is used as a value (an event of $ bound, passed or read) instead of called`
      );
    let b = `${k.name}.${h.property.name}`;
    if ((s(b), tei(b))) p(b, mn(j, b, r));
    if (b === nn) i(j);
    if (Her(b)) a(En(j, b, { refuse: r, scanned: n, libraryHelper: f }));
    return;
  }
  if (c.type === "CallExpression" && e.type === "Identifier") {
    let k =
        o === "parameter" &&
        y === e &&
        c.callee !== y &&
        !c.optional &&
        c.callee.type === "Identifier",
      h = k ? f(c) : void 0;
    if ((h === "read" || h === "update") && c.arguments[0] === e) return;
    if (h !== void 0)
      throw r(
        e,
        `$ is passed to the state library's ${h} other than as the first argument of read($, source) or update($, target, fn)`
      );
    if (k) {
      x(c, e);
      return;
    }
  }
  if (o === "parameter")
    throw r(y, `$ itself is ${nr(c, y)} (bound, passed, spread, returned or read)`);
  if (c.type === "SpreadElement") {
    if (t(c)?.type === "ObjectExpression") return;
    throw r(c, "the value of next(e) at engine.create is spread other than into an object literal");
  }
  if (c.type === "ReturnStatement" || (c.type === "ArrowFunctionExpression" && c.body === y))
    return;
  if (c.type === "VariableDeclarator" && c.init === y) {
    let k = t(c);
    if (k?.type !== "VariableDeclaration" || k.kind !== "const")
      throw r(c, "the value of next(e) at engine.create is bound with let or var (const only)");
    let { id: E } = c;
    if (E.type === "Identifier") {
      u.dollar(E);
      return;
    }
    if (E.type === "ObjectPattern") {
      for (let j of E.properties)
        if (j.type === "RestElement") {
          if (j.argument.type !== "Identifier")
            throw r(j, "a rest of next(e) at engine.create that is not a plain name");
          u.dollar(j.argument);
        } else if (j.value.type === "Identifier" && !j.computed) u.unread(j.value);
        else
          throw r(
            j,
            "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key"
          );
      return;
    }
    throw r(E, "the value of next(e) at engine.create is destructured into an array");
  }
  throw r(y, `the value of next(e) at engine.create is ${nr(c, y)}`);
}
var wn = "engine.create";
function vo(e, o, r) {
  let { refuse: t } = r;
  for (let { name: n, declaration: s, origin: p } of o) {
    for (let i of Xo(e, n))
      if (i !== s) throw t(i, `"${n}" (which holds $) is declared again (shadowed)`);
    for (let i of q(e, n)) fr(i, p, r);
  }
}
function Vj(e, o, r) {
  let { refuse: t } = r;
  if (e.type !== "ArrowFunctionExpression")
    for (let i of q(e, "arguments", "own"))
      throw t(i, '"arguments" is read inside a function handed $ (it holds $)');
  let n = e.params.at(-1);
  if (n?.type === "RestElement" && o >= e.params.length - 1)
    throw t(n, "$ is passed into a rest parameter");
  let p = e.params[o];
  if (p === void 0) return;
  if (p.type !== "Identifier")
    throw t(p, "the parameter that receives $ is not a plain name (a pattern or a default)");
  vo(e, [{ name: p.name, declaration: p, origin: "parameter" }], {
    ...r,
    bind: {
      dollar: (i) => {
        throw t(i, "next(e) is bound outside an engine.create hook");
      },
      unread: (i) => {
        throw t(i, "next(e) is bound outside an engine.create hook");
      }
    }
  });
}
function bn({ fn: e, next: o, engineCreate: r }, t) {
  let { refuse: n, parentOf: s } = t;
  if (o.type !== "Identifier") {
    if (r) throw n(o, "the third parameter of an engine.create hook (next) is not a plain name");
    rr(o, t);
    return;
  }
  for (let p of Xo(e, o.name))
    if (p !== o)
      throw n(
        p,
        `"${o.name}" (the continuation) is declared again (shadowed); rename the inner binding`
      );
  for (let p of q(e, o.name)) {
    let i = s(p);
    if (i?.type === "CallExpression" && i.callee === p && !i.optional) {
      if (r) fr(i, "next", t);
      continue;
    }
    if (i?.type === "MemberExpression" && i.object === p) {
      if (i.computed) {
        if (
          i.property.type === "Literal" &&
          typeof i.property.value === "string" &&
          i.property.value !== "to"
        )
          continue;
        throw n(i, `a computed member access on "${o.name}" (it may reach next.to)`);
      }
      if (i.property.type === "Identifier" && i.property.name === "to") {
        let u = rn(i, t);
        if (r) fr(u, "next", t);
      }
      continue;
    }
    if (r)
      throw n(p, `"${o.name}" is passed on or bound inside an engine.create hook (its value is $)`);
    if (i?.type === "VariableDeclarator" && i.init === p) {
      if (i.id.type === "Identifier")
        throw n(
          i,
          `"${o.name}" (the hook's next) is bound to another name; next.to is reached only on the hook's own next`
        );
      rr(i.id, t);
      continue;
    }
    if (i?.type === "AssignmentExpression" && i.right === p)
      throw n(
        i,
        `"${o.name}" (the hook's next) is assigned to another name; next.to is reached only on the hook's own next`
      );
  }
}
function Xj(e, o, r) {
  let { refuse: t } = r,
    [n, s, p] = e.params;
  if (e.type !== "ArrowFunctionExpression")
    for (let u of q(e, "arguments", "own"))
      throw t(u, '"arguments" is read inside a hook (it holds $)');
  let i = [];
  if (n !== void 0) {
    if (n.type !== "Identifier")
      throw t(
        n,
        "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)"
      );
    i.push({ name: n.name, declaration: n, origin: "parameter" });
  }
  for (let u of [n, s, p])
    if (u?.type === "RestElement")
      throw t(u, "a hook takes $, e or next into a rest parameter (it would hold next)");
  for (let u of e.params)
    p0(u, ({ node: x }) => {
      if (x.type === "AssignmentPattern") throw t(x, "a parameter of a hook has a default value");
    });
  let f = {
    ...r,
    bind: {
      dollar: (u) => {
        i.push({ name: u.name, declaration: u, origin: "next" });
      },
      unread: (u) => {
        for (let x of q(e, u.name))
          throw t(
            x,
            `"${u.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`
          );
      }
    }
  };
  if (p !== void 0) bn({ fn: e, next: p, engineCreate: o }, f);
  vo(e, i, f);
}
function be({ scan: e, linked: o }, r, t) {
  let { scanned: n } = o,
    s = gh(r, { names: n.names, refuse: n.refuse, what: t });
  if (s !== void 0) return { fn: s, linked: o };
  let p = n.imports.get(r.name);
  if (p === void 0)
    throw n.refuse(
      r,
      `${t} "${r.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`
    );
  if (p.imported === void 0)
    throw n.refuse(r, `${t} "${r.name}" is a namespace import, not a function`);
  if (n.names.assigned.has(r.name)) throw n.refuse(r, `${t} "${r.name}" is assigned to elsewhere`);
  let i = n.names.shadowOf(r);
  if (i !== void 0)
    throw n.refuse(i, `${t} "${r.name}" is declared again in this file, shadowing the import`);
  let a = o.links.get(p.specifier);
  if (a === void 0)
    throw n.refuse(
      r,
      `${t} "${r.name}" is imported from "${p.specifier}", which is not a file of the module's own`
    );
  let f = er({ scan: e, linked: K(e, a) }, p.imported);
  if (f === void 0)
    throw n.refuse(
      r,
      `${t} "${r.name}" is imported from "${p.specifier}", which exports no function of that name: neither its own nor one it re-exports from a file of the module's own`
    );
  return f;
}
function Sn(e) {
  let [o] = e.arguments,
    r = o?.type === "ObjectExpression" ? o.properties : [],
    t = r.some(uo),
    [n, s] = r.filter((f) => he(f, "name")),
    i = !t && s === void 0 && n?.type === "Property" ? n.value : void 0,
    a = i?.type === "Literal" ? i.value : void 0;
  return typeof a === "string" ? a : void 0;
}
function Ao(e, o) {
  let r = Sn(o);
  if (r !== void 0) e.registeredCommands.add(r);
}
function Zj(e) {
  let o = new Set(),
    r = { state: e.stateCalls, library: e.libraryCalls };
  for (let { followed: t, spelling: n, scanned: s } of e.stateConsts) {
    let { init: p } = t.binding;
    if (o.has(p)) continue;
    o.add(p);
    let i = gn(t, s, r);
    if (i !== void 0)
      throw s.refuse(
        i,
        `the const ${t.read.name}, read as the reference of a $.${n} call, is also written through, handed on or exported here, and const does not freeze: what it holds at the call could not be listed. Use it only as the reference of $.state calls, as a source of the state library's functions imported from "claude-code", and in a spread into an object literal ({ ...${t.read.name}, id }), or write the reference at the call`
      );
  }
}
function eE(e) {
  for (let { scanned: o } of e.graph.files.values())
    p0(o.program, ({ node: r }) => {
      let t = r.type === "CallExpression",
        n = t ? se(o, r) : void 0;
      if (n === void 0 || !t) return;
      e.libraryCalls.set(r, n);
      let s = n === "read" || n === "update",
        p = s ? r.arguments[1] : r,
        a =
          p !== void 0 && p.type !== "SpreadElement"
            ? ie(p, { scanned: o, libraryHelper: (x) => se(o, x) })
            : void 0,
        f = a?.every(({ plugin: x, key: y }) => x !== void 0 && y !== void 0);
      if (a === void 0 || f !== !0)
        throw o.refuse(
          p ?? r,
          `the state library's ${n} takes a source the scan can read: a reference whose plugin and key are string literals, or what atom, memberOf or derive (imported from "claude-code") made of one, written there or in a const of this file, so the values a module reads and writes can be listed`
        );
      let u = n === "update" ? "state.set" : "state.get";
      for (let { plugin: x = "", key: y = "", consts: c } of a) {
        let g = `${x}\x00${y}`;
        if ((e.stateReads.set(g, { plugin: x, key: y }), n === "update"))
          e.stateWrites.set(g, { plugin: x, key: y });
        for (let k of c) e.stateConsts.add({ followed: k, spelling: u, scanned: o });
      }
      if (s) e.calls.add("state.get");
      if (n === "update") e.calls.add("state.set");
    });
}
function mr(e, { call: o, spelling: r, named: t, consts: n }, s) {
  let p = `${t.plugin}\x00${t.key}`;
  ((r === "state.get" ? e.stateReads : e.stateWrites).set(p, t), e.stateCalls.add(o));
  for (let a of n) e.stateConsts.add({ followed: a, spelling: r, scanned: s });
}
function oE(e) {
  let o = e.stateReads.size > 0 || e.stateWrites.size > 0,
    r = (t) => [...t.entries()].sort(([n], [s]) => (n < s ? -1 : n > s ? 1 : 0)).map(([, n]) => n);
  return o ? { reads: r(e.stateReads), writes: r(e.stateWrites) } : void 0;
}
function dr(e, o = e.linked) {
  let { scan: r, linked: t } = e,
    { scanned: n } = t,
    { refuse: s } = n,
    p = (i, a) => {
      let { callee: f } = i;
      if (f.type !== "Identifier")
        throw s(f, "$ is passed to something other than a named function");
      let u = Me(i);
      if (u !== void 0) throw s(u, "$ is passed in a call with a spread argument");
      if (!(n.names.functions.has(f.name) || n.imports.has(f.name)))
        throw s(
          f,
          `$ is passed to "${f.name}", which is not a function declared at the top of this file (a function declaration, or a const bound to one), nor one imported from a file of the module's own; $ is followed nowhere else`
        );
      if (n.imports.has(f.name) && n.names.shadowOf(f) !== void 0)
        throw s(
          f,
          `$ is passed to "${f.name}", a name declared again over this call: the engine may not bind it to the import of that name. Rename one of the two`
        );
      let { fn: c, linked: g } = be(e, f, "the function handed $"),
        k = g.scanned;
      if (c.type !== "FunctionDeclaration" && (g !== o || t !== o))
        throw s(
          f,
          `$ is passed to "${f.name}", a name bound to a function expression, outside the hook's own file: past an import $ is followed only into a function declaration (function ${f.name}($) { ... }), which a bundle of the module keeps as written`
        );
      let E = i.arguments.indexOf(a),
        j = r.helpers.get(c) ?? new Set();
      if (j.has(E)) return;
      (j.add(E),
        r.helpers.set(c, j),
        Vj(c, E, {
          refuse: k.refuse,
          parentOf: k.parentOf,
          scanned: k,
          record: (w) => {
            (r.calls.add(w), r.via.set(w, (r.via.get(w) ?? new Set()).add(f.name)));
          },
          recordTo: (w) => {
            r.nextTo.add(w);
          },
          recordEnv: (w, b) => {
            xo(r, w).add(b);
          },
          recordCommand: (w) => {
            Ao(r, w);
          },
          recordState: (w) => {
            mr(r, w, k);
          },
          libraryHelper: (w) => se(k, w),
          follow: g === t ? p : dr({ scan: r, linked: g }, o)
        }));
    };
  return p;
}
import { createHash as sE } from "crypto";
var Se = (e) => `${e.length}:${e}`;
function pE(e) {
  let o = sE("sha256").update(Se(e.root));
  for (let [r, { compiled: t, links: n }] of e.files) {
    o.update(Se(r) + Se(t));
    for (let [s, p] of n) o.update(Se(s) + Se(p));
  }
  return o.digest("hex");
}
function Nn(e) {
  return {
    argumentsRead: e.type === "ArrowFunctionExpression" ? [] : q(e, "arguments", "own"),
    names: qo(e)
  };
}
function Tn(e, o) {
  let r = e.holderNames.get(o);
  if (r !== void 0) return r;
  let t = Nn(o);
  return (e.holderNames.set(o, t), t);
}
function Oo(e, { fn: o, what: r, event: t, engineCreate: n }) {
  let { scan: s, linked: p } = e,
    i = o.type === "FunctionExpression" || o.type === "ArrowFunctionExpression",
    a = o.type === "Identifier",
    f = i ? { fn: o, linked: p } : a ? be(e, o, r) : void 0;
  if (f === void 0) throw p.scanned.refuse(o, `${r} is not a function literal or the name of one`);
  let u = f.fn.async === !0 && f.fn.generator === !0,
    x = xyn(t);
  if (x && !u)
    throw p.scanned.refuse(
      o,
      `${r} on "${t}" is not an async generator: ${t} streams, so it takes async function* ($, e, next) { ... }, which yields the chunks and returns the result`
    );
  if (!x && u)
    throw p.scanned.refuse(
      o,
      `${r} on "${t}" is an async generator: only a streaming event named as itself (${BKr.join(", ")}) takes one; this pattern takes ($, e, next) => result`
    );
  s.registered.set(f.fn, {
    linked: f.linked,
    engineCreate: s.registered.get(f.fn)?.engineCreate === !0 || n
  });
}
function vn(e, { call: o, event: r, onName: t, holder: n }) {
  let { scanned: s } = e.linked,
    { parentOf: p, refuse: i } = s,
    a = p(o),
    f = `${t}("${r}")`;
  if (a?.type !== "MemberExpression" || a.object !== o) {
    Oe({ call: o, scanned: s, what: f, holder: n });
    return;
  }
  if (!(
    !a.computed &&
    !a.optional &&
    a.property.type === "Identifier" &&
    a.property.name === "catch"
  ))
    throw i(
      a,
      `${f} is read for something other than .catch; a registration has .catch(handler) and nothing else`
    );
  let x = p(a);
  if (!(x?.type === "CallExpression" && x.callee === a && !x.optional))
    throw i(a, `${f}.catch is read without being called`);
  if (r === wn)
    throw i(
      x,
      `${f}.catch(): an engine.create hook has no budget and its failure fails the load; .catch does not apply`
    );
  let c = Me(x);
  if (c !== void 0) throw i(c, `${f}.catch() is called with a spread argument`);
  let [g, ...k] = x.arguments;
  if (g === void 0 || k.length > 0)
    throw i(x, `${f}.catch() takes (handler); got ${x.arguments.length} argument(s)`);
  Oo(e, { fn: g, what: "the .catch handler", event: r, engineCreate: !1 });
  let h = p(x);
  if (h?.type === "MemberExpression" && h.object === x)
    throw i(h, `${f}.catch(...) is followed by another member; a registration takes one .catch`);
  Oe({ call: x, scanned: s, what: `${f}.catch()`, holder: n });
}
function An(e, o) {
  let { call: r, onName: t, holder: n, position: s } = o,
    { scan: p, linked: i } = e,
    { scanned: a } = i,
    { event: f, hook: u, matcher: x } = Ph(r, a.refuse, t),
    y = x !== void 0,
    c = ent(f),
    g = p.unmatched.get(f);
  if (g !== void 0 && (!y || c))
    throw a.refuse(
      r,
      `${t}("${f}") is registered twice${y ? "" : " without a matcher"}; the first is at ${g}`
    );
  if (!y || c) p.unmatched.set(f, `${a.file}:${r.loc?.start.line ?? "unknown line"}`);
  (p.hooks.add(f),
    p.registrations.set(r, { event: f, matcher: x, linked: i, holder: n, position: s }),
    Oo(e, { fn: u, what: "the hook", event: f, engineCreate: f === wn }),
    vn(e, { ...o, event: f }));
}
function cr(e, o, r) {
  let { scan: t, linked: n } = e,
    s = t.holders.get(o) ?? new Set();
  if (s.has(r)) return;
  (s.add(r), t.holders.set(o, s), t.holderFiles.set(o, n));
  let { scanned: p } = n,
    { refuse: i, parentOf: a } = p,
    f = Tn(t, o);
  for (let y of f.argumentsRead) throw i(y, '"arguments" is read inside a function that holds on');
  let u = o.params[r];
  if (u === void 0) {
    let y = o.params.at(-1);
    if (y?.type === "RestElement") throw i(y, "on is passed into a rest parameter");
    return;
  }
  if (u.type !== "Identifier") throw i(u, "the parameter that receives on is not a plain name");
  let x = u.name;
  for (let y of f.names.declared.get(x) ?? [])
    if (y !== u) throw i(y, `"${x}" is declared again (shadowed)`);
  for (let y of f.names.read.get(x) ?? []) {
    let c = a(y);
    if (c?.type !== "CallExpression" || c.optional)
      throw i(
        y,
        `"${x}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`
      );
    if (c.callee === y) {
      An(e, { call: c, onName: x, holder: o, position: r });
      continue;
    }
    if (c.callee.type !== "Identifier")
      throw i(
        c.callee,
        `"${x}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`
      );
    let g = Me(c);
    if (g !== void 0) throw i(g, `"${x}" is passed in a call with a spread argument`);
    Oe({ call: c, scanned: p, what: `${c.callee.name}(${x})`, holder: o });
    let k = be(e, c.callee, "the callee"),
      h = c.arguments.indexOf(y);
    (t.holderCalls.add({ call: c, callee: k.fn, position: h, caller: o, callerPosition: r }),
      cr({ scan: t, linked: k.linked }, k.fn, h));
  }
}
var On = (e, o, r) => ({
  graph: e,
  pluginName: o,
  register: r,
  hooks: new Set(),
  registrations: new Map(),
  holderCalls: new Set(),
  holderFiles: new Map(),
  unmatched: new Map(),
  calls: new Set(),
  nextTo: new Set(),
  envReads: new Set(),
  envWrites: new Set(),
  registeredCommands: new Set(),
  stateReads: new Map(),
  stateWrites: new Map(),
  stateCalls: new Set(),
  libraryCalls: new Map(),
  stateConsts: new Set(),
  direct: new Set(),
  via: new Map(),
  helpers: new Map(),
  exportsRead: new Map(),
  exportsOpen: new Map(),
  exportsUnderWay: { depth: 0, lowest: 0 },
  exportsHeld: new Map(),
  exportSteps: { taken: 0 },
  ownExports: new Map(),
  exportTables: new Map(),
  registered: new Map(),
  holders: new Map(),
  holderNames: new Map()
});
function ur(e, o) {
  let r = K({ graph: e, pluginName: o }, e.entry),
    t = Eh(r),
    n = On(e, o, t);
  return (cr({ scan: n, linked: r }, t, 0), n);
}
function Le(e, o) {
  let r = ur(e, o);
  for (let [t, { linked: n, engineCreate: s }] of r.registered)
    Xj(t, s, {
      refuse: n.scanned.refuse,
      parentOf: n.scanned.parentOf,
      scanned: n.scanned,
      record: (p) => {
        (r.calls.add(p), r.direct.add(p));
      },
      recordTo: (p) => {
        r.nextTo.add(p);
      },
      recordEnv: (p, i) => {
        xo(r, p).add(i);
      },
      recordCommand: (p) => {
        Ao(r, p);
      },
      recordState: (p) => {
        mr(r, p, n.scanned);
      },
      libraryHelper: (p) => se(n.scanned, p),
      follow: dr({ scan: r, linked: n })
    });
  return (eE(r), Zj(r), r);
}
function EE(e, o) {
  let { via: r, direct: t } = Le(e, o),
    n = new Map();
  for (let [s, p] of r) if (!t.has(s)) n.set(s, [...p].sort());
  return n;
}
import { relative as HE } from "path";
var Po = (e, o, r) => new He(`${e}: ${o} does not parse: ${d(r)}`);
function nei(e, o, r) {
  try {
    return Per(e, o);
  } catch (t) {
    throw Po(r, e, t);
  }
}
var Rn = (e, o) =>
  _o(e) === "js"
    ? void 0
    : o.split(`
`);
function rei(e) {
  let o;
  if (
    (p0(e.program, ({ node: r }) => {
      if (r.type === "ImportExpression" && (o === void 0 || r.start < o.start)) o = r;
    }),
    o === void 0)
  )
    return;
  return e.refuse(
    o,
    'a dynamic import(); a hooks module imports its own files with an import declaration, as in import { name } from "./file.js"'
  );
}
function Pn(e) {
  let o = new Map();
  for (let r of e.body) {
    if (r.type !== "ImportDeclaration") continue;
    let t = String(r.source.value);
    for (let n of r.specifiers) {
      let s;
      if (n.type === "ImportSpecifier") {
        let p = n.imported;
        s = p.type === "Identifier" ? p.name : String(p.value);
      } else s = n.type === "ImportDefaultSpecifier" ? "default" : void 0;
      o.set(n.local.name, { specifier: t, imported: s });
    }
  }
  return o;
}
function In(e) {
  let o = new Set();
  for (let r of e.body) {
    let t = r.type === "ImportDeclaration" || r.type === "ExportAllDeclaration",
      n = r.type === "ExportNamedDeclaration",
      s = t ? r.source : n ? (r.source ?? null) : null;
    if (s !== null) o.add(String(s.value));
  }
  return [...o];
}
var xr = 2000;
class Io extends He {
  name = "ScanRefusal";
  plugin;
  file;
  line;
  excerpt;
  construct;
  constructor({ plugin: e, file: o, line: r, excerpt: t, construct: n }) {
    super(
      `${e}: ${o}${r === void 0 ? "" : t === void 0 ? `:${r}` : `, compiled line ${r} \`${t}\``}: ${n}; $ is always spelled $.noun.event(...) at the call site, on is always on("<event>", hook), and next.to always next.to(e, "<tier>")`
    );
    ((this.plugin = e), (this.file = o), (this.line = r), (this.excerpt = t), (this.construct = n));
  }
}
var Fn = (e, o) => (r) =>
  class extends r {
    enterScope = (t) => {
      if ((r.prototype.enterScope.call(this, t), this.scopeStack.length > e + 1))
        throw o(this.lastTokStartLoc.line);
    };
  };
function oei(e, o, r) {
  let t = Rn(e, o);
  function n(u, x) {
    let y = typeof u === "number" ? u : u?.loc?.start.line,
      g = t === void 0 || y === void 0 ? void 0 : (t[y - 1]?.trim() ?? ""),
      k = g !== void 0 && g.length > Yr;
    return new Io({
      plugin: r,
      file: e,
      line: y,
      excerpt: k ? `${re(g, Yr)}...` : g,
      construct: x
    });
  }
  let { Parser: s } = UVo(),
    p;
  try {
    p = s
      .extend(
        Fn(xr, (u) =>
          n(
            u,
            `code nested too deep to scan: more than ${xr} scopes (functions, blocks, loops) open inside one another`
          )
        )
      )
      .parse(o, { ecmaVersion: "latest", sourceType: "module", locations: !0 });
  } catch (u) {
    if (u instanceof Io) throw u;
    throw u instanceof RangeError
      ? n(void 0, `code nested too deep to scan (the parser stopped: ${u.message})`)
      : Po(r, e, u);
  }
  let i = Ax(p),
    a = wy((u) => i.get(u)),
    f = Hy(p, a);
  return {
    file: e,
    program: p,
    names: f,
    consts: jn(p, f, a),
    parentOf: a.parentOf,
    climbs: a,
    refuse: n,
    imports: Pn(p),
    specifiers: In(p)
  };
}
function FE(e) {
  let o;
  return (
    p0(
      e,
      ({ node: r }) => {
        if (
          o === void 0 &&
          (r.type === "AwaitExpression" ||
            (r.type === "ForOfStatement" && r.await) ||
            (r.type === "VariableDeclaration" && r.kind === "await using"))
        )
          o = r;
      },
      (r) =>
        r.type === "FunctionDeclaration" ||
        r.type === "FunctionExpression" ||
        r.type === "ArrowFunctionExpression"
    ),
    o
  );
}
async function Dn(e, o, r) {
  let t = new Map(),
    n = new Map([[e.file, e.source]]),
    s = new Map(e.real === void 0 ? [] : [[e.real, e.file]]),
    p = { known: n, reals: s },
    i = Buffer.byteLength(e.source, "utf8"),
    a = [e];
  while (a.length > 0) {
    let f = [],
      u = 0;
    for (let { file: y, source: c } of a) {
      if (t.has(y)) continue;
      if (u > 0 && u % Bo === 0) await Wg();
      if (((u += 1), Buffer.byteLength(c, "utf8") > Yzt)) throw Ae(o, y);
      let h = nei(y, c, o),
        E = oei(y, h, o),
        j = rei(E);
      if (j !== void 0) throw j;
      let w = FE(E.program);
      if (y !== e.file && w !== void 0)
        throw E.refuse(
          w,
          "a top-level await in a file the entry imports; the environment links the entry alone as an async module"
        );
      let ae = new Map();
      for (let fe of E.specifiers) {
        if (fe === bvt) continue;
        if (!$Vo(fe)) throw qZs(o, fe, HE(e.root, y) || y);
        f.push({ importer: y, specifier: fe, links: ae });
      }
      t.set(y, { source: c, compiled: h, scanned: E, links: ae });
    }
    let x = [];
    for (let y = 0; y < f.length; y += Bo) {
      let c = await Promise.allSettled(
        f
          .slice(y, y + Bo)
          .map(async (g) => ({ pending: g, answer: await r(g.specifier, g.importer, p) }))
      );
      for (let g of c) {
        if (g.status === "rejected") throw g.reason;
        let { pending: h, answer: E } = g.value,
          { real: j } = E,
          w = j === void 0 ? void 0 : s.get(j),
          b = w === void 0 ? E : { file: w, source: n.get(w) ?? E.source };
        if (!n.has(b.file)) {
          if (((i += Buffer.byteLength(b.source, "utf8")), i > Cr)) throw ax(o, b.file);
          if ((n.set(b.file, b.source), j !== void 0)) s.set(j, b.file);
        }
        (h.links.set(h.specifier, b.file), x.push(b));
      }
    }
    a = x;
  }
  return { entry: e.file, root: e.root, files: t };
}
function yr(e, o) {
  let { onName: r, event: t, refuse: n } = o;
  if (e === void 0) return ke;
  switch (e.type) {
    case "ObjectExpression": {
      let s = e.properties.find(
        (f) => f.type === "SpreadElement" || f.computed || f.kind !== "init"
      );
      if (s !== void 0)
        throw n(
          s,
          `${r}("${t}") has a matcher with a spread, a computed key or an accessor, which may set "to" to anything; ` +
            C(o)
        );
      let [p, i] = e.properties.filter((f) => he(f, "to"));
      if (i !== void 0) throw n(i, `${r}("${t}") names "to" twice in one matcher; ` + C(o));
      return p?.type === "Property" ? qt(p.value, o) : ke;
    }
    case "ArrayExpression":
      return e.elements.flatMap((s) => {
        if (s === null || s.type === "SpreadElement")
          throw n(s ?? e, `${r}("${t}") has a list of matchers with a hole or a spread; ${C(o)}`);
        return yr(s, o);
      });
    default:
      throw n(
        e,
        `${r}("${t}") takes its matcher as ${eo(e)}, not an object written in the call; ${C(o)}`
      );
  }
}
function Mn(e) {
  let o = [...e.registrations.values()].filter((n) => _oe(n.event, "command.run")),
    r = o.map((n) => ne(n.matcher));
  return o.length > 0 && r.every((n) => n !== void 0)
    ? L(r.flatMap((n) => n ?? [])).toSorted()
    : void 0;
}
function Cn(e) {
  let o = [...e.registrations].filter(([, t]) => Eo(t.event));
  if (o.length === 0) return;
  let r = new Set(
    o.flatMap(([t, { event: n, matcher: s, linked: p }]) =>
      yr(s, {
        onName: t.callee.type === "Identifier" ? t.callee.name : "on",
        event: n,
        refuse: p.scanned.refuse
      })
    )
  );
  return ke.filter((t) => r.has(t));
}
function UE(e, o) {
  let r = Le(e, o),
    t = Jzt("prepend").filter((f) => r.nextTo.has(f)),
    n = r.envReads.size > 0 || r.envWrites.size > 0,
    s = dt(e),
    p = oE(r),
    i = Mn(r),
    a = Cn(r);
  return {
    hooks: Array.from(r.hooks),
    calls: Array.from(r.calls).sort(),
    ...(i !== void 0 && { runCommands: i }),
    ...(t.length === 0 ? {} : { nextTo: t }),
    ...(a !== void 0 && { telemetry: a }),
    ...(n && {
      env: { reads: Array.from(r.envReads).sort(), writes: Array.from(r.envWrites).sort() }
    }),
    ...(p !== void 0 && { state: p }),
    ...(s.length > 0 && { clients: s })
  };
}
var VE = (e) => (o, r) =>
  Promise.reject(
    new He(`${e}: cannot import "${o}" (from ${r}): the module is one text with no files beside it`)
  );
async function Ler(e, o, r) {
  let t = Ze.source(e);
  if (t !== void 0)
    return { source: t, graph: await Dn({ file: e, source: t, root: o }, r, VE(r)) };
  let { real: n, source: s } = await fx(e, o, r);
  return { source: s, graph: await Dn({ file: e, source: s, root: o, real: n }, r, $g(o, r)) };
}
function Be(e, o) {
  let r = pE(e),
    t = Jr.get(r);
  if (t !== void 0) return t;
  let n = UE(e, o);
  return (Jr.set(r, n), n);
}
async function pSi(e, o, r) {
  let { graph: t } = await Ler(e, o, r),
    { registrations: n, renderMatchers: s, catchReads: p } = zt(Le(t, r));
  return {
    scan: Be(t, r),
    registrations: n,
    renderMatchers: s,
    catchReads: p,
    helperCalls: EE(t, r)
  };
}
var mSi = (e, o) => ({
  linked: [...e.files].filter(([r]) => r !== o).map(([r, t]) => ({ file: r, source: t.source })),
  links: [...e.files].flatMap(([r, t]) =>
    [...t.links].map(([n, s]) => ({ from: r, spelled: n, file: s }))
  )
});
async function KVo(e, o, r) {
  let t = Ze.scan(e);
  if (t !== void 0) return { source: "", linked: [], links: [], scan: t };
  let { source: n, graph: s } = await Ler(e, o, r);
  return {
    source: n,
    linked: [...s.files].filter(([p]) => p !== e).map(([p, i]) => ({ file: p, source: i.source })),
    links: [...s.files].flatMap(([p, i]) =>
      [...i.links].map(([a, f]) => ({ from: p, spelled: a, file: f }))
    ),
    scan: Be(s, r)
  };
}
function VVo(e, o) {
  if (!(!o.isBuiltin && e.telemetry?.includes(Xt) === !0)) return;
  return `its hooks stand on the telemetry stream "${Xt}" (a matcher names it, or a telemetry hook names no "to" and so stands on every stream), which is for the plugins built into the CLI; name the collector on each telemetry hook: on("telemetry.log", { to: "collector" }, hook)`;
}
function qVo(e) {
  let o = e.telemetry?.join(", ");
  return o === "" ? "nothing" : o;
}
var $n = (e, o, r) => ({ module: e, scan: tu(o, r), files: ru(o) });
var YVo = "agents";
var P$ = (e, o, r) => $n(o, r(), e);
import { join as dw } from "path";
function cw(e, o) {
  return "folder" in o
    ? { path: o.folder, modulePath: dw(o.folder, Ne) }
    : { path: Ns, modulePath: Ar(e) };
}
import { join as uw } from "path";
var Ner = (e) => uw(Te(), Co, e);
function yw(e) {
  return e === null || e === void 0
    ? String(e)
    : typeof e === "object"
      ? `an object with keys [${Object.keys(e).join(", ")}]`
      : `a ${typeof e}`;
}
function gw(e) {
  if (
    typeof e === "object" &&
    e !== null &&
    "registerPlugin" in e &&
    typeof e.registerPlugin === "function"
  )
    return e;
  throw new R(
    `a built-in module has no registerPlugin function: ${yw(e)}`,
    "a built-in module has no registerPlugin function"
  );
}
function R_e(e, o) {
  let r;
  try {
    r = o();
  } catch (n) {
    Fo(e, "require", n);
    return;
  }
  let t;
  try {
    t = gw(r);
  } catch (n) {
    Fo(e, "shape", n);
    return;
  }
  try {
    t.registerPlugin();
  } catch (n) {
    (br().builtinPlugins.delete(e), Fo(e, "register", n));
  }
}
function Fo(e, o, r) {
  let t = br().builtinPluginFailures;
  if (t.has(e)) return;
  (t.set(e, { name: e, phase: o, message: d(r) }), l(N(r)), m("plugin_bundled_register", o));
}
function Iyn(e) {
  let o = br(),
    r = o.builtinPlugins.get(e);
  if (r === void 0 || o.builtinPluginFailures.has(e)) return !1;
  if (r.isAvailable === void 0) return !0;
  try {
    return r.isAvailable();
  } catch (t) {
    return (Fo(e, "is_available", t), !1);
  }
}
function aS(e) {
  br().builtinPlugins.set(e.name, e);
  let o = e.hooksModule;
  if (o === void 0) return;
  let r = Ar(e.name);
  if ("scan" in o) Ze.registerScan(r, o.scan);
  else if ("shipped" in o) Ze.register(r, o.shipped);
}
function vp(e) {
  return e.endsWith(`@${Ns}`);
}
function zk(e) {
  return br().builtinPlugins.get(e);
}
function Sz() {
  let e = pr(),
    o = [],
    r = [];
  for (let [t, n] of br().builtinPlugins) {
    if (!Iyn(t)) continue;
    let s = `${t}@${Ns}`,
      p = TI(s).length > 0,
      i = n.enabledFromPolicyOnly
        ? Vn(s)
        : n.enabledFromTrustedSettingsOnly
          ? Jer(s)
          : !p
            ? e?.enabledPlugins?.[s]
            : Oyn(s),
      a = i !== void 0 ? i === !0 : (n.defaultEnabled ?? !0),
      f = {
        name: t,
        manifest: {
          name: t,
          description: n.description,
          version: n.version,
          ...(n.defaultEnabled === void 0 ? {} : { defaultEnabled: n.defaultEnabled }),
          ...(n.userConfig === void 0 ? {} : { userConfig: n.userConfig })
        },
        path: Ns,
        source: s,
        repository: s,
        enabled: a,
        isBuiltin: !0,
        hooksConfig: n.hooks,
        mcpServers: n.mcpServers,
        ...(n.hooksModule === void 0 ? {} : cw(t, n.hooksModule))
      };
    if (a) o.push(f);
    else r.push(f);
  }
  return { enabled: o, disabled: r };
}
function $er() {
  return Gn().filter((e) => !RV(e.name));
}
function sei() {
  return Gn();
}
function Gn() {
  let { enabled: e } = Sz(),
    o = [],
    r = br().builtinPlugins;
  for (let t of e) {
    let n = r.get(t.name);
    if (!n?.skills) continue;
    for (let s of n.skills) o.push(kw(s, `${t.name}@${Ns}`));
  }
  return o;
}
function zKr(e = new Set()) {
  let o = [];
  for (let [r, t] of br().builtinPlugins) {
    if (e.has(r)) continue;
    for (let n of t.skills ?? []) o.push(n.name, ...(n.aliases ?? []));
  }
  return o;
}
function Oyn(e) {
  let o = Ro();
  for (let r = o.length - 1; r >= 0; r--) {
    let t = o[r];
    if (t === void 0) continue;
    let n = _9(pe(t)?.enabledPlugins, e);
    if (n !== void 0) return n;
  }
  return;
}
function iei() {
  return Object.fromEntries(
    [...br().builtinPlugins]
      .filter(([, e]) => e.enabledFromPolicyOnly)
      .map(([e]) => `${e}@${Ns}`)
      .map((e) => [e, Vn(e)])
  );
}
function Vn(e) {
  let [o, r] = [qRe(), pe("policySettings")].map((t) => _9(t?.enabledPlugins, e));
  return o === !1 && r !== !1 ? r : o;
}
function kw(e, o) {
  let r = br().builtinPluginWiredSkills,
    t = r.get(e);
  if (!t) {
    let { wireSkillFilesExtraction: i } = import.meta.require(
      __filePath_18e458ad48e22626(
        new __filePath_18e458ad48e22626_URL("./chunk-n1dyvg9x.js", import.meta.url)
      )
    );
    ((t = i(e)), r.set(e, t));
  }
  let { skillRoot: n, getPromptForCommand: s } = t;
  i0e(e.hooks ?? {}, o);
  let p = {
    type: "prompt",
    name: e.name,
    description: typeof e.description === "function" ? "" : e.description,
    menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription,
    aliases: e.aliases,
    hasUserSpecifiedDescription: !0,
    allowedTools: e.allowedTools ?? [],
    getAllowedTools: e.getAllowedTools,
    disallowedTools: e.disallowedTools ?? [],
    argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
    whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
    subcommands: e.subcommands,
    subcommandsBareOnly: e.subcommandsBareOnly,
    model: e.model,
    disableModelInvocation:
      typeof e.disableModelInvocation === "function" ? !0 : (e.disableModelInvocation ?? !1),
    disableBridgeInvocation: e.disableBridgeInvocation,
    userInvocable: e.userInvocable ?? !0,
    terminalOriented: e.terminalOriented,
    argsMayContainSlashCommands: e.argsMayContainSlashCommands,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: e.hooks,
    context: e.context,
    getContext: e.getContext,
    agent: e.agent,
    background: e.background,
    formatForegroundForkResult: e.formatForegroundForkResult,
    skillRoot: n,
    isEnabled: e.isEnabled ?? (() => !0),
    policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate,
    requires: e.requires,
    isHidden: !(e.userInvocable ?? !0),
    progressMessage: e.progressMessage ?? "running",
    getPromptForCommand: s,
    getEffort: e.getEffort,
    getDefaultEffort: e.getDefaultEffort,
    onUserTypedArgs: e.onUserTypedArgs,
    getArgumentCompletions: e.getArgumentCompletions,
    enterTakesArgumentCompletion: e.enterTakesArgumentCompletion
  };
  return (
    o0e(p, "description", e.description),
    o0e(p, "menuDescription", e.menuDescription),
    o0e(p, "argumentHint", e.argumentHint),
    o0e(p, "whenToUse", e.whenToUse),
    qer(p, "disableModelInvocation", e.disableModelInvocation),
    Yer(p, e.policyGate),
    p
  );
}
function Der(e, o, r) {
  let t = or(e);
  if (vp(e)) return r.outermost.includes(t) ? "prepend" : "builtin";
  let n = Pvt(e, o),
    s = (a) => r[a].includes(t) && (r.from[a] === "user" ? !n : n),
    p = n ? "prepend" : "user",
    i = s("prepend") ? "prepend" : "append";
  return s("prepend") || s("append") ? i : p;
}
export {
  Per,
  NVo,
  Yzt,
  bvt,
  qZs,
  $Vo,
  Ztt,
  FVo,
  YZs,
  UVo,
  Ier,
  p0,
  dSi,
  cSi,
  FKr,
  UKr,
  Oer,
  ZLe,
  uSi,
  e0e,
  BVo,
  BKr,
  xyn,
  Xzt,
  XZs,
  Pyn,
  Mer,
  JZs,
  QZs,
  Svt,
  jVo,
  Jzt,
  jKr,
  ZZs,
  WVo,
  GVo,
  wvt,
  Der,
  ent,
  eei,
  WKr,
  _oe,
  Qzt,
  tei,
  Her,
  vvt,
  Zzt,
  e2t,
  t0e,
  fSi,
  zVo,
  GKr,
  nei,
  rei,
  oei,
  Ler,
  pSi,
  mSi,
  KVo,
  VVo,
  qVo,
  YVo,
  P$,
  Ner,
  R_e,
  Iyn,
  aS,
  vp,
  zk,
  Sz,
  $er,
  sei,
  zKr,
  Oyn,
  iei
};

//# sourceMappingURL=chunk-pbffp8rf.js.map
