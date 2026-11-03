// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { V } from "./chunk-j32s98r9.js";
import { Je } from "./chunk-fgf47p3n.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { Ee } from "./chunk-xzcese97.js";
import { Szn } from "./chunk-j0tbz6ra.js";
import { Jn } from "./chunk-d5zj5299.js";
import { we } from "./chunk-bf8qkzmg.js";
import { bPe } from "./chunk-dy8fy0z7.js";
import { ft } from "./chunk-g2kc6h82.js";
import { e, r } from "./chunk-f790ajz4.js";
import { P, j } from "./chunk-bq35vvkw.js";
j();
function Oto({ configHome: _, storageV5: h, origin: d, onDone: w }) {
  let i = d === "first_run",
    o = bPe(w, {
      selfOpened: i,
      onCancelled: (t) => f("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled")
    });
  (lt("confirm:no", () => p("not_now"), { context: "Confirmation", isActive: i && !o.decided }),
    P(() => {
      a("tengu_home_settings_mode_prompt_shown", { origin: c(d) });
    }, [d]));
  function p(t) {
    if (!o.take()) return;
    if ((a("tengu_home_settings_mode_prompt", { choice: c(t), origin: c(d) }), t === "not_now")) {
      (f("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t));
      return;
    }
    Szn(t, h).then(
      (u) => {
        if (o.settled()) return;
        switch (u) {
          case "refused":
            (m("ccr_home_seed_mode_prompt", "not_written"), o.handBack("not_saved"));
            return;
          case "not_stored":
            (m("ccr_home_seed_mode_prompt", "not_stored"), o.handBack("not_stored"));
            return;
          case "unconfirmed":
            f("ccr_home_seed_mode_prompt", "unconfirmed");
            break;
          case "written":
            if (t === "forward") g("ccr_home_seed_mode_prompt");
            else f("ccr_home_seed_mode_prompt", "declined");
            break;
        }
        o.handBack(t);
      },
      (u) => {
        if ((l(u), o.settled())) return;
        (m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved"));
      }
    );
  }
  if (o.decided)
    return o.exitHintShowing
      ? r(n, { dimColor: !0, italic: !0, children: ["Press ", o.exit.keyName, " again to exit"] })
      : null;
  return r(we, {
    title: "Use this machine's settings in cloud sessions?",
    onCancel: () => p("not_now"),
    isCancelActive: !i,
    inputGuide: o.exit.pending
      ? r(n, { children: ["Press ", o.exit.keyName, " again to exit"] })
      : r(Ee, {
          children: [
            e(V, { chord: "enter", action: "confirm" }),
            e(ft, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "skip for now"
            })
          ]
        }),
    children: [
      r(s, {
        flexDirection: "column",
        gap: 1,
        children: [
          e(n, { bold: !0, children: Jn(_) }),
          e(n, {
            children:
              "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent."
          }),
          e(n, {
            dimColor: !0,
            children:
              "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud."
          })
        ]
      }),
      e(Je, {
        options: [
          { label: "Yes, send my settings", value: "forward" },
          { label: "No, keep them on this machine", value: "keep_local" },
          { label: "Not now", value: "not_now" }
        ],
        defaultFocusValue: "not_now",
        hideIndexes: i,
        disablePrintableKeybindings: i,
        isDisabled: o.choicesDisabled,
        refuseInput: o.refuseInput,
        onChange: p,
        onCancel: () => p("not_now")
      })
    ]
  });
}
export { Oto };

//# sourceMappingURL=chunk-d7jcy8cm.js.map
