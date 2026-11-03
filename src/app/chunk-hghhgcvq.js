// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ad } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { te } from "./chunk-4kxznmzw.js";
import { Sxe } from "./chunk-13nwb0xt.js";
import { v, Ia } from "./chunk-0bqrj5ah.js";
import { FAt } from "./chunk-hc5j8sxy.js";
var X7e = "modelFacingMessage";
function GL(e = v()) {
  return Ia(yze, e);
}
function yze(e) {
  if (typeof e === "string") {
    let n = e.trim();
    if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
      let t = Number(n);
      if (Number.isFinite(t)) return t;
    }
  }
  return e;
}
var VBt = 64;
function qBt(e, n) {
  let t = e;
  for (let s = 0; s < n.length; s++) {
    let { find: o, replace: a } = n[s];
    if (!Ad(o) || !Ad(a)) return { ok: !1, reason: "malformed", op: s };
    let d = o === "" ? -1 : t.indexOf(o);
    if (d === -1) return { ok: !1, reason: "not_found", op: s };
    if (t.indexOf(o, d + 1) !== -1) return { ok: !1, reason: "ambiguous", op: s };
    t = t.slice(0, d) + a + t.slice(d + o.length);
  }
  if (t === e) return { ok: !1, reason: "noop" };
  return { ok: !0, content: t };
}
var X6n = VBt,
  jFr = 65536,
  m = 268435456,
  g = 100;
function ZVs() {
  return i.CLAUDE_CODE_ARTIFACT_PUBLISH_EDITS ?? !0;
}
function J6n(e) {
  let n = e.core
      ? "publish: small changes Claude makes to the file at `file_path` in this same call, instead of editing the file with Edit and publishing after."
      : "publish: small changes to make to the file at `file_path` in this same call, instead of editing the file with Edit and publishing after.",
    t = e.typesOn
      ? " Use it on a page (add `url` to update an artifact from another conversation) or on one data file of an artifact made from a type (its `url`, with that file as `file_path`)."
      : " Use it on a page (add `url` to update an artifact from another conversation).",
    s = [...(e.typesOn ? ["`type_url`"] : []), ...(e.multiFileOn ? ["`files`"] : [])],
    o =
      s.length === 0
        ? ""
        : ` Not allowed with ${s.length === 1 ? s[0] : `${s.slice(0, -1).join(", ")} or ${s.at(-1)}`}.`;
  return `${n}${t}${o} Each old_str is text copied exactly from the file as it now stands and must occur in it exactly once; new_str takes its place (empty deletes it). The edits apply in order, all or none: the file is published with them and then saved with them on disk, so it stays the source for later changes; on a miss nothing is changed or published, and the result says which edit failed and why.`;
}
var eqs = "Text copied exactly from the file; must occur once.",
  tqs = "Its replacement; empty deletes old_str.",
  nqs =
    " For a small change to a page published from a file in this conversation, Claude can send the change as `edits` on the publish call itself (old_str/new_str pairs copied exactly from the file as it now stands) instead of editing the file first.",
  rqs =
    "The files you sent are still on disk. For the next small change to this file, send it as `edits` on a publish of the same file_path (old_str/new_str pairs copied exactly from the file as it now stands): that one call changes the file and what is published together, with no Read and no Edit. To change several files, or to rewrite most of the page, Edit the files and publish them in the same response; if an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, Read it first.",
  oqs =
    "Once that file has these edits too, the next small change to it can go as `edits` on a publish of the same file_path (old_str/new_str pairs copied exactly from the file as it then stands). To change several files, or to rewrite most of the page, Edit the files and publish them in the same response; if an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, Read it first.";
