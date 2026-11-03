// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ra } from "./chunk-d5zj5299.js";
import { g } from "./chunk-brszmkb3.js";
import { Z } from "./chunk-p27rr8yn.js";
import { WAs } from "./chunk-pygvgsk3.js";
import { UMt } from "./chunk-njg1cdnf.js";
var i = "<!-- dataviz-callout -->",
  n = () => "",
  o;
function X_s(t) {
  n = t;
}
async function cJt() {
  let { SKILL_MD: t } = await import("./chunk-nhwqp72d.js");
  return (
    (o = WAs(
      Ra(t)
        .content.trimStart()
        .replace(i, () => n())
    )),
    o
  );
}
function J_s() {
  return o;
}
function p(t) {
  return {
    arm() {
      Z().templateLanes[t] = !0;
    },
    take() {
      let e = Z().templateLanes,
        a = e[t];
      return ((e[t] = !1), a);
    },
    giveBack() {
      Z().templateLanes[t] = !0;
    }
  };
}
var r = p("prototypeArmed");
function Q_s() {
  (r.arm(), g("prototype_started", {}));
}
function Z_s() {
  return r.take();
}
function zIt() {
  r.giveBack();
}
function s(t, e) {
  Z().templateLanes.boundSlugs.set(t, e);
}
function ebs(t) {
  return Z().templateLanes.boundSlugs.get(t);
}
function tbs(t, e) {
  (s(t, "prototype"), g("prototype_publish", { artifact_slug: UMt(t), is_first_publish: e }));
}
export { X_s, cJt, J_s, Q_s, Z_s, zIt, ebs, tbs };

//# sourceMappingURL=chunk-m9yrfnzh.js.map
