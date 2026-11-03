// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F } from "./chunk-wrtp8qz8.js";
import { E, yh } from "./chunk-fs43t96t.js";
import { yg } from "./chunk-xe386mry.js";
import { t } from "./chunk-4kxznmzw.js";
import { Ad } from "./chunk-a16y5hcz.js";
import { O } from "./chunk-19xvg81r.js";
import { q0 } from "./chunk-jtb5bzvb.js";
import { ws, tX } from "./chunk-v4kbwz0z.js";
import { xa, zbt, b2e } from "./chunk-d5zj5299.js";
import { fF, Zit } from "./chunk-4x8yng6e.js";
import { PA } from "./chunk-h906jfjz.js";
import { MD } from "./chunk-6h7ejyet.js";
import { Up } from "./chunk-t1ptejf0.js";
import { constants as w } from "fs";
import { lstat as R, open as D, opendir as C, readlink as b } from "fs/promises";
import { isAbsolute as x, join as v, resolve as k, sep as p, win32 as P } from "path";
var lCn = 5000,
  h = 10 * lCn,
  S = 1024;
async function AQr(n, e, r, s) {
  try {
    if (
      typeof n !== "string" ||
      n.length > S ||
      n.includes("\x00") ||
      n.includes("\\") ||
      !Ad(n) ||
      P.parse(n).root !== "" ||
      q0(n)
    )
      throw fF("invalid_path");
    if (!x(e) || O() !== "linux") throw fF("unexpected_error");
    let o = k(e, n);
    if (!Up(e, o, !0)) throw fF("invalid_path");
    let a = r();
    if (MD(o, a.trustedNetworkDirectories) !== void 0) throw fF("unsupported_name");
    if (T(e, o, a)) throw fF("read_rule");
    await using m = await A(e, o);
    if (
      !(
        await b(`/proc/self/fd/${m.fd}`, { encoding: "buffer" }).catch((i) => {
          throw E(i) === "ENOENT" ? fF("unexpected_error") : i;
        })
      ).equals(Buffer.from(o))
    )
      throw fF("path_not_canonical");
    let l = await I(m);
    if (s()) throw fF("workspace_moved");
    let c = r();
    if (c !== a && T(e, o, c)) throw fF("read_rule");
    let d = l.length > h;
    ((l.length = Math.min(l.length, h)),
      l.sort((i, f) => (i.name < f.name ? -1 : i.name > f.name ? 1 : 0)));
    let u = [],
      N = yg(e, () => {
        for (let i of l) {
          let f = v(o, i.name);
          if (_(f, c, !i.isFile())) continue;
          if (i.name.trimEnd() !== i.name && _(`${f}${p}`, c, !i.isFile())) continue;
          if (u.length === lCn) return !0;
          u.push(i);
        }
        return !1;
      }),
      L = await Promise.all(u.map((i) => W(m, i)));
    return {
      absPath: o,
      entries: L.filter((i) => i !== null),
      truncated: N || (d && u.length > 0)
    };
  } catch (o) {
    throw Zit(o) !== void 0 ? o : H(o);
  }
}
var g = tX | w.O_DIRECTORY | w.O_NOFOLLOW | ws;
async function A(n, e) {
  let r = e.split(p).filter((a) => a !== ""),
    s = F(k(n).split(p), (a) => a !== "") - 1,
    o = await D(p, g);
  for (let [a, m] of r.entries()) {
    await using y = o;
    let l = `/proc/self/fd/${y.fd}/${m}`;
    o = await D(l, g).catch(async (c) => {
      let d = E(c);
      if (d === "ENOENT")
        await R(`/proc/self/fd/${y.fd}`).catch(() => {
          throw fF("unexpected_error");
        });
      if (d === "ENOTDIR" && (await R(l)).isSymbolicLink())
        throw fF(a < s ? "path_not_canonical" : "symlink_in_path");
      throw c;
    });
  }
  return o;
}
async function I(n) {
  let e = await C(`/proc/self/fd/${n.fd}`).catch((s) => {
      throw E(s) === "ENOENT" ? fF("unexpected_error") : s;
    }),
    r = [];
  for await (let s of e) if ((r.push(s), r.length > h)) break;
  return r;
}
async function W(n, e) {
  let r = await PA(e, `/proc/self/fd/${n.fd}/${e.name}`, "unknown");
  if (r === "unknown") return null;
  if (r === "symlink") return { name: e.name, isDirectory: !1, isSymlink: !0 };
  if (r === "other") return { name: e.name, isDirectory: !1, isSpecial: !0 };
  return { name: e.name, isDirectory: r === "dir" };
}
function T(n, e, r) {
  return (
    b2e([], r).layer !== "allow" ||
    yg(n, () => _(e, r, !0) || ["deny", "ask"].some((s) => zbt(e, r, "read", s) !== null))
  );
}
function _(n, e, r) {
  return (r ? [{}, { isDirectory: !0 }] : [{}]).some((o) =>
    ["deny", "ask"].some((a) => xa(n, e, "read", a, o) !== null)
  );
}
function H(n) {
  switch (E(n)) {
    case "ENOENT":
      return fF("not_found");
    case "ENOTDIR":
      return fF("not_a_directory");
    case "ELOOP":
      return fF("symlink_in_path");
    case "ENAMETOOLONG":
      return fF("invalid_path");
    case "EACCES":
    case "EPERM":
      return fF("os_permission_denied");
    default:
      let e = `list_directory failed: ${yh(n) ?? "not a filesystem error"}`;
      return (t(e, { level: "error" }), fF("unexpected_error", e));
  }
}
export { lCn, AQr };

//# sourceMappingURL=chunk-m1t68px6.js.map
