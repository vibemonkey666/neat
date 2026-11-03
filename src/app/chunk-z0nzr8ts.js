// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wre, vre, wAe } from "./chunk-bbw420pv.js";
import { iR } from "./chunk-3k9fdhf3.js";
import { sr } from "./chunk-fs43t96t.js";
var c = (e) => ((c = Array.isArray), c(e)),
  l = c;
var d = Symbol.for("brand.privateNullableHeaders");
function* h(e) {
  if (!e) return;
  if (d in e) {
    let { values: r, nulls: o } = e;
    yield* r.entries();
    for (let i of o) yield [i, null];
    return;
  }
  let t = !1,
    n;
  if (e instanceof Headers) n = e.entries();
  else if (l(e)) n = e;
  else ((t = !0), (n = Object.entries(e ?? {})));
  for (let r of n) {
    let o = r[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = l(r[1]) ? r[1] : [r[1]],
      f = !1;
    for (let s of i) {
      if (s === void 0) continue;
      if (t && !f) ((f = !0), yield [o, a]);
      yield [o, s];
    }
  }
}
var a = Symbol("clear"),
  b = new Set(["x-stainless-helper"]),
  x = (e, t) => {
    let n = e
      ? e
          .split(",")
          .map((r) => r.trim())
          .filter(Boolean)
      : [];
    for (let r of t.split(",").map((o) => o.trim())) if (r && !n.includes(r)) n.push(r);
    return n.join(", ");
  },
  p = (e) => {
    let t = new Headers(),
      n = new Set();
    for (let r of e) {
      let o = new Set();
      for (let [i, f] of h(r)) {
        let s = i.toLowerCase();
        if (b.has(s)) {
          if (f === a) continue;
          if (f === null) (t.delete(i), n.add(s));
          else (t.set(i, x(t.get(i), f)), n.delete(s));
          continue;
        }
        if (f === a || !o.has(s)) {
          if ((t.delete(i), o.add(s), f === a)) continue;
        }
        if (f === null) (t.delete(i), n.add(s));
        else (t.append(i, f), n.delete(s));
      }
    }
    return { [d]: !0, values: t, nulls: n };
  };
var u = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
class y extends wAe {
  constructor({
    baseURL: e = u("ANTHROPIC_FOUNDRY_BASE_URL"),
    apiKey: t = u("ANTHROPIC_FOUNDRY_API_KEY"),
    resource: n = u("ANTHROPIC_FOUNDRY_RESOURCE"),
    azureADTokenProvider: r,
    dangerouslyAllowBrowser: o,
    ...i
  } = {}) {
    if (typeof r === "function") o = !0;
    if (!r && !t)
      throw new sr(
        "Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable."
      );
    if (r && t)
      throw new sr(
        "The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time."
      );
    if (!e) {
      if (!n)
        throw new sr(
          "Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable"
        );
      e = `https://${n}.services.ai.azure.com/anthropic/`;
    } else if (n) throw new sr("baseURL and resource are mutually exclusive");
    super({
      apiKey: r ?? t,
      baseURL: e,
      ...i,
      ...(o !== void 0 ? { dangerouslyAllowBrowser: o } : {})
    });
    ((this.resource = null),
      (this.messages = w(this)),
      (this.beta = E(this)),
      (this.models = void 0));
  }
  async authHeaders() {
    if (typeof this._options.apiKey === "function") {
      let e;
      try {
        e = await this._options.apiKey();
      } catch (t) {
        if (t instanceof sr) throw t;
        throw new sr(`Failed to get token from azureADTokenProvider: ${t.message}`, { cause: t });
      }
      if (typeof e !== "string" || !e)
        throw new sr(
          `Expected azureADTokenProvider function argument to return a string but it returned ${e}`
        );
      return p([{ Authorization: `Bearer ${e}` }]);
    }
    if (typeof this._options.apiKey === "string") return p([{ "x-api-key": this.apiKey }]);
    return;
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicFoundry/JS ${iR}`;
  }
}
function w(e) {
  let t = new vre(e);
  return (delete t.batches, t);
}
function E(e) {
  let t = new wre(e);
  return (delete t.messages.batches, t);
}
export { y as AnthropicFoundry };

//# sourceMappingURL=chunk-z0nzr8ts.js.map
