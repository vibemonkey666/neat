// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { is } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { R, d, E } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { g, m } from "./chunk-brszmkb3.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { OZ, z0, pq, mA, gq, Cm, qS, HZ } from "./chunk-7zgz07kc.js";
import { RM } from "./chunk-8w2npe9a.js";
import { Qd } from "./chunk-nwy76t58.js";
import { Al } from "./chunk-a3zzd6aj.js";
import { wVt } from "./chunk-r00j5r9s.js";
import { od } from "./chunk-gvf25gp4.js";
import { sd } from "./chunk-6jbh8yja.js";
import { randomBytes as $e, timingSafeEqual as He } from "crypto";
import { open as De } from "fs/promises";
import { resolve as Ie } from "path";
import { createServer as Ye, connect as Be } from "net";
import { connect as Xe } from "tls";
var ce = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"],
  sDn = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND",
  iDn = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE",
  ze = "claude-self-hosted-runner";
class Y extends Error {
  constructor(e) {
    super(e);
    this.name = "ProxyAuthorizationMintError";
  }
}
var Me = 30000,
  ue = 16384,
  Fe = 30000,
  Ge = 30000,
  ie = 60000,
  Ve = 2000,
  Ee = 8,
  qe = 8192,
  ae = 16384,
  je = 256,
  We = 65536,
  ee = /[\x00-\x08\x0a-\x1f\x7f-\x9f]/,
  Ze = 4096,
  Ke = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+:/;
