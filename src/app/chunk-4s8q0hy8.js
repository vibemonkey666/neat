// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-2qx8pe6s.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import { ac } from "./chunk-refybwsn.js";
var y = 2;
function D(i) {
  let e = null,
    l = null,
    a = 0,
    r = !1,
    s = null,
    d = 0,
    p = [],
    m = () => {
      (l?.clear(), (l = null));
    },
    v = () => {
      if ((m(), e === null)) return;
      let n = e;
      l = i.setTimer(
        () => {
          if (((l = null), e !== n)) return;
          if (i.now() < n.leaseExpiresAt) {
            v();
            return;
          }
          let o = { ...n, entries: [] };
          e = o.templates.length === 0 ? null : o;
          for (let u of [...(i.onLeaseExpired ? [i.onLeaseExpired] : []), ...p])
            try {
              u(o);
            } catch (c) {
              t(`[deviceHooks] lease-expiry listener threw: ${N(c).stack ?? String(c)}`, {
                level: "error"
              });
            }
        },
        Math.min(ac, Math.max(0, n.leaseExpiresAt - i.now()))
      );
    };
  return {
    current: () => e,
    generation: () => d,
    recordMiss(n, o) {
      if (e === null || e.instanceId !== n || o !== d) return !1;
      if (((a += 1), !r && a >= y)) ((r = !0), (s = i.now()));
      return r;
    },
    recordHit(n) {
      if (e !== null && e.instanceId === n) a = 0;
    },
    isAway: (n) => e !== null && e.instanceId === n && r,
    awaySince: (n) => (e !== null && e.instanceId === n && r ? s : null),
    replaceOwner(n) {
      let o = e !== null && e.instanceId !== n.instanceId ? e.instanceId : void 0,
        u = e !== null && o === void 0,
        c = u && r ? s : null;
      if (((e = n), !u || c !== null)) ((a = 0), (r = !1), (s = null));
      return (
        (d += 1),
        v(),
        { ...(o !== void 0 && { replaced: o }), ...(c !== null && { awaySince: c }) }
      );
    },
    removeOwner(n) {
      if (e === null || e.instanceId !== n) return !1;
      return ((e = null), (a = 0), (r = !1), (s = null), m(), !0);
    },
    clear() {
      ((e = null), (a = 0), (r = !1), (s = null), m());
    },
    onLeaseExpired(n) {
      p.push(n);
    }
  };
}
function H(i, e) {
  let l = setTimeout(i, e);
  return (l.unref(), { clear: () => clearTimeout(l) });
}
export { D as createDeviceHookRegistry, H as productionRegistryTimer };

//# sourceMappingURL=chunk-4s8q0hy8.js.map
