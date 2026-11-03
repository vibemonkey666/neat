import {
  fileURLToPath as __filePath_48e9d19dda49c32e,
  URL as __filePath_48e9d19dda49c32e_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { br } from "./chunk-wejdb0zs.js";
import { i } from "./chunk-cj37hmns.js";
import { SSe, iy } from "./chunk-4nzy53ma.js";
import { R_e } from "./chunk-pbffp8rf.js";
function Ype() {
  let r = br();
  if (r.builtinPluginsInitialized) return;
  if (
    ((r.builtinPluginsInitialized = !0),
    R_e("cc-plugin-sec-default", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-e7y9p5bm.js", import.meta.url)
        )
      )
    ),
    R_e("cc-plugin-agents-md", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-h7vz7077.js", import.meta.url)
        )
      )
    ),
    R_e("cc-plugin-telemetry", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-m143cp0d.js", import.meta.url)
        )
      )
    ),
    i.CLAUDE_CODE_ENTRYPOINT !== "local-agent")
  ) {
    if (
      (R_e("cc-plugin-plugin-authoring", () =>
        import.meta.require(
          __filePath_48e9d19dda49c32e(
            new __filePath_48e9d19dda49c32e_URL("./chunk-shyejxf8.js", import.meta.url)
          )
        )
      ),
      R_e("cc-plugin-mods-guide", () =>
        import.meta.require(
          __filePath_48e9d19dda49c32e(
            new __filePath_48e9d19dda49c32e_URL("./chunk-ags2cm0a.js", import.meta.url)
          )
        )
      ),
      !SSe())
    )
      (R_e("cc-plugin-tips", () =>
        import.meta.require(
          __filePath_48e9d19dda49c32e(
            new __filePath_48e9d19dda49c32e_URL("./chunk-akrpc6v9.js", import.meta.url)
          )
        )
      ),
        R_e("cc-plugin-mermaid", () =>
          import.meta.require(
            __filePath_48e9d19dda49c32e(
              new __filePath_48e9d19dda49c32e_URL("./chunk-s9h9mhy8.js", import.meta.url)
            )
          )
        ));
  }
  let e = i.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !SSe();
  if (e || iy() === "remote")
    R_e("cc-plugin-responsive-mode", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-zb93n78m.js", import.meta.url)
        )
      )
    );
  if (e)
    R_e("cc-plugin-diff", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-f2sw2f56.js", import.meta.url)
        )
      )
    );
  if (i.CLAUDE_CODE_ENTRYPOINT !== "local-agent")
    R_e("cc-plugin-you-should-know", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-k9eem9n9.js", import.meta.url)
        )
      )
    );
  if (e)
    R_e("cc-plugin-easel", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-7kf2m8dc.js", import.meta.url)
        )
      )
    );
  if (e)
    R_e("cc-plugin-claude-test", () =>
      import.meta.require(
        __filePath_48e9d19dda49c32e(
          new __filePath_48e9d19dda49c32e_URL("./chunk-pmkym69z.js", import.meta.url)
        )
      )
    );
}
export { Ype };

//# sourceMappingURL=chunk-z0k4ntg4.js.map
