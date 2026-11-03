// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, G } from "./chunk-fs43t96t.js";
import { _, ma, te, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { os } from "./chunk-jtb5bzvb.js";
import { rz } from "./chunk-5z6t3gwt.js";
import { VW } from "./chunk-rjdks4dd.js";
import { o, T, u, $e, me, A } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { z } from "./chunk-p197ae0z.js";
import { hostname as w } from "os";
import { dirname as x, join as D } from "path";
var v = 1,
  g = "device-mcp-snapshot",
  ZQr = 8,
  M = 128;
function e7r(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var O = p(() =>
  u({
    version: A(v),
    hostname: o(),
    servers: me(o(), $e([me(o(), o()), A("declined")])),
    withheld: me(o(), u({ added: T(o()), changed: T(o()) }))
  })
);
function b(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return et(
    ma({
      name: e.name,
      description: e.description,
      inputSchema: e.inputSchema,
      searchHint: r[rz.searchHint]
    })
  );
}
function j(e) {
  return Object.fromEntries(e.map((r) => [r.name, b(r)]));
}
function R(e, r) {
  if (r === "declined") return { added: [], changed: [] };
  let i = Object.keys(e).filter((s) => !Object.hasOwn(r, s)),
    n = Object.keys(e).filter((s) => Object.hasOwn(r, s) && r[s] !== e[s]);
  if (i.length === 0 && n.length === 0) return;
  return { added: m(i), changed: m(n) };
}
function m(e) {
  return e.slice(0, ZQr).map((r) => r.slice(0, M));
}
function t7r(e, r) {
  if (r === void 0) return e;
  return { servers: { ...r.servers, ...e.servers }, withheld: e.withheld };
}
function aas(e, r) {
  let i = new Map(),
    n = { ...r.servers },
    s = !1;
  for (let [a, y] of e) {
    let f = j(y),
      l = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (l === void 0) {
      ((n[a] = f), (s = !0));
      continue;
    }
    let S = R(f, l);
    if (S !== void 0) i.set(a, S);
  }
  let c = Object.fromEntries([...i].filter(([, a]) => e7r(a)));
  return { withheld: i, next: { servers: n, withheld: c }, changed: s || ma(c) !== ma(r.withheld) };
}
function _Cn(e, r, i) {
  let n = { ...e.servers };
  for (let s of r)
    if (i === "accepted") delete n[s];
    else n[s] = "declined";
  return { servers: n, withheld: {} };
}
async function rwe(e) {
  let r = { servers: {}, withheld: {} },
    i;
  try {
    i = await e.readText();
  } catch (n) {
    return (t(`device-mcp snapshot: store unreadable (${d(n)})`, { level: "warn" }), "unreadable");
  }
  if (i === void 0) return r;
  try {
    let n = O().safeParse(te(i));
    return n.success && VW(n.data.hostname) === VW(e.hostname())
      ? { servers: n.data.servers, withheld: n.data.withheld }
      : r;
  } catch {
    return r;
  }
}
async function nat(e, r) {
  try {
    return (
      await r.writeText(
        _(
          { version: v, hostname: VW(r.hostname()), servers: e.servers, withheld: e.withheld },
          null,
          2
        ) +
          `
`
      ),
      !0
    );
  } catch (i) {
    return (t(`device-mcp snapshot: not saved (${d(i)})`, { level: "warn" }), !1);
  }
}
function h() {
  return D(Le(), "state", `${g}.json`);
}
function las() {
  return `delete ${os(h())} to reset every server's baseline`;
}
function owe(e) {
  let r = z() && e !== void 0 ? e : void 0,
    i = We.state(g);
  return {
    readText: async () => {
      if (r) {
        let n = await r.readText([i]);
        if (!n.ok) throw Error("device-mcp snapshot read failed");
        let s = n.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await hn().read(h());
      } catch (n) {
        if (G(n)) return;
        throw n;
      }
    },
    writeText: async (n) => {
      if (r) {
        if (!(await r.write(i, n, { mode: 384 })).ok)
          throw Error("device-mcp snapshot write failed");
        return;
      }
      let s = h();
      (await hn().mkdir(x(s), 448), await hn().atomicWrite(s, n, 384));
    },
    hostname: w
  };
}
export { ZQr, e7r, t7r, aas, _Cn, rwe, nat, las, owe };

//# sourceMappingURL=chunk-y93jyzg9.js.map
