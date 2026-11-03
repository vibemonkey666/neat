// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { ke } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import { d, E, G } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import { Rc, lcr } from "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { Yl } from "./chunk-ak0cmk10.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import { hr } from "./chunk-dc0nzty2.js";
import "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-xe386mry.js";
import "./chunk-arw2bgak.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import "./chunk-azq9hjy0.js";
import "./chunk-vw9e882a.js";
import "./chunk-rhk37je5.js";
import "./chunk-jtb5bzvb.js";
import { im } from "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-13nwb0xt.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-ajtyjx88.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-qmkm2x59.js";
import "./chunk-4nzy53ma.js";
import "./chunk-qakn3b85.js";
import "./chunk-zf79f62g.js";
import "./chunk-c3npf81n.js";
import "./chunk-zem4yd4w.js";
import "./chunk-exz0w70z.js";
import "./chunk-gg53p5cf.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-6xjawpfq.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c57c64b0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-95k4nfdh.js";
import "./chunk-at88wjsn.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-7zgz07kc.js";
import "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-v19xty83.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-rj6gws00.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-7svjr0za.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import "./chunk-fa522kgz.js";
import "./chunk-g49hnbqz.js";
import { Xbs, Jbs, Wdo, Wbr } from "./chunk-dmhfm1tj.js";
import { eat } from "./chunk-75fts3nr.js";
import { PA } from "./chunk-h906jfjz.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import "./chunk-6jbh8yja.js";
import { lstat as j, readdir as P, realpath as C } from "fs/promises";
import { dirname as K, join as _, resolve as B } from "path";
var T = 4000,
  R = 16,
  b = { kind: "elsewhere" },
  g = { kind: "nowhere" },
  y = { kind: "nowhere", hasOwnSessionRecord: !0 };
async function v(n, r) {
  return j(n).then(
    (o) => ((r === "file" ? o.isFile() : o.isDirectory()) ? !0 : void 0),
    (o) => {
      let s = E(o);
      return s === "ENOENT" || s === "ENOTDIR" ? !1 : void 0;
    }
  );
}
function N(n) {
  return v(n, "file");
}
async function O(n) {
  let r = await v(K(n), "dir");
  return r === !0 ? N(n) : r;
}
async function ee(n, r, o = T) {
  if (!eat()) return { kind: "unknown", why: "not_looked" };
  let s = Yl(n),
    c = ke(),
    l = hr(c) ?? B(c);
  if (Rc(l) || lcr() || Rc(await C(l).catch(() => l)))
    return { kind: "unknown", why: "path_misread" };
  if (z() && r !== void 0) return M(r, l, s, o);
  let h = await Xbs(l, s, r),
    u = im(),
    k = Wbr(s);
  try {
    let e = await O(h);
    if (e !== !1) return e ? y : { kind: "unknown", why: "here_unreadable" };
    let i = await P(u, { withFileTypes: !0 }),
      f = await Promise.all(i.map((a) => PA(a, _(u, a.name), "unknown"))),
      p = i.filter((a, m) => f[m] === "dir"),
      w = p.slice(0, o),
      S = f.some((a) => a === "symlink" || a === "unknown");
    for (let a = 0; a < w.length; a += R) {
      let m = await Promise.all(w.slice(a, a + R).map((F) => N(_(u, F.name, k))));
      if (m.includes(!0)) return b;
      S ||= m.includes(void 0);
    }
    return S
      ? { kind: "unknown", why: "probe_failed" }
      : p.length > w.length
        ? { kind: "unknown", why: "listing_capped" }
        : g;
  } catch (e) {
    if (G(e)) return g;
    return (
      t(
        `[sessionRecord] could not tell whether another project folder holds this session's record: ${d(e)}`,
        { level: "warn" }
      ),
      { kind: "unknown", why: "listing_failed" }
    );
  }
}
async function M(n, r, o, s) {
  try {
    return await D(n, r, o, s);
  } catch (c) {
    return (
      t(
        `[sessionRecord] could not tell whether another project folder holds this session's record: ${d(c)}`,
        { level: "warn" }
      ),
      { kind: "unknown", why: "listing_failed" }
    );
  }
}
async function D(n, r, o, s) {
  let c = await Jbs(r, o, n);
  if (c.v5 === void 0) {
    let e = await O(c.path);
    if (e !== !1) return e ? y : { kind: "unknown", why: "here_unreadable" };
  } else {
    let e = await n.scopeKind({ namespace: "transcript", projectKey: c.projectKey });
    if (!e.ok || e.value.kind === "link" || e.value.kind === "other")
      return { kind: "unknown", why: "here_unreadable" };
    if (e.value.kind === "directory") {
      let i = await n.statMeta(c.v5.key);
      if (i.ok) return y;
      if (i.error.code !== "NotFound") return { kind: "unknown", why: "here_unreadable" };
    }
  }
  let l = [],
    h;
  do {
    let e = await n.listEntries(
      { namespace: "transcript" },
      { cursor: h, skipScopeStats: !0, skipKeyStats: !0 }
    );
    if (!e.ok)
      return (
        t(
          `[sessionRecord] could not tell whether another project folder holds this session's record: ${vt(e.error)}`,
          { level: "warn" }
        ),
        { kind: "unknown", why: "listing_failed" }
      );
    for (let i of e.value.items)
      if (i.kind === "scope" && i.scope.namespace === "transcript") {
        let f = i.scope.projectKey;
        if (f !== void 0) l.push(f);
      }
    h = e.value.cursor;
  } while (h !== void 0 && l.length < s);
  let u = l.slice(0, s),
    k = !1;
  for (let e = 0; e < u.length; e += R) {
    let i = await Promise.all(
      u.slice(e, e + R).map(async (f) => {
        let p = Wdo(f, o);
        if (p === void 0) return;
        let w = await n.statMeta(p);
        return w.ok ? !0 : w.error.code === "NotFound" ? !1 : void 0;
      })
    );
    if (i.includes(!0)) return b;
    k ||= i.includes(void 0);
  }
  return k
    ? { kind: "unknown", why: "probe_failed" }
    : h !== void 0 || l.length > u.length
      ? { kind: "unknown", why: "listing_capped" }
      : g;
}
export { ee as findSessionRecordElsewhere };

//# sourceMappingURL=chunk-st5cr80h.js.map
