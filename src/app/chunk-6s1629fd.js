// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wre, ibt, vre, abt } from "./chunk-bbw420pv.js";
import "./chunk-264z08mq.js";
import { HGt } from "./chunk-09j01xtb.js";
import "./chunk-9rfk3x2s.js";
import { PZn, mj, mzt, gzt, hzt, yzt, _zt, bzt } from "./chunk-n1b945nq.js";
import "./chunk-ge85xgmw.js";
import "./chunk-6w4zav00.js";
import "./chunk-v2fp4zzc.js";
import "./chunk-kr9k5jph.js";
import "./chunk-rxfa9f6z.js";
import "./chunk-jendns25.js";
import "./chunk-xnwrf1mq.js";
import { iR } from "./chunk-3k9fdhf3.js";
import "./chunk-xqftcxhr.js";
import { Htt } from "./chunk-zhmcgfde.js";
import { Mu } from "./chunk-ksrhtq8b.js";
import "./chunk-2x7y5aqr.js";
import "./chunk-3b5xdkhc.js";
import { ph } from "./chunk-7zgz07kc.js";
import { RI, axe } from "./chunk-ge5t5c4x.js";
import { sr, Au } from "./chunk-fs43t96t.js";
import { Ce } from "./chunk-a2y39866.js";
var D = Ce(axe(), 1),
  K = Ce(ph(), 1),
  M = Ce(Htt(), 1);
import de from "assert";
function j(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    (("name" in e && e.name === "AbortError") ||
      ("message" in e && String(e.message).includes("FetchRequestCanceledException")))
  );
}
var x = (e) => {
  if (e instanceof Error) return e;
  if (typeof e === "object" && e !== null) {
    try {
      let t = Object.prototype.toString.call(e);
      if (t === "[object Error]" || t === "[object DOMException]") {
        let r = Error(e.message, e.cause ? { cause: e.cause } : {});
        if (e.stack) r.stack = e.stack;
        if (e.cause && !r.cause) r.cause = e.cause;
        if (e.name) r.name = e.name;
        return r;
      }
    } catch {}
    try {
      return Error(JSON.stringify(e));
    } catch {}
  }
  return Error(e);
};
var ue = (e) =>
    import("./chunk-axg8eadd.js")
      .then(({ createCredentialChain: t, fromEnv: r, fromNodeProviderChain: n }) =>
        t(
          r(e != null ? { logger: e } : {}),
          n({
            ...(e != null ? { logger: e } : {}),
            clientConfig: {
              ...(e != null ? { logger: e } : {}),
              requestHandler: new D.FetchHttpHandler({ requestInit: (s) => ({ ...s }) })
            }
          })
        )
      )
      .catch((t) => {
        throw Error(
          `Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${t.message}`
        );
      }),
  U = async (e, t) => {
    de(e.method, "Expected request method property to be set");
    let r;
    if (t.awsAccessKey && t.awsSecretKey)
      r = {
        accessKeyId: t.awsAccessKey,
        secretAccessKey: t.awsSecretKey,
        ...(t.awsSessionToken != null && { sessionToken: t.awsSessionToken })
      };
    else {
      let l = await (t.providerChainResolver ? t.providerChainResolver() : ue(t.logger));
      try {
        r = await l();
      } catch (u) {
        throw new Au({
          message: "Failed to resolve AWS credentials from the credential provider chain.",
          cause: x(u)
        });
      }
    }
    let n = new M.SignatureV4({
        service: "bedrock",
        region: t.regionName,
        credentials: r,
        sha256: HGt
      }),
      s = new URL(t.url),
      o = !e.headers
        ? {}
        : Symbol.iterator in e.headers
          ? Object.fromEntries(Array.from(e.headers).map((l) => [...l]))
          : { ...e.headers };
    (delete o.connection, (o.host = s.host));
    let i = Object.fromEntries(
        [...new Set(s.searchParams.keys())].map((l) => [l, s.searchParams.getAll(l)])
      ),
      a = new K.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: s.protocol,
        path: s.pathname,
        query: i,
        headers: o,
        body: e.body
      });
    return (await n.sign(a)).headers;
  };
