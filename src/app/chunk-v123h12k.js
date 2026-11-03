// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { Er } from "./chunk-fs43t96t.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { i } from "./chunk-cj37hmns.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { _t, AB } from "./chunk-ewvf3tep.js";
import { Prr } from "./chunk-at88wjsn.js";
import { lk, sT } from "./chunk-7zgz07kc.js";
import { tl, Ln, il, fa, M$, k } from "./chunk-ajtyjx88.js";
import { KE } from "./chunk-h2tyaevk.js";
import { iT } from "./chunk-ffrqb2c4.js";
import { py } from "./chunk-tdv74tcm.js";
import { z } from "./chunk-p197ae0z.js";
import m from "ws";
var R = '{"type":"KeepAlive"}',
  U = '{"type":"CloseStream"}',
  L = "/api/ws/speech_to_text/voice_stream",
  F = 8000,
  x = { safety: 5000, noData: 1500 };
function A(e, o, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= o && e <= d ? String(e) : "unknown";
}
function D(e) {
  return Er(e)?.toLowerCase() ?? "unknown";
}
var N = 1500;
async function Cmo() {
  if (_t() || AB()) return "skipped_privacy";
  try {
    let e = await Ht.get(`${rn().BASE_API_URL}/api/hello`, {
        headers: { "User-Agent": M$() },
        timeout: N,
        validateStatus: () => !0,
        maxRedirects: 0
      }),
      o = A(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${o}` : `http_${o}`;
  } catch (e) {
    let o = Ht.isAxiosError(e) ? e.code : void 0;
    return o === "ECONNABORTED" || o === "ETIMEDOUT" ? "timeout" : "fetch_failed";
  }
}
function B() {
  if (i.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return !0;
  return k("tengu_brick_follow", !1);
}
function Rmo() {
  if (!tl()) return !1;
  let e = Ln();
  return e !== null && e.accessToken !== null;
}
var H = 1024;
function j(e) {
  let o = new Set(),
    d = [],
    u = 0;
  for (let C of e) {
    let p = C.replace(/,/g, " ")
      .replace(/[^\x20-\x7E]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!p || o.has(p)) continue;
    let E = p.length + (d.length > 0 ? 1 : 0);
    if (u + E > H) break;
    (o.add(p), d.push(p), (u += E));
  }
  return d.join(",");
}
function W() {
  return;
}
async function xmo(e, o, d) {
  let u;
  if (z() && d !== void 0) (await fa({ credentials: d }), (u = await il(d)));
  else (await fa(), (u = Ln()));
  if (!u?.accessToken) return (t("[voice_stream] No OAuth token available"), null);
  let C = W() ?? rn().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://"),
    p = B(),
    E = new URLSearchParams({
      encoding: "linear16",
      sample_rate: "16000",
      channels: "1",
      endpointing_ms: "300",
      utterance_end_ms: "1000",
      language: o?.language ?? "en",
      use_conversation_engine: "true",
      ...(p && { forward_interims: "typed" })
    }),
    T = `${C}${L}?${E.toString()}`;
  t(`[voice_stream] Connecting to ${T}`);
  let I = {
    Authorization: `Bearer ${u.accessToken}`,
    "User-Agent": M$(),
    "x-app": "cli",
    "anthropic-client-platform": py()
  };
  if (o?.keyterms?.length) {
    let r = j(o.keyterms);
    if (r) I["x-config-keyterms"] = r;
  }
  let V = lk(void 0),
    P = { headers: I, proxy: sT(T), tls: V || void 0 };
  Prr(T, m);
  let a = new m(T, P),
    f = null,
    y = !1,
    w = !1,
    S = !1,
    g = !1,
    O = !1,
    _ = null,
    v = null,
    b = {
      send(r) {
        if (a.readyState !== m.OPEN) return;
        if (S) {
          t(`[voice_stream] Dropping audio chunk after CloseStream: ${String(r.length)} bytes`);
          return;
        }
        (t(`[voice_stream] Sending audio chunk: ${String(r.length)} bytes`),
          a.send(Buffer.from(r)));
      },
      finalize() {
        if (g || S) return Promise.resolve("ws_already_closed");
        return (
          (g = !0),
          new Promise((r) => {
            let c = setTimeout(() => _?.("safety_timeout"), x.safety),
              n = setTimeout(() => _?.("no_data_timeout"), x.noData);
            if (
              ((v = () => {
                (clearTimeout(n), (v = null));
              }),
              (_ = (s) => {
                if ((clearTimeout(c), clearTimeout(n), (_ = null), (v = null), l)) {
                  t(`[voice_stream] Promoting unreported interim before ${s} resolve`);
                  let M = l;
                  ((l = ""), e.onTranscript(M, !0));
                }
                (t(`[voice_stream] Finalize resolved via ${s}`), r(s));
              }),
              a.readyState === m.CLOSED || a.readyState === m.CLOSING)
            ) {
              _("ws_already_closed");
              return;
            }
            setTimeout(() => {
              if (((S = !0), a.readyState === m.OPEN))
                (t("[voice_stream] Sending CloseStream (finalize)"), a.send(U));
            }, 0);
          })
        );
      },
      close() {
        if (((S = !0), f)) (clearInterval(f), (f = null));
        if (((y = !1), a.readyState === m.OPEN)) a.close();
      },
      isConnected() {
        return y && a.readyState === m.OPEN;
      }
    };
  a.on("open", () => {
    (t("[voice_stream] WebSocket connected"),
      (y = !0),
      (w = !0),
      t("[voice_stream] Sending initial KeepAlive"),
      a.send(R),
      (f = setInterval(
        (r) => {
          if (r.readyState === m.OPEN) (t("[voice_stream] Sending periodic KeepAlive"), r.send(R));
        },
        F,
        a
      )),
      e.onReady(b));
  });
  let l = "";
  function h(r) {
    if (!l) return;
    t(`[voice_stream] Promoting unreported interim to final (${r})`);
    let c = l;
    ((l = ""), e.onTranscript(c, !0));
  }
  return (
    a.on("message", (r) => {
      let c = r.toString();
      t(`[voice_stream] Message received (${String(c.length)} chars)`);
      let n;
      try {
        n = te(c);
      } catch {
        return;
      }
      switch (n.type) {
        case "TranscriptInterim":
        case "TranscriptText": {
          let s = n.data;
          if ((t(`[voice_stream] ${n.type} (${String(s?.length ?? 0)} chars)`), S)) v?.();
          if (s) ((l = s), e.onTranscript(s, !1));
          break;
        }
        case "TranscriptEndpoint": {
          t(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
          let s = l;
          if (((l = ""), s)) e.onTranscript(s, !0);
          if (S) _?.("post_closestream_endpoint");
          break;
        }
        case "TranscriptError": {
          let s = n.description ?? n.error_code ?? "unknown transcription error";
          if ((t(`[voice_stream] TranscriptError: ${s}`), h("TranscriptError"), !g)) e.onError(s);
          break;
        }
        case "error": {
          let s = n.message ?? `unstructured error frame (keys: ${Object.keys(n).join(", ")})`;
          if ((t(`[voice_stream] Server error: ${s}`), h("server error"), !g)) e.onError(s);
          break;
        }
        default:
          break;
      }
    }),
    a.on("close", (r, c) => {
      let n = c?.toString() ?? "";
      if ((t(`[voice_stream] WebSocket closed: code=${String(r)} reason="${n}"`), (y = !1), f))
        (clearInterval(f), (f = null));
      if ((h("ws close"), _?.("ws_close"), !g && !O && r !== 1000 && r !== 1005))
        e.onError(
          `Connection closed: code ${String(r)}${n ? ` \u2014 ${n}` : ""}`,
          w ? void 0 : { connectFailureCode: `ws_closed_${A(r, 1000, 4999)}` }
        );
      e.onClose();
    }),
    a.on("unexpected-response", (r, c) => {
      let n = c.statusCode ?? 0;
      if (n === 101) {
        t("[voice_stream] unexpected-response fired with 101; ignoring");
        return;
      }
      if (
        (t(
          `[voice_stream] Upgrade rejected: status=${String(n)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`
        ),
        (O = !0),
        c.resume(),
        r.destroy?.(),
        g)
      )
        return;
      e.onError(`WebSocket upgrade rejected with HTTP ${String(n)}`, {
        fatal: n >= 400 && n < 500,
        connectFailureCode:
          c.headers["cf-mitigated"] !== void 0
            ? `cf_mitigated_${A(n, 100, 599)}`
            : `upgrade_rejected_${A(n, 100, 599)}`
      });
    }),
    a.on("error", (r) => {
      if (
        (t(`[voice_stream] WebSocket error: ${r.message}`, { level: "error" }), h("ws error"), !g)
      )
        e.onError(
          `Voice stream connection error: ${r.message}`,
          w ? void 0 : { connectFailureCode: `ws_error_${D(r)}` }
        );
    }),
    b
  );
}
export { Cmo, Rmo, xmo };

//# sourceMappingURL=chunk-v123h12k.js.map
