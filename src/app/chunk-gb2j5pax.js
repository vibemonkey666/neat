// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { lk, sT } from "./chunk-7zgz07kc.js";
import { KU } from "./chunk-ajtyjx88.js";
import Pe from "net";
import { request as ve } from "http";
var _e = new Set([204, 205, 304]);
function ie(n, u, l) {
  return Ee("127.0.0.1", n, u, l);
}
function Ee(n, u, l, { method: g, headers: b, body: I, signal: w }) {
  let E = g.toUpperCase();
  if (E !== "POST" && E !== "GET" && E !== "DELETE")
    return Promise.reject(Error("only POST, GET and DELETE are relayed"));
  for (let R of ["content-length", "transfer-encoding", "connection"]) b.delete(R);
  return new Promise((R, T) => {
    let W = ve(
      {
        host: n,
        port: u,
        path: l,
        method: E,
        headers: Object.fromEntries(b),
        signal: w,
        agent: !1
      },
      (N) => {
        try {
          R(Ie(N));
        } catch (k) {
          (N.destroy(), T(k));
        }
      }
    );
    (W.once("error", T),
      W.once("close", () => T(Error("closed unanswered"))),
      W.end(E === "POST" ? I : void 0));
  });
}
function Ie(n) {
  if (n.statusCode === void 0 || n.statusCode < 200) throw Error("no final status");
  let u = new Headers();
  for (let b = 0; b + 1 < n.rawHeaders.length; b += 2)
    u.append(n.rawHeaders[b], n.rawHeaders[b + 1]);
  let l = _e.has(n.statusCode ?? 0),
    g = new Response(l ? null : Re(n), {
      status: n.statusCode,
      statusText: n.statusMessage,
      headers: u
    });
  if (l) n.resume();
  return g;
}
function Re(n) {
  let u = n[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(l) {
      let g = await u.next();
      if (g.done) l.close();
      else l.enqueue(g.value);
    },
    async cancel() {
      await u.return?.();
    }
  });
}
var ke = "/anthropic.ccr.api.v1alpha2.tunnel.TunnelService/TunnelProxy",
  ae = 1000,
  le = 30000,
  We = 10,
  Ne = 5000,
  Ce = 1e4,
  Y = 30000,
  Oe = 75000,
  Ae = 7168 * (Y / 1000);
function $e(n) {
  let u = n instanceof Uint8Array ? Buffer.from(n).toString("latin1") : "";
  return /^\d{1,15}$/.test(u) ? Number(u) : -1;
}
var Me = "preview_tunnel_liveness_would_have_fired",
  ue = 32768,
  Le = 4194304,
  De = 1048576,
  xe = 50,
  He = 30000,
  qe = "/__control/status",
  Be = 2000,
  ce = new Set(["cookie", "authorization", "proxy-authorization", "referer"]),
  Ue = 1e4,
  de = 8,
  Fe = 64;