function $No(e) {
  let n = 0;
  for (let t = 0; t < e.length; t++) {
    let { old_str: s, new_str: o } = e[t];
    if (s === "") return { reason: "empty_old_str", edit: t };
    if (o.includes("\x00")) return { reason: "malformed", edit: t };
    if (((n += s.length + o.length), n > jFr)) return { reason: "too_large" };
  }
  return;
}
function FNo(e, n, t = {}) {
  let s = $No(n);
  if (s !== void 0) return { ok: !1, ...s };
  if (n.length * e.length > m) return { ok: !1, reason: "too_much_work" };
  let o = FAt(e) === "CRLF",
    a = (l) =>
      o
        ? l.replaceAll(
            `\r
`,
            `
`
          )
        : l,
    d = a(e),
    h = n.map((l) => ({ find: a(l.old_str), replace: a(l.new_str) })),
    r = qBt(d, h);
  if (!r.ok)
    switch (r.reason) {
      case "noop":
        return { ok: !1, reason: "noop" };
      case "ambiguous": {
        let l = d;
        for (let u = 0; u < r.op; u++) {
          let { find: f, replace: _ } = h[u],
            c = l.indexOf(f);
          l = l.slice(0, c) + _ + l.slice(c + f.length);
        }
        return { ok: !1, reason: "ambiguous", edit: r.op, count: b(l, h[r.op].find) };
      }
      default:
        return { ok: !1, reason: r.reason, edit: r.op };
    }
  if (t.json === !0 && p(d) && !p(r.content)) return { ok: !1, reason: "json_invalid" };
  return o ? { ...r, content: Sxe(r.content, "CRLF") } : r;
}
function b(e, n) {
  let t = 0;
  for (let s = e.indexOf(n); s !== -1 && t < g; s = e.indexOf(n, s + 1)) t++;
  return t;
}
function p(e) {
  try {
    return (te(e), !0);
  } catch {
    return !1;
  }
}
function E(e, n, t) {
  switch (e.reason) {
    case "empty_old_str":
      return `edits[${e.edit}] old_str is empty`;
    case "malformed":
      return `edits[${e.edit}] has a NUL character in new_str, or a broken character (an unpaired surrogate) in old_str or new_str`;
    case "too_large":
      return `old_str and new_str add up to more than ${jFr} characters over all the edits; make a change that large with Edit and publish without edits`;
    case "too_much_work":
      return `${n} edits on a file of ${t} characters is more than one publish call will apply; send at most ${Math.max(1, Math.floor(m / Math.max(1, t)))} edits per call for a file this size, over as many calls as the change needs`;
    case "not_found":
      return `edits[${e.edit}] old_str does not occur in the file`;
    case "ambiguous":
      return `edits[${e.edit}] old_str occurs ${e.count >= g ? "at least " : ""}${e.count} times in the file; include more of the surrounding text so that it occurs once`;
    case "noop":
      return "the edits leave the file unchanged (it already reads that way); publish the file without edits if it should go out as it is";
    case "json_invalid":
      return "after these edits the file would no longer be valid JSON, which the page that reads it needs; correct the edit that breaks it (a missing comma, quote or bracket) and send this publish again with all of its edits";
  }
}
function w(e) {
  return e.reason === "not_found" || e.reason === "ambiguous";
}
function UNo(e, n, t, s) {
  let o = `No edits were applied and nothing was published: ${E(e, n.length, t.length)}.`;
  if (!w(e)) return o;
  let a = `${o} The file's current text follows; copy old_str from it exactly and send the publish again.

${t}`;
  if (a.length <= s) return a;
  return `${o} The file is too long to show here: Read the file at file_path, copy old_str from it exactly and send the publish again.`;
}
function sqs(e) {
  return `\x00edits-base\x00${e}`;
}
var iqs =
  "Applying `edits` changes the file at file_path, and an Edit permission check requires approval here: nothing was published and the file is unchanged. Retry the publish so it can be asked, or Edit the file and publish it without edits.";
function aqs(e, n, t) {
  let s = n === "page" ? "the published page" : "what was published";
  if (t === void 0)
    return e === 1
      ? `The edit was written to the file after it was published, so the file matches ${s}.`
      : `The ${e} edits were written to the file after it was published, so the file matches ${s}.`;
  let o = e === 1,
    a = `Published \u2014 ${n === "page" ? "the page" : "the artifact"} now has ${o ? "the edit" : `the ${e} edits`}, but the file at file_path does not`;
  if (t === "write_failed")
    return `${a}: writing it back failed, and the file may be partly written. Read it before anything else, restore it to the published text (${s}, ${o ? "the edit" : "the edits"} included), and only then publish it again; publishing it as it is could put damaged content ${n === "page" ? "on the page" : "in the artifact"}.`;
  return `${a} (${t === "changed_during_publish" ? "it changed on disk while the publish ran, so it was left as it is" : t === "not_writable" ? "it could not be opened for writing (read-only), so it was left as it is" : "it has other names on disk (a hard link), so it was left as it is"}). Apply the same ${o ? "edit" : "edits"} to that file with Edit before you publish it again${t === "hard_linked" ? ", and publish it without `edits` while it has other names" : ""}; publishing it as it is would revert ${o ? "it" : "them"}.`;
}
function BNo(e, n) {
  if (e[0] === 255 && e[1] === 254)
    return Buffer.concat([Buffer.from([255, 254]), Buffer.from(n, "utf16le")]);
  let t = e[0] === 239 && e[1] === 187 && e[2] === 191;
  return Buffer.concat([...(t ? [Buffer.from([239, 187, 191])] : []), Buffer.from(n, "utf8")]);
}
export {
  GL,
  yze,
  X7e,
  VBt,
  qBt,
  X6n,
  jFr,
  ZVs,
  J6n,
  eqs,
  tqs,
  nqs,
  rqs,
  oqs,
  $No,
  FNo,
  UNo,
  sqs,
  iqs,
  aqs,
  BNo
};

//# sourceMappingURL=chunk-hghhgcvq.js.map
