import {
  fileURLToPath as __filePath_c1a302bd95af9d66,
  URL as __filePath_c1a302bd95af9d66_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { Ye, Ke, R, d } from "./chunk-fs43t96t.js";
import { _, Yf, am, Fes, iit, BH, t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { si } from "./chunk-4hww8411.js";
import { wi } from "./chunk-d54avynm.js";
import { ss } from "./chunk-ewvf3tep.js";
import { Gf } from "./chunk-qakn3b85.js";
import {
  MN,
  mXe,
  txr,
  orn,
  zOs,
  nxr,
  FEo,
  rxr,
  KOs,
  AWn,
  Fpt,
  ixr,
  lrn,
  drn,
  lle
} from "./chunk-j0tbz6ra.js";
import { wb } from "./chunk-at88wjsn.js";
import { g } from "./chunk-brszmkb3.js";
import { gUt } from "./chunk-6h7ejyet.js";
import { G2e, tn } from "./chunk-wany0nxw.js";
import { KC } from "./chunk-783pymr7.js";
import { Z1, R3s, x3s, o0, P3s, I3s, qG, O3s, M3s } from "./chunk-39ayby14.js";
import { Wgt } from "./chunk-nzbb091t.js";
import { cb } from "./chunk-er8bc2me.js";
import { jA, Ede, kde } from "./chunk-j9t13sne.js";
import { jdn } from "./chunk-etvsft4s.js";
import { K8, DWt } from "./chunk-stzrz9z3.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, T, u } from "./chunk-0bqrj5ah.js";
var j = p(() =>
    u({ server: o().optional().describe("Optional server name to filter resources by") })
  ),
  B = p(() =>
    T(
      u({
        uri: o().describe("Resource URI"),
        name: o().describe("Resource name"),
        mimeType: o().optional().describe("MIME type of the resource"),
        description: o().optional().describe("Resource description"),
        server: o().describe("Server that provides this resource")
      })
    )
  );
function F(e) {
  let { hasMcpInboundDoor: r } = import.meta.require(
    __filePath_c1a302bd95af9d66(
      new __filePath_c1a302bd95af9d66_URL("./chunk-a4xwypmf.js", import.meta.url)
    )
  );
  if (!Array.isArray(e) || !r()) return e;
  return e
    .filter(H)
    .map(({ uri: a, name: s, mimeType: n, description: h, server: l }) => ({
      uri: P("", a),
      name: P("", s),
      ...(typeof n === "string" && { mimeType: n }),
      ...(typeof h === "string" && { description: h }),
      server: P("", l)
    }));
}
function P(e, r) {
  return typeof r === "string" ? r : e;
}
var EN = tn({
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.server ?? "";
  },
  shouldDefer: !0,
  name: qG,
  aliases: ["ListMcpResources"],
  searchHint: "list resources from connected MCP servers",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return O3s;
  },
  async prompt() {
    return M3s;
  },
  get inputSchema() {
    return j();
  },
  get outputSchema() {
    return B();
  },
  create(e) {
    return {
      async call(r, { signal: a }) {
        let s = e.turnMcpClients.filter((c) => !lrn(c, e.agentId)),
          { server: n } = r,
          h = n ? Fpt(s, n) : s;
        if (n && h.length === 0)
          throw new R(
            `Server "${n}" not found. Available servers: ${s.map((c) => c.name).join(", ")}`,
            "MCP server not found"
          );
        let l = await Promise.all(
          h.map(async (c) => {
            if (!wi(c) || !c.capabilities?.resources) return [];
            let y = import.meta
                .require(
                  __filePath_c1a302bd95af9d66(
                    new __filePath_c1a302bd95af9d66_URL("./chunk-43z4gqzg.js", import.meta.url)
                  )
                )
                .mcpClientModule(),
              m = () => y.ensureConnectedClient(c, { signal: a, context: "MCP resource listing" });
            try {
              let S = await m();
              if (lrn(S, e.agentId)) return [];
              let M = await si(y.fetchResourcesForClient(S), a, () => new Ye());
              if (
                (c.config.type === "claudeai-proxy" ||
                  (c.config.type === "http" && Gf(c.config.url))) &&
                y.getDiscoveryFetchError(M) !== void 0
              ) {
                let f = await m();
                if (f !== S) M = await si(y.fetchResourcesForClient(f), a, () => new Ye());
              }
              let C = M.filter((f) => !gUt(f));
              if (C.length < M.length)
                t(
                  `MCP server "${c.name}": ${M.length - C.length} MCP Apps UI resource(s) left out of ${qG}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${o0} can still read them by URI`
                );
              return C;
            } catch (S) {
              if (!Ke(S)) ss(c.name, d(S));
              return [];
            }
          })
        );
        if (a.aborted) throw new Ye();
        return { data: l.flat() };
      }
    };
  },
  renderToolUseMessage(e) {
    return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
  },
  userFacingName: () => "listMcpResources",
  stripForCreation: F,
  mapToolResultToToolResultBlockParam(e, r) {
    if (!e || e.length === 0)
      return {
        tool_use_id: r,
        type: "tool_result",
        content:
          "No resources found. MCP servers may still provide tools even if they have no resources."
      };
    return { tool_use_id: r, type: "tool_result", content: _(e) };
  }
});
var U = { size: K8, textToSanitize: 1048576 },
  W = 16,
  Y = 256,
  q = 16 * U.textToSanitize,
  V = 65536;