var k = Ce(RI(), 1),
  J = Ce(axe(), 1);
var c = Ce(Mu(), 1);
var he = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, { message: c.expectString });
    Object.assign(r, s);
    let o = new mzt({ $metadata: b(e), ...r });
    return c.decorateServiceException(o, e.body);
  },
  pe = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString,
        originalMessage: c.expectString,
        originalStatusCode: c.expectInt32
      });
    Object.assign(r, s);
    let o = new bzt({ $metadata: b(e), ...r });
    return c.decorateServiceException(o, e.body);
  },
  fe = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, { message: c.expectString });
    Object.assign(r, s);
    let o = new _zt({ $metadata: b(e), ...r });
    return c.decorateServiceException(o, e.body);
  },
  me = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, { message: c.expectString });
    Object.assign(r, s);
    let o = new yzt({ $metadata: b(e), ...r });
    return c.decorateServiceException(o, e.body);
  },
  ye = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, { message: c.expectString });
    Object.assign(r, s);
    let o = new gzt({ $metadata: b(e), ...r });
    return c.decorateServiceException(o, e.body);
  },
  we = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, { message: c.expectString });
    Object.assign(r, s);
    let o = new hzt({ $metadata: b(e), ...r });
    return c.decorateServiceException(o, e.body);
  },
  F = (e, t) =>
    t.eventStreamMarshaller.deserialize(e, async (r) => {
      if (r.chunk != null) return { chunk: await Se(r.chunk, t) };
      if (r.internalServerException != null)
        return { internalServerException: await be(r.internalServerException, t) };
      if (r.modelStreamErrorException != null)
        return { modelStreamErrorException: await ge(r.modelStreamErrorException, t) };
      if (r.validationException != null)
        return { validationException: await Ae(r.validationException, t) };
      if (r.throttlingException != null)
        return { throttlingException: await xe(r.throttlingException, t) };
      if (r.modelTimeoutException != null)
        return { modelTimeoutException: await Ee(r.modelTimeoutException, t) };
      if (r.serviceUnavailableException != null)
        return { serviceUnavailableException: await ve(r.serviceUnavailableException, t) };
      return { $unknown: e };
    }),
  be = async (e, t) => {
    let r = { ...e, body: await w(e.body, t) };
    return he(r, t);
  },
  ge = async (e, t) => {
    let r = { ...e, body: await w(e.body, t) };
    return pe(r, t);
  },
  Ee = async (e, t) => {
    let r = { ...e, body: await w(e.body, t) };
    return fe(r, t);
  },
  Se = async (e, t) => {
    let r = {},
      n = await w(e.body, t);
    return (Object.assign(r, Re(n, t)), r);
  },
  ve = async (e, t) => {
    let r = { ...e, body: await w(e.body, t) };
    return me(r, t);
  },
  xe = async (e, t) => {
    let r = { ...e, body: await w(e.body, t) };
    return ye(r, t);
  },
  Ae = async (e, t) => {
    let r = { ...e, body: await w(e.body, t) };
    return we(r, t);
  },
  Re = (e, t) => c.take(e, { bytes: t.base64Decoder }),
  b = (e) => ({
    httpStatusCode: e.statusCode,
    requestId:
      e.headers["x-amzn-requestid"] ??
      e.headers["x-amzn-request-id"] ??
      e.headers["x-amz-request-id"] ??
      "",
    extendedRequestId: e.headers["x-amz-id-2"] ?? "",
    cfId: e.headers["x-amz-cf-id"] ?? ""
  }),
  _e = (e, t) => c.collectBody(e, t).then((r) => t.utf8Encoder(r)),
  w = (e, t) =>
    _e(e, t).then((r) => {
      if (r.length) return JSON.parse(r);
      return {};
    });
