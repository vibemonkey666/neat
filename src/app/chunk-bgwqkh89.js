// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _r } from "./chunk-pgnjjhxv.js";
import { R } from "./chunk-fs43t96t.js";
import { _o } from "./chunk-fnsjs1v2.js";
import { Zm, vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { mkdir as i } from "fs/promises";
import { join as a } from "path";
async function Ems(e, r) {
  if (z() && r !== void 0 && _r(e)) {
    await n(r, { namespace: "job", jobId: e });
    return;
  }
  await i(_o(e), { recursive: !0 });
}
async function AUe(e, r) {
  if (z() && r !== void 0 && _r(e)) {
    await n(r, c(e));
    return;
  }
  await i(a(_o(e), "tmp"), { recursive: !0 });
}
function c(e) {
  return { namespace: "job", jobId: e, relPath: ["tmp"] };
}
async function n(e, r) {
  let o = await e.ensureScope(r);
  if (!o.ok) {
    let t = Zm(o.error);
    throw Object.assign(
      new R(`job folder not made (${vt(o.error)})`, "job folder not made"),
      t !== void 0 ? { code: t } : {}
    );
  }
}
export { Ems, AUe };

//# sourceMappingURL=chunk-bgwqkh89.js.map
