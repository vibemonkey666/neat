// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke } from "./chunk-wrtp8qz8.js";
import { YSe } from "./chunk-h5gbmqm1.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { kd } from "./chunk-bh50mq9d.js";
import { homedir as o } from "os";
var zco = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function BSs() {
  let r = await kd(process.pid);
  if (r === void 0) return {};
  return { [zco]: `${process.pid}:${r}` };
}
async function jSs() {
  let r = /^(\d{1,10}):(.{1,64})$/.exec(i.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!r) return !1;
  let e = O() === "windows" ? process.ppid : process.pid;
  if (Number(r[1]) !== e) return !1;
  if (!YSe(ke(), o())) return !1;
  let t = await kd(e, { skipCache: !0 });
  return t !== void 0 && t === r[2];
}
export { zco, BSs, jSs };

//# sourceMappingURL=chunk-nzvp0yb4.js.map
