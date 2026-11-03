// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ws } from "./chunk-f451a1hs.js";
import { qc, Mm, Q8t, HW } from "./chunk-b77hptpq.js";
import { f8t } from "./chunk-c9m48h9f.js";
import { w } from "./chunk-7m7t89vx.js";
import { e } from "./chunk-f790ajz4.js";
import { be, Xhe, j } from "./chunk-bq35vvkw.js";
j();
function uwe(u) {
  let f = w(16),
    { children: m, mouseTracking: p, surface: c } = u,
    i = p === void 0 ? "full" : p,
    k = be(Mm),
    r = be(HW),
    t = be(Q8t),
    M,
    F;
  if (f[0] !== t || f[1] !== c || f[2] !== r)
    ((M = () => {
      if (!r || !c) {
        return;
      }
      let A = Ws().get(process.stdout);
      let N = t.set("surface", c);
      if (!A?.keepForNextFrame(N)) r(N);
      return () => {
        let P = t.reset("surface");
        if (!A?.keepForNextFrame(P)) r(P);
      };
    }),
      (F = [r, t, c]),
      (f[0] = t),
      (f[1] = c),
      (f[2] = r),
      (f[3] = M),
      (f[4] = F));
  else ((M = f[3]), (F = f[4]));
  Xhe(M, F);
  let C, L;
  if (f[5] !== t || f[6] !== i || f[7] !== r)
    ((C = () => {
      let a = Ws().get(process.stdout);
      if (!r) {
        return;
      }
      let b =
        (a?.claimHeldAltScreen() ? t.reset("mouse") : "") +
        t.set("altScreen") +
        t.set("mouse", i) +
        (a?.nativeCursorSeq ?? "");
      if (!a?.keepForNextFrame(b)) r(b);
      return (
        a?.setAltScreenActive(!0, i),
        () => {
          if (!a?.holdAltScreenLeave(() => d(a, t, r))) d(a, t, r);
        }
      );
    }),
      (L = [r, t, i]),
      (f[5] = t),
      (f[6] = i),
      (f[7] = r),
      (f[8] = C),
      (f[9] = L));
  else ((C = f[8]), (L = f[9]));
  Xhe(C, L);
  const T = k?.rows ?? 24,
    g = i === "full";
  let y;
  if (f[10] !== m || f[11] !== g)
    ((y = e(f8t, { value: g, children: m })), (f[10] = m), (f[11] = g), (f[12] = y));
  else y = f[12];
  let q;
  if (f[13] !== T || f[14] !== y)
    ((q = e(qc, { flexDirection: "column", height: T, width: "100%", flexShrink: 0, children: y })),
      (f[13] = T),
      (f[14] = y),
      (f[15] = q));
  else q = f[15];
  return q;
}
function d(u, m, p) {
  let c = u?.setAltScreenActive(!1) ?? "";
  u?.clearTextSelection();
  let i = m.reset("mouse"),
    k = m.reset("altScreen"),
    r = k !== "" && !u?.hasUnmounted,
    t = r ? m.reassert("extendedKeys") : "",
    f = r ? (u?.nativeCursorSeq ?? "") : "";
  p(c + i + k + t + f);
}
export { uwe };

//# sourceMappingURL=chunk-dkkqpcew.js.map
