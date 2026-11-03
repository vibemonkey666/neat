// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Xr, $x, ue } from "./chunk-ajtyjx88.js";
import { p } from "./chunk-qmkm2x59.js";
import { Zcs, eus } from "./chunk-xp7js3cq.js";
import { JI } from "./chunk-py4pxrg9.js";
import { ge, bn, Go, lr, Tt } from "./chunk-522pfw8k.js";
var m = p(() =>
    lr(
      Tt({
        id: ge(),
        title: ge().optional(),
        text: ge(),
        textIfUnusedLimitReset: ge()
          .optional()
          .catch(void 0),
        footer: ge().optional(),
        priority: bn().default(0),
        maxImpressions: bn().default(3),
        accentBar: Go().default(!0),
        requiresModel: ge().optional()
      })
    ).default([])
  ),
  o = [];
function i() {
  let e = $x("tengu_startup_announcements", o),
    t = m().safeParse(e);
  return t.success ? t.data : o;
}
function s(e) {
  return e.requiresModel === void 0 || Xr(e.requiresModel);
}
function u() {
  let e = ue().announcementImpressions ?? {};
  return i().filter((t) => (e[t.id] ?? 0) < t.maxImpressions && s(t));
}
function gPe(e) {
  let t = JI();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let n = u().sort((a, c) => c.priority - a.priority)[0],
    r = n?.textIfUnusedLimitReset && Zcs() ? { ...n, text: n.textIfUnusedLimitReset } : n;
  if (e && r !== void 0) t.startupAnnouncementPick = r;
  return r;
}
function lcs(e, t) {
  if (u().some((n) => n.textIfUnusedLimitReset)) eus(e, t);
}
function dcs() {
  let e = i()
    .filter(s)
    .sort((t, n) => n.priority - t.priority)[0];
  if (e === void 0) return !1;
  return JSON.stringify({ id: e.id, title: e.title, text: e.text, footer: e.footer });
}
export { gPe, lcs, dcs };

//# sourceMappingURL=chunk-m1x40vnx.js.map