function Ge(n) {
  return n.replace(/^http/, "ws").replace(/\/+$/, "") + ke;
}
function Ve(n, u) {
  let l = KU(n);
  if (
    l !== null &&
    typeof l === "object" &&
    "session_id" in l &&
    typeof l.session_id === "string" &&
    l.session_id.length > 0
  )
    return l.session_id;
  return u;
}
var Z = "tunnel request does not name this session";
function Ye(n, u) {
  if (!Array.isArray(n)) return !1;
  let l = n.filter((g) => typeof g?.name === "string" && g.name.toLowerCase() === "host");
  return l.length === 1 && l[0].value === `127.0.0.1:${u}`;
}
function je(n, u) {
  let l = (g) => g.slice(g.lastIndexOf("_") + 1);
  return l(n) !== "" && l(n) === l(u);
}
function fe(n, u, l) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 1024 || n > 65535)
    return `invalid port: ${n}`;
  if (!l.has(n)) return `port ${n} is not in the --preview-port allowlist for this bridge`;
  if (typeof u !== "string" || !u.startsWith("/")) return "invalid path: must start with /";
  return null;
}
var ze = new Set([1004, 1005, 1006, 1015]);
function Ke(n) {
  return Qe(n ?? "").trim();
}
function Xe(n) {
  return n.includes("does not have live preview enabled") || n.includes(Je);
}
var Je = "tunnel:preview";
function Qe(n) {
  return n.replace(
    /[\u0000-\u001f\u007f-\u009f\u200e\u200f\u2028\u2029\u202a-\u202e\u2066-\u2069]+/g,
    " "
  );
}
function ge(n) {
  if (typeof n !== "number" || n < 1000 || n > 4999 || ze.has(n)) return 1000;
  return n;
}
function pe(n) {
  if (!n) return "";
  return Buffer.byteLength(n, "utf8") <= 123 ? n : "";
}
function Ze(n) {
  return new Promise((u) => {
    let l = !1,
      g = (I) => {
        if (l) return;
        ((l = !0), b.destroy(), u(I));
      },
      b = Pe.createConnection({ host: "127.0.0.1", port: n });
    (b.setTimeout(Be),
      b.once("connect", () => g(!0)),
      b.once("error", () => g(!1)),
      b.once("timeout", () => g(!1)));
  });
}
function uys(n) {
  let u = Ge(n.apiBaseUrl),
    { accessToken: l, sessionId: g } = n,
    b = !1,
    I = !1,
    w = null,
    E = null,
    R = null,
    T = null,
    W = ae,
    N = 0,
    k = 0,
    j = !1,
    A = 0,
    H = 0,
    z = 0,
    F = 0,
    G = !1,
    q = 0,
    L = !1,
    K = !1,
    C = new Map(),
    y = new Map(),
    f = (o, e = "info") => t(`[bridge:preview-tunnel] ${o}`, { level: e });
  function P(o) {
    let e = w;
    if (!e || e.readyState !== WebSocket.OPEN) return;
    try {
      let r = _(o);
      (e.send(r), (H += r.length));
    } catch (r) {
      f(`send failed: ${d(r)}`, "error");
    }
  }
  function B(o, e) {
    P({ httpError: { requestId: o, errorMessage: e } });
  }
  function ee(o) {
    let e = w;
    if (!e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Le) return Promise.resolve();
    return new Promise((r) => {
      let i = setInterval(() => {
        if (I || o.aborted || w !== e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= De)
          (clearInterval(i), r());
      }, xe);
    });
  }
  async function me(o, e) {
    let r = 0;
    try {
      let v =
          e.body !== void 0 && e.body !== ""
            ? Buffer.from(e.body, "base64").toString("utf8")
            : "{}",
        O = te(v);
      if (O !== null && typeof O.port === "number") r = O.port;
    } catch (v) {
      f(`control/status: bad body: ${d(v)}`, "error");
    }
    let i = Number.isInteger(r) && r >= 1024 && r <= 65535 && n.allowedPorts.has(r),
      S = i ? await Ze(r) : !1;
    (f(`control/status port=${r} permitted=${i} listening=${S}`),
      P({
        httpHeaders: {
          requestId: o,
          statusCode: 200,
          statusText: "OK",
          headers: [{ name: "Content-Type", value: "application/x-ndjson" }],
          sequenceNumber: 0
        }
      }));
    let x =
      _({ type: "result", status: 200, data: { listening: S, port: r } }) +
      `
`;
    P({
      httpChunk: {
        requestId: o,
        data: Buffer.from(x, "utf8").toString("base64"),
        isFinal: !0,
        sequenceNumber: 1
      }
    });
  }
  async function be(o) {
    let e = o.requestId;
    if (!e) return;
    if (
      n.toolServer === void 0 &&
      o.port === 0 &&
      o.path === qe &&
      (o.method ?? "").toUpperCase() === "POST"
    ) {
      await me(e, o);
      return;
    }
    let r = fe(o.port, o.path, n.allowedPorts);
    if (r) {
      B(e, r);
      return;
    }
    let { port: i, path: S } = o,
      x = o.method ?? "GET";
    if (i === n.toolServer?.port && !Ye(o.headers, i)) {
      B(e, `Host is not 127.0.0.1:${i}, which CCR's route to the tool server sends`);
      return;
    }
    let v = new AbortController();
    C.set(e, v);
    let O = setTimeout((s) => s.abort(), He, v),
      p;
    try {
      let s = new Headers();
      for (let h of o.headers ?? []) {
        if (!h.name || ce.has(h.name.toLowerCase())) continue;
        s.append(h.name, h.value ?? "");
      }
      if ((s.set("Host", `127.0.0.1:${i}`), i === n.toolServer?.port))
        s.set("Authorization", `Bearer ${n.toolServer.authToken}`);
      let m = o.body !== void 0 && o.body !== "" ? Buffer.from(o.body, "base64") : void 0;
      p =
        i === n.toolServer?.port
          ? await ie(i, S, { method: x, headers: s, body: m, signal: v.signal })
          : await fetch(`http://127.0.0.1:${i}${S}`, {
              method: x,
              headers: s,
              body: m,
              redirect: "manual",
              signal: v.signal
            });
    } catch (s) {
      (clearTimeout(O), C.delete(e), B(e, d(s)));
      return;
    }
    clearTimeout(O);
    let U = [];
    p.headers.forEach((s, m) => {
      U.push({ name: m, value: s });
    });
    let c = 0;
    (P({
      httpHeaders: {
        requestId: e,
        statusCode: p.status,
        statusText: p.statusText || String(p.status),
        headers: U,
        sequenceNumber: c
      }
    }),
      c++);
    try {
      if (p.body) {
        let s = p.body.getReader();
        for (;;) {
          if ((await ee(v.signal), v.signal.aborted)) {
            await s.cancel();
            break;
          }
          let m = await s.read();
          if (m.value && m.value.length > 0)
            for (let h = 0; h < m.value.length; h += ue) {
              let Q = m.value.subarray(h, h + ue);
              (P({
                httpChunk: {
                  requestId: e,
                  data: Buffer.from(Q).toString("base64"),
                  isFinal: !1,
                  sequenceNumber: c
                }
              }),
                c++);
            }
          if (m.done) break;
          if (v.signal.aborted) {
            await s.cancel();
            break;
          }
        }
      }
      P({ httpChunk: { requestId: e, data: "", isFinal: !0, sequenceNumber: c } });
    } catch (s) {
      B(e, `error reading response body: ${d(s)}`);
    } finally {
      C.delete(e);
    }
  }
  function D(o, e) {
    P({ wsError: { tunnelId: o, errorMessage: e } });
  }
  function M(o, e) {
    let r = y.get(o);
    if (!r) return;
    if ((y.delete(o), r.dialTimer)) (clearTimeout(r.dialTimer), (r.dialTimer = null));
    if ((r.abort.abort(), (r.pending.length = 0), !r.terminated && e))
      if (((r.terminated = !0), "error" in e)) D(o, e.error);
      else P({ wsClose: { tunnelId: o, ...e.close } });
    try {
      r.sock.close();
    } catch {}
  }
  async function he(o) {
    let e = y.get(o);
    if (!e || e.flushing) return;
    e.flushing = !0;
    try {
      while (e.pending.length > 0 && y.get(o) === e) {
        if ((await ee(e.abort.signal), e.abort.signal.aborted || y.get(o) !== e)) return;
        let r = e.pending.shift();
        if (r) P(r);
      }
    } finally {
      e.flushing = !1;
    }
  }
  function ye(o) {
    let e = o.tunnelId;
    if (!e) return;
    if (!n.isHmrEnabled?.()) {
      D(e, "WebSocket tunnel is not enabled for this session");
      return;
    }
    if ((M(e), y.size >= de)) {
      D(e, `too many concurrent WebSocket tunnels (max ${de})`);
      return;
    }
    let r = fe(o.port, o.path, n.allowedPorts);
    if (r) {
      D(e, r);
      return;
    }
    let { port: i, path: S } = o,
      x = new Set([
        "host",
        "connection",
        "upgrade",
        "sec-websocket-key",
        "sec-websocket-version",
        "sec-websocket-protocol",
        "sec-websocket-extensions"
      ]),
      v = {};
    for (let s of o.headers ?? []) {
      if (!s.name) continue;
      let m = s.value ?? "";
      if (/[\r\n\0]/.test(s.name) || /[\r\n\0]/.test(m)) continue;
      let h = s.name.toLowerCase();
      if (ce.has(h) || x.has(h)) continue;
      v[s.name] = m;
    }
    let O = (o.protocols ?? []).filter((s) => !/[\r\n\0]/.test(s)),
      p;
    try {
      p = new globalThis.WebSocket(`ws://127.0.0.1:${i}${S}`, { headers: v, protocols: O });
    } catch (s) {
      D(e, `WebSocket dial failed: ${d(s)}`);
      return;
    }
    p.binaryType = "arraybuffer";
    let U = new AbortController(),
      c = {
        sock: p,
        abort: U,
        dialTimer: null,
        nextSeq: 0,
        pending: [],
        flushing: !1,
        terminated: !1
      };
    (y.set(e, c),
      (c.dialTimer = setTimeout(
        (s) => {
          s.abort.abort();
          try {
            s.sock.close();
          } catch {}
        },
        Ue,
        c
      )),
      U.signal.addEventListener(
        "abort",
        () => {
          if (y.get(e) !== c) return;
          ((p.onopen = p.onmessage = p.onerror = p.onclose = null),
            M(e, { error: `WebSocket dial to 127.0.0.1:${i} timed out` }));
        },
        { once: !0 }
      ),
      (p.onopen = () => {
        if (c.dialTimer) (clearTimeout(c.dialTimer), (c.dialTimer = null));
        if (y.get(e) !== c) return;
        (P({ wsOpened: { tunnelId: e, protocol: p.protocol ?? "" } }),
          f(`ws tunnel opened id=${e} port=${i}`));
      }),
      (p.onmessage = (s) => {
        if (y.get(e) !== c || c.terminated) return;
        let m, h;
        if (typeof s.data === "string")
          ((m = Buffer.from(s.data, "utf8").toString("base64")), (h = !1));
        else if (s.data instanceof ArrayBuffer)
          ((m = Buffer.from(s.data).toString("base64")), (h = !0));
        else {
          f(`ws tunnel ${e}: dropping unsupported message type`, "error");
          return;
        }
        if (
          (c.nextSeq++,
          c.pending.push({
            wsMessage: { tunnelId: e, data: m, isBinary: h, sequenceNumber: c.nextSeq }
          }),
          c.pending.length > Fe)
        ) {
          M(e, { error: "backpressure queue overflow; closing WebSocket tunnel" });
          return;
        }
        he(e).catch((Q) => f(`ws flush failed: ${d(Q)}`, "error"));
      }),
      (p.onerror = () => {}),
      (p.onclose = (s) => {
        let m = c.dialTimer != null;
        if (c.dialTimer) (clearTimeout(c.dialTimer), (c.dialTimer = null));
        if (y.get(e) !== c) return;
        if (m) {
          M(e, { error: `WebSocket dial to 127.0.0.1:${i} failed (close code ${s.code})` });
          return;
        }
        M(e, { close: { code: ge(s.code), reason: pe(s.reason) } });
      }));
  }
  function we(o) {
    let e = o.tunnelId;
    if (!e) return;
    let r = y.get(e);
    if (!r || r.sock.readyState !== WebSocket.OPEN) return;
    try {
      let i = Buffer.from(o.data ?? "", "base64");
      if (o.isBinary) r.sock.send(i);
      else r.sock.send(i.toString("utf8"));
    } catch (i) {
      M(e, { error: `write to local WebSocket failed: ${d(i)}` });
    }
  }
  function Te(o) {
    let e = o.tunnelId;
    if (!e) return;
    let r = y.get(e);
    if (!r) return;
    if (((r.terminated = !0), y.delete(e), r.dialTimer))
      (clearTimeout(r.dialTimer), (r.dialTimer = null));
    (r.abort.abort(), (r.pending.length = 0));
    try {
      r.sock.close(ge(o.code), pe(o.reason));
    } catch {
      try {
        r.sock.close();
      } catch {}
    }
  }
  function ne() {
    for (let o of [...y.keys()]) M(o);
  }
  function Se(o) {
    let e;
    try {
      e = te(o);
    } catch (r) {
      f(`failed to parse tunnel request: ${d(r)}`, "error");
      return;
    }
    if (typeof e !== "object" || e === null) {
      f("tunnel request is not an object", "error");
      return;
    }
    if (typeof e.sessionId !== "string" || !je(e.sessionId, g)) {
      if (!b)
        ((b = !0),
          f(`${Z}; ${n.toolServer ? "refused" : "served all the same"}`, "error"),
          a("tengu_preview_tunnel_other_session", { enforce: n.toolServer !== void 0 }));
      if (n.toolServer !== void 0) {
        if (e.httpRequest?.requestId) B(e.httpRequest.requestId, Z);
        else if (e.wsOpen?.tunnelId) D(e.wsOpen.tunnelId, Z);
        return;
      }
    }
    if (e.httpRequest)
      be(e.httpRequest).catch((r) => f(`handleHttpRequest failed: ${d(r)}`, "error"));
    else if (e.httpCancel) {
      let r = e.httpCancel.requestId;
      if (r) (C.get(r)?.abort(), C.delete(r));
    } else if (e.wsOpen) ye(e.wsOpen);
    else if (e.wsMessage) we(e.wsMessage);
    else if (e.wsClose) Te(e.wsClose);
    else if (e.ptyOpen)
      P({
        ptyError: {
          tunnelId: e.ptyOpen.tunnelId ?? "",
          errorMessage: "PTY tunnel not supported by bridge worker"
        }
      });
  }
  function re(o, e) {
    if (I) return;
    if (((I = !0), R)) (clearTimeout(R), (R = null));
    (f(`permanent failure (${e}): ${o}`, "error"),
      a("tengu_preview_tunnel_permanent_failure", {
        consecutive_failures: q,
        policy_refusal: e === "policy"
      }),
      n.onPermanentFailure?.(o, e));
  }
  function X() {
    if ((q++, n.onPermanentFailure && q >= We))
      return (
        re(
          `${q} consecutive failed or short-lived ` +
            "connections \u2014 relay unreachable or refusing",
          "exhausted"
        ),
        !0
      );
    return !1;
  }
  function V() {
    if (I) return;
    if (N > 0 && Date.now() - N > le) W = ae;
    ((N = 0), (L = !1));
    let o = W + Math.floor(Math.random() * (W / 2));
    (f(`reconnecting in ${o}ms`), (R = setTimeout(se, o)), (W = Math.min(W * 2, le)));
  }
  function oe(o) {
    if (T) (clearTimeout(T), (T = null));
    if (E) (clearInterval(E), (E = null));
    for (let e of C.values()) e.abort();
    if ((C.clear(), ne(), w === o)) w = null;
  }
  function J(o, e) {
    (f(`${e}; forcing reconnect`, "error"),
      (o.onopen = o.onmessage = o.onerror = o.onclose = null),
      oe(o));
    try {
      let r = o.terminate;
      if (typeof r === "function") r.call(o);
      else o.close();
    } catch {}
    V();
  }
  function se() {
    if (I) return;
    ((R = null), (g = Ve(l, n.sessionId)));
    let o = {
        Authorization: `Bearer ${l}`,
        "x-session-id": g,
        ...(n.toolServer && { "x-tunnel-peer": "tool-server" })
      },
      e;
    try {
      e = new globalThis.WebSocket(u, {
        headers: o,
        proxy: sT(u),
        tls: n.toolServer ? { ...lk(void 0), rejectUnauthorized: !0 } : lk(void 0) || void 0
      });
    } catch (r) {
      if ((f(`WebSocket construct failed: ${d(r)}`, "error"), X())) return;
      V();
      return;
    }
    ((w = e),
      (T = setTimeout(
        (r) => {
          (f("open timeout; retrying", "error"),
            (r.onopen = r.onmessage = r.onerror = r.onclose = null));
          try {
            r.close();
          } catch {}
          if (w === r) w = null;
          if (X()) return;
          V();
        },
        Ce,
        e
      )),
      (e.onopen = () => {
        if (T) (clearTimeout(T), (T = null));
        (f(`connected session=${n.sessionId}`),
          (N = Date.now()),
          (k = Date.now()),
          (j = !1),
          (A = 0),
          (H = 0),
          (z = 0),
          (F = 0),
          (G = !1),
          (L = !1));
        let r = e;
        (r.addEventListener?.("ping", () => {
          ((k = Date.now()), (L = !0));
        }),
          r.addEventListener?.("pong", (i) => {
            ((k = Date.now()), (L = !0), (j = !0), (A = 0));
            let S = $e(i?.data);
            if (S > F && S <= H) F = S;
          }),
          (E = setInterval(() => {
            if (e.readyState !== WebSocket.OPEN) return;
            if (
              n.livenessEnforce &&
              n.quietLivenessPings !== void 0 &&
              (j || n.toolServer !== void 0) &&
              A >=
                Math.max(
                  n.quietLivenessPings,
                  n.toolServer === void 0 || Date.now() - k < Y ? (z - F) / Ae : 0
                )
            ) {
              (a("tengu_preview_tunnel_liveness_enforced_reconnect", { idle_ms: A * Y, quiet: !0 }),
                J(e, `${A} pings in a row unanswered (liveness deadline exceeded)`));
              return;
            }
            if (Date.now() - k > (n.livenessDeadlineMs ?? Oe)) {
              if (n.livenessEnforce) {
                let i = Date.now() - k;
                (a("tengu_preview_tunnel_liveness_enforced_reconnect", { idle_ms: i }),
                  J(e, `no peer activity for ${i}ms (liveness deadline exceeded)`));
                return;
              }
              if (!G) {
                let i = Date.now() - k;
                (f(
                  `${Me}: no peer activity for ${i}ms (liveness deadline exceeded; observe-only, not reconnecting)`,
                  "error"
                ),
                  a("tengu_preview_tunnel_liveness_would_have_fired", { idle_ms: i, enforce: !1 }),
                  (G = !0));
              }
            } else G = !1;
            if (n.quietLivenessPings === void 0) {
              r.ping?.();
              return;
            }
            if (A === 0) z = H;
            (A++, r.ping?.(String(H)));
          }, Y)));
      }),
      (e.onmessage = (r) => {
        ((k = Date.now()), (L = !0));
        let i = typeof r.data === "string" ? r.data : Buffer.from(r.data).toString("utf8");
        Se(i);
      }),
      (e.onerror = (r) => {
        f(
          `error: ${"message" in r && typeof r.message === "string" ? r.message : "unknown"}`,
          "error"
        );
      }),
      (e.onclose = (r) => {
        let i = Ke(r.reason);
        (f(`closed code=${r.code} reason=${i || "(none)"}`), oe(e));
        let S = L || (N > 0 && Date.now() - N >= Ne);
        if (S) ((q = 0), (K = !1));
        if (r.code === 1008 && Xe(i)) {
          if (n.policyStopEnforce) {
            re(
              `relay refused with close code 1008 (policy violation): ${i || "(no reason)"} \u2014 not retrying`,
              "policy"
            );
            return;
          }
          if (!K)
            ((K = !0),
              f(
                `POLICY_STOP_WOULD_HAVE_FIRED: capability-refusal 1008 (${i || "(no reason)"}); observe-only, retrying`,
                "error"
              ),
              a("tengu_preview_tunnel_policy_stop_would_have_fired", { enforce: !1 }));
        }
        if (!S && X()) return;
        V();
      }));
  }
  return (
    f(`starting session=${n.sessionId} url=${u}`),
    se(),
    {
      updateAccessToken(o) {
        l = o;
      },
      forceReconnect() {
        if (I || w === null) return;
        J(w, "caller requested");
      },
      stop() {
        if (I) return;
        if (((I = !0), R)) (clearTimeout(R), (R = null));
        if (T) (clearTimeout(T), (T = null));
        if (E) (clearInterval(E), (E = null));
        for (let o of C.values()) o.abort();
        (C.clear(), ne());
        try {
          w?.close();
        } catch {}
        ((w = null), f(`stopped session=${n.sessionId}`));
      }
    }
  );
}
export { uys };

//# sourceMappingURL=chunk-gb2j5pax.js.map
