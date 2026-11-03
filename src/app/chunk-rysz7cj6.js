// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qw } from "./chunk-6bbdndfe.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { F, L, hS, pTn, mTn, Ors } from "./chunk-wrtp8qz8.js";
import { Ka } from "./chunk-acd8w9vv.js";
import { te, hh, qes, t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Vqe, TH, Ywn, Xwn, i6r, rot } from "./chunk-5rw2zfa0.js";
import { Jfe, i } from "./chunk-cj37hmns.js";
import { uQe } from "./chunk-8w56k4pg.js";
import { F_n, JU, OKt, Tbn, f5o, eqe } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { Ob } from "./chunk-t0wrcf3t.js";
import { hd } from "./chunk-zem4yd4w.js";
import { er } from "./chunk-1e5yp9hx.js";
import { rqt, fli } from "./chunk-va73d26h.js";
import { zRe, MNe } from "./chunk-7c3thgax.js";
import { J0 } from "./chunk-c57c64b0.js";
import { lEn, qS, HZ } from "./chunk-7zgz07kc.js";
import { yEn } from "./chunk-v19xty83.js";
import { A0 } from "./chunk-tv3shk24.js";
import { g8o } from "./chunk-38g9s4wc.js";
import { o9, FGt, j7n, Cwt, _Ke, Lzo, tm, jzo, lzr, G7n } from "./chunk-h2tyaevk.js";
import { Dr, B7n } from "./chunk-kc27mwew.js";
import { Shs } from "./chunk-qk3nwdye.js";
import { createServer as h } from "net";
function BAn(e, r, m) {
  return new Promise((f, p) => {
    let E = (o) => {
        (n.close(), p(o));
      },
      n = h((o) => {
        let c = "";
        (o.setEncoding("utf8"),
          o.on("data", (d) => {
            if (((c += d), m && c.length > 8388608)) {
              o.destroy();
              return;
            }
            let _ = c.indexOf(`
`);
            if (_ < 0) return;
            if (m) {
              let s;
              try {
                s = te(c.slice(0, _));
              } catch {
                s = void 0;
              }
              if (!s || !A0(s.auth, m)) {
                o.destroy();
                return;
              }
              (n.close(), f(s));
              return;
            }
            n.close();
            try {
              f(te(c.slice(0, _)));
            } catch (s) {
              p(s);
            }
          }),
          o.on("error", m ? () => o.destroy() : E));
      });
    if ((n.on("error", E), r))
      n.once("listening", () => {
        try {
          r();
        } catch (o) {
          E(o);
        }
      });
    n.listen(e);
  });
}
async function jAn(e, r, m) {
  let f = performance.now(),
    p = await Ob(e.cwd, void 0);
  hh(p);
  let E = { originalCwd: p, projectRoot: p, cwd: p };
  if (e.sessionId) hS(qw(e.sessionId), "spare_claim", null, E);
  else pTn(E);
  (er(), eqe(), Tbn(), mTn(), B7n(), J0({ warm_spare_claimed: 1 }));
  let n = Ne(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
  if (n) {
    for (let l of Object.keys(process.env))
      if ((Ywn(l) || l === "ANTHROPIC_CUSTOM_HEADERS" || Xwn(l) || rot(l)) && !i6r(l))
        delete process.env[l];
  }
  if (_Ke(e.env)) Lzo();
  (delete process.env.ANTHROPIC_AUTH_TOKEN,
    delete process.env.ANTHROPIC_API_KEY,
    delete process.env.CLAUDE_CODE_OAUTH_TOKEN,
    i.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS"));
  let { kept: o, dropped: c } = j7n(e.env),
    d = n && G7n(lzr(tm() ?? {}, Object.keys(o), o), i6r);
  if ((Object.assign(process.env, o), g8o(), fli(), rqt())) {
    let { mdm: l, hkcu: v, wslInherits: g, whereAsked: u } = await MNe();
    zRe(l, v, g, u);
  }
  if (((process.argv = [process.argv[0], process.argv[1], ...e.argv]), er(), qes(), c.length > 0))
    S(c);
  (m?.(), f5o(), hd.reset());
  let _ = performance.now();
  if (
    (await Shs(e.argv),
    Dr("spare_claim_token_file_wait_ms", performance.now() - _, _),
    Ors(),
    F_n(),
    yEn(),
    o9(),
    OKt({ preservePendingExposures: !0, preserveLoggedExposures: !0 }),
    JU(),
    jzo(Object.keys(o), o) || d)
  )
    lEn();
  (HZ(), qS());
  let { main: s } = await r;
  (Dr("spare_claim_apply_ms", performance.now() - f, f), await s());
}
var C = 8;
function S(e) {
  if (
    (e.slice(0, C).forEach(({ name: r, problem: m }) => {
      t(
        `[bg-spare] environment variable ${Cwt(r)} was not applied to this background session: ${FGt[m]}. Programs it starts will not see it.`,
        { level: "warn" }
      );
    }),
    e.length > C)
  ) {
    let r = e.length - C;
    t(
      `[bg-spare] \u2026and ${r} more environment ${I(r, "variable was", "variables were")} not applied.`,
      { level: "warn" }
    );
  }
  a("tengu_bg_claim_env_dropped", {
    dropped: e.length,
    nul_in_value: F(e, (r) => r.problem === "nul-in-value"),
    invalid_name: F(e, (r) => r.problem === "invalid-name"),
    non_string_value: F(e, (r) => r.problem === "non-string-value"),
    name_classes: Ka(L(e.map((r) => w(r.name))))
  });
}
function w(e) {
  return e === "PATH"
    ? "path"
    : e.startsWith("CLAUDE_BG_") ||
        e === "CLAUDE_JOB_DIR" ||
        e === "CLAUDE_CODE_SESSION_KIND" ||
        e === "CLAUDE_CODE_SESSION_NAME"
      ? "bg_worker"
      : TH.includes(e)
        ? "credential"
        : Vqe.includes(e)
          ? "gateway"
          : uQe.has(e)
            ? "provider"
            : Jfe(i).includes(e)
              ? "declared"
              : "other";
}
export { BAn, jAn };

//# sourceMappingURL=chunk-rysz7cj6.js.map
