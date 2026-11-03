// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { x } from "./chunk-a2y39866.js";
var a = x(function (u) {
  function c(t) {
    let r = {};
    if (((t = t.replace(/^\?/, "")), t))
      for (let n of t.split("&")) {
        let [e, s = null] = n.split("=");
        if (((e = decodeURIComponent(e)), s)) s = decodeURIComponent(s);
        if (!(e in r)) r[e] = s;
        else if (Array.isArray(r[e])) r[e].push(s);
        else r[e] = [r[e], s];
      }
    return r;
  }
  u.parseQueryString = c;
});
var EV = x(function (y) {
  var l = a(),
    i = (t) => {
      if (typeof t === "string") return i(new URL(t));
      let { hostname: r, pathname: n, port: e, protocol: s, search: o } = t,
        p;
      if (o) p = l.parseQueryString(o);
      return { hostname: r, port: e ? parseInt(e) : void 0, protocol: s, path: n, query: p };
    };
  y.parseUrl = i;
});
export { EV };

//# sourceMappingURL=chunk-h77sc3qf.js.map
