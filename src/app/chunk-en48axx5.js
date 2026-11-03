// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { g, m } from "./chunk-brszmkb3.js";
import { ma, t } from "./chunk-4kxznmzw.js";
import { Qho } from "./chunk-fz5q3feg.js";
import { zBe } from "./chunk-9tc2anvp.js";
import { _me } from "./chunk-e0pm2dx9.js";
import { createHash as k } from "crypto";
var E = "anthropic.ccr.client_event.v1",
  ykr = "claude-code-jcs@1";
function _kr(r) {
  let n = [],
    o = [],
    i = (e) => {
      if (e === null || typeof e === "boolean" || typeof e === "string") n.push(ma(e));
      else if (typeof e === "number") {
        if (!Number.isFinite(e)) throw Error("canonicalJson: non-finite number");
        n.push(String(e));
      } else if (Array.isArray(e))
        (n.push("["), o.push({ values: Array.from(e, (s) => (s === void 0 ? null : s)), next: 0 }));
      else if (typeof e === "object") {
        let s = e,
          l = Object.keys(s)
            .filter((c) => s[c] !== void 0)
            .sort();
        (n.push("{"), o.push({ names: l, values: l.map((c) => s[c]), next: 0 }));
      } else throw Error("canonicalJson: a value with no JSON form");
    };
  i(r);
  while (o.length > 0) {
    let e = o.at(-1);
    if (e.next === e.values.length) {
      (n.push(e.names ? "}" : "]"), o.pop());
      continue;
    }
    if (e.next > 0) n.push(",");
    if (e.names) n.push(`${ma(e.names[e.next])}:`);
    let s = e.values[e.next];
    ((e.next += 1), i(s));
  }
  return n.join("");
}
function P(r, n) {
  let { uuid: o, type: i, ...e } = n,
    s = k("sha256").update(_kr(e), "utf8").digest();
  return Buffer.concat([
    Buffer.from(E, "utf8"),
    f,
    Buffer.from(r, "utf8"),
    f,
    Buffer.from(o, "utf8"),
    f,
    Buffer.from(i, "utf8"),
    f,
    s
  ]);
}
var f = Buffer.from([0]);
function S(r, n) {
  let o = zBe + r,
    i = !1;
  return {
    noteSignFailure: () => {
      if (i) return !1;
      return ((i = !0), !0);
    },
    sign: async (e, s) => ({
      kid: o,
      signature: (await n.sign(P(e, s))).toString("base64"),
      jcs_lib: ykr
    })
  };
}
async function _({ accountUuid: r, boundDeviceUuid: n, credentials: o, held: i }) {
  return y(await xZt(r, o, v(i?.rowPk, n) ? i : void 0), n);
}
async function EAi(r, n) {
  let o = await _me(n).catch(() => {
    return;
  });
  if (o?.status !== "resolved") return;
  let i = await xZt(o.accountUuid, n),
    e,
    s = 0,
    l = 0,
    c = (a, u) => {
      let p = ++s;
      a.then(
        (w) => {
          if (p > l) ((l = p), (e = u(w)));
        },
        () => {}
      );
    };
  return (
    c(r, (a) => (a === void 0 ? void 0 : y(i, a))),
    i.status === "loaded"
      ? {
          sign: async (a, u) => e?.sign(a, u),
          noteSignFailure: () => e?.noteSignFailure() ?? !1,
          rebind: (a) => c(a, (u) => (u !== void 0 && v(i.rowPk, u) ? (e ?? y(i, u)) : void 0))
        }
      : void 0
  );
}
async function bkr(r, n, o) {
  let i = await _me(n).catch(() => {
    return;
  });
  return i?.status === "resolved"
    ? _({ accountUuid: i.accountUuid, boundDeviceUuid: r, credentials: n, held: o })
    : void 0;
}
async function qho(r, n) {
  let o = await _me(n).catch(() => {
    return;
  });
  if (o?.status !== "resolved") return;
  let i = await xZt(o.accountUuid, n);
  if (i.status !== "loaded" || !v(i.rowPk, r)) return;
  return (g("client_event_signer"), S(i.rowPk, i.key));
}
async function xZt(r, n, o) {
  if (o?.accountUuid === r) return { status: "loaded", rowPk: o.rowPk, key: o.key };
  try {
    let i = await Qho(r, n);
    return i === void 0
      ? { status: "no_device_key" }
      : { status: "loaded", rowPk: i.rowPk, key: i.key };
  } catch (i) {
    return (
      t(`[clientEventSigner] could not load the device key: ${d(i)}`),
      { status: "load_failed" }
    );
  }
}
function v(r, n) {
  return r === n.toLowerCase();
}
function y(r, n) {
  switch (r.status) {
    case "no_device_key":
    case "load_failed":
      m("client_event_signer", r.status);
      return;
    case "loaded":
      if (!v(r.rowPk, n)) {
        m("client_event_signer", "bound_elsewhere");
        return;
      }
      return (g("client_event_signer"), S(r.rowPk, r.key));
  }
}
export { ykr, _kr, EAi, bkr, qho, xZt };

//# sourceMappingURL=chunk-en48axx5.js.map
