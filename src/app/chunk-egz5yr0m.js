// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { d, E, Er, G, Vt } from "./chunk-fs43t96t.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { X, Nt } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { bt, Kg, _, fW, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { I, re, Ze } from "./chunk-a16y5hcz.js";
import { _t } from "./chunk-ewvf3tep.js";
import { PM, Dn } from "./chunk-qywdxehb.js";
import { hc, Fkn, i } from "./chunk-cj37hmns.js";
import { P3r, _ar, Jbe, r4t, o4t, dci, cci, TR, lk, tP, sT, oa } from "./chunk-7zgz07kc.js";
import { _d } from "./chunk-8w2npe9a.js";
import { vr, AZo, xst, NH, yo, Nse } from "./chunk-azq9hjy0.js";
import { XZ, u2, it, ct } from "./chunk-qmmh8tq2.js";
import { Vsr, qsr, mse, Obe } from "./chunk-5rw2zfa0.js";
import { xu } from "./chunk-zvsmc5fn.js";
import { Evo, kvo, PPs, qCr, xvo, rLt, OPs, XCr, tAo, ys } from "./chunk-j0tbz6ra.js";
import { PVr } from "./chunk-ajtyjx88.js";
import { Lar } from "./chunk-dc0nzty2.js";
import { B$ } from "./chunk-x8k0r295.js";
import { Fj, vVt, Mo } from "./chunk-r00j5r9s.js";
import { T9n } from "./chunk-j9zrt0sr.js";
import { Dr } from "./chunk-kc27mwew.js";
import { aXt } from "./chunk-k8sjvrbs.js";
import { hIt, i_r, Vio } from "./chunk-th9sh62j.js";
import { vve, Eve, kve } from "./chunk-prd2mdq9.js";
import { Yhs } from "./chunk-wd29gnhh.js";
import { rDn, oDn } from "./chunk-x42ktvz2.js";
import { vc, zTe } from "./chunk-5ns6j8e0.js";
import { bKe } from "./chunk-ny2y84j1.js";
import { oZs, MKe, sZs, qhn, lZs, _z, cZs } from "./chunk-0jm1j0e1.js";
import { od } from "./chunk-gvf25gp4.js";
import { et } from "./chunk-c9re0p40.js";
import { sd } from "./chunk-6jbh8yja.js";
import { O2 } from "./chunk-pxvxgfdj.js";
import { X509Certificate as Wo } from "crypto";
import { execFile as Yo } from "child_process";
import { constants as Xo, statSync as jo } from "fs";
import {
  access as Jo,
  mkdir as wt,
  open as Ko,
  readFile as ye,
  rmdir as Nn,
  stat as Kn,
  unlink as pe,
  writeFile as Ue
} from "fs/promises";
import { homedir as Tt, tmpdir as Vo } from "os";
import { delimiter as Ee, join as j, parse as qo } from "path";
var It = [
  "registry.npmjs.org",
  "jsr.io",
  "npm.jsr.io",
  "pypi.org",
  "files.pythonhosted.org",
  "index.crates.io",
  "proxy.golang.org"
];
import { X509Certificate as lr } from "crypto";
import { open as cr } from "fs/promises";
var dr = 65536;
function Te(n) {
  let e = n.match(TR);
  if (!e) return { ok: !1, reason: "no certificate block" };
  if (
    !n
      .split(TR)
      .every((s, h) =>
        h === e.length ? /^[ \t\r\n]*$/.test(s) : (h === 0 && s === "") || /^[ \t\r\n]*\n$/.test(s)
      )
  )
    return { ok: !1, reason: "something other than certificate blocks that each start a line" };
  let o = [];
  for (let s of e) {
    let h = s.replace(/^-----BEGIN CERTIFICATE-----/, "").replace(/-----END CERTIFICATE-----$/, "");
    if (!/^[A-Za-z0-9+/= \t\r\n]*$/.test(h))
      return { ok: !1, reason: "a certificate block holds more than base64" };
    try {
      o.push(new lr(s).raw.toString("base64"));
    } catch {
      return { ok: !1, reason: "a certificate block does not parse" };
    }
  }
  return { ok: !0, blocks: e, ders: o };
}
function ce(n, e) {
  if (n === e) return "same";
  let r = Te(n),
    o = Te(e);
  if (!r.ok || !o.ok || r.ders.length !== o.ders.length) return "different";
  if (r.ders.every((s, h) => s === o.ders[h])) return "same";
  return r.ders.length === 2 && r.ders[0] === o.ders[1] && r.ders[1] === o.ders[0]
    ? "swapped"
    : "different";
}
async function de(n) {
  let e;
  try {
    e = await cr(n, vc());
    let r = await e.stat();
    if (!r.isFile() || r.size > dr) return { state: "unreadable" };
    let o = Buffer.alloc(r.size + 1),
      { bytesRead: s } = await e.read(o, 0, o.length, 0);
    if (s !== r.size) return { state: "failed" };
    return {
      state: "read",
      text: new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }).decode(o.subarray(0, s))
    };
  } catch (r) {
    if (G(r)) return { state: "missing" };
    return { state: Vt(r) || r instanceof TypeError ? "unreadable" : "failed" };
  } finally {
    await e?.close().catch(() => {});
  }
}
async function be(n, e) {
  let r = await de(n);
  return r.state === "read" ? ce(r.text, e) : "different";
}
import { createHash as _r } from "crypto";
import { isIP as wr } from "net";
import { readdir as Lt, readFile as Ft, readlink as ur } from "fs/promises";
var Gt = "<pending>",
  Ut = "<lookup-failed>",
  fr = "<proc-net-unreadable>",
  pr = "<inode-not-found>",
  gr = "<pid-not-found>",
  Mt = "<comm-unreadable>";
async function Wt(n, e) {
  let r = await hr(n, e);
  if (r.startsWith("<")) return r;
  let o = await yr(r);
  if (o === void 0) return gr;
  let s;
  try {
    s = mr(await Ft(`/proc/${o}/comm`, "utf8"));
  } catch {
    return Mt;
  }
  return s.length > 0 ? s : Mt;
}
function mr(n) {
  return n.replace(/[^\x20-\x7e]|</g, "").slice(0, 64);
}
async function hr(n, e) {
  let r = Ht(n),
    o = Ht(e),
    s = !1;
  for (let h of ["/proc/net/tcp", "/proc/net/tcp6"]) {
    let u;
    try {
      u = await Ft(h, "utf8");
    } catch {
      continue;
    }
    s = !0;
    for (let l of u.split(`
`)) {
      let p = l.trim().split(/\s+/);
      if (p.length < 10 || !p[1].endsWith(":" + r) || !p[2].endsWith(":" + o)) continue;
      let y = p[9];
      if (y !== "0") return y;
    }
  }
  return s ? pr : fr;
}
function Ht(n) {
  return n.toString(16).toUpperCase().padStart(4, "0");
}
async function yr(n) {
  let e = `socket:[${n}]`,
    r;
  try {
    r = await Lt("/proc");
  } catch {
    return;
  }
  let o = r.filter((p) => /^\d+$/.test(p)),
    s = await Promise.all(o.map((p) => Lt(`/proc/${p}/fd`).catch(() => []))),
    h = [];
  for (let p = 0; p < o.length; p++) for (let y of s[p]) h.push({ pid: o[p], fd: y });
  let l = (
    await Promise.all(h.map((p) => ur(`/proc/${p.pid}/fd/${p.fd}`).catch(() => "")))
  ).indexOf(e);
  return l === -1 ? void 0 : h[l].pid;
}
var Yt = 524288,
  Tr = 30000,
  Kt = 0,
  br = 1,
  Cr = 2,
  Sr = 3,
  Xt = 4,
  Xe = 2,
  xr = {
    openTimeoutMs: 1e4,
    openMaxAttempts: 3,
    openBackoffBaseMs: 100,
    sendHighWater: 4194304,
    sendLowWater: 1048576,
    drainPollMs: 50,
    sendPauseAfterPendingBytes: 0,
    pendingBytesCap: 33554432,
    sendStallTimeoutMs: 180000,
    receiveHighWater: 4194304,
    receiveLowWater: 1048576,
    downloadQueuedReportBytes: 16777216,
    uploadQueuedReportBytes: 16777216,
    poolMax: 4,
    poolIdleTtlMs: 1e4,
    poolMaxAgeMs: 2700000,
    finGraceMs: 1e4
  };
