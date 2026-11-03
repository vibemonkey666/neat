// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, xv, Cdr } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { I } from "./chunk-a16y5hcz.js";
import { Vot } from "./chunk-928ws1pg.js";
import { w } from "./chunk-7m7t89vx.js";
import { Me } from "./chunk-rf7g1m78.js";
import { Ut, cI } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { $w, rq } from "./chunk-5rw2zfa0.js";
import { Un, Sa } from "./chunk-7c3thgax.js";
import { rt, s, n, Yt } from "./chunk-h56pfqh7.js";
import { Zr } from "./chunk-xkry565w.js";
import { Oa, xc, Wo, xs, Je } from "./chunk-fgf47p3n.js";
import { V } from "./chunk-j32s98r9.js";
import { Ee } from "./chunk-xzcese97.js";
import { fLt, dle, fi, fm } from "./chunk-j0tbz6ra.js";
import { ad, Rl, lo } from "./chunk-fnsjs1v2.js";
import { vF } from "./chunk-ska2p6n2.js";
import { we } from "./chunk-bf8qkzmg.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { de, C, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function E() {
  let t = w(1),
    u;
  if (t[0] === S)
    ((u = r(n, {
      children: [
        "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the",
        " ",
        e(Yt, { url: "https://code.claude.com/docs/en/mcp", children: "MCP documentation" }),
        "."
      ]
    })),
      (t[0] = u));
  else u = t[0];
  return u;
}
function kPn({ serverName: t, isPluginServer: u = !1, onDone: d }) {
  let { storageV5: o } = Me(),
    l = C(!1),
    f = Oa(Zr),
    { refusedWithin: m, noteRefused: b, epoch: v } = Wo(),
    h = xc(v, Zr);
  function R() {
    if (f() || m(Zr)) return (b(), !0);
    return !1;
  }
  async function k(p) {
    if (R()) return;
    if (l.current) return;
    switch (((l.current = !0), a("tengu_mcp_dialog_choice", { choice: c(p) }), p)) {
      case "yes":
      case "yes_all": {
        let g = !1;
        {
          let { error: y } = await Sa(
            "localSettings",
            (M) => {
              let P = M?.enabledMcpjsonServers || [];
              if (P.includes(t)) return null;
              return { enabledMcpjsonServers: [...P, t] };
            },
            void 0,
            o
          );
          g ||= y != null;
        }
        if (p === "yes_all") {
          let { error: y } = await Un(
            "localSettings",
            { enableAllProjectMcpServers: !0 },
            void 0,
            o
          );
          g ||= y != null;
        }
        (Cdr(cI(), [t]), d({ persistFailed: g }));
        break;
      }
      case "no": {
        let { error: g } = await Sa(
          "localSettings",
          (y) => {
            let M = y?.disabledMcpjsonServers || [];
            if (M.includes(t)) return null;
            return { disabledMcpjsonServers: [...M, t] };
          },
          void 0,
          o
        );
        d({ persistFailed: g != null });
        break;
      }
    }
  }
  return r(we, {
    title: `New MCP server found in this project: ${Vot(t, u)}`,
    color: "warning",
    onCancel: () => void k("no"),
    exitOnCtrlCD: !0,
    children: [
      e(E, {}),
      e(
        Je,
        {
          options: [
            { label: "Use this MCP server", value: "yes" },
            { label: "Use this and all future MCP servers in this project", value: "yes_all" },
            { label: "Continue without using this MCP server", value: "no" }
          ],
          onChange: (p) => void k(p),
          onCancel: () => void k("no"),
          hideIndexes: !0,
          refuseInput: R,
          defaultFocusValue: "no",
          selectedValue: xs
        },
        h.remountKey
      )
    ]
  });
}
j();
function TPn({ serverNames: t, pluginServerNames: u, onDone: d }) {
  let { storageV5: o } = Me(),
    l = C(!1),
    f = Oa(Zr),
    { refusedWithin: m, noteRefused: b } = Wo(),
    v = rt(),
    h = de(() => {
      if (f() || m(Zr)) return (b(), !0);
      return !1;
    }, [f, m, b]);
  async function R(p) {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let [g, y] = $w(t, (P) => p.includes(P));
    a("tengu_mcp_multidialog_choice", { approved: g.length, rejected: y.length });
    let M = !1;
    if (g.length > 0) {
      let { error: P } = await Sa(
        "localSettings",
        (A) => ({ enabledMcpjsonServers: L([...(A?.enabledMcpjsonServers || []), ...g]) }),
        void 0,
        o
      );
      M ||= P != null;
    }
    if ((Cdr(cI(), g), y.length > 0)) {
      let { error: P } = await Sa(
        "localSettings",
        (A) => ({ disabledMcpjsonServers: L([...(A?.disabledMcpjsonServers || []), ...y]) }),
        void 0,
        o
      );
      M ||= P != null;
    }
    d({ persistFailed: M });
  }
  let k = de(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let { error: p } = await Sa(
      "localSettings",
      (g) => ({ disabledMcpjsonServers: L([...(g?.disabledMcpjsonServers || []), ...t]) }),
      void 0,
      o
    );
    d({ persistFailed: p != null });
  }, [h, t, d, o]);
  return r(Q, {
    children: [
      r(we, {
        title: `${t.length} new MCP servers found in this project`,
        subtitle: "Select any you wish to enable.",
        color: "warning",
        onCancel: k,
        exitOnCtrlCD: !0,
        hideInputGuide: !0,
        children: [
          e(E, {}),
          e(vF, {
            options: t.map((p) => ({ label: Vot(p, u?.has(p) ?? !1), value: p })),
            defaultValue: v ? [] : t,
            submitButtonText: "Enable selected",
            onSubmit: R,
            onCancel: k,
            hideIndexes: !0,
            refuseInput: h,
            refuseSubmitFocus: h
          })
        ]
      }),
      e(s, {
        paddingX: 1,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          children: r(Ee, {
            children: [
              e(V, { chord: "space", action: "select" }),
              e(ft, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "reject all"
              })
            ]
          })
        })
      })
    ]
  });
}
async function APn(t) {
  if (xv()) return { pendingServers: [], pluginServerNames: new Set() };
  let { serverNames: u, pluginServerNames: d } = await Nto(t);
  return { pendingServers: u.filter((l) => dle(l) === "pending"), pluginServerNames: d };
}
async function Nto(t) {
  let { servers: u } = fm("project"),
    d = Object.keys(u),
    o = new Set(d),
    l = new Set(),
    { enabled: f } = await fi(t),
    m = f.filter(rq);
  for (let b of m) {
    let v = await fLt(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || l.has(h)) continue;
      (d.push(h), l.add(h));
    }
  }
  return { serverNames: d, pluginServerNames: l, rootServers: u };
}
async function kus({ pendingServers: t, pluginServerNames: u }, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await x(
    t.map((v) => Vot(v, u.has(v))),
    o
  );
  let f = (v) => {
      _(l, o)
        .catch(() => {})
        .then(() => d(v));
    },
    [m, ...b] = t;
  return m !== void 0 && b.length === 0
    ? e(kPn, { serverName: m, isPluginServer: u.has(m), onDone: f })
    : e(TPn, { serverNames: t, pluginServerNames: u, onDone: f });
}
async function x(t, u) {
  {
    if (!Ut()) return;
    let d = i.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await lo(d, u);
    if (!o) return;
    let l = t.length,
      f = I(l, "server"),
      m = I(l, "needs", "need");
    try {
      return (
        await ad(
          d,
          {
            ...o,
            state: "blocked",
            detail: `${l} new MCP ${f} ${m} approval`,
            tempo: "blocked",
            needs: `approve ${l} new project MCP ${f} (${t.join(", ")}) \u2014 attach to respond`,
            updatedAt: new Date().toISOString()
          },
          u
        ),
        { state: o.state, tempo: o.tempo, needs: o.needs, detail: o.detail }
      );
    } catch (b) {
      Rl(b);
    }
  }
  return;
}
async function _(t, u) {
  {
    if (!t || !Ut()) return;
    let d = i.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await lo(d, u);
    if (!o || o.state !== "blocked") return;
    try {
      await ad(d, { ...o, ...t, block: void 0, updatedAt: new Date().toISOString() }, u);
    } catch (l) {
      Rl(l);
    }
  }
}
export { kPn, TPn, APn, Nto, kus };

//# sourceMappingURL=chunk-gv4v91yx.js.map
