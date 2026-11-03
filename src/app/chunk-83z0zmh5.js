// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { G } from "./chunk-fs43t96t.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { _, te, SC, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { p } from "./chunk-qmkm2x59.js";
import { bl } from "./chunk-jwqtbev0.js";
import { fu } from "./chunk-6h7ejyet.js";
import { Os, PM } from "./chunk-qywdxehb.js";
import { Rl } from "./chunk-fnsjs1v2.js";
import { o, v, T, u, B } from "./chunk-0bqrj5ah.js";
import { rm as P } from "fs/promises";
import { join as y } from "path";
var w = ".prompt-stash",
  x = 262144,
  O = 256,
  z = p(() =>
    u({
      text: o(),
      cursorOffset: v().int().nonnegative(),
      pasteIds: T(v().int().nonnegative()).max(O),
      launchWarning: u({
        type: B(["deep-link", "prefill"]),
        prefillLength: v().int().nonnegative()
      }).optional()
    })
  );
function D(e) {
  return _({
    text: e.text,
    cursorOffset: e.cursorOffset,
    pasteIds: Object.values(e.pastedContents)
      .filter((r) => !r.inline)
      .slice(0, O)
      .map((r) => r.id),
    launchWarning: e.launchWarning
  });
}
function Bio(e) {
  let r = [],
    s = "";
  for (let a of e
    .replace(
      /\r\n|\r/g,
      `
`
    )
    .replaceAll("\t", "    ")
    .split(/\u200C+/)) {
    let n = SC(a, "", { keepNewlines: !0 });
    if (n === "") continue;
    if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) r.push("\u200C");
    (r.push(n), (s = n));
  }
  return r.join("");
}
async function OUe(e, r) {
  await P(e, { force: !0 });
  let s = await PM(e, r, 384);
  try {
    await Os(s, e);
  } catch (a) {
    throw (await P(s, { force: !0 }).catch(() => {}), a);
  }
}
function E(e) {
  let r;
  try {
    r = te(e);
  } catch {
    return null;
  }
  let s = z().safeParse(r);
  if (!s.success) return null;
  let { cursorOffset: a, pasteIds: n, launchWarning: h } = s.data,
    d = Bio(s.data.text),
    j = new Set(n),
    l = "",
    S = 0;
  for (let c of fu(d))
    if (j.has(c.id)) ((l += d.slice(S, c.index)), (S = c.index + c.match.length));
  if (((l += d.slice(S)), l.trim() === "")) return null;
  return {
    text: l,
    mode: "prompt",
    cursorOffset: re(l, Math.min(a, l.length)).length,
    pastedContents: {},
    launchWarning: h
  };
}
async function I(e, r) {
  let s = y(e, w),
    a = r === null ? "" : D(r);
  if (Buffer.byteLength(a) > x)
    (t("[bg] prompt stash too large to persist; kept in memory only", { level: "warn" }), (a = ""));
  try {
    let n = await P(s, { force: !0 }).then(
      () => !0,
      (h) => (Rl(h), !1)
    );
    if (a === "" && n) return;
    await OUe(s, a);
  } catch (n) {
    if (!G(n)) Rl(n);
  }
}
async function k(e) {
  let r = await bl(y(e, w), x);
  if (!r) return null;
  let s = E(r);
  if (s === null)
    (t("[bg] persisted prompt stash unreadable or empty", { level: "warn" }),
      m("bg_prompt_stash_restore", "unreadable_or_empty"));
  return s;
}
class jio {
  #t;
  #e;
  #r = Promise.resolve();
  #s = !1;
  #o;
  constructor(e) {
    ((this.#t = e), (this.#e = b(e.getState().stash)), (this.#o = e.subscribe(this.#n)));
  }
  #n = () => {
    let e = b(this.#t.getState().stash);
    if (e === this.#e) return;
    this.#e = e;
    let r = i.CLAUDE_JOB_DIR;
    if (!r) return;
    this.#r = this.#r.then(() => I(r, e));
  };
  async restore() {
    let e = i.CLAUDE_JOB_DIR;
    if (this.#s || !e) return !1;
    this.#s = !0;
    let r = await k(e);
    if (r === null) return !1;
    if (this.#t.getState().stash !== null) return (f("bg_prompt_stash_restore", "slot_taken"), !1);
    return (
      (this.#e = r),
      this.#t.setState((s) => ({ ...s, stash: r })),
      g("bg_prompt_stash_restore"),
      !0
    );
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#o();
  }
}
function b(e) {
  return e?.cameBack === !0 ? null : e;
}
export { Bio, OUe, jio };

//# sourceMappingURL=chunk-83z0zmh5.js.map
