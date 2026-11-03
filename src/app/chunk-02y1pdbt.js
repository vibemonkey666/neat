// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Wr } from "./chunk-wrtp8qz8.js";
import { p } from "./chunk-qmkm2x59.js";
import { gn, cr, Ut, k } from "./chunk-ajtyjx88.js";
import { xae } from "./chunk-dx5awfq0.js";
import { hPe, txt, mwe } from "./chunk-7m50s6j1.js";
import { xCn, PCn } from "./chunk-mdxeekqd.js";
import { e } from "./chunk-f790ajz4.js";
import { Tct, WJt, tte } from "./chunk-44dr868s.js";
import { o, u, Gr, A } from "./chunk-0bqrj5ah.js";
function a() {
  return o().regex(/^\P{Cc}*$/u);
}
var h = p(() =>
  Gr("mode", [
    u({ mode: A("one_step") }),
    u({
      mode: A("confirm"),
      title: a().optional(),
      body: a().optional(),
      note: a().optional(),
      send: a().optional(),
      cancel: a().optional()
    })
  ])
);
function jxn() {
  let i = k("tengu_tidy_lemon", null);
  if (i === null || i === void 0) return null;
  let r = h().safeParse(i);
  return r.success ? r.data : null;
}
async function $at(i, r) {
  let n = xae(i);
  if (WJt()) return e(PCn, { onDone: n });
  let t = await tte({ openInBrowser: !0 }, r.credentials);
  if (t.type === "message") return (n(t.value), null);
  if (t.type === "confirm-admin-request") {
    if (Ut()) return (n(Tct), null);
    return e(xCn, { extraUsage: t.extraUsage, flag: jxn(), wouldTakeAnswer: () => !0, onDone: n });
  }
  let l = cr();
  if (l === "team" || l === "enterprise")
    return (
      n(
        t.opened
          ? `Opened ${t.url} in your browser to manage usage credits for your organization.`
          : `Visit ${t.url} to manage usage credits for your organization.`
      ),
      null
    );
  if (!t.opened) return (n(`Visit ${t.url} to manage usage credits.`), null);
  let s = gn(),
    g = s && { accountUuid: s.accountUuid, organizationUuid: s.organizationUuid },
    c = Wr();
  return e(mwe, {
    startingMessage:
      "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (m, y, d) => {
      let f = await hPe(r, m, { setAppState: d, previousAccount: g, previousGatewayAuth: c });
      n(...txt(r, m, f));
    }
  });
}
export { jxn, $at };

//# sourceMappingURL=chunk-02y1pdbt.js.map
