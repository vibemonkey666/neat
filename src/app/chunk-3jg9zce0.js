// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-1bh1hcpt.js";
import { cen } from "./chunk-dnprf49a.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { U, Eu } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { bt, te, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { An } from "./chunk-at88wjsn.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import { k } from "./chunk-ajtyjx88.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-xe386mry.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import "./chunk-azq9hjy0.js";
import "./chunk-vw9e882a.js";
import "./chunk-rhk37je5.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-13nwb0xt.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-8r2m7vfp.js";
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
import { zi } from "./chunk-ynkasage.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import { o, v, kM, sm, T, u, A } from "./chunk-0bqrj5ah.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var I = 50,
  z = 1500,
  x = 5000,
  P = new Set(["chrome://newtab/", "about:blank"]),
  w = p(() =>
    u({
      error: kM().or(sm()).or(A(!1)).or(A("")).optional(),
      result: u({ isError: A(!0).optional() })
    })
  );
function M(e) {
  let s = w().safeParse(e);
  return s.success && s.data.result.isError !== !0;
}
var F = p(() => u({ availableTabs: T(u({ tabId: v(), url: o() })) }));
function y({ sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: b = x }) {
  if (i.CLAUDE_CODE_REMOTE_SESSION_ID || !k("tengu_chrome_tab_group_close", !0))
    return Promise.resolve({ status: "disabled" });
  let n = zi().closesInFlight,
    d = n.get(e);
  if (d && (s || !d.onlyIfEmpty)) return d.promise;
  let r = (d?.promise ?? Promise.resolve())
    .then(() => R({ sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: b }))
    .finally(() => {
      if (n.get(e)?.promise === r) n.delete(e);
    });
  return (n.set(e, { onlyIfEmpty: s, promise: r }), r);
}
async function R({ sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: b }) {
  let n = c ?? zi().bridgeBinding?.socketClient;
  if (!n || !n.isConnected())
    return (
      t("[closeSessionTabGroup] bridge not connected, skipping"),
      { status: "not_connected" }
    );
  let d = { permissionMode: "ask", sessionScope: { sessionId: e } },
    r,
    _;
  try {
    let a = await Nt(
        n.callTool("tabs_context_mcp", { createIfEmpty: !1 }, d),
        b,
        "tabs_context_mcp timed out"
      ),
      { tabGroupId: h, json: C } = cen(a);
    if (h === void 0 || C === void 0)
      return (t("[closeSessionTabGroup] no group for session"), { status: "no_group" });
    _ = h;
    let O = F().safeParse(te(C));
    if (!O.success)
      return (
        t(`[closeSessionTabGroup] group ${_}: unreadable tab list, keeping it`),
        f("chrome_tab_group_close", "tabs_unreadable"),
        { status: "kept", tabs: 0 }
      );
    r = O.data.availableTabs;
  } catch (a) {
    return (
      t(`[closeSessionTabGroup] tabs_context_mcp failed: ${String(a)}`),
      m("chrome_tab_group_close", "context_failed"),
      { status: "no_group" }
    );
  }
  if (s && r.some((a) => !P.has(a.url)))
    return (
      t(`[closeSessionTabGroup] group ${_} has content, keeping ${r.length} tabs`),
      { status: "kept", tabs: r.length }
    );
  if (r.length > I)
    return (
      t(`[closeSessionTabGroup] group ${_} holds ${r.length} tabs, over the close cap; keeping it`),
      f("chrome_tab_group_close", "over_cap"),
      { status: "kept", tabs: r.length }
    );
  let G = { permissionMode: "ask", sessionScope: { sessionId: e, tabGroupId: _ } },
    E = 0,
    S = 0;
  for (let a = r.length - 1; a >= 0; a--) {
    let { tabId: h } = r[a];
    try {
      let C = await Nt(
        n.callTool("tabs_close_mcp", { tabId: h }, G),
        b,
        "tabs_close_mcp timed out"
      );
      if (!M(C)) {
        S++;
        break;
      }
      E++;
    } catch {
      S++;
      break;
    }
  }
  if (
    (t(
      `[closeSessionTabGroup] group ${_}: closed ${E}/${r.length} tabs` +
        (S > 0 ? ", stopped at a failed close" : "")
    ),
    S > 0)
  )
    f("chrome_tab_group_close", "close_failed");
  else g("chrome_tab_group_close");
  return { status: "closed", closed: E, failed: S };
}
function Z() {
  let e = zi();
  if (e.tabGroupCleanupRegistered) return;
  e.tabGroupCleanupRegistered = !0;
  let s = U().id;
  ((e.unsubscribeSessionSwitch = Eu((c, b) => {
    if (c === s) return;
    let n = s;
    ((s = c), y({ sessionId: n, onlyIfEmpty: !0 }).catch(l));
  })),
    (e.unregisterExitCleanup = bt(() => {
      if (!An()) return;
      let c = Array.from(e.closesInFlight.values(), (b) => b.promise);
      return Nt(
        Promise.allSettled([...c, y({ sessionId: U().id, onlyIfEmpty: !0 })]),
        z,
        "chrome tab group close timed out at exit"
      ).catch(() => {});
    })));
}
export { y as closeSessionTabGroup, Z as registerChromeTabGroupCleanup };

//# sourceMappingURL=chunk-3jg9zce0.js.map
