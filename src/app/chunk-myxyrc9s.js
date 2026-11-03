// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { aF, gee } from "./chunk-wrtp8qz8.js";
import { N, d } from "./chunk-fs43t96t.js";
import { YYt } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Sb, Ut } from "./chunk-ajtyjx88.js";
import { w } from "./chunk-7m7t89vx.js";
import { a } from "./chunk-4cgvah10.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { nqe, An } from "./chunk-at88wjsn.js";
import { uZ } from "./chunk-rj6gws00.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { ae, ZAe } from "./chunk-ar6ynjt8.js";
import { $L, fTe } from "./chunk-6h7ejyet.js";
import { ghe, Nne, hhe } from "./chunk-fnsjs1v2.js";
import { ZX, Rct, Q2, mve } from "./chunk-6z861t7d.js";
import { e, r } from "./chunk-f790ajz4.js";
import { QUe } from "./chunk-1axdbe50.js";
import { C, y, j } from "./chunk-bq35vvkw.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { S } from "./chunk-a2y39866.js";
j();
function h() {
  return {
    provider: Ae(),
    awsRegion: nqe(),
    vertexRegion: YYt(),
    vertexProjectId: i.ANTHROPIC_VERTEX_PROJECT_ID ?? "",
    accountDigest: cn(
      [
        i.AWS_PROFILE,
        i.AWS_BEARER_TOKEN_BEDROCK,
        i.AWS_ACCESS_KEY_ID,
        i.GOOGLE_APPLICATION_CREDENTIALS
      ].map((o) => o ?? "").join(`
`)
    )
  };
}
function O(o, p) {
  let g = h(),
    c =
      o.provider === p &&
      g.provider === o.provider &&
      g.awsRegion === o.awsRegion &&
      g.vertexRegion === o.vertexRegion &&
      g.vertexProjectId === o.vertexProjectId &&
      g.accountDigest === o.accountDigest;
  return (
    t(
      `Provider-setup restart: ${c ? "carrying" : "dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId || "no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId || "no-project"}${g.accountDigest === o.accountDigest ? "" : ", credentials changed"}, target ${p})`
    ),
    c
  );
}
var E = "Your settings were saved \u2014 restart Claude Code to apply them.";
async function b(o, p, g) {
  try {
    if (Ut()) return `A background session can't restart itself. ${E}`;
    if (Sb() !== null) return `Claude can't restart itself from inside the agents view. ${E}`;
    let c = W(o);
    if (c !== void 0) return c;
    if (An()) return;
    if ((await mve(), await Q2($L(o), o.storageV5), An())) return;
    let m = W(o);
    if (m !== void 0) return m;
    let v = ae(o),
      R = await ZX($L(o), "relaunch", { responseStreaming: fTe(o) }, o.storageV5);
    await Rct(
      R,
      {
        freshIfNoTranscript: !0,
        extraArgs: [...ghe(v, ZAe(o), { carryModel: O(g, p) }), ...hhe(v, gee())],
        proactivity: { proactivityLevel: o.getProactivityLevel(), toolPermissionContext: v },
        env: uZ()
      },
      o.storageV5
    );
    return;
  } catch (c) {
    return (l(N(c)), `Couldn't restart Claude Code (${d(c)}). ${E}`);
  }
}
function W(o) {
  let p = Nne(ae(o), aF());
  if (p.length > 0)
    return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${E}`;
  if (QUe(o.taskRegistry.all()))
    return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${E}`;
  return;
}
function $6t(o) {
  let u = w(21),
    { Wizard: p, cancelledEvent: g, targetProvider: c, onDone: m, context: v } = o,
    [R, Z] = y(null),
    [I] = y(h),
    T = C(!1),
    [_, F] = y(!1),
    V;
  if (u[0] !== v || u[1] !== I || u[2] !== m || u[3] !== c)
    ((V = () => {
      if (T.current) {
        return;
      }
      ((T.current = !0),
        F(!0),
        b(v, c, I).then((z) => {
          if (z !== void 0) ((T.current = !1), F(!1), m(z, { display: "system" }));
        }));
    }),
      (u[0] = v),
      (u[1] = I),
      (u[2] = m),
      (u[3] = c),
      (u[4] = V));
  else V = u[4];
  const A = R !== null;
  let G;
  if (u[5] !== A) ((G = { context: "Confirmation", isActive: A }), (u[5] = A), (u[6] = G));
  else G = u[6];
  if ((lt("confirm:yes", V, G), R !== null)) {
    let P;
    if (u[7] !== R) ((P = e(n, { color: "success", children: R })), (u[7] = R), (u[8] = P));
    else P = u[8];
    let f;
    if (u[9] !== _)
      ((f = _
        ? e(n, { dimColor: !0, children: "Restarting Claude Code\u2026" })
        : r(n, {
            dimColor: !0,
            children: ["Press ", e(n, { bold: !0, children: "Enter" }), " to restart Claude Code."]
          })),
        (u[9] = _),
        (u[10] = f));
    else f = u[10];
    let k;
    if (u[11] !== P || u[12] !== f)
      ((k = r(s, { flexDirection: "column", gap: 1, marginTop: 1, children: [P, f] })),
        (u[11] = P),
        (u[12] = f),
        (u[13] = k));
    else k = u[13];
    return k;
  }
  let P;
  if (u[14] === S) ((P = (ee) => Z(ee)), (u[14] = P));
  else P = u[14];
  let f;
  if (u[15] !== g || u[16] !== m)
    ((f = () => {
      (a(g, {}), m());
    }),
      (u[15] = g),
      (u[16] = m),
      (u[17] = f));
  else f = u[17];
  let k;
  if (u[18] !== p || u[19] !== f)
    ((k = e(p, { onComplete: P, onCancel: f })), (u[18] = p), (u[19] = f), (u[20] = k));
  else k = u[20];
  return k;
}
export { $6t };

//# sourceMappingURL=chunk-myxyrc9s.js.map
