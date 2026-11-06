import {
  fileURLToPath as __sourceFilePath_56634784fad8442e,
  URL as __sourceFilePath_56634784fad8442e_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Te } from "./chunk-pbpv20s6.js";
import { Ke } from "./chunk-fs43t96t.js";
import { w } from "./chunk-7m7t89vx.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ms, t } from "./chunk-4kxznmzw.js";
import { re, Or } from "./chunk-a16y5hcz.js";
import { xe } from "./chunk-pnyqvnxs.js";
import { i } from "./chunk-cj37hmns.js";
import { zl, k } from "./chunk-ajtyjx88.js";
import { Me } from "./chunk-rf7g1m78.js";
import { m } from "./chunk-brszmkb3.js";
import { tr, Pt } from "./chunk-xe386mry.js";
import { HH, b8r } from "./chunk-dc0nzty2.js";
import { kre, l9n } from "./chunk-bbw420pv.js";
import { ur } from "./chunk-t86k189s.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { ine, UN } from "./chunk-j0tbz6ra.js";
import { Li } from "./chunk-f7aya6cs.js";
import { gDe } from "./chunk-fnsjs1v2.js";
import { p6t, m6t, ERt, awe, nPe, Vur } from "./chunk-3827ysmv.js";
import { Es } from "./chunk-en1bapsd.js";
import { K } from "./chunk-61vn6n52.js";
import { V } from "./chunk-j32s98r9.js";
import { Je } from "./chunk-fgf47p3n.js";
import { mt } from "./chunk-18g32wet.js";
import { Ee } from "./chunk-xzcese97.js";
import { Tr } from "./chunk-nh2498vy.js";
import { we } from "./chunk-bf8qkzmg.js";
import { vxt } from "./chunk-tfpf8e6s.js";
import { has, yas } from "./chunk-mdxeekqd.js";
import { Do } from "./chunk-bffrn2r2.js";
import { vs } from "./chunk-artk45zy.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { c4 } from "./chunk-wjr82d4q.js";
import { ro, Yr, de, y, j } from "./chunk-bq35vvkw.js";
import { Js } from "./chunk-6jn0brsm.js";
import { Ps } from "./chunk-5b88xb0z.js";
import { S } from "./chunk-a2y39866.js";
j();
j();
j();
var Mo = 7250,
  Eo = 200,
  Ie = {
    session: "this session only",
    day: "this session + this project\u2019s other sessions from the last 24 hours",
    week: "this session + this project\u2019s other sessions from the last 7 days"
  },
  $t = [
    { label: "This session only", value: "session" },
    { label: "This session + the last 24 hours", value: "day" },
    { label: "This session + the last 7 days", value: "week" }
  ],
  Pe = {
    transcript_missing:
      "This session has no transcript on disk, so the bundle has the report only.",
    transcript_incomplete:
      "The session transcript couldn't be read in full, so the bundle is missing some or all of it.",
    transcript_over_zip_limit:
      "The session transcript is too large for one archive, so the bundle has only the start of it."
  },
  te = {
    post: {
      consentAction: "submit",
      consentIntro: "This report will include:",
      consentFooter: "We may use these to debug related issues and improve Claude Code.",
      submitting: "Submitting report\u2026"
    },
    bundle: {
      consentAction: "save",
      consentIntro: "An archive will be saved to disk containing:",
      consentFooter:
        "Nothing leaves this machine until you send the bundle file. Secrets (API keys, tokens, credentials) are redacted before writing.",
      submitting: "Saving bundle\u2026"
    },
    share: {
      consentAction: "share",
      consentIntro: "This shared conversation will include:",
      consentFooter:
        "A shareable link will be created so you can post the conversation for debugging and support.",
      submitting: "Uploading share\u2026"
    }
  };
