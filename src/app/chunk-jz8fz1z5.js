// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, fXr, $xe, wrs } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { k, l5o } from "./chunk-ajtyjx88.js";
import { _ } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { p } from "./chunk-qmkm2x59.js";
import { so } from "./chunk-5rw2zfa0.js";
import { R0 } from "./chunk-r1dvrqha.js";
import { Zjo, _8s, tn } from "./chunk-wany0nxw.js";
import { sz, zO } from "./chunk-cn4azb2f.js";
import { ns, aYs, B1t, YFo, $8n, dYs, cYs, XFo, uYs, fYs, pYs } from "./chunk-g82naabm.js";
import { rje, H4, pxr } from "./chunk-j0tbz6ra.js";
import { fj, jwt } from "./chunk-fcym4pv0.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { o, v, M, T, u, Ue, me, B, Ia } from "./chunk-0bqrj5ah.js";
function ODt(e) {
  return e.map((t) => (t.includes(", ") || t.includes('"') ? _(t) : t)).join(", ");
}
function D(e) {
  let t = [],
    n = e;
  for (;;) {
    if (n.startsWith('"')) {
      let i = -1,
        s = !1;
      for (let r = 1; r < n.length; r++) {
        let h = n[r];
        if (s) {
          s = !1;
          continue;
        }
        if (h === "\\") {
          s = !0;
          continue;
        }
        if (h === '"') {
          i = r;
          break;
        }
      }
      if (i === -1) return null;
      try {
        let r = JSON.parse(n.slice(0, i + 1));
        if (typeof r !== "string") return null;
        t.push(r);
      } catch {
        return null;
      }
      n = n.slice(i + 1);
    } else {
      let i = n.indexOf(", "),
        s = i === -1 ? n : n.slice(0, i);
      if (s.includes('"')) return null;
      (t.push(s), (n = i === -1 ? "" : n.slice(i)));
    }
    if (n === "") break;
    if (!n.startsWith(", ")) return null;
    if (((n = n.slice(2)), n === "")) return null;
  }
  return t;
}
var C = 32768,
  te = 8192,
  ne = 32768,
  oe = 2000,
  se = R0 - oe,
  ie = 2000,
  re = new Set(["answers", "annotations", "response", "followUp"]),
  ae = "afkTimeoutMs";
