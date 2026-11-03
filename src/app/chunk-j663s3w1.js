// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { Pg, dx, PS, ab, Wa, r8 } from "./chunk-fnsjs1v2.js";
import { Gt, be, j } from "./chunk-bq35vvkw.js";
j();
async function ogr(e) {
  let s = !1,
    i = await dx(void 0, e, () => {
      s = !0;
    });
  return s ? null : i;
}
var h = 120000,
  c = 1800000,
  p = 1e4,
  m = 3;
function S(e) {
  return !sIn(e) && e.tempo === "blocked" && e.needs !== PS;
}
function sIn(e) {
  return Wa(e) && !(ab(e.state) === "success" && r8(e));
}
class p6e {
  #p;
  #g;
  #s = void 0;
  #m = De();
  #h = 0;
  #n = !1;
  #u = !0;
  #o = null;
  #e = null;
  #d = !1;
  #t = 0;
  #i = null;
  #l = 0;
  #S;
  constructor(e) {
    ((this.#p = e?.sweepMs ?? p), (this.#g = e?.ignoredAfterMs ?? c));
    let s = e?.storageV5;
    this.#S = () => ogr(s);
  }
  getSnapshot = () => this.#s;
  subscribe = (e) => {
    let s = this.#m.subscribe(e);
    if ((this.#h++, !this.#n))
      if (((this.#n = !0), this.#s === void 0)) this.#r();
      else this.#f();
    let i = !1;
    return () => {
      if (i) return;
      if (((i = !0), s(), this.#h--, this.#h === 0)) this.#N();
    };
  };
  refetch = () => this.#r();
  async quiesce() {
    while (this.#e) await this.#e;
  }
  setFocused(e) {
    if (e === this.#u) return;
    if (((this.#u = e), !this.#n)) return;
    if (e) ((this.#l = 0), this.#r());
    else this.#a();
  }
  recordOpenViaLeft() {
    if ((this.#c(), this.#t > 0 && Date.now() - this.#t <= h))
      (g("fleet_needs_input_nudge"), (this.#t = 0));
    return this.#s;
  }
  #r() {
    if ((this.#a(), this.#e)) return ((this.#d = !0), this.#e);
    return (
      (this.#e = this.#b().finally(() => {
        if (((this.#e = null), this.#d)) ((this.#d = !1), this.#r());
      })),
      this.#e
    );
  }
  async #b() {
    let e;
    try {
      e = await this.#S();
    } catch {
      e = [];
    }
    if (!this.#n) return;
    if (e !== null) this.#l = 0;
    else if (++this.#l <= m) {
      if (this.#l === 1)
        t("[fleet nudge] listing sessions failed for a reason that may pass; keeping the counts", {
          level: "warn"
        });
      if (this.#u) this.#f();
      return;
    }
    let s = e ?? [],
      i = 0,
      r = 0,
      u = 0,
      d = 0,
      l = Pg();
    for (let n of s) {
      if (n.id === l) continue;
      if (sIn(n.state)) {
        if ((r++, ab(n.state.state) === "success")) u++;
        continue;
      }
      if ((d++, S(n.state))) i++;
    }
    if (i === 0) (this.#c(), (this.#t = 0));
    let o = this.#s;
    if (o?.needsInput !== i || o?.done !== r || o?.succeeded !== u) {
      let n = o !== void 0 && i > o.needsInput;
      if (
        ((this.#s = { needsInput: i, done: r, succeeded: u }),
        a("tengu_fleet_nudge_state", {
          needs_input_count: i,
          done_count: r,
          succeeded_count: u,
          increased: n
        }),
        n)
      )
        ((this.#t = Date.now()), this.#_());
      this.#m.emit();
    }
    if (d > 0 && this.#u) this.#f();
  }
  #f() {
    (this.#a(), (this.#o = setTimeout(() => void this.#r(), this.#p)), this.#o.unref());
  }
  #_() {
    (this.#c(),
      (this.#i = setTimeout(() => {
        ((this.#i = null), f("fleet_needs_input_nudge", "ignored"), (this.#t = 0));
      }, this.#g)),
      this.#i.unref());
  }
  #a() {
    if (this.#o) (clearTimeout(this.#o), (this.#o = null));
  }
  #c() {
    if (this.#i) (clearTimeout(this.#i), (this.#i = null));
  }
  #N() {
    (this.#a(), (this.#d = !1), (this.#n = !1));
  }
}
function qEi(e, s) {
  return ((e.fleetNudgeStore ??= new p6e({ storageV5: s })), e.fleetNudgeStore);
}
var iIn = Gt(null);
function Xxt() {
  let e = be(iIn);
  if (!e)
    throw ReferenceError(
      "useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)"
    );
  return e;
}
export { ogr, sIn, p6e, qEi, iIn, Xxt };

//# sourceMappingURL=chunk-j663s3w1.js.map
