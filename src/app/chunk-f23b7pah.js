// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { Et, Hc, k, Re, ue, La, ch } from "./chunk-ajtyjx88.js";
import { Pt } from "./chunk-xe386mry.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { oK } from "./chunk-j559gbrr.js";
import { KDe } from "./chunk-7f6g2yy3.js";
import { Ps } from "./chunk-5b88xb0z.js";
var p = "tengu_reflective_bee",
  S = ["off", "survey"],
  d = 3,
  _ = 86400000,
  f = "tengu_web_setup_push_offer",
  cio =
    "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?",
  uio = 1000,
  dIt = new W(() => Ps({ status: "none" }));
function Ygs({ trigger: t, host: o, storageV5: s }) {
  let r = dIt.of(o);
  if (r.getState().status !== "none") return;
  if (Hc()) return;
  if (Ae() !== "firstParty" || !Et() || !KDe()) return;
  if (Pt()) return;
  if (u()) return;
  if (oK.of(o).peek(void 0, s) !== "not_connected") return;
  a(f, { event: b("eligible"), trigger: c(t) });
  let n = k(p, "off"),
    e = S.find((i) => i === n);
  r.setState(() =>
    e === void 0 || e === "off"
      ? { status: "resolved" }
      : { status: "pending", variant: e, trigger: t }
  );
}
function u() {
  let t = ue().webSetupPushOffer;
  if (t?.dismissedForever) return !0;
  if (La().webSetupPushOfferShown) return !0;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < _) return !0;
  return (t?.shownCount ?? 0) >= d;
}
function fio(t, o) {
  let s = dIt.of(t);
  if (s.getState().status !== "pending") return !1;
  if (!u() && oK.of(t).peek(void 0, o) === "not_connected") return !1;
  return (s.setState(() => ({ status: "resolved" })), !0);
}
function pio(t, o) {
  let s = dIt.of(t),
    r = s.getState();
  if (r.status !== "pending") return;
  (s.setState(() => ({ ...r, status: "shown" })),
    a(f, { event: b("shown"), variant: c(r.variant), trigger: c(r.trigger) }),
    g("remote_setup_push_offer"));
  let n = Date.now();
  (Re(
    (e) =>
      e.webSetupPushOffer?.lastShownAt === n
        ? e
        : {
            ...e,
            webSetupPushOffer: {
              ...e.webSetupPushOffer,
              lastShownAt: n,
              shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1
            }
          },
    o
  ),
    ch((e) => (e.webSetupPushOfferShown ? e : { ...e, webSetupPushOfferShown: !0 }), o));
}
function z6e(t, o, s) {
  let r = dIt.of(t),
    n = r.getState();
  if (n.status !== "shown") return;
  if (
    (r.setState(() => ({ status: "resolved" })),
    a(f, { event: c(o), variant: c(n.variant), trigger: c(n.trigger) }),
    o === "dont_ask_again")
  )
    Re(
      (e) =>
        e.webSetupPushOffer?.dismissedForever
          ? e
          : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, dismissedForever: !0 } },
      s
    );
}
export { cio, uio, dIt, Ygs, fio, pio, z6e };

//# sourceMappingURL=chunk-f23b7pah.js.map
