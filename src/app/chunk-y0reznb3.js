// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { R } from "./chunk-fs43t96t.js";
import { p } from "./chunk-qmkm2x59.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { hG } from "./chunk-nzbb091t.js";
import { m, f } from "./chunk-brszmkb3.js";
import { r_o, eUn } from "./chunk-98t1ehjk.js";
import { o, T, u } from "./chunk-0bqrj5ah.js";
var l = p(() => u({ deviceId: o(), name: o().default("Browser"), osPlatform: o().optional() })),
  mmr =
    "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.",
  tgi =
    "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.",
  Aus =
    "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";
class gmr extends R {
  listEmpty;
  namedABrowser;
  constructor(e, r) {
    if (r) super(Aus, "claude-in-chrome browser not listed");
    else super(Aus, "claude-in-chrome switch request named no browser");
    ((this.listEmpty = e), (this.namedABrowser = r));
  }
}
class $to extends R {
  constructor(e) {
    super(e, "claude-in-chrome tool call failed");
  }
}
function Cus(e) {
  return e instanceof gmr;
}
function hmr(e) {
  if (K3t(e)) f("chrome_browser_picker", "bridge_unreachable");
  else if (Cus(e) && e.namedABrowser)
    f("chrome_browser_picker", "browser_not_listed", { list_empty: e.listEmpty });
  else if (Cus(e)) m("chrome_browser_picker", "invalid_request");
  else m("chrome_browser_picker", "select_failed");
}
class Fto extends R {
  constructor() {
    super(tgi, "claude-in-chrome bridge not reachable");
  }
}
function K3t(e) {
  return e instanceof Fto;
}
function jEi(e) {
  if (K3t(e)) return [];
  throw e;
}
async function CPn(e) {
  let r = await xus(e, "list_connected_browsers", {});
  if (!r) return [];
  let s = T(l()).safeParse(te(r));
  if (!s.success) throw new Rus();
  return s.data;
}
class Rus extends R {
  constructor() {
    super(
      "Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.",
      "claude-in-chrome browser list in an unknown shape"
    );
  }
}
async function ymr(e, r, s = (n) => n) {
  if (typeof r !== "string" || r === "") throw new gmr(!1, !1);
  try {
    await s(xus(e, "select_browser", { deviceId: r }));
  } catch (n) {
    if (!(n instanceof $to)) throw n;
    t(`claude-in-chrome select_browser refused: ${n.message}`);
    let c = await s(CPn(e));
    if (c.some((i) => i.deviceId === r)) throw n;
    throw new gmr(c.length === 0, !0);
  }
}
async function xus(e, r, s) {
  let n = r_o(),
    c = await hG(e, { name: r, arguments: s }, void 0, !0),
    i = Array.isArray(c.content) ? c.content[0] : void 0,
    a = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : void 0;
  if (r_o() !== n && a !== void 0 && eUn(a))
    throw (t(`claude-in-chrome bridge not reachable: ${a}`, { level: "error" }), new Fto());
  if (c.isError) throw new $to(a || `${r} failed`);
  return a;
}
export { mmr, tgi, Aus, gmr, $to, Cus, hmr, Fto, K3t, jEi, CPn, Rus, ymr, xus };

//# sourceMappingURL=chunk-y0reznb3.js.map
