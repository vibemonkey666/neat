// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { H } from "./chunk-p8tprgqa.js";
import { Ce, x } from "./chunk-a2y39866.js";
var R = x(function (h, L) {
  L.exports = {
    single: {
      topLeft: "\u250C",
      top: "\u2500",
      topRight: "\u2510",
      right: "\u2502",
      bottomRight: "\u2518",
      bottom: "\u2500",
      bottomLeft: "\u2514",
      left: "\u2502"
    },
    double: {
      topLeft: "\u2554",
      top: "\u2550",
      topRight: "\u2557",
      right: "\u2551",
      bottomRight: "\u255D",
      bottom: "\u2550",
      bottomLeft: "\u255A",
      left: "\u2551"
    },
    round: {
      topLeft: "\u256D",
      top: "\u2500",
      topRight: "\u256E",
      right: "\u2502",
      bottomRight: "\u256F",
      bottom: "\u2500",
      bottomLeft: "\u2570",
      left: "\u2502"
    },
    bold: {
      topLeft: "\u250F",
      top: "\u2501",
      topRight: "\u2513",
      right: "\u2503",
      bottomRight: "\u251B",
      bottom: "\u2501",
      bottomLeft: "\u2517",
      left: "\u2503"
    },
    singleDouble: {
      topLeft: "\u2553",
      top: "\u2500",
      topRight: "\u2556",
      right: "\u2551",
      bottomRight: "\u255C",
      bottom: "\u2500",
      bottomLeft: "\u2559",
      left: "\u2551"
    },
    doubleSingle: {
      topLeft: "\u2552",
      top: "\u2550",
      topRight: "\u2555",
      right: "\u2502",
      bottomRight: "\u255B",
      bottom: "\u2550",
      bottomLeft: "\u2558",
      left: "\u2502"
    },
    classic: {
      topLeft: "+",
      top: "-",
      topRight: "+",
      right: "|",
      bottomRight: "+",
      bottom: "-",
      bottomLeft: "+",
      left: "|"
    },
    arrow: {
      topLeft: "\u2198",
      top: "\u2193",
      topRight: "\u2199",
      right: "\u2190",
      bottomRight: "\u2196",
      bottom: "\u2191",
      bottomLeft: "\u2197",
      left: "\u2192"
    }
  };
});
var n = x(function (c, r) {
  var f = R();
  r.exports = f;
  r.exports.default = f;
});
var p = ["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"];
var m = (t) => H(t) && p.every((o) => typeof t[o] === "string");
var b = Ce(n(), 1);
var E = {
  dashed: {
    top: "\u254C",
    left: "\u254E",
    right: "\u254E",
    bottom: "\u254C",
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " "
  },
  quote: {
    top: " ",
    left: "\u258E",
    right: " ",
    bottom: " ",
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " "
  }
};
var e = { ...b.default, ...E };
function Rer(t) {
  let i = typeof t === "string" && Object.hasOwn(e, t) ? e[t] : t;
  return m(i) ? i : void 0;
}
var lSi = Object.keys(e).filter((t) => Rer(t) !== void 0);
var VKe = Object.freeze([
    [1564, 1564],
    [8234, 8238],
    [8294, 8297]
  ]),
  $Kr = VKe.map(
    ([t, o]) => `\\u{${t.toString(16)}}` + (o > t ? `-\\u{${o.toString(16)}}` : "")
  ).join(""),
  _vt = new RegExp(`[${$Kr}]`, "gu");
export { VKe, $Kr, _vt, Rer, lSi };

//# sourceMappingURL=chunk-b2fbd462.js.map
