// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { DSo } from "./chunk-2nwr73hs.js";
import { xSs } from "./chunk-sspzxwqc.js";
import { al } from "./chunk-r1dvrqha.js";
import { JTs } from "./chunk-njg1cdnf.js";
import { MXn } from "./chunk-hp871ge6.js";
import { Yb } from "./chunk-xq3dwnzp.js";
import { _ke } from "./chunk-j0tbz6ra.js";
import { Soe } from "./chunk-5b88xb0z.js";
function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(
    ([o, s]) => s?.url !== void 0 && !_ke(o) && al(s.url) === r
  )?.[0];
}
function l(e) {
  return Object.entries(e.frameUrls ?? {}).flatMap(([r, o]) => {
    if (o?.url === void 0 || _ke(r)) return [];
    if (o.dismissed === !0) return [];
    let s = al(o.url),
      n = o.routineUnasked === !0 || o.commentUnasked === !0;
    return s === null ? [] : [{ path: r, slug: s, url: o.url, unasked: n }];
  });
}
function d(e, r) {
  return (
    (e.workshopVerifiedSlugs ?? []).includes(r) ||
    Object.entries(e.frameUrls ?? {}).some(
      ([o, s]) => s?.url !== void 0 && al(s.url) === r && MXn(o)
    )
  );
}
var c = Object.freeze({}),
  m = Soe("artifactReadConsentSlugs", c),
  g = Soe("artifactConsentEpoch", 0);
function xco(e, r) {
  return {
    ownPublishes: DSo(e, r),
    workshopTelemetry: JTs(e, r),
    whiteboardTelemetry: xSs(e, r),
    recordedPages: {
      isWorkshopPage: (o) => d(e(), o),
      localSourcePath: (o) => a(e(), o),
      heldSourcePages: () => l(e())
    },
    sharedReadConsent: m(e, r),
    consentEpoch: g(e, r)
  };
}
function Sct() {
  let e = {};
  return xco(
    () => e,
    (r) => {
      e = r(e);
    }
  );
}
var wct = {
  assign: () => Yb[0],
  get: () => {
    return;
  }
};
function E3e(e) {
  return {
    assign(r) {
      let o = e.get(),
        s = o.assignments.get(r);
      if (s) return s;
      let n = Yb[o.index % Yb.length];
      return (
        e.set((t) => {
          if (t.assignments.has(r)) return t;
          let i = new Map(t.assignments);
          return (i.set(r, n), { assignments: i, index: t.index + 1 });
        }),
        n
      );
    },
    get(r) {
      return e.get().assignments.get(r);
    }
  };
}
var hae = Object.freeze({ bridge: void 0, channel: void 0 });
class fSr {
  #e = void 0;
  #r = void 0;
  get bridge() {
    return this.#e;
  }
  get channel() {
    return this.#r;
  }
  connectBridge(e) {
    this.#e = e;
  }
  disconnectBridge() {
    this.#e = void 0;
  }
  setChannel(e) {
    this.#r = e;
  }
}
export { xco, Sct, wct, E3e, hae, fSr };

//# sourceMappingURL=chunk-vaw9tryj.js.map