function z() {
  let e = { size: 0, sixteenthsToSanitize: 0, nonAsciiUnits: 0 };
  return (r) => {
    if (!O(e)) return !1;
    return ((e.size += Y), A(r, e, !0));
  };
}
function XDt() {
  let e = z(),
    r = z(),
    a = !1;
  return (s) => {
    if (a || !e(s)) return;
    let n = BH(s);
    return ((a = !r(n)), a ? void 0 : n);
  };
}
function Z8e(e, r, a) {
  return `Skipped the last ${r} of ${a} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}
function O(e) {
  return e.size <= U.size && e.sixteenthsToSanitize <= q;
}
function A(e, r, a = !1, s = !1) {
  if (((r.size += W), typeof e === "string")) L(e, r, s);
  else if (Array.isArray(e)) {
    for (let n of e) if (!A(n, r)) return !1;
  } else if (H(e)) {
    for (let n in e) if ((L(n, r), !A(e[n], r, !1, a && n === "name"))) return !1;
  }
  return O(r);
}
function L(e, r, a = !1) {
  if (((r.size += e.length), !O(r) || Fes(e))) return;
  if (a) {
    r.sixteenthsToSanitize += 16 * e.length;
    return;
  }
  r.sixteenthsToSanitize += e.length;
  for (let s = 0; s < e.length && O(r); s++) {
    let n = e.charCodeAt(s);
    if (n > 127 && (r.nonAsciiUnits++ < V || K()[n] === 1)) r.sixteenthsToSanitize += 15;
  }
}
var K = wb(() => {
  let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
  return Uint8Array.from({ length: 65536 }, (r, a) => {
    let s = String.fromCharCode(a);
    return e.test(s) || iit(s) !== s ? 1 : 0;
  });
});
function k() {
  return import.meta.require(
    __filePath_c1a302bd95af9d66(
      new __filePath_c1a302bd95af9d66_URL("./chunk-43z4gqzg.js", import.meta.url)
    )
  );
}
function X() {
  return k().mcpSdkErrorClassificationModule();
}
function Z() {
  return k().mcpClientModule();
}
function x() {
  return k().mcpDirectoryReadModule();
}
var G = p(() =>
    u({
      server: o().describe("The MCP server name"),
      uri: o().describe("The directory resource URI to list")
    })
  ),
  J = p(() =>
    u({
      resources: T(
        u({
          uri: o().describe("Child resource URI"),
          name: o().describe("Child resource name"),
          mimeType: o().optional().describe("Child MIME type")
        })
      ).describe(
        `Direct children of the directory resource. Subdirectories appear with mimeType "${DWt}".`
      ),
      error: o()
        .optional()
        .describe("Human-readable error when the server could not list the directory")
    })
  ),
  S4 = tn({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.server} ${e.uri}`;
    },
    shouldDefer: !0,
    name: Z1,
    aliases: ["ReadMcpResourceDir"],
    searchHint: "list the children of an MCP directory resource",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return R3s;
    },
    async prompt() {
      return x3s;
    },
    get inputSchema() {
      return G();
    },
    get outputSchema() {
      return J();
    },
    create(e) {
      return {
        async call(r, { signal: a }) {
          let s = e.turnMcpClients,
            { server: n, uri: h } = r,
            l = ixr(s, n);
          if ((drn(l, e.agentId), !jdn()))
            return {
              data: { resources: [], error: "Directory listing is not enabled in this build." }
            };
          if (!x().serverDeclaresDirectoryRead(l.capabilities))
            return {
              data: {
                resources: [],
                error: `Server "${l.name}" does not support directory listing.`
              }
            };
          if (l.config.pluginSource)
            (KC(l.config.pluginSource),
              MN(l.config.pluginSource, "mcp", { kind: "mcp-server", name: l.name }));
          let c = Q(h, orn(l.name, e.messages(), e.inheritedMcpSkillMessages()));
          if (c !== void 0) return { data: c };
          let y = await Z().ensureConnectedClient(l, {
            signal: a,
            context: "MCP resource directory read"
          });
          drn(y, e.agentId);
          let m;
          try {
            m = await x().readMcpDirectory(y, h);
          } catch (f) {
            let i = X();
            if (i.isMcpNotADirectoryError(f))
              return (
                ss(
                  l.name,
                  `resources/directory/read returned ${i.getMcpErrorCode(f)} \u2014 not a directory`
                ),
                {
                  data: {
                    resources: [],
                    error: `Not a directory resource: ${h}. If it is a file resource, use ${o0} instead.`
                  }
                }
              );
            throw f;
          }
          let S = z(),
            M = z(),
            C = (
              await lle(m, (f) => {
                if (!S([f.uri, f.name, f.mimeType])) return [];
                let i = {
                  uri: Yf(f.uri),
                  name: BH(f.name),
                  mimeType: f.mimeType !== void 0 ? BH(f.mimeType) : void 0
                };
                return M([i.uri, i.name, i.mimeType]) ? [i] : [];
              })
            ).flat();
          if (C.length < m.length)
            return (
              ss(l.name, Z8e("directory entries", m.length, m.length)),
              { data: { resources: [], error: `The listing of ${h} is too large to read.` } }
            );
          return { data: { resources: C } };
        }
      };
    },
    renderToolUseMessage(e) {
      if (!e.uri || !e.server) return null;
      return `List directory resource "${e.uri}" from server "${e.server}"`;
    },
    userFacingName() {
      return "readMcpResourceDir";
    },
    mapToolResultToToolResultBlockParam(e, r) {
      if (e.error) return { tool_use_id: r, type: "tool_result", content: e.error };
      let a = e.resources.map((n) => `${n.name}${n.mimeType === DWt ? "/" : ""}`).join(`
`),
        s =
          e.resources.length > 0
            ? `Directory listing (${e.resources.length} ${I(e.resources.length, "entry", "entries")}):
${a}`
            : "Directory is empty.";
      return {
        tool_use_id: r,
        type: "tool_result",
        content: `${s}

${_(e)}`
      };
    }
  });