function Ve(n) {
  let e = n.length,
    r = [],
    o = e;
  while (o > 127) (r.push((o & 127) | 128), (o >>>= 7));
  r.push(o);
  let s = new Uint8Array(1 + r.length + e);
  return ((s[0] = 10), s.set(r, 1), s.set(n, 1 + r.length), s);
}
function je(n, e = 0) {
  let r = [16, n];
  if (e !== 0) r.push(24, e);
  return new Uint8Array(r);
}
function Pr(n) {
  let e = { data: n.subarray(0, 0), control: Kt, version: 0 };
  return tAo(n, {
    onVarint(o, s) {
      if (o === 2) e.control = s;
      else if (o === 3) e.version = s;
    },
    onBytes(o, s) {
      if (o === 1) e.data = s;
    }
  })
    ? e
    : null;
}
function Ce(n) {
  let e = r4t(n);
  if (e.startsWith("*.")) return "*." + Ce(e.slice(2));
  let r = e.replace(/\.+$/, "").toLowerCase(),
    o = o4t(r).replace(/\.+$/, "");
  return o !== "" ? o : r;
}
function Ar(n) {
  let e = n.split(".").map(Number);
  return (
    e[0] === 10 ||
    (e[0] === 172 && e[1] >= 16 && e[1] <= 31) ||
    (e[0] === 192 && e[1] === 168) ||
    (e[0] === 100 && e[1] >= 64 && e[1] <= 127)
  );
}
function qe(n, e) {
  return n === void 0 || Rr(e, n.includeHosts);
}
function Rr(n, e) {
  let r = Ce(n);
  for (let o of e) {
    let s = Ce(o);
    if (s === "") continue;
    if (s === "*") return !0;
    if (s.startsWith("*.")) {
      let u = s.slice(1);
      if (r.endsWith(u)) return !0;
      continue;
    }
    if (!s.includes("*")) {
      if (r === s) return !0;
      continue;
    }
    if (
      new RegExp(
        "^" +
          s
            .split("*")
            .map((u) => u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
            .join("[^.]+") +
          "$"
      ).test(r)
    )
      return !0;
  }
  return !1;
}
function kr(n) {
  let e = Ce(n);
  if (
    e === "localhost" ||
    e === "ip6-localhost" ||
    e === "ip6-loopback" ||
    e === "metadata.google.internal" ||
    e === "instance-data" ||
    e === "instance-data.ec2.internal" ||
    e.endsWith(".localhost")
  )
    return "blocked_hostname";
  let r = e.normalize("NFKC");
  if (r.includes("[") || r.includes(":")) return "ipv6_literal";
  let o = e.split("."),
    s = /^(0|[1-9]\d{0,2})$/;
  if (!(o.length === 4 && o.every((l) => s.test(l) && Number(l) <= 255)))
    return cci(e) !== null || dci(e) ? "noncanonical_ipv4" : null;
  let u = o.map(Number);
  if (u[0] === 0) return "unspecified";
  if (u[0] === 127) return "loopback";
  if (u[0] === 169 && u[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function Or(n) {
  if (!n) return "peer_unreadable";
  if (n.includes(":")) return Br(n);
  let e = n.split(".").map(Number);
  if (e.length !== 4 || e.some((r) => !Number.isFinite(r) || r < 0 || r > 255))
    return "peer_unreadable";
  return qt(e, n);
}
function qt(n, e) {
  if (n[0] === 0) return "unspecified";
  if (n[0] === 127) return "loopback";
  if (n[0] === 169 && n[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function Br(n) {
  let e = Nr(n);
  if (!e) return "peer_unreadable";
  let r = e.slice(0, 12),
    o = r.every((l, p) => l === (p === 10 || p === 11 ? 255 : 0)),
    s = r.every((l) => l === 0),
    h =
      e[0] === 0 &&
      e[1] === 100 &&
      e[2] === 255 &&
      e[3] === 155 &&
      r.slice(4).every((l) => l === 0);
  if (o || s || h) {
    let l = [e[12], e[13], e[14], e[15]],
      p = l.join(".");
    if (s && l.every((y) => y === 0)) return "unspecified";
    if (s && l[0] === 0 && l[1] === 0 && l[2] === 0 && l[3] === 1) return "loopback";
    return qt(l, p);
  }
  if (((e[0] ?? 0) & 224) === 32) return null;
  if ((e[0] ?? 0) === 254 && ((e[1] ?? 0) & 192) === 128) return "link_local";
  if (((e[0] ?? 0) & 254) === 252) return "unique_local";
  return "v6_non_global";
}
function Nr(n) {
  let e = n.indexOf("%"),
    o = (e >= 0 ? n.slice(0, e) : n).toLowerCase().split("::");
  if (o.length > 2) return null;
  let s = o[0] ? o[0].split(":") : [],
    h = o.length === 2 && o[1] ? o[1].split(":") : [],
    u = o.length === 2 ? h : s,
    l = u.at(-1),
    p = [];
  if (l && l.includes(".")) {
    let A = l.split(".").map(Number);
    if (A.length !== 4 || A.some((x) => !Number.isFinite(x) || x < 0 || x > 255)) return null;
    ((p = A), u.pop());
  }
  let y = (A) => {
      let x = [];
      for (let v of A) {
        if (!/^[0-9a-f]{1,4}$/.test(v)) return null;
        let D = parseInt(v, 16);
        x.push(D >> 8, D & 255);
      }
      return x;
    },
    w = y(o.length === 2 ? s : []),
    b = y(u);
  if (w === null || b === null) return null;
  let C = o.length === 2 ? w : b,
    P = o.length === 2 ? (b ?? []).concat(p) : p,
    T = 16 - C.length - P.length;
  if (T < 0 || (o.length === 1 && T !== 0)) return null;
  let S = C.concat(Array(T).fill(0), P);
  return S.length === 16 ? S : null;
}
function zt(n, e, r) {
  let o = e.directUpstream;
  if (!o) return;
  if (o.writeBuf.length > 0) (o.writeBuf.push(r), (o.writeBufBytes += r.length));
  else {
    let s = o.write(r);
    if (s < r.length) (o.writeBuf.push(r.subarray(s)), (o.writeBufBytes += r.length - s));
  }
  if (o.writeBufBytes > e.limits.pendingBytesCap) {
    (Y(
      e.ctx,
      "direct_writebuf_cap",
      `direct-upstream write buffer exceeded ${e.limits.pendingBytesCap} bytes`,
      V(e)
    ),
      (e.closed = !0));
    try {
      o.end();
    } catch {}
    n.end();
  }
}
var Qt = "[\\u0000-\\u001f\\u007f-\\u009f]",
  $r = new RegExp(Qt, "u"),
  Je = new RegExp(Qt, "gu");
function ee(n, e, r) {
  let o = n.badEventBudgets.get(e);
  if (!o) ((o = { bucket: kve(vve, Eve), suppressed: 0 }), n.badEventBudgets.set(e, o));
  if (!o.bucket.tryConsume()) return (o.suppressed++, !1);
  return (
    m(
      "agent_proxy_request",
      e,
      o.suppressed > 0 ? { ...r, suppressed_since_last: o.suppressed } : r
    ),
    (o.suppressed = 0),
    !0
  );
}
function Y(n, e, r, o) {
  let s = {
    ts: new Date().toISOString(),
    kind: e,
    detail: r.replace(Je, "?"),
    host: o?.replace(Je, "?")
  };
  if ((n.failures.push(s), n.failures.length > Evo)) n.failures.shift();
  n.onFailure?.(s);
}
function V(n) {
  return n.connectAuthority || void 0;
}
function Zt(n, e, r, o, s) {
  n.write(
    `HTTP/1.1 ${e} ${r}\r
Content-Type: ${o}\r
Content-Length: ${Buffer.byteLength(s)}\r
Connection: close\r
\r
` + s
  );
}
function Q(n, e, r, o) {
  Zt(
    n,
    e,
    r,
    "text/plain; charset=utf-8",
    `agent-proxy relay: ${o}
GET /__agentproxy/status on this proxy port shows proxy state and recent failures.
`
  );
}
function Ir(n, e, r) {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    pendingBytes: 0,
    startedAt: Date.now(),
    uploadBytes: 0,
    downloadBytes: 0,
    pendingPeakBytes: 0,
    uploadPauses: 0,
    uploadAborted: !1,
    connectRejected: !1,
    wsOpen: !1,
    established: !1,
    closed: !1,
    connectLine: "",
    connectAuthority: "",
    clientProcess: Gt,
    wsAttempt: 0,
    paused: !1,
    sendStallBuffered: 0,
    sendStallSince: 0,
    readPaused: !1,
    limits: n,
    pool: e,
    finSeen: !1,
    localClosed: !1,
    ctx: r
  };
}
function Lr(n, e, r, o) {
  let s = () =>
    new Promise((h, u) => {
      let l = !1,
        p = sn(n, e),
        y = setTimeout(() => {
          if (l) return;
          l = !0;
          try {
            p.close();
          } catch {}
          u(Error("handshake timeout"));
        }, r);
      ((p.onopen = () => {
        if (l) return;
        ((l = !0), clearTimeout(y));
        try {
          p.close();
        } catch {}
        h();
      }),
        (p.onerror = (w) => {
          if (l) return;
          ((l = !0), clearTimeout(y), u(Error(w?.message ?? "WebSocket error")));
        }));
    });
  return (async () => {
    let h;
    for (let u = 0; u < o; u++)
      try {
        await s();
        return;
      } catch (l) {
        if (((h = l), u + 1 < o)) await X(Math.min(200 * 2 ** u, 2000));
      }
    throw h;
  })();
}
var Mr = 1048576,
  Hr = 33554432;
function Fr(n) {
  return new Promise((e, r) => {
    let o = !1,
      s = Buffer.alloc(0),
      h = Bun.listen({
        hostname: "127.0.0.1",
        port: 0,
        socket: {
          data(w, b) {
            if (o) return;
            s = Buffer.concat([s, b]);
            let C = s.indexOf(`\r
\r
`);
            if (C < 0) return;
            let P =
                /sec-websocket-key: *(\S+)/i.exec(s.subarray(0, C).toString("latin1"))?.[1] ?? "",
              T = _r("sha1")
                .update(P + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
                .digest("base64");
            if (
              (w.write(`HTTP/1.1 101 Switching Protocols\r
Upgrade: websocket\r
Connection: Upgrade\r
Sec-WebSocket-Accept: ${T}\r
\r
`),
              (o = !0),
              typeof w.pause === "function")
            )
              w.pause();
          }
        }
      }),
      u = !1,
      l = (w) => {
        if (u) return;
        ((u = !0), clearTimeout(p));
        try {
          y.close();
        } catch {}
        if ((h.stop(!0), w instanceof Error)) r(w);
        else e(w);
      },
      p = setTimeout((w) => w(Error("handshake timeout")), n, l),
      y = new globalThis.WebSocket(`ws://127.0.0.1:${h.port}/`);
    ((y.binaryType = "arraybuffer"),
      (y.onerror = () => l(Error("WebSocket error"))),
      (y.onclose = () => l(Error("closed before the check completed"))),
      (y.onopen = () => {
        let w = new Uint8Array(Mr);
        try {
          for (let b = 0; b < Hr; b += w.length)
            if ((y.send(w), y.bufferedAmount > 0)) {
              l(!0);
              return;
            }
        } catch {
          l(Error("send failed"));
          return;
        }
        l(!1);
      }));
  });
}
async function en(n) {
  let e = n.getToken ?? (() => n.token),
    r = {
      connectHeader: () => "Basic " + Buffer.from(`${n.sessionId}:${e()}`).toString("base64"),
      wsHeader: () => `Bearer ${e()}`
    },
    o = { ...xr, ...n.limits },
    s = {
      statusProvider: n.statusProvider,
      failures: [],
      onFailure: n.onFailure,
      downloadQueuedBytes: 0,
      downloadQueuedPeakBytes: 0,
      uploadPausedClients: 0,
      uploadPauses: 0,
      selective: n.selective,
      upstreamOpened: !1,
      badEventBudgets: new Map()
    },
    h = Ur(n.wsUrl, r, o, s);
  function u() {
    (Lr(n.wsUrl, r, o.openTimeoutMs, o.openMaxAttempts)
      .then(() => {
        t("[agent-proxy] startup reachability probe: ok");
      })
      .catch((l) => {
        if (s.upstreamOpened) {
          t(
            `[agent-proxy] startup reachability probe failed (${l?.message ?? String(l)}) after a tunnel already opened; ignoring`,
            { level: "warn" }
          );
          return;
        }
        ((s.startupError = (
          `hosted agent-proxy unreachable at startup: ${l?.message ?? String(l)}. Tunneled CONNECTs get one dial attempt each and return 502 until ` +
          "one reaches upstream (which clears this) \u2014 inference is " +
          "force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL."
        ).replace(Je, "?")),
          t(`[agent-proxy] ${s.startupError}`, { level: "error" }),
          f("agent_proxy_init", "agent_proxy_startup_probe_failed"));
      }),
      Fr(o.openTimeoutMs)
        .then((l) => {
          if (((s.bufferedAmountTrusted = l), !l))
            (t(
              "[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime",
              { level: "warn" }
            ),
              f("agent_proxy_init", "agent_proxy_buffered_amount_untrusted"));
        })
        .catch((l) => {
          t(`[agent-proxy] bufferedAmount self-check did not run: ${l?.message ?? String(l)}`, {
            level: "warn"
          });
        }));
  }
  return (t(`[agent-proxy] relay listening on 127.0.0.1:${h.port}`), { ...h, runStartupChecks: u });
}
function jt(n) {
  if (
    ((n.ctx.downloadQueuedBytes -= n.writeBufBytes),
    (n.writeBufBytes = 0),
    (n.writeBuf = []),
    Oe(n),
    fe(n),
    n.writeBufPeakBytes > n.limits.receiveHighWater ||
      n.writeBufPeakBytes >= n.limits.downloadQueuedReportBytes)
  )
    a("tengu_agent_proxy_download_queue", { download_queued_peak_bytes: n.writeBufPeakBytes });
  if (
    ((n.writeBufPeakBytes = 0),
    n.uploadPauses > 0 || n.pendingPeakBytes >= n.limits.uploadQueuedReportBytes)
  )
    a("tengu_agent_proxy_upload_queue", {
      upload_queued_peak_bytes: n.pendingPeakBytes,
      upload_pauses: n.uploadPauses,
      upload_aborted: n.uploadAborted
    });
  ((n.pendingPeakBytes = 0), (n.uploadPauses = 0));
}
function Gr() {
  return "pause" in globalThis.WebSocket.prototype;
}
function Ur(n, e, r, o) {
  let s = [],
    h = Bun.listen({
      hostname: "127.0.0.1",
      port: 0,
      socket: {
        open(u) {
          if (
            ((u.data = {
              ...Ir(r, s, o),
              writeBuf: [],
              writeBufBytes: 0,
              writeBufPeakBytes: 0,
              endAfterDrain: !1,
              destroyAfterDrain: !1
            }),
            typeof u.pause === "function")
          )
            u.data.clientRead = u;
          Wt(u.remotePort, u.localPort)
            .catch(() => Ut)
            .then((l) => {
              u.data.clientProcess = l;
            });
        },
        data(u, l) {
          let p = u.data;
          if (p.closed) return;
          let y = {
            write: (w) => {
              let b = typeof w === "string" ? Buffer.from(w, "utf8") : w,
                C = p.writeBuf.length > 0 ? 0 : u.write(b);
              if (C < 0 || C === b.length) return;
              let P = b.subarray(C);
              if (
                (p.writeBuf.push(P),
                (p.writeBufBytes += P.length),
                (p.ctx.downloadQueuedBytes += P.length),
                p.writeBufBytes > p.writeBufPeakBytes)
              )
                p.writeBufPeakBytes = p.writeBufBytes;
              if (p.ctx.downloadQueuedBytes > p.ctx.downloadQueuedPeakBytes)
                p.ctx.downloadQueuedPeakBytes = p.ctx.downloadQueuedBytes;
              if (p.writeBufBytes > p.limits.receiveHighWater) jr(p);
            },
            end: () => {
              if ((fe(p), p.writeBuf.length > 0)) {
                p.endAfterDrain = !0;
                return;
              }
              u.end();
            },
            destroy: () => {
              if ((fe(p), p.writeBuf.length > 0)) {
                p.destroyAfterDrain = !0;
                return;
              }
              u.terminate();
            }
          };
          ((p.client = y), Wr(y, p, l, n, e));
        },
        drain(u) {
          let l = u.data;
          while (l.writeBuf.length > 0) {
            let p = l.writeBuf[0],
              y = u.write(p);
            if (y < 0) break;
            if (((l.writeBufBytes -= y), (l.ctx.downloadQueuedBytes -= y), y < p.length)) {
              l.writeBuf[0] = p.subarray(y);
              break;
            }
            l.writeBuf.shift();
          }
          if (l.writeBufBytes <= l.limits.receiveLowWater) Oe(l);
          if (l.writeBuf.length > 0) return;
          if (l.destroyAfterDrain) {
            ((l.destroyAfterDrain = !1), u.terminate());
            return;
          }
          if (l.endAfterDrain) ((l.endAfterDrain = !1), u.end());
        },
        close(u) {
          let l = u.data;
          if ((jt(l), rn(l))) return;
          if (l.localClosed && l.finCloseTimer) return;
          if (!l.closed && ln(l)) return;
          Z(l);
        },
        error(u, l) {
          t(`[agent-proxy] client socket error: ${l.message}`);
          let p = u.data;
          if ((jt(p), p.localClosed && p.finCloseTimer)) return;
          Z(p);
        }
      }
    });
  return {
    port: h.port,
    stop: () => {
      (zr(s), h.stop(!0));
    }
  };
}
function Wr(n, e, r, o, s) {
  if (!e.ws && !e.directUpstream && !e.directDialing) {
    if (((e.connectBuf = Buffer.concat([e.connectBuf, r])), e.connectBuf[0] === 22)) {
      if (ee(e.ctx, "agent_proxy_request_tls_to_relay"))
        t("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", {
          level: "warn"
        });
      (Y(
        e.ctx,
        "tls_to_relay",
        "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port"
      ),
        (e.closed = !0),
        n.end());
      return;
    }
    let h = e.connectBuf.indexOf(`\r
\r
`);
    if (h === -1) {
      if (e.connectBuf.length > 8192)
        ((e.closed = !0),
          Q(
            n,
            400,
            "Bad Request",
            "request headers exceeded 8 KiB before the end of the CONNECT request"
          ),
          n.end(),
          ee(e.ctx, "agent_proxy_request_header_too_long"),
          Y(e.ctx, "header_too_long", "headers exceeded 8 KiB"));
      return;
    }
    let u = e.connectBuf.subarray(0, h).toString("utf8"),
      l = Ze(
        u,
        `\r
`
      ),
      p = l.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!p) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(l)) {
        let S = {
          ...(e.ctx.statusProvider?.() ?? {}),
          startupError: e.ctx.startupError,
          recentRelayFailures: e.ctx.failures,
          downloadQueuedBytes: e.ctx.downloadQueuedBytes,
          downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes,
          downloadReceivePauseSupported: Gr(),
          downloadReceiveGateEnabled: Number.isFinite(e.limits.receiveHighWater),
          uploadPausedClients: e.ctx.uploadPausedClients,
          uploadPauses: e.ctx.uploadPauses,
          uploadPauseSupported: e.clientRead !== void 0,
          uploadGateEnabled: Number.isFinite(e.limits.sendPauseAfterPendingBytes),
          bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null
        };
        (Zt(
          n,
          200,
          "OK",
          "application/json",
          _(S, null, 2) +
            `
`
        ),
          (e.closed = !0),
          n.end());
        return;
      }
      ((e.closed = !0),
        Q(
          n,
          405,
          "Method Not Allowed",
          "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay."
        ),
        n.end(),
        ee(e.ctx, "agent_proxy_request_not_connect"));
      let [C = "", P = ""] = l.split(/\s+/),
        T = C;
      try {
        let S = new URL(P);
        T = `${C} ${S.protocol}//${S.host}`;
      } catch {}
      Y(e.ctx, "not_connect", `non-CONNECT request: ${T.slice(0, 120)}`);
      return;
    }
    ((e.connectLine = l), (e.connectAuthority = p[1] ?? ""));
    let y = e.connectBuf.subarray(h + 4);
    if (y.length > 0) {
      if ((Ye(n, e, Buffer.from(y)), e.closed)) return;
    }
    e.connectBuf = Buffer.alloc(0);
    let w = e.ctx.selective,
      b = e.connectAuthority;
    if (w && b) {
      let C = b.lastIndexOf(":"),
        P = C > 0 ? b.slice(0, C) : b,
        T = Ce(P.replace(/^\[|\]$/g, ""));
      if ($r.test(T)) Y(e.ctx, "selective_invalid_host", "control byte in CONNECT host", T);
      else if (wr(T) === 4 && !Ar(T)) ;
      else if (!qe(w, T)) {
        let S = C > 0 ? Number(b.slice(C + 1)) : 443;
        Kr(n, e, T, S);
        return;
      }
    }
    Jr(n, e, o, s);
    return;
  }
  if (e.directUpstream) {
    zt(n, e, r);
    return;
  }
  if (e.directDialing) {
    Ye(n, e, Buffer.from(r));
    return;
  }
  if (!e.wsOpen || e.paused) {
    if (
      (Ye(n, e, Buffer.from(r)), !e.closed && e.pendingBytes > e.limits.sendPauseAfterPendingBytes)
    )
      Xr(e);
    return;
  }
  if (((e.redialEligible = !1), e.ws)) (Qe(e, e.ws, r), nn(e));
}
function Ye(n, e, r) {
  if ((e.pending.push(r), (e.pendingBytes += r.length), e.pendingBytes > e.pendingPeakBytes))
    e.pendingPeakBytes = e.pendingBytes;
  if (e.pendingBytes > e.limits.pendingBytesCap)
    (t(
      `[agent-proxy] pending buffer cap (${e.limits.pendingBytesCap}) exceeded; aborting request`,
      { level: "warn" }
    ),
      tn(
        n,
        e,
        "pending_overflow",
        e.established
          ? `upload aborted: more than ${e.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining`
          : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)"
      ));
}
function tn(n, e, r, o) {
  if (
    (ee(e.ctx, `agent_proxy_request_${r}`),
    Y(e.ctx, r, o, V(e)),
    (e.closed = !0),
    (e.uploadAborted = !0),
    !e.established)
  )
    (Q(n, 502, "Bad Gateway", o), n.end());
  else {
    ((e.pending = []), (e.pendingBytes = 0));
    let s = ln(e);
    if ((n.destroy(), s)) return;
  }
  Z(e);
}
function nn(n) {
  if (n.paused || !n.ws) return;
  if (n.ws.bufferedAmount > n.limits.sendHighWater)
    ((n.paused = !0),
      (n.sendStallBuffered = n.ws.bufferedAmount),
      (n.sendStallSince = Date.now()),
      (n.drainTimer = setInterval(Yr, n.limits.drainPollMs, n)));
}
function Yr(n) {
  let e = n.ws;
  if (!e || e.readyState !== WebSocket.OPEN || n.closed) {
    ue(n);
    return;
  }
  let r = Date.now();
  if (e.bufferedAmount < n.sendStallBuffered)
    ((n.sendStallBuffered = e.bufferedAmount), (n.sendStallSince = r));
  else if (n.readPaused && n.client && r - n.sendStallSince > n.limits.sendStallTimeoutMs) {
    ue(n);
    let o = Math.round((r - n.sendStallSince) / 1000);
    (t(`[agent-proxy] tunnel accepted no request bytes for ${o}s; aborting request`, {
      level: "warn"
    }),
      tn(
        n.client,
        n,
        "upload_stalled",
        `upload aborted: the tunnel accepted no request bytes for ${o}s`
      ));
    return;
  }
  if (e.bufferedAmount > n.limits.sendLowWater) return;
  while (n.pending.length > 0 && e.bufferedAmount <= n.limits.sendHighWater) {
    let o = n.pending.shift();
    ((n.pendingBytes -= o.length), (n.redialEligible = !1), Qe(n, e, o));
  }
  if (((n.sendStallBuffered = e.bufferedAmount), (n.sendStallSince = r), n.pending.length === 0))
    ((n.paused = !1), ue(n), fe(n));
}
function ue(n) {
  if (n.drainTimer) (clearInterval(n.drainTimer), (n.drainTimer = void 0));
}
function Xr(n) {
  if (n.readPaused || !n.clientRead) return;
  ((n.readPaused = !0),
    n.uploadPauses++,
    n.ctx.uploadPausedClients++,
    n.ctx.uploadPauses++,
    n.clientRead.pause());
}
function fe(n) {
  if (!n.readPaused || !n.clientRead) return;
  ((n.readPaused = !1), n.ctx.uploadPausedClients--, n.clientRead.resume());
}
function jr(n) {
  let e = n.ws;
  if (!e?.pause || e.readyState !== WebSocket.OPEN || e.isPaused === !0) return;
  e.pause();
}
function Oe(n) {
  let e = n.ws;
  if (!e?.resume || e.readyState !== WebSocket.OPEN || e.isPaused === !1) return;
  e.resume();
}
function Jr(n, e, r, o) {
  let s = Vr(e);
  if (s) {
    ((e.ws = s.ws), (e.wsOpen = !0), (e.pinger = s.pinger), (e.wsMeta = s.meta));
    let h = e.pending.slice();
    e.redialEligible = !0;
    let u = !1,
      l = (p) => {
        if (u || e.closed) return;
        if (
          ((u = !0),
          (e.redialEligible = !1),
          t(`[agent-proxy] pooled ws failed before response (${p}); falling through to fresh dial`),
          e.openTimer)
        )
          (clearTimeout(e.openTimer), (e.openTimer = void 0));
        if (((e.pooledDeadline = void 0), e.pinger)) (clearInterval(e.pinger), (e.pinger = void 0));
        s.ws.onopen = s.ws.onmessage = s.ws.onerror = s.ws.onclose = null;
        try {
          s.ws.close();
        } catch {}
        if (
          ((e.ws = void 0),
          (e.wsOpen = !1),
          (e.wsMeta = void 0),
          ue(e),
          (e.paused = !1),
          (e.pending = [...h, ...e.pending]),
          (e.pendingBytes = e.pending.reduce((y, w) => y + w.length, 0)),
          e.pendingBytes > e.pendingPeakBytes)
        )
          e.pendingPeakBytes = e.pendingBytes;
        ((e.uploadBytes = 0), Ke(n, e, r, o));
      };
    ((e.pooledDeadline = () => {
      if (((e.openTimer = void 0), e.closed || e.established)) return;
      if (e.redialEligible) {
        l("pooled ws unresponsive");
        return;
      }
      ((e.closed = !0),
        ee(e.ctx, "agent_proxy_request_ws_error"),
        Q(
          n,
          502,
          "Bad Gateway",
          "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received"
        ),
        n.end(),
        Y(e.ctx, "ws_error", "pooled tunnel unresponsive before first response", V(e)),
        Z(e));
    }),
      (e.openTimer = setTimeout(no, e.limits.openTimeoutMs, e)),
      on(n, e, s.ws, l),
      an(e, s.ws, o.connectHeader()));
    return;
  }
  Ke(n, e, r, o);
}
function Kr(n, e, r, o) {
  let s = kr(r);
  if (s) {
    ((e.closed = !0),
      Q(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${r} (${s})`),
      n.end(),
      ee(e.ctx, "agent_proxy_direct_blocked_" + s),
      Y(e.ctx, "direct_blocked", s, V(e)));
    return;
  }
  if (!Number.isInteger(o) || o < 1 || o > 65535) {
    ((e.closed = !0),
      Q(n, 400, "Bad Request", "invalid CONNECT port"),
      n.end(),
      ee(e.ctx, "agent_proxy_request_bad_connect_port"),
      Y(e.ctx, "bad_connect_port", "invalid CONNECT port", V(e)));
    return;
  }
  e.directDialing = !0;
  let h = !1,
    u = setTimeout(() => {
      if (e.closed) return;
      ((h = !0),
        (e.closed = !0),
        (e.directDialing = !1),
        Q(
          n,
          504,
          "Gateway Timeout",
          `agent-proxy selective relay: direct dial to ${r}:${o} timed out after ${e.limits.openTimeoutMs}ms`
        ),
        n.end(),
        Y(e.ctx, "direct_dial_timeout", `${r}:${o}`, V(e)));
    }, e.limits.openTimeoutMs);
  Bun.connect({
    hostname: r,
    port: o,
    socket: {
      open(l) {
        if ((clearTimeout(u), e.closed || h)) {
          l.end();
          return;
        }
        let p = Or(l.remoteAddress);
        if (p) {
          (l.end(),
            (e.closed = !0),
            (e.directDialing = !1),
            Q(
              n,
              403,
              "Forbidden",
              `agent-proxy selective relay: normal-networking refused ${r} ` +
                `\u2014 resolved to a blocked address (${p})`
            ),
            n.end(),
            ee(e.ctx, "agent_proxy_direct_peer_blocked_" + p),
            Y(e.ctx, "direct_peer_blocked", p, V(e)));
          return;
        }
        ((e.directUpstream = {
          write: (y) => l.write(y),
          end: () => l.end(),
          writeBuf: [],
          writeBufBytes: 0
        }),
          (e.directDialing = !1),
          n.write(`HTTP/1.1 200 Connection Established\r
\r
`),
          (e.established = !0));
        for (let y of e.pending) zt(n, e, y);
        ((e.pending = []), (e.pendingBytes = 0));
      },
      data(l, p) {
        if (e.closed) return;
        n.write(p);
      },
      drain() {
        let l = e.directUpstream;
        if (!l) return;
        while (l.writeBuf.length > 0) {
          let p = l.writeBuf[0];
          if (!p) {
            l.writeBuf.shift();
            continue;
          }
          let y = l.write(p);
          if (((l.writeBufBytes -= y), y < p.length)) {
            l.writeBuf[0] = p.subarray(y);
            return;
          }
          l.writeBuf.shift();
        }
      },
      close() {
        if (!e.closed) ((e.closed = !0), n.end());
      },
      error(l, p) {
        if ((clearTimeout(u), e.closed)) return;
        if (((e.closed = !0), !e.established))
          (Q(n, 502, "Bad Gateway", `normal-networking dial failed: ${p?.message ?? String(p)}`),
            n.end());
        else n.destroy();
        Y(
          e.ctx,
          e.established ? "direct_upstream_error" : "direct_dial_failed",
          p?.message ?? String(p),
          V(e)
        );
      }
    }
  }).catch((l) => {
    if ((clearTimeout(u), (e.directDialing = !1), e.closed)) return;
    ((e.closed = !0),
      Q(n, 502, "Bad Gateway", `normal-networking dial failed: ${l?.message ?? String(l)}`),
      n.end(),
      Y(e.ctx, "direct_dial_failed", l?.message ?? String(l), V(e)));
  });
}
function Vr(n) {
  let { pool: e, limits: r } = n;
  while (e.length > 0) {
    let o = e.pop();
    if (o.ws.readyState !== WebSocket.OPEN) {
      clearInterval(o.pinger);
      continue;
    }
    if (
      Date.now() - o.idleSince > r.poolIdleTtlMs ||
      Date.now() - o.meta.openedAt > r.poolMaxAgeMs
    ) {
      clearInterval(o.pinger);
      try {
        o.ws.close();
      } catch {}
      continue;
    }
    return o;
  }
  return;
}
function rn(n) {
  let { ws: e, wsMeta: r } = n;
  if (
    !e ||
    !r?.v2 ||
    !n.finSeen ||
    e.readyState !== WebSocket.OPEN ||
    !n.established ||
    n.closed ||
    !n.pinger ||
    n.pool.length >= n.limits.poolMax ||
    Date.now() - r.openedAt > n.limits.poolMaxAgeMs
  )
    return !1;
  (ue(n), Oe(n), fe(n), (e.onmessage = null), (e.onerror = null));
  let o = n.pool;
  return (
    (e.onclose = () => qr(o, e)),
    o.push({ ws: e, pinger: n.pinger, idleSince: Date.now(), meta: r }),
    (n.ws = void 0),
    (n.pinger = void 0),
    (n.wsMeta = void 0),
    !0
  );
}
function qr(n, e) {
  let r = n.findIndex((o) => o.ws === e);
  if (r >= 0) (clearInterval(n[r].pinger), n.splice(r, 1));
}
function zr(n) {
  for (let e of n) {
    (clearInterval(e.pinger), (e.ws.onclose = null));
    try {
      e.ws.close();
    } catch {}
  }
  n.length = 0;
}
function on(n, e, r, o) {
  ((r.onmessage = (s) => {
    let h =
        s.data instanceof ArrayBuffer
          ? new Uint8Array(s.data)
          : new Uint8Array(Buffer.from(s.data)),
      u = Pr(h);
    if (!u) return;
    if (u.control !== Kt) {
      Qr(n, e, r, u);
      return;
    }
    if (u.data.length > 0) {
      if (!e.wsMeta?.v2) {
        ze(n, e, "server sent data before HELLO_ACK");
        return;
      }
      if (e.localClosed) return;
      if (!e.established) {
        e.established = !0;
        let l = Buffer.from(u.data.subarray(0, 16))
          .toString("utf8")
          .match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (l)
          ((e.connectRejected = !0),
            Y(
              e.ctx,
              "connect_rejected",
              `gateway answered ${l[1]} to CONNECT (policy denial or upstream failure)`,
              V(e)
            ));
        if (((e.redialEligible = !1), e.pooledDeadline)) {
          if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
          e.pooledDeadline = void 0;
        }
        g("agent_proxy_request");
      }
      ((e.downloadBytes += u.data.length), n.write(u.data));
    }
  }),
    (r.onerror = (s) => {
      let h = "message" in s ? String(s.message) : "websocket error";
      if ((t(`[agent-proxy] ws error: ${h}`), e.closed)) return;
      if (o && e.redialEligible && !e.established) {
        o(`ws error: ${h}`);
        return;
      }
      if (((e.closed = !0), e.localClosed)) {
        Z(e);
        return;
      }
      if (!e.established)
        (ee(e.ctx, "agent_proxy_request_ws_error"),
          Q(
            n,
            502,
            "Bad Gateway",
            `the WebSocket tunnel to the CCR agent-proxy reported an error (${h.slice(0, 120)})`
          ),
          n.end(),
          Y(e.ctx, "ws_error", `tunnel error before response: ${h.slice(0, 120)}`, V(e)));
      else Jt(n, e, `tunnel error: ${re(h, 120)}`);
      Z(e);
    }),
    (r.onclose = (s) => {
      if (e.closed) return;
      if (o && e.redialEligible && !e.established) {
        o("closed before response");
        return;
      }
      if (((e.closed = !0), e.localClosed)) {
        Z(e);
        return;
      }
      if (!e.established)
        (ee(e.ctx, "agent_proxy_request_ws_error"),
          Q(
            n,
            502,
            "Bad Gateway",
            "the WebSocket tunnel to the CCR agent-proxy closed before a response was received"
          ),
          n.end(),
          Y(e.ctx, "ws_error", "tunnel closed before response", V(e)));
      else
        Jt(
          n,
          e,
          `tunnel closed (code ${s.code}${s.reason ? `, ${re(s.reason, 120)}` : ""})`,
          s.code
        );
      Z(e);
    }));
}
function Jt(n, e, r, o) {
  if (e.connectRejected) {
    n.destroy();
    return;
  }
  let s = Date.now() - e.startedAt;
  (ee(e.ctx, "agent_proxy_request_ws_closed_mid_exchange", {
    elapsed_ms: s,
    upload_bytes: e.uploadBytes,
    download_bytes: e.downloadBytes,
    upload_paused: e.readPaused,
    pending_bytes: e.pendingBytes,
    ...(o !== void 0 && { close_code: o })
  }),
    Y(
      e.ctx,
      "ws_closed_mid_exchange",
      `${r} after ${Math.round(s / 1000)}s; ${e.uploadBytes} B sent, ${e.downloadBytes} B received, client ${e.readPaused ? "paused" : "reading"}, ${e.pendingBytes} B still queued in the relay`,
      V(e)
    ),
    n.destroy());
}
function Qr(n, e, r, o) {
  if (o.control === Cr) {
    if (e.wsMeta && !e.wsMeta.v2) {
      if (o.version !== Xe) {
        ze(n, e, `server acknowledged protocol version ${o.version}, expected ${Xe}`);
        return;
      }
      if (((e.wsMeta.v2 = !0), e.helloAckDeadline)) {
        if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
        e.helloAckDeadline = void 0;
      }
      t("[agent-proxy] tunnel protocol v2 negotiated");
    }
    return;
  }
  if (!e.wsMeta?.v2) return;
  if (o.control === Sr) {
    Zr(n, e, r);
    return;
  }
}
function Zr(n, e, r) {
  if (e.finSeen) return;
  if (e.closed) {
    if (e.finCloseTimer && r.readyState === WebSocket.OPEN)
      ((e.finSeen = !0), r.send(je(Xt)), Z(e));
    return;
  }
  if (((e.finSeen = !0), e.finCloseTimer))
    (clearTimeout(e.finCloseTimer), (e.finCloseTimer = void 0));
  if (!e.localClosed) n.end();
  if ((ue(e), e.openTimer)) (clearTimeout(e.openTimer), (e.openTimer = void 0));
  ((e.pooledDeadline = void 0),
    (e.paused = !1),
    (e.pending = []),
    (e.pendingBytes = 0),
    r.send(je(Xt)));
  let o = rn(e);
  if (((e.closed = !0), !o)) Z(e);
}
function an(n, e, r) {
  let o = `${n.connectLine}\r
Proxy-Authorization: ${r}\r
X-Agent-Proxy-Client-Process: ${n.clientProcess}\r
\r
`;
  e.send(Ve(Buffer.from(o, "utf8")));
  for (let s of n.pending) Qe(n, e, s);
  ((n.pending = []), (n.pendingBytes = 0), fe(n), nn(n));
}
function sn(n, e) {
  let r = { "Content-Type": "application/proto", Authorization: e.wsHeader() },
    o = new globalThis.WebSocket(n, { headers: r, proxy: sT(n), tls: lk(void 0) || void 0 });
  return ((o.binaryType = "arraybuffer"), o);
}
function Ke(n, e, r, o) {
  if (e.wsAttempt === 0) e.probeErrorAtDial = e.ctx.startupError;
  let s = sn(r, o);
  ((e.ws = s), (e.wsOpen = !1), (e.wsMeta = void 0));
  let h = () => {
      s.onopen = s.onmessage = s.onerror = s.onclose = null;
      try {
        s.close();
      } catch {}
    },
    u = (l) => {
      if (e.closed) return;
      if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
      (h(), e.wsAttempt++);
      let p = e.probeErrorAtDial,
        y = p ? 1 : e.limits.openMaxAttempts;
      if (e.wsAttempt < y) {
        let b = e.limits.openBackoffBaseMs * 2 ** (e.wsAttempt - 1);
        (t(`[agent-proxy] ws open failed (${l}); retry ${e.wsAttempt}/${y - 1} in ${b}ms`),
          (e.openTimer = setTimeout(Ke, b, n, e, r, o)));
        return;
      }
      (t(`[agent-proxy] ws open failed (${l}); attempts exhausted`),
        (e.closed = !0),
        ee(e.ctx, "agent_proxy_request_ws_error"));
      let w = `could not open the WebSocket tunnel to the CCR agent-proxy (${l.slice(0, 120)}) after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}`;
      (Q(n, 502, "Bad Gateway", p ? `${w}. Also: ${p}` : w),
        n.end(),
        Y(
          e.ctx,
          "ws_open_failed",
          `tunnel open failed after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}: ${l.slice(0, 120)}`,
          V(e)
        ),
        Z(e));
    };
  ((e.failOrRetry = u),
    (e.openTimer = setTimeout(to, e.limits.openTimeoutMs, e)),
    (s.onopen = () => {
      if (e.closed) return;
      if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
      ((e.failOrRetry = void 0),
        (e.wsOpen = !0),
        (e.wsMeta = { v2: !1, openedAt: Date.now() }),
        (e.ctx.startupError = void 0),
        (e.ctx.upstreamOpened = !0),
        on(n, e, s),
        s.send(je(br, Xe)),
        an(e, s, o.connectHeader()),
        (e.pinger = setInterval(eo, Tr, s)),
        (e.helloAckDeadline = () => {
          ((e.openTimer = void 0),
            (e.helloAckDeadline = void 0),
            ze(n, e, `no HELLO_ACK within ${e.limits.openTimeoutMs}ms`));
        }),
        (e.openTimer = setTimeout(ro, e.limits.openTimeoutMs, e)));
    }),
    (s.onerror = (l) => {
      let p = "message" in l ? String(l.message) : "websocket error";
      (t(`[agent-proxy] ws error: ${p}`), u(p));
    }),
    (s.onclose = () => u("closed before open")));
}
function eo(n) {
  if (n.readyState === WebSocket.OPEN) n.send(Ve(new Uint8Array(0)));
}
function to(n) {
  if (n.ws && n.ws.readyState === WebSocket.CONNECTING)
    (t("[agent-proxy] ws open timeout"), n.failOrRetry?.("handshake timeout"));
}
function no(n) {
  n.pooledDeadline?.();
}
function ro(n) {
  n.helloAckDeadline?.();
}
function ze(n, e, r) {
  if (e.closed) return;
  ((e.closed = !0),
    t(`[agent-proxy] tunnel protocol v2 negotiation failed: ${r}`, { level: "warn" }),
    ee(e.ctx, "agent_proxy_request_v2_not_acked"),
    Q(
      n,
      502,
      "Bad Gateway",
      `requires tunnel protocol v2; the server did not acknowledge the negotiation (${r}) \u2014 server too old or connection broken`
    ),
    n.end(),
    Y(e.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${r}`, V(e)),
    Z(e));
}
function ln(n) {
  if (!n.wsMeta?.v2 || n.finSeen || n.localClosed || n.ws?.readyState !== WebSocket.OPEN) return !1;
  if (((n.localClosed = !0), (n.redialEligible = !1), n.openTimer))
    (clearTimeout(n.openTimer), (n.openTimer = void 0));
  return (
    (n.pooledDeadline = void 0),
    (n.finCloseTimer = setTimeout(oo, n.limits.finGraceMs, n)),
    !0
  );
}
function oo(n) {
  if (((n.finCloseTimer = void 0), n.finSeen)) return;
  Z(n);
}
function Qe(n, e, r) {
  if (e.readyState !== WebSocket.OPEN) return;
  n.uploadBytes += r.length;
  for (let o = 0; o < r.length; o += Yt) {
    let s = r.subarray(o, o + Yt);
    e.send(Ve(s));
  }
}
function Z(n) {
  if (!n) return;
  if (n.directUpstream) {
    try {
      n.directUpstream.end();
    } catch {}
    n.directUpstream = void 0;
  }
  if (((n.closed = !0), n.pinger)) clearInterval(n.pinger);
  if (n.openTimer) (clearTimeout(n.openTimer), (n.openTimer = void 0));
  if (n.finCloseTimer) (clearTimeout(n.finCloseTimer), (n.finCloseTimer = void 0));
  if (
    (ue(n),
    Oe(n),
    fe(n),
    (n.pending = []),
    (n.pendingBytes = 0),
    (n.failOrRetry = void 0),
    (n.redialEligible = !1),
    (n.pooledDeadline = void 0),
    (n.helloAckDeadline = void 0),
    n.ws && n.ws.readyState <= WebSocket.OPEN)
  )
    try {
      n.ws.close();
    } catch {}
  n.ws = void 0;
}
import { constants as De } from "fs";
import {
  chmod as io,
  lstat as $e,
  open as fn,
  readdir as ao,
  readlink as so,
  rename as lo,
  stat as rt,
  symlink as co,
  unlink as Be
} from "fs/promises";
import { basename as ot, join as Se } from "path";
var pn = {
    script: "update-ca-certificates",
    conf: "/etc/ca-certificates.conf",
    distCertsDir: "/usr/share/ca-certificates",
    localCertsDir: "/usr/local/share/ca-certificates",
    certsDir: "/etc/ssl/certs",
    bundle: "/etc/ssl/certs/ca-certificates.crt",
    hooksDir: "/etc/ca-certificates/update.d",
    restorecon: "/sbin/restorecon",
    rehash: ["openssl", "rehash", "."],
    listHooks: ["run-parts", "--test", "--", "/etc/ca-certificates/update.d"]
  },
  uo = [
    "CERTSCONF=/etc/ca-certificates.conf",
    "CERTSDIR=/usr/share/ca-certificates",
    "LOCALCERTSDIR=/usr/local/share/ca-certificates",
    "ETCCERTSDIR=/etc/ssl/certs",
    "HOOKSDIR=/etc/ca-certificates/update.d"
  ],
  fo = 65536,
  po = 262144,
  go = 1048576,
  mo = 4194304,
  ho = 1048576,
  cn = 2048;
async function at(n, e) {
  let { anchorPath: r, link: o, layout: s, recordPath: h, timeoutMs: u } = e,
    l = Buffer.from(n, "utf8"),
    p;
  try {
    p = await _o(r, o, l, s);
  } catch (x) {
    p = { reason: "layout", detail: d(x) };
  }
  if ("reason" in p)
    return (
      t(
        `[agent-proxy] direct CA install not attempted (${p.reason}: ${p.detail}); using ${s.script}`
      ),
      { outcome: "not_attempted", reason: p.reason }
    );
  await Be(h).catch(() => {});
  let y;
  try {
    ((y = await fn(r, De.O_WRONLY | De.O_CREAT | De.O_EXCL, 420)),
      await y.writeFile(l),
      await y.chmod(420),
      await y.close());
  } catch (x) {
    if (y) (await y.close().catch(() => {}), await Be(r).catch(() => {}));
    return (
      t(`[agent-proxy] direct CA install not attempted (anchor: ${d(x)}); using ${s.script}`),
      { outcome: "not_attempted", reason: "anchor_create" }
    );
  }
  let w = !1,
    b = async (x, v) => {
      if (
        (t(
          `[agent-proxy] direct CA install abandoned at ${x} (${v}); running ${s.script} instead`,
          { level: "warn" }
        ),
        w)
      )
        await Be(o).catch(() => {});
      return { outcome: "abandoned", step: x };
    };
  try {
    let x = await PM(s.bundle, p.bundle);
    try {
      (await io(x, 420), await lo(x, s.bundle));
    } catch (v) {
      throw (await Be(x).catch(() => {}), v);
    }
  } catch (x) {
    return await b("bundle", d(x));
  }
  try {
    (await co(r, o), (w = !0));
  } catch (x) {
    return await b("link", d(x));
  }
  let C = Date.now() + u,
    P = (x, v) =>
      it(x[0], x.slice(1), {
        timeout: Math.max(1, C - Date.now()),
        cwd: s.certsDir,
        ...(v === void 0 ? { stdin: "ignore" } : { input: v }),
        maxBuffer: ho,
        preserveOutputOnError: !0
      }),
    T = await P(s.rehash);
  if ((nt("openssl rehash", T), T.exitCode !== 0)) return await b("rehash", tt(T));
  let S = [];
  if (
    (
      await rt(s.hooksDir).catch(() => {
        return;
      })
    )?.isDirectory()
  ) {
    let x = await P(s.listHooks);
    if (x.exitCode !== 0) return (nt("run-parts", x), await b("hooks", tt(x)));
    S = x.stdout
      .split(
        `
`
      )
      .filter((v) => v.length > 0);
  }
  for (let x of S) {
    let v = await P(
      [x],
      `+${o}
`
    );
    if ((nt(x, v), v.exitCode === void 0))
      return (
        t(
          `[agent-proxy] direct CA install: hook ${x} gave no exit status (${tt(v)}); not recording the install, so the next start redoes it`,
          { level: "warn" }
        ),
        { outcome: "hook_incomplete" }
      );
    if (v.exitCode !== 0)
      t(
        `[agent-proxy] direct CA install: hook ${x} exit status ${v.exitCode} ignored, as ${s.script} ignores it`
      );
  }
  return { outcome: "installed" };
}
async function _o(n, e, r, o) {
  let s = o.script.includes("/") ? o.script : await hc(o.script),
    h = s ? await Ie(s, fo) : void 0;
  if (
    h === void 0 ||
    !h.subarray(0, 9).equals(Buffer.from("#!/bin/sh")) ||
    !uo.every((T) => h.includes(T))
  )
    return { reason: "script", detail: s ?? o.script };
  let u = await Ie(o.conf, po);
  if (u === void 0 || u.length === 0) return { reason: "conf", detail: o.conf };
  for (let T of [o.certsDir, o.localCertsDir, o.distCertsDir])
    if (
      !(
        await $e(T).catch(() => {
          return;
        })
      )?.isDirectory()
    )
      return { reason: "layout", detail: T };
  if (
    !(
      await $e(o.bundle).catch(() => {
        return;
      })
    )?.isFile()
  )
    return { reason: "layout", detail: o.bundle };
  if (await un(o.restorecon)) return { reason: "layout", detail: o.restorecon };
  for (let T of [n, e]) if (await un(T)) return { reason: "anchor_present", detail: `${T} exists` };
  let l = [],
    p = (T) => ({ reason: "unsynced", detail: T });
  for (let T of u.toString("utf8").split(`
`)) {
    if (T === "" || T.startsWith("#")) continue;
    if (T.startsWith("!")) {
      let x = Se(o.certsDir, `${ot(T.slice(1), ".crt")}.pem`);
      if (
        (
          await $e(x).catch(() => {
            return;
          })
        )?.isSymbolicLink()
      )
        return p(`${x} still linked`);
      continue;
    }
    let S = Se(o.distCertsDir, T);
    if (
      !(
        await rt(S).catch(() => {
          return;
        })
      )?.isFile()
    )
      continue;
    let A = await dn(S, o);
    if (A === void 0) return p(S);
    l.push(A);
  }
  let y = ot(n),
    w = [y];
  for (let T of await ao(o.localCertsDir, { withFileTypes: !0 })) {
    let S = await rt(Se(o.localCertsDir, T.name));
    if (S.isDirectory()) return p(`${T.name} is a directory`);
    if (S.isFile() && T.name.endsWith(".crt")) w.push(T.name);
  }
  w.sort();
  let b = gn(r);
  for (let T of w) {
    if (T === y) {
      l.push(b);
      continue;
    }
    let S = Se(o.localCertsDir, T),
      A = await dn(S, o);
    if (A === void 0) return p(S);
    l.push(A);
  }
  let C = await Ie(o.bundle, mo),
    P = Buffer.concat(l.filter((T) => T !== b));
  if (C === void 0 || !C.equals(P)) return p("bundle differs from what the script would build");
  return { bundle: Buffer.concat(l) };
}
async function dn(n, e) {
  let r = ot(n, ".crt").replace(/ /g, "_").replace(/[()]/g, "=").replace(/,/g, "_") + ".pem";
  if (
    (await so(Se(e.certsDir, r)).catch(() => {
      return;
    })) !== n
  )
    return;
  let s = await Ie(n, go);
  return s && gn(s);
}
function gn(n) {
  return n.length === 0 || n.at(-1) === 10
    ? n
    : Buffer.concat([
        n,
        Buffer.from(`
`)
      ]);
}
async function un(n) {
  return $e(n).then(
    () => !0,
    (e) => {
      if (G(e)) return !1;
      throw e;
    }
  );
}
async function Ie(n, e) {
  let r;
  try {
    r = await fn(n, De.O_RDONLY | zTe());
    let o = await r.stat();
    if (!o.isFile() || o.size > e) return;
    return await r.readFile();
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {});
  }
}
function tt(n) {
  if (n.exitCode !== void 0) return `exit status ${n.exitCode}`;
  if (n.timedOut) return "still running at the deadline";
  if (n.maxBufferExceeded) return "output over the cap";
  return `did not run (${n.error ?? "unknown"})`;
}
function nt(n, e) {
  let r = `${e.stdout}
${e.stderr}`.trim();
  if (!r) return;
  if (r.length > cn) r = `${r.slice(0, cn)}\u2026 (${r.length} chars)`;
  t(`[agent-proxy] ${n}: ${r}`);
}
import { createHash as wo, X509Certificate as To } from "crypto";
import {
  mkdir as dt,
  open as Cn,
  readdir as bo,
  readFile as ut,
  realpath as ft,
  rename as Co,
  unlink as te,
  writeFile as ie
} from "fs/promises";
import { homedir as mn } from "os";
import { basename as So, dirname as He, join as oe } from "path";
var he = "changeit",
  xo = /[\s'"]/,
  Sn = "# >>> ccr-agent-proxy (managed by Claude Code) >>>",
  Me = "# <<< ccr-agent-proxy <<<",
  xn = ".ca-v2",
  Eo = 4277010157,
  Po = 33554432,
  Ao = 2,
  vo = 2,
  Ro = 20,
  ko = /^Your keystore contains 0 entries\s*$/m,
  Oo = 3000;
function pt(n, e = [...P3r, ..._ar]) {
  let r = wo("sha256")
    .update(
      [...e].sort().join(`
`)
    )
    .digest("hex")
    .slice(0, 16);
  return `${n}${xn}-${r}.pem`;
}
function En(n, e, r) {
  let o = r?.trim();
  if (o?.includes("javax.net.ssl.trustStore=")) return o;
  let s = Pn(n, e).join(" ");
  return o ? `${s} ${o}` : s;
}
function Pn(n, e) {
  return e === "JKS"
    ? [`-Djavax.net.ssl.trustStore=${n}`, "-Djavax.net.ssl.trustStoreType=JKS"]
    : [
        `-Djavax.net.ssl.trustStore=${n}`,
        `-Djavax.net.ssl.trustStorePassword=${he}`,
        "-Djavax.net.ssl.trustStoreType=PKCS12"
      ];
}
async function Fe(n) {
  let e = [],
    r = { failureCodes: e },
    o = { used: !1 },
    s = oe(n.stateDir, "agent-proxy-ca.crt");
  try {
    (await dt(n.stateDir, { recursive: !0 }), await ie(s, n.ccrCa, "utf8"));
  } catch (w) {
    return (
      t(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${d(w)}`, { level: "warn" }),
      m("agent_proxy_tool_trust", "ca_file_write_failed"),
      r
    );
  }
  let h = await hn(n.keytoolBin, Bo),
    u = await hn(n.certutilBin, () => hc("certutil")),
    [l, p] = await Promise.all([
      (async () => {
        if (!h) {
          t("[agent-proxy] no keytool found; skipping JVM truststore");
          return;
        }
        let w = oe(n.stateDir, "java-truststore.p12"),
          b = n.bazelrcPath ?? "/etc/bazel.bazelrc",
          C,
          P = [],
          T = n.ccrCa.match(TR),
          S = async () => {
            let { cacerts: D, store: L } = await yn(h, P),
              k =
                L !== void 0 &&
                T !== null &&
                T.every((B) => {
                  let J = lt(B);
                  return J.length >= 64 && J[0] === 48 && L.includes(J);
                }) &&
                _n(L) === "clean";
            return { cacerts: D, usable: k };
          },
          A = await S(),
          x = await vn(w),
          v = x.state === "file" && (await be(pt(w), n.ccrCa)) === "same";
        if (!A.usable && !v)
          (await n.systemTrust?.then(
            () => {},
            () => {}
          ),
            (A = await S()));
        if (A.cacerts && A.usable)
          (t(`[agent-proxy] JDK truststore at ${A.cacerts} already holds the CA; using it`),
            (C = { path: A.cacerts, type: "JKS", source: "system" }));
        else if (v)
          (t(`[agent-proxy] reusing JVM truststore at ${w}`),
            (C = { path: w, type: "PKCS12", source: "reused" }));
        else {
          let D = (B) => Do(h, A.cacerts, n.ccrCa, s, w, B),
            L = [],
            k = await D(L);
          if (L[0] === "java_truststore_seed_failed")
            ((o.used = !0),
              t("[agent-proxy] keytool seed failed; trying once more after a pause"),
              await (n.seedRetryPause?.() ?? X(Oo)),
              (k = await D(e)));
          else e.push(...L);
          if (!k) {
            await yn(h, P);
            for (let { cacerts: B, store: J } of P) {
              let H = _n(J);
              if (H !== "part_written") {
                r.rejectedJdkStorePath = H === "failed_filter" ? B : void 0;
                break;
              }
            }
            if (await Io(h, w, x, r.rejectedJdkStorePath, b, e)) r.retiredJavaTrustStorePath = w;
            return;
          }
          C = { path: k, type: "PKCS12", source: "built" };
        }
        if (xo.test(C.path)) {
          (t(
            `[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${C.path}`,
            { level: "warn" }
          ),
            e.push("jvm_unsafe_truststore_path"));
          return;
        }
        return (
          (r.javaTrustStorePath = C.path),
          (r.javaTrustStoreType = C.type),
          await Lo(C.path, C.type, b, e),
          C.source
        );
      })(),
      (async () => {
        if (!u) {
          t("[agent-proxy] certutil not found; skipping NSS trust for browsers");
          return;
        }
        return Ho(
          s,
          n.ccrCa,
          n.nssDbDirs ?? [oe(mn(), ".pki", "nssdb"), oe(bKe(), "pki", "nssdb")],
          u,
          e
        );
      })(),
      Go(n.caBundlePath, n.botoConfigPath ?? oe(mn(), ".boto"), e),
      Uo(n, n.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", e).then((w) => {
        r.profileDPath = w;
      })
    ]),
    y = p === void 0 ? void 0 : { nss_dbs_unchanged: p };
  if (e.length === 0)
    g("agent_proxy_tool_trust", {
      reused: l === "reused",
      ...(l && { store: c(l) }),
      ...(o.used && { java_seed_retried: !0 }),
      ...y
    });
  else {
    let w = e[0];
    if (o.used || y)
      f("agent_proxy_tool_trust", w, { ...(o.used && { java_seed_retried: !0 }), ...y });
    else f("agent_proxy_tool_trust", w);
  }
  return r;
}
async function hn(n, e) {
  if (n)
    return ft(n).catch(() => {
      return;
    });
  return (await e()) ?? void 0;
}
async function Bo() {
  let n = [await hc("keytool"), i.JAVA_HOME ? oe(i.JAVA_HOME, "bin", "keytool") : void 0],
    e;
  for (let r of n) {
    if (!r) continue;
    let o = await ft(r).catch(() => {
      return;
    });
    if (!o) continue;
    if (((e ??= o), await An(o))) return o;
  }
  return e;
}
async function An(n) {
  let e = He(He(n));
  for (let r of [oe(e, "lib", "security", "cacerts"), oe(e, "jre", "lib", "security", "cacerts")]) {
    let o = await ft(r).catch(() => {
      return;
    });
    if (o) return o;
  }
  return;
}
async function vn(n) {
  let e;
  try {
    e = await Cn(n, vc());
    let r = await e.stat();
    return r.isFile()
      ? { state: "file", identity: `${r.ino}:${r.size}:${r.mtimeMs}` }
      : { state: "unusable" };
  } catch (r) {
    return { state: Vt(r) ? "unusable" : "unknown" };
  } finally {
    await e?.close().catch(() => {});
  }
}
function Rn(n) {
  if (_ar.size === 0) return !0;
  try {
    return (new To(n).publicKey.export({ type: "spki", format: "der" }), !0);
  } catch {
    return !1;
  }
}
async function No(n) {
  let e;
  try {
    e = await Cn(n, vc());
    let r = await e.stat();
    return r.isFile() && r.size <= Po ? await e.readFile() : void 0;
  } catch {
    return;
  } finally {
    await e?.close().catch(() => {});
  }
}
async function yn(n, e) {
  let r = await An(n),
    o = r === void 0 ? void 0 : await No(r);
  if (r !== void 0 && o !== void 0) e.unshift({ cacerts: r, store: o });
  return { cacerts: r, store: o };
}
function _n(n) {
  let e = [],
    r = !1;
  try {
    if (n.readUInt32BE(0) !== Eo || n.readUInt32BE(4) !== Ao) return "failed_filter";
    let o = 12;
    for (let h = n.readUInt32BE(8); h > 0; h--) {
      if (n.readUInt32BE(o) !== vo) return "failed_filter";
      ((o += 4), (o += 2 + n.readUInt16BE(o)), (o += 8), (o += 2 + n.readUInt16BE(o)));
      let u = n.readUInt32BE(o);
      if (((o += 4), o + u > n.length)) return "part_written";
      let l = n.toString("base64", o, o + u);
      (e.push(`-----BEGIN CERTIFICATE-----
${l}
-----END CERTIFICATE-----`),
        (o += u));
    }
    let s = o + Ro;
    if (s < n.length) return "failed_filter";
    r = s === n.length;
  } catch {
    return "part_written";
  }
  if (
    !e.every(Rn) ||
    (Jbe(
      e.join(`
`),
      "agent proxy trust"
    )?.match(TR)?.length ?? 0) !== e.length
  )
    return "failed_filter";
  return r ? "clean" : "part_written";
}
async function Do(n, e, r, o, s, h) {
  if (!e) {
    (t(`[agent-proxy] no JDK cacerts found near ${n}; skipping JVM truststore`),
      h.push("jdk_cacerts_not_found"));
    return;
  }
  let u = `${s}.${process.pid}.tmp`;
  await te(u).catch(() => {});
  let l = await ne(n, [
    "-importkeystore",
    "-noprompt",
    "-srckeystore",
    e,
    "-srcstorepass",
    he,
    "-destkeystore",
    u,
    "-deststoretype",
    "PKCS12",
    "-deststorepass",
    he
  ]);
  if (!l.ok) {
    (t(`[agent-proxy] keytool importkeystore failed: ${l.detail}`, { level: "warn" }),
      h.push("java_truststore_seed_failed"),
      await te(u).catch(() => {}));
    return;
  }
  let p = await $o(n, u);
  if (!p.ok) {
    (t(`[agent-proxy] could not filter the JVM truststore: ${p.detail}`, { level: "warn" }),
      h.push("java_truststore_filter_failed"),
      await te(u).catch(() => {}));
    return;
  }
  let y = await wn(n, u, "ccr-agent-proxy", o);
  if (!y.ok) {
    (t(`[agent-proxy] keytool importcert failed: ${y.detail}`, { level: "warn" }),
      h.push("java_truststore_import_failed"),
      await te(u).catch(() => {}));
    return;
  }
  let w = xe(r),
    b = !0;
  if (w !== void 0) {
    let S = `${u}.second.crt`,
      A = await ie(
        S,
        `${w}
`,
        "utf8"
      ).then(
        () => wn(n, u, "ccr-agent-proxy-2", S),
        (x) => ({ ok: !1, detail: d(x) })
      );
    if ((await te(S).catch(() => {}), !A.ok))
      (t(
        `[agent-proxy] could not import the second certificate: ${A.detail}; the store holds the first only and is rebuilt on the next start`,
        { level: "warn" }
      ),
        h.push("java_truststore_second_import_failed"),
        (b = !1));
  }
  let C = pt(s);
  await te(C).catch(() => {});
  let P = He(s),
    T = `${So(s)}${xn}-`;
  for (let S of await bo(P).catch(() => []))
    if (S.startsWith(T)) await te(oe(P, S)).catch(() => {});
  try {
    await Co(u, s).catch(async () => {
      (await ie(s, await ut(u)), await te(u).catch(() => {}));
    });
  } catch (S) {
    (t(`[agent-proxy] could not move JVM truststore into place: ${d(S)}`, { level: "warn" }),
      h.push("java_truststore_publish_failed"),
      await te(u).catch(() => {}));
    return;
  }
  if (b)
    await ie(C, r, "utf8").catch((S) => {
      t(`[agent-proxy] could not record the truststore's CA: ${d(S)}`);
    });
  return (t(`[agent-proxy] JVM truststore built at ${s}`), s);
}
function kn() {
  return { ...Mo(), _JAVA_OPTIONS: void 0, JAVA_TOOL_OPTIONS: void 0 };
}
async function st(n, e) {
  let r = await ne(
    n,
    [
      "-list",
      "-rfc",
      "-keystore",
      e,
      "-storetype",
      "PKCS12",
      "-storepass",
      he,
      "-J-Duser.language=en"
    ],
    kn()
  );
  if (!r.ok) return { ok: !1, detail: r.detail, aliases: [] };
  let o = r.stdout.split(/^Alias name: /m).slice(1),
    s = Jbe(r.stdout, "agent proxy trust");
  if (s === void 0 || (o.length === 0 && !ko.test(r.stdout)) || o.some((u) => !u.match(TR)))
    return { ok: !1, detail: `no usable listing (${o.length} entries read)`, aliases: [] };
  return {
    ok: !0,
    detail: "",
    aliases: o
      .filter((u) => u.match(TR)?.some((l) => !s.includes(l) || !Rn(l)))
      .map((u) =>
        u
          .slice(
            0,
            u.indexOf(`
`)
          )
          .trimEnd()
      )
  };
}
async function $o(n, e) {
  let r = await st(n, e);
  if (!r.ok || r.aliases.length === 0) return r;
  if (r.aliases.some((s) => s.startsWith("-")))
    return { ok: !1, detail: "an entry to remove has an unsafe alias" };
  t(
    `[agent-proxy] removing ${r.aliases.length} denied or unreadable entries from the JVM truststore`
  );
  for (let s of r.aliases) {
    let h = await ne(
      n,
      ["-delete", "-alias", s, "-keystore", e, "-storetype", "PKCS12", "-storepass", he],
      kn()
    );
    if (!h.ok) return h;
  }
  let o = await st(n, e);
  return o.ok && o.aliases.length > 0
    ? { ok: !1, detail: `${o.aliases.length} entries remain` }
    : o;
}
function wn(n, e, r, o) {
  return ne(n, [
    "-importcert",
    "-noprompt",
    "-alias",
    r,
    "-file",
    o,
    "-keystore",
    e,
    "-storetype",
    "PKCS12",
    "-storepass",
    he
  ]);
}
async function Io(n, e, r, o, s, h) {
  let u = await de(pt(e)),
    l =
      r.state !== "unknown" && u.state !== "failed" && !(r.state === "file" && u.state === "read");
  if (l && r.state === "file") {
    let b = await st(n, e);
    l = !b.ok || b.aliases.length > 0;
  }
  let p = await vn(e),
    y = p.state === "file" && r.state === "file" && p.identity === r.identity,
    w = l && (y || p.state === "unusable");
  try {
    let b = await ut(s, "utf8").catch((T) => {
        if (G(T)) return "";
        throw T;
      }),
      { block: C, rest: P } = On(b);
    if ((w && C.includes(e)) || (o !== void 0 && C.includes(o)))
      (await ie(s, P, "utf8"), t(`[agent-proxy] removed Bazel trust block from ${s}`));
  } catch (b) {
    (t(`[agent-proxy] could not update ${s}: ${d(b)}`), h.push("bazelrc_write_failed"));
  }
  if (w && y) await te(e).catch(() => {});
  return w;
}
function On(n) {
  let e = n.indexOf(Sn),
    r = n.indexOf(Me);
  return e >= 0 && r > e
    ? {
        block: n.slice(e, r + Me.length),
        rest: n.slice(0, e) + n.slice(r + Me.length).replace(/^\n/, "")
      }
    : { block: "", rest: n };
}
async function Lo(n, e, r, o) {
  let s = Pn(n, e)
      .map((y) => `--host_jvm_args=${y}`)
      .join(" "),
    h = `${Sn}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup ${s}
${Me}
`,
    u;
  try {
    u = await ut(r, "utf8");
  } catch (y) {
    if (!G(y)) {
      (t(`[agent-proxy] could not read ${r}: ${d(y)}`), o.push("bazelrc_write_failed"));
      return;
    }
    u = "";
  }
  let l = On(u).rest.trimEnd(),
    p = l
      ? `${l}

${h}`
      : h;
  if (p === u) return;
  try {
    (await ie(r, p, "utf8"), t(`[agent-proxy] wrote Bazel trust block to ${r}`));
  } catch (y) {
    (t(`[agent-proxy] could not write ${r}: ${d(y)}`), o.push("bazelrc_write_failed"));
  }
}
async function Ho(n, e, r, o, s) {
  let h = 0,
    u = e.match(TR)?.[0],
    l = xe(e),
    p = `${n}.${process.pid}.second`;
  if (l !== void 0)
    await ie(
      p,
      `${l}
`,
      "utf8"
    ).catch(() => {});
  for (let y of r) {
    if (
      !(await dt(y, { recursive: !0 }).then(
        () => !0,
        (T) => (t(`[agent-proxy] could not create NSS dir ${y}: ${d(T)}`), !1)
      ))
    ) {
      s.push("nss_add_failed");
      continue;
    }
    let b = `sql:${y}`;
    if (
      u !== void 0 &&
      (await Fo(o, b, l === void 0 ? [u] : [u, l]).catch(
        (T) => (t(`[agent-proxy] NSS check of ${y} threw, taken as a difference: ${d(T)}`), !1)
      ))
    ) {
      (t(`[agent-proxy] NSS DB at ${y} already holds the served certificates, trusted; left as is`),
        h++);
      continue;
    }
    (await ne(o, ["-D", "-d", b, "-n", "ccr-agent-proxy"]),
      await ne(o, ["-D", "-d", b, "-n", "ccr-agent-proxy-2"]));
    let C = Tn(b, "ccr-agent-proxy", n),
      P = await ne(o, C);
    if (!P.ok) (await ne(o, ["-N", "--empty-password", "-d", b]), (P = await ne(o, C)));
    if (P.ok) {
      if ((t(`[agent-proxy] MITM CA added to NSS DB at ${y}`), l !== void 0)) {
        let T = await ne(o, Tn(b, "ccr-agent-proxy-2", p));
        if (!T.ok)
          (t(
            `[agent-proxy] could not add the second certificate to the NSS DB at ${y}: ${T.detail}; it holds the first only`
          ),
            s.push("nss_second_add_failed"));
      }
    } else (t(`[agent-proxy] certutil -A failed for ${y}: ${P.detail}`), s.push("nss_add_failed"));
  }
  return (await te(p).catch(() => {}), h);
}
function Tn(n, e, r) {
  return ["-A", "-d", n, "-t", "C,,", "-n", e, "-i", r];
}
async function Fo(n, e, r) {
  let o = await ne(n, ["-L", "-d", e]);
  if (!o.ok) return !1;
  let s = o.stdout
      .split(
        `
`
      )
      .map((p) => p.trim().split(/\s+/)),
    h = ["ccr-agent-proxy", "ccr-agent-proxy-2"];
  for (let [p, y] of h.entries()) {
    let w = s.filter((C) => C.length === 2 && C[0] === y).map((C) => C[1]),
      b = p < r.length ? 1 : 0;
    if (w.length !== b || w.some((C) => C !== "C,,")) return !1;
  }
  let u = new Set();
  for (let p of h.slice(0, r.length)) {
    let y = await ne(n, ["-L", "-d", e, "-n", p, "-a"]);
    if (!y.ok) return !1;
    for (let w of y.stdout.match(TR) ?? []) u.add(lt(w).toString("base64"));
  }
  let l = new Set(r.map((p) => lt(p).toString("base64")));
  return u.size === l.size && [...l].every((p) => u.has(p));
}
async function Go(n, e, r) {
  let o = `[Boto]
ca_certificates_file = ${n}
`;
  try {
    (await ie(e, o, { flag: "wx", mode: 420 }), t(`[agent-proxy] wrote ${e} for gsutil trust`));
  } catch (s) {
    if (E(s) === "EEXIST") return;
    (t(`[agent-proxy] could not write ${e}: ${d(s)}`), r.push("boto_write_failed"));
  }
}
async function Uo(n, e, r) {
  if (!n.hasSystemCa) {
    await te(e).catch(() => {});
    return;
  }
  let o = [
    "# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env",
    "# vars for login shells that start from a scrubbed environment. Each",
    "# export is set-if-absent so an explicit value in the shell wins.",
    "# HTTPS_PROXY is intentionally NOT set here: the relay port is",
    "# ephemeral and persisting it would break all HTTPS in login shells",
    "# once the relay process exits. Scrubbed login shells dial direct.",
    `if [ -r ${Bn(n.caBundlePath)} ]; then`
  ];
  for (let h of [...Vsr, ...qsr]) o.push("  " + bn(h, n.caBundlePath));
  for (let [h, u] of Object.entries(Obe)) o.push("  " + bn(h, u));
  o.push("fi");
  let s =
    o.join(`
`) +
    `
`;
  try {
    return (
      await dt(He(e), { recursive: !0 }),
      await ie(e, s, { mode: 420 }),
      t(`[agent-proxy] wrote ${e} for login-shell trust`),
      e
    );
  } catch (h) {
    (t(`[agent-proxy] could not write ${e}: ${d(h)}`), r.push("profile_d_write_failed"));
    return;
  }
}
function bn(n, e) {
  return `if [ -z "\${${n}:-}" ]; then ${n}=${Bn(e)}; fi; export ${n}`;
}
function Bn(n) {
  return `'${n.replace(/'/g, "'\\''")}'`;
}
function xe(n) {
  let e = n.match(TR) ?? [];
  return e.length === 2 && e[1] !== e[0] ? e[1] : void 0;
}
function lt(n) {
  return Buffer.from(n.replace(/-----(?:BEGIN|END) CERTIFICATE-----/g, ""), "base64");
}
async function ne(n, e, r) {
  let o = await it(n, e, { timeout: 20000, preserveOutputOnError: !0, useCwd: !1, env: r });
  if (o.code === 0) return { ok: !0, stdout: o.stdout, detail: "" };
  return {
    ok: !1,
    stdout: o.stdout,
    detail: `${o.error ?? `exit ${o.code}`} ${o.stderr.slice(0, 200)}`.trim()
  };
}
var Egi = "/run/ccr/session_token",
  Vn = [
    "/etc/ssl/certs/ca-certificates.crt",
    "/etc/pki/tls/certs/ca-bundle.crt",
    "/etc/ssl/cert.pem"
  ],
  kgi = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "169.254.0.0/16",
    "api.anthropic.com",
    "api-staging.anthropic.com",
    "api-pr-preview.anthropic.com",
    "mcp-proxy.anthropic.com",
    "mcp-proxy-staging.anthropic.com",
    ...It,
    "host.docker.internal"
  ],
  zio = [
    ...kgi,
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local"
  ].join(","),
  Tgi = [
    "127.0.0.1",
    "localhost",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "169.254.0.0/16",
    "host.docker.internal",
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local"
  ].join(","),
  Agi = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "host.docker.internal",
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10"
  ].join(","),
  Dki = ["169.254.0.0/16", ".svc.cluster.local", "*.svc.cluster.local"].join(",");
class qn {
  state = { enabled: !1, noProxy: zio };
  relay = void 0;
  generation = 0;
  activate(n, e) {
    ((this.state = n), (this.relay = e), kvo(`${ae(e.port)}/__agentproxy/status`));
  }
  reset() {
    (this.generation++,
      (this.state = { enabled: !1, noProxy: zio }),
      rLt(void 0),
      XCr(void 0),
      T9n(void 0),
      kvo(void 0),
      this.relay?.stop(),
      (this.relay = void 0));
  }
}
var Cgi = new W(() => new qn());
function Pe() {
  return Cgi.of(U().host);
}
async function Hki(n) {
  let e = Pe();
  (i.unset("AGENT_PROXY_URL"), i.unset("AGENT_PROXY_AUTH_TOKEN"));
  let r = i.CCR_AGENT_PROXY_RELAY_MODE,
    o = i.CCR_AGENT_PROXY_INCLUDE_HOSTS,
    s = i.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED,
    h = i.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED,
    u = i.CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY,
    l = i.CCR_AGENT_PROXY_CA_WATCH_ENABLED,
    p = i.CCR_AGENT_PROXY_CA_CERT_B64;
  if (
    (i.unset("CCR_AGENT_PROXY_RELAY_MODE"),
    i.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS"),
    i.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED"),
    i.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED"),
    i.unset("CCR_AGENT_PROXY_CA_CERT_B64"),
    !Ne(process.env.CLAUDE_CODE_REMOTE))
  )
    return e.state;
  let y = performance.now(),
    w;
  if (r === hIt || i_r()) {
    let O = Vio();
    if (O === void 0 || !gt())
      return (
        t("[agent-proxy] the agent proxy standalone relay mode is set; hosted relay not started"),
        e.state
      );
    (t(
      "[agent-proxy] the agent proxy standalone relay mode is set; governed git goes through its forwarder, and no relay is started"
    ),
      (w = { kind: "standalone", proxyUrl: O }));
  } else {
    if (!i.CCR_AGENT_PROXY_ENABLED) return e.state;
    let O = sd(),
      q,
      ge = process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
      K = "sessionIngressAuth";
    if (O) {
      if (((q = n?.toolContainerToken), q === void 0))
        return (
          t(
            "[agent-proxy] a tool container's daemon was handed no token (CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR, or agent_proxy_token with --session-tunnel); proxy disabled"
          ),
          e.state
        );
      ((ge = "tool-container"), (K = "the launcher"));
    }
    if (!ge)
      return (
        t("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", { level: "warn" }),
        m("agent_proxy_init", "agent_proxy_init_no_session_id"),
        e.state
      );
    let F = n?.tokenPath ?? Egi,
      se = O ? { existed: !1, token: q ?? null } : await ai(F),
      { existed: Ae, token: me } = se;
    if (!me && !O) me = od();
    if (!me)
      return (
        t("[agent-proxy] no session token; proxy disabled"),
        m("agent_proxy_init", "agent_proxy_init_no_token"),
        e.state
      );
    (t(`[agent-proxy] token via ${Ae ? F : K}`),
      O2((z) => t(`[agent-proxy] ${z}`, { level: "warn" })),
      (w = {
        kind: "relay",
        sessionId: ge,
        token: me,
        tokenIsHandedOver: O,
        unlinkTokenPath: Ae ? F : void 0
      }));
  }
  let b = n?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com",
    C =
      n?.caBundlePath ??
      (gt() ? j(Le(), "ccr", "ca-bundle.crt") : j(Tt(), ".ccr", "ca-bundle.crt")),
    P = n?.systemCaPath ? await ye(n.systemCaPath, "utf8").catch(() => "") : await Vhs(),
    T = Jbe(P, "agent proxy trust") ?? "",
    S = await li(T, C),
    A = S
      ? `${T}
${S}`
      : T,
    x;
  if (p !== void 0 && _t())
    t(
      "[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: essential traffic only; fetching the CA as before"
    );
  else if (p !== void 0) {
    let O = Pgi(p);
    if (O.ok) x = O.pem;
    else
      (t(
        `[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: ${O.reason}; fetching the CA instead`,
        { level: "warn" }
      ),
        f("agent_proxy_init", "agent_proxy_init_ca_env_invalid"));
  }
  let v = gt(),
    D = x !== void 0 ? "env" : "fetch",
    L = { budgetMs: n?.pathProbeBudgetMs ?? Qo, caSource: D },
    k = v ? void 0 : ti(L),
    B;
  if (r === "selective") {
    let O = (o ?? "")
      .split(",")
      .map((q) => q.trim())
      .filter((q) => q.length > 0);
    if (O.length > 0)
      ((B = { includeHosts: O }),
        t(
          `[agent-proxy] selective relay: ${O.length} include hosts; unlisted use normal networking`
        ));
    else
      (t(
        "[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host " +
          "list is empty/unparsable \u2014 FAIL-CLOSED to tunnel-all",
        { level: "warn" }
      ),
        f("agent_proxy_init", "agent_proxy_selective_empty_include"));
  }
  let J = Agi,
    H = {
      runtime: e,
      generation: e.generation,
      route: w,
      baseUrl: b,
      caBundlePath: C,
      systemCa: P,
      localCa: A,
      hasSystemCa: T !== "",
      governedGitTools: v,
      selective: B,
      noProxy: u ? J : B ? Tgi : zio,
      bundleCoversEveryHost: T !== "",
      receiveGateDisabled: Boolean(s),
      uploadGateDisabled: Boolean(h),
      caWatchEnabled: Boolean(l),
      pathProbes: L,
      installedClisScan: k,
      envCa: x,
      caSource: D,
      opts: n && { ...n, toolContainerToken: void 0 }
    };
  Dr("agent_proxy_inputs_ms", performance.now() - y, y);
  let N = await Zn(H, 1);
  if (w.kind === "standalone" && N.outcome === "fatal") rLt(zn);
  if (N.outcome === "retry")
    (f("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying", { ca_source: c(D) }),
      zo(H, N).catch((O) => {
        (t(`[agent-proxy] retry loop crashed: ${d(O)}; proxy stays disabled`, { level: "warn" }),
          m("agent_proxy_init", "agent_proxy_init_retry_loop_crashed"));
      }));
  return e.state;
}
var zn =
    "Anthropic-managed GitHub access through this session's proxy could not be set up: git and gh fail TLS verification against github.com. Never disable TLS verification or edit the git config file named by $GIT_CONFIG_GLOBAL to get past it; tell the user that GitHub access is not available in this session.",
  $n = 300000,
  Qn = 3600000;
function ht(n, e) {
  if (n.generation !== e || n.state.enabled || Kg()) return "exit";
  return ys() ? "defer" : null;
}
function Khs(n, e) {
  return Math.min(B$(n - 1, e, $n), $n);
}
async function zo(n, e) {
  let { runtime: r, generation: o, caSource: s, opts: h } = n,
    u = Date.now(),
    l = h?.retryBadAfterMs ?? Qn,
    p = !1;
  for (let y = 2; ; y++) {
    let w = h?.retryDelayMs?.(y) ?? Khs(y, e.retryAfter);
    (t(`[agent-proxy] ${e.detail}; attempt ${y} in ${(w / 1000).toFixed(1)}s`, { level: "warn" }),
      await X(w, void 0, { unref: !0 }));
    let b = ht(r, o);
    if (b === "exit") return;
    if (b === "defer") continue;
    let C = await Zn(n, y);
    if (C.outcome !== "retry") return;
    if (((e = C), !p && Date.now() - u >= l))
      ((p = !0),
        t(
          `[agent-proxy] ${e.detail}; still failing after ${y} attempts over ${Math.round((Date.now() - u) / 60000)} min \u2014 counting as exhausted, retrying anyway`,
          { level: "warn" }
        ),
        m("agent_proxy_init", "agent_proxy_init_ca_exhausted", { ca_source: c(s) }));
  }
}
async function Zn(n, e) {
  let {
      runtime: r,
      route: o,
      baseUrl: s,
      caBundlePath: h,
      systemCa: u,
      localCa: l,
      hasSystemCa: p,
      governedGitTools: y,
      selective: w,
      noProxy: b,
      bundleCoversEveryHost: C,
      receiveGateDisabled: P,
      uploadGateDisabled: T,
      caWatchEnabled: S,
      pathProbes: A,
      installedClisScan: x,
      envCa: v,
      caSource: D,
      opts: L
    } = n,
    k = (K, F) => {
      if (e === 1) Dr(K, performance.now() - F, F);
    },
    B;
  if (v !== void 0) B = v;
  else {
    let K = performance.now(),
      F = await At(s, {
        budgetMs: L?.caFetchBudgetMs ?? (e === 1 ? 5000 : 15000),
        tries: e === 1 ? 3 : 1,
        viaStandaloneProxy: o.kind === "standalone"
      });
    if ((k("agent_proxy_ca_fetch_ms", K), F.outcome !== "ok")) return Xn(F, D);
    B = F.ccrCa;
  }
  let J = performance.now(),
    H = await vt(l, B, h);
  if (H.outcome !== "ok") return (k("agent_proxy_trust_write_ms", J), Xn(H, D));
  if (!y) await Ti(L?.awsConfigPath ?? j(Tt(), ".aws", "config"));
  if ((k("agent_proxy_trust_write_ms", J), o.kind === "standalone")) {
    let K = ht(r, n.generation);
    if (K)
      return K === "exit"
        ? { outcome: "stale" }
        : { outcome: "retry", detail: "shutdown claimed during bring-up", retryAfter: null };
    let F = {
      enabled: !0,
      caBundlePath: h,
      hasSystemCa: p,
      bundleCoversEveryHost: C,
      noProxy: b,
      selective: !1,
      governedGitTools: !0
    };
    ((r.state = F), (r.relay = void 0));
    let se = await Ln(F, h, o, w, A);
    if (r.state !== F) return { outcome: "stale" };
    return (
      XCr(In(F)),
      t(
        `[agent-proxy] governed git routed through the agent proxy standalone forwarder (CA from ${D})`
      ),
      g("agent_proxy_init", { attempts: e, ca_source: c(D), standalone: !0 }),
      rLt(i.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG && !se ? zn : Ge(h, void 0)),
      { outcome: "ok" }
    );
  }
  let { sessionId: N, token: O, tokenIsHandedOver: q, unlinkTokenPath: ge } = o;
  try {
    let K = s.replace(/^http/, "ws") + PVr + "/ws",
      F = xvo(h),
      se = O ?? "",
      Ae = performance.now(),
      me = await x,
      z = await en({
        wsUrl: K,
        sessionId: N,
        token: se,
        getToken: q ? () => se : () => od() || se,
        selective: w,
        limits: {
          ...(P && { receiveHighWater: 1 / 0 }),
          ...(T && { sendPauseAfterPendingBytes: 1 / 0, sendStallTimeoutMs: 1 / 0 })
        },
        statusProvider: () => ({
          ...r.state,
          readmePath: F,
          gitConfigInjection: yt(),
          gitSshRewrite: yt() && St()
        }),
        onFailure: PPs
      }),
      sr = bt(async () => z.stop()),
      M = {
        enabled: !0,
        port: z.port,
        caBundlePath: h,
        hasSystemCa: p,
        bundleCoversEveryHost: C,
        noProxy: b,
        selective: Boolean(w),
        governedGitTools: y,
        installedProxyPreconfiguredClis: me
      };
    k("agent_proxy_relay_up_ms", Ae);
    let Rt = ht(r, n.generation);
    if (Rt)
      return (
        z.stop(),
        sr(),
        Rt === "exit"
          ? { outcome: "stale" }
          : { outcome: "retry", detail: "shutdown claimed during bring-up", retryAfter: null }
      );
    if ((r.activate(M, z), !w && !y)) T9n({ proxyUrl: ae(z.port), gatewayCa: B });
    if (y) await Ln(M, h, { kind: "relay", port: z.port }, w, A);
    else {
      let R = await or({ kind: "relay", port: z.port }, h, N, w, A).catch((we) => {
        (t(`[agent-proxy] gh stand-in shim write failed: ${d(we)}`, { level: "warn" }),
          f("agent_proxy_gh_shim", "arm_failed"));
        return;
      });
      if (R)
        ((M.ghShimDir = R.shimDir),
          (M.ghStandin = R.standin),
          (M.ghStandinEnterprise = R.enterprise),
          (M.ghStandinAnyHost = R.anyHost),
          (M.ghStandinNoJq = R.noJq));
    }
    if (r.state !== M) return { outcome: "stale" };
    (z.runStartupChecks(),
      XCr(In(M)),
      t(`[agent-proxy] enabled on 127.0.0.1:${z.port} (CA from ${D})`),
      g("agent_proxy_init", { attempts: e, ca_source: c(D) }),
      rLt(Ge(h, void 0)),
      Ue(F, ii(z.port, h), "utf8")
        .then(() => {
          if (r.state !== M) return;
          rLt(Ge(h, F));
        })
        .catch((R) => {
          if (
            (t(`[agent-proxy] README write failed: ${R instanceof Error ? R.message : String(R)}`),
            r.state !== M)
          )
            return;
          rLt(Ge(h, void 0));
        }),
      oi()
        .then((R) => {
          if (R.length > 0 && r.state === M)
            ((M.gitConfigConflicts = R),
              t(`[agent-proxy] git config may defeat proxy routing: ${R.join(", ")}`, {
                level: "warn"
              }));
        })
        .catch(() => {}));
    let kt = Et(h),
      _e = !1;
    if (!y && D === "env") {
      let R = await de(kt);
      _e = R.state === "read" && ce(R.text, B) !== "same" && qhs(u, R.text);
    }
    let ve = y || _e ? void 0 : Pt(n, B, kt),
      We = _e ? Promise.withResolvers() : void 0,
      Re,
      Ot = !1;
    if (L?.toolTrust !== !1 && !y)
      Re = Fe({
        ccrCa: B,
        caBundlePath: h,
        hasSystemCa: M.hasSystemCa ?? !1,
        stateDir: j(h, ".."),
        systemTrust: ve ?? We?.promise,
        ...(L?.toolTrust ?? {})
      })
        .then((R) => {
          if (r.state !== M) return;
          if ((xt(M, R), R.profileDPath)) {
            let we = R.profileDPath;
            bt(() => pe(we).catch(() => {}));
          }
          if (R.failureCodes.length > 0) M.toolTrustFailureCodes = R.failureCodes;
        })
        .catch((R) => {
          (t(
            `[agent-proxy] tool trust setup failed: ${R instanceof Error ? R.message : String(R)}`,
            { level: "warn" }
          ),
            f("agent_proxy_tool_trust", "setup_threw"),
            (Ot = !0));
        });
    let ke = { ccrCa: B, systemTrust: ve, toolTrust: Re, installIncomplete: !1, installRetries: 0 };
    if (S && !y)
      Promise.all([ve, Re])
        .then(async ([R]) => {
          let we = L?.toolTrust === !1 || (await ir(h, B));
          if (r.state === M && ke.ccrCa === B)
            ke.installIncomplete = _e || Ot || !we || ar(R, M.toolTrustFailureCodes ?? []);
        })
        .catch(() => {});
    let Bt = !w && !y,
      Dt;
    if (D === "env")
      Dt = _i(n, M, B, {
        systemTrust: ve,
        toolTrust: Re,
        installDeferred: _e,
        onInstallSettled: () => We?.resolve(),
        embeddedEndpoint: Bt,
        relayPort: z.port,
        ...(S && { trust: ke })
      })
        .catch((R) => {
          (t(`[agent-proxy] CA reconcile crashed: ${d(R)}`, { level: "warn" }),
            f("agent_proxy_ca_reconcile", "reconcile_threw"));
        })
        .finally(() => We?.resolve());
    let $t = L?.caWatchIntervalMs ?? hi;
    if (S && !y && $t > 0)
      wi(n, M, ke, {
        intervalMs: $t,
        afterStart: Dt,
        embeddedEndpoint: Bt,
        relayPort: z.port
      }).catch((R) => {
        (t(`[agent-proxy] CA watch crashed: ${d(R)}`, { level: "warn" }),
          f("agent_proxy_ca_watch", "watch_threw"));
      });
    if (ge)
      await pe(ge).catch(() => {
        t("[agent-proxy] token file unlink failed", { level: "warn" });
      });
    return { outcome: "ok" };
  } catch (K) {
    return (
      t(
        `[agent-proxy] relay start failed: ${K instanceof Error ? K.message : String(K)}; proxy disabled`,
        { level: "warn" }
      ),
      m("agent_proxy_init", "agent_proxy_init_relay_start_failed"),
      { outcome: "fatal" }
    );
  }
}
function In(n) {
  return n.ghStandin
    ? OPs({
        enterprise: n.ghStandinEnterprise === !0,
        anyHost: n.ghStandinAnyHost === !0,
        noJq: n.ghStandinNoJq === !0,
        runner: n.governedGitTools === !0
      })
    : void 0;
}
async function Ln(n, e, r, o, s) {
  let h = !1,
    [u, l] = await Promise.all([
      i.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG
        ? ei(r, e).catch(
            (p) => (
              t(`[agent-proxy] governed git config append failed: ${d(p)}`, { level: "warn" }),
              f("agent_proxy_tool_scoped", "git_config_append_failed"),
              (h = !0),
              !1
            )
          )
        : !1,
      i.CLAUDE_CODE_AGENT_PROXY_GH_SHIM
        ? or(r, e, void 0, o, s).catch((p) => {
            (t(`[agent-proxy] gh shim write failed: ${d(p)}`, { level: "warn" }),
              f("agent_proxy_tool_scoped", "gh_shim_write_failed"),
              f("agent_proxy_gh_shim", "arm_failed"),
              (h = !0));
            return;
          })
        : void 0
    ]);
  if (l)
    ((n.ghShimDir = l.shimDir),
      (n.ghStandin = l.standin),
      (n.ghStandinEnterprise = l.enterprise),
      (n.ghStandinAnyHost = l.anyHost),
      (n.ghStandinNoJq = l.noJq));
  if (!h) g("agent_proxy_tool_scoped", { git_config: u, gh_shim: Boolean(l) });
  return u;
}
var er = [
    {
      clis: ["gh"],
      realCredentialEnv: ["GH_TOKEN", "GITHUB_TOKEN"],
      placeholders: { GH_TOKEN: Fj, GITHUB_TOKEN: Fj }
    },
    {
      clis: ["aws"],
      realCredentialEnv: [
        "AWS_ACCESS_KEY_ID",
        "AWS_SECRET_ACCESS_KEY",
        "AWS_SESSION_TOKEN",
        "AWS_PROFILE",
        "AWS_SHARED_CREDENTIALS_FILE",
        "AWS_CONFIG_FILE",
        "AWS_WEB_IDENTITY_TOKEN_FILE",
        "AWS_ROLE_ARN",
        "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        "AWS_CONTAINER_CREDENTIALS_FULL_URI"
      ],
      placeholders: { AWS_ACCESS_KEY_ID: Fj, AWS_SECRET_ACCESS_KEY: Fj }
    },
    {
      clis: ["gcloud", "bq", "gsutil"],
      realCredentialEnv: ["CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_APPLICATION_CREDENTIALS"],
      placeholders: { CLOUDSDK_AUTH_ACCESS_TOKEN: Fj }
    }
  ],
  nDn = er.flatMap((n) => Object.keys(n.placeholders)),
  Qo = 1000;
function le(n) {
  return vVt(n)?.trim() || void 0;
}
function Lki() {
  let n = Pe().state;
  if (!n.enabled || !n.port || !n.caBundlePath || n.governedGitTools || !n.bundleCoversEveryHost)
    return null;
  return { proxyUrl: ae(n.port), noProxy: n.noProxy, caBundlePath: n.caBundlePath };
}
function Nki() {
  let n = Pe().state;
  if (n.enabled && n.governedGitTools) {
    let o = {};
    if (n.ghShimDir) {
      let s = vVt("PATH") ?? "";
      if (((o.PATH = s ? `${n.ghShimDir}${Ee}${s}` : n.ghShimDir), n.ghStandin && s))
        o.PATH = `${s}${Ee}${n.ghShimDir}`;
    }
    return o;
  }
  if (!n.enabled || !n.port || !n.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      let o = {};
      for (let s of ["HTTPS_PROXY", "https_proxy", "NO_PROXY", "no_proxy", ...mse])
        if (process.env[s]) o[s] = process.env[s];
      for (let s of [...Object.keys(Obe), ...nDn]) {
        let h = vVt(s);
        if (h) o[s] = h;
      }
      return o;
    }
    return {};
  }
  let e = ae(n.port),
    r = { HTTPS_PROXY: e, https_proxy: e, NO_PROXY: n.noProxy, no_proxy: n.noProxy };
  for (let o of Vsr) r[o] = n.caBundlePath;
  if (n.bundleCoversEveryHost) {
    for (let o of qsr) r[o] = n.caBundlePath;
    for (let [o, s] of Object.entries(Obe)) if (vVt(o) === void 0) r[o] = s;
  }
  if (n.javaTrustStorePath && n.javaTrustStoreType)
    r.JAVA_TOOL_OPTIONS = En(n.javaTrustStorePath, n.javaTrustStoreType, le("JAVA_TOOL_OPTIONS"));
  if (le("GIT_TERMINAL_PROMPT") === void 0) r.GIT_TERMINAL_PROMPT = XZ.GIT_TERMINAL_PROMPT;
  if (le("GIT_ASKPASS") === void 0) r.GIT_ASKPASS = XZ.GIT_ASKPASS;
  if (le("GCM_INTERACTIVE") === void 0) r.GCM_INTERACTIVE = XZ.GCM_INTERACTIVE;
  if (yt()) {
    let o = [["credential.interactive", "false"]];
    if (St()) o.push(...AZo.map((s) => [`url.https://${vr}/.insteadOf`, s]));
    Object.assign(r, u2(void 0, o));
  }
  for (let o of er) if (!o.realCredentialEnv.some((h) => vVt(h))) Object.assign(r, o.placeholders);
  if (n.ghShimDir) r.PATH = [le("PATH"), n.ghShimDir].filter(Boolean).join(Ee);
  return r;
}
function $ki() {
  let n = Pe().state;
  return n.enabled && n.ghStandin ? n.ghShimDir : void 0;
}
function gt() {
  return Boolean(i.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || i.CLAUDE_CODE_AGENT_PROXY_GH_SHIM);
}
var Mn = "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>",
  mt = "# <<< claude agent-proxy governed-git <<<",
  Zo = '"!f() { case $1 in get) echo quit=true ;; esac; }; f"';
function tr() {
  let n = i.CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS;
  if (!n || n.trim() === "") return [vr];
  let e = [],
    r = 0;
  for (let o of n.split(",")) {
    let s = o.trim();
    if (s === "") continue;
    let h = NH(s);
    if (h === "" || h.length > 255 || !xst.test(h)) {
      r++;
      continue;
    }
    let u = yo(h) ? vr : h;
    if (!e.includes(u)) e.push(u);
  }
  if (r > 0)
    t(
      `[agent-proxy] governed git: ignored ${r} governed-host ${I(r, "entry", "entries")} that ${I(r, "is", "are")} not a bare hostname`,
      { level: "warn" }
    );
  return e;
}
async function ei(n, e) {
  let r;
  switch (n.kind) {
    case "relay":
      r = ae(n.port);
      break;
    case "standalone":
      r = n.proxyUrl;
      break;
  }
  let o = process.env.GIT_CONFIG_GLOBAL;
  if (!o)
    return (
      t(
        "[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)",
        { level: "warn" }
      ),
      !1
    );
  if ([e, r].some((y) => /[\n\r"]/.test(y)))
    return (
      t(
        "[agent-proxy] governed git: the CA bundle path or the proxy URL contains a newline or quote; skipping git config arm",
        { level: "warn" }
      ),
      !1
    );
  let s = tr();
  if (s.length === 0)
    return (
      t(
        "[agent-proxy] governed git: the governed-host list carried no usable host; skipping git config arm",
        { level: "warn" }
      ),
      !1
    );
  let h = [Mn];
  for (let y of s)
    if (
      (h.push(
        `[http "https://${y}/"]`,
        `	proxy = ${r}`,
        `	sslCAInfo = ${e}`,
        ...(y === vr ? [] : ["\textraHeader =", "\tcookieFile ="]),
        `[credential "https://${y}/"]`,
        ...(y === vr ? [] : ["\thelper =", `	helper = ${Zo}`]),
        "\tinteractive = false"
      ),
      y === vr && St())
    )
      h.push(`[url "https://${vr}/"]`, ...AZo.map((w) => `	insteadOf = ${w}`));
  h.push(mt);
  let u = "";
  try {
    u = await ye(o, "utf8");
  } catch (y) {
    if (!G(y)) throw y;
  }
  let l = u.indexOf(Mn);
  if (l !== -1) {
    let y = u.indexOf(mt, l);
    u = y !== -1 ? u.slice(0, l) + u.slice(y + mt.length).replace(/^\n/, "") : u.slice(0, l);
  }
  let p =
    u.length > 0 &&
    !u.endsWith(`
`)
      ? u +
        `
`
      : u;
  return (
    await Dn(
      o,
      p +
        h.join(`
`) +
        `
`,
      384
    ),
    t(
      `[agent-proxy] governed git: relay routing for ${s.length} governed ${I(s.length, "host")} appended to ${o}`
    ),
    !0
  );
}
async function nr(n, e) {
  let r = (i.PATH ?? "").split(Ee);
  for (let o of r) {
    if (!o || o === e) continue;
    let s = j(o, n);
    try {
      if ((await Jo(s, Xo.X_OK), (await Kn(s)).isFile())) return s;
    } catch {}
  }
  return;
}
async function Ct(n, e, { budgetMs: r, caSource: o }) {
  let s = `${n} timed out`,
    h = performance.now(),
    u = aXt(),
    l = oDn(rDn);
  try {
    return { value: await Nt(e(), r, s) };
  } catch (p) {
    let y = aXt(),
      w = d(p) === s,
      b = Er(p);
    return {
      failure: {
        timedOut: w,
        detail: w ? s : `${n} failed (${d(p)})`,
        fields: {
          ca_source: c(o),
          ...(b !== void 0 && { errno: b }),
          elapsed_ms: Math.round(performance.now() - h),
          loop_lag_max_ms: Math.round(l.stop()),
          ...(u &&
            y && {
              cpu_delta_ms: Math.round(y.cpuTimeMs - u.cpuTimeMs),
              major_fault_delta: y.majorPageFaults - u.majorPageFaults
            })
        }
      }
    };
  } finally {
    l.stop();
  }
}
async function ti(n) {
  let e = new Set(),
    r = await Ct("installed-CLI PATH sweep", () => Fkn(qCr, e), n);
  if ("failure" in r)
    (t(`[agent-proxy] ${r.failure.detail}; naming only the CLIs resolved so far`, {
      level: "warn"
    }),
      f(
        "agent_proxy_init",
        r.failure.timedOut ? "agent_proxy_path_probe_timeout" : "agent_proxy_path_probe_failed",
        r.failure.fields
      ));
  return qCr.filter((o) => e.has(o));
}
var Hn = 65536,
  Fn = `#!/bin/sh
# claude agent-proxy governed-git gh shim (auto-generated; per-session).
`;
async function rr(n) {
  try {
    await using e = await Ko(n, vc());
    let r = await fW(e, Hn + 1);
    return r.length > Hn ? "" : r.toString("utf8");
  } catch (e) {
    if (!Vt(e))
      t(
        `[agent-proxy] gh shim at ${n} could not be read (${E(e) ?? "no error code"}); treated as not a shim`,
        { level: "warn" }
      );
    return "";
  }
}
function Gn(n, e) {
  let r = URL.parse(Nse(e))?.hostname;
  return r !== void 0 && qe(n, r);
}
async function Un(n, e) {
  let r = await Ct("jq PATH probe", () => nr("jq", n), e);
  if ("failure" in r)
    return (
      t(`[agent-proxy] ${r.failure.detail}; taking jq as installed`, { level: "warn" }),
      f(
        "agent_proxy_gh_shim",
        r.failure.timedOut ? "jq_path_probe_timeout" : "jq_path_probe_failed",
        r.failure.fields
      ),
      !1
    );
  return r.value === void 0;
}
function Wn(n, e, r) {
  bt(async () => {
    if ((await rr(n)) !== e) return;
    if ((await pe(n).catch(() => {}), r)) {
      let o = j(n, "..");
      await Nn(o)
        .then(() => Nn(j(o, "..")))
        .catch(() => {});
    }
  });
}
async function or(n, e, r, o, s) {
  let h = r !== void 0,
    u = r !== void 0 ? j(e, "..", "sessions", et(r).slice(0, 32), "bin") : j(e, "..", "bin"),
    l = j(u, "gh"),
    p = await Ct("gh PATH probe", () => nr("gh", u), s);
  if ("failure" in p) {
    if ((t(`[agent-proxy] ${p.failure.detail}; skipping gh shim`, { level: "warn" }), !h))
      throw Error("gh PATH probe failed");
    f(
      "agent_proxy_gh_shim",
      p.failure.timedOut ? "gh_path_probe_timeout" : "gh_path_probe_failed",
      p.failure.fields
    );
    return;
  }
  let y = p.value;
  if (y && h) {
    g("agent_proxy_gh_shim", { standin: !1, hosted: !0 });
    return;
  }
  if (!y && _t()) {
    (t("[agent-proxy] no gh on PATH and nonessential traffic is disabled; skipping gh shim"),
      f("agent_proxy_gh_shim", "standin_essential_traffic_only"));
    return;
  }
  if (!y && !Gn(o, vr)) {
    (t(
      "[agent-proxy] no gh on PATH and this relay does not send GitHub API requests to the session proxy (selective mode); skipping gh shim"
    ),
      f("agent_proxy_gh_shim", "selective_relay"));
    return;
  }
  if ((i.PATH ?? "").split(Ee).includes(u)) {
    let T = await rr(l),
      S = T.includes(` '${oZs}' `),
      A = T.startsWith(Fn),
      x = !y;
    if (x ? S : A)
      return (
        t(`[agent-proxy] gh shim at ${l} is the enclosing session's; left as it is`),
        g("agent_proxy_gh_shim", { standin: x, ...(h && { hosted: !0 }), inherited: !0 }),
        {
          shimDir: u,
          standin: x,
          enterprise: x && T.includes(" '--hosts="),
          anyHost: x && T.includes(` '${sZs}' `),
          noJq: x && (await Un(u, s))
        }
      );
    if (S || A) {
      (t(
        `[agent-proxy] gh shim at ${l} is the enclosing session's, of another kind; no gh shim for this process`
      ),
        f("agent_proxy_gh_shim", "enclosing_shim_other_kind"));
      return;
    }
  }
  let w;
  if (y) w = [y];
  else {
    let T = xu({ pinToCurrentBinary: !0 });
    w = [T.cmd, ...T.prefixArgs];
  }
  if ([e, ...w].some((T) => /['\n\r]/.test(T))) {
    (t(
      "[agent-proxy] governed git: a path or argument the gh shim would quote holds a quote or a line break; skipping gh shim",
      { level: "warn" }
    ),
      f("agent_proxy_gh_shim", "unquotable_path"));
    return;
  }
  if ((await wt(u, { recursive: !0, mode: 448 }), !y)) {
    let T = h && o === void 0,
      S = h ? [] : tr().filter((v) => v !== vr && !v.endsWith(MKe) && Gn(o, v)),
      A;
    switch (n.kind) {
      case "relay":
        A = n.port;
        break;
      case "standalone":
        A = qhn;
        break;
    }
    let x = cZs({ command: w, port: A, caBundlePath: e, ghesHosts: T ? _z : S });
    return (
      await Dn(l, x, 493),
      Wn(l, x, h),
      t(`[agent-proxy] no gh on PATH; gh stand-in shim at ${l}`),
      g("agent_proxy_gh_shim", { standin: !0, ...(h && { hosted: !0 }) }),
      { shimDir: u, standin: !0, enterprise: S.length > 0, anyHost: T, noJq: await Un(u, s) }
    );
  }
  let b, C;
  switch (n.kind) {
    case "relay":
      ((b = ""),
        (C = `HTTPS_PROXY='${ae(n.port)}' https_proxy='${ae(n.port)}' \\
`));
      break;
    case "standalone":
      ((b = lZs()), (C = ""));
      break;
  }
  let P =
    Fn +
    `# Routes gh-to-github.com through the session relay ONLY when the
# invocation carries no customer credential. GHE targets (GH_HOST,
# --hostname, a -R/--repo/GH_REPO naming a non-github.com host, or a
# non-github.com origin remote in the cwd checkout) and
# real-customer-token invocations exec directly on the
# customer's own egress, so customer credentials never transit the
# relay tunnel and gh-to-GHE keeps working.
# Real customer tokens decide alone, checked first (costs nothing):
# gh sends GH_TOKEN/GITHUB_TOKEN proactively, and the GHE-scoped
# enterprise pair means gh may target a GHE host in ways the checks
` +
    `# below cannot see (e.g. a URL positional arg) \u2014 never route any of
` +
    `# them through the tunnel.
` +
    Yhs(y) +
    b +
    `# NO_PROXY cleared: an ambient runner-host NO_PROXY covering
# github.com would make gh skip the relay and send the literal dummy
# token to the real GitHub API (hard 401).
` +
    C +
    `NO_PROXY='' no_proxy='' \\
SSL_CERT_FILE='${e}' \\
GH_TOKEN='${Fj}' GITHUB_TOKEN='${Fj}' \\
exec '${y}' "$@"
`;
  return (
    await Dn(l, P, 493),
    Wn(l, P, h),
    t(`[agent-proxy] governed git: gh shim at ${l} -> ${y}`),
    g("agent_proxy_gh_shim", { standin: !1 }),
    { shimDir: u, standin: !1, enterprise: !1, anyHost: !1, noJq: !1 }
  );
}
function yt() {
  return le("GIT_CONFIG_COUNT") === void 0;
}
function St() {
  return le("SSH_AUTH_SOCK") === void 0 && le("GIT_SSH_COMMAND") === void 0;
}
function Ge(n, e) {
  let r = Pe().state;
  if (r.governedGitTools) {
    let s = e ? `see ${e} and ` : "",
      h = r.ghStandin === !0,
      u = i_r()
        ? "other network traffic goes through the same proxy, and other tools that reach github.com there (curl, npm, or gh run with a GitHub token of its own) fail TLS verification: only git and gh trust that CA bundle."
        : "other network traffic uses this machine's own egress.";
    return (
      `GitHub access for git${h ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${n}) via per-session git config${h ? " and a gh PATH shim" : ""}; ${u} If ${h ? "git or gh fail" : "git fails"} against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${s}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.` +
      (r.ghShimDir && !h
        ? " `gh` in a Bash command is this machine's own GitHub CLI, with its own sign-in and network path."
        : "")
    );
  }
  let o = (r.installedProxyPreconfiguredClis ?? []).filter(
    (s) => !(r.ghStandin === !0 && s === "gh")
  );
  return { caBundlePath: n, hasReadme: e !== void 0, installedClis: o };
}
var ni = [
  ["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m],
  ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m],
  ["git_https_to_ssh_insteadof_configured", /^url\.(git@|ssh:\/\/).*\.insteadof$/m]
];
function ri() {
  let n = qo(Vo()).root;
  try {
    let e = Tt();
    if (e && jo(e).isDirectory()) return e;
    return n;
  } catch {
    return n;
  }
}
async function oi() {
  let n = new Set(),
    e = await Promise.all(
      ["--global", "--system"].map((r) =>
        ct("git", ["config", r, "--list", "--name-only"], {
          timeout: 5000,
          preserveOutputOnError: !0,
          cwd: ri()
        })
      )
    );
  for (let r of e) {
    if (r.code !== 0) continue;
    for (let [o, s] of ni) if (s.test(r.stdout)) n.add(o);
  }
  return [...n];
}
function ii(n, e) {
  let r = j(e, ".."),
    o = `http://127.0.0.1:${n}`;
  return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${o}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${e}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Run: curl -sS ${o}/__agentproxy/status
   It reports proxy state, which trust and git accommodations are active
   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,
   gitConfigConflicts), and the most recent proxy-side failures.
2. Find the failure class below and apply the matching fix; gitConfigConflicts
   codes map to the git section, toolTrustFailureCodes to the JVM section.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${e}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present,
  JAVA_TOOL_OPTIONS points JVMs at a truststore that holds the proxy CA: the
  JDK's own store if the system trust install already added the CA there,
  otherwise ${r}/java-truststore.p12 (password "changeit"). Confirm
  javaTrustStorePath is set in the status output before pointing a build at it
  (toolTrustFailureCodes explains why it is missing). If the image or the
  build sets its own trustStore, that one wins \u2014 import the proxy CA into it
  with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${r}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

Most often the destination host is not allowed for this session. Do not retry
or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the status endpoint
records the reason.

### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer

Once a tunnel is up the proxy cannot send an error response, so a connection
it aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped
accepting) reaches the tool as a bare reset. recentRelayFailures in the status
output names the host and reason; check it before concluding the remote
service refused the operation.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets
http.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an
https-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the
status output's gitConfigConflicts codes name which of these were detected;
adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${n} and do not trust
the CA. Workarounds: run builds with --network host, copy ${e}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it so the policy or
tooling can be fixed.
`;
}
async function ai(n) {
  try {
    return { existed: !0, token: (await ye(n, "utf8")).trim() || null };
  } catch (e) {
    if (G(e)) return { existed: !1, token: null };
    return (
      t(`[agent-proxy] token read failed: ${e instanceof Error ? e.message : String(e)}`, {
        level: "warn"
      }),
      { existed: !1, token: null }
    );
  }
}
async function Vhs(n = Vn) {
  for (let e of n)
    try {
      return await ye(e, "utf8");
    } catch {}
  return "";
}
var si = 1048576;
async function li(n, e) {
  let r = new Set(),
    o = [],
    s = n;
  for (let h of mse) {
    let u = process.env[h]?.trim();
    if (!u || u === e || r.has(u) || Vn.includes(u)) continue;
    r.add(u);
    let l;
    try {
      let w = await Kn(u);
      if (!w.isFile() || w.size > si) continue;
      l = await ye(u, "utf8");
    } catch (w) {
      if (!G(w))
        t(
          `[agent-proxy] could not read customer CA bundle from ${h}: ${w instanceof Error ? w.message : String(w)}`,
          { level: "warn" }
        );
      continue;
    }
    let p = l.match(TR);
    if (!p) continue;
    let y = 0;
    for (let w of p) {
      if (s.includes(w)) continue;
      (o.push(w),
        (s += `
${w}`),
        y++);
    }
    if (y > 0) t(`[agent-proxy] folded ${y} customer CA cert(s) from ${h} into the relay bundle`);
  }
  if (o.length === 0) return "";
  return (
    Jbe(
      o.join(`
`),
      "agent proxy trust"
    ) ??
    o.flatMap((h) => Jbe(h, "agent proxy trust") ?? []).join(`
`)
  );
}
var ci = [
    {
      dir: "/usr/local/share/ca-certificates",
      name: "ccr-agent-proxy.crt",
      refresh: ["update-ca-certificates"],
      link: "/etc/ssl/certs/ccr-agent-proxy.pem",
      direct: pn
    },
    {
      dir: "/etc/pki/ca-trust/source/anchors",
      name: "ccr-agent-proxy.crt",
      refresh: ["update-ca-trust", "extract"]
    }
  ],
  di = 1e4;
function xt(n, e) {
  if (e.javaTrustStorePath && e.javaTrustStoreType)
    ((n.javaTrustStorePath = e.javaTrustStorePath), (n.javaTrustStoreType = e.javaTrustStoreType));
  else if (
    n.javaTrustStorePath === e.retiredJavaTrustStorePath ||
    n.javaTrustStorePath === e.rejectedJdkStorePath
  )
    ((n.javaTrustStorePath = void 0), (n.javaTrustStoreType = void 0));
}
async function Rgi(n, e, { systemCa: r, recordPath: o, timeoutMs: s = di }) {
  let h = await be(o, n),
    u = qhs(r, n) && h !== "different",
    l = () =>
      Dn(o, n).catch((C) => {
        t(`[agent-proxy] could not record the system trust install: ${d(C)}`);
      }),
    p = {},
    y = xe(n),
    w = Yn(n),
    b = !1;
  for (let { dir: C, name: P, refresh: T, link: S, direct: A } of e)
    try {
      let x = j(C, P),
        v = S
          ? { path: j(C, P.replace(/\.crt$/, "-2.crt")), link: S.replace(/\.pem$/, "-2.pem") }
          : void 0,
        D = v === void 0 ? void 0 : await de(v.path),
        L = D === void 0 || D.state === "missing",
        k = v !== void 0 && y !== void 0 && L,
        B = u ? await de(x) : void 0;
      if (B?.state === "read") {
        let H = ce(B.text, n);
        if (
          L
            ? H === "same" && h === "same"
            : H !== "different" && D?.state === "read" && ce(D.text, Yn(B.text)) === "same"
        ) {
          if (
            (t(
              `[agent-proxy] CA already in the system trust store${H === "swapped" ? ", its two certificates in the other order" : ""}; install skipped`
            ),
            h === "swapped")
          )
            await l();
          return (
            g("agent_proxy_system_trust", {
              reused: !0,
              ...(k && { old_layout: !0 }),
              ...(h === "swapped" && { swapped: !0 })
            }),
            b ? "failed" : "reused"
          );
        }
      }
      if (A && S && L) {
        let H = Date.now() + s,
          N = !1,
          O = await at(n, { anchorPath: x, link: S, layout: A, recordPath: o, timeoutMs: s });
        if (O.outcome === "installed" && y !== void 0 && v)
          ((N = !0),
            (O = await at(w, {
              anchorPath: v.path,
              link: v.link,
              layout: A,
              recordPath: o,
              timeoutMs: Math.max(1, H - Date.now())
            })));
        switch (O.outcome) {
          case "installed":
            return (
              await l(),
              t("[agent-proxy] CA installed to system trust directly"),
              g("agent_proxy_system_trust", { reused: !1, method: c("direct") }),
              b ? "failed" : "installed"
            );
          case "hook_incomplete":
            return (f("agent_proxy_system_trust", "hook_incomplete"), "failed");
          case "abandoned": {
            let q = O.step;
            p = { direct_failed_step: c(q) };
            break;
          }
          case "not_attempted": {
            let q = c(O.reason);
            p = N ? { second_anchor_direct_skipped: q } : { direct_skipped: q };
            break;
          }
        }
      } else if (A && S) p = { direct_skipped: c("anchor_present") };
      if ((await Ue(x, n, "utf8"), await pe(o).catch(() => {}), v && (y !== void 0 || !L)))
        (await Ue(v.path, w, "utf8"), await pe(v.link).catch(() => {}));
      if (S) await pe(S).catch(() => {});
      let J = await new Promise((H) => {
        Yo(T[0], T.slice(1), { timeout: s, cwd: "/", windowsHide: !0, ..._d("helper") }, (N) =>
          H(N ? (G(N) ? 127 : 1) : 0)
        );
      });
      if (J === 0)
        return (
          await l(),
          t(`[agent-proxy] CA installed to system trust via ${T[0]}`),
          g("agent_proxy_system_trust", { reused: !1, method: c("refresh"), ...p }),
          b ? "failed" : "installed"
        );
      ((b = !0),
        t(`[agent-proxy] ${T[0]} exited ${J}; falling back to env-var trust`, { level: "warn" }));
    } catch (x) {
      if (G(x)) continue;
      ((b = !0),
        t(
          `[agent-proxy] system trust install via ${C} failed: ${x instanceof Error ? x.message : String(x)}`,
          { level: "warn" }
        ));
    }
  if (e.length > 0) f("agent_proxy_system_trust", "unavailable", p);
  return b ? "failed" : "no_store";
}
function Yn(n) {
  return `${xe(n) ?? n.match(TR)?.[0] ?? n.trimEnd()}
`;
}
function ui(n) {
  try {
    return (new Wo(n), !0);
  } catch {
    return !1;
  }
}
var fi = 65536,
  pi = {
    oversized: "ca-cert response is larger than any certificate bundle",
    no_certificate: "ca-cert response contains no certificate",
    unparseable_certificate: "ca-cert response contains a certificate that does not parse",
    stray_marker:
      "ca-cert response has PEM framing outside its certificates (truncated, or not a certificate bundle)"
  };
function xgi(n) {
  if (n.length > fi) return { ok: !1, problem: "oversized" };
  let e = n.match(TR);
  if (!e) return { ok: !1, problem: "no_certificate" };
  if (!e.every(ui)) return { ok: !1, problem: "unparseable_certificate" };
  if (n.replace(TR, "").includes("-----BEGIN")) return { ok: !1, problem: "stray_marker" };
  return { ok: !0, bundle: n };
}
function qhs(n, e) {
  let r = e.match(TR);
  return r !== null && r.every((o) => n.includes(o));
}
function Xn(n, e) {
  if (n.outcome === "retry") return n;
  return (
    t(`[agent-proxy] ${n.detail}; proxy disabled`, { level: "warn" }),
    m("agent_proxy_init", `agent_proxy_init_ca_${n.code}`, { ca_source: c(e) }),
    n
  );
}
var gi = 65536;
function Pgi(n) {
  let e = n.trim();
  if (e === "") return { ok: !1, reason: "empty" };
  if (!/^[A-Za-z0-9+/=]+$/.test(e)) return { ok: !1, reason: "not base64" };
  let r = Buffer.from(e, "base64");
  if (r.length === 0 || r.length > gi) return { ok: !1, reason: `decoded to ${r.length} bytes` };
  let o = Te(r.toString("utf8"));
  return o.ok
    ? {
        ok: !0,
        pem:
          o.blocks.join(`
`) +
          `
`
      }
    : o;
}
var mi = 3,
  hi = 3600000,
  jn = 3;
function Et(n) {
  return j(n, "..", "system-trust.ca.pem");
}
var yi = /^(nss_|java_truststore_)/;
async function ir(n, e) {
  return (await be(j(n, "..", "agent-proxy-ca.crt"), e)) !== "different";
}
function ar(n, e) {
  return n === "failed" || e.some((r) => yi.test(r));
}
function Pt(n, e, r, o, s = n.systemCa) {
  return Rgi(e, n.opts?.systemTrustTargets ?? ci, { systemCa: s, recordPath: r })
    .catch(() => "failed")
    .then((h) => (o?.(), h));
}
async function _i(
  n,
  e,
  r,
  {
    systemTrust: o,
    toolTrust: s,
    installDeferred: h,
    onInstallSettled: u,
    embeddedEndpoint: l,
    relayPort: p,
    trust: y
  }
) {
  let { runtime: w, baseUrl: b, localCa: C, caBundlePath: P, governedGitTools: T, opts: S } = n,
    A = Et(P),
    x = h,
    v = (N) => {
      x = !1;
      let O = Pt(n, N, A, u);
      if (y) y.systemTrust = O;
      return O;
    },
    D = Date.now(),
    L = !1,
    k;
  for (let N = 1; ; N++) {
    if (N > 1) {
      let O = k?.outcome === "retry" ? k : void 0;
      await X(S?.retryDelayMs?.(N) ?? Khs(N, O?.retryAfter ?? null), void 0, { unref: !0 });
    }
    if (w.state !== e) return;
    if (_t()) {
      if (x) await v(r);
      return;
    }
    if (
      ((k = await At(b, { budgetMs: S?.caFetchBudgetMs ?? 15000, tries: 1 })),
      k.outcome !== "retry")
    )
      break;
    if ((u(), x && N >= mi)) {
      if (w.state !== e) return;
      await v(r);
    }
    if (!L && Date.now() - D >= (S?.retryBadAfterMs ?? Qn))
      ((L = !0),
        t(
          `[agent-proxy] CA reconcile: ${k.detail}; still failing after ${N} attempts, retrying anyway`,
          { level: "warn" }
        ),
        f("agent_proxy_ca_reconcile", "fetch_still_failing"));
  }
  if (w.state !== e || k === void 0) return;
  if (k.outcome !== "ok") {
    if (
      (t(`[agent-proxy] CA reconcile: ${k.detail}; the bundle keeps the environment's CA`, {
        level: "warn"
      }),
      f("agent_proxy_ca_reconcile", "fetch_http_error"),
      x)
    )
      await v(r);
    return;
  }
  let B = ce(k.ccrCa, r);
  if (B === "same") {
    if ((g("agent_proxy_ca_reconcile", { changed: !1 }), x)) await v(r);
    return;
  }
  let J = await vt(C, k.ccrCa, P);
  if (J.outcome !== "ok") {
    if (
      (t(`[agent-proxy] CA reconcile: ${J.detail}; the bundle keeps the environment's CA`, {
        level: "warn"
      }),
      f("agent_proxy_ca_reconcile", "write_failed"),
      x && w.state === e)
    )
      await v(k.ccrCa);
    return;
  }
  if (y) ((y.ccrCa = k.ccrCa), (y.systemTrust = void 0), (y.installIncomplete = !0));
  if (w.state !== e) return;
  if (
    (t(
      `[agent-proxy] CA reconcile: the served CA differs from the environment${B === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten`
    ),
    g("agent_proxy_ca_reconcile", { changed: !0, ...(B === "swapped" && { swapped: !0 }) }),
    l)
  )
    T9n({ proxyUrl: ae(p), gatewayCa: k.ccrCa });
  if (T) return;
  if ((await o, w.state !== e)) return;
  let H = v(k.ccrCa);
  if ((await H, S?.toolTrust === !1 || w.state !== e)) return;
  if ((await s, w.state !== e)) return;
  await Fe({
    ccrCa: k.ccrCa,
    caBundlePath: P,
    hasSystemCa: e.hasSystemCa ?? !1,
    stateDir: j(P, ".."),
    systemTrust: H,
    ...(S?.toolTrust ?? {})
  })
    .then((N) => {
      if (w.state !== e) return;
      (xt(e, N), (e.toolTrustFailureCodes = N.failureCodes.length > 0 ? N.failureCodes : void 0));
    })
    .catch((N) => {
      (t(`[agent-proxy] CA reconcile: tool trust rebuild failed: ${d(N)}`, { level: "warn" }),
        f("agent_proxy_ca_reconcile", "tool_trust_rebuild_threw"));
    });
}
function Jn(n, e, r, o) {
  let { runtime: s, caBundlePath: h, opts: u } = n,
    l = Et(h),
    { systemTrust: p, toolTrust: y } = r,
    w = [],
    b = !1,
    C = (async () => {
      if ((await p, s.state !== e)) return;
      let S = u?.systemCaPath ? await ye(u.systemCaPath, "utf8").catch(() => "") : await Vhs(),
        A = await p;
      if (A === "failed" || A === void 0) await pe(l).catch(() => {});
      return Pt(n, o, l, void 0, S);
    })(),
    T = (async () => {
      if ((await C, u?.toolTrust === !1 || s.state !== e)) return;
      if ((await y, s.state !== e)) return;
      await Fe({
        ccrCa: o,
        caBundlePath: h,
        hasSystemCa: e.hasSystemCa ?? !1,
        stateDir: j(h, ".."),
        systemTrust: C,
        ...(u?.toolTrust ?? {})
      })
        .then((S) => {
          if (s.state !== e) return;
          (xt(e, S),
            (e.toolTrustFailureCodes = S.failureCodes.length > 0 ? S.failureCodes : void 0),
            (w = S.failureCodes));
        })
        .catch((S) => {
          (t(`[agent-proxy] CA watch: tool trust rebuild failed: ${d(S)}`, { level: "warn" }),
            (b = !0));
        });
    })().then(async () => {
      if (s.state !== e) return;
      let S = u?.toolTrust === !1 || (await ir(h, o)),
        A = b || !S || ar(await C, w);
      if (s.state === e) r.installIncomplete = A;
    });
  return ((r.ccrCa = o), (r.systemTrust = C), (r.toolTrust = T), T);
}
async function wi(n, e, r, { intervalMs: o, afterStart: s, embeddedEndpoint: h, relayPort: u }) {
  let { runtime: l, baseUrl: p, localCa: y, caBundlePath: w, opts: b } = n;
  await s;
  let C = !1,
    P = (T, S) => {
      if ((t(`[agent-proxy] CA watch: ${T}; checking again later`), !C))
        ((C = !0), f("agent_proxy_ca_watch", S));
    };
  for (;;) {
    if ((await X(o, void 0, { unref: !0 }), l.state !== e || Kg() || _t())) return;
    let T = await At(p, { budgetMs: b?.caFetchBudgetMs ?? 15000, tries: 1 });
    if (l.state !== e) return;
    if (T.outcome !== "ok") {
      P(T.detail, T.outcome === "retry" ? "fetch_failed" : "fetch_http_error");
      continue;
    }
    if (!Te(T.ccrCa).ok) {
      P("the served CA does not parse", "unparsable");
      continue;
    }
    let S = ce(T.ccrCa, r.ccrCa);
    if (S === "same") {
      if (((C = !1), !r.installIncomplete)) continue;
      if (r.installRetries >= jn) {
        (t(
          `[agent-proxy] CA watch: a trust store did not take the CA after ${jn} more tries; leaving it until the CA changes`,
          { level: "warn" }
        ),
          f("agent_proxy_ca_watch", "install_incomplete"),
          (r.installIncomplete = !1));
        continue;
      }
      (r.installRetries++,
        t("[agent-proxy] CA watch: trust stores refreshing again for the CA the bundle holds"),
        await Jn(n, e, r, T.ccrCa));
      continue;
    }
    let A = await vt(y, T.ccrCa, w);
    if (A.outcome !== "ok") {
      P(A.detail, "write_failed");
      continue;
    }
    if (((C = !1), (r.installRetries = 0), l.state !== e)) return;
    if (
      (t(
        `[agent-proxy] CA watch: the served CA changed${S === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten, trust stores refreshing`
      ),
      g("agent_proxy_ca_watch", { changed: !0, ...(S === "swapped" && { swapped: !0 }) }),
      h)
    )
      T9n({ proxyUrl: ae(u), gatewayCa: T.ccrCa });
    await Jn(n, e, r, T.ccrCa);
  }
}
async function At(n, { budgetMs: e, tries: r, viaStandaloneProxy: o = !1 }) {
  let s = AbortSignal.timeout(e),
    h = "",
    u = null;
  for (let p = 0; p < r; p++) {
    u = null;
    try {
      let y = `${n}${PVr}/ca-cert`,
        w = await fetch(y, { signal: s, ...(o && oa({ url: y })), ...tP(void 0) });
      if (w.status >= 500 || w.status === 408 || w.status === 429) {
        ((h = `status ${w.status}`), (u = w.headers.get("retry-after")));
        continue;
      }
      if (!w.ok)
        return { outcome: "fatal", code: "http_error", detail: `ca-cert fetch ${w.status}` };
      let b = xgi(await w.text());
      if (!b.ok) {
        h = pi[b.problem];
        continue;
      }
      return { outcome: "ok", ccrCa: b.bundle };
    } catch (y) {
      h = y instanceof Error ? y.message : String(y);
    }
  }
  return { outcome: "retry", detail: `ca-cert fetch exhausted (${h})`, retryAfter: u };
}
async function vt(n, e, r) {
  try {
    (await wt(j(r, ".."), { recursive: !0 }), await Dn(r, bi(n, e)));
  } catch (o) {
    let s = `ca-bundle write failed (${d(o)})`;
    if (Lar(o)) return { outcome: "retry", detail: s, retryAfter: null };
    return { outcome: "fatal", code: "write_failed", detail: s };
  }
  return { outcome: "ok" };
}
async function Ti(n) {
  try {
    (await wt(j(n, ".."), { recursive: !0, mode: 448 }),
      await Ue(
        n,
        `[default]
s3 =
  payload_signing_enabled = false
`,
        { flag: "wx", mode: 384 }
      ));
  } catch (e) {
    if (E(e) === "EEXIST") return;
    t(`[agent-proxy] aws config write failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "warn"
    });
  }
}
function ae(n) {
  return `http://127.0.0.1:${n}`;
}
function bi(n, e) {
  return (
    n +
    `
` +
    e
  );
}
export { Egi, kgi, zio, Tgi, Agi, Dki, Cgi, Hki, Khs, nDn, Lki, Nki, $ki, Vhs, Rgi, xgi, qhs, Pgi };

//# sourceMappingURL=chunk-egz5yr0m.js.map
