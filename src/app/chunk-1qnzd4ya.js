// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { WSe } from "./chunk-wrtp8qz8.js";
import { R, E, Er } from "./chunk-fs43t96t.js";
import { m } from "./chunk-brszmkb3.js";
import { Y } from "./chunk-arw2bgak.js";
import { ws, tX } from "./chunk-v4kbwz0z.js";
import { randomUUID as D } from "crypto";
import { constants as h } from "fs";
import {
  lstat as F,
  mkdir as _,
  open as c,
  readlink as I,
  realpath as L,
  rename as b,
  rmdir as p,
  stat as H
} from "fs/promises";
import { basename as f, dirname as y, join as g } from "path";
var u = tX | h.O_DIRECTORY | h.O_NOFOLLOW | ws;
function d(n) {
  return `/proc/self/fd/${n.fd}`;
}
async function O(n) {
  return (await n.stat()).uid === process.getuid?.();
}
async function L8e(n, o) {
  let r = [],
    t = n;
  for (let i = 0; i < o; i++) (r.unshift(f(t)), (t = y(t)));
  let e,
    a = t;
  try {
    if (((e = await c(t, u)), (a = void 0), (await L(d(e))) !== t)) return "behind_a_link";
    if (o === 0 && !(await O(e))) return "not_owned";
    for (let s of r) {
      ((a = g(d(e), s)),
        await _(a, { mode: 448 }).catch((l) => {
          if (E(l) !== "EEXIST") throw l;
        }));
      let w = await c(a, u);
      if (((a = void 0), await e.close(), (e = w), !(await O(e)))) return "not_owned";
    }
    let i = e;
    return ((e = void 0), { at: d(i), release: () => i.close() });
  } catch (i) {
    let s = E(i);
    if (s === "ENOENT" && a === t) return o === 0 ? "absent" : "no_parent";
    if (a !== void 0 && (s === "ENOTDIR" || s === "ELOOP"))
      return (await F(a).then(
        (l) => l.isSymbolicLink(),
        () => !1
      ))
        ? "a_link"
        : "not_a_directory";
    return Er(i) ?? "unknown";
  } finally {
    await e?.close();
  }
}
async function PFn(n) {
  let o = g(n.at, `.probe-${D()}`),
    r = `${o}-moved`,
    t;
  try {
    (await _(o, { mode: 448 }), (t = await c(o, u)), await b(o, r));
    let e = await I(d(t)).catch(() => ""),
      a = await H(d(t)).catch(() => {
        return;
      });
    return (f(e) === f(r) && a?.ino === (await t.stat()).ino) || "holds_do_not_follow";
  } catch (e) {
    return Er(e) ?? "unknown";
  } finally {
    (await t?.close(), await Promise.allSettled([p(o), p(r)]));
  }
}
async function Vut(n) {
  let o = WSe();
  if (o === null || y(n) !== o)
    return (await _(n, { recursive: !0, mode: 448 }), { at: n, release: async () => {} });
  let r = await L8e(n, 2);
  if (typeof r === "string")
    throw (
      Y("warn", "attachments_in_user_data", { state: "write_refused", reason: r }),
      m("bridge_attachment_user_data_root", r),
      new R(
        `nothing was saved: the attachments folder cannot be used (${r})`,
        "nothing was saved: the attachments folder cannot be used"
      )
    );
  return r;
}
export { L8e, PFn, Vut };

//# sourceMappingURL=chunk-1qnzd4ya.js.map
