import {
  fileURLToPath as __filePath_56e9cd896641b5fa,
  URL as __filePath_56e9cd896641b5fa_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Rt } from "./chunk-wany0nxw.js";
import { at } from "./chunk-at88wjsn.js";
import { Lt } from "./chunk-r1dvrqha.js";
import { rqs, oqs } from "./chunk-hghhgcvq.js";
import { qe } from "./chunk-0np0053t.js";
var s =
  "The files you sent are still on disk. For a small, specific change to a file whose text is in this conversation, send the Edit call(s) and an Artifact publish of the same file_path together in one response, with no Read and no shell command that edits the file: these calls run one after another in the order given, so the publish sends the edited file. If an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, or you cannot place the change exactly from the text you have, Read it first.";
function YVs(e, t) {
  if (e) return t ? oqs : rqs;
  return s;
}
var n = ` For a small change to an artifact this conversation has already published, Claude makes it with ${at}, not a shell command, and publishes the artifact again with the same file path in the same response: the ${at} call(s) first, then the publish, with no ${qe} and without waiting for the ${at} result. Only when the file's text is not in this conversation, or the change cannot be placed exactly from that text, does Claude read the file before editing it. The calls run in the order sent, so the publish carries the edited file. If one of those ${at} calls does not apply, the publish sent in the same response is refused and the artifact stays as it was, so Claude corrects the ${at} and publishes again.`,
  o = ` For a change to several files at once, or a rewrite of most of a page, Claude makes the change with ${at}, not a shell command, and publishes the artifact again with the same file path in the same response: the ${at} call(s) first, then the publish, with no ${qe} and without waiting for the ${at} result. The calls run in the order sent, so the publish carries the edited file. If one of those ${at} calls does not apply, the publish sent in the same response is refused and the artifact stays as it was, so Claude corrects the ${at} and publishes again. Either way, Claude reads the file first only when its text is not in this conversation or the change cannot be placed exactly from that text.`;
function XVs(e) {
  return e ? o : n;
}
var h = `To make a small change to an artifact you already published with the ${Lt} tool in this conversation, use ${at}, not a shell command, and publish the artifact again with the same file path in the same response: the ${at} call(s) first, then the ${Lt} publish, with no ${qe} and without waiting for the ${at} result. Only if the file's text is not in this conversation, or you can't place the change exactly from it, read the file before editing it. The calls run in the order sent, so the publish sends the edited file; a publish sent in the same response as a failed ${at} of that file is refused and leaves the artifact as it was, so correct the ${at} and publish again.`,
  r = `To make a small change to a page you already published with the ${Lt} tool in this conversation, send it as \`edits\` (old_str/new_str pairs copied exactly from the file as it now stands) on an ${Lt} publish of the same \`file_path\`: that one call changes the file and the page together, with no ${qe} and no ${at}. For a change to several files at once, or a rewrite of most of a page, use ${at} on the file(s), not a shell command, and publish the artifact again with the same \`file_path\` in the same response: the ${at} call(s) first, then the ${Lt} publish, with no ${qe} and without waiting for the ${at} result. The calls run in the order sent, so the publish carries the edited file; a publish sent in the same response as a failed ${at} of that file is refused and leaves the artifact as it was, so correct the ${at} and publish again. Either way, read the file first only if its text is not in this conversation or you can't place the change exactly from it.`;
function a(e, t) {
  return e.some((i) => Rt(i, t));
}
function l() {
  return import.meta
    .require(
      __filePath_56e9cd896641b5fa(
        new __filePath_56e9cd896641b5fa_URL("./chunk-43wqswae.js", import.meta.url)
      )
    )
    .artifactPublishEditsOn();
}
function JVs(e) {
  if (!a(e, Lt) || !a(e, at)) return null;
  return l() ? r : h;
}
export { YVs, XVs, JVs };

//# sourceMappingURL=chunk-tfz03atz.js.map