function Q(e, r) {
  if (r.length > 0 && Buffer.byteLength(e) > mXe)
    return {
      resources: [],
      error: `An address of ${Buffer.byteLength(e)} bytes: This directory was not read, because its address is longer than ${mXe} bytes. While a skill from this server is loaded, this app reads a directory only at an address of ${mXe} bytes or less.${r.map((s) => AWn(s.skillName)).join("")}`
    };
  if (!r.some((s) => e === s.root || e.startsWith(`${s.root}/`))) {
    let s = r.filter((n) => FEo(`${e}/`, n.root));
    if (s.length > 0)
      return {
        resources: [],
        error: `${G2e(e)}: This directory was not read, because its address begins with another spelling of the address of a loaded skill. Write that part exactly as the skill writes it.${s.map((n) => AWn(n.skillName)).join("")}`
      };
    return r.length > 0 && !txr(e)
      ? {
          resources: [],
          error: `${G2e(e)}: This directory was not read, because its address is not a valid URL. While a skill from this server is loaded, this app reads a directory only at a valid URL. Write the address as the server or the skill gives it.${r.map((n) => AWn(n.skillName)).join("")}`
        }
      : void 0;
  }
  let a = KOs(e, r);
  if (a === void 0)
    return {
      resources: [],
      error: `${G2e(e)} is not a directory of any skill loaded from this server: no loaded skill lists a file under it. If it is a file, use ${o0} instead.`
    };
  return {
    resources: a.map((s) => ({
      uri: Yf(s.uri),
      name: am(s.uri.slice(s.uri.lastIndexOf("/") + 1)),
      ...(s.isDirectory && { mimeType: DWt })
    }))
  };
}
function D() {
  return import.meta.require(
    __filePath_c1a302bd95af9d66(
      new __filePath_c1a302bd95af9d66_URL("./chunk-43z4gqzg.js", import.meta.url)
    )
  );
}
function ee() {
  return D().mcpSdkErrorClassificationModule();
}
function N() {
  return D().mcpClientModule();
}
function re() {
  return D().mcpDirectoryReadModule();
}
var te = p(() =>
    u({
      server: o().describe("The MCP server name"),
      uri: o().describe("The resource URI to read")
    })
  ),
  oe = p(() =>
    u({
      contents: T(
        u({
          uri: o().describe("Resource URI"),
          mimeType: o().optional().describe("MIME type of the content"),
          text: o().optional().describe("Text content of the resource"),
          blobSavedTo: o().optional().describe("Path where binary blob content was saved")
        })
      ),
      error: o()
        .optional()
        .describe("Human-readable error when the server could not read the resource")
    })
  ),
  kN = tn({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.server} ${e.uri}`;
    },
    shouldDefer: !0,
    name: o0,
    aliases: ["ReadMcpResource"],
    searchHint: "read a specific MCP resource by URI",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return P3s;
    },
    async prompt() {
      return I3s;
    },
    get inputSchema() {
      return te();
    },
    get outputSchema() {
      return oe();
    },
    create(e) {
      return {
        async call(r, { signal: a }) {
          let { turnMcpClients: s, storageV5: n } = e,
            { server: h, uri: l } = r,
            c = ixr(s, h);
          if ((drn(c, e.agentId), c.config.pluginSource))
            (KC(c.config.pluginSource),
              MN(c.config.pluginSource, "mcp", { kind: "mcp-server", name: c.name }));
          let y = await N().ensureConnectedClient(c, { signal: a, context: "MCP resource read" });
          drn(y, e.agentId);
          let m = nxr(l, orn(y.name, e.messages(), e.inheritedMcpSkillMessages())),
            S = async (i, b) => ({
              contents: [],
              error: await zOs({ connected: y, skills: i, uri: l, reason: b, signal: a })
            });
          if (m.case === "unlisted") return { data: await S(m.skills, m.reason) };
          let M;
          try {
            M = await Wgt(y, l);
          } catch (i) {
            let b = ee();
            if (b.isMcpMethodNotFoundError(i))
              return (
                ss(
                  c.name,
                  "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads"
                ),
                {
                  data: {
                    contents: [],
                    error: `Server "${c.name}" advertises resource support but does not implement resource reads.`
                  }
                }
              );
            if (b.isMcpResourceNotFoundError(i)) {
              if (
                (ss(
                  c.name,
                  `resources/read returned ${b.getMcpErrorCode(i)} \u2014 resource not found`
                ),
                N().invalidateMcpResourceListCaches(y),
                m.case === "listed")
              )
                return { data: await S(m.skills, "not_found") };
              let E = re().serverDeclaresDirectoryRead(y.capabilities)
                ? ` If the URI is a directory resource, use ${Z1} instead.`
                : "";
              return {
                data: {
                  contents: [],
                  error: `Resource not found: ${l} \u2014 it may have been deleted or the URI is stale. Re-run ${qG} to refresh.${E}`
                }
              };
            }
            throw i;
          }
          let C = M.contents;
          if (m.case === "listed") {
            let i = rxr(M.contents, l, m.rows);
            if (!i.ok) return { data: await S(m.skills, i.reason) };
            (g("skill_mcp_read"), (C = [i.item]));
          }
          return {
            data: {
              contents: await Promise.all(
                C.map(async (i, b) => {
                  if ("text" in i) return { uri: i.uri, mimeType: i.mimeType, text: i.text };
                  if (!("blob" in i) || typeof i.blob !== "string")
                    return { uri: i.uri, mimeType: i.mimeType };
                  let E = `mcp-resource-${Date.now()}-${b}-${Math.random().toString(36).slice(2, 8)}`,
                    v = await jA(Buffer.from(i.blob, "base64"), i.mimeType, E, void 0, n);
                  if ("error" in v) {
                    if (cb() !== void 0)
                      return {
                        uri: i.uri,
                        mimeType: i.mimeType,
                        text: kde(i.mimeType, Buffer.byteLength(i.blob, "base64"))
                      };
                    return {
                      uri: i.uri,
                      mimeType: i.mimeType,
                      text: `Binary content could not be saved to disk: ${v.error}`
                    };
                  }
                  return {
                    uri: i.uri,
                    mimeType: i.mimeType,
                    blobSavedTo: v.filepath,
                    text: Ede(
                      v.filepath,
                      i.mimeType,
                      v.size,
                      `[Resource from ${c.name} at ${i.uri}] `
                    )
                  };
                })
              )
            }
          };
        }
      };
    },
    renderToolUseMessage(e) {
      if (!e.uri || !e.server) return null;
      return `Read resource "${e.uri}" from server "${e.server}"`;
    },
    userFacingName() {
      return "readMcpResource";
    },
    mapToolResultToToolResultBlockParam(e, r) {
      if (e.error) return { tool_use_id: r, type: "tool_result", content: e.error };
      return { tool_use_id: r, type: "tool_result", content: _(e) };
    }
  });
export { EN, XDt, Z8e, S4, kN };

//# sourceMappingURL=chunk-tm6hmh5z.js.map
