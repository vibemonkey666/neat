// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { d, E } from "./chunk-fs43t96t.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { fe } from "./chunk-xe386mry.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { Qp, dTe } from "./chunk-b9vagsrs.js";
import { WT, RY } from "./chunk-n2fmpv44.js";
import { Oc, ROo, xOo } from "./chunk-fnsjs1v2.js";
import { q3t } from "./chunk-hhkqrdqe.js";
import { f8n } from "./chunk-4sp6n814.js";
import { connect as v } from "net";
import { StringDecoder as O } from "string_decoder";
async function bh(g, m) {
  let s;
  try {
    s = v(RY());
  } catch (r) {
    return { ok: !1, code: "ENOCONN", error: WT(d(r)), errno: E(r) };
  }
  let p = m?.timeoutMs ?? 5000,
    o,
    l = new Promise((r) => {
      o = r;
    }),
    u = !1,
    i = !1,
    f = (r) => {
      if (u) return;
      ((u = !0), s.destroy(), o(r));
    };
  (s.setTimeout(p, () =>
    f({ ok: !1, code: "ETIMEOUT", error: "control socket timeout", connected: i })
  ),
    s.on("error", (r) =>
      f({ ok: !1, code: "ENOCONN", error: WT(d(r)), connected: i, errno: E(r) })
    ),
    s.once("connect", () => {
      ((i = !0),
        s.write(
          _(g) +
            `
`
        ));
    }));
  let e = new O("utf8"),
    n = "";
  return (
    s.on("data", (r) => {
      n += e.write(r);
      let y = n.indexOf(`
`);
      if (y < 0) return;
      let C = n.slice(0, y);
      try {
        f(te(C));
      } catch (k) {
        f({ ok: !1, code: "ENOCONN", error: WT(d(k)), connected: i });
      }
    }),
    s.once("close", () => {
      if (!u)
        f({
          ok: !1,
          code: "ENOCONN",
          error: "connection dropped mid-request \u2014 it may have restarted; retry",
          connected: i
        });
    }),
    l
  );
}
var N = 4,
  S = new Set(["shutdown_op", "upgrade", "yield", "displaced"]);
function V3t(g) {
  return w({ label: g, cwd: fe(), pid: process.pid });
}
function w(g, m) {
  let s = !1,
    p = null,
    o = null,
    l = !0,
    u = N,
    i = async (e) => {
      if (e || !m || !l || u === 0) {
        ((o = setTimeout(f, 1000)), o.unref());
        return;
      }
      let n = !1;
      try {
        n = (await m.ensureDaemon()) === "started";
      } catch (r) {
        t(`daemon lease: ensureDaemon failed: ${WT(d(r))}`, { level: "error" });
      }
      if (((l = n), (u -= n ? 1 : 0), u === 0))
        (a("tengu_bg_cloud_lease", { transition: b("starts_used_up") }),
          t(`daemon lease: started a daemon ${N} times; from here it only reconnects`, {
            level: "warn"
          }));
      f();
    },
    f = () => {
      if (s) return;
      let e;
      try {
        e = v(RY());
      } catch {
        ((p = null), i(!1));
        return;
      }
      p = e;
      let n = !1;
      if (
        (e.on("error", () => e.destroy()),
        e.once("connect", () => {
          let r = process.getuid?.();
          if (m && r !== void 0 && f8n(e) !== r) {
            if (l)
              ((l = !1),
                a("tengu_bg_cloud_lease", { transition: b("server_not_this_user") }),
                t(
                  "daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there",
                  { level: "warn" }
                ));
            e.destroy();
            return;
          }
          e.write(
            _({ proto: Oc, op: "lease", client: g }) +
              `
`
          );
        }),
        m)
      )
        q3t(e, (r) => {
          if (s) return;
          let y = ot(r, !1),
            C = xOo().safeParse(y).data?.closing;
          if (C !== void 0) {
            if (S.has(C)) l = !1;
            (a("tengu_bg_cloud_lease", { transition: b("daemon_closing"), cause: c(C) }),
              m.onClosing(C));
          } else if (!n && ROo().safeParse(y).success) ((n = !0), (l = !0), m.onAcknowledged());
        });
      else e.on("data", () => {});
      (e.once("close", () => {
        if (((p = null), s)) return;
        i(n);
      }),
        e.unref());
    };
  return (
    f(),
    () => {
      if (((s = !0), o)) clearTimeout(o);
      p?.destroy();
    }
  );
}
function Uto(g, m, s, p) {
  let o;
  try {
    o = v(RY());
  } catch (e) {
    return (queueMicrotask(() => p(WT(d(e)))), () => {});
  }
  let l = !1,
    u = !1,
    i = (e) => {
      if (l) return;
      ((l = !0), p(e));
    };
  (o.setTimeout(1e4, () => {
    if (!u) (i(`${Qp()} did not respond \u2014 it may be stalled${dTe("restart")}`), o.destroy());
  }),
    o.on("error", (e) => i(WT(d(e)))),
    o.on("close", () => i("control socket closed")),
    o.on("connect", () =>
      o.write(
        _({ proto: Oc, op: "subscribe", short: g, tail: m }) +
          `
`
      )
    ));
  let f = q3t(o, (e) => {
    if (!u) ((u = !0), o.setTimeout(0));
    try {
      let n = te(e);
      if ("ok" in n && n.ok === !1) i(n.error);
      else s(n);
    } catch {}
  });
  return () => {
    ((l = !0), f(), o.destroy());
  };
}
export { bh, V3t, Uto };

//# sourceMappingURL=chunk-ay7ngexr.js.map