function Oe(d) {
  let o = Ps({ status: "none" }),
    { subscribe: a, getSnapshot: p } = o;
  if (d === "share")
    return {
      subscribe: a,
      getSnapshot: p,
      start() {},
      deliver() {},
      save() {},
      fail() {},
      abandon() {}
    };
  return {
    subscribe: a,
    getSnapshot: p,
    start() {
      o.setState(() => ({ status: "sending" }));
    },
    deliver(h) {
      o.setState(() => ({ status: "delivered", referenceId: h }));
    },
    save(h, C, c) {
      o.setState(() => ({
        status: "saved",
        referenceId: h,
        bundlePath: C,
        ...(c !== void 0 && { transcriptProblem: c })
      }));
    },
    fail(h, C) {
      o.setState((c) =>
        c.status === "delivered" || c.status === "saved"
          ? c
          : { status: "failed", reason: h, ...(C === !0 && { final: C }) }
      );
    },
    abandon() {
      o.setState((h) => (h.status === "sending" ? { status: "none" } : h));
    }
  };
}
async function Ut(d, o) {
  try {
    await d();
  } finally {
    o.abandon();
  }
}
function xt({
  abortController: d,
  messages: o,
  initialDescription: a,
  onDone: p,
  applyMessageOp: h,
  backgroundTasks: C = {},
  mode: c = "post",
  readFileState: P,
  surveyFeedbackSource: b,
  command: _ = "/feedback",
  wholeTranscript: W,
  send: ke
}) {
  let { storageV5: Se, credentials: pe } = Me(),
    me = Es(),
    [Ce, z] = y("userInput"),
    [jt, Wt] = y(0),
    [ne, zt] = y(a ?? ""),
    [Gt, $e] = y(null),
    [Vt, qt] = y(null),
    [Xt, Jt] = y(null),
    [Ue, se] = y(null),
    [Kt, ve] = y(!1),
    [N] = y(() => ke ?? Oe(c)),
    Yt = xe(N),
    [Zt, gt] = y(!1),
    [Qt, eo] = y(null),
    D = Qt ?? Yt,
    G = c !== "share" && !Zt && D.status !== "none",
    to = G && D.status !== "failed",
    oo = D.status === "sending" ? "submitting" : "done",
    F = to ? oo : Ce,
    no = G && D.status === "failed" ? D.reason : null,
    U = Ue ?? no,
    fe = Ue !== null ? Kt : G && D.status === "failed" && D.final === !0,
    le = G && (D.status === "delivered" || D.status === "saved") ? D.referenceId : Gt,
    ge = G && D.status === "saved" ? D.bundlePath : Vt,
    Fe = G && D.status === "saved" ? (D.transcriptProblem ?? null) : Xt,
    he = Pt(),
    ht = he ? (tr()?.sessionId ?? null) : null,
    [so] = y(() =>
      he
        ? Promise.resolve(null)
        : HH()
            .then((f) => (f ? b8r() : null))
            .catch(() => null)
    ),
    [bt, ao] = y(null),
    [be, io] = y("session"),
    Be = K((f) => f.transcripts),
    lo = Te().columns - 4,
    jo = gDe(),
    Re = k("tengu_amber_lynx", !1),
    yt = de(async () => {
      (z("submitting"), se(null), $e(null), N.start());
      let f = (J, I = !1) => {
        (se(J), ve(I), z("userInput"), N.fail(J, I));
      };
      if (c === "bundle") {
        let J = kre(_);
        if (J !== null) {
          (m("feedback_bundle", "disabled_at_save"), f(J));
          return;
        }
        let I = await Vur({
          messages: o,
          description: ne,
          surface: "cli",
          scope: be,
          backgroundTasks: C,
          transcripts: Be,
          signal: d.signal,
          surveyFeedbackSource: b,
          wholeTranscript: W,
          storageV5: Se,
          host: me
        });
        if (d.signal.aborted) return;
        if (I.success)
          ($e(I.bundleId),
            qt(I.zipPath),
            Jt(I.transcriptProblem ?? null),
            z("done"),
            N.save(I.bundleId, I.zipPath, I.transcriptProblem));
        else f(`Couldn't save the feedback bundle to disk: ${I.error}`);
        return;
      }
      let [A, mo] = await Promise.all([
        nPe({
          messages: o,
          description: ne,
          surface: "cli",
          scope: be,
          backgroundTasks: C,
          transcripts: Be,
          signal: d.signal,
          surveyFeedbackSource: b,
          storageV5: Se,
          host: me,
          credentials: pe
        }),
        Re ? Promise.resolve(null) : Et(ne, d.signal, pe)
      ]);
      if (d.signal.aborted) return;
      if ((ao(mo), A.success)) ($e(A.feedbackId), z("done"), N.deliver(A.feedbackId));
      else {
        let J = p6t(A),
          I = J ?? m6t(A);
        if (I !== void 0) f(I, J !== void 0 && A.refusal?.reportContent !== !0);
        else if (A.failureReason === "auth_error")
          f("Couldn't send feedback: not signed in. Run /login, then retry.");
        else if (A.failureReason === "policy_blocked")
          f(kre(_) ?? "Feedback is disabled by your organization's policy.");
        else {
          let fo =
            ERt(A) ??
            (A.failureReason === "timeout"
              ? " (request timed out)"
              : A.failureReason === "network_error"
                ? " (couldn't reach the service)"
                : "");
          f(`Couldn't send feedback${fo}. If it keeps failing, you can file at ${l9n()} instead.`);
        }
      }
    }, [ne, o, Re, C, Be, d, c, be, Se, pe, _, W, N, me]),
    co = de(() => Ut(yt, N), [yt, N]),
    Le = de(() => {
      if (G) {
        let f = N.getSnapshot();
        eo((A) => A ?? f);
      }
      (d.abort(), p("Feedback / bug report cancelled", { display: "system" }));
    }, [p, d, N, G]),
    Wo = de(() => {
      z("done");
    }, []),
    zo = de((f) => {
      (se(f), ve(!1), z("userInput"));
    }, []);
  lt("confirm:no", Le, { context: "Settings", isActive: F === "userInput" });
  let uo = F === "done" || (U && F !== "userInput");
  function po(f) {
    if (f.ctrl || f.meta) return;
    if (F === "done") {
      if ((f.preventDefault(), c === "share")) return;
      if (!Re && f.key === "return" && bt) {
        let A = Mt(le ?? "", bt, ne);
        Js(A);
      }
      if (U) p("Error submitting feedback / bug report", { display: "system" });
      else if (c === "bundle" && ge)
        p(
          Fe === null
            ? `Feedback bundle saved to \`${ge}\``
            : `Feedback bundle saved to \`${ge}\`. ${Pe[Fe]}`,
          { display: "system" }
        );
      else p("Feedback / bug report submitted", { display: "system" });
      return;
    }
    if (U && F !== "userInput") {
      (f.preventDefault(), p("Error submitting feedback / bug report", { display: "system" }));
      return;
    }
    if (F === "consent") {
      if (f.key === "left") {
        (f.preventDefault(), z(c === "share" || he ? "userInput" : "scope"));
        return;
      }
      if (f.key === "return" || f.key === " ") (f.preventDefault(), co());
    }
  }
  return e(Do, {
    onKeyDown: po,
    children: r(we, {
      title: "Submit feedback / bug report",
      onCancel: Le,
      isCancelActive: F !== "userInput" && !uo,
      hideInputGuide: F === "done",
      inputGuide:
        F === "userInput"
          ? r(Ee, {
              children: [
                !fe && e(V, { chord: "enter", action: "continue" }),
                e(ft, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel"
                })
              ]
            })
          : F === "scope"
            ? r(Ee, {
                children: [
                  e(V, { chord: "enter", action: "choose" }),
                  e(ft, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "cancel"
                  })
                ]
              })
            : F === "consent"
              ? r(Ee, {
                  children: [
                    e(V, { chord: "enter", action: te[c].consentAction }),
                    e(V, { chord: "left", action: "change" }),
                    e(ft, {
                      action: "confirm:no",
                      context: "Confirmation",
                      fallback: "Esc",
                      description: "cancel"
                    })
                  ]
                })
              : null,
      children: [
        F === "userInput" &&
          r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(n, { children: "Describe the issue below:" }),
              e(Tr, {
                value: ne,
                onChange: (f) => {
                  if ((zt(f), fe && Ue === null && U !== null)) (se(U), ve(!0));
                  if ((gt(!0), U && !fe)) se(null);
                },
                columns: lo,
                clearOnSubmit: !1,
                onSubmit: (f) => {
                  if (fe) return;
                  if ((gt(!0), c !== "share" && f.trim() === "")) {
                    (se("Please describe the issue before submitting."), ve(!1));
                    return;
                  }
                  (se(null), z(c === "share" || he ? "consent" : "scope"));
                },
                onExitMessage: (f) => {
                  if (f) (d.abort(), p("Feedback cancelled", { display: "system" }));
                },
                cursorOffset: jt,
                onChangeCursorOffset: Wt,
                showCursor: !0,
                focus: !0
              }),
              U &&
                r(s, {
                  flexDirection: "column",
                  gap: 1,
                  children: [
                    e(vs, { error: U }),
                    !fe &&
                      e(n, {
                        dimColor: !0,
                        children: "Edit and press Enter to retry, or Esc to cancel"
                      })
                  ]
                })
            ]
          }),
        F === "scope" &&
          r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(n, { children: "How much session history should we include?" }),
              e(Je, {
                options: $t,
                defaultFocusValue: be,
                onChange: (f) => {
                  (io(f), z("consent"));
                },
                onCancel: Le
              })
            ]
          }),
        F === "consent" &&
          r(s, {
            flexDirection: "column",
            children: [
              e(n, { children: te[c].consentIntro }),
              r(s, {
                marginLeft: 2,
                flexDirection: "column",
                children: [
                  r(n, {
                    children: [
                      "- Your feedback / bug description:",
                      " ",
                      e(n, { dimColor: !0, children: ne })
                    ]
                  }),
                  r(n, {
                    children: [
                      "- Environment info:",
                      " ",
                      r(n, {
                        dimColor: !0,
                        children: [
                          i.platform,
                          ", ",
                          i.terminal,
                          ", v",
                          {
                            ISSUES_EXPLAINER:
                              "report the issue at https://github.com/anthropics/claude-code/issues",
                            PACKAGE_URL: "@anthropic-ai/claude-code",
                            README_URL: "https://code.claude.com/docs/en/overview",
                            VERSION: "2.1.310",
                            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                            BUILD_TIME: "2026-10-23T17:43:32Z",
                            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
                            HOOKS_WORKER_URL: __sourceFilePath_56634784fad8442e(
                              new __sourceFilePath_56634784fad8442e_URL(
                                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                import.meta.url
                              )
                            ),
                            DD_SOURCEMAP_GROUP: "default"
                          }.VERSION,
                          ""
                        ]
                      })
                    ]
                  }),
                  c !== "share" &&
                    he &&
                    r(n, {
                      children: [
                        "- Remote workspace:",
                        " ",
                        r(n, {
                          dimColor: !0,
                          children: [
                            ht ? `session ${ht}; ` : "",
                            "git metadata is not collected from this machine"
                          ]
                        })
                      ]
                    }),
                  c !== "share" &&
                    e(ro, { fallback: null, children: e(dt, { gitStatePromise: so }) }),
                  r(n, {
                    children: [
                      "- Session transcript:",
                      " ",
                      e(n, { dimColor: !0, children: c === "share" ? Ie.session : Ie[be] })
                    ]
                  }),
                  c !== "share" &&
                    r(n, {
                      children: [
                        "- Recent error messages:",
                        " ",
                        e(n, {
                          dimColor: !0,
                          children:
                            "up to the last 100 since you launched Claude Code (may include file paths)"
                        })
                      ]
                    })
                ]
              }),
              e(s, {
                marginTop: 1,
                children: e(n, { wrap: "wrap", dimColor: !0, children: te[c].consentFooter })
              })
            ]
          }),
        F === "submitting" &&
          c !== "share" &&
          e(s, { flexDirection: "row", gap: 1, children: e(n, { children: te[c].submitting }) }),
        F === "done" &&
          c === "bundle" &&
          r(s, {
            flexDirection: "column",
            children: [
              r(n, {
                color: "success",
                children: [e(mt, { status: "success", withSpace: !0 }), "Feedback bundle saved"]
              }),
              ge &&
                r(s, {
                  marginTop: 1,
                  flexDirection: "column",
                  children: [
                    r(n, { children: ["Bundle: ", e(n, { dimColor: !0, children: ge })] }),
                    r(n, { children: ["Reference ID: ", e(n, { dimColor: !0, children: le })] }),
                    Fe &&
                      e(s, { marginTop: 1, children: e(n, { wrap: "wrap", children: Pe[Fe] }) }),
                    e(s, {
                      marginTop: 1,
                      children: e(n, {
                        wrap: "wrap",
                        children:
                          "Send this file to your Anthropic account representative or attach it to your support request."
                      })
                    })
                  ]
                }),
              e(s, {
                marginTop: 1,
                children: e(n, { dimColor: !0, children: "Press any key to close" })
              })
            ]
          }),
        F === "done" &&
          c === "post" &&
          (Re || G
            ? r(s, {
                flexDirection: "column",
                children: [
                  U
                    ? e(vs, { error: U })
                    : r(n, {
                        color: "success",
                        children: [e(mt, { status: "success", withSpace: !0 }), "Feedback sent"]
                      }),
                  le &&
                    r(Q, {
                      children: [
                        e(s, {
                          marginTop: 1,
                          children: r(n, {
                            children: ["Reference ID: ", e(n, { dimColor: !0, children: le })]
                          })
                        }),
                        e(s, {
                          marginTop: 1,
                          children: e(n, {
                            wrap: "wrap",
                            children:
                              "If you're working with Anthropic support, please include the ID above."
                          })
                        })
                      ]
                    }),
                  e(s, {
                    marginTop: 1,
                    children: e(n, { dimColor: !0, italic: !0, children: "Any key to close" })
                  })
                ]
              })
            : r(s, {
                flexDirection: "column",
                children: [
                  U
                    ? e(vs, { error: U })
                    : e(n, { color: "success", children: "Thank you for your report!" }),
                  le && r(n, { dimColor: !0, children: ["Feedback ID: ", le] }),
                  e(s, {
                    marginTop: 1,
                    children: e(n, {
                      dimColor: !0,
                      italic: !0,
                      children: r(Ee, {
                        children: [
                          e(V, { chord: "enter", action: "open GitHub issue" }),
                          e(n, { children: "any key to close" })
                        ]
                      })
                    })
                  })
                ]
              })),
        null
      ]
    })
  });
}
function Mt(d, o, a) {
  let p = re(Ms(o), Eo),
    h = Ms(a),
    C = gDe(),
    c = `${l9n()}/new?title=${encodeURIComponent(p)}&labels=user-reported,bug&body=`,
    P = encodeURIComponent(`**Bug Description**
`),
    b = encodeURIComponent(`

**Environment Info**
- Platform: ${i.platform}
- Terminal: ${i.terminal}
- Version: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_56634784fad8442e(new __sourceFilePath_56634784fad8442e_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION || "unknown"}
- Feedback ID: ${d}
`),
    _ = encodeURIComponent(h),
    W = Mo - c.length - P.length - b.length;
  if (_.length > W) {
    let ke = encodeURIComponent(`\u2026

**Note:** The description was shortened to fit GitHub's link length limit. The full description was sent to Anthropic with the feedback report; its Feedback ID is below.`),
      Se = 50,
      pe = W - ke.length - 50;
    _ = "";
    for (let me of h) {
      let Ce = encodeURIComponent(me);
      if (_.length + Ce.length > pe) break;
      _ += Ce;
    }
    _ += ke;
  }
  return c + P + _ + b;
}
async function Et(d, o, a) {
  try {
    let p = await UN({
        systemPrompt: Li([
          "Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.",
          "Claude Code is an agentic coding CLI based on the Anthropic API.",
          "The title should:",
          "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title",
          "- Be concise, specific and descriptive of the actual problem",
          "- Use technical terminology appropriate for a software issue",
          '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)',
          "- Be direct and clear for developers to understand the problem",
          '- If you cannot determine a clear issue, use "Bug Report: [brief description]"',
          "- Any LLM API errors are from the Anthropic API, not from any other model provider",
          "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination",
          'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"'
        ]),
        userPrompt: d,
        signal: o,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: zl(),
          credentials: a
        }
      }),
      h = p.message.content[0]?.type === "text" ? p.message.content[0].text : "Bug Report";
    if (p.isApiErrorMessage || ine(h)) return ct(d);
    if (Bo(h)) return ct(d);
    return h;
  } catch (p) {
    if (Ke(p)) t("Feedback title generation via Haiku aborted, using fallback", { level: "debug" });
    else l(p);
    return ct(d);
  }
}
var xo =
  /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