function ke(...e) {
  let t = globalThis.ReadableStream;
  if (typeof t > "u")
    throw Error(
      "`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`"
    );
  return new t(...e);
}
function W(e) {
  let t = Symbol.asyncIterator in e ? e[Symbol.asyncIterator]() : e[Symbol.iterator]();
  return ke({
    start() {},
    async pull(r) {
      let { done: n, value: s } = await t.next();
      if (n) r.close();
      else r.enqueue(s);
    },
    async cancel() {
      await t.return?.();
    }
  });
}
function z(e) {
  if (e[Symbol.asyncIterator]) return e;
  let t = e.getReader();
  return {
    async next() {
      try {
        let r = await t.read();
        if (r?.done) t.releaseLock();
        return r;
      } catch (r) {
        throw (t.releaseLock(), r);
      }
    },
    async return() {
      let r = t.cancel();
      return (t.releaseLock(), await r, { done: !0, value: void 0 });
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
var N = (e) => ((N = Array.isArray), N(e)),
  P = N;
function A(e) {
  return e != null && typeof e === "object" && !Array.isArray(e);
}
var R = (e) => {
  try {
    return JSON.parse(e);
  } catch (t) {
    return;
  }
};
var B = (e) => new TextDecoder("utf-8").decode(e),
  _ = (e) => new TextEncoder().encode(e),
  Oe = () => {
    let e = new PZn({ utf8Encoder: B, utf8Decoder: _ });
    return {
      base64Decoder: k.fromBase64,
      base64Encoder: k.toBase64,
      utf8Decoder: _,
      utf8Encoder: B,
      eventStreamMarshaller: e,
      streamCollector: J.streamCollector
    };
  };
function G(e) {
  let t = e.body;
  if (!t) return e;
  async function* r() {
    let o = F(z(t), Oe());
    try {
      for await (let i of o)
        if (i.chunk && i.chunk.bytes) {
          let a = B(i.chunk.bytes),
            d = R(a);
          if (d === void 0) throw new sr(`Could not parse a Bedrock chunk into JSON: ${a}`);
          let l = A(d) && typeof d.type === "string" ? d.type : null;
          if (l != null)
            yield _(`event: ${l}
data: ${JSON.stringify(d)}

`);
        }
    } catch (i) {
      let a = Te(i);
      if (!a) throw i;
      yield _(`event: error
data: ${JSON.stringify({ type: "error", error: a })}

`);
    }
  }
  let n = new Headers(e.headers);
  (n.set("content-type", "text/event-stream; charset=utf-8"), n.delete("content-length"));
  let s = new Response(W(r()), { status: e.status, statusText: e.statusText, headers: n });
  return (Object.defineProperty(s, "url", { value: e.url }), s);
}
function Te(e) {
  if (e instanceof mj)
    return { type: e.name.charAt(0).toLowerCase() + e.name.slice(1), message: e.message };
  if (
    e instanceof Error &&
    Object.getPrototypeOf(e) === Error.prototype &&
    e.name !== "Error" &&
    !j(e)
  )
    return { type: e.name, message: e.message };
  return;
}
var f = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var V = Symbol.for("brand.privateNullableHeaders");
function* Ie(e) {
  if (!e) return;
  if (V in e) {
    let { values: n, nulls: s } = e;
    yield* n.entries();
    for (let o of s) yield [o, null];
    return;
  }
  let t = !1,
    r;
  if (e instanceof Headers) r = e.entries();
  else if (P(e)) r = e;
  else ((t = !0), (r = Object.entries(e ?? {})));
  for (let n of r) {
    let s = n[0];
    if (typeof s !== "string") throw TypeError("expected header name to be a string");
    let o = P(n[1]) ? n[1] : [n[1]],
      i = !1;
    for (let a of o) {
      if (a === void 0) continue;
      if (t && !i) ((i = !0), yield [s, O]);
      yield [s, a];
    }
  }
}
var O = Symbol("clear"),
  Ne = new Set(["x-stainless-helper"]),
  Pe = (e, t) => {
    let r = e
      ? e
          .split(",")
          .map((n) => n.trim())
          .filter(Boolean)
      : [];
    for (let n of t.split(",").map((s) => s.trim())) if (n && !r.includes(n)) r.push(n);
    return r.join(", ");
  },
  g = (e) => {
    let t = new Headers(),
      r = new Set();
    for (let n of e) {
      let s = new Set();
      for (let [o, i] of Ie(n)) {
        let a = o.toLowerCase();
        if (Ne.has(a)) {
          if (i === O) continue;
          if (i === null) (t.delete(o), r.add(a));
          else (t.set(o, Pe(t.get(o), i)), r.delete(a));
          continue;
        }
        if (i === O || !s.has(a)) {
          if ((t.delete(o), s.add(a), i === O)) continue;
        }
        if (i === null) (t.delete(o), r.add(a));
        else (t.append(o, i), r.delete(a));
      }
    }
    return { [V]: !0, values: t, nulls: r };
  };
function Y(e) {
  return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var q = Object.freeze(Object.create(null)),
  Be = (e = Y) =>
    function (r, ...n) {
      if (r.length === 1) return r[0];
      let s = !1,
        o = [],
        i = r.reduce((u, p, m) => {
          if (/[?#]/.test(p)) s = !0;
          let h = n[m],
            y = (s ? encodeURIComponent : e)("" + h);
          if (
            m !== n.length &&
            (h == null ||
              (typeof h === "object" &&
                h.toString ===
                  Object.getPrototypeOf(Object.getPrototypeOf(h.hasOwnProperty ?? q) ?? q)
                    ?.toString))
          )
            ((y = h + ""),
              o.push({
                start: u.length + p.length,
                length: y.length,
                error: `Value of type ${Object.prototype.toString.call(h).slice(8, -1)} is not a valid path parameter`
              }));
          return u + p + (m === n.length ? "" : y);
        }, ""),
        a = i.split(/[?#]/, 1)[0],
        d = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
        l;
      while ((l = d.exec(a)) !== null)
        o.push({
          start: l.index,
          length: l[0].length,
          error: `Value "${l[0]}" can't be safely passed as a path parameter`
        });
      if ((o.sort((u, p) => u.start - p.start), o.length > 0)) {
        let u = 0,
          p = o.reduce((m, h) => {
            let y = " ".repeat(h.start - u),
              I = "^".repeat(h.length);
            return ((u = h.start + h.length), m + y + I);
          }, "");
        throw new sr(`Path parameters result in path with invalid segments:
${o.map((m) => m.error).join(`
`)}
${i}
${p}`);
      }
      return i;
    },
  L = Be(Y);
var Z = { off: 0, error: 200, warn: 300, info: 400, debug: 500 };
function E() {}
function C(e, t, r) {
  if (!t || Z[e] > Z[r]) return E;
  else return t[e].bind(t);
}
var Le = { error: E, warn: E, info: E, debug: E },
  Q = new WeakMap();
function He(e, t) {
  let r = Q.get(e);
  if (r && r[0] === t) return r[1];
  let n = {
    error: C("error", e, t),
    warn: C("warn", e, t),
    info: C("info", e, t),
    debug: C("debug", e, t)
  };
  return (Q.set(e, [t, n]), n);
}
function S(e) {
  let t = e.logger,
    r = e.logLevel ?? "off";
  if (!t) return Le;
  return He(t, r);
}
var X = function (e, t, r, n) {
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e))
      throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  },
  T,
  ee,
  te,
  $e = "bedrock-2023-05-31",
  De = new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
class re extends abt {
  constructor({
    awsRegion: e = f("AWS_REGION") ?? "us-east-1",
    baseURL: t = f("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${e}.amazonaws.com`,
    apiKey: r = f("AWS_BEARER_TOKEN_BEDROCK"),
    awsSecretKey: n = null,
    awsAccessKey: s = null,
    awsSessionToken: o = null,
    providerChainResolver: i = null,
    ...a
  } = {}) {
    super({ baseURL: t, authToken: r ?? null, apiKey: null, ...a });
    (T.add(this),
      (this.skipAuth = !1),
      (this.messages = Ke(this)),
      (this.completions = new ibt(this)),
      (this.beta = Me(this)));
    let d = s != null,
      l = n != null;
    if (d !== l)
      S(this).warn(
        "Warning: Passing only one of `awsAccessKey` or `awsSecretKey` is deprecated. Please provide both keys, or provide neither and rely on the AWS credential provider chain."
      );
    ((this.awsSecretKey = n),
      (this.awsAccessKey = s),
      (this.awsRegion = e),
      (this.awsSessionToken = o),
      (this.skipAuth = a.skipAuth ?? !1),
      (this.providerChainResolver = i));
  }
  validateHeaders() {}
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  getUserAgent() {
    return `AnthropicBedrock/JS ${iR}`;
  }
  async authHeaders(e) {
    return this.skipAuth ? void 0 : super.authHeaders(e);
  }
  backendMiddleware() {
    return [
      async (e, t, r) => {
        let n = await t(await X(this, T, "m", ee).call(this, e, r.options));
        return X(this, T, "m", te).call(this, n);
      }
    ];
  }
}
((T = new WeakSet()),
  (ee = async function (t, r) {
    let n = new URL(t.url),
      s = new Headers(t.headers),
      o;
    if (typeof t.body === "string") {
      let a = R(t.body);
      if (A(a)) o = a;
    }
    if (o) {
      if (!o.anthropic_version) o.anthropic_version = $e;
      let a = s.get("anthropic-beta");
      if (a != null && !o.anthropic_beta) o.anthropic_beta = a.split(",").map((d) => d.trim());
    }
    if (r && De.has(r.path) && r.method === "post") {
      let a = r.path.split("?")[0];
      if (n.pathname.endsWith(a)) {
        if (!o) throw Error(`Expected request body to be a JSON object for post ${a}`);
        let d = o.model;
        delete o.model;
        let l = o.stream;
        delete o.stream;
        let u = n.pathname.slice(0, n.pathname.length - a.length);
        ((n.pathname =
          u + (l ? L`/model/${d}/invoke-with-response-stream` : L`/model/${d}/invoke`)),
          n.searchParams.delete("beta"));
      }
    }
    let i = { ...t, url: n.toString(), headers: s };
    if (o) i.body = JSON.stringify(o);
    if (!this.skipAuth && !this.authToken) {
      let a = this.awsRegion;
      if (!a)
        throw Error(
          "Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present"
        );
      let d = await U(i, {
        url: i.url,
        regionName: a,
        awsAccessKey: this.awsAccessKey,
        awsSecretKey: this.awsSecretKey,
        awsSessionToken: this.awsSessionToken,
        fetchOptions: this.fetchOptions,
        providerChainResolver: this.providerChainResolver,
        logger: S(this)
      });
      i.headers = g([i.headers, d]).values;
    }
    return i;
  }),
  (te = function (t) {
    if (t.body && t.headers.get("content-type")?.includes("application/vnd.amazon.eventstream"))
      return G(t);
    return t;
  }));
function Ke(e) {
  let t = new vre(e);
  return (delete t.batches, delete t.countTokens, t);
}
function Me(e) {
  let t = new wre(e);
  return (delete t.promptCaching, delete t.messages.batches, delete t.messages.countTokens, t);
}
var ne = Ce(axe(), 1),
  oe = Ce(ph(), 1),
  se = Ce(Htt(), 1);
import Ue from "assert";
var Fe = (e, t) =>
    import("./chunk-axg8eadd.js")
      .then(({ createCredentialChain: r, fromEnv: n, fromNodeProviderChain: s }) => {
        let o = s({
          ...(e != null ? { profile: e } : {}),
          ...(t != null ? { logger: t } : {}),
          clientConfig: {
            ...(t != null ? { logger: t } : {}),
            requestHandler: new ne.FetchHttpHandler({ requestInit: (i) => ({ ...i }) })
          }
        });
        if (e != null) return o;
        return r(n(t != null ? { logger: t } : {}), o);
      })
      .catch((r) => {
        throw Error(
          `Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`
        );
      }),
  ae = async (e, t) => {
    Ue(e.method, "Expected request method property to be set");
    let r;
    if (t.awsAccessKey && t.awsSecretAccessKey)
      r = {
        accessKeyId: t.awsAccessKey,
        secretAccessKey: t.awsSecretAccessKey,
        ...(t.awsSessionToken != null && { sessionToken: t.awsSessionToken })
      };
    else {
      let l = await (t.providerChainResolver
        ? t.providerChainResolver()
        : Fe(t.awsProfile, t.logger));
      try {
        r = await l();
      } catch (u) {
        throw new Au({
          message: "Failed to resolve AWS credentials from the credential provider chain.",
          cause: x(u)
        });
      }
    }
    let n = new se.SignatureV4({
        service: t.serviceName,
        region: t.regionName,
        credentials: r,
        sha256: HGt
      }),
      s = new URL(t.url),
      o = !e.headers
        ? {}
        : Symbol.iterator in e.headers
          ? Object.fromEntries(Array.from(e.headers).map((l) => [...l]))
          : { ...e.headers };
    (delete o.connection, (o.host = s.host));
    let i = Object.fromEntries(
        [...new Set(s.searchParams.keys())].map((l) => [l, s.searchParams.getAll(l)])
      ),
      a = new oe.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: s.protocol,
        path: s.pathname,
        query: i,
        headers: o,
        body: e.body
      });
    return (await n.sign(a)).headers;
  };
var We = function (e, t, r, n) {
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e))
      throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  },
  H,
  ie,
  ze = "bedrock-mantle";
class ce extends abt {
  constructor({
    awsRegion: e,
    baseURL: t,
    apiKey: r,
    awsAccessKey: n = null,
    awsSecretAccessKey: s = null,
    awsSessionToken: o = null,
    awsProfile: i,
    providerChainResolver: a = null,
    skipAuth: d = !1,
    ...l
  } = {}) {
    let u = e ?? f("AWS_REGION") ?? f("AWS_DEFAULT_REGION"),
      p =
        t ??
        f("ANTHROPIC_BEDROCK_MANTLE_BASE_URL") ??
        (u ? `https://bedrock-mantle.${u}.api.aws/anthropic` : void 0);
    if (!p)
      throw new sr(
        "No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_BEDROCK_MANTLE_BASE_URL` environment variable."
      );
    let m = r != null;
    if ((n != null) !== (s != null))
      throw new sr(
        "`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one."
      );
    let y = n != null && s != null,
      I = i != null,
      v;
    if (m) v = r;
    else if (!y && !I) v = f("AWS_BEARER_TOKEN_BEDROCK") ?? void 0;
    super({ apiKey: v ?? null, authToken: null, baseURL: p, ...l });
    (H.add(this),
      (this.messages = new vre(this)),
      (this.beta = Je(this)),
      (this.skipAuth = !1),
      (this.awsRegion = u),
      (this.awsAccessKey = n),
      (this.awsSecretAccessKey = s),
      (this.awsSessionToken = o),
      (this.awsProfile = i ?? null),
      (this.providerChainResolver = a),
      (this.skipAuth = d),
      (this._useSigV4 = v == null));
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    if (!this._useSigV4) return g([{ Authorization: `Bearer ${this.apiKey}` }]);
    return;
  }
  validateHeaders() {}
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  getUserAgent() {
    return `AnthropicBedrockMantle/JS ${iR}`;
  }
  backendMiddleware() {
    return [async (e, t) => t(await We(this, H, "m", ie).call(this, e))];
  }
}
((H = new WeakSet()),
  (ie = async function (t) {
    if (this.skipAuth || !this._useSigV4) return t;
    let r = this.awsRegion;
    if (!r)
      throw new sr(
        "No AWS region found. Set `awsRegion` in the constructor or the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable."
      );
    let n = await ae(t, {
      url: t.url,
      regionName: r,
      serviceName: ze,
      awsAccessKey: this.awsAccessKey,
      awsSecretAccessKey: this.awsSecretAccessKey,
      awsSessionToken: this.awsSessionToken,
      awsProfile: this.awsProfile,
      providerChainResolver: this.providerChainResolver,
      logger: S(this)
    });
    return { ...t, headers: g([t.headers, n]).values };
  }));
function Je(e) {
  let { messages: t } = new wre(e);
  return { messages: t };
}
export { re as AnthropicBedrock, ce as AnthropicBedrockMantle };

//# sourceMappingURL=chunk-6s1629fd.js.map
