// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { homedir as r } from "os";
import { join as o } from "path";
function Nho() {
  if (O() === "windows" && i.APPDATA) return o(i.APPDATA, "gcloud");
  return o(r(), ".config", "gcloud");
}
function eFn() {
  return i.CLOUDSDK_CONFIG || Nho();
}
export { Nho, eFn };

//# sourceMappingURL=chunk-7yf7msy4.js.map