function Bo(d) {
  let o = d.trim();
  return o === "" || xo.test(o);
}
function ct(d) {
  let o = Or(d);
  if (o.length <= 60 && o.length > 5) return o;
  let a = o.slice(0, 60);
  if (o.length > 60) {
    let p = a.lastIndexOf(" ");
    if (p > 30) a = a.slice(0, p);
    a += "...";
  }
  return a.length < 10 ? "Bug Report" : a;
}
function dt(d) {
  let h = w(8),
    { gitStatePromise: o } = d,
    a = Yr(o);
  if (!a) {
    return null;
  }
  const p = a.branchName;
  let C;
  if (h[0] !== a.commitHash)
    ((C = a.commitHash ? `, ${a.commitHash.slice(0, 7)}` : ""), (h[0] = a.commitHash), (h[1] = C));
  else C = h[1];
  const c = a.remoteUrl ? ` @ ${a.remoteUrl}` : "",
    P = !a.isHeadOnRemote && ", not synced",
    b = !a.isClean && ", has local changes";
  let _;
  if (h[2] !== a.branchName || h[3] !== C || h[4] !== c || h[5] !== P || h[6] !== b)
    ((_ = r(n, {
      children: ["- Git repo metadata:", " ", r(n, { dimColor: !0, children: [p, C, c, P, b] })]
    })),
      (h[2] = a.branchName),
      (h[3] = C),
      (h[4] = c),
      (h[5] = P),
      (h[6] = b),
      (h[7] = _));
  else _ = h[7];
  return _;
}
function egi(d, o, a, p, h = "", C = {}, c, P = "/feedback") {
  let b = awe(P);
  if (b.kind === "disabled") return (d(b.reason), null);
  let _ = yas() ?? void 0,
    W = Oe(b.kind);
  return e(xt, {
    abortController: o,
    messages: a,
    initialDescription: h,
    onDone: d,
    applyMessageOp: p,
    backgroundTasks: C,
    mode: b.kind,
    readFileState: c,
    surveyFeedbackSource: _,
    command: P,
    wholeTranscript:
      b.kind === "bundle" &&
      (b.cause === "share_switch" || (P === "/share" && i.CLAUDE_CODE_ENABLE_SHARE_BUNDLE)),
    send: W
  });
}
function pt(d, o, a, p) {
  return egi(
    d,
    ur(),
    o.messages,
    o.applyMessageOp,
    a,
    { ...o.taskRegistry.all() },
    o.readFileState,
    p
  );
}
async function fmr(d, o, a, p = "/feedback") {
  let h = a?.trim() === "public" ? "" : a || "";
  return pt(d, o, h, p);
}
function Ht(d) {
  let C = w(10),
    { onDone: o, caller: a, manualDialog: p } = d,
    h = xe(p),
    c;
  if (C[0] !== a.messages) ((c = () => [...a.messages]), (C[0] = a.messages), (C[1] = c));
  else c = C[1];
  let [P] = y(c);
  if (h !== void 0) {
    return h;
  }
  let b;
  if (C[2] !== a || C[3] !== p || C[4] !== o)
    ((b = () => {
      if (p.getState() !== void 0) {
        return;
      }
      let _ = pt(o, a, "", "/feedback");
      p.setState(() => _);
    }),
      (C[2] = a),
      (C[3] = p),
      (C[4] = o),
      (C[5] = b));
  else b = C[5];
  let W;
  if (C[6] !== P || C[7] !== o || C[8] !== b)
    ((W = e(vxt, { messages: P, onDone: o, onWriteNew: b })),
      (C[6] = P),
      (C[7] = o),
      (C[8] = b),
      (C[9] = W));
  else W = C[9];
  return W;
}
async function UEi(d, o, a) {
  if (c4() && !a?.trim() && !has())
    return e(Ht, { onDone: d, caller: o, manualDialog: Ps(void 0) });
  return fmr(d, o, a);
}
export { egi, fmr, UEi };

//# sourceMappingURL=chunk-5nwfcyzp.js.map
