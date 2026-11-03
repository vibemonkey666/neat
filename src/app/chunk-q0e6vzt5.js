// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { $_t } from "./chunk-xhsb90bq.js";
class btn extends TransformStream {
  constructor({ onError: t, onRetry: a, onComment: o } = {}) {
    let s;
    super({
      start(e) {
        s = $_t({
          onEvent: (r) => {
            e.enqueue(r);
          },
          onError(r) {
            t === "terminate" ? e.error(r) : typeof t == "function" && t(r);
          },
          onRetry: a,
          onComment: o
        });
      },
      transform(e) {
        s.feed(e);
      }
    });
  }
}
export { btn };

//# sourceMappingURL=chunk-q0e6vzt5.js.map
