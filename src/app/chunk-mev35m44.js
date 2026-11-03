// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { q } from "./chunk-wrtp8qz8.js";
import { a5t } from "./chunk-fs43t96t.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { Epi, bt, HM, _, ie, Ms, t } from "./chunk-4kxznmzw.js";
import { Jlr, YAt, Ses, tit, wes } from "./chunk-ewvf3tep.js";
import { sGe } from "./chunk-r2wpxemj.js";
import { NJs } from "./chunk-crvt0hax.js";
import { Wh } from "./chunk-nqsvrwdr.js";
import { dirname as p, join as g } from "path";
var a = Qr(() => Ses(new Date()));
function l() {
  return g(YAt.errors(), a() + ".jsonl");
}
function f(e) {
  return g(YAt.mcpLogs(e), a() + ".jsonl");
}
function d(e) {
  let r = Epi(e);
  return {
    write(o) {
      r.write(
        _(o) +
          `
`
      );
    },
    flush: r.flush,
    dispose: r.dispose
  };
}
function u() {}
class c {
  writers = new Map();
  pendingWrites = Wh();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let o = p(e),
        i = !1;
      ((r = d({
        writeFn: (s) => {
          this.pendingWrites.run(e, async () => {
            try {
              await m(o, e, s);
            } catch (n) {
              if (!i)
                ((i = !0),
                  t(`Dropping log batch for ${e}: ${n instanceof Error ? n.message : String(n)}`));
            }
          });
        },
        flushIntervalMs: 1000,
        maxBufferSize: 50
      })),
        this.writers.set(e, r),
        bt(async () => {
          (r?.dispose(), await this.pendingWrites.settle());
        }),
        HM(this.flushBeforeExit));
    }
    return r;
  }
  async flush() {
    for (let e of this.writers.values()) e.flush();
    await this.pendingWrites.settle();
  }
  flushBeforeExit = () => this.flush();
  async reset() {
    for (let e of this.writers.values()) e.dispose();
    (await this.pendingWrites.settle(), this.writers.clear(), this.pendingWrites.clearForTest());
  }
}
async function m(e, r, o) {
  let i = ie();
  try {
    await i.appendFile(r, o);
  } catch {
    (await i.mkdir(e).catch(u), await i.appendFile(r, o));
  }
}
function w(e, r, o) {
  return;
}
function E(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (
      typeof r.error === "object" &&
      r.error &&
      "message" in r.error &&
      typeof r.error.message === "string"
    )
      return r.error.message;
  }
  return;
}
function v(e, r) {
  (NJs(r), sGe(r));
  let o = a5t(r),
    i = "";
  if (Ht.isAxiosError(r) && r.config?.url) {
    let s = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) s.push(`status=${r.response.status}`);
    let n = E(r.response?.data);
    if (n) s.push(`body=${n}`);
    i = `[${s.join(",")}] `;
  }
  (t(`${r.name}: ${i}${o}`, { level: "error" }), w(e, l(), { error: `${i}${o}` }));
}
function h(e, r, o) {
  t(`MCP server "${r}" ${o}`, { level: "error" });
  let i = f(r),
    s = o instanceof Error ? a5t(o) : String(o),
    n = { error: Ms(s), timestamp: new Date().toISOString(), sessionId: q(), cwd: Jlr() };
  e.writerFor(i).write(n);
}
function S(e, r, o) {
  t(`MCP server "${r}": ${o}`);
  let i = f(r),
    s = { debug: Ms(o), timestamp: new Date().toISOString(), sessionId: q(), cwd: Jlr() };
  e.writerFor(i).write(s);
}
function dio() {
  wes(y(new c()));
  let e = tit.droppedBeforeSink;
  t(
    e === 0
      ? "Error log sink initialized"
      : `Error log sink initialized; ${e} events logged before it attached were dropped`
  );
}
function y(e) {
  return {
    logError: (r) => v(e, r),
    logMCPError: (r, o) => h(e, r, o),
    logMCPDebug: (r, o) => S(e, r, o)
  };
}
export { dio };

//# sourceMappingURL=chunk-mev35m44.js.map