function X(e, n = 200) {
  return re(e.replace(/[\p{Cc}\p{Cs}]/gu, ""), n);
}
function Je(e) {
  if (e === void 0 || e === "") return;
  if (Buffer.byteLength(e, "latin1") > Ze) return;
  return ee.test(e) ? void 0 : e;
}
function xe(e) {
  let n = e.trim();
  if (!n) throw new Y("proxy authorization source returned an empty value");
  if (Buffer.byteLength(n) > ue) throw new Y(`proxy authorization value exceeds ${ue} bytes`);
  if (ee.test(n))
    throw new Y(
      "proxy authorization value must be a single header line (control characters such as CR/LF are not allowed)"
    );
  return n;
}
function Qe(e) {
  let { source: n } = e,
    s = e.commandTimeoutMs ?? Me,
    o;
  try {
    o = new URL(e.upstreamProxyUrl).hostname;
  } catch {
    o = void 0;
  }
  let u,
    c = async (P) => {
      if (n.kind === "file") {
        if (u)
          throw new Y(
            "proxy authorization file could not be read: an earlier read has not returned yet (stalled mount?); not issuing another"
          );
        let l,
          T = !1,
          B = (async () => {
            let H = await De(n.path, "r");
            try {
              let F = Buffer.alloc(ue + 1),
                { bytesRead: V } = await H.read(F, 0, F.length, 0);
              return F.subarray(0, V).toString("utf8");
            } finally {
              await H.close();
            }
          })(),
          N = () => {
            if (((T = !0), u === B)) u = void 0;
          };
        B.then(N, N);
        try {
          l = await Al(B, s, "read");
        } catch (H) {
          if (!T) u = B;
          throw new Y(`proxy authorization file could not be read: ${Qd(d(H))}`);
        }
        return xe(l);
      }
      let w = {
          ...(typeof e.commandEnv === "function" ? e.commandEnv() : (e.commandEnv ?? process.env)),
          CLAUDE_CODE_PROXY_URL: e.upstreamProxyUrl,
          ...(o && { CLAUDE_CODE_PROXY_HOST: o }),
          ...(P && { CLAUDE_CODE_PROXY_AUTHENTICATE: P })
        },
        h = await RM(n.command, {
          timeout: s,
          reject: !1,
          stdin: "ignore",
          useToolMemoryCgroup: !1,
          extendEnv: !1,
          env: w
        });
      if (h.failed) {
        let l = h.timedOut
            ? `timed out after ${s}ms`
            : `exited ${h.exitCode ?? h.signal ?? "abnormally"}`,
          T = h.stderr?.trim();
        throw new Y(`proxy authorization command ${l}${T ? `: ${re(Qd(T), 500)}` : ""}`);
      }
      return xe(h.stdout ?? "");
    },
    f = new Map();
  return {
    source: n.kind,
    mint(P) {
      let w = P === void 0 ? "plain" : `remint:${P.challenge ?? ""}`,
        h = f.get(w);
      if (!h)
        ((h = c(P?.challenge).finally(() => {
          f.delete(w);
        })),
          f.set(w, h));
      return h;
    }
  };
}
function j(e, n) {
  let s = n.toLowerCase();
  for (let o of e) {
    let u = o.indexOf(":");
    if (u > 0 && o.slice(0, u).trim().toLowerCase() === s) return o.slice(u + 1).trim();
  }
  return;
}
function Pe(e, n) {
  let s = new Set(n.map((o) => o.toLowerCase()));
  return e.filter((o) => {
    let u = o.indexOf(":");
    return u > 0 && s.has(o.slice(0, u).trim().toLowerCase());
  });
}
function K(e, n) {
  let s = new Set(n.map((o) => o.toLowerCase()));
  return e.filter((o) => {
    let u = o.indexOf(":");
    return !(u > 0 && s.has(o.slice(0, u).trim().toLowerCase()));
  });
}
var en = 16;
function de(e, n) {
  let s = Buffer.from(n, "utf8").toString("latin1"),
    o = [s],
    u = s.search(/[ \t]/);
  if (u > 0) {
    let c = s.slice(u).trim();
    if (c.length >= en) o.push(c);
  }
  return [e.startLine, ...e.headerLines].some((c) => o.some((f) => c.includes(f)));
}
var J = ["proxy-authenticate", "proxy-authentication-info"];
function Re(e, n, s, o, u) {
  let c = s,
    f = !1,
    P = (w) => {
      if (n.destroyed || !n.writable) return;
      if (w.length > c && !f) ((f = !0), u());
      if (c === 0 || w.length === 0) return;
      let h = w.length <= c ? w : w.subarray(0, c);
      if (((c -= h.length), !n.write(h) && c > 0)) (e.pause(), n.once("drain", () => e.resume()));
    };
  return (
    P(o),
    e.on("data", P),
    e.resume(),
    () => {
      e.removeListener("data", P);
    }
  );
}
function Q(e, n, s, o = Buffer.alloc(0)) {
  return new Promise((u, c) => {
    let f = o,
      P = !1,
      w = (N, H) => {},
      h = setTimeout(
        (N) => N(Error("timed out waiting for the request/response head")),
        s,
        (N) => w(N)
      ),
      l = (N) => {
        f = Buffer.concat([f, N]);
        let H = f.indexOf(`\r
\r
`);
        if (H === -1) {
          if (f.length > n) w(Error("request/response head exceeded the size limit"));
          return;
        }
        if (H > n) {
          w(Error("request/response head exceeded the size limit"));
          return;
        }
        let F = f.subarray(0, H).toString("latin1"),
          [V = "", ...q] = F.split(`\r
`);
        w(null, { startLine: V, headerLines: q, rest: f.subarray(H + 4) });
      },
      T = () => w(Error("connection closed before the head was complete")),
      B = (N) => w(N);
    if (
      ((w = (N, H) => {
        if (
          ((P = !0),
          clearTimeout(h),
          e.removeListener("data", l),
          e.removeListener("close", T),
          e.removeListener("error", B),
          e.pause(),
          N)
        )
          c(N);
        else u(H);
      }),
      e.on("data", l),
      e.once("close", T),
      e.once("error", B),
      f.length > 0)
    )
      l(Buffer.alloc(0));
    if (!P) e.resume();
  });
}
function S(e, n) {
  if (e.destroyed) return;
  if ((e.resume(), e.writable)) e.end(n);
  setTimeout((s) => s.destroy(), Ve, e).unref();
}
function z(e) {
  return Buffer.from(e, "latin1");
}
function nn() {
  return `HTTP/1.1 407 Proxy Authentication Required\r
Proxy-Authenticate: Basic realm="${ze}"\r
Content-Length: 0\r
Connection: close\r
\r
`;
}
function I(e, n, s) {
  return (
    `HTTP/1.1 ${e} ${n}\r
Content-Type: text/plain\r
Content-Length: ${Buffer.byteLength(s)}\r
Connection: close\r
\r
` + s
  );
}
function tn(e) {
  let n = e.startLine.match(/^([A-Z]+)\s+http:\/\/([^/?#\s]+)(\S*)\s+(HTTP\/1\.[01])$/i);
  if (!n) return;
  let [, s, o, u, c] = n,
    f = o.match(/^(\[[0-9A-Fa-f:.]+\]|[^:@[\]]+)(?::(\d{1,5}))?$/);
  if (!f || (f[2] !== void 0 && Number(f[2]) > 65535)) return;
  let P = `${f[1]}:${f[2] ?? "80"}`,
    w = u.startsWith("/") ? u : `/${u}`,
    h = e.headerLines.filter((l) => {
      let T = l.slice(0, l.indexOf(":")).trim().toLowerCase();
      return !T.startsWith("proxy-") && T !== "connection" && T !== "keep-alive";
    });
  if (j(h, "host") === void 0) h.push(`Host: ${o}`);
  return {
    target: P,
    head: z(
      `${s} ${w} ${c}\r
` +
        h
          .map(
            (l) =>
              l +
              `\r
`
          )
          .join("") +
        `Connection: close\r
\r
`
    )
  };
}
class Z extends Error {
  constructor() {
    super("client closed before the upstream connection was ready");
    this.name = "ClientGoneError";
  }
}
function we(e, n) {
  let s = !1,
    o = n.length > 0 ? [n] : [],
    u = n.length,
    c = (P) => {
      if ((o.push(P), (u += P.length), u > We)) e.pause();
    },
    f = () => {
      s = !0;
    };
  return (
    e.on("data", c),
    e.once("end", f),
    e.once("close", f),
    e.resume(),
    {
      gone: () => s || e.destroyed,
      release: () => {
        e.removeListener("data", c);
        let P = o.length === 1 ? o[0] : Buffer.concat(o);
        return ((o = []), (u = 0), P);
      }
    }
  );
}
async function le(e) {
  let n = new URL(e.upstreamProxyUrl),
    s = n.protocol === "https:";
  if (n.protocol !== "http:" && !s)
    throw Error("the upstream proxy URL must be http:// or https://");
  let o = n.hostname.replace(/^\[(.*)\]$/, "$1"),
    u = n.port ? Number(n.port) : s ? 443 : 80,
    c = e.logLabel ?? "runner:egress-proxy";
  if (n.username || n.password)
    e.onStatus(
      `[${c}] note: the upstream proxy URL carries user:password credentials; they are replaced by the minted Proxy-Authorization value on every request to the upstream proxy`
    );
  let f = $e(24).toString("base64url"),
    P = Buffer.from("Basic " + Buffer.from(`runner:${f}`).toString("base64")),
    w = (r) => {
      let a = j(r, "proxy-authorization");
      if (a === void 0) return !1;
      let x = Buffer.from(a);
      return x.length === P.length && He(x, P);
    },
    h = (r) => e.onDebug?.(`[${c}] ${r}`),
    l = (r) => e.onStatus(`[${c}] ${r}`),
    T = new Set(),
    B = (r) => {
      (T.add(r), r.on("error", (a) => h(`socket: ${d(a)}`)), r.once("close", () => T.delete(r)));
    },
    N = () => {
      e.onUpstreamFailure?.().catch((r) => h(`reload after a failed upstream connection: ${d(r)}`));
    },
    H = () =>
      new Promise((r, a) => {
        let x = s
          ? Xe({
              host: o,
              port: u,
              servername: rn(o) ? void 0 : o,
              ...(typeof e.upstreamTls === "function" ? e.upstreamTls() : e.upstreamTls)
            })
          : Be({ host: o, port: u });
        B(x);
        let A = s ? "secureConnect" : "connect",
          v = (y) => {},
          p = setTimeout(
            (y) => y(Error("timed out connecting to the upstream proxy")),
            Ge,
            (y) => v(y)
          ),
          L = () => v(null),
          C = (y) => v(y),
          k = () => v(Error("upstream proxy closed the connection during connect"));
        ((v = (y) => {
          if (
            (clearTimeout(p),
            x.removeListener(A, L),
            x.removeListener("error", C),
            x.removeListener("close", k),
            y)
          )
            (x.destroy(), N(), a(y));
          else r(x);
        }),
          x.once(A, L),
          x.once("error", C),
          x.once("close", k));
      }),
    F = (r, a) => {
      (r.pipe(a), a.pipe(r));
      let x = () => {
        (r.destroy(), a.destroy());
      };
      (r.on("error", x),
        a.on("error", x),
        r.on("close", () => S(a, "")),
        a.on("close", () => S(r, "")),
        r.resume(),
        a.resume());
    },
    V = async (r, a, x, A) => {
      let v = await e.minter.mint(x);
      if (A()) throw new Z();
      let p = await H();
      if (A()) throw (p.destroy(), new Z());
      try {
        p.write(
          Buffer.concat([
            z(`CONNECT ${r} HTTP/1.1\r
Host: ${r}\r
`),
            Buffer.from(`Proxy-Authorization: ${v}\r
`),
            z(
              a
                .map(
                  (C) =>
                    C +
                    `\r
`
                )
                .join("") +
                `\r
`
            )
          ])
        );
        let L = await Q(p, ae, ie);
        if (A()) throw new Z();
        return { up: p, head: L, value: v };
      } catch (L) {
        if ((p.destroy(), !(L instanceof Z))) N();
        throw L;
      }
    },
    q = (r) => {
      let a = r.startLine.match(/^HTTP\/1\.[01]\s+(\d{3})(?=\s|$)/);
      return a ? Number(a[1]) : 0;
    },
    me = (r, a, x) => {
      if (a instanceof Z || r.destroyed) {
        r.destroy();
        return;
      }
      let A = a instanceof Y ? a.message : `upstream proxy connection failed: ${Qd(d(a))}`;
      (l(`${A} (${X(x)} answered 502)`),
        S(
          r,
          I(
            502,
            "Bad Gateway",
            a instanceof Y
              ? `proxy authorization could not be obtained (see the runner log)
`
              : `upstream proxy connection failed (see the runner log)
`
          )
        ));
    },
    Ue = (r, a, x, A) => {
      (a.destroy(),
        l(
          `upstream proxy rejected the minted Proxy-Authorization for ${X(x)} (${X(A)}); answering the client 502`
        ),
        S(
          r,
          I(
            502,
            "Bad Gateway",
            `upstream proxy rejected the runner-minted Proxy-Authorization (407); see the runner log
`
          )
        ));
    },
    te = (r, a, x, A) => {
      (a.destroy(),
        l(
          `upstream response to ${X(x)} (status ${A}) reflected the minted Proxy-Authorization in its head; withheld, answering the client 502`
        ),
        S(
          r,
          I(
            502,
            "Bad Gateway",
            `upstream proxy response withheld: its head reflected the runner-minted Proxy-Authorization (see the runner log)
`
          )
        ));
    },
    ge = async (r, a, x, A, v) => {
      let p = Pe(x.headerLines, ["user-agent"]),
        L = () => A.gone();
      try {
        let C = await V(a, p, void 0, L),
          k = q(C.head);
        if (k === 407) {
          let D = Je(j(C.head.headerLines, "proxy-authenticate"));
          (C.up.destroy(),
            h(`upstream answered 407 for CONNECT ${a}; re-minting once`),
            (C = await V(a, p, { challenge: D }, L)),
            (k = q(C.head)));
        }
        let { up: y, head: b, value: se } = C;
        if (k !== 200 && de(b, se)) {
          te(r, y, `CONNECT ${a}`, k);
          return;
        }
        if (k === 407) {
          Ue(r, y, `CONNECT ${a}`, b.startLine);
          return;
        }
        if (k < 100) {
          (y.destroy(),
            l(
              `upstream proxy sent an unparseable reply to CONNECT ${X(a)}; answering the client 502`
            ),
            S(
              r,
              I(
                502,
                "Bad Gateway",
                `unparseable reply from upstream proxy
`
              )
            ));
          return;
        }
        if (k === 200) {
          if ((h(`tunnel established: CONNECT ${a}`), v === void 0))
            r.write(`HTTP/1.1 200 Connection Established\r
\r
`);
          if (b.rest.length > 0) r.write(b.rest);
          if (v !== void 0) {
            y.write(v.head);
            let _e = Re(r, y, v.bodyLength, A.release(), () =>
              h(
                "client sent bytes past its declared Content-Length on a plain HTTP request; not forwarded"
              )
            );
            (y.pipe(r),
              y.once("close", () => {
                (_e(), S(r, ""));
              }),
              r.once("close", () => {
                (_e(), y.destroy());
              }));
            return;
          }
          let D = A.release();
          if (D.length > 0) y.write(D);
          F(r, y);
          return;
        }
        (y.destroy(), l(`upstream proxy refused CONNECT ${X(a)}: ${X(b.startLine)}`));
        let M = K(b.headerLines, [
          "connection",
          "proxy-connection",
          "keep-alive",
          "transfer-encoding",
          "content-length",
          ...J
        ]);
        S(
          r,
          z(
            b.startLine +
              `\r
` +
              M.map(
                (D) =>
                  D +
                  `\r
`
              ).join("") +
              `Content-Length: 0\r
Connection: close\r
\r
`
          )
        );
      } catch (C) {
        me(r, C, `CONNECT ${a}`);
      }
    },
    be = async (r, a, x) => {
      let A = K(a.headerLines, [
          "proxy-authorization",
          "proxy-connection",
          "connection",
          "keep-alive",
          "upgrade",
          "te",
          "trailer",
          "max-forwards"
        ]),
        v = Number(j(a.headerLines, "content-length") ?? "0"),
        p,
        L = () => {},
        C = () => {
          (L(), p?.destroy(), r.destroy());
        };
      try {
        {
          let k = await e.minter.mint();
          if (x.gone()) {
            C();
            return;
          }
          if (((p = await H()), x.gone())) {
            C();
            return;
          }
          if (
            (p.write(
              Buffer.concat([
                z(
                  a.startLine +
                    `\r
` +
                    A.map(
                      (D) =>
                        D +
                        `\r
`
                    ).join("")
                ),
                Buffer.from(`Proxy-Authorization: ${k}\r
`),
                z(`Connection: close\r
\r
`)
              ])
            ),
            v > 0)
          )
            L = Re(r, p, v, x.release(), () =>
              h(
                "client sent bytes past its declared Content-Length on a plain HTTP request; not forwarded"
              )
            );
          let y = await Q(p, ae, ie),
            b = q(y),
            se = 0;
          while (b >= 100 && b < 200 && b !== 101) {
            if (x.gone()) {
              C();
              return;
            }
            if (de(y, k)) {
              (L(), te(r, p, "a plain HTTP request", b));
              return;
            }
            if (++se > Ee) {
              (p.destroy(),
                L(),
                l(
                  `upstream sent more than ${Ee} interim responses to a plain HTTP request; answering the client 502`
                ),
                S(
                  r,
                  I(
                    502,
                    "Bad Gateway",
                    `too many interim responses from upstream
`
                  )
                ));
              return;
            }
            (r.write(
              z(
                y.startLine +
                  `\r
` +
                  K(y.headerLines, J)
                    .map(
                      (D) =>
                        D +
                        `\r
`
                    )
                    .join("") +
                  `\r
`
              )
            ),
              (y = await Q(p, ae, ie, y.rest)),
              (b = q(y)));
          }
          if (x.gone()) {
            C();
            return;
          }
          if (de(y, k)) {
            (L(), te(r, p, "a plain HTTP request", b));
            return;
          }
          if (b === 407) {
            (L(),
              p.destroy(),
              l(
                `upstream answered 407 to a plain HTTP request (${X(y.startLine)}); it may have come from the destination site rather than the proxy, and re-mint is only attempted for CONNECT tunnels; answering the client 502`
              ),
              S(
                r,
                I(
                  502,
                  "Bad Gateway",
                  `upstream answered 407 (Proxy Authentication Required) to a plain HTTP request; it may have come from the destination site rather than the proxy; see the runner log
`
                )
              ));
            return;
          }
          if (b < 100) {
            (p.destroy(),
              L(),
              l(
                "upstream proxy sent an unparseable reply to a plain HTTP request; answering the client 502"
              ),
              S(
                r,
                I(
                  502,
                  "Bad Gateway",
                  `unparseable reply from upstream proxy
`
                )
              ));
            return;
          }
          if (b >= 400) {
            (p.destroy(),
              L(),
              l(
                `upstream answered ${X(y.startLine)} to a plain HTTP request; error body withheld from the client`
              ),
              S(
                r,
                z(
                  y.startLine +
                    `\r
` +
                    K(y.headerLines, [
                      "connection",
                      "proxy-connection",
                      "keep-alive",
                      "transfer-encoding",
                      "content-length",
                      ...J
                    ])
                      .map(
                        (D) =>
                          D +
                          `\r
`
                      )
                      .join("") +
                    `Content-Length: 0\r
Connection: close\r
\r
`
                )
              ));
            return;
          }
          if (
            (r.write(
              z(
                y.startLine +
                  `\r
` +
                  K(y.headerLines, ["connection", "proxy-connection", "keep-alive", ...J])
                    .map(
                      (D) =>
                        D +
                        `\r
`
                    )
                    .join("") +
                  `Connection: close\r
\r
`
              )
            ),
            y.rest.length > 0)
          )
            r.write(y.rest);
          let M = p;
          (M.pipe(r),
            M.on("error", () => r.destroy()),
            r.on("error", () => M.destroy()),
            M.on("close", () => S(r, "")),
            r.on("close", () => M.destroy()),
            M.resume(),
            r.resume());
        }
      } catch (k) {
        (L(), p?.destroy(), me(r, k, "plain HTTP request"));
      }
    },
    oe = 0,
    ke = e.maxPendingClients ?? je,
    G = Ye({ pauseOnConnect: !0 }, (r) => {
      if ((B(r), r.on("error", () => r.destroy()), oe >= ke)) {
        (h("too many connections still sending a request head; refusing one"), r.destroy());
        return;
      }
      (oe++,
        (async () => {
          let a;
          try {
            a = await Q(r, qe, Fe);
          } catch (p) {
            if ((h(`client: ${d(p)}`), !r.destroyed && r.writable && r.bytesRead > 0))
              S(
                r,
                I(
                  400,
                  "Bad Request",
                  `malformed proxy request
`
                )
              );
            else r.destroy();
            return;
          } finally {
            oe--;
          }
          if (ee.test(a.startLine) || a.headerLines.some((p) => ee.test(p) || !Ke.test(p))) {
            S(
              r,
              I(
                400,
                "Bad Request",
                `malformed header line
`
              )
            );
            return;
          }
          let x = a.startLine.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i),
            A = !x && /^[A-Z]+\s+http:\/\/\S+\s+HTTP\/1\.[01]$/i.test(a.startLine);
          if (!x && !A) {
            S(
              r,
              I(
                400,
                "Bad Request",
                `this is a forward proxy: expected CONNECT host:port or an absolute-form http:// request
`
              )
            );
            return;
          }
          if (!w(a.headerLines)) {
            (h(
              `client ${x ? "CONNECT" : "request"} without valid loopback credentials \u2192 407 challenge`
            ),
              S(r, nn()));
            return;
          }
          if (A && /^TRACE\s/i.test(a.startLine)) {
            S(
              r,
              I(
                405,
                "Method Not Allowed",
                `TRACE is not forwarded by this proxy
`
              )
            );
            return;
          }
          if (A) {
            let p = Pe(a.headerLines, ["content-length"]);
            if (j(a.headerLines, "transfer-encoding") !== void 0) {
              S(
                r,
                I(
                  501,
                  "Not Implemented",
                  `request bodies with Transfer-Encoding are not forwarded by this proxy; send a Content-Length
`
                )
              );
              return;
            }
            if (
              p.length > 1 ||
              (p.length === 1 && !/^content-length:[ \t]*\d{1,15}[ \t]*$/i.test(p[0]))
            ) {
              S(
                r,
                I(
                  400,
                  "Bad Request",
                  `a forwarded request may carry at most one numeric Content-Length
`
                )
              );
              return;
            }
          }
          if (A && e.connectOnly) {
            let p = tn(a);
            if (p === void 0) {
              S(
                r,
                I(
                  400,
                  "Bad Request",
                  `expected an absolute-form http://host[:port]/path request with no user info
`
                )
              );
              return;
            }
            await ge(r, p.target, a, we(r, a.rest), {
              head: p.head,
              bodyLength: Number(j(a.headerLines, "content-length") ?? "0")
            });
            return;
          }
          let v = we(r, a.rest);
          if (x) await ge(r, x[1], a, v);
          else await be(r, a, v);
        })().catch((a) => {
          (l(`internal error handling a proxied connection: ${Qd(d(a))}`), r.destroy());
        }));
    });
  if (
    (await new Promise((r, a) => {
      (G.once("error", a),
        G.listen({ host: "127.0.0.1", port: 0 }, () => {
          (G.removeListener("error", a), r());
        }));
    }),
    G.on("error", (r) => l(`listener error: ${d(r)}`)),
    e.unrefListener)
  )
    G.unref();
  let ye = G.address().port;
  return {
    url: `http://runner:${f}@127.0.0.1:${ye}`,
    port: ye,
    openConnections: () => T.size,
    close: () =>
      new Promise((r) => {
        for (let a of T) a.destroy();
        G.close(() => r());
      })
  };
}
function rn(e) {
  return /^[\d.]+$/.test(e) || e.includes(":");
}
class Te {
  active;
  handle;
}
var on = new W(() => new Te());
function ne() {
  return on.of(U().host);
}
function Kio() {
  return ne().active;
}
function sn(e, n) {
  let s = ce.map((c) => [c, n[c]]),
    o = {},
    u = [];
  for (let [c, f] of s) {
    if (f !== void 0) o[c] = f;
    if (f) ((n[c] = e), u.push(c));
  }
  return { url: e, rewritten: u, original: o };
}
function an(e = process.env) {
  let n = ne().active;
  if (!n) return { ...e };
  let s = { ...e };
  for (let o of ce) if (o in n.original) s[o] = n.original[o];
  return s;
}
function Xhs(e = process.env) {
  let n = ne().active;
  if (!n) return {};
  let s = {
    [sDn]: void 0,
    [iDn]: void 0,
    NO_PROXY: e.NO_PROXY,
    no_proxy: e.no_proxy,
    CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: void 0,
    ALL_PROXY: void 0,
    all_proxy: void 0
  };
  for (let o of ce) s[o] = n.rewritten.includes(o) ? n.url : void 0;
  return s;
}
function dn(e, n = process.env) {
  if (
    (e.command !== void 0 && e.command.trim() === "") ||
    (e.file !== void 0 && e.file.trim() === "")
  )
    throw Error("--proxy-authorization-command / --proxy-authorization-file must not be empty");
  let s = (e.command ?? n[sDn])?.trim(),
    o = (e.file ?? n[iDn])?.trim(),
    u = o ? Ie(o) : o,
    c = s !== void 0 && s !== "",
    f = u !== void 0 && u !== "";
  if (c && f)
    throw Error(
      "set only one of --proxy-authorization-command (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND) and --proxy-authorization-file (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE)"
    );
  if (c) return { kind: "command", command: s };
  if (f) return { kind: "file", path: u };
  return;
}
function Jhs(e, n = process.env) {
  let s = dn(e, n);
  if (!s) return;
  let o = Cm(n),
    u = o ? gq(o) : void 0;
  if (!o || !u)
    throw Error(
      "--proxy-authorization-command / --proxy-authorization-file require HTTPS_PROXY (or HTTP_PROXY) to be set to the upstream proxy URL that the Proxy-Authorization value is for (ALL_PROXY alone is not consulted)"
    );
  if (u.protocol !== "http:" && u.protocol !== "https:")
    throw Error(
      "--proxy-authorization-command / --proxy-authorization-file support http:// and https:// upstream proxies only (check the scheme of HTTPS_PROXY / HTTP_PROXY)"
    );
  return { source: s, upstreamProxyUrl: o };
}
async function Qhs(e, n) {
  let s = ne(),
    o = mA(),
    u = z0(),
    c = Qe({
      source: e.source,
      upstreamProxyUrl: e.upstreamProxyUrl,
      commandEnv: () => ({
        ...an(),
        SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
        SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0
      })
    }),
    f = await le({
      upstreamProxyUrl: e.upstreamProxyUrl,
      minter: c,
      upstreamTls: {
        ...(o && { cert: o.cert, key: o.key, passphrase: o.passphrase }),
        ...(u && { ca: u })
      },
      onStatus: n.onStatus,
      onDebug: n.onDebug
    }),
    P = sn(f.url, process.env);
  if (((s.active = P), new Set(P.rewritten.map((h) => P.original[h])).size > 1))
    n.onStatus(
      `[runner:egress-proxy] note: ${P.rewritten.join("/")} named different proxies; all of them now go through the listener to ${Qd(e.upstreamProxyUrl)} (the one this runner resolves for its own traffic)`
    );
  if ((qS(), process.env.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER))
    n.onStatus(
      "[runner:egress-proxy] note: CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER is set on the runner; it is cleared for sessions while --proxy-authorization-* is active (the runner now mints Proxy-Authorization for all proxied traffic, and a session-side proxyAuthHelper header would be refused by the loopback listener)"
    );
  return (
    n.onStatus(
      `[runner:egress-proxy] enabled: minting Proxy-Authorization from the configured ${e.source.kind} for every CONNECT to the upstream proxy ${Qd(e.upstreamProxyUrl)}; this runner and its sessions now use the loopback listener 127.0.0.1:${f.port} (rewrote ${P.rewritten.join(", ")})`
    ),
    (s.handle = {
      ...f,
      close: async () => {
        (await f.close(), (s.active = void 0), (s.handle = void 0));
      }
    }),
    s.handle
  );
}
function Zhs(e, n = process.env) {
  let s =
    e.find((o) => o === "--proxy-authorization-command" || o === "--proxy-authorization-file") ??
    [sDn, iDn].find((o) => n[o]?.trim());
  if (s !== void 0)
    throw new R(
      `${s} is not yet supported with the orchestrator subcommand (only worker runners mint Proxy-Authorization for their egress proxy today). Unset it for the orchestrator process; the runners it spawns can still use it.`,
      "proxy-authorization knob given to the orchestrator subcommand"
    );
}
var hIt = "agent_proxy_standalone",
  Ae = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "host.docker.internal"
  ].join(",");
class ve {
  forwarder = void 0;
}
var un = new W(() => new ve());
function pe() {
  return un.of(U().host);
}
function i_r() {
  return pe().forwarder !== void 0;
}
function Vio() {
  return pe().forwarder?.url;
}
async function Uki() {
  if (i.CCR_AGENT_PROXY_RELAY_MODE !== hIt) return { kind: "off" };
  let e = i.SELF_HOSTED_RUNNER_AGENT_PROXY_URL;
  if (
    (i.unset("CCR_AGENT_PROXY_RELAY_MODE"),
    i.unset("SELF_HOSTED_RUNNER_AGENT_PROXY_URL"),
    i.unset("CCR_AGENT_PROXY_ENABLED"),
    i.unset("AGENT_PROXY_URL"),
    i.unset("AGENT_PROXY_AUTH_TOKEN"),
    i.unset("CCR_AGENT_PROXY_CA_CERT_B64"),
    i.CLAUDE_CODE_ENVIRONMENT_KIND !== "byoc")
  )
    return (
      m("agent_proxy_standalone", "not_byoc"),
      {
        kind: "failed",
        cause: "environment",
        message:
          "This session was asked to send its traffic through your self-hosted agent proxy, which only a self-hosted runner's session can do. Claude Code does not start rather than connect directly."
      }
    );
  let n = Ne(e);
  if (!n.ok)
    return (
      m("agent_proxy_standalone", `url_${n.code}`),
      { kind: "failed", cause: "url", message: n.message }
    );
  let s = await pn(),
    o = s?.sessionId;
  if (!s || !o || o.includes(":"))
    return (
      m("agent_proxy_standalone", "no_session_id"),
      { kind: "failed", cause: "session", message: `${Le}: this session has no usable session id.` }
    );
  if (!s.token())
    return (
      m("agent_proxy_standalone", "no_token"),
      { kind: "failed", cause: "session", message: `${Le}: this session has no session token.` }
    );
  await Oe();
  let u = Se(),
    c = z0(),
    f = he(fe),
    P = mA(),
    w,
    h;
  try {
    h = await le({
      upstreamProxyUrl: n.url.href,
      minter: {
        async mint() {
          let l = s.token();
          if (!l) throw new Y("the session token is not available");
          return `Basic ${Buffer.from(`${o}:${l}`).toString("base64")}`;
        }
      },
      upstreamTls: () => {
        let l = Se() === u ? z0() : c,
          T = he(fe) === f ? mA() : P;
        return {
          ...(T && { cert: T.cert, key: T.key, passphrase: T.passphrase }),
          ...(l && { ca: l }),
          rejectUnauthorized: !0
        };
      },
      onUpstreamFailure: () => (
        (w ??= mn().finally(() => {
          w = void 0;
        })),
        w
      ),
      logLabel: "agent-proxy-standalone",
      unrefListener: !0,
      connectOnly: !0,
      onStatus: (l) => t(l, { level: "warn" }),
      onDebug: (l) => t(l)
    });
  } catch (l) {
    let T = E(l);
    return (
      m("agent_proxy_standalone", "listener_failed"),
      t(`[agent-proxy-standalone] forwarder failed to start: ${d(l)}`, { level: "error" }),
      {
        kind: "failed",
        cause: "listener",
        message: `Claude Code could not start its local forwarder to the proxy named by SELF_HOSTED_RUNNER_AGENT_PROXY_URL${T ? ` (${T})` : ""}, and does not start without it. Start a new session; if this keeps happening, check that the runner container allows listening on 127.0.0.1.`
      }
    );
  }
  pe().forwarder = h;
  for (let l of gn) i.set(l, h.url);
  (i.set("NO_PROXY", Ae), i.set("no_proxy", Ae));
  for (let [l, T] of Object.entries(wVt(process.env)))
    if (l !== "CLOUDSDK_PROXY_PASSWORD") process.env[l] = T;
  return (
    i.set("CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER", !1),
    t(
      `[agent-proxy-standalone] routing through ${n.url.protocol}//${n.url.host} via 127.0.0.1:${h.port}`
    ),
    g("agent_proxy_standalone"),
    { kind: "on", port: h.port }
  );
}
function cn(e) {
  return e?.trim() === hIt;
}
var a_r = "--agent-proxy-url / SELF_HOSTED_RUNNER_AGENT_PROXY_URL";
function l_r(e, n) {
  return cn(e) || n !== void 0;
}
var ln = ["CCR_AGENT_PROXY_ENABLED", "CCR_EGRESS_GATEWAY_ENABLED", "CCR_UPSTREAM_PROXY_ENABLED"];
function fn(e) {
  if (e === void 0) return "no_server_config";
  let n = e.CCR_AGENT_PROXY_RELAY_MODE?.trim();
  if (n === "selective" || n === "all") return "hosted_relay";
  if (n && n !== "off" && n !== hIt) return "unknown_relay_mode";
  if (
    ln.some((o) => {
      let u = e[o]?.trim();
      return !!u && !is(u);
    })
  )
    return "hosted_relay";
  return;
}
function d_r(e) {
  let n = e.runnerProxyUrl !== void 0;
  if (!l_r(e.serverEnv?.CCR_AGENT_PROXY_RELAY_MODE, e.runnerProxyUrl)) return;
  let s = n ? fn(e.serverEnv) : void 0;
  if (s !== void 0) {
    m("agent_proxy_standalone", s);
    let o =
      s === "hosted_relay"
        ? "This environment sends sessions through Anthropic's relay"
        : s === "unknown_relay_mode"
          ? "This environment names a relay mode this runner does not recognize"
          : "The server sent no session config to check the relay mode against";
    return new R(
      `Session ${e.sessionId}: ${o}, so a runner started with ${e.runnerProxySetting} can't run it. Remove ${e.runnerProxySetting} from this runner, or change the environment's relay mode`,
      "runner started with an agent proxy URL refuses a session on the hosted relay, with an unknown relay mode, or without a config"
    );
  }
  switch (e.governedGit) {
    case "off":
      break;
    case "legacy":
      return (
        m("agent_proxy_standalone", "governed_git"),
        new R(
          n
            ? `Session ${e.sessionId} uses Anthropic-managed git (governed git), which this runner refuses: it routes every session through the proxy that ${e.runnerProxySetting} names, and only the self-hosted runner can send governed git through that proxy. Run this pool's Anthropic-managed git sessions on a self-hosted runner, or on a runner started without a proxy URL`
            : `Session ${e.sessionId} asks for Anthropic-managed git (governed git) and for routing through your self-hosted agent proxy, which this runner cannot combine: only the self-hosted runner can send governed git through that proxy. Run this pool's sessions on a self-hosted runner, or turn off one of the two for the pool`,
          "session pairs governed git with the agent_proxy_standalone relay mode on a runner that cannot route it"
        )
      );
    case "on": {
      if (e.gitConfigArmed !== !0)
        return (
          m("agent_proxy_standalone", "governed_git_no_git_config"),
          new R(
            `Session ${e.sessionId} uses Anthropic-managed git (governed git) through your self-hosted agent proxy without its git setup, which this runner refuses: without it, git would not trust the proxy's route to GitHub`,
            "runner refuses a governed-git block without its git config arm in the agent_proxy_standalone relay mode"
          )
        );
      if (O() === "windows")
        return (
          m("agent_proxy_standalone", "governed_git_windows"),
          new R(
            `Session ${e.sessionId} uses Anthropic-managed git (governed git) through your self-hosted agent proxy, which this runner refuses on Windows: the session's git config would hold the credential for the proxy's local forwarder, and Windows does not keep that file private to the runner's user. Run this pool's Anthropic-managed git sessions on a Linux or macOS runner`,
            "runner refuses governed git in the agent_proxy_standalone relay mode on Windows"
          )
        );
      if (e.childVersionUnknown === !0)
        return (
          m("agent_proxy_standalone", "governed_git_pinned_child"),
          new R(
            `Session ${e.sessionId} uses Anthropic-managed git (governed git) through your self-hosted agent proxy, which this runner refuses: it starts sessions through --exec-path or a command hook, and cannot check that the claude there routes governed git in that mode. Run this pool's Anthropic-managed git sessions on a runner started without --exec-path or a command hook`,
            "runner with a pinned child refuses governed git in the agent_proxy_standalone relay mode"
          )
        );
      break;
    }
    default:
      e.governedGit;
  }
  if (e.egressListener)
    return (
      m("agent_proxy_standalone", "runner_egress_listener"),
      new R(
        n
          ? `Session ${e.sessionId} routes through the proxy that ${e.runnerProxySetting} names, which this runner cannot combine with its --proxy-authorization-command / --proxy-authorization-file egress listener: the session would reach that proxy without the listener. Start this runner with only one of ${e.runnerProxySetting} and --proxy-authorization-command / --proxy-authorization-file`
          : `Session ${e.sessionId} routes through your self-hosted agent proxy, as the pool's relay mode asks, which this runner cannot combine with its --proxy-authorization-command / --proxy-authorization-file egress listener: the session would reach that proxy without the listener. Run this pool's sessions on a runner started with ${e.runnerProxySetting} and without --proxy-authorization-command / --proxy-authorization-file, or change the pool's relay mode`,
        "session uses the agent_proxy_standalone relay mode on a runner with a --proxy-authorization-* egress listener"
      )
    );
  return;
}
function qio(e, n) {
  return n !== void 0 ? hIt : e?.trim();
}
function yIt(e, n) {
  if (e === void 0) return;
  let s = Ne(e, {
    name: n,
    failureSuffix: `Set ${n} to your proxy's https:// URL (for example https://proxy.internal:3128) and restart the runner.`
  });
  if (!s.ok) throw new R(s.message, "runner agent proxy URL is unusable");
  return s.url;
}
function Yio(e) {
  return {
    AGENT_PROXY_URL: void 0,
    AGENT_PROXY_AUTH_TOKEN: void 0,
    CCR_AGENT_PROXY_CA_CERT_B64: void 0,
    CCR_AGENT_PROXY_ENABLED: void 0,
    ...Object.fromEntries(hn.map((n) => [n, e[n]]))
  };
}
var Ce = ["NODE_EXTRA_CA_CERTS", "CLAUDE_CODE_CERT_STORE", "SSL_CERT_FILE", "SSL_CERT_DIR"],
  fe = ["CLAUDE_CODE_CLIENT_CERT", "CLAUDE_CODE_CLIENT_KEY", "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE"],
  hn = [...Ce, ...fe];
async function pn() {
  if (sd()) {
    let [{ peekSessionTunnelInput: e }, { parseSessionTunnelEnvelope: n }] = await Promise.all([
        import("./chunk-spa6psc9.js"),
        import("./chunk-43hhp7ah.js")
      ]),
      s = n(e());
    if (s === void 0) return;
    let o = s.session_token;
    return { sessionId: s.session_id, token: () => o };
  }
  return { sessionId: i.CLAUDE_CODE_REMOTE_SESSION_ID, token: od };
}
function he(e) {
  return _(e.map((n) => i[n]));
}
function Se() {
  return `${he(Ce)}${Boolean(i.CLAUDE_CODE_CLIENT_CERT)}`;
}
async function Oe() {
  let [e, n] = await Promise.all([OZ(), pq()]);
  return e || n.changed;
}
async function mn() {
  if (await Oe()) (HZ(), qS());
}
var gn = ["HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "ALL_PROXY", "all_proxy"],
  Le =
    "Claude Code cannot authenticate to the proxy named by SELF_HOSTED_RUNNER_AGENT_PROXY_URL, and does not start without it",
  yn =
    "Start the runner with --agent-proxy-url set to your proxy's https:// URL (for example https://proxy.internal:3128), or set SELF_HOSTED_RUNNER_AGENT_PROXY_URL in its environment, and start a new session. Claude Code does not start without it rather than connect directly.";
function Ne(e, n = { name: "SELF_HOSTED_RUNNER_AGENT_PROXY_URL", failureSuffix: yn }) {
  let { name: s, failureSuffix: o } = n,
    u = e?.trim();
  if (!u)
    return {
      ok: !1,
      code: "missing",
      message: `This session's runner pool sends its traffic through your own proxy, but ${s} is not set. ${o}`
    };
  let c;
  try {
    c = new URL(u);
  } catch {
    return { ok: !1, code: "unparsable", message: `${s} cannot be parsed as a URL. ${o}` };
  }
  if ((c.protocol !== "http:" && c.protocol !== "https:") || !c.host)
    return { ok: !1, code: "scheme", message: `${s} must be an https:// URL with a host. ${o}` };
  if (c.protocol === "http:")
    return {
      ok: !1,
      code: "plaintext",
      message: `${s} must use https://, also for a proxy on this machine: Claude Code sends this session's credentials to it and checks the proxy's certificate against the CAs the runner container trusts. ${o}`
    };
  if (c.username || c.password)
    return {
      ok: !1,
      code: "credentials",
      message: `${s} must not include a user name or password, because Claude Code signs in to the proxy with this session's own credentials. ${o}`
    };
  return { ok: !0, url: c };
}
export { sDn, iDn, Kio, Xhs, Jhs, Qhs, Zhs, hIt, i_r, Vio, Uki, a_r, l_r, d_r, qio, yIt, Yio };

//# sourceMappingURL=chunk-th9sh62j.js.map
