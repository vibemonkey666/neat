// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { Re, ue } from "./chunk-ajtyjx88.js";
import { Me } from "./chunk-rf7g1m78.js";
import { w } from "./chunk-7m7t89vx.js";
import { a } from "./chunk-4cgvah10.js";
import { ko, Qwn, XRe, yTt, Fw, vR } from "./chunk-5rw2zfa0.js";
import { le } from "./chunk-vw9e882a.js";
import { s, n, ja, Kr } from "./chunk-h56pfqh7.js";
import { qs } from "./chunk-y43e6aw3.js";
import { ne } from "./chunk-39xmt821.js";
import { Ee } from "./chunk-xzcese97.js";
import { V } from "./chunk-j32s98r9.js";
import { an } from "./chunk-kk8f9f8q.js";
import { Je } from "./chunk-fgf47p3n.js";
import { mt } from "./chunk-18g32wet.js";
import { pP } from "./chunk-f7bt4w3j.js";
import { Wd } from "./chunk-358y3whe.js";
import { Hs } from "./chunk-j7vwsewt.js";
import { IW } from "./chunk-5pstyp48.js";
import { Vh } from "./chunk-df5gvbw5.js";
import { e, r } from "./chunk-f790ajz4.js";
import { _Pt } from "./chunk-gbrwsgcg.js";
import { ee, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function Jo(R) {
  return R.split(
    `
`
  ).map(Ve);
}
function Go(C, A) {
  return e(n, { color: C.color, children: C.text }, A);
}
function Xo(k, U) {
  return e(n, { dimColor: k.dim, children: k.segments.map(Go) }, U);
}
function Qo() {
  return [];
}
function Wo(Be, ce) {
  return Be.x - ce.x;
}
function Zo(N, He) {
  let M = 0;
  return e(
    s,
    {
      height: 1,
      children: N.map((_, Y) => {
        let Ae = Math.max(0, _.x - M);
        return (
          (M = Math.max(M, _.x) + 1),
          r(n, { children: [" ".repeat(Ae), e(n, { color: _.color, children: _.char })] }, Y)
        );
      })
    },
    He
  );
}
function Oo(d) {
  return (d + 1) % X.length;
}
var F = 3000,
  E = 48,
  J = 3;
function z(p) {
  let u = w(10),
    { live: t, boxRef: l, children: o } = p,
    i;
  if (u[0] !== o)
    ((i = e(s, { flexDirection: "column", width: E - 4, height: J, children: o })),
      (u[0] = o),
      (u[1] = i));
  else i = u[1];
  const x = !t,
    g = t ? "claude" : void 0,
    h = t ? `${vR} try it` : `  ${Qwn} demo`;
  let f;
  if (u[2] !== x || u[3] !== g || u[4] !== h)
    ((f = e(s, {
      position: "absolute",
      marginLeft: E - 12,
      children: e(n, { dimColor: x, color: g, children: h })
    })),
      (u[2] = x),
      (u[3] = g),
      (u[4] = h),
      (u[5] = f));
  else f = u[5];
  let b;
  if (u[6] !== l || u[7] !== i || u[8] !== f)
    ((b = r(s, {
      ref: l,
      borderStyle: "round",
      borderColor: "inactive",
      paddingX: 1,
      width: E,
      height: J + 2,
      children: [i, f]
    })),
      (u[6] = l),
      (u[7] = i),
      (u[8] = f),
      (u[9] = b));
  else b = u[9];
  return b;
}
var io = /\[(\w+):([^\]]*)\]/g;
function Ve(p) {
  let t = p.startsWith("#"),
    l = t ? p.slice(1) : p,
    o = [],
    u = 0;
  for (let i of l.matchAll(io)) {
    if (i.index > u) o.push({ text: l.slice(u, i.index) });
    (o.push({ text: i[2], color: i[1] }), (u = i.index + i[0].length));
  }
  if (u < l.length) o.push({ text: l.slice(u) });
  if (o.length === 0) o.push({ text: "" });
  return { dim: t, segments: o };
}
function v(p) {
  let b = w(4),
    { frames: t } = p,
    l = t.map(Jo),
    o = Vh(Wd().prefersReducedMotion),
    [u, i] = ja(o ? null : F),
    x = Math.floor(i / F) % l.length,
    g = l[x];
  const h = z,
    f = g.map(Xo);
  let d;
  if (b[0] !== h || b[1] !== u || b[2] !== f)
    ((d = e(h, { boxRef: u, children: f })), (b[0] = h), (b[1] = u), (b[2] = f), (b[3] = d));
  else d = b[3];
  return d;
}
var X = [
    { label: "default", symbol: "", color: "text" },
    { label: "accept edits on", symbol: yTt, color: "autoAccept" },
    { label: "plan mode on", symbol: XRe, color: "planMode" },
    { label: "auto mode on", symbol: yTt, color: "warning" }
  ],
  G = 80,
  ze = 60,
  Q = 1400,
  L = 16,
  Ke = 60,
  Te = 100,
  go = [vR, Fw, ko, "\xB7"],
  yo = ["claude", "success", "warning", "suggestion", "autoAccept"];