function H(e, t) {
  try {
    return ue(e, t);
  } catch {
    return S("threw");
  }
}
function ue(e, t) {
  if (!U(t)) return S("not_an_object");
  for (let f of Object.keys(t)) {
    if (f === ae) return S("host_field");
    if (re.has(f)) {
      if (Object.hasOwn(e, f)) return S("changed_shown_field");
      continue;
    }
    if (!Object.hasOwn(e, f)) return S("unknown_field");
    if (!rje(t[f], e[f]) && !(f === "questions" && !Object.hasOwn(e, "title") && ce(t[f], e[f])))
      return S("changed_shown_field");
  }
  let { questions: n, extended: i } = le(I(e, "questions")),
    s = 0,
    r = 0,
    h = new Set(),
    d = { ...e },
    m = Object.create(null),
    l = I(t, "answers");
  if (l !== void 0) {
    if (!U(l)) return S("answers");
    for (let f of Object.keys(l)) {
      let E = n.get(f);
      if (E === void 0) return S("answers");
      h.add(f);
      let x = l[f];
      if (typeof x === "string") {
        if (x.length > C) return S("answers");
        ((s += x.length), (m[f] = x));
        continue;
      }
      if (!E.multiSelect || !Array.isArray(x) || x.length > E.optionCount + 1) return S("answers");
      let g = [];
      for (let O = 0; O < x.length; O++) {
        let b = x[O];
        if (typeof b !== "string" || b.length > C) return S("answers");
        g.push(b);
      }
      let y = ODt(g);
      ((s += y.length), (m[f] = y));
    }
  }
  if (!Object.hasOwn(e, "answers")) d.answers = m;
  let w = I(t, "annotations");
  if (w !== void 0) {
    if (!U(w)) return S("annotations");
    let f = Object.create(null);
    for (let E of Object.keys(w)) {
      let x = n.get(E),
        g = w[E];
      if (x === void 0 || !U(g)) return S("annotations");
      h.add(E);
      let y = {};
      for (let O of Object.keys(g)) {
        let b = g[O];
        switch (O) {
          case "preview":
            if (typeof b !== "string" || !de(x, b)) return S("annotations");
            ((r += b.length), (y.preview = b));
            break;
          case "notes":
            if (typeof b !== "string" || b.length > te) return S("annotations");
            ((s += b.length), (y.notes = b));
            break;
          default:
            return S("annotations");
        }
      }
      f[E] = y;
    }
    d.annotations = f;
  }
  let A = I(t, "response");
  if (A !== void 0) {
    if (typeof A !== "string" || A.length > C) return S("response");
    ((s += A.length), (d.response = A));
  }
  let q = I(t, "followUp");
  if (q !== void 0) {
    if (typeof q !== "boolean" || !i) return S("follow_up");
    d.followUp = q;
  }
  for (let f of h) r += f.length;
  if (s > ne || s + r > se) return S("too_large");
  return { kind: "admitted", input: d };
}
function le(e) {
  let t = new Map();
  if (!Array.isArray(e)) return { questions: t, extended: !1 };
  let n = e.length > 0;
  for (let i of e) {
    if (!U(i)) {
      n = !1;
      continue;
    }
    if (typeof I(i, "kind") !== "string") n = !1;
    let s = I(i, "question");
    if (typeof s !== "string") continue;
    let r = I(i, "options"),
      h = Array.isArray(r) ? r : [],
      d = new Set();
    for (let m of h) {
      let l = U(m) ? I(m, "preview") : void 0;
      if (typeof l === "string") d.add(l);
    }
    t.set(s, { multiSelect: I(i, "multiSelect") === !0, optionCount: h.length, previews: d });
  }
  return { questions: t, extended: n };
}
function ce(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
  let n = t.map((i, s) => {
    let r = e[s];
    if (!U(i) || I(i, "kind") !== "choice" || !U(r) || Object.hasOwn(r, "kind")) return i;
    let { kind: h, ...d } = i;
    return d;
  });
  return rje(e, n);
}
function de(e, t) {
  if (e.previews.has(t)) return !0;
  for (let n of e.previews) if (n.length <= ie && jwt(n) === t && !fj(n)) return !0;
  return !1;
}
function U(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function I(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
function S(e) {
  return { kind: "refused", rule: e };
}
var K = p(() =>
    u({
      label: o().describe(
        "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."
      ),
      description: o().describe(
        "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."
      ),
      preview: o()
        .optional()
        .describe(
          "Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format."
        )
    })
  ),
  X = p(() =>
    K().extend({
      description: o()
        .optional()
        .describe(
          "Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to."
        )
    })
  );
function Y(e) {
  return u({
    question: o().describe(
      'The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'
    ),
    header: o().describe(
      `Very short label displayed as a chip/tag (max ${aYs} chars). Examples: "Auth method", "Library", "Approach".`
    ),
    options: T(e)
      .min(2)
      .max(4)
      .describe(
        l5o()
          ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically."
          : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."
      ),
    multiSelect: M()
      .default(!1)
      .describe(
        "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive."
      )
  });
}
var Q = p(() => Y(K())),
  pe = p(() => Y(X())),
  fe = ["choice", "text", "number"],
  G = p(() =>
    u({
      question: Q().shape.question,
      header: Q().shape.header,
      kind: B(fe)
        .optional()
        .describe(
          'How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options \u2014 for open-ended input. "number": a slider/stepper between min and max \u2014 for quantities.'
        ),
      description: o().optional().describe("Optional single helper line shown under the question."),
      options: T(X())
        .max(4)
        .default(() => [])
        .describe(
          `Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`
        ),
      multiSelect: Q().shape.multiSelect,
      placeholder: o()
        .optional()
        .describe('"text" questions only: placeholder for the empty text box.'),
      min: v().optional().describe('"number" questions only (required there): lowest value.'),
      max: v().optional().describe('"number" questions only (required there): highest value.'),
      step: v()
        .positive()
        .optional()
        .describe('"number" questions only: increment between values.'),
      defaultValue: v()
        .optional()
        .describe('"number" questions only: the value the control starts at (within min..max).'),
      unit: o()
        .optional()
        .describe(
          '"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".'
        )
    })
  ),
  he = p(() =>
    G().superRefine((e, t) => {
      let n = e.kind ?? "choice";
      for (let [h, d] of [
        ["placeholder", "text"],
        ["min", "number"],
        ["max", "number"],
        ["step", "number"],
        ["defaultValue", "number"],
        ["unit", "number"]
      ])
        if (n !== d && e[h] !== void 0)
          t.addIssue({
            code: "custom",
            path: [h],
            message: `${h} applies only to "${d}" questions.`
          });
      if (n === "choice") {
        if (e.options.length < 2)
          t.addIssue({
            code: "custom",
            path: ["options"],
            message:
              'A choice question needs 2-4 options; use kind "text" for an open-ended question.'
          });
        return;
      }
      if (e.options.length > 0)
        t.addIssue({
          code: "custom",
          path: ["options"],
          message: `A "${n}" question takes no options; remove them or omit kind to ask a choice question.`
        });
      if (e.multiSelect)
        t.addIssue({
          code: "custom",
          path: ["multiSelect"],
          message: `multiSelect applies only to choice questions, not "${n}".`
        });
      if (n !== "number") return;
      let { min: i, max: s } = e;
      if (i === void 0 || s === void 0 || !(i < s)) {
        t.addIssue({
          code: "custom",
          path: ["min"],
          message: "A number question needs numeric min and max with min < max."
        });
        return;
      }
      let { defaultValue: r } = e;
      if (r !== void 0 && (r < i || r > s))
        t.addIssue({
          code: "custom",
          path: ["defaultValue"],
          message: "defaultValue must lie within min..max."
        });
    })
  ),
  J = p(() => {
    let e = u({
      preview: o()
        .optional()
        .describe("The preview content of the selected option, if the question used previews."),
      notes: o().optional().describe("Free-text notes the user added to their selection.")
    });
    return me(o(), e)
      .optional()
      .describe(
        "Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text."
      );
  }),
  j = {
    check: (e) => {
      let t = e.questions.map((n) => n.question);
      if (t.length !== new Set(t).size) return !1;
      for (let n of e.questions) {
        let i = n.options.map((s) => s.label);
        if (i.length !== new Set(i).size) return !1;
      }
      return !0;
    },
    message: "Question texts must be unique, option labels must be unique within each question"
  },
  L = 4294967295,
  P = 256,
  we = p(() =>
    Ia((e) => {
      if (!Array.isArray(e)) return e;
      let t = e.length;
      if (!Number.isInteger(t) || t < 0 || t > L) return e;
      let n = "";
      for (let i = 0; i < t; i++) {
        let s = e[i];
        if (typeof s !== "string") return e;
        n = i === 0 ? s : n + ", " + s;
      }
      return n;
    }, o())
  ),
  Z = p(() => ({
    answers: me(o(), we())
      .optional()
      .describe("User answers collected by the permission component"),
    annotations: J(),
    metadata: u({
      source: o()
        .optional()
        .describe(
          'Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.'
        )
    })
      .optional()
      .describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
  }));
function ee(e) {
  return Ue({
    questions: T(e)
      .min(1)
      .max(4)
      .describe(
        l5o()
          ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."
          : "Questions to ask the user (1-4 questions)"
      ),
    ...Z()
  }).refine(j.check, { message: j.message });
}
var ye = p(() => ee(Q())),
  ge = p(() => ee(pe())),
  be = p(() =>
    Ue({
      title: o()
        .optional()
        .describe(
          'Optional single-line heading shown above the questions, e.g. "Before I build your deck".'
        ),
      questions: T(he())
        .min(1)
        .max(4)
        .describe(
          "Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."
        ),
      ...Z()
    }).refine(j.check, { message: j.message })
  ),
  Se = p(() =>
    u({
      questions: T(Q()).describe("The questions that were asked"),
      answers: me(o(), o()).describe(
        "The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"
      ),
      response: o()
        .optional()
        .describe("Freeform text the user typed instead of selecting a structured option"),
      annotations: J(),
      afkTimeoutMs: v()
        .int()
        .positive()
        .optional()
        .describe(
          "Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path."
        )
    })
  ),
  ke = p(() =>
    Se().extend({
      questions: T(G()).describe("The questions that were asked"),
      followUp: M()
        .optional()
        .describe(
          "Set when the user asked for another round of questions instead of (or after partially) answering."
        )
    })
  );
var Nen = "(notes only)";
function W(e) {
  return `No response after ${Math.round(e / 1000)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`;
}
function V(e) {
  return {
    ...("title" in e && e.title && { title: e.title }),
    questions: $xe()
      ? e.questions.map((t) => ({ ...t, kind: "kind" in t && t.kind ? t.kind : "choice" }))
      : e.questions,
    ...(e.metadata && { metadata: e.metadata })
  };
}
var xte = tn({
  name: ns,
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return dYs;
  },
  async prompt({ model: e, leanPrompt: t, tools: n, leanRewrite: i }) {
    let s = zO({ model: e, leanPrompt: t }),
      r = pxr(n),
      h = s && sz({ model: e, leanRewrite: i }) ? (r ? Zjo : _8s) : r ? XFo : uYs,
      d = "";
    if (s) {
      let f = k("tengu_cinder_plover", "").trim();
      d = f
        ? `
${f}
`
        : pYs;
    }
    let m = k("tengu_cinder_wren", ""),
      l = typeof m === "string" ? m.trim() : "",
      w = l
        ? `
${l}
`
        : "",
      A = $xe() ? fYs : "",
      q = fXr();
    if (q === void 0) return h + d + w + A;
    return h + d + w + A + cYs[q];
  },
  get inputSchema() {
    if ($xe()) return be();
    return wrs() ? ge() : ye();
  },
  get outputSchema() {
    return ke();
  },
  userFacingName() {
    return "";
  },
  validationErrorSteer(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
    let t = e.questions;
    if (!Array.isArray(t)) return null;
    let n = !1,
      i = t.length;
    if (!Number.isInteger(i) || i < 0 || i > L) return null;
    for (let s = 0; s < i && s < P; s++) {
      let r = t[s];
      if (typeof r !== "object" || r === null || Array.isArray(r)) continue;
      if ($xe()) {
        let d = r.kind;
        if (d === "text" || d === "number") continue;
      }
      let h = r.options;
      if (Array.isArray(h) && h.length < 2) {
        n = !0;
        break;
      }
    }
    if (!n) return null;
    if ($xe())
      return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
    return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
  },
  isEnabled() {
    return H4();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let t = YFo,
      n = $xe();
    try {
      let i = typeof e === "object" && e !== null ? e.questions : void 0;
      if (!Array.isArray(i)) return "[malformed AskUserQuestion input]";
      let s = [],
        r = i.length;
      if (!Number.isInteger(r) || r < 0 || r > L) return "[malformed AskUserQuestion input]";
      for (let d = 0; d < r; d++) {
        if (s.length >= P) {
          s.push(`[\u2026 further question entries elided: reported length ${r}]`);
          break;
        }
        let m = i[d];
        if (typeof m !== "object" || m === null) {
          let g = t(m);
          s.push(g ? `[malformed question entry] ${g}` : "[malformed question entry]");
          continue;
        }
        let l = m.options,
          w = [];
        if (Array.isArray(l)) {
          let g = l.length;
          for (let y = 0; y < g; y++) {
            if (w.length >= P) {
              w.push("[\u2026 further option entries elided]");
              break;
            }
            let O = l[y];
            if (typeof O !== "object" || O === null) {
              w.push(`(${y + 1}) "${t(O)}"`);
              continue;
            }
            let b = O,
              R = [`(${y + 1}) "${t(b.label)}"`],
              N = t(b.description);
            if (N) R.push(`\u2014 ${N}`);
            let z = t(b.preview);
            if (z) R.push(`[preview: ${z}]`);
            w.push(R.join(" "));
          }
        }
        let A = w.join(" "),
          q = m.multiSelect === !0 ? " [multiSelect]" : "",
          f = t(m.header),
          E = f ? ` [header: ${f}]` : "",
          x = "";
        if (n) {
          let g = m;
          for (let [y, O] of [
            ["kind", t(g.kind)],
            ["description", t(g.description)],
            ["placeholder", t(g.placeholder)],
            ["min", $8n(g.min)],
            ["max", $8n(g.max)],
            ["step", $8n(g.step)],
            ["default", $8n(g.defaultValue)],
            ["unit", t(g.unit)]
          ])
            if (O) x += ` [${y}: ${O}]`;
        }
        s.push(`"${t(m.question)}"${E}${x}${q} options: ${A}`);
      }
      if (s.length === 0) return "[malformed AskUserQuestion input]";
      let h = n ? t(e.title) : "";
      return (h ? `[title: ${h}] ` : "") + s.join(" | ");
    } catch {
      return "[malformed AskUserQuestion input]";
    }
  },
  admitCardAnswer: H,
  shownCardInput: V,
  requiresUserInteraction() {
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create() {
    return {
      async validateInput({ questions: e }) {
        if (fXr() !== "html") return { result: !0 };
        for (let t of e)
          for (let n of t.options) {
            let i = Ae(n.preview);
            if (i)
              return {
                result: !1,
                message: `Option "${n.label}" in question "${t.question}": ${i}`,
                errorCode: 1
              };
          }
        return { result: !0 };
      },
      async checkPermissions(e) {
        return { behavior: "ask", message: "Answer questions?", updatedInput: V(e) };
      },
      async call(e) {
        let { answers: t = {}, annotations: n } = e,
          s = e.questions.map((l) => (Array.isArray(l.options) ? l : { ...l, options: [] })),
          { response: r, afkTimeoutMs: h, followUp: d } = e,
          m = F(s, ({ question: l }) => {
            let w = t[l];
            return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== Nen;
          });
        return (
          a("tengu_ask_user_question_completed", {
            extended: $xe(),
            questionCount: s.length,
            choiceCount: F(s, (l) => (l.kind ?? "choice") === "choice" && !l.multiSelect),
            multiSelectCount: F(s, (l) => (l.kind ?? "choice") === "choice" && l.multiSelect),
            textCount: F(s, (l) => l.kind === "text"),
            numberCount: F(s, (l) => l.kind === "number"),
            answerCount: m,
            followUp: d === !0,
            outcome: c(
              h
                ? "afk_timeout"
                : d
                  ? "follow_up"
                  : r?.trim()
                    ? "responded"
                    : m > 0
                      ? "answered"
                      : "unanswered"
            ),
            ...(e.metadata?.source && { source_hash: cn(e.metadata.source) })
          }),
          {
            data: {
              questions: s,
              answers: t,
              ...(r?.trim() && { response: r }),
              ...(n && { annotations: n }),
              ...(h && { afkTimeoutMs: h }),
              ...(d === !0 && { followUp: !0 })
            }
          }
        );
      }
    };
  },
  mapToolResultToToolResultBlockParam(
    { questions: e, answers: t, response: n, annotations: i, afkTimeoutMs: s, followUp: r },
    h
  ) {
    let d = e
        .map(({ question: l }) => {
          let w = so(t, l),
            A = i && so(i, l),
            q = w && w !== Nen;
          if (!q && !A?.notes) return null;
          let f = [q ? `"${l}"="${w}"` : `"${l}"=(no option selected)`];
          if (A?.preview)
            f.push(`selected preview:
${A.preview}`);
          if (A?.notes) f.push(`notes: ${A.notes}`);
          return f.join(" ");
        })
        .filter((l) => l !== null)
        .join(", "),
      m;
    if (s)
      m = d
        ? `${W(s)}

Before going idle the user had selected: ${d}.`
        : W(s);
    else if (r) {
      let l = n?.trim() ? ` They also wrote: "${n}".` : "";
      m = d
        ? `${B1t} before you proceed. So far they answered: ${d}.${l} Call ${ns} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.`
        : `${B1t} before answering.${l} Call ${ns} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
    } else if (n?.trim()) m = `The user responded: ${n}`;
    else if (d)
      m = e.every(({ question: w, options: A, multiSelect: q, kind: f, min: E, max: x }) => {
        if ((i && so(i, w))?.notes) return !1;
        if (f === "text" || f === "number") {
          let R = so(t, w);
          if (R === void 0 || R === "") return !0;
          if (f === "text" || typeof R !== "string") return !1;
          let N = R.trim(),
            z = Number(N);
          return (
            /^-?\d+(\.\d+)?$/.test(N) &&
            Number.isFinite(z) &&
            (E === void 0 || z >= E) &&
            (x === void 0 || z <= x)
          );
        }
        let y = so(t, w),
          O = new Set(A.map((R) => R.label));
        if (Array.isArray(y)) return q && y.length > 0 && y.every((R) => O.has(R));
        if (!y || y === Nen) return !0;
        if (O.has(y)) return !0;
        if (!q) return !1;
        let b = D(y);
        return b !== null && b.length >= 1 && ODt(b) === y && b.every((R) => O.has(R));
      })
        ? `Your questions have been answered: ${d}. You can now continue with these answers in mind.`
        : `The user answered: ${d}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
    else m = "The user did not answer the questions.";
    return { type: "tool_result", content: m, tool_use_id: h };
  }
});
function Ae(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e))
    return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e))
    return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e))
    return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null;
}
export { ODt, Nen, xte };

//# sourceMappingURL=chunk-jz8fz1z5.js.map
