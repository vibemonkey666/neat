// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ar, Jt } from "./chunk-r1dvrqha.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { Gze, em } from "./chunk-tzm7jehf.js";
import { H } from "./chunk-p8tprgqa.js";
var s8n = new Set([
    "publish_version",
    "edit_version",
    "publish_files",
    "copy_file",
    "create_from_type"
  ]),
  oFo = new Set(["publish_version", "publish_files", "authorize_upload"]);
function i8n(t, e) {
  return (
    t === "create_from_type" ||
    (oFo.has(t) && !(H(e) && e.slug !== void 0 && e.slug !== null && e.slug !== ""))
  );
}
var nfn = "delete_artifact";
function s(t) {
  let e = Array.isArray(t) ? t.find((i) => H(i) && i.type === "text") : void 0,
    r = typeof t === "string" ? t : H(e) ? e.text : void 0;
  if (typeof r !== "string") return null;
  let o = ot(r, !1);
  return H(o) ? o : null;
}
function a8n(t) {
  let e = s(t);
  if (e === null || typeof e.url !== "string") return null;
  let r = Jt(e.url);
  if (r === null || (e.slug !== void 0 && e.slug !== r.slug)) return null;
  let o = typeof e.title === "string" ? em(e.title) : null,
    i = typeof e.version === "string" && Gze.test(e.version) ? e.version : void 0;
  return {
    slug: r.slug,
    env: r.env,
    ...(o !== null && o !== "" && { title: o }),
    ...(i !== void 0 && { version: i })
  };
}
function l8n(t) {
  let e = s(t);
  return e !== null && e.deleted === !0 && typeof e.slug === "string" && ar.test(e.slug)
    ? e.slug
    : null;
}
class n {
  writers = null;
  loadWriters = null;
  register(t) {
    this.writers = t;
  }
  loaded() {
    if (this.writers === null) this.loadWriters?.();
    return this.writers;
  }
}
var Wze = new n();
function _4s(t) {
  Wze.register(t);
}
class l {
  arm = null;
  register(t) {
    this.arm = t;
  }
}
var sFo = new l();
function b4s(t) {
  sFo.register(t);
}
export { s8n, oFo, i8n, nfn, a8n, l8n, Wze, _4s, sFo, b4s };

//# sourceMappingURL=chunk-f6febadb.js.map