function je(p) {
  let t = [];
  for (let l = 0; l < p; l++)
    t.push({
      x: Math.floor(Math.random() * Te),
      delay: Math.random() * 400,
      speed: 0.7 + Math.random() * 0.6,
      char: IW(go),
      color: IW(yo)
    });
  return t;
}
function O(p) {
  let l = w(6),
    { onDone: t } = p,
    o;
  if (l[0] === S) ((o = je(40)), (l[0] = o));
  else o = l[0];
  let u = o,
    i = Vh(Wd().prefersReducedMotion),
    [x, g] = ja(i ? null : ze),
    [h] = y(g),
    f = g - h,
    b;
  if (l[1] !== t) ((b = [t]), (l[1] = t), (l[2] = b));
  else b = l[2];
  Kr(t, Q + 600, b);
  let d;
  if (l[3] !== f || l[4] !== x) {
    let R = Array.from({ length: L }, Qo);
    for (const C of u) {
      let A = Math.max(0, f - C.delay);
      let k = Math.floor((A / Q) * L * C.speed);
      if (k >= 0 && k < L) R[k].push(C);
    }
    for (const U of R) U.sort(Wo);
    d = e(s, {
      ref: x,
      position: "absolute",
      marginLeft: Ke,
      flexDirection: "column",
      width: Te,
      height: L,
      children: R.map(Zo)
    });
    ((l[3] = f), (l[4] = x), (l[5] = d));
  } else d = l[5];
  return d;
}
function H(p) {
  let h = w(14),
    { text: t } = p,
    l = le(t),
    o = Vh(Wd().prefersReducedMotion),
    [u, i] = ja(o ? null : G),
    x = l + 20,
    g = (Math.floor(i / G) % x) - 10,
    f;
  if (h[0] !== g || h[1] !== t) ((f = _Pt(t, g)), (h[0] = g), (h[1] = t), (h[2] = f));
  else f = h[2];
  let { before: b, shimmer: d, after: R } = f,
    C;
  if (h[3] !== b) ((C = e(n, { bold: !0, color: "claude", children: b })), (h[3] = b), (h[4] = C));
  else C = h[4];
  let A;
  if (h[5] !== d)
    ((A = e(n, { bold: !0, color: "claudeShimmer", children: d })), (h[5] = d), (h[6] = A));
  else A = h[6];
  let k;
  if (h[7] !== R) ((k = e(n, { bold: !0, color: "claude", children: R })), (h[7] = R), (h[8] = k));
  else k = h[8];
  let U;
  if (h[9] !== u || h[10] !== C || h[11] !== A || h[12] !== k)
    ((U = r(s, { ref: u, children: [C, A, k] })),
      (h[9] = u),
      (h[10] = C),
      (h[11] = A),
      (h[12] = k),
      (h[13] = U));
  else U = h[13];
  return U;
}
function oe() {
  let u = w(11),
    [p, t] = y(0),
    l = X[p],
    o = qs("confirm:cycleMode", "Confirmation", "shift+tab"),
    i,
    x;
  if (u[0] === S)
    ((i = { "confirm:cycleMode": () => t(Oo) }),
      (x = { context: "Confirmation" }),
      (u[0] = i),
      (u[1] = x));
  else ((i = u[0]), (x = u[1]));
  an(i, x);
  let g;
  if (u[2] !== o)
    ((g = r(n, {
      dimColor: !0,
      children: [
        "Press ",
        o,
        " now",
        `

`
      ]
    })),
      (u[2] = o),
      (u[3] = g));
  else g = u[3];
  const h = l.symbol ? `${l.symbol} ` : "  ";
  let f;
  if (u[4] !== l.color || u[5] !== l.label || u[6] !== h)
    ((f = r(n, { color: l.color, children: [h, l.label] })),
      (u[4] = l.color),
      (u[5] = l.label),
      (u[6] = h),
      (u[7] = f));
  else f = u[7];
  let b;
  if (u[8] !== g || u[9] !== f)
    ((b = e(z, { live: !0, children: r(n, { children: [g, f] }) })),
      (u[8] = g),
      (u[9] = f),
      (u[10] = b));
  else b = u[10];
  return b;
}
function B(p) {
  let l = w(2),
    { children: t } = p,
    o;
  if (l[0] !== t) ((o = e(n, { bold: !0, color: "claude", children: t })), (l[0] = t), (l[1] = o));
  else o = l[1];
  return o;
}
function m(p) {
  let l = w(2),
    { children: t } = p,
    o;
  if (l[0] !== t) ((o = e(n, { color: "suggestion", children: t })), (l[0] = t), (l[1] = o));
  else o = l[1];
  return o;
}
var nL = [
  {
    id: "at-mentions",
    title: "Talk to your codebase",
    tagline: "@ files, line refs",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Type ",
            e(B, { children: "@" }),
            " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering \u2014 no more pasting code."
          ]
        }),
        e(v, {
          frames: [
            `> what does [suggestion:@]
#type a file name\u2026`,
            `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`,
            `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`,
            `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`
          ]
        }),
        r(n, {
          children: [
            "Reference specific lines with ",
            e(m, { children: "src/app.ts:42" }),
            " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor."
          ]
        }),
        r(n, {
          dimColor: !0,
          children: [
            "Also try: ",
            e(m, { children: "@folder/" }),
            " to attach a whole directory tree."
          ]
        })
      ]
    })
  },
  { id: "modes", title: "Steer with modes", tagline: "shift+tab, plan, auto", body: e(Fe, {}) },
  {
    id: "undo",
    title: "Undo anything",
    tagline: "/rewind, Esc-Esc",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Claude checkpoints your files before every edit. Press",
            " ",
            e(B, { children: "Esc Esc" }),
            " (double-tap) to open ",
            e(m, { children: "/rewind" }),
            " and roll back to any prior state \u2014 code, conversation, or both."
          ]
        }),
        e(v, {
          frames: [
            `[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`,
            `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`,
            `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`
          ]
        }),
        e(n, {
          children:
            "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean."
        }),
        r(n, {
          dimColor: !0,
          children: [
            "Also: ",
            e(m, { children: "/clear" }),
            " wipes conversation but keeps files.",
            " ",
            e(m, { children: "/branch" }),
            " forks the conversation to try two approaches."
          ]
        })
      ]
    })
  },
  {
    id: "background",
    title: "Run in the background",
    tagline: "tasks, /tasks",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Long builds and test suites do not have to block you. Add",
            " ",
            e(B, { children: "&" }),
            " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes."
          ]
        }),
        e(v, {
          frames: [
            `> run the test suite [claude:&]
#task started in background`,
            `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`,
            `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`,
            `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`
          ]
        }),
        r(n, {
          children: [
            "Run ",
            e(m, { children: "/tasks" }),
            " to see everything in flight. Claude can read task output mid-run and react to failures automatically."
          ]
        }),
        e(n, { dimColor: !0, children: "Subagents also run as tasks \u2014 it is all one queue." })
      ]
    })
  },
  {
    id: "memory",
    title: "Teach Claude your rules",
    tagline: "CLAUDE.md, /memory",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Drop a ",
            e(m, { children: "CLAUDE.md" }),
            " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories."
          ]
        }),
        e(v, {
          frames: [
            `#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`,
            `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`,
            `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`
          ]
        }),
        r(n, {
          children: [
            "Run ",
            e(m, { children: "/init" }),
            " to generate a starter CLAUDE.md from your codebase. Run ",
            e(m, { children: "/memory" }),
            " to edit it inline."
          ]
        }),
        e(n, {
          dimColor: !0,
          children:
            "Works at three levels: repo, your home directory (all projects), and per-directory overrides."
        })
      ]
    })
  },
  {
    id: "mcp",
    title: "Extend with tools",
    tagline: "MCP, /mcp",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ",
            e(m, { children: "/mcp" }),
            " to browse and connect servers."
          ]
        }),
        e(v, {
          frames: [
            `> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`,
            `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`,
            `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`
          ]
        }),
        e(n, {
          children:
            'Once connected, tools appear automatically \u2014 ask Claude to "check my calendar" or "search our Notion" and it just works.'
        }),
        r(n, {
          dimColor: !0,
          children: [
            "From your shell:",
            " ",
            e(m, { children: "claude mcp add my-server -- npx some-mcp-pkg" }),
            " to wire one up without leaving the terminal."
          ]
        })
      ]
    })
  },
  {
    id: "automate",
    title: "Automate your workflow",
    tagline: "skills, hooks",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Save a prompt to ",
            e(m, { children: ".claude/skills/deploy/SKILL.md" }),
            " and it becomes ",
            e(m, { children: "/deploy" }),
            " \u2014 type it, Claude runs it. Run",
            " ",
            e(m, { children: "/skills" }),
            " to see what you have."
          ]
        }),
        e(v, {
          frames: [
            `> [suggestion:/deploy] staging
#\u25D0 skill: deploy`,
            `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`,
            `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`
          ]
        }),
        r(n, {
          children: [
            "Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ",
            e(m, { children: "/hooks" }),
            " to see what fires when."
          ]
        }),
        r(n, {
          dimColor: !0,
          children: [
            "Run ",
            e(m, { children: "/install-github-app" }),
            " to let Claude review PRs when tagged."
          ]
        })
      ]
    })
  },
  {
    id: "subagents",
    title: "Multiply yourself",
    tagline: "subagents",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        e(n, {
          children:
            'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.'
        }),
        e(v, {
          frames: [
            `> find any error handling bugs
#\u25D0 Spawning 3 agents\u2026`,
            `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`,
            `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`,
            `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`
          ]
        }),
        r(n, {
          dimColor: !0,
          children: [
            "Subagents run in isolated context. For true parallel sessions on separate branches, launch with ",
            e(m, { children: "claude --worktree" }),
            "."
          ]
        })
      ]
    })
  },
  {
    id: "cross-device",
    title: "Code from anywhere",
    tagline: "/remote-control, /teleport",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Run ",
            e(m, { children: "/remote-control" }),
            " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control."
          ]
        }),
        e(v, {
          frames: [
            `> [suggestion:/remote-control]
#\u25D0 connecting\u2026`,
            `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`,
            `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`,
            `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`
          ]
        }),
        r(n, {
          children: [
            "Run ",
            e(m, { children: "/teleport" }),
            " to move a session between here and the cloud \u2014 send this one up to keep it going after you close the lid, or pull a cloud session into this terminal with full history."
          ]
        }),
        e(n, {
          dimColor: !0,
          children: "Kick off a long task, close your laptop, check progress from your phone."
        })
      ]
    })
  },
  {
    id: "model-dial",
    title: "Dial the model",
    tagline: "/model, /effort",
    body: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(n, {
          children: [
            "Run ",
            e(m, { children: "/model" }),
            " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth."
          ]
        }),
        e(v, {
          frames: [
            `> [suggestion:/effort] high
#effort set to [claude:high]`,
            `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`,
            `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`
          ]
        }),
        r(n, {
          children: [
            e(m, { children: "/effort" }),
            " controls how long Claude thinks before answering.",
            " ",
            e(B, { children: "high" }),
            " for tricky bugs, ",
            e(B, { children: "low" }),
            " when you just need a quick edit."
          ]
        }),
        r(n, {
          dimColor: !0,
          children: [
            "Also: ",
            e(m, { children: "/fast" }),
            " toggles fast mode \u2014 same model, faster output."
          ]
        })
      ]
    })
  }
];
function te() {
  let p = w(1),
    t;
  if (p[0] === S)
    ((t = e(n, {
      dimColor: !0,
      italic: !0,
      children: r(Ee, {
        children: [
          e(V, { chord: ["up", "down"], action: "select" }),
          e(V, { chord: "enter", action: "open" }),
          e(V, { chord: "escape", action: "close" })
        ]
      })
    })),
      (p[0] = t));
  else t = p[0];
  return t;
}
function se() {
  let p = w(1),
    t;
  if (p[0] === S)
    ((t = e(n, {
      dimColor: !0,
      italic: !0,
      children: r(Ee, {
        children: [
          e(V, { chord: "enter", action: "mark done" }),
          e(V, { chord: "escape", action: "back" })
        ]
      })
    })),
      (p[0] = t));
  else t = p[0];
  return t;
}
function Fe() {
  let p = w(9),
    t,
    l;
  if (p[0] === S)
    ((t = r(n, {
      children: [
        "Press ",
        e(B, { children: "shift+tab" }),
        " to cycle permission modes. Each mode changes how much Claude asks before acting:"
      ]
    })),
      (l = e(oe, {})),
      (p[0] = t),
      (p[1] = l));
  else ((t = p[0]), (l = p[1]));
  let o;
  if (p[2] === S)
    ((o = r(n, {
      children: [e(n, { color: "success", children: "default" }), " \u2014 ask before every edit"]
    })),
      (p[2] = o));
  else o = p[2];
  let u;
  if (p[3] === S)
    ((u = r(n, {
      children: [
        e(n, { color: "autoAccept", children: "accept edits" }),
        " \u2014 edit freely, ask for commands"
      ]
    })),
      (p[3] = u));
  else u = p[3];
  let i;
  if (p[4] === S)
    ((i = r(n, {
      children: [
        e(n, { color: "planMode", children: "plan" }),
        " \u2014 research and propose, never touch files"
      ]
    })),
      (p[4] = i));
  else i = p[4];
  let x;
  if (p[5] === S)
    ((x = r(s, {
      flexDirection: "column",
      paddingLeft: 2,
      children: [
        o,
        u,
        i,
        r(n, {
          children: [
            e(n, { color: "warning", children: "auto" }),
            " \u2014 Claude decides what is safe"
          ]
        })
      ]
    })),
      (p[5] = x));
  else x = p[5];
  let g;
  if (p[6] === S) ((g = e(n, { color: "planMode", children: "plan" })), (p[6] = g));
  else g = p[6];
  let h;
  if (p[7] === S) ((h = e(n, { color: "warning", children: "auto" })), (p[7] = h));
  else h = p[7];
  let f;
  if (p[8] === S)
    ((f = r(s, {
      flexDirection: "column",
      gap: 1,
      children: [
        t,
        l,
        x,
        r(n, {
          dimColor: !0,
          children: [
            "Use ",
            g,
            " for big refactors you want to review first. Use ",
            h,
            " for long unattended tasks. Run ",
            e(m, { children: "/permissions" }),
            " to pre-allow specific commands so Claude stops asking about them."
          ]
        })
      ]
    })),
      (p[8] = f));
  else f = p[8];
  return f;
}
j();
function kt(Rt) {
  return nL.some((Tt) => Tt.id === Rt);
}
function wt() {
  let Pt = ue().powerupsUnlocked ?? [];
  return new Set(Pt.filter(kt));
}
function BRt(p) {
  let d = w(48),
    { onExit: t } = p,
    { storageV5: l } = Me(),
    [o, u] = y(wt),
    [i, x] = y(null),
    [g, h] = y(nL[0].id),
    [f, b] = y(!1),
    R;
  if (d[0] === S) ((R = () => b(!1)), (d[0] = R));
  else R = d[0];
  let C = R,
    A;
  if (d[1] !== o)
    ((A = function U(k) {
      (h(k.id),
        x(k),
        a("tengu_powerup_lesson_opened", {
          lesson_id: c(k.id),
          was_already_unlocked: o.has(k.id),
          unlocked_count: o.size
        }));
    }),
      (d[1] = o),
      (d[2] = A));
  else A = d[2];
  let U = A,
    Be;
  if (d[3] !== l || d[4] !== o)
    ((Be = function M(ce) {
      if (o.has(ce)) {
        return;
      }
      let N = new Set(o).add(ce);
      if (
        (u(N),
        Re((He) => ({ ...He, powerupsUnlocked: [...N] }), l),
        a("tengu_powerup_lesson_completed", {
          lesson_id: c(ce),
          unlocked_count: N.size,
          all_unlocked: N.size === nL.length
        }),
        N.size === nL.length)
      )
        b(!0);
    }),
      (d[3] = l),
      (d[4] = o),
      (d[5] = Be));
  else Be = d[5];
  let M = Be,
    _;
  if (d[6] !== o)
    ((_ = nL.map((Y) => {
      let Ae = o.has(Y.id);
      let Se = `${Ae ? ne.tick : ne.circle} ${Y.title}`;
      return {
        label: Ae ? e(n, { color: "success", children: Se }) : Se,
        value: Y.id,
        description: Y.tagline
      };
    })),
      (d[6] = o),
      (d[7] = _));
  else _ = d[7];
  let Ue = _;
  if (i) {
    let P;
    if (d[8] !== o || d[9] !== i.id) ((P = o.has(i.id)), (d[8] = o), (d[9] = i.id), (d[10] = P));
    else P = d[10];
    let D;
    if (d[11] !== M || d[12] !== i.id)
      ((D = () => {
        (M(i.id), x(null));
      }),
        (d[11] = M),
        (d[12] = i.id),
        (d[13] = D));
    else D = d[13];
    let q;
    if (d[14] === S) ((q = () => x(null)), (d[14] = q));
    else q = d[14];
    let I;
    if (d[15] !== P || d[16] !== D || d[17] !== i)
      ((I = e(Le, { lesson: i, isUnlocked: P, onDone: D, onBack: q })),
        (d[15] = P),
        (d[16] = D),
        (d[17] = i),
        (d[18] = I));
    else I = d[18];
    return I;
  }
  let de = o.size === nL.length,
    P;
  if (d[19] !== de)
    ((P = de
      ? e(H, { text: "All powered up" })
      : e(n, { bold: !0, color: "claude", children: "Power-ups" })),
      (d[19] = de),
      (d[20] = P));
  else P = d[20];
  let D;
  if (d[21] !== o.size)
    ((D = r(n, { dimColor: !0, children: [" ", o.size, "/", nL.length, " unlocked", " "] })),
      (d[21] = o.size),
      (d[22] = D));
  else D = d[22];
  const q = o.size / nL.length;
  let I;
  if (d[23] !== q)
    ((I = e(pP, { ratio: q, width: 16, fillColor: "claude", emptyColor: "inactive" })),
      (d[23] = q),
      (d[24] = I));
  else I = d[24];
  let me;
  if (d[25] !== P || d[26] !== D || d[27] !== I)
    ((me = r(s, { marginBottom: 1, children: [P, D, I] })),
      (d[25] = P),
      (d[26] = D),
      (d[27] = I),
      (d[28] = me));
  else me = d[28];
  const Ie = de
    ? "Now go build something."
    : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.";
  let pe;
  if (d[29] !== Ie)
    ((pe = e(s, { marginBottom: 1, children: e(n, { dimColor: !0, wrap: "wrap", children: Ie }) })),
      (d[29] = Ie),
      (d[30] = pe));
  else pe = d[30];
  let fe;
  if (d[31] !== U)
    ((fe = (Ct) => {
      let eo = nL.find((vt) => vt.id === Ct);
      if (eo) U(eo);
    }),
      (d[31] = U),
      (d[32] = fe));
  else fe = d[32];
  let he;
  if (d[33] !== t) ((he = () => t("Power-ups closed")), (d[33] = t), (d[34] = he));
  else he = d[34];
  let ge;
  if (d[35] !== Ue || d[36] !== g || d[37] !== fe || d[38] !== he)
    ((ge = e(Je, {
      options: Ue,
      hideIndexes: !0,
      visibleOptionCount: nL.length,
      defaultFocusValue: g,
      onChange: fe,
      onCancel: he
    })),
      (d[35] = Ue),
      (d[36] = g),
      (d[37] = fe),
      (d[38] = he),
      (d[39] = ge));
  else ge = d[39];
  let oo;
  if (d[40] === S) ((oo = e(s, { marginTop: 1, children: e(te, {}) })), (d[40] = oo));
  else oo = d[40];
  let ye;
  if (d[41] !== f) ((ye = f && e(O, { onDone: C })), (d[41] = f), (d[42] = ye));
  else ye = d[42];
  let to;
  if (d[43] !== pe || d[44] !== ge || d[45] !== ye || d[46] !== me)
    ((to = e(Hs, {
      color: "claude",
      children: r(s, { flexDirection: "column", children: [me, pe, ge, oo, ye] })
    })),
      (d[43] = pe),
      (d[44] = ge),
      (d[45] = ye),
      (d[46] = me),
      (d[47] = to));
  else to = d[47];
  return to;
}
function Le(p) {
  let i = w(15),
    { lesson: t, isUnlocked: l, onDone: o, onBack: u } = p,
    x;
  if (i[0] !== u || i[1] !== o)
    ((x = { "confirm:yes": o, "confirm:no": u }), (i[0] = u), (i[1] = o), (i[2] = x));
  else x = i[2];
  let g;
  if (i[3] === S) ((g = { context: "Confirmation" }), (i[3] = g));
  else g = i[3];
  an(x, g);
  const h = l ? "success" : "pending";
  let f;
  if (i[4] !== h) ((f = e(mt, { status: h, withSpace: !0 })), (i[4] = h), (i[5] = f));
  else f = i[5];
  let b;
  if (i[6] !== t.title)
    ((b = e(n, { bold: !0, color: "claude", children: t.title })), (i[6] = t.title), (i[7] = b));
  else b = i[7];
  let d;
  if (i[8] !== f || i[9] !== b)
    ((d = r(s, { children: [f, b] })), (i[8] = f), (i[9] = b), (i[10] = d));
  else d = i[10];
  let R;
  if (i[11] === S) ((R = e(se, {})), (i[11] = R));
  else R = i[11];
  let C;
  if (i[12] !== t.body || i[13] !== d)
    ((C = e(Hs, {
      color: "claude",
      children: r(s, { flexDirection: "column", gap: 1, children: [d, t.body, R] })
    })),
      (i[12] = t.body),
      (i[13] = d),
      (i[14] = C));
  else C = i[14];
  return C;
}
export { nL, BRt };

//# sourceMappingURL=chunk-97tjfa6n.js.map
