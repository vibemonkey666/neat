// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uV } from "./chunk-yv5e7kyr.js";
import { rZe, THe } from "./chunk-frrn501g.js";
var W8e = /[\u202a-\u202e\u2066-\u2069]/;
function Hen(e) {
  return (
    e !== "" &&
    e !== "." &&
    e !== ".." &&
    e.length <= 255 &&
    !/[/\\\p{Cc}]/u.test(e) &&
    !W8e.test(e)
  );
}
function _Un(e, r) {
  return THe(e, r);
}
function Len(e) {
  return e instanceof rZe ? "credential_name" : "path_rejected";
}
function HCs(e, r, a) {
  let t =
    HTr(r) === void 0
      ? "Tell the user it was not attached."
      : "If the user wants it sent, ask them to attach it to the chat themselves.";
  return `Cannot attach "${e}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not sent on Claude's word alone. ${t} ${a}`;
}
function bUn(e, r, a) {
  let t = HTr(r),
    o =
      t === void 0
        ? "Ask the user to share the file with this session, or to add its folder with /add-dir."
        : `Files the user attached to this chat are usually in ${t}; give the full path of one of those. If the file is not there, ask the user to attach it to the chat.`;
  return `Cannot attach "${e}": only files this session is allowed to read can be attached. ${o} ${a}`;
}
function HTr(e) {
  if (e.isRemoteMode !== !0) return;
  try {
    return uV();
  } catch {
    return;
  }
}
var dbo = {
  too_large: !0,
  hard_links: !0,
  not_regular: !0,
  moved: !0,
  grew: !0,
  open_failed: !0,
  read_failed: !0
};
function SUn(e) {
  return Object.hasOwn(dbo, e);
}
function wUn(e, r, a, t) {
  switch (r) {
    case "too_large":
      return {
        error: `Cannot attach "${e}": files over ${a / 1048576} MiB cannot be attached. ${t}`,
        code: "too_large"
      };
    case "hard_links":
      return {
        error: `Cannot attach "${e}": the file has more than one hard link, which can point at a file outside the folders this session may read. Copy the file and attach the copy. ${t}`,
        code: "hard_links"
      };
    case "not_regular":
      return {
        error: `Cannot attach "${e}": it is not a regular file. Attach files one at a time, not a folder. ${t}`,
        code: "not_regular"
      };
    case "moved":
    case "grew":
    case "open_failed":
    case "read_failed":
      return { error: `Could not read "${e}". ${t}`, code: r };
  }
}
export { W8e, Hen, _Un, Len, HCs, bUn, HTr, dbo, SUn, wUn };

//# sourceMappingURL=chunk-5tt7a3m0.js.map
