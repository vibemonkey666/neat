// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke } from "./chunk-wrtp8qz8.js";
import { In } from "./chunk-h5gbmqm1.js";
import { Re, ue } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { Fu } from "./chunk-13nwb0xt.js";
import { uxe, hr } from "./chunk-dc0nzty2.js";
import { ist, lxe } from "./chunk-5y69fhjv.js";
import { realpath as u } from "fs/promises";
async function eas(r) {
  try {
    let o = await ist();
    if (!o) {
      t("Not in a GitHub repository, skipping path mapping update");
      return;
    }
    let e = ke(),
      s = hr(e) ?? e,
      i;
    try {
      i = In(await u(s));
    } catch {
      i = s;
    }
    let a = o.toLowerCase(),
      p = ue().githubRepoPaths?.[a] ?? [];
    if (p[0] === i) {
      t(`Path ${i} already tracked for repo ${a}`);
      return;
    }
    let f = p.filter((c) => c !== i),
      h = [i, ...f];
    (await Re((c) => ({ ...c, githubRepoPaths: { ...c.githubRepoPaths, [a]: h } }), r),
      t(`Added ${i} to tracked paths for repo ${a}`));
  } catch (o) {
    t(`Error updating repo path mapping: ${o}`);
  }
}
function rCn(r) {
  let o = ue(),
    e = r.toLowerCase();
  return o.githubRepoPaths?.[e] ?? [];
}
async function oCn(r) {
  let o = await Promise.all(r.map(Fu));
  return r.filter((e, n) => o[n]);
}
async function wQr(r, o) {
  try {
    let e = await uxe(r);
    if (!e) return !1;
    let n = lxe(e);
    if (!n) return !1;
    return n.toLowerCase() === o.toLowerCase();
  } catch {
    return !1;
  }
}
function vQr(r, o, e) {
  let n = ue(),
    s = r.toLowerCase(),
    i = n.githubRepoPaths?.[s] ?? [],
    a = i.filter((p) => p !== o);
  if (a.length === i.length) return;
  let g = { ...n.githubRepoPaths };
  if (a.length === 0) delete g[s];
  else g[s] = a;
  (Re((p) => ({ ...p, githubRepoPaths: g }), e),
    t(`Removed ${o} from tracked paths for repo ${s}`));
}
export { eas, rCn, oCn, wQr, vQr };

//# sourceMappingURL=chunk-22jrhb52.js.map
