import {
  fileURLToPath as __filePath_5a33ba7a8a457b54,
  URL as __filePath_5a33ba7a8a457b54_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ht } from "./chunk-gdcb8skc.js";
import { ra } from "./chunk-ajtyjx88.js";
import { at, qt, Be, At } from "./chunk-at88wjsn.js";
import { qe } from "./chunk-0np0053t.js";
var r = null,
  s = null,
  n = null,
  e = {
    name: import.meta.require(
      __filePath_5a33ba7a8a457b54(
        new __filePath_5a33ba7a8a457b54_URL("./chunk-2rgbd01q.js", import.meta.url)
      )
    ).ARTIFACT_TOOL_NAME,
    names: import.meta.require(
      __filePath_5a33ba7a8a457b54(
        new __filePath_5a33ba7a8a457b54_URL("./chunk-2rgbd01q.js", import.meta.url)
      )
    ),
    ui: import.meta.require(
      __filePath_5a33ba7a8a457b54(
        new __filePath_5a33ba7a8a457b54_URL("./chunk-1pv5kcqt.js", import.meta.url)
      )
    )
  },
  M = [
    ht,
    Be,
    at,
    qt,
    qe,
    ra,
    At,
    ...(r ? [r.name] : []),
    ...(s ? [s.name] : []),
    ...(n ? [n.name] : []),
    ...(e
      ? [
          e.name,
          e.names.ARTIFACT_COMMENTS_TOOL_NAME,
          e.names.ARTIFACT_DATA_TOOL_NAME,
          e.names.ARTIFACT_CHECK_TOOL_NAME
        ]
      : [])
  ],
  T = {
    get [ht]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-acrg886n.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    get [Be]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-y4ae0e4w.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    get [at]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-n6d40t9p.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    get [qt]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-v1tnywp7.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    get [qe]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-3v7btjwc.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    get [ra]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-fdpv147k.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    get [At]() {
      return import.meta.require(
        __filePath_5a33ba7a8a457b54(
          new __filePath_5a33ba7a8a457b54_URL("./chunk-9ymqjgp3.js", import.meta.url)
        )
      ).renderToolUseMessage;
    },
    ...(r && { [r.name]: r.ui.renderToolUseMessage }),
    ...(s && { [s.name]: s.ui.renderToolUseMessage }),
    ...(n && { [n.name]: n.ui.renderToolUseMessage }),
    ...(e && {
      [e.name]: e.ui.renderToolUseLine,
      [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage,
      [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage,
      [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage
    })
  };
function tlt(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return gxt(o.name, t, l);
}
function gxt(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null;
}
export { tlt, gxt };

//# sourceMappingURL=chunk-2vbdj34c.js.map
