import {
  fileURLToPath as __filePath_9df3ced5c00093e1,
  URL as __filePath_9df3ced5c00093e1_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { EWr, r9s } from "./chunk-wany0nxw.js";
import { H } from "./chunk-p8tprgqa.js";
var s = "https://json-schema.org/draft/2020-12/schema",
  c;
function f() {
  if (c === void 0) {
    try {
      let e = import.meta.require(
        __filePath_9df3ced5c00093e1(
          new __filePath_9df3ced5c00093e1_URL("./chunk-21wmtqgq.js", import.meta.url)
        )
      );
      c = typeof e.default === "function" ? e.default : null;
    } catch {
      c = null;
    }
    if (c === null)
      (t("MCP: draft 2020-12 meta-validator unavailable \u2014 tool schema checks fail open", {
        level: "warn"
      }),
        a("tengu_mcp_degraded", { reason: b("schema_validator_unavailable") }));
  }
  return c;
}
function h() {
  return !1;
}
function v(e) {
  if (!H(e) || !H(e.properties)) return null;
  for (let r of Object.keys(e.properties)) if (!EWr.test(r)) return r;
  return null;
}
function m(e) {
  return S(f(), e, h());
}
function S(e, r, i) {
  let l = v(r);
  if (l !== null)
    return {
      valid: !1,
      check: "propertyKey",
      detail: `property key ${_(l.slice(0, 80))} does not match ${EWr}`
    };
  if (e === null) return { valid: !0 };
  let n = r;
  if (H(r)) {
    let o = Object.entries(r);
    if (o.some(([, u]) => u === null))
      ((o = o.filter(([, u]) => u !== null)), (n = Object.fromEntries(o)));
    let d = n.$schema;
    if (d !== void 0)
      if (i) {
        let { $schema: u, ...p } = n;
        n = p;
      } else if (typeof d === "string" && (d === s || d === `${s}#`))
        ;
      else return { valid: !0 };
  }
  try {
    if (e(n)) return { valid: !0 };
    let o = e.errors?.[0];
    return {
      valid: !1,
      check: "meta",
      detail: o ? `schema${o.instancePath} ${o.message ?? "is invalid"}` : "schema is invalid"
    };
  } catch (o) {
    return {
      valid: !1,
      check: "meta",
      detail: `validation threw: ${o instanceof Error ? o.message : String(o)}`
    };
  }
}
function etn(e, r) {
  let i = r9s(e);
  if (i.outcome === "drop")
    return { verdict: "drop", cause: "schema_unsupported", reason: i.reason };
  if (i.outcome === "normalized" && !r.normalizeEnabled)
    return {
      verdict: "drop",
      cause: "normalize_gated",
      reason: `its input schema uses top-level ${i.combinators.join("/")}, which the Anthropic API does not accept`
    };
  let l =
      i.outcome === "normalized"
        ? { schema: i.schema, note: i.note, combinators: i.combinators }
        : void 0,
    n = m(l?.schema ?? e);
  if (n.valid) return { verdict: "send", normalized: l, apiWouldReject: void 0 };
  if (!r.apiValidateEnabled) return { verdict: "send", normalized: l, apiWouldReject: n };
  return { verdict: "drop", cause: "api_invalid", normalized: l, rejection: n };
}
export { etn };

//# sourceMappingURL=chunk-h9mf9k3y.js.map
