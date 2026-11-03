// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U, Eu } from "./chunk-wrtp8qz8.js";
import { E } from "./chunk-fs43t96t.js";
import { dst } from "./chunk-dc0nzty2.js";
import { Ac } from "./chunk-mapzg9k3.js";
import { Wh } from "./chunk-nqsvrwdr.js";
async function iS(
  e,
  t,
  { concurrency: n = Number.POSITIVE_INFINITY, stopOnError: r = !0, signal: o } = {}
) {
  return new Promise((i, s) => {
    if (e[Symbol.iterator] === void 0 && e[Symbol.asyncIterator] === void 0)
      throw TypeError(
        `Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`
      );
    if (typeof t !== "function") throw TypeError("Mapper function is required");
    if (!((Number.isSafeInteger(n) && n >= 1) || n === Number.POSITIVE_INFINITY))
      throw TypeError(
        `Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`
      );
    let a = [],
      c = [],
      d = new Map(),
      p = !1,
      S = !1,
      y = !1,
      C = 0,
      f = 0,
      B = e[Symbol.iterator] === void 0 ? e[Symbol.asyncIterator]() : e[Symbol.iterator](),
      h = () => {
        l(o.reason);
      },
      u = () => {
        o?.removeEventListener("abort", h);
      },
      k = (m) => {
        (i(m), u());
      },
      l = (m) => {
        ((p = !0), (S = !0), s(m), u());
      };
    if (o) {
      if (o.aborted) l(o.reason);
      o.addEventListener("abort", h, { once: !0 });
    }
    let b = async () => {
      if (S) return;
      let m = await B.next(),
        _ = f;
      if ((f++, m.done)) {
        if (((y = !0), C === 0 && !S)) {
          if (!r && c.length > 0) {
            l(AggregateError(c));
            return;
          }
          if (((S = !0), d.size === 0)) {
            k(a);
            return;
          }
          let g = [];
          for (let [R, j] of a.entries()) {
            if (d.get(R) === T) continue;
            g.push(j);
          }
          k(g);
        }
        return;
      }
      (C++,
        (async () => {
          try {
            let g = await m.value;
            if (S) return;
            let R = await t(g, _);
            if (R === T) d.set(_, R);
            ((a[_] = R), C--, await b());
          } catch (g) {
            if (r) l(g);
            else {
              (c.push(g), C--);
              try {
                await b();
              } catch (R) {
                l(R);
              }
            }
          }
        })());
    };
    (async () => {
      for (let m = 0; m < n; m++) {
        try {
          await b();
        } catch (_) {
          l(_);
          break;
        }
        if (y || p) break;
      }
    })();
  });
}
var T = Symbol("skip");
import { promisify as M } from "util";
import {
  constants as q,
  deflateRaw as W,
  deflateRawSync as K,
  inflateRaw as H,
  inflateRawSync as V
} from "zlib";
var w = 131072,
  Y = 32768,
  Z = 4 * w,
  X = 32,
  Q = 2,
  J = dst,
  v = 210000,
  ee = 256,
  I = { messages: '"messages":[', system: '],"system":', endOfSystemBlock: '"},{' },
  te = 1024;
