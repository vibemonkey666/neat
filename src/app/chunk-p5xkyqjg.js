// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nl } from "./chunk-rhk37je5.js";
var Xy = {
  CURSOR_VISIBLE: 25,
  ALT_SCREEN: 47,
  ALT_SCREEN_CLEAR: 1049,
  MOUSE_NORMAL: 1000,
  MOUSE_BUTTON: 1002,
  MOUSE_ANY: 1003,
  MOUSE_SGR: 1006,
  MOUSE_SGR_PIXELS: 1016,
  FOCUS_EVENTS: 1004,
  BRACKETED_PASTE: 2004,
  THEME_NOTIFY: 2031,
  SYNCHRONIZED_UPDATE: 2026,
  WIN32_INPUT_MODE: 9001
};
function LW(E) {
  return nl(`?${E}h`);
}
function z6(E) {
  return nl(`?${E}l`);
}
var Z8t = LW(Xy.SYNCHRONIZED_UPDATE),
  Xlt = z6(Xy.SYNCHRONIZED_UPDATE),
  pfs = LW(Xy.BRACKETED_PASTE),
  LIn = z6(Xy.BRACKETED_PASTE),
  NIn = LW(Xy.FOCUS_EVENTS),
  pPt = z6(Xy.FOCUS_EVENTS),
  mfs = LW(Xy.THEME_NOTIFY),
  $In = z6(Xy.THEME_NOTIFY),
  uN = LW(Xy.CURSOR_VISIBLE),
  fN = z6(Xy.CURSOR_VISIBLE),
  mPt = LW(Xy.ALT_SCREEN_CLEAR),
  gPt = z6(Xy.ALT_SCREEN_CLEAR),
  FIn = z6(Xy.WIN32_INPUT_MODE),
  S = LW(Xy.MOUSE_NORMAL) + LW(Xy.MOUSE_BUTTON) + LW(Xy.MOUSE_ANY) + LW(Xy.MOUSE_SGR),
  _ = LW(Xy.MOUSE_NORMAL) + LW(Xy.MOUSE_SGR),
  Nwe = z6(Xy.MOUSE_SGR) + z6(Xy.MOUSE_ANY) + z6(Xy.MOUSE_BUTTON) + z6(Xy.MOUSE_NORMAL),
  gfs = LW(Xy.MOUSE_SGR_PIXELS),
  hfs = z6(Xy.MOUSE_SGR_PIXELS) + LW(Xy.MOUSE_SGR);
function UIn(E) {
  switch (E) {
    case "full":
      return S;
    case "scroll":
      return _;
    case "off":
      return "";
  }
}
export {
  Xy,
  LW,
  z6,
  Z8t,
  Xlt,
  pfs,
  LIn,
  NIn,
  pPt,
  mfs,
  $In,
  uN,
  fN,
  mPt,
  gPt,
  FIn,
  Nwe,
  gfs,
  hfs,
  UIn
};

//# sourceMappingURL=chunk-p5xkyqjg.js.map
