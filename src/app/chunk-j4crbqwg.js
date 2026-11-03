// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-4cgvah10.js";
import { fo } from "./chunk-brszmkb3.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import { _, te } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import { re } from "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-8w2npe9a.js";
import "./chunk-xe386mry.js";
import "./chunk-4kxy1036.js";
import "./chunk-cjnzngfc.js";
import { it } from "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import { p } from "./chunk-qmkm2x59.js";
import "./chunk-ynkasage.js";
import { Aun, Cun } from "./chunk-36ftx0qt.js";
import "./chunk-5bfrnkry.js";
import { ge, Tt } from "./chunk-522pfw8k.js";
import "./chunk-m25ae09s.js";
import "./chunk-f9x3sh8a.js";
import {
  appendFile as I,
  chmod as P,
  mkdir as B,
  readdir as b,
  rmdir as E,
  unlink as y
} from "fs/promises";
import { createServer as N } from "net";
import { hostname as M, platform as u } from "os";
import { join as F } from "path";
var U = "1.0.0",
  w = 1048576,
  T = 64,
  x = 2000,
  k = void 0;
function s(e, ...t) {
  if (k) {
    let n = new Date().toISOString(),
      r = t.length > 0 ? " " + _(t) : "",
      o = `[${n}] [Claude Chrome Native Host] ${e}${r}
`;
    I(k, o).catch(() => {});
  }
  console.error(`[Claude Chrome Native Host] ${e}`, ...t);
}
var C;
async function L() {
  let e = (C ??= z());
  try {
    let t = await e;
    if (t !== void 0) return t;
  } catch {
    s("Computer name lookup failed");
  }
  if (C === e) C = void 0;
  try {
    return d(M());
  } catch {
    return;
  }
}
function d(e) {
  let t = e
    .replace(/\p{Cc}/gu, "")
    .trim()
    .replace(/\.local$/i, "")
    .trim();
  return t ? re(t, T) : void 0;
}
async function z() {
  switch (u()) {
    case "darwin": {
      let { stdout: e, code: t } = await it("/usr/sbin/scutil", ["--get", "ComputerName"], {
        timeout: x,
        useCwd: !1,
        stderr: "ignore"
      });
      return t === 0 ? d(e) : void 0;
    }
    case "win32":
      return d(i.COMPUTERNAME ?? "");
    default:
      return d(M());
  }
}
function c(e) {
  let t = Buffer.from(e, "utf-8"),
    n = Buffer.alloc(4);
  (n.writeUInt32LE(t.length, 0), process.stdout.write(n), process.stdout.write(t));
}
async function ee() {
  return fo("chrome_native_host_run", async () => {
    s("Initializing...");
    let e = new S(),
      t = new R();
    await e.start();
    while (!0) {
      let n = await t.read();
      if (n === null) break;
      await e.handleMessage(n);
    }
    await e.stop();
  });
}
var D = p(() => Tt({ type: ge() }).passthrough());
class S {
  mcpClients = new Map();
  nextClientId = 1;
  server = null;
  running = !1;
  socketPath = null;
  async start() {
    if (this.running) return;
    if (((this.socketPath = Cun()), u() !== "win32")) {
      let e = Aun();
      (await y(e).catch(() => {}),
        await B(e, { recursive: !0, mode: 448 }),
        await P(e, 448).catch(() => {}));
      try {
        let t = await b(e);
        for (let n of t) {
          if (!n.endsWith(".sock")) continue;
          let r = parseInt(n.replace(".sock", ""), 10);
          if (isNaN(r)) continue;
          try {
            process.kill(r, 0);
          } catch {
            (await y(F(e, n)).catch(() => {}), s(`Removed stale socket for PID ${r}`));
          }
        }
      } catch {}
    }
    if (
      (s(`Creating socket listener: ${this.socketPath}`),
      (this.server = N((e) => this.handleMcpClient(e))),
      await new Promise((e, t) => {
        (this.server.listen(this.socketPath, () => {
          (s("Socket server listening for connections"), (this.running = !0), e());
        }),
          this.server.on("error", (n) => {
            (s("Socket server error:", n), t(n));
          }));
      }),
      u() !== "win32")
    )
      try {
        (await P(this.socketPath, 384), s("Socket permissions set to 0600"));
      } catch (e) {
        s("Failed to set socket permissions:", e);
      }
  }
  async stop() {
    if (!this.running) return;
    for (let [, e] of this.mcpClients) e.socket.destroy();
    if ((this.mcpClients.clear(), this.server))
      (await new Promise((e) => {
        this.server.close(() => e());
      }),
        (this.server = null));
    if (u() !== "win32" && this.socketPath) {
      try {
        (await y(this.socketPath), s("Cleaned up socket file"));
      } catch {}
      try {
        let e = Aun();
        if ((await b(e)).length === 0) (await E(e), s("Removed empty socket directory"));
      } catch {}
    }
    this.running = !1;
  }
  async isRunning() {
    return this.running;
  }
  async handleMessage(e) {
    let t;
    try {
      t = te(e);
    } catch (o) {
      (s("Invalid JSON from Chrome:", o.message),
        c(_({ type: "error", error: "Invalid message format" })));
      return;
    }
    let n = D().safeParse(t);
    if (!n.success) {
      (s("Invalid message from Chrome:", n.error.message),
        c(_({ type: "error", error: "Invalid message format" })));
      return;
    }
    let r = n.data;
    switch ((s(`Handling Chrome message type: ${r.type}`), r.type)) {
      case "ping":
        (s("Responding to ping"), c(_({ type: "pong", timestamp: Date.now() })));
        break;
      case "get_status":
        L()
          .then((o) => c(_({ type: "status_response", native_host_version: U, computer_name: o })))
          .catch((o) => s("Failed to send status_response:", o));
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          s(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...l } = r,
            a = Buffer.from(_(l), "utf-8"),
            f = Buffer.alloc(4);
          f.writeUInt32LE(a.length, 0);
          let h = Buffer.concat([f, a]);
          for (let [m, g] of this.mcpClients)
            try {
              g.socket.write(h);
            } catch (v) {
              s(`Failed to send to MCP client ${m}:`, v);
            }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          s(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...l } = r,
            a = Buffer.from(_(l), "utf-8"),
            f = Buffer.alloc(4);
          f.writeUInt32LE(a.length, 0);
          let h = Buffer.concat([f, a]);
          for (let [m, g] of this.mcpClients)
            try {
              g.socket.write(h);
            } catch (v) {
              s(`Failed to send notification to MCP client ${m}:`, v);
            }
        }
        break;
      }
      default:
        (s(`Unknown message type: ${r.type}`),
          c(_({ type: "error", error: `Unknown message type: ${r.type}` })));
    }
  }
  handleMcpClient(e) {
    let t = this.nextClientId++,
      n = { id: t, socket: e, buffer: Buffer.alloc(0) };
    (this.mcpClients.set(t, n),
      s(`MCP client ${t} connected. Total clients: ${this.mcpClients.size}`),
      c(_({ type: "mcp_connected" })),
      e.on("data", (r) => {
        n.buffer = Buffer.concat([n.buffer, r]);
        while (n.buffer.length >= 4) {
          let o = n.buffer.readUInt32LE(0);
          if (o === 0 || o > w) {
            (s(`Invalid message length from MCP client ${t}: ${o}`), e.destroy());
            return;
          }
          if (n.buffer.length < 4 + o) break;
          let l = n.buffer.slice(4, 4 + o);
          n.buffer = n.buffer.slice(4 + o);
          try {
            let a = te(l.toString("utf-8"));
            (s(`Forwarding tool request from MCP client ${t}: ${a.method}`),
              c(_({ type: "tool_request", method: a.method, params: a.params })));
          } catch (a) {
            s(`Failed to parse tool request from MCP client ${t}:`, a);
          }
        }
      }),
      e.on("error", (r) => {
        s(`MCP client ${t} error: ${r}`);
      }),
      e.on("close", () => {
        (s(`MCP client ${t} disconnected. Remaining clients: ${this.mcpClients.size - 1}`),
          this.mcpClients.delete(t),
          c(_({ type: "mcp_disconnected" })));
      }));
  }
}
class R {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = !1;
  constructor() {
    (process.stdin.on("data", (e) => {
      ((this.buffer = Buffer.concat([this.buffer, e])), this.tryProcessMessage());
    }),
      process.stdin.on("end", () => {
        if (((this.closed = !0), this.pendingResolve))
          (this.pendingResolve(null), (this.pendingResolve = null));
      }),
      process.stdin.on("error", () => {
        if (((this.closed = !0), this.pendingResolve))
          (this.pendingResolve(null), (this.pendingResolve = null));
      }));
  }
  tryProcessMessage() {
    if (!this.pendingResolve) return;
    if (this.buffer.length < 4) return;
    let e = this.buffer.readUInt32LE(0);
    if (e === 0 || e > w) {
      (s(`Invalid message length: ${e}`), this.pendingResolve(null), (this.pendingResolve = null));
      return;
    }
    if (this.buffer.length < 4 + e) return;
    let t = this.buffer.subarray(4, 4 + e);
    this.buffer = this.buffer.subarray(4 + e);
    let n = t.toString("utf-8");
    (this.pendingResolve(n), (this.pendingResolve = null));
  }
  async read() {
    if (this.closed) return null;
    if (this.buffer.length >= 4) {
      let e = this.buffer.readUInt32LE(0);
      if (e > 0 && e <= w && this.buffer.length >= 4 + e) {
        let t = this.buffer.subarray(4, 4 + e);
        return ((this.buffer = this.buffer.subarray(4 + e)), t.toString("utf-8"));
      }
    }
    return new Promise((e) => {
      ((this.pendingResolve = e), this.tryProcessMessage());
    });
  }
}
export { ee as runChromeNativeHost };

//# sourceMappingURL=chunk-j4crbqwg.js.map
