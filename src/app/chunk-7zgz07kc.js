// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { cEn, Ht } from "./chunk-ddpw2j06.js";
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { F, L, U, no, ye, Wr, Hrs } from "./chunk-wrtp8qz8.js";
import { R } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { ie, t } from "./chunk-4kxznmzw.js";
import { Qr, qYt } from "./chunk-jazcqqqr.js";
import { D } from "./chunk-3b9j76mf.js";
import { h2, i } from "./chunk-cj37hmns.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { hd } from "./chunk-zem4yd4w.js";
import { RM } from "./chunk-8w2npe9a.js";
import { iT } from "./chunk-ffrqb2c4.js";
import { y$e } from "./chunk-gvf25gp4.js";
import { Cfe } from "./chunk-8g1seyvy.js";
import { IM } from "./chunk-nqsvrwdr.js";
import { et } from "./chunk-c9re0p40.js";
import { Ce, x, Fe } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
var h$e = x(function (Cr) {
  Cr.HttpAuthLocation = void 0;
  (function (e) {
    ((e.HEADER = "header"), (e.QUERY = "query"));
  })(Cr.HttpAuthLocation || (Cr.HttpAuthLocation = {}));
  Cr.HttpApiKeyAuthLocation = void 0;
  (function (e) {
    ((e.HEADER = "header"), (e.QUERY = "query"));
  })(Cr.HttpApiKeyAuthLocation || (Cr.HttpApiKeyAuthLocation = {}));
  Cr.EndpointURLScheme = void 0;
  (function (e) {
    ((e.HTTP = "http"), (e.HTTPS = "https"));
  })(Cr.EndpointURLScheme || (Cr.EndpointURLScheme = {}));
  Cr.AlgorithmId = void 0;
  (function (e) {
    ((e.MD5 = "md5"),
      (e.CRC32 = "crc32"),
      (e.CRC32C = "crc32c"),
      (e.SHA1 = "sha1"),
      (e.SHA256 = "sha256"));
  })(Cr.AlgorithmId || (Cr.AlgorithmId = {}));
  var pr = (e) => {
      let r = [];
      if (e.sha256 !== void 0)
        r.push({ algorithmId: () => Cr.AlgorithmId.SHA256, checksumConstructor: () => e.sha256 });
      if (e.md5 != null)
        r.push({ algorithmId: () => Cr.AlgorithmId.MD5, checksumConstructor: () => e.md5 });
      return {
        addChecksumAlgorithm(n) {
          r.push(n);
        },
        checksumAlgorithms() {
          return r;
        }
      };
    },
    hr = (e) => {
      let r = {};
      return (
        e.checksumAlgorithms().forEach((n) => {
          r[n.algorithmId()] = n.checksumConstructor();
        }),
        r
      );
    },
    gr = (e) => pr(e),
    mr = (e) => hr(e);
  Cr.FieldPosition = void 0;
  (function (e) {
    ((e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER"));
  })(Cr.FieldPosition || (Cr.FieldPosition = {}));
  var yr = "__smithy_context";
  Cr.IniSectionType = void 0;
  (function (e) {
    ((e.PROFILE = "profile"), (e.SSO_SESSION = "sso-session"), (e.SERVICES = "services"));
  })(Cr.IniSectionType || (Cr.IniSectionType = {}));
  Cr.RequestHandlerProtocol = void 0;
  (function (e) {
    ((e.HTTP_0_9 = "http/0.9"), (e.HTTP_1_0 = "http/1.0"), (e.TDS_8_0 = "tds/8.0"));
  })(Cr.RequestHandlerProtocol || (Cr.RequestHandlerProtocol = {}));
  Cr.SMITHY_CONTEXT_KEY = yr;
  Cr.getDefaultClientConfiguration = gr;
  Cr.resolveDefaultRuntimeConfig = mr;
});
var ph = x(function (wr) {
  var Ar = h$e(),
    Sr = (e) => ({
      setHttpHandler(r) {
        e.httpHandler = r;
      },
      httpHandler() {
        return e.httpHandler;
      },
      updateHttpClientConfig(r, n) {
        e.httpHandler?.updateHttpClientConfig(r, n);
      },
      httpHandlerConfigs() {
        return e.httpHandler.httpHandlerConfigs();
      }
    }),
    xr = (e) => ({ httpHandler: e.httpHandler() });
  class Ve {
    name;
    kind;
    values;
    constructor({ name: e, kind: r = Ar.FieldPosition.HEADER, values: n = [] }) {
      ((this.name = e), (this.kind = r), (this.values = n));
    }
    add(e) {
      this.values.push(e);
    }
    set(e) {
      this.values = e;
    }
    remove(e) {
      this.values = this.values.filter((r) => r !== e);
    }
    toString() {
      return this.values.map((e) => (e.includes(",") || e.includes(" ") ? `"${e}"` : e)).join(", ");
    }
    get() {
      return this.values;
    }
  }
  class Ge {
    entries = {};
    encoding;
    constructor({ fields: e = [], encoding: r = "utf-8" }) {
      (e.forEach(this.setField.bind(this)), (this.encoding = r));
    }
    setField(e) {
      this.entries[e.name.toLowerCase()] = e;
    }
    getField(e) {
      return this.entries[e.toLowerCase()];
    }
    removeField(e) {
      delete this.entries[e.toLowerCase()];
    }
    getByType(e) {
      return Object.values(this.entries).filter((r) => r.kind === e);
    }
  }
  class ae {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e) {
      ((this.method = e.method || "GET"),
        (this.hostname = e.hostname || "localhost"),
        (this.port = e.port),
        (this.query = e.query || {}),
        (this.headers = e.headers || {}),
        (this.body = e.body),
        (this.protocol = e.protocol
          ? e.protocol.slice(-1) !== ":"
            ? `${e.protocol}:`
            : e.protocol
          : "https:"),
        (this.path = e.path ? (e.path.charAt(0) !== "/" ? `/${e.path}` : e.path) : "/"),
        (this.username = e.username),
        (this.password = e.password),
        (this.fragment = e.fragment));
    }
    static clone(e) {
      let r = new ae({ ...e, headers: { ...e.headers } });
      if (r.query) r.query = Tr(r.query);
      return r;
    }
    static isInstance(e) {
      if (!e) return !1;
      let r = e;
      return (
        "method" in r &&
        "protocol" in r &&
        "hostname" in r &&
        "path" in r &&
        typeof r.query === "object" &&
        typeof r.headers === "object"
      );
    }
    clone() {
      return ae.clone(this);
    }
  }
  function Tr(e) {
    return Object.keys(e).reduce((r, n) => {
      let o = e[n];
      return { ...r, [n]: Array.isArray(o) ? [...o] : o };
    }, {});
  }
  class Qe {
    statusCode;
    reason;
    headers;
    body;
    constructor(e) {
      ((this.statusCode = e.statusCode),
        (this.reason = e.reason),
        (this.headers = e.headers || {}),
        (this.body = e.body));
    }
    static isInstance(e) {
      if (!e) return !1;
      let r = e;
      return typeof r.statusCode === "number" && typeof r.headers === "object";
    }
  }
  function Pr(e) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
  }
  wr.Field = Ve;
  wr.Fields = Ge;
  wr.HttpRequest = ae;
  wr.HttpResponse = Qe;
  wr.getHttpHandlerExtensionConfiguration = Sr;
  wr.isValidHostname = Pr;
  wr.resolveHttpHandlerRuntimeConfig = xr;
});
var MQo = x(function (Ur) {
  var Je = (e) => encodeURIComponent(e).replace(/[!'()*]/g, Ir),
    Ir = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
    Nr = (e) => e.split("/").map(Je).join("/");
  Ur.escapeUri = Je;
  Ur.escapeUriPath = Nr;
});
var DQo = x(function (Mr) {
  var xe = MQo();
  function Br(e) {
    let r = [];
    for (let n of Object.keys(e).sort()) {
      let o = e[n];
      if (((n = xe.escapeUri(n)), Array.isArray(o)))
        for (let s = 0, c = o.length; s < c; s++) r.push(`${n}=${xe.escapeUri(o[s])}`);
      else {
        let s = n;
        if (o || typeof o === "string") s += `=${xe.escapeUri(o)}`;
        r.push(s);
      }
    }
    return r.join("&");
  }
  Mr.buildQueryString = Br;
});
var G0 = x(function (cn) {
  var nt = ph(),
    ot = DQo(),
    ue = Fe("http"),
    fe = Fe("https"),
    st = Fe("stream"),
    Te = Fe("http2"),
    Yr = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
    it = (e) => {
      let r = {};
      for (let n of Object.keys(e)) {
        let o = e[n];
        r[n] = Array.isArray(o) ? o.join(",") : o;
      }
      return r;
    },
    I = { setTimeout: (e, r) => setTimeout(e, r), clearTimeout: (e) => clearTimeout(e) },
    Ze = 1000,
    Vr = (e, r, n = 0) => {
      if (!n) return -1;
      let o = (s) => {
        let c = I.setTimeout(() => {
            (e.destroy(),
              r(
                Object.assign(
                  Error(
                    `@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${n} ms.`
                  ),
                  { name: "TimeoutError" }
                )
              ));
          }, n - s),
          u = (a) => {
            if (a?.connecting)
              a.on("connect", () => {
                I.clearTimeout(c);
              });
            else I.clearTimeout(c);
          };
        if (e.socket) u(e.socket);
        else e.on("socket", u);
      };
      if (n < 2000) return (o(0), 0);
      return I.setTimeout(o.bind(null, Ze), Ze);
    },
    Gr = (e, r, n = 0, o, s) => {
      if (n)
        return I.setTimeout(() => {
          let c = `@smithy/node-http-handler - [${o ? "ERROR" : "WARN"}] a request has exceeded the configured ${n} ms requestTimeout.`;
          if (o) {
            let u = Object.assign(Error(c), { name: "TimeoutError", code: "ETIMEDOUT" });
            (e.destroy(u), r(u));
          } else
            ((c +=
              " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error."),
              s?.warn?.(c));
        }, n);
      return -1;
    },
    Jr = 3000,
    Zr = (e, { keepAlive: r, keepAliveMsecs: n }, o = Jr) => {
      if (r !== !0) return -1;
      let s = () => {
        if (e.socket) e.socket.setKeepAlive(r, n || 0);
        else
          e.on("socket", (c) => {
            c.setKeepAlive(r, n || 0);
          });
      };
      if (o === 0) return (s(), 0);
      return I.setTimeout(s, o);
    },
    tt = 3000,
    en = (e, r, n = 0) => {
      let o = (s) => {
        let c = n - s,
          u = () => {
            (e.destroy(),
              r(
                Object.assign(
                  Error(
                    `@smithy/node-http-handler - the request socket timed out after ${n} ms of inactivity (configured by client requestHandler).`
                  ),
                  { name: "TimeoutError" }
                )
              ));
          };
        if (e.socket)
          (e.socket.setTimeout(c, u), e.on("close", () => e.socket?.removeListener("timeout", u)));
        else e.setTimeout(c, u);
      };
      if (0 < n && n < 6000) return (o(0), 0);
      return I.setTimeout(o.bind(null, n === 0 ? 0 : tt), tt);
    },
    rt = 6000;
  async function ct(e, r, n = rt, o = !1) {
    let s = r.headers ?? {},
      c = s.Expect || s.expect,
      u = -1,
      a = !0;
    if (!o && c === "100-continue")
      a = await Promise.race([
        new Promise((l) => {
          u = Number(I.setTimeout(() => l(!0), Math.max(rt, n)));
        }),
        new Promise((l) => {
          (e.on("continue", () => {
            (I.clearTimeout(u), l(!0));
          }),
            e.on("response", () => {
              (I.clearTimeout(u), l(!1));
            }),
            e.on("error", () => {
              (I.clearTimeout(u), l(!1));
            }));
        })
      ]);
    if (a) tn(e, r.body);
  }
  function tn(e, r) {
    if (r instanceof st.Readable) {
      r.pipe(e);
      return;
    }
    if (r) {
      if (Buffer.isBuffer(r) || typeof r === "string") {
        e.end(r);
        return;
      }
      let n = r;
      if (
        typeof n === "object" &&
        n.buffer &&
        typeof n.byteOffset === "number" &&
        typeof n.byteLength === "number"
      ) {
        e.end(Buffer.from(n.buffer, n.byteOffset, n.byteLength));
        return;
      }
      e.end(Buffer.from(r));
      return;
    }
    e.end();
  }
  var rn = 0;
  class le {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = !1;
    metadata = { handlerProtocol: "http/1.1" };
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new le(e);
    }
    static checkSocketUsage(e, r, n = console) {
      let { sockets: o, requests: s, maxSockets: c } = e;
      if (typeof c !== "number" || c === 1 / 0) return r;
      let u = 15000;
      if (Date.now() - u < r) return r;
      if (o && s)
        for (let a in o) {
          let l = o[a]?.length ?? 0,
            d = s[a]?.length ?? 0;
          if (l >= c && d >= 2 * c)
            return (
              n?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${l} and ${d} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
              Date.now()
            );
        }
      return r;
    }
    constructor(e) {
      this.configProvider = new Promise((r, n) => {
        if (typeof e === "function")
          e()
            .then((o) => {
              r(this.resolveDefaultConfig(o));
            })
            .catch(n);
        else r(this.resolveDefaultConfig(e));
      });
    }
    resolveDefaultConfig(e) {
      let {
          requestTimeout: r,
          connectionTimeout: n,
          socketTimeout: o,
          socketAcquisitionWarningTimeout: s,
          httpAgent: c,
          httpsAgent: u,
          throwOnRequestTimeout: a
        } = e || {},
        l = !0,
        d = 50;
      return {
        connectionTimeout: n,
        requestTimeout: r,
        socketTimeout: o,
        socketAcquisitionWarningTimeout: s,
        throwOnRequestTimeout: a,
        httpAgent: (() => {
          if (c instanceof ue.Agent || typeof c?.destroy === "function")
            return ((this.externalAgent = !0), c);
          return new ue.Agent({ keepAlive: !0, maxSockets: 50, ...c });
        })(),
        httpsAgent: (() => {
          if (u instanceof fe.Agent || typeof u?.destroy === "function")
            return ((this.externalAgent = !0), u);
          return new fe.Agent({ keepAlive: !0, maxSockets: 50, ...u });
        })(),
        logger: console
      };
    }
    destroy() {
      (this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy());
    }
    async handle(e, { abortSignal: r, requestTimeout: n } = {}) {
      if (!this.config) this.config = await this.configProvider;
      return new Promise((o, s) => {
        let c = this.config,
          u = void 0,
          a = [],
          l = async (A) => {
            (await u, a.forEach(I.clearTimeout), o(A));
          },
          d = async (A) => {
            (await u, a.forEach(I.clearTimeout), s(A));
          };
        if (r?.aborted) {
          let A = Error("Request aborted");
          ((A.name = "AbortError"), d(A));
          return;
        }
        let p = e.protocol === "https:",
          b = e.headers ?? {},
          h = (b.Expect ?? b.expect) === "100-continue",
          y = p ? c.httpsAgent : c.httpAgent;
        if (h && !this.externalAgent)
          y = new (p ? fe.Agent : ue.Agent)({ keepAlive: !1, maxSockets: 1 / 0 });
        a.push(
          I.setTimeout(
            () => {
              this.socketWarningTimestamp = le.checkSocketUsage(
                y,
                this.socketWarningTimestamp,
                c.logger
              );
            },
            c.socketAcquisitionWarningTimeout ??
              (c.requestTimeout ?? 2000) + (c.connectionTimeout ?? 1000)
          )
        );
        let E = ot.buildQueryString(e.query || {}),
          S = void 0;
        if (e.username != null || e.password != null) {
          let A = e.username ?? "",
            T = e.password ?? "";
          S = `${A}:${T}`;
        }
        let C = e.path;
        if (E) C += `?${E}`;
        if (e.fragment) C += `#${e.fragment}`;
        let w = e.hostname ?? "";
        if (w[0] === "[" && w.endsWith("]")) w = e.hostname.slice(1, -1);
        else w = e.hostname;
        let k = {
            headers: e.headers,
            host: w,
            method: e.method,
            path: C,
            port: e.port,
            agent: y,
            auth: S
          },
          _ = (p ? fe.request : ue.request)(k, (A) => {
            let T = new nt.HttpResponse({
              statusCode: A.statusCode || -1,
              reason: A.statusMessage,
              headers: it(A.headers),
              body: A
            });
            l({ response: T });
          });
        if (
          (_.on("error", (A) => {
            if (Yr.includes(A.code)) d(Object.assign(A, { name: "TimeoutError" }));
            else d(A);
          }),
          r)
        ) {
          let A = () => {
            _.destroy();
            let T = Error("Request aborted");
            ((T.name = "AbortError"), d(T));
          };
          if (typeof r.addEventListener === "function") {
            let T = r;
            (T.addEventListener("abort", A, { once: !0 }),
              _.once("close", () => T.removeEventListener("abort", A)));
          } else r.onabort = A;
        }
        let O = n ?? c.requestTimeout;
        (a.push(Vr(_, d, c.connectionTimeout)),
          a.push(Gr(_, d, O, c.throwOnRequestTimeout, c.logger ?? console)),
          a.push(en(_, d, c.socketTimeout)));
        let N = k.agent;
        if (typeof N === "object" && "keepAlive" in N)
          a.push(Zr(_, { keepAlive: N.keepAlive, keepAliveMsecs: N.keepAliveMsecs }));
        u = ct(_, e, O, this.externalAgent).catch((A) => (a.forEach(I.clearTimeout), s(A)));
      });
    }
    updateHttpClientConfig(e, r) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((n) => ({ ...n, [e]: r }))));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  class at {
    sessions = [];
    constructor(e) {
      this.sessions = e ?? [];
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift();
    }
    offerLast(e) {
      this.sessions.push(e);
    }
    contains(e) {
      return this.sessions.includes(e);
    }
    remove(e) {
      this.sessions = this.sessions.filter((r) => r !== e);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(e) {
      for (let r of this.sessions)
        if (r === e) {
          if (!r.destroyed) r.destroy();
        }
    }
  }
  class ut {
    constructor(e) {
      if (((this.config = e), this.config.maxConcurrency && this.config.maxConcurrency <= 0))
        throw RangeError("maxConcurrency must be greater than zero.");
    }
    config;
    sessionCache = new Map();
    lease(e, r) {
      let n = this.getUrlString(e),
        o = this.sessionCache.get(n);
      if (o) {
        let a = o.poll();
        if (a && !this.config.disableConcurrency) return a;
      }
      let s = Te.connect(n);
      if (this.config.maxConcurrency)
        s.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (a) => {
          if (a)
            throw Error(
              "Fail to set maxConcurrentStreams to " +
                this.config.maxConcurrency +
                "when creating new session for " +
                e.destination.toString()
            );
        });
      s.unref();
      let c = () => {
        (s.destroy(), this.deleteSession(n, s));
      };
      if (
        (s.on("goaway", c),
        s.on("error", c),
        s.on("frameError", c),
        s.on("close", () => this.deleteSession(n, s)),
        r.requestTimeout)
      )
        s.setTimeout(r.requestTimeout, c);
      let u = this.sessionCache.get(n) || new at();
      return (u.offerLast(s), this.sessionCache.set(n, u), s);
    }
    deleteSession(e, r) {
      let n = this.sessionCache.get(e);
      if (!n) return;
      if (!n.contains(r)) return;
      (n.remove(r), this.sessionCache.set(e, n));
    }
    release(e, r) {
      let n = this.getUrlString(e);
      this.sessionCache.get(n)?.offerLast(r);
    }
    destroy() {
      for (let [e, r] of this.sessionCache) {
        for (let n of r) {
          if (!n.destroyed) n.destroy();
          r.remove(n);
        }
        this.sessionCache.delete(e);
      }
    }
    setMaxConcurrentStreams(e) {
      if (e && e <= 0) throw RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = e;
    }
    setDisableConcurrentStreams(e) {
      this.config.disableConcurrency = e;
    }
    getUrlString(e) {
      return e.destination.toString();
    }
  }
  class Pe {
    config;
    configProvider;
    metadata = { handlerProtocol: "h2" };
    connectionManager = new ut({});
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new Pe(e);
    }
    constructor(e) {
      this.configProvider = new Promise((r, n) => {
        if (typeof e === "function")
          e()
            .then((o) => {
              r(o || {});
            })
            .catch(n);
        else r(e || {});
      });
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(e, { abortSignal: r, requestTimeout: n } = {}) {
      if (!this.config) {
        if (
          ((this.config = await this.configProvider),
          this.connectionManager.setDisableConcurrentStreams(
            this.config.disableConcurrentStreams || !1
          ),
          this.config.maxConcurrentStreams)
        )
          this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
      }
      let { requestTimeout: o, disableConcurrentStreams: s } = this.config,
        c = n ?? o;
      return new Promise((u, a) => {
        let l = !1,
          d = void 0,
          p = async (P) => {
            (await d, u(P));
          },
          b = async (P) => {
            (await d, a(P));
          };
        if (r?.aborted) {
          l = !0;
          let P = Error("Request aborted");
          ((P.name = "AbortError"), b(P));
          return;
        }
        let { hostname: h, method: y, port: E, protocol: S, query: C } = e,
          w = "";
        if (e.username != null || e.password != null) {
          let P = e.username ?? "",
            H = e.password ?? "";
          w = `${P}:${H}@`;
        }
        let k = `${S}//${w}${h}${E ? `:${E}` : ""}`,
          v = { destination: new URL(k) },
          _ = this.connectionManager.lease(v, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: s || !1
          }),
          O = (P) => {
            if (s) this.destroySession(_);
            ((l = !0), b(P));
          },
          N = ot.buildQueryString(C || {}),
          A = e.path;
        if (N) A += `?${N}`;
        if (e.fragment) A += `#${e.fragment}`;
        let T = _.request({
          ...e.headers,
          [Te.constants.HTTP2_HEADER_PATH]: A,
          [Te.constants.HTTP2_HEADER_METHOD]: y
        });
        if (
          (_.ref(),
          T.on("response", (P) => {
            let H = new nt.HttpResponse({
              statusCode: P[":status"] || -1,
              headers: it(P),
              body: T
            });
            if (((l = !0), p({ response: H }), s))
              (_.close(), this.connectionManager.deleteSession(k, _));
          }),
          c)
        )
          T.setTimeout(c, () => {
            T.close();
            let P = Error(`Stream timed out because of no activity for ${c} ms`);
            ((P.name = "TimeoutError"), O(P));
          });
        if (r) {
          let P = () => {
            T.close();
            let H = Error("Request aborted");
            ((H.name = "AbortError"), O(H));
          };
          if (typeof r.addEventListener === "function") {
            let H = r;
            (H.addEventListener("abort", P, { once: !0 }),
              T.once("close", () => H.removeEventListener("abort", P)));
          } else r.onabort = P;
        }
        (T.on("frameError", (P, H, G) => {
          O(Error(`Frame type id ${P} in stream id ${G} has failed with code ${H}.`));
        }),
          T.on("error", O),
          T.on("aborted", () => {
            O(
              Error(
                `HTTP/2 stream is abnormally aborted in mid-communication with result code ${T.rstCode}.`
              )
            );
          }),
          T.on("close", () => {
            if ((_.unref(), s)) _.destroy();
            if (!l) O(Error("Unexpected error: http2 request did not get a response"));
          }),
          (d = ct(T, e, c)));
      });
    }
    updateHttpClientConfig(e, r) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((n) => ({ ...n, [e]: r }))));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    destroySession(e) {
      if (!e.destroyed) e.destroy();
    }
  }
  class ft extends st.Writable {
    bufferedBytes = [];
    _write(e, r, n) {
      (this.bufferedBytes.push(e), n());
    }
  }
  var nn = (e) => {
      if (on(e)) return sn(e);
      return new Promise((r, n) => {
        let o = new ft();
        (e.pipe(o),
          e.on("error", (s) => {
            (o.end(), n(s));
          }),
          o.on("error", n),
          o.on("finish", function () {
            let s = new Uint8Array(Buffer.concat(this.bufferedBytes));
            r(s);
          }));
      });
    },
    on = (e) => typeof ReadableStream === "function" && e instanceof ReadableStream;
  async function sn(e) {
    let r = [],
      n = e.getReader(),
      o = !1,
      s = 0;
    while (!o) {
      let { done: a, value: l } = await n.read();
      if (l) (r.push(l), (s += l.length));
      o = a;
    }
    let c = new Uint8Array(s),
      u = 0;
    for (let a of r) (c.set(a, u), (u += a.length));
    return c;
  }
  cn.DEFAULT_REQUEST_TIMEOUT = rn;
  cn.NodeHttp2Handler = Pe;
  cn.NodeHttpHandler = le;
  cn.streamCollector = nn;
});
var Xt = x(function (B) {
  var Mn =
      (B && B.__createBinding) ||
      (Object.create
        ? function (e, r, n, o) {
            if (o === void 0) o = n;
            var s = Object.getOwnPropertyDescriptor(r, n);
            if (!s || ("get" in s ? !r.__esModule : s.writable || s.configurable))
              s = {
                enumerable: !0,
                get: function () {
                  return r[n];
                }
              };
            Object.defineProperty(e, o, s);
          }
        : function (e, r, n, o) {
            if (o === void 0) o = n;
            e[o] = r[n];
          }),
    jn =
      (B && B.__setModuleDefault) ||
      (Object.create
        ? function (e, r) {
            Object.defineProperty(e, "default", { enumerable: !0, value: r });
          }
        : function (e, r) {
            e.default = r;
          }),
    jt =
      (B && B.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (e != null) {
          for (var n in e)
            if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Mn(r, e, n);
        }
        return (jn(r, e), r);
      };
  Object.defineProperty(B, "__esModule", { value: !0 });
  B.req = B.json = B.toBuffer = void 0;
  var qn = jt(Fe("http")),
    Xn = jt(Fe("https"));
  async function qt(e) {
    let r = 0,
      n = [];
    for await (let o of e) ((r += o.length), n.push(o));
    return Buffer.concat(n, r);
  }
  B.toBuffer = qt;
  async function Kn(e) {
    let n = (await qt(e)).toString("utf8");
    try {
      return JSON.parse(n);
    } catch (o) {
      let s = o;
      throw ((s.message += ` (input: ${n})`), s);
    }
  }
  B.json = Kn;
  function zn(e, r = {}) {
    let o = ((typeof e === "string" ? e : e.href).startsWith("https:") ? Xn : qn).request(e, r),
      s = new Promise((c, u) => {
        o.once("response", c).once("error", u).end();
      });
    return ((o.then = s.then.bind(s)), o);
  }
  B.req = zn;
});
var zQo = x(function (M) {
  var zt =
      (M && M.__createBinding) ||
      (Object.create
        ? function (e, r, n, o) {
            if (o === void 0) o = n;
            var s = Object.getOwnPropertyDescriptor(r, n);
            if (!s || ("get" in s ? !r.__esModule : s.writable || s.configurable))
              s = {
                enumerable: !0,
                get: function () {
                  return r[n];
                }
              };
            Object.defineProperty(e, o, s);
          }
        : function (e, r, n, o) {
            if (o === void 0) o = n;
            e[o] = r[n];
          }),
    Wn =
      (M && M.__setModuleDefault) ||
      (Object.create
        ? function (e, r) {
            Object.defineProperty(e, "default", { enumerable: !0, value: r });
          }
        : function (e, r) {
            e.default = r;
          }),
    Wt =
      (M && M.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (e != null) {
          for (var n in e)
            if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) zt(r, e, n);
        }
        return (Wn(r, e), r);
      },
    Yn =
      (M && M.__exportStar) ||
      function (e, r) {
        for (var n in e)
          if (n !== "default" && !Object.prototype.hasOwnProperty.call(r, n)) zt(r, e, n);
      };
  Object.defineProperty(M, "__esModule", { value: !0 });
  M.Agent = void 0;
  var Vn = Wt(Fe("net")),
    Kt = Wt(Fe("http")),
    Yt = Fe("https");
  Yn(Xt(), M);
  var q = Symbol("AgentBaseInternalState");
  class Vt extends Kt.Agent {
    constructor(e) {
      super(e);
      this[q] = {};
    }
    isSecureEndpoint(e) {
      if (e) {
        if (typeof e.secureEndpoint === "boolean") return e.secureEndpoint;
        if (typeof e.protocol === "string") return e.protocol === "https:";
      }
      let { stack: r } = Error();
      if (typeof r !== "string") return !1;
      return r
        .split(
          `
`
        )
        .some((n) => n.indexOf("(https.js:") !== -1 || n.indexOf("node:https:") !== -1);
    }
    incrementSockets(e) {
      if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
      if (!this.sockets[e]) this.sockets[e] = [];
      let r = new Vn.Socket({ writable: !1 });
      return (this.sockets[e].push(r), this.totalSocketCount++, r);
    }
    decrementSockets(e, r) {
      if (!this.sockets[e] || r === null) return;
      let n = this.sockets[e],
        o = n.indexOf(r);
      if (o !== -1) {
        if ((n.splice(o, 1), this.totalSocketCount--, n.length === 0)) delete this.sockets[e];
      }
    }
    getName(e) {
      if (typeof e.secureEndpoint === "boolean" ? e.secureEndpoint : this.isSecureEndpoint(e))
        return Yt.Agent.prototype.getName.call(this, e);
      return super.getName(e);
    }
    createSocket(e, r, n) {
      let o = { ...r, secureEndpoint: this.isSecureEndpoint(r) },
        s = this.getName(o),
        c = this.incrementSockets(s);
      Promise.resolve()
        .then(() => this.connect(e, o))
        .then(
          (u) => {
            if ((this.decrementSockets(s, c), u instanceof Kt.Agent))
              try {
                return u.addRequest(e, o);
              } catch (a) {
                return n(a);
              }
            ((this[q].currentSocket = u), super.createSocket(e, r, n));
          },
          (u) => {
            (this.decrementSockets(s, c), n(u));
          }
        );
    }
    createConnection() {
      let e = this[q].currentSocket;
      if (((this[q].currentSocket = void 0), !e))
        throw Error("No socket was returned in the `connect()` function");
      return e;
    }
    get defaultPort() {
      return this[q].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
    }
    set defaultPort(e) {
      if (this[q]) this[q].defaultPort = e;
    }
    get protocol() {
      return this[q].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
    }
    set protocol(e) {
      if (this[q]) this[q].protocol = e;
    }
  }
  M.Agent = Vt;
});
var Gt = x(function (ee) {
  var Gn =
    (ee && ee.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(ee, "__esModule", { value: !0 });
  ee.parseProxyResponse = void 0;
  var Qn = Gn(cEn()),
    pe = (0, Qn.default)("https-proxy-agent:parse-proxy-response");
  function Jn(e) {
    return new Promise((r, n) => {
      let o = 0,
        s = [];
      function c() {
        let p = e.read();
        if (p) d(p);
        else e.once("readable", c);
      }
      function u() {
        (e.removeListener("end", a), e.removeListener("error", l), e.removeListener("readable", c));
      }
      function a() {
        (u(), pe("onend"), n(Error("Proxy connection ended before receiving CONNECT response")));
      }
      function l(p) {
        (u(), pe("onerror %o", p), n(p));
      }
      function d(p) {
        (s.push(p), (o += p.length));
        let b = Buffer.concat(s, o),
          h = b.indexOf(`\r
\r
`);
        if (h === -1) {
          (pe("have not received end of HTTP headers yet..."), c());
          return;
        }
        let y = b.slice(0, h).toString("ascii").split(`\r
`),
          E = y.shift();
        if (!E) return (e.destroy(), n(Error("No header received from proxy CONNECT response")));
        let S = E.split(" "),
          C = +S[1],
          w = S.slice(2).join(" "),
          k = {};
        for (let v of y) {
          if (!v) continue;
          let _ = v.indexOf(":");
          if (_ === -1)
            return (e.destroy(), n(Error(`Invalid header from proxy CONNECT response: "${v}"`)));
          let O = v.slice(0, _).toLowerCase(),
            N = v.slice(_ + 1).trimStart(),
            A = k[O];
          if (typeof A === "string") k[O] = [A, N];
          else if (Array.isArray(A)) A.push(N);
          else k[O] = N;
        }
        (pe("got proxy server response: %o %o", E, k),
          u(),
          r({ connect: { statusCode: C, statusText: w, headers: k }, buffered: b }));
      }
      (e.on("error", l), e.on("end", a), c());
    });
  }
  ee.parseProxyResponse = Jn;
});
var M3r = x(function (j) {
  var Zn =
      (j && j.__createBinding) ||
      (Object.create
        ? function (e, r, n, o) {
            if (o === void 0) o = n;
            var s = Object.getOwnPropertyDescriptor(r, n);
            if (!s || ("get" in s ? !r.__esModule : s.writable || s.configurable))
              s = {
                enumerable: !0,
                get: function () {
                  return r[n];
                }
              };
            Object.defineProperty(e, o, s);
          }
        : function (e, r, n, o) {
            if (o === void 0) o = n;
            e[o] = r[n];
          }),
    eo =
      (j && j.__setModuleDefault) ||
      (Object.create
        ? function (e, r) {
            Object.defineProperty(e, "default", { enumerable: !0, value: r });
          }
        : function (e, r) {
            e.default = r;
          }),
    er =
      (j && j.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (e != null) {
          for (var n in e)
            if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Zn(r, e, n);
        }
        return (eo(r, e), r);
      },
    tr =
      (j && j.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(j, "__esModule", { value: !0 });
  j.HttpsProxyAgent = void 0;
  var he = er(Fe("net")),
    Qt = er(Fe("tls")),
    to = tr(Fe("assert")),
    ro = tr(cEn()),
    rr = zQo(),
    nr = Fe("url"),
    or = Gt(),
    oe = (0, ro.default)("https-proxy-agent"),
    Jt = (e) => {
      if (e.servername === void 0 && e.host && !he.isIP(e.host))
        return { ...e, servername: e.host };
      return e;
    };
  class je extends rr.Agent {
    constructor(e, r) {
      super(r);
      ((this.options = { path: void 0 }),
        (this.proxy = typeof e === "string" ? new nr.URL(e) : e),
        (this.proxyHeaders = r?.headers ?? {}),
        oe("Creating new HttpsProxyAgent instance: %o", this.proxy.href));
      let n = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        o = this.proxy.port
          ? parseInt(this.proxy.port, 10)
          : this.proxy.protocol === "https:"
            ? 443
            : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...(r ? Zt(r, "headers") : null),
        host: n,
        port: o
      };
    }
    async connect(e, r) {
      let { proxy: n } = this;
      if (!r.host) throw TypeError('No "host" provided');
      let o;
      if (n.protocol === "https:")
        (oe("Creating `tls.Socket`: %o", this.connectOpts), (o = Qt.connect(Jt(this.connectOpts))));
      else (oe("Creating `net.Socket`: %o", this.connectOpts), (o = he.connect(this.connectOpts)));
      let s =
          typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders },
        c = he.isIPv6(r.host) ? `[${r.host}]` : r.host,
        u = `CONNECT ${c}:${r.port} HTTP/1.1\r
`;
      if (n.username || n.password) {
        let b = `${decodeURIComponent(n.username)}:${decodeURIComponent(n.password)}`;
        s["Proxy-Authorization"] = `Basic ${Buffer.from(b).toString("base64")}`;
      }
      if (((s.Host = `${c}:${r.port}`), !s["Proxy-Connection"]))
        s["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let b of Object.keys(s))
        u += `${b}: ${s[b]}\r
`;
      let a = or.parseProxyResponse(o);
      o.write(`${u}\r
`);
      let { connect: l, buffered: d } = await a;
      if ((e.emit("proxyConnect", l), this.emit("proxyConnect", l, e), l.statusCode === 200)) {
        if ((e.once("socket", oo), r.secureEndpoint))
          return (
            oe("Upgrading socket connection to TLS"),
            Qt.connect({ ...Zt(Jt(r), "host", "path", "port"), socket: o })
          );
        return o;
      }
      o.destroy();
      let p = new he.Socket({ writable: !1 });
      return (
        (p.readable = !0),
        e.once("socket", (b) => {
          (oe("Replaying proxy buffer for failed request"),
            (0, to.default)(b.listenerCount("data") > 0),
            b.push(d),
            b.push(null));
        }),
        p
      );
    }
  }
  je.protocols = ["http", "https"];
  j.HttpsProxyAgent = je;
  function oo(e) {
    e.resume();
  }
  function Zt(e, ...r) {
    let n = {},
      o;
    for (o in e) if (!r.includes(o)) n[o] = e[o];
    return n;
  }
});
var qr = /^(sk-ant-|sk-[\w-]{86}$)/,
  Xr = /sk-ant-|sk-[\w-]{86}(?![\w-])/;
var Kr = new Set(["authorization", "x-api-key"]);
function lci(e) {
  return typeof e === "string" && qr.test(e.trim());
}
function yar(e) {
  return typeof e === "string" && e.startsWith("fig_");
}
function zr([e, r]) {
  return (
    Kr.has(e.trim().toLowerCase()) &&
    yar(
      String(r)
        .trim()
        .replace(/^bearer\s+/i, "")
    )
  );
}
function n4t(e, r) {
  try {
    let n = r === void 0 ? [] : Symbol.iterator in r ? [...r] : Object.entries(r);
    return n.some(zr) ||
      [e, ...n.flatMap(([, o]) => [String(o), JSON.stringify(o)])].some((o) => Xr.test(o))
      ? void 0
      : e;
  } catch {
    return;
  }
}
var Ke = Ce(G0(), 1);
import { isIP as cr } from "net";
import { homedir as io } from "os";
var we = /(^|\.)(anthropic\.com|claude\.ai|claude\.com)$/i,
  dn = /(^|\.)downloads\.claude\.ai$/i;
function lt(e) {
  let r,
    n = e.startsWith("//") ? `https:${e}` : e;
  try {
    r = new URL(n).hostname;
  } catch {
    r = e.match(/^[^/:]+/)?.[0] ?? e;
  }
  return r.endsWith(".") ? r.slice(0, -1) : r;
}
function Afe(e) {
  return we.test(lt(e));
}
function o2(e) {
  return dn.test(lt(e));
}
var pn = [
    "ant.dev",
    "anthropic.dev",
    "clau.de",
    "claude-staging.ai",
    "claude.app",
    "claude.dev",
    "claude.site",
    "claudemcpcontent.com",
    "claudeusercontent.com",
    "datadoghq.com",
    "browser-intake-us5-datadoghq.com",
    "amazonaws.com",
    "amazonaws.com.cn",
    "amazonaws.eu",
    "api.aws",
    "api.amazonwebservices.com.cn",
    "api.amazonwebservices.eu",
    "c2s.ic.gov",
    "api.aws.ic.gov",
    "sc2s.sgov.gov",
    "api.aws.scloud",
    "cloud.adc-e.uk",
    "api.cloud-aws.adc-e.uk",
    "csp.hci.ic.gov",
    "api.aws.hci.ic.gov",
    "googleapis.com",
    "azure.com",
    "azure.us",
    "azure.cn"
  ],
  hn = new Set([
    "claude.fedstart.com",
    "claude-staging.fedstart.com",
    "claude.palantirfedstart.com",
    "claude-staging.palantirfedstart.com",
    "access-claude.palantirfedstart.com",
    "api.interface.feedback"
  ]),
  gn = new Set([
    "9fe882b0c4259bcf890a100ab941d8299915e50c2e982d9a4dc16a28285894f0",
    "c146462ee17c2c62a74202469d65a9e79e246f7f1b0b9db872e045f6331271c2"
  ]);
function dt(e) {
  return e.replace(/\.$/, "");
}
function pt(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function ht(e, r) {
  let n = pt(e);
  return n === null || dt(n.hostname) === r;
}
function mn(e) {
  let r = hd.atStartup;
  return Boolean(r) && ht(r ?? "", e) && (hd.isSessionIngressUrlSet || y$e());
}
function yn(e) {
  let r = Wr();
  return (
    r !== null &&
    (r.vouchedAtLogin === !0 ||
      (r.hostVerdict !== void 0 && "vouched" in r.hostVerdict) ||
      yar(r.jwt)) &&
    ht(r.url, e)
  );
}
function Cn(e) {
  let r = e.split(".");
  return (
    we.test(e) ||
    hn.has(e) ||
    pn.some((n) => e === n || e.endsWith(`.${n}`)) ||
    r.some((n, o) => gn.has(et(r.slice(o).join(".")))) ||
    mn(e) ||
    yn(e) ||
    Hrs(e)
  );
}
function bn(e) {
  let r = e.split(".");
  return r.length >= 2 && r.every((n) => n !== "") && !r.every((n) => /^\d+$/.test(n));
}
var En = Symbol("madeByParse");
function xse(e) {
  let r = e === void 0 ? null : pt(e);
  if (r === null || !["https:", "wss:"].includes(r.protocol)) return;
  let n = dt(r.hostname);
  return bn(n) && !Cn(n) ? { hostname: n, [En]: !0 } : void 0;
}
var gt = ["NODE_EXTRA_CA_CERTS", "SSL_CERT_FILE", "SSL_CERT_DIR"],
  Re = h2(Object.fromEntries([...gt, ...Cfe].map((e) => [e, D.rawStr()])), null);
function de() {
  return gt.some((e) => Re[e] !== void 0) || Cfe.some((e) => Re[e] !== void 0 && Re[e] !== "1");
}
var mt = ["bundled", "system"],
  Le = new Set();
function z(e) {
  if (Le.has(e)) return !1;
  return (Le.add(e), !0);
}
class Et {
  extraCACerts = null;
  certificates = Qr((e) => vn(this, e));
  runtimeStoreBundles = new WeakSet();
  customerLists = new WeakMap();
  trustOverrideSeen = !1;
  storeCertificates = void 0;
  tenantLists = new WeakMap();
  fromHost = null;
  warnedExtraCerts = new Set();
  refusesBundledFallback = !1;
}
var _n = new W(() => new Et());
function J() {
  return _n.of(U().host);
}
var OZ = IM(async () => {
  let e = J();
  if (((e.trustOverrideSeen ||= de()), e.fromHost)) return !1;
  let r = i.NODE_EXTRA_CA_CERTS;
  if (!r) {
    if (e.extraCACerts !== null) return ((e.extraCACerts = null), ke(e), !0);
    return !1;
  }
  try {
    let n = await ie().readFile(r, { encoding: "utf8" });
    if (e.extraCACerts?.path === r && e.extraCACerts.content === n) return !1;
    e.extraCACerts = { path: r, content: n };
  } catch (n) {
    if (
      (t(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${r}): ${n}`, { level: "error" }),
      z("read_failed"))
    )
      m("ca_certs_load", "read_failed");
    if (e.extraCACerts === null) return !1;
    e.extraCACerts = null;
  }
  return (ke(e), !0);
});
function An() {
  let e = i.CLAUDE_CODE_CERT_STORE;
  if (e) {
    let r = [];
    for (let n of e.split(",")) {
      let o = n.trim().toLowerCase();
      if (o === "bundled" || o === "system") {
        if (!r.includes(o)) r.push(o);
      } else if (o) {
        if (
          (t(`CA certs: unrecognized CLAUDE_CODE_CERT_STORE source '${o}', ignoring`, {
            level: "warn"
          }),
          z("parse_skip"))
        )
          f("ca_certs_load", "parse_skip");
      }
    }
    if (r.length === 0 && z("parse_all_invalid")) f("ca_certs_load", "parse_all_invalid");
    return r.length > 0 ? r : mt;
  }
  if (qYt("--use-system-ca") || qYt("--use-openssl-ca")) return ["system"];
  return mt;
}
function Sn(e, r = Date.now()) {
  let { X509Certificate: n } = Fe("crypto"),
    o = 0,
    s = e.filter((c) => {
      try {
        let u = new n(c),
          a = new Date(u.validTo).getTime();
        if (Number.isNaN(a) || a > r) return !0;
        return (o++, !1);
      } catch {
        return !0;
      }
    });
  if (o > 0) {
    if (
      (t(`CA certs: Dropped ${o} expired certificate(s) from system store`), z("expired_dropped"))
    )
      f("ca_certs_load", "expired_dropped", { dropped_count: o });
  }
  return s;
}
var He = [
    {
      certificate: "86a1ecba089c4a8d3bbe2734c612ba341d813e043cf9e8a862cd5c57a36bbe6b",
      key: "8d417db2dd8bf5e3084d1e3f196d583849d81bdd4c00c70b9d39369e96b8c782"
    },
    {
      certificate: "bc4d809b15189d78db3e1d8cf4f9726a795da1643ca5f1358e1ddb0edc0d7eb3",
      key: "eabc185c4e82d942b1a5978ba3c0181487d6b3b9974e5c49f72f6d0bd9637150"
    },
    {
      certificate: "40f6af0346a99aa1cd1d555a4e9cce62c7f9634603ee406615833dc8c8d00367",
      key: "376a1a7082a593dccc20d561d119e9ab8d30f11cc321d0a37fa41f0df284e01c"
    },
    {
      certificate: "125609aa301da0a249b97a8239cb6a34216f44dcac9f3954b14292f2e8c8608f",
      key: "b7408b4d2be0238ba37004dd34e276c6019bd2f24c9db7d4980f5f6c359a4bcc"
    },
    {
      certificate: "0d74ef67c88de3560365e225aef976f915e901347b73352d81ab5b4132bb2150",
      key: "941ea0cbce0926d9f34ec667cee669b61fd39f4338fa0b91048d5749d8880d25"
    },
    {
      certificate: "1997770a5633fb6d0440abf7d7e87e15d795f094f8c2959dadb00e785866bf48",
      key: "1cbbd4cb5eec6a287e34636c07c78378fa3eb3c6d3fb0563286870f283d87034"
    },
    {
      certificate: "1aa0c2709e831bd6e3b5129a00ba41f7eeef020872f1e6504bf0f6c3f24f3af3",
      key: "71f8adeec2b58adbdf6205c98dde928a4254b03695193d7f9a63a9a2588095d0"
    },
    {
      certificate: "46cd083b47e80402028df493960ea19c85fe851950d5165f1c7da4faa951e2f8",
      key: "3f83a68c4e80fc3f4f487e3105ad146498e56a09a3ea223b2a2982943f5995d7"
    },
    {
      certificate: "47911bc8f32a11b029e0bb10a348b459404b87731b870a2f3fa97b4705dc4c25",
      key: "33836758bd871b8d464bd669b0b81832880b81e363fb8cbb21ba8e843a138858"
    },
    {
      certificate: "75d2ce75979cf2a43b172c9f89f733dda2136031db4bbf3698b053714c077155",
      key: "11567f2aaf4325c4044880c6ed2b37f1ca2586d87059cf254934d97c4fee89a5"
    },
    {
      certificate: "7dd78d5f4f13459a83dff9abbba62edbaf6f2d102bf257fd712f4d9f2746ed8d",
      key: "c619e4780ed8e0abeda24ad732567de4383a7ea941338f6d1a7d1b49ac792fe9"
    },
    {
      certificate: "8abfc40faeaf13cbc8bb67b61c8d097a321cd2fee047c54256927e0f8bfeadfd",
      key: "b5ee1c904ac2aae39c92601ab466269c0c1cd0b96badbd251b0ed88e6c4ded68"
    },
    {
      certificate: "bbd8b3d745efb79198d93b9c482b9d934537325729ea2f02c129261f91be2e3d",
      key: "8dd3d055a7f47ffbca287285dcfd201dde92823ccc484d30f11cc40f079b3a3e"
    },
    {
      certificate: "be0c7a1e9ed59990c3060095c2d6a9fd55a6e9448728f3235c7c3c0108fa2f43",
      key: "e3212ac258d6d86f464c1150866a298c04a42783c1d17d7baa6a24ac0323f139"
    },
    {
      certificate: "c626090fd48ddbf2eee327e6a3d2ca78bd350c1faf0ceff015d834c3bd176ab0",
      key: "cf36ee3b065cb7405569f6c189b54c2f3d43042a995e3f5fcfccefe09ad73177"
    },
    {
      certificate: "cef71e70b7c29addf6c30cd19e614b38fd5f02a435a0eeddd0087e183d101a51",
      key: "ece28e35289ce8621c72407949e5050052ad4607cc332eaf9b546029aacbfb7a"
    },
    {
      certificate: "d7a7a0fb5d7e2731d771e9484ebcdef71d5f0c3e0a2948782bc83ee0ea699ef4",
      key: "bd153ed7b0434f6886b17bce8bbe84ed340c7132d702a8f4fa318f756ecbd6f3"
    },
    {
      certificate: "f2edaaff3d9b701fb4d14c9f285f8c0bad90fc3bcc1fa07d47f4718edaba34a5",
      key: "0a6c2b2ca5b364207954171987ac9d2178561569d8205457e77ca90c32ede282"
    },
    {
      certificate: "f76a0d440c418dc5b362be8e11e0a5d06023f4396093e4f455827bf55153d8a4",
      key: "5da77dc800f4c6fa93c6015aa6bd898fdb7c28d869e764571b25c00375a77755"
    }
  ],
  P3r = new Set(He.map((e) => e.certificate)),
  _ar = new Set(He.map((e) => e.key)),
  V = { certificates: P3r, keys: _ar };
function xn(e) {
  let r = He.filter((n) => !e.has(n.key));
  return { certificates: new Set(r.map((n) => n.certificate)), keys: new Set(r.map((n) => n.key)) };
}
var Tn = xn(
  new Set([
    "376a1a7082a593dccc20d561d119e9ab8d30f11cc321d0a37fa41f0df284e01c",
    "ece28e35289ce8621c72407949e5050052ad4607cc332eaf9b546029aacbfb7a"
  ])
);
function aEn(e) {
  let r = [],
    n = e.indexOf("-----BEGIN "),
    o = e.indexOf("-----END "),
    s = -1;
  while (o !== -1) {
    if (n !== -1 && n < o) {
      ((s = n), (n = e.indexOf("-----BEGIN ", n + 1)));
      continue;
    }
    let c = e.slice(o, o + 80),
      u = c.indexOf("-----", 9);
    if (
      u === -1 ||
      c.slice(0, u).includes(`
`)
    ) {
      o = e.indexOf("-----END ", o + 1);
      continue;
    }
    let a = o + u + 5;
    if (s !== -1) (r.push([s, a]), (s = -1));
    o = e.indexOf("-----END ", a);
  }
  return r;
}
var Oe = 8;
function yt(e) {
  return e === "NODE_EXTRA_CA_CERTS" ? " (the whole file)" : "";
}
function Ct(e, r, n) {
  let o = `${e}:${r}`;
  if (n.has(o)) return;
  n.add(o);
  let s = {
    block:
      "Claude Code ignored a block in the NODE_EXTRA_CA_CERTS file: the block holds a root certificate on the CLI's deny list, in a form Claude Code could not read. The other certificates in the file are still used.",
    file: "Claude Code ignored all of the NODE_EXTRA_CA_CERTS file: it holds a root certificate on the CLI's deny list, in a form Claude Code could not read. Run Claude Code with --debug to write its SHA-256 fingerprint to the debug log, then remove that certificate from the file.",
    damaged:
      "Claude Code used only the plain certificates it could read in full from the NODE_EXTRA_CA_CERTS file: the file holds a damaged copy of a root certificate on the CLI's deny list, such as one missing its END line. Run Claude Code with --debug to write its SHA-256 fingerprint to the debug log, then remove that copy from the file.",
    nested:
      "Claude Code ignored all of the NODE_EXTRA_CA_CERTS file: it holds root certificates on the CLI's deny list nested too deeply to cut out. Remove them so the rest of the file is used."
  }[e];
  console.error(s);
}
function _t(e, r) {
  let n = e.slice(e.indexOf("-----", 5) + 5, e.lastIndexOf("-----END"));
  return Buffer.from(n.replace(/[^A-Za-z0-9+/]/g, ""), "base64").length > r.raw.length;
}
function De(e) {
  let { X509Certificate: r, createHash: n } = Fe("crypto");
  return e.flatMap((o) => {
    let s;
    try {
      s = new r(o).raw;
    } catch (a) {
      return (t(`CA certs: A bundled root does not parse: ${a}`, { level: "error" }), []);
    }
    let c = n("sha256").update(s).digest("hex");
    if (!V.certificates.has(c)) return [];
    return [{ base64: s.subarray(0, s.length - (s.length % 3)).toString("base64"), hash: c }];
  });
}
function ne(e, r, n = V, o = new Set()) {
  let { X509Certificate: s, createHash: c, createPublicKey: u } = Fe("crypto"),
    a = (y) => c("sha256").update(y).digest("hex"),
    l = (y) => {
      try {
        return new s(y);
      } catch {
        return;
      }
    },
    d = (y, E = r) => {
      let S = y.replace(/\s+/g, "");
      return E.find(({ base64: C }) => S.includes(C));
    },
    p = (y, E) => {
      let S = a(y.raw);
      if (E.certificates.has(S)) return S;
      try {
        let C = y.publicKey;
        try {
          C = u({ key: C.export({ format: "jwk" }), format: "jwk" });
        } catch {}
        let w = C.export({ type: "spki", format: "der" });
        return E.keys.has(a(w)) ? S : void 0;
      } catch {
        return;
      }
    },
    b = (y) => {
      let E = y.slice(y.indexOf("-----", 5) + 5, y.lastIndexOf("-----END")),
        S = Buffer.from(E.replace(/[^A-Za-z0-9+/]/g, ""), "base64");
      if (S[0] !== 48 || S.length < 2) return;
      let C = (S[1] & 128) !== 0,
        w = C ? S[1] & 127 : 0;
      if ((C && (w === 0 || w > 4)) || S.length < 2 + w) return;
      let k = C ? S.readUIntBE(2, w) : S[1];
      if (2 + w + k > S.length) return;
      let v = S.subarray(0, 2 + w + k),
        _ = a(v);
      if (V.certificates.has(_)) return _;
      let O;
      try {
        O = new s(v);
      } catch {
        return;
      }
      return p(O, V);
    },
    h = [];
  for (let { pem: y, source: E } of e) {
    let S = E === "NODE_EXTRA_CA_CERTS" && n === V,
      C = y,
      w = 0,
      k = !1,
      v = new Set();
    for (; w <= Oe; w++) {
      let T = [],
        P = 0,
        H = 0,
        G = !1;
      for (let [Q, se] of aEn(C)) {
        let K = C.slice(Q, se),
          ce = l(K),
          te;
        if (ce) {
          let Y = p(ce, V);
          if (Y && !p(ce, n)) {
            let Ye = K.startsWith("-----BEGIN TRUSTED");
            if (!Ye) v.add(ce.toString());
            te = Ye
              ? `Left certificate ${Y} from ${E} out of the list for hosts that aren't ours: it is in a TRUSTED CERTIFICATE block, which the runtime does not load`
              : `Re-encoded certificate ${Y} from ${E}: the list for hosts that aren't ours trusts it, and its original text could stop that list from loading`;
          } else if (Y) te = `Dropped blocked certificate ${Y} from ${E}`;
        } else {
          let Y = d(K)?.hash ?? b(K);
          if (Y)
            ((k = !0),
              (te = `Dropped an unreadable block from ${E}: the block contains blocked certificate ${Y}`));
        }
        let We = Math.max(Q, H);
        if (((H = se), te && We >= P))
          (t(`CA certs: ${te}`), T.push(C.slice(P, We)), (P = se), (G = !0));
      }
      if (!G) break;
      (T.push(C.slice(P)), (C = T.join("")));
    }
    if (w > Oe) {
      if (
        (t(
          `CA certs: Ignored an entry from ${E}${yt(E)}: blocked certificates are nested in it more than ${Oe} deep`
        ),
        S)
      )
        Ct("nested", a(y), o);
      continue;
    }
    let _ = d(C),
      O = _
        ? [
            ...v,
            ...(C.includes("\x00")
              ? []
              : aEn(C).flatMap(([T, P], H, G) => {
                  let Q = C.slice(T, P),
                    K =
                      T >= (G[H - 1]?.[1] ?? 0) &&
                      (T === 0 ||
                        C[T - 1] ===
                          `
`) &&
                      /^(\r?\n|$)/.test(C.slice(P, P + 2)) &&
                      !Q.startsWith("-----BEGIN TRUSTED")
                        ? l(Q)
                        : void 0;
                  return K && !_t(Q, K) && !p(K, n) ? [K.toString().trim()] : [];
                }))
          ]
        : [],
      N = () => aEn(C).some(([T, P]) => l(C.slice(T, P))),
      A = _ ? O.length > 0 : w === 0 || v.size > 0 || N();
    if (_)
      t(
        `CA certs: ${E}${yt(E)} holds blocked certificate ${_.hash} outside any block; ${A ? `kept only the ${O.length} certificate(s) in it that parse, re-encoded` : "ignored it"}`
      );
    if (S && (_ || k)) Ct(A ? (_ ? "damaged" : "block") : "file", a(y), o);
    if (A)
      h.push(
        _
          ? O.join(`
`)
          : v.size > 0
            ? [...v, ...(N() ? [C.trim()] : [])].join(`
`)
            : C
      );
  }
  return h;
}
function Pn(e, r, n = V, o = De(r), s = new Set()) {
  let c = ne(e, o, n, s);
  if (c.length > 0) return c;
  let u = r.map((l) => ({ pem: l, source: "bundled" })),
    a = ne(u, o, n);
  if (a.length > 0) return a;
  throw Error(
    "No root certificates are left to trust: every root built into this runtime is on the CLI's deny list. Update Claude Code."
  );
}
function Jbe(e, r) {
  let n = Fe("tls");
  return ne([{ pem: e, source: r }], De(n.rootCertificates))[0];
}
function HQo(e, r) {
  let n = Jbe(e, r);
  if (n === void 0 || n === e) return n;
  let { kept: o, dropped: s } = At([n]);
  if (s > 0) t(`CA certs: Dropped ${s} certificate(s) from ${r} that do not chain to a root in it`);
  return o[0];
}
function z0() {
  let e = J();
  if (e.fromHost) return e.fromHost.certificates;
  let r = Boolean(i.CLAUDE_CODE_CLIENT_CERT);
  if (!e.certificates.cache.has(r)) e.certificates.cache.clear?.();
  return e.certificates(r);
}
function Jot(e) {
  let r = z0(),
    n = J();
  if (!e || !r || n.fromHost) return r;
  let o = n.customerLists.get(r);
  if (o) return o;
  t("CA certs: Building the list for hosts that aren't ours");
  let { list: s } = St(n, Boolean(i.CLAUDE_CODE_CLIENT_CERT), Tn);
  return (Object.freeze(s), n.customerLists.set(r, s), s);
}
function LQo(e) {
  return Array.isArray(e) && J().runtimeStoreBundles.has(e);
}
function NQo() {
  let e = J();
  return ((e.trustOverrideSeen ||= de()), e.trustOverrideSeen);
}
function bt(e) {
  return e
    .split(
      `
`
    )
    .map((r) =>
      r
        .split(" + ")
        .map((n) => n.replace(/\\0[9a-d]|[\s\\]/gi, "").toLowerCase())
        .sort()
        .join("+")
    )
    .join("");
}
function wn(e, r) {
  try {
    return e !== r && e.subject === r.issuer && r.certificate.verify(e.certificate.publicKey);
  } catch {
    return !0;
  }
}
function At(e) {
  let { X509Certificate: r } = Fe("crypto"),
    n = e.map((a) =>
      aEn(a).map(([l, d]) => {
        let p = a.slice(l, d);
        try {
          let b = new r(p),
            h = bt(b.subject),
            y = bt(b.issuer),
            E = _t(p, b),
            S = E || h === y;
          return {
            start: l,
            end: d,
            listed: { certificate: b, subject: h, issuer: y, anchor: S, kept: S },
            trustData: E
          };
        } catch {
          return { start: l, end: d, listed: void 0, trustData: !1 };
        }
      })
    ),
    o = n.flat().flatMap((a) => a.listed ?? []),
    s = new Map(o.filter((a) => !a.anchor).map((a) => [a, o.filter((l) => wn(l, a))]));
  for (let a = !0; a;) {
    a = !1;
    for (let [l, d] of s) if (!l.kept && d.some((p) => p.kept)) ((l.kept = !0), (a = !0));
  }
  let c = F(o, (a) => !a.kept);
  if (c === 0 || c === o.length) return { kept: [...e], dropped: 0 };
  return {
    kept: e.flatMap((a, l) => {
      let d = n[l];
      if (d.every((h) => h.listed?.kept !== !1)) return [a];
      if (!d.some((h) => h.listed?.kept)) return d.some((h) => h.listed) ? [] : [a];
      let p = d.map((h, y) => a.slice(d[y - 1]?.end ?? 0, h.start));
      if (!(
        d.every(
          (h, y) =>
            h.start >= (d[y - 1]?.end ?? 0) &&
            /(^|\n)$/.test(p[y]) &&
            /^(\r?\n|$)/.test(a.slice(h.end, h.end + 2))
        ) &&
        d.every((h) => h.listed && !h.trustData) &&
        !a.includes("\x00") &&
        [...p, a.slice(d.at(-1).end)].every(
          (h) => /^[\t\r\n\x20-\x7e]*$/.test(h) && !h.includes("-----")
        )
      )) {
        for (let h of d) if (h.listed) h.listed.kept = !0;
        return [a];
      }
      return [
        d.filter((h) => h.listed?.kept !== !1).map((h) => a.slice(h.start, h.end)).join(`
`)
      ];
    }),
    dropped: F(o, (a) => !a.kept)
  };
}
function St(e, r, n) {
  let o = An(),
    s = i.NODE_EXTRA_CA_CERTS,
    c = o.includes("bundled"),
    u = o.includes("system"),
    a = !c && e.refusesBundledFallback;
  t(`CA certs: stores=${o.join(",")}, extraCertsPath=${s}`);
  let l = Fe("tls"),
    d = l.getCACertificates;
  if (!c && u && !d) {
    if (
      (t(
        `CA certs: stores=system but system CA API unavailable${a ? "" : ", using bundled roots"}`
      ),
      z("system_api_unavailable"))
    )
      f("ca_certs_load", "system_api_unavailable");
  }
  let p = [],
    b = "every certificate in the system CA store is expired or on the deny list",
    h = (v, _) => {
      for (let O of _) p.push({ pem: O, source: v });
    },
    y = [],
    E = !1;
  if (c)
    (h("bundled", l.rootCertificates),
      t(`CA certs: Loaded ${l.rootCertificates.length} bundled root certificates`));
  if (u)
    try {
      let v = d?.("system");
      if (v && v.length > 0) {
        let _ = Sn(v);
        (h("system", _), t(`CA certs: Loaded ${_.length} system CA certificates`));
      } else if (
        (t(`CA certs: system store ${d ? "returned empty" : "unavailable"}`),
        (b = d
          ? "the system CA store is empty: check that this process can read its CA files (SSL_CERT_FILE, SSL_CERT_DIR, or the system's default paths)"
          : "the runtime has no system CA store"),
        !c && !a)
      )
        h("bundled", l.rootCertificates);
    } catch (v) {
      if (
        (t(`CA certs: Failed to load system CA certificates: ${v}`, { level: "error" }),
        z("system_store_failed"))
      )
        f("ca_certs_load", "system_store_failed");
      if (((b = "reading the system CA store failed"), !c && !a)) h("bundled", l.rootCertificates);
    }
  let S = De(l.rootCertificates),
    C = a ? ne(p, S, n, e.warnedExtraCerts) : Pn(p, l.rootCertificates, n, S, e.warnedExtraCerts);
  if (C.length === 0)
    throw new R(
      `No certificate authority to trust: CLAUDE_CODE_CERT_STORE=system (or NODE_OPTIONS --use-system-ca or --use-openssl-ca) leaves out the runtime's bundled roots, and ${b}. NODE_EXTRA_CA_CERTS only adds to the store; it does not count on its own.`,
      "No certificate authority to trust"
    );
  if (s && e.extraCACerts?.path === s)
    ((y = ne(
      [{ pem: e.extraCACerts.content, source: "NODE_EXTRA_CA_CERTS" }],
      S,
      n,
      e.warnedExtraCerts
    )),
      (E = y.length > 0),
      t(
        E
          ? `CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${s})`
          : `CA certs: Nothing from NODE_EXTRA_CA_CERTS (${s}) is left to append`
      ));
  let w = L([...C, ...y]),
    k = r ? { kept: w, dropped: 0 } : At(w);
  return {
    list: k.kept,
    dropped: k.dropped,
    storeCerts: C,
    appendedExtraCerts: E,
    wantsBundled: c,
    wantsSystem: u
  };
}
function vn(e, r) {
  ((e.trustOverrideSeen ||= de()), (e.storeCertificates = void 0));
  let n = i.NODE_EXTRA_CA_CERTS;
  if (n && e.extraCACerts?.path !== n)
    try {
      let d = ie().readFileSync(n, { encoding: "utf8" });
      e.extraCACerts = { path: n, content: d };
    } catch (d) {
      if (
        (t(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${n}): ${d}`, { level: "error" }),
        z("read_failed"))
      )
        m("ca_certs_load", "read_failed");
    }
  let {
    list: o,
    dropped: s,
    storeCerts: c,
    appendedExtraCerts: u,
    wantsBundled: a,
    wantsSystem: l
  } = St(e, r, V);
  if (s > 0) {
    if (
      (t(`CA certs: Dropped ${s} certificate(s) that do not chain to a root in the CA list`),
      z("issuer_missing_dropped"))
    )
      f("ca_certs_load", "issuer_missing_dropped", { dropped_count: s });
  }
  if (((e.storeCertificates = u ? L(c) : o), !u)) e.runtimeStoreBundles.add(Object.freeze(o));
  if (Le.size === 0 && z("ok"))
    g("ca_certs_load", {
      cert_count: o.length,
      store_bundled: a,
      store_system: l,
      extra_configured: Boolean(n)
    });
  return o;
}
function lEn() {
  ke(J());
}
function ke(e) {
  (e.certificates.cache.clear?.(), t("Cleared CA certificates cache"));
}
import { domainToASCII as xt } from "url";
var Tt = /[\u3002\uFF0E\uFF61]/g,
  Rn = /[\uFF1A\uFE55\uFE13]/g;
function r4t(e) {
  return e.replace(Tt, ".").replace(Rn, ":");
}
var Pt = /^(0|[1-9]\d{0,2})(\.(0|[1-9]\d{0,2})){3}$/,
  On = /^(0x[0-9a-f]*|\d+)$/,
  wt =
    /[\x00-\x20\x7f#%/<>?@\\^|]|[\u180E\u206A-\u206F\u{2F868}\u{2F874}\u{2F91F}\u{2F95F}\u{2F9BF}]/u,
  Ln =
    /[\u00AD\u034F\u180B-\u180D\u180F\u200B\u2060\u2064\uFE00-\uFE0F\uFEFF\u{1BCA0}-\u{1BCA3}\u{E0100}-\u{E01EF}]/gu;
function vt(e) {
  let r = e;
  if (r.includes("%"))
    try {
      r = decodeURIComponent(r);
    } catch {
      return e.normalize("NFKC").toLowerCase();
    }
  return r.replace(Ln, "").replace(Tt, ".").normalize("NFKC").toLowerCase().replace(/\.$/, "");
}
function o4t(e) {
  if (wt.test(e)) return "";
  let r = xt(e);
  if (!Pt.test(r)) return r;
  let n = vt(e);
  return n === r ? r : n;
}
function dci(e) {
  return !wt.test(e) && Pt.test(xt(e));
}
function cci(e) {
  let r = vt(e),
    n = r.split(".");
  return n.length <= 4 && n.every((o) => On.test(o)) ? r : null;
}
function Ie(e) {
  let r = r4t(e.toLowerCase()).replace(/\.+$/, ""),
    n = o4t(r);
  return n !== "" ? n.replace(/\.+$/, "") : r;
}
function Ot(e, r) {
  let n;
  if (e.startsWith("*.")) n = `*.${Ie(e.slice(2))}`;
  else n = Ie(e);
  let o = Ie(r);
  if (n === "*") return !0;
  if (n === o) return !0;
  if (n.startsWith("*.") && o.endsWith(n.slice(1))) return !0;
  return !1;
}
function $Qo(e, r) {
  return Ot(r, e);
}
function FQo(e, r) {
  for (let n of r) if (Ot(n, e)) return !0;
  return !1;
}
function fq(e, r) {
  let n = r.lastIndexOf("/");
  if (n < 0) return !1;
  let o = r.slice(0, n),
    s = r.slice(n + 1);
  if (!/^\d+$/.test(s)) return !1;
  let c = parseInt(s, 10),
    u = Rt(o);
  if (!u) return !1;
  if (u.zone) return !1;
  let a = Rt(e);
  if (!a) return !1;
  let l = Hn(a.bytes),
    d = u.bytes;
  if (l.length !== d.length) return !1;
  let p = d.length * 8;
  if (c < 0 || c > p) return !1;
  return kn(l, d, c);
}
function kn(e, r, n) {
  let o = n >> 3;
  for (let u = 0; u < o; u++) if (e[u] !== r[u]) return !1;
  let s = n & 7;
  if (s === 0) return !0;
  let c = (255 << (8 - s)) & 255;
  return ((e[o] ?? 0) & c) === ((r[o] ?? 0) & c);
}
function Hn(e) {
  if (e.length !== 16) return e;
  for (let r = 0; r < 10; r++) if (e[r] !== 0) return e;
  if (e[10] !== 255 || e[11] !== 255) return e;
  return e.slice(12);
}
function Rt(e) {
  if (e === "") return null;
  let r = "",
    n = e,
    o = e.indexOf("%");
  if (o >= 0) ((r = e.slice(o + 1)), (n = e.slice(0, o)));
  if (n.includes(":")) {
    let c = Dn(n);
    return c ? { bytes: c, zone: r } : null;
  }
  if (r) return null;
  let s = Lt(n);
  return s ? { bytes: s, zone: "" } : null;
}
function Lt(e) {
  let r = e.split(".");
  if (r.length !== 4) return null;
  let n = new Uint8Array(4);
  for (let o = 0; o < 4; o++) {
    let s = r[o];
    if (s === void 0 || s === "" || !/^\d{1,3}$/.test(s)) return null;
    if (s.length > 1 && s.startsWith("0")) return null;
    let c = parseInt(s, 10);
    if (c > 255) return null;
    n[o] = c;
  }
  return n;
}
function Dn(e) {
  let r = null,
    n = e,
    o = e.lastIndexOf(":");
  if (o >= 0 && e.slice(o + 1).includes(".")) {
    if (((r = Lt(e.slice(o + 1))), !r)) return null;
    n = e.slice(0, o + 1);
  }
  let s = n.split("::");
  if (s.length > 2) return null;
  let c = [],
    u = (l, d) => {
      if (l === "") return [];
      let p = l.split(":"),
        b = [];
      for (let h = 0; h < p.length; h++) {
        let y = p[h];
        if (y === "" && d && h === p.length - 1) continue;
        if (y === void 0 || y === "" || !/^[0-9a-fA-F]{1,4}$/.test(y)) return null;
        b.push(parseInt(y, 16));
      }
      return b;
    };
  if (s.length === 1) {
    let l = s[0] ?? "",
      d = u(l, r !== null);
    if (!d) return null;
    c.push(...d);
    let p = r ? 6 : 8;
    if (c.length !== p) return null;
  } else {
    let l = s[0] ?? "",
      d = s[1] ?? "",
      p = u(l, !1),
      b = u(d, r !== null);
    if (!p || !b) return null;
    let h = r ? 2 : 0,
      y = 8 - p.length - b.length - h;
    if (y < 1) return null;
    c.push(...p);
    for (let E = 0; E < y; E++) c.push(0);
    if ((c.push(...b), c.length + h !== 8)) return null;
  }
  let a = new Uint8Array(16);
  for (let l = 0; l < c.length; l++) {
    let d = c[l];
    if (d === void 0) return null;
    ((a[l * 2] = (d >> 8) & 255), (a[l * 2 + 1] = d & 255));
  }
  if (r) ((a[12] = r[0] ?? 0), (a[13] = r[1] ?? 0), (a[14] = r[2] ?? 0), (a[15] = r[3] ?? 0));
  return a;
}
import * as Be from "tls";
var Ue = ve({ list: void 0 }, (e) => {
  e.list = void 0;
});
function I3r(e) {
  return (e ?? []).flatMap((r) => aEn(r).map(([n, o]) => r.slice(n, o)));
}
function UQo(e) {
  return $e([e]);
}
function kt() {
  let e = z0();
  if (e === Ue.list || typeof Be.setDefaultCACertificates !== "function") return;
  let r = I3r(e);
  if (r.length === 0) return;
  if ($e(r)) {
    Ue.list = e;
    return;
  }
  let n = r.filter(UQo);
  if (
    (t(
      `CA certs: ${r.length - n.length} certificate(s) in the CA list could not be read and are skipped for connections that pass no CA. Check the NODE_EXTRA_CA_CERTS file, or the OS certificate store, for a damaged or cut-off certificate.`,
      { level: "warn" }
    ),
    n.length > 0 && $e(n))
  )
    Ue.list = e;
}
function $e(e) {
  try {
    return (Be.setDefaultCACertificates(e), !0);
  } catch {
    return !1;
  }
}
import { createPrivateKey as In, X509Certificate as Nn } from "crypto";
import { Agent as Ut } from "https";
import { isDeepStrictEqual as Un } from "util";
class $t {
  clientCert = null;
  clientKey = null;
  config = Qr(() => Bn(this));
  agents = new Map();
  fetchSessions = new Map();
}
var $n = new W(() => new $t());
function Z() {
  return $n.of(U().host);
}
var Me = "-----BEGIN ";
function Ft(e) {
  let r = e.lastIndexOf(Me);
  if (r === -1) return !1;
  let n = e.indexOf("-----", r + Me.length);
  if (n === -1) return !1;
  let o = e.slice(r + Me.length, n);
  return e.includes(`-----END ${o}-----`, n);
}
var TR = /-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g;
function Fn(e, r) {
  let n;
  try {
    n = In({
      key: r,
      ...(i.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE && {
        passphrase: i.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE
      })
    });
  } catch {
    return !1;
  }
  let o = !1,
    s = !1;
  for (let c of e.match(TR) ?? [])
    try {
      if (new Nn(c).checkPrivateKey(n)) return !1;
      o = !0;
    } catch {
      s = !0;
    }
  return o && !s;
}
var Dt = 1048576;
function Bt(e, r) {
  if (!e.isFile() || e.size > Dt)
    return (
      t(`mTLS: Ignoring ${r} \u2014 not a regular file or over ${Dt} bytes`, { level: "error" }),
      !1
    );
  return !0;
}
function It(e, r) {
  try {
    if (!Bt(ie().statSync(e), r)) return null;
    let n = ie().readFileSync(e, { encoding: "utf8" });
    if (!Ft(n))
      return (t(`mTLS: Ignoring incomplete ${r} \u2014 no PEM block`, { level: "error" }), null);
    return (t(`mTLS: Loaded ${r}`), { path: e, content: n });
  } catch (n) {
    return (t(`mTLS: Failed to load ${r}: ${n}`, { level: "error" }), null);
  }
}
async function Nt(e, r) {
  try {
    if (!Bt(await ie().stat(e), r)) return null;
    let n = await ie().readFile(e, { encoding: "utf8" });
    if (!Ft(n))
      return (t(`mTLS: Ignoring incomplete ${r} \u2014 no PEM block`, { level: "error" }), null);
    return (t(`mTLS: Loaded ${r}`), { path: e, content: n });
  } catch (n) {
    return (t(`mTLS: Failed to load ${r}: ${n}`, { level: "error" }), null);
  }
}
var pq = IM(async () => {
  let e = Z(),
    r = i.CLAUDE_CODE_CLIENT_CERT,
    n = i.CLAUDE_CODE_CLIENT_KEY,
    [o, s] = await Promise.all([
      r ? Nt(r, "client certificate from CLAUDE_CODE_CLIENT_CERT") : null,
      n ? Nt(n, "client key from CLAUDE_CODE_CLIENT_KEY") : null
    ]),
    c = Boolean((r && !o) || (n && !s)),
    u = Boolean(!c && o && s && Fn(o.content, s.content));
  if (u)
    t("mTLS: Ignoring mismatched client cert/key pair \u2014 mid-rotation read", {
      level: "error"
    });
  let a = c || u,
    l = r ? (a ? e.clientCert : o) : null,
    d = n ? (a ? e.clientKey : s) : null,
    p =
      e.clientCert?.path !== l?.path ||
      e.clientCert?.content !== l?.content ||
      e.clientKey?.path !== d?.path ||
      e.clientKey?.content !== d?.content;
  if (((e.clientCert = l), (e.clientKey = d), p)) Mt(e);
  return { changed: p, readFailed: a, mismatched: u };
});
function BQo() {
  let e = Z();
  return { certPath: e.clientCert?.path, keyPath: e.clientKey?.path };
}
function mA() {
  return Z().config();
}
function Bn(e) {
  let r = {},
    n = i.CLAUDE_CODE_CLIENT_CERT;
  if (n) {
    if (e.clientCert?.path !== n)
      e.clientCert = It(n, "client certificate from CLAUDE_CODE_CLIENT_CERT") ?? e.clientCert;
    if (e.clientCert?.path === n) r.cert = e.clientCert.content;
  }
  let o = i.CLAUDE_CODE_CLIENT_KEY;
  if (o) {
    if (e.clientKey?.path !== o)
      e.clientKey = It(o, "client key from CLAUDE_CODE_CLIENT_KEY") ?? e.clientKey;
    if (e.clientKey?.path === o) r.key = e.clientKey.content;
  }
  let s = i.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
  if (s) ((r.passphrase = s), t("mTLS: Using client key passphrase"));
  if (Object.keys(r).length === 0) return;
  return r;
}
function Qot(e) {
  let r = [
    i.https_proxy,
    i.HTTPS_PROXY,
    i.http_proxy,
    i.HTTP_PROXY,
    i.all_proxy,
    i.ALL_PROXY
  ].every((n) => !n || /^\s*http:/i.test(n));
  return Jot(r ? e : void 0);
}
function Zot(e) {
  let r = Z(),
    n = mA(),
    o = Qot(e),
    s = e ? "customer" : "strict",
    c = r.agents.get(s);
  if (c && c.config === n && c.ca === o) return c.agent;
  let u;
  if (n || o) {
    let a = { ...n, ...(o && { ca: o }), keepAlive: !0 };
    (t("mTLS: Creating HTTPS agent with custom certificates"), (u = new Ut(a)));
  }
  return (r.agents.set(s, { config: n, ca: o, agent: u }), u);
}
function jQo() {
  let e = mA(),
    r = z0();
  return new Ut({ ...e, ...(r && { ca: r }), keepAlive: !1 });
}
function lk(e) {
  let r = mA(),
    n = Qot(xse(e));
  if (!r && !n) return;
  return { ...r, ...(n && { ca: n }) };
}
function tP(e) {
  let r = mA(),
    n = Qot(xse(e));
  if (!r && !n) return {};
  return { tls: { ...r, ...(n && { ca: n }) } };
}
function WQo(e, r) {
  let n = typeof Bun > "u" ? void 0 : Bun.FetchSession;
  if (!n) return;
  let o = tP(r),
    s = Z().fetchSessions,
    c = xse(r) ? `${e}:customer` : e,
    u = s.get(c);
  if (u && Un(u.tls, o.tls)) return ((u.tls = o.tls), u.session);
  let a = new n(o);
  return (u?.session.close(), s.set(c, { tls: o.tls, session: a }), a);
}
function O3r() {
  Mt(Z());
}
function Mt(e) {
  (e.config.cache.clear?.(), e.agents.clear(), t("Cleared mTLS configuration cache"));
}
function GQo() {
  if (!mA()) return;
  if (i.NODE_EXTRA_CA_CERTS)
    t("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
}
var sr = Ce(M3r(), 1);
import { isIP as so } from "net";
import { checkServerIdentity as ir } from "tls";
function bar(e) {
  return { servername: so(e) ? "" : e, checkServerIdentity: (r, n) => ir(e, n) };
}
class sAt extends sr.HttpsProxyAgent {
  connect(...[e, r]) {
    if (!r.secureEndpoint) return super.connect(e, r);
    let n = r.servername || r.host || "",
      o = r.checkServerIdentity ?? ir;
    return super.connect(e, { ...r, checkServerIdentity: (s, c) => o(n, c) });
  }
}
class qe extends Error {
  connectStatus;
  headers;
  code = "ERR_PROXY_TUNNEL";
  constructor(e, r) {
    super("proxy refused the connection");
    this.connectStatus = e;
    this.headers = r;
    this.name = "ProxyConnectRefusedError";
  }
}
function s6(e) {
  return e === 0 ? "unreadable reply" : `HTTP ${e}`;
}
function OH(e) {
  for (let r = e, n = 0; n < 4; n++) {
    if (r instanceof qe) return r;
    if (typeof r !== "object" || r === null || !("cause" in r)) return;
    r = r.cause;
  }
  return;
}
class iAt extends sAt {
  async connect(...[e, r]) {
    let n,
      o = (u) => {
        if (u.statusCode !== 200) n = u;
      };
    e.once("proxyConnect", o);
    let s;
    try {
      s = await super.connect(e, r);
    } finally {
      e.removeListener("proxyConnect", o);
    }
    if (n === void 0) return s;
    s.destroy();
    let c = n.statusCode;
    throw new qe(Number.isInteger(c) && c >= 100 && c <= 599 ? c : 0, n.headers);
  }
}
class fr {
  keepAliveDisabled = !1;
  agents = new Map();
  proxyAuthHelperConfig = { helper: void 0, fromProjectOrLocal: !1, trustAccepted: () => !1 };
  proxyAuthCache = null;
  proxyAuthPendingChallenge = void 0;
}
var co = new W(() => new fr());
function X() {
  return co.of(U().host);
}
function KQo() {
  X().keepAliveDisabled = !0;
}
function ao(e) {
  switch (e.family) {
    case 0:
    case 4:
    case 6:
      return e.family;
    case "IPv6":
      return 6;
    case "IPv4":
    case void 0:
      return 4;
    default:
      throw Error(`Unsupported address family: ${e.family}`);
  }
}
var uo = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"];
function mq(e = process.env) {
  let r = uo.find((o) => e[o]),
    n = r ? e[r] : void 0;
  return r && n ? { value: n, source: r } : void 0;
}
function b4e(e = process.env) {
  return mq(e)?.value;
}
function gq(e) {
  try {
    let r = new URL(e);
    return r.host ? r : void 0;
  } catch {
    return;
  }
}
function s4t(e, r) {
  let n = r.replace(/\p{Cc}/gu, "");
  return `Invalid proxy URL in ${e}: "${n}" cannot be parsed as a URL.
Proxy settings must be a complete URL including the scheme, e.g. "http://proxy.example.com:8080".
Fix or unset ${e} and restart Claude Code.`;
}
var ar = ve(new Set(), (e) => e.clear());
function Cm(e = process.env) {
  let r = mq(e);
  if (!r) return;
  if (!gq(r.value)) {
    let n = `${r.source}=${r.value}`;
    if (!ar.has(n)) (ar.add(n), console.error(s4t(r.source, r.value)));
    return;
  }
  return r.value;
}
function D3r(e) {
  let { no_proxy: r, NO_PROXY: n } = e;
  if (r && n && r !== n) return `${r},${n}`;
  return r || n;
}
function S4e(e = process.env) {
  if (e.no_proxy === "*" || e.NO_PROXY === "*") return "*";
  return D3r(e);
}
function K_(e, r = S4e()) {
  if (!r) return !1;
  if (r === "*") return !0;
  try {
    let n = new URL(e),
      o = n.hostname.toLowerCase(),
      s = n.protocol === "https:" || n.protocol === "wss:",
      c = n.port || (s ? "443" : "80"),
      u = `${o}:${c}`;
    return r
      .split(/[,\s]+/)
      .filter(Boolean)
      .some((l) => {
        if (((l = l.toLowerCase().trim()), l.includes(":"))) return u === l;
        if (l.startsWith(".")) {
          let d = l;
          return o === l.substring(1) || o.endsWith(d);
        }
        return o === l;
      });
  } catch {
    return !1;
  }
}
function ur(e, r) {
  if (K_(e, r)) return !0;
  if (!r) return !1;
  let n;
  try {
    n = new URL(e).hostname.replace(/^\[|\]$/g, "");
  } catch {
    return !1;
  }
  if (cr(n) === 0) return !1;
  return r
    .split(/[,\s]+/)
    .filter(Boolean)
    .some((o) => {
      if (o.includes("/")) return fq(n, o);
      let s = cr(o);
      if (s === 0) return !1;
      return fq(n, `${o}/${s === 4 ? 32 : 128}`);
    });
}
function lr(e, r) {
  let n = mA(),
    o = z0(),
    s = H3r(e, {
      ...(n && { cert: n.cert, key: n.key, passphrase: n.passphrase }),
      ...(o && { ca: o })
    }),
    c = Jot(r);
  return ((s.options = { ...s.options, ...(c && { ca: c }) }), s);
}
function H3r(e, r) {
  let n = {
    ...r,
    headers: () => {
      let s = dr();
      return s ? { "Proxy-Authorization": s } : {};
    }
  };
  if (i.CLAUDE_CODE_PROXY_RESOLVES_HOSTS)
    n.lookup = (s, c, u) => {
      u(null, s, ao(c));
    };
  let o = new iAt(e, n);
  return ((o.options = { ...o.options, ...r }), o);
}
function fo(e) {
  let { agents: r } = X(),
    n = r.get(e);
  if (!n) ((n = lo(e)), r.set(e, n));
  return n;
}
function lo(e) {
  let r = Fe("undici"),
    n = mA(),
    o = z0(),
    s = {
      httpProxy: e,
      httpsProxy: e,
      noProxy: S4e({ no_proxy: i.no_proxy, NO_PROXY: i.NO_PROXY })
    };
  if (n || o) {
    let c = {
      ...(n && { cert: n.cert, key: n.key, passphrase: n.passphrase }),
      ...(o && { ca: o })
    };
    ((s.connect = c), (s.requestTls = c));
  }
  return new r.EnvHttpProxyAgent(s);
}
function sT(e) {
  let r = Cm();
  if (!r) return;
  try {
    if (iT(new URL(e).hostname)) return;
  } catch {}
  if (K_(e)) return;
  return r;
}
var po = 300000;
function dEn(e) {
  X().proxyAuthHelperConfig = e;
}
function MZ() {
  if (!i.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) return;
  return X().proxyAuthHelperConfig.helper;
}
function ze(e) {
  return MZ() !== void 0 && e.proxyAuthHelperConfig.fromProjectOrLocal;
}
function ho() {
  let e = i.CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS;
  if (e !== void 0 && e >= 0) return e;
  return po;
}
async function w4e() {
  let e = MZ();
  if (!e) return null;
  let r = X(),
    n = r.proxyAuthHelperConfig.sources === "personAndPolicy";
  if (n && ze(r)) return null;
  if (ze(r) && !ye() && !r.proxyAuthHelperConfig.trustAccepted())
    return (
      t(
        "proxyAuthHelper configured in project/local settings but workspace trust not yet accepted \u2014 skipping",
        { level: "warn" }
      ),
      null
    );
  let o = r.proxyAuthPendingChallenge;
  if (!o && r.proxyAuthCache && Date.now() - r.proxyAuthCache.timestamp < ho())
    return r.proxyAuthCache.value;
  r.proxyAuthPendingChallenge = void 0;
  let s = b4e(),
    c;
  try {
    c = s ? new URL(s).hostname : void 0;
  } catch {
    c = void 0;
  }
  let u = n ? io() : no(),
    a = await RM(e, {
      ...(u !== null && { cwd: u }),
      timeout: 30000,
      reject: !1,
      useToolMemoryCgroup: !1,
      env: {
        ...process.env,
        ...(s && { CLAUDE_CODE_PROXY_URL: s }),
        ...(c && { CLAUDE_CODE_PROXY_HOST: c }),
        ...(o && { CLAUDE_CODE_PROXY_AUTHENTICATE: o })
      }
    });
  if (a.failed || !a.stdout?.trim()) {
    let d = a.timedOut ? "timed out" : a.failed ? `exited ${a.exitCode}` : "did not return a value",
      p = a.stderr?.trim();
    return (
      console.error(`proxyAuthHelper failed: ${p ? `${d}: ${p}` : d}`),
      r.proxyAuthCache?.value ?? null
    );
  }
  let l = a.stdout.trim();
  return ((r.proxyAuthCache = { value: l, timestamp: Date.now() }), l);
}
function dr() {
  return X().proxyAuthCache?.value ?? null;
}
function est(e) {
  let r = X();
  ((r.proxyAuthCache = null), (r.proxyAuthPendingChallenge = e));
}
function VQo() {
  if (!MZ()) return;
  let e = X();
  if (ze(e) && !e.proxyAuthHelperConfig.trustAccepted()) return;
  w4e();
}
function oa(e) {
  let r = process.env.API_FORCE_IDLE_TIMEOUT,
    n = Ne(r) ? !0 : is(r) ? !1 : e.bodyIdleTimeout,
    o = e.forAnthropicAPI && n !== !0 && (e.hasBodyIdleWatchdog || n === !1),
    s = { ...(X().keepAliveDisabled && { keepalive: !1 }), ...(o && { timeout: !1 }) };
  if (e.forAnthropicAPI) {
    let u = i.ANTHROPIC_UNIX_SOCKET;
    if (u) return { ...s, unix: u };
  }
  let c = Cm();
  if (c) {
    if (e.url && K_(e.url)) return { ...s, ...tP(e.url) };
    let u = dr();
    return { ...s, proxy: u ? { url: c, headers: { "Proxy-Authorization": u } } : c, ...tP(e.url) };
  }
  if (e.fallbackProxy) {
    if (e.url && (ur(e.url, e.fallbackProxy.noProxy) || ur(e.url, S4e())))
      return { ...s, ...tP(e.url) };
    let u = tP(e.url);
    return {
      ...s,
      proxy: e.fallbackProxy.url,
      ...(e.fallbackProxy.ca ? { tls: { ...u.tls, ca: e.fallbackProxy.ca } } : u)
    };
  }
  return { ...s, ...tP(e.url) };
}
var ge,
  Xe = !1;
function go(e, r) {
  if (e.socketPath) return e;
  let n = Ht.getUri(e),
    o = xse(n4t(n, e.headers));
  if (r && !(n && K_(n))) {
    let s = r(o);
    return Object.assign(e, { httpsAgent: s, httpAgent: s });
  }
  return Object.assign(e, { httpsAgent: e.httpsAgent ?? Zot(o) });
}
function qS() {
  let e = mq(),
    r = Cm();
  if ((Zot(), kt(), ge !== void 0)) (Ht.interceptors.request.eject(ge), (ge = void 0));
  if (((Ht.defaults.proxy = void 0), e)) Ht.defaults.proxy = !1;
  let n = r
    ? Qr(
        (o) => lr(r, o),
        (o) => o !== void 0
      )
    : void 0;
  if (((ge = Ht.interceptors.request.use((o) => go(o, n))), r))
    (Fe("undici").setGlobalDispatcher(fo(r)), (Xe = !0));
  else if (Xe) {
    let o = Fe("undici");
    (o.setGlobalDispatcher(new o.Agent()), (Xe = !1));
  }
}
function v4e(e) {
  return i.AWS_ENDPOINT_URL_STS || i.AWS_ENDPOINT_URL || `https://sts.${e}.amazonaws.com`;
}
async function E4e(e) {
  let r = await DZ(e);
  if (!r) return {};
  let { defaultProvider: n } = await import("./chunk-cjd668y3.js");
  return {
    requestHandler: r,
    credentials: n({
      clientConfig: { requestHandler: r },
      parentClientConfig: { requestHandler: r, ...(e.region !== void 0 && { region: e.region }) }
    })
  };
}
async function DZ(e) {
  let r = Cm(),
    n = e.requestTimeoutMs !== void 0 && {
      requestTimeout: e.requestTimeoutMs,
      throwOnRequestTimeout: !0
    };
  if (!r || (e.url && K_(e.url))) {
    let s = Zot();
    if (!s) return null;
    return new Ke.NodeHttpHandler({ httpsAgent: s, ...n });
  }
  let o = lr(r);
  return new Ke.NodeHttpHandler({ httpAgent: o, httpsAgent: o, ...n });
}
function HZ() {
  (X().agents.clear(), t("Cleared proxy agent cache"));
}
export {
  h$e,
  ph,
  MQo,
  DQo,
  lci,
  yar,
  n4t,
  G0,
  Afe,
  o2,
  xse,
  OZ,
  P3r,
  _ar,
  aEn,
  Jbe,
  HQo,
  z0,
  Jot,
  LQo,
  NQo,
  lEn,
  r4t,
  o4t,
  dci,
  cci,
  $Qo,
  FQo,
  fq,
  I3r,
  UQo,
  TR,
  pq,
  BQo,
  mA,
  Qot,
  Zot,
  jQo,
  lk,
  tP,
  WQo,
  O3r,
  GQo,
  zQo,
  M3r,
  bar,
  sAt,
  s6,
  OH,
  iAt,
  KQo,
  mq,
  b4e,
  gq,
  s4t,
  Cm,
  D3r,
  S4e,
  K_,
  H3r,
  sT,
  dEn,
  MZ,
  w4e,
  est,
  VQo,
  oa,
  qS,
  v4e,
  E4e,
  DZ,
  HZ
};

//# sourceMappingURL=chunk-7zgz07kc.js.map