function P(e = J) {
  return {
    blocks: new Map(),
    storedBytes: 0,
    maxStoredBytes: e,
    evictedForSpaceCount: 0,
    generation: 0,
    cancelIdleDrop: void 0,
    pooledCompression: Promise.resolve()
  };
}
function iwt(e) {
  (e.cancelIdleDrop?.(),
    (e.cancelIdleDrop = void 0),
    e.blocks.clear(),
    (e.storedBytes = 0),
    e.generation++);
}
function xGo({ body: e, level: t, store: n, clock: r }) {
  let o = ne(e),
    i = re(e, o, t),
    s = r.monotonicNow(),
    a = 0,
    c = 0,
    d = o.map((p, S) => {
      let y = N(n, i[S], s);
      if (y !== void 0) (a++, (c += p.end - p.start));
      return y;
    });
  if (n.blocks.size > 0) z(n, r);
  return {
    body: e,
    level: t,
    blocks: o,
    keys: i,
    reused: d,
    reusedBlockCount: a,
    reusedBytes: c,
    generation: n.generation
  };
}
function vJs({ keys: e, reused: t }) {
  return e.some((n, r) => n !== void 0 && t[r] === void 0);
}
async function EJs(e, t, n, r) {
  let o = await IGo(e, t, n, r),
    i = Buffer.from([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]),
    s = Buffer.alloc(10);
  return (
    (s[0] = 3),
    s.writeUInt32LE(Bun.hash.crc32(e.body), 2),
    s.writeUInt32LE(e.body.length % 4294967296, 6),
    Buffer.concat([i, ...o, s])
  );
}
class awt extends Error {
  fault;
  constructor(e, t) {
    super("Request body gzip: a newly compressed block failed its check", t);
    this.fault = e;
  }
}
function PGo(e) {
  let t = E(e);
  return t === "Z_DATA_ERROR" || t === "Z_BUF_ERROR" ? t : void 0;
}
async function IGo(e, t, n, { signal: r, stopIf: o, inBackground: i = !1 } = {}) {
  let { body: s, level: a, blocks: c, keys: d, reused: p, generation: S } = e,
    y;
  if (!i && s.length - e.reusedBytes <= Z)
    y = c.map((f, B) => {
      let h = p[B];
      if (h !== void 0) return h;
      let u = s.subarray(f.start, f.end),
        k = x(s, f, a),
        l = K(u, k);
      try {
        O(u, l, V(l, k));
      } catch (b) {
        throw A(b);
      }
      return l;
    });
  else {
    let B = (i ? Promise.resolve() : t.pooledCompression).then(() => {
      r?.throwIfAborted();
      let h = n.monotonicNow();
      return iS(
        c,
        async (u, k) => {
          if (o?.()) throw Error("Request body gzip: compression stopped");
          if (p[k] !== void 0) return p[k];
          let l = t.generation === S ? N(t, d[k], h) : void 0;
          if (l !== void 0) return (e.reusedBlockCount++, (e.reusedBytes += u.end - u.start), l);
          let b = s.subarray(u.start, u.end),
            m = x(s, u, a),
            _ = await oe(b, m);
          try {
            O(b, _, await se(_, m));
          } catch (g) {
            throw A(g);
          }
          return _;
        },
        { concurrency: i ? Q : X, signal: r }
      );
    });
    if (!i)
      t.pooledCompression = B.then(
        () => {},
        () => {}
      );
    y = await B;
  }
  if (t.generation !== S) return y;
  let C = n.monotonicNow();
  return (
    y.forEach((f, B) => {
      let h = d[B];
      if (h !== void 0 && !t.blocks.has(h)) {
        let u = f.buffer.byteLength === f.length;
        ae(t, h, u ? f : Buffer.copyBytesFrom(f), C);
      }
    }),
    de(t, C),
    z(t, n),
    y
  );
}
function ne(e) {
  let t = e.lastIndexOf(I.system),
    n = t === -1 ? -1 : e.indexOf(I.endOfSystemBlock, t),
    r = [e.indexOf(I.messages), t, n !== -1 && n - t <= te ? n + 2 : -1, e.length],
    o = [],
    i = 0;
  for (let s of r) {
    if (s <= i) continue;
    for (let a = i; a < s; a += w)
      o.push({ start: a, end: Math.min(a + w, s), dictionaryStart: Math.max(a - Y, i) });
    i = s;
  }
  return o;
}
function re(e, t, n) {
  let r = t.map((o) =>
    o.end - o.start === w ? Bun.SHA256.hash(e.subarray(o.start, o.end), "base64") : void 0
  );
  return t.map((o, i) => {
    let s = r[i],
      a = o.dictionaryStart < o.start ? r[i - 1] : "none";
    return s === void 0 || a === void 0 ? void 0 : `${n}:${a}:${s}`;
  });
}
function oe(e, t) {
  return M(W)(e, t);
}
function se(e, t) {
  return M(H)(e, t);
}
function x(e, t, n) {
  return {
    level: n,
    finishFlush: q.Z_SYNC_FLUSH,
    chunkSize: w,
    ...(t.dictionaryStart < t.start && { dictionary: e.subarray(t.dictionaryStart, t.start) })
  };
}
function A(e) {
  let t = PGo(e);
  return t === void 0 ? e : new awt(t, { cause: e });
}
var ie = 65535;
function O(e, t, n) {
  if (!n.equals(e)) throw new awt("inflates_to_other_bytes");
  if (t.length < 4 || t.readUInt32BE(t.length - 4) !== ie) throw new awt("no_flush_marker");
}
function N(e, t, n) {
  let r = t === void 0 ? void 0 : e.blocks.get(t);
  if (t === void 0 || r === void 0) return;
  return (
    e.blocks.delete(t),
    e.blocks.set(t, { compressed: r.compressed, lastUsedAt: n }),
    r.compressed
  );
}
function ae(e, t, n, r) {
  let o = { compressed: n, lastUsedAt: r };
  (e.blocks.set(t, o), (e.storedBytes += G(o)));
}
function de(e, t) {
  for (let [n, r] of e.blocks) {
    let o = e.storedBytes > e.maxStoredBytes;
    if (!o && t - r.lastUsedAt < v) return;
    if ((e.blocks.delete(n), (e.storedBytes -= G(r)), o)) e.evictedForSpaceCount++;
  }
}
function z(e, t) {
  let n = new WeakRef(e);
  (e.cancelIdleDrop?.(),
    (e.cancelIdleDrop = t.setTimeout(
      () => {
        let r = n.deref();
        if (r !== void 0) iwt(r);
      },
      v,
      { unref: !0 }
    )));
}
function G(e) {
  return ee + e.compressed.length;
}
function D() {
  return new WeakMap();
}
function kJs(e, t, n) {
  let r = e.get(t);
  if (r?.fired) return { kind: "already_fired" };
  let o = n?.input_tokens ?? 0,
    i = n?.cache_read_input_tokens ?? 0,
    s = n?.cache_creation_input_tokens ?? 0,
    a =
      (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) +
      (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0),
    c = s > 0 ? s : a;
  if (o + i + c <= 0) return { kind: "no_usage" };
  if (o < 20000 || c >= 0.1 * o) {
    let p = r ?? { consecutive: 0, fired: !1, okEmitted: !1 };
    if (!r) e.set(t, p);
    if (((p.consecutive = 0), !p.okEmitted && i + c > 0))
      return ((p.okEmitted = !0), { kind: "confirm" });
    return { kind: "healthy" };
  }
  let d = r ?? { consecutive: 0, fired: !1, okEmitted: !1 };
  if (!r) e.set(t, d);
  if ((d.consecutive++, d.consecutive >= 3))
    return (
      (d.fired = !0),
      {
        kind: "fire",
        consecutive: d.consecutive,
        inputTokens: o,
        cacheReadTokens: i,
        cacheCreationTokens: c
      }
    );
  return { kind: "counted", consecutive: d.consecutive };
}
var Yet = "root";
function v$(e) {
  return e ?? "root";
}
var L = 256;
class F {
  promptCacheBreak = {
    previousStateBySource: new Map(),
    hydrationAttempted: !1,
    pendingPersist: Promise.resolve(),
    latestQueuedPersist: null,
    hashSalt: null,
    summaryForks: new Map(),
    parkedAgentBaselines: new Map(),
    parkedBy: null,
    classifierLines: new Map(),
    classifierCompactions: new Map()
  };
  threadDecisionTracker = void 0;
  threadInheritedFields = { storedToolsHashByThread: new Map(), breakerTripped: !1 };
  threadDropRecreate = new Map();
  threadRequestEnds = new Map();
  dumpPrompts = {
    recentRequests: [],
    stateByAgent: new Map(),
    retiredInitHashes: new Ac({ max: 1000 }),
    appendQueue: Wh()
  };
  requestReplay = {
    chains: new Map(),
    chainClears: 0,
    hashMemos: new WeakMap(),
    unrecordableShapes: new Set()
  };
  lastIngressUuidBySession = new Map();
  cacheCoverage = D();
  ccsSenderAddr = { asking: new Map(), held: new Map() };
  gzipRequestBody = {
    latchedOff: !1,
    rejectedThisProcess: !1,
    persistedLatchChecked: !1,
    persistedLatchInEffect: !1,
    telemetryByClientRequestId: new Ac({ max: L }),
    dispatchAtByClientRequestId: new Ac({ max: L }),
    ccrWorkerSkipReasonsLogged: new Set(),
    blockStore: P(),
    blocksSwitchedOff: !1,
    blocksBuildGeneration: void 0,
    blockGzippedResponses: new WeakSet()
  };
  sentPrefix = {
    ledger: void 0,
    mode: void 0,
    persist: Promise.resolve(),
    persisted: void 0,
    pendingSeed: void 0,
    lastReport: new WeakMap(),
    lastVerdict: new WeakMap(),
    renderEpochs: new WeakMap(),
    memoryEpochs: new WeakMap(),
    announced: new WeakMap(),
    excuse: new WeakMap(),
    staged: new WeakMap(),
    boundVerdict: new WeakMap()
  };
  bindingDrops = { seenBlocks: void 0, threadsRead: new Ac({ max: 512 }) };
  foreignThinkingKeep = void 0;
  streamFirstByteArmedRequestIds = new Ac({ max: 64 });
  skillHealthMap = void 0;
  headerMemberDropsNoted = new Set();
  firedOnceKeys = new Set();
  hasFired(e) {
    return this.firedOnceKeys.has(e);
  }
  markFired(e) {
    this.firedOnceKeys.add(e);
  }
  once(e) {
    if (this.firedOnceKeys.has(e)) return !1;
    return (this.firedOnceKeys.add(e), !0);
  }
  resetStreamNoEventsWarningLatch() {
    this.firedOnceKeys.delete("stream_no_events_fallback_warning");
  }
}
var ce = new nt(() => new F());
function Ti() {
  return ce.of(U());
}
var OGo = new Set(["clear", "resume", "spare_claim", "remote_attach"]);
function TJs() {
  return Eu((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    let n = Ti();
    if ((n.resetStreamNoEventsWarningLatch(), OGo.has(t))) {
      (n.threadDropRecreate.delete(Yet), n.threadRequestEnds.delete(Yet));
      let r = n.gzipRequestBody;
      if ((iwt(r.blockStore), r.blocksSwitchedOff === "until_next_conversation"))
        r.blocksSwitchedOff = !1;
    }
  });
}
export { iS, iwt, xGo, vJs, EJs, awt, PGo, IGo, kJs, Yet, v$, Ti, OGo, TJs };

//# sourceMappingURL=chunk-0v8111n2.js.map
