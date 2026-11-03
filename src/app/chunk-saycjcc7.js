// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { Qe, N } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ki } from "./chunk-ajtyjx88.js";
import { h$n } from "./chunk-z8rpbpwv.js";
var n = [
  { kind: "ios_app", found: (t) => t.has_ios_app_project },
  { kind: "android_app", found: (t) => t.has_android_app_project }
];
class i {
  #t = 0;
  #o = 0;
  #e = new Map();
  get started() {
    return this.#t > 0;
  }
  start() {
    (this.#t++, this.#r(!1));
  }
  conversationReset() {
    if (this.started) (this.#t++, this.#r(!1));
  }
  directoryChanged() {
    if (!this.started) {
      this.start();
      return;
    }
    this.#r(!1);
  }
  turnStarting() {
    let t = this.#t;
    if (!this.started || this.#o === t) return;
    if (((this.#o = t), n.some(({ kind: e }) => this.#e.get(e) !== t))) this.#r(!0);
  }
  #r(t) {
    let e = this.#t;
    h$n({ fresh: t }).then((r) => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e)
        f("dev_intent_detect", "project_unreadable", {
          kind: b("ios_app"),
          trigger: b("project_scan")
        });
      for (let { kind: o, found: s } of n)
        if (s(r) === !0 && this.#e.get(o) !== e) (this.#e.set(o, e), this.#n(o));
    });
  }
  #n(t) {
    try {
      (Ki({ type: "system", subtype: "dev_intent", kind: t, trigger: "project_scan" }),
        g("dev_intent_detect", { kind: c(t), trigger: b("project_scan") }));
    } catch (e) {
      (l(Qe(N(e), "project dev intent send failed")),
        m("dev_intent_detect", "project_send_threw", { kind: c(t), trigger: b("project_scan") }));
    }
  }
}
var vut = new W(() => new i());
export { vut };

//# sourceMappingURL=chunk-saycjcc7.js.map
