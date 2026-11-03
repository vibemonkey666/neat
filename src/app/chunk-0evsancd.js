// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { cm } from "./chunk-wrtp8qz8.js";
import { Pe } from "./chunk-4hww8411.js";
import { Kw } from "./chunk-45h8cn90.js";
import { he } from "./chunk-95k4nfdh.js";
import { tor } from "./chunk-awy6yynp.js";
import { bM, rd } from "./chunk-5rw2zfa0.js";
function Fp(r) {
  console.error(he.red(r));
}
function pn(r, e = "cli_error") {
  if (r) Fp(r);
  if (!cm()) Kw(e);
  process.exit(1);
  return;
}
function HU(r) {
  if (r)
    process.stdout.write(
      r +
        `
`
    );
  process.exit(0);
  return;
}
function $Gt(r) {
  process.exit(r);
  return;
}
async function Ff(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e());
  });
}
function lj(r) {
  process.stderr.write(
    he.yellow(rd(r)) +
      `
`
  );
}
var i = 2000;
async function dj({ waitForOAuthRefresh: r = !0 } = {}) {
  if (r) await tor();
  await Pe(bM(), i);
  try {
    let { flushAnalyticsSinks: e } = await import("./chunk-zbzq35bn.js");
    await e();
  } catch {}
}
async function Oo(r) {
  (await dj(), process.exit(r));
  return;
}
async function rs(r) {
  if (r) Fp(r);
  return (await dj(), pn());
}
async function eA(r) {
  if (r)
    process.stdout.write(
      r +
        `
`
    );
  return (await dj(), HU());
}
export { Fp, pn, HU, $Gt, Ff, lj, dj, Oo, rs, eA };

//# sourceMappingURL=chunk-0evsancd.js.map
