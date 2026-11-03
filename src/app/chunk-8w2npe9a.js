// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { is } from "./chunk-2qx8pe6s.js";
import { es, J, cm } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { R, E, Er } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { EB, i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { J$ } from "./chunk-afxq0vrk.js";
import { wo } from "./chunk-rnxkk435.js";
import { oW, dlr } from "./chunk-4zb0cwjd.js";
import { Ce, x, Fe } from "./chunk-a2y39866.js";
var ut = x(function (ci, at) {
  at.exports = st;
  st.sync = Hn;
  var ot = Fe("fs");
  function qn(e, n) {
    var r = n.pathExt !== void 0 ? n.pathExt : process.env.PATHEXT;
    if (!r) return !0;
    if (((r = r.split(";")), r.indexOf("") !== -1)) return !0;
    for (var o = 0; o < r.length; o++) {
      var s = r[o].toLowerCase();
      if (s && e.substr(-s.length).toLowerCase() === s) return !0;
    }
    return !1;
  }
  function it(e, n, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return !1;
    return qn(n, r);
  }
  function st(e, n, r) {
    ot.stat(e, function (o, s) {
      r(o, o ? !1 : it(s, e, n));
    });
  }
  function Hn(e, n) {
    return it(ot.statSync(e), e, n);
  }
});
var pt = x(function (di, ft) {
  ft.exports = dt;
  dt.sync = Vn;
  var ct = Fe("fs");
  function dt(e, n, r) {
    ct.stat(e, function (o, s) {
      r(o, o ? !1 : lt(s, n));
    });
  }
  function Vn(e, n) {
    return lt(ct.statSync(e), n);
  }
  function lt(e, n) {
    return e.isFile() && Xn(e, n);
  }
  function Xn(e, n) {
    var { mode: r, uid: o, gid: s } = e,
      u = n.uid !== void 0 ? n.uid : process.getuid && process.getuid(),
      d = n.gid !== void 0 ? n.gid : process.getgid && process.getgid(),
      l = parseInt("100", 8),
      f = parseInt("010", 8),
      p = parseInt("001", 8),
      h = l | f,
      S = r & p || (r & f && s === d) || (r & l && o === u) || (r & h && u === 0);
    return S;
  }
});
var gt = x(function (fi, mt) {
  var li = Fe("fs"),
    Y;
  if (global.TESTING_WINDOWS) Y = ut();
  else Y = pt();
  mt.exports = ge;
  ge.sync = Yn;
  function ge(e, n, r) {
    if (typeof n === "function") ((r = n), (n = {}));
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function (o, s) {
        ge(e, n || {}, function (u, d) {
          if (u) s(u);
          else o(d);
        });
      });
    }
    Y(e, n || {}, function (o, s) {
      if (o) {
        if (o.code === "EACCES" || (n && n.ignoreErrors)) ((o = null), (s = !1));
      }
      r(o, s);
    });
  }
  function Yn(e, n) {
    try {
      return Y.sync(e, n || {});
    } catch (r) {
      if ((n && n.ignoreErrors) || r.code === "EACCES") return !1;
      else throw r;
    }
  }
});
var bt = x(function (pi, xt) {
  var _ = process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys",
    Z = Fe("path"),
    Zn = _ ? ";" : ":",
    he = gt(),
    ht = (e) => Object.assign(Error(`not found: ${e}`), { code: "ENOENT" }),
    yt = (e, n) => {
      let r = n.colon || Zn,
        o =
          e.match(/\//) || (_ && e.match(/\\/))
            ? [""]
            : [...(_ ? [process.cwd()] : []), ...(n.path || process.env.PATH || "").split(r)],
        s = _ ? n.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "",
        u = _ ? s.split(r) : [""];
      if (_) {
        if (e.indexOf(".") !== -1 && u[0] !== "") u.unshift("");
      }
      return { pathEnv: o, pathExt: u, pathExtExe: s };
    },
    St = (e, n, r) => {
      if (typeof n === "function") ((r = n), (n = {}));
      if (!n) n = {};
      let { pathEnv: o, pathExt: s, pathExtExe: u } = yt(e, n),
        d = [],
        l = (p) =>
          new Promise((h, S) => {
            if (p === o.length) return n.all && d.length ? h(d) : S(ht(e));
            let y = o[p],
              w = /^".*"$/.test(y) ? y.slice(1, -1) : y,
              C = Z.join(w, e),
              I = !w && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + C : C;
            h(f(I, p, 0));
          }),
        f = (p, h, S) =>
          new Promise((y, w) => {
            if (S === s.length) return y(l(h + 1));
            let C = s[S];
            he(p + C, { pathExt: u }, (I, A) => {
              if (!I && A)
                if (n.all) d.push(p + C);
                else return y(p + C);
              return y(f(p, h, S + 1));
            });
          });
      return r ? l(0).then((p) => r(null, p), r) : l(0);
    },
    Qn = (e, n) => {
      n = n || {};
      let { pathEnv: r, pathExt: o, pathExtExe: s } = yt(e, n),
        u = [];
      for (let d = 0; d < r.length; d++) {
        let l = r[d],
          f = /^".*"$/.test(l) ? l.slice(1, -1) : l,
          p = Z.join(f, e),
          h = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
        for (let S = 0; S < o.length; S++) {
          let y = h + o[S];
          try {
            if (he.sync(y, { pathExt: s }))
              if (n.all) u.push(y);
              else return y;
          } catch (w) {}
        }
      }
      if (n.all && u.length) return u;
      if (n.nothrow) return null;
      throw ht(e);
    };
  xt.exports = St;
  St.sync = Qn;
});
var Et = x(function (mi, ye) {
  var Ct = (e = {}) => {
    let n = e.env || process.env;
    if ((e.platform || "linux") !== "win32") return "PATH";
    return (
      Object.keys(n)
        .reverse()
        .find((o) => o.toUpperCase() === "PATH") || "Path"
    );
  };
  ye.exports = Ct;
  ye.exports.default = Ct;
});
var It = x(function (gi, Pt) {
  var Q = Fe("path"),
    Tt = bt(),
    Jn = Et();
  function wt(e, n) {
    let r = e.options.env || process.env,
      o = process.cwd(),
      s = e.options.cwd != null,
      u = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (u)
      try {
        process.chdir(e.options.cwd);
      } catch (l) {}
    let d;
    try {
      d = Tt.sync(e.command, { path: r[Jn({ env: r })], pathExt: n ? Q.delimiter : void 0 });
    } catch (l) {
    } finally {
      if (u)
        try {
          process.chdir(o);
        } catch (l) {
          let f = l !== null && typeof l === "object" && typeof l.code === "string" ? l.code : "";
          if (!(/^E[A-Z0-9]+$/.test(f) || f === "UNKNOWN" || f.startsWith("Unknown system error")))
            throw l;
        }
    }
    if (d) d = Q.resolve(s ? e.options.cwd : "", d);
    return d;
  }
  function er(e) {
    return wt(e) || wt(e, !0);
  }
  Pt.exports = er;
});
var vt = x(function (rr, xe) {
  var Se = /([()\][%!^"`<>&|;, *?])/g;
  function tr(e) {
    return ((e = e.replace(Se, "^$1")), e);
  }
  function nr(e, n) {
    if (
      ((e = `${e}`),
      (e = e.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"')),
      (e = e.replace(/(?=(\\+?)?)\1$/, "$1$1")),
      (e = `"${e}"`),
      (e = e.replace(Se, "^$1")),
      n)
    )
      e = e.replace(Se, "^$1");
    return e;
  }
  rr.command = tr;
  rr.argument = nr;
});
var At = x(function (hi, Ot) {
  Ot.exports = /^#!(.*)/;
});
var _t = x(function (yi, Rt) {
  var sr = At();
  Rt.exports = (e = "") => {
    let n = e.match(sr);
    if (!n) return null;
    let [r, o] = n[0].replace(/#! ?/, "").split(" "),
      s = r.split("/").pop();
    if (s === "env") return o;
    return o ? `${s} ${o}` : s;
  };
});
var kt = x(function (Si, $t) {
  var k = Fe("fs"),
    ar = _t();
  function ur(e) {
    let r = Buffer.alloc(150),
      o;
    try {
      ((o = k.openSync(e, "r")), k.readSync(o, r, 0, 150, 0), k.closeSync(o));
    } catch (s) {}
    return ar(r.toString());
  }
  $t.exports = ur;
});
var Lt = x(function (xi, Gt) {
  var Nt = Fe("path"),
    Ft = It(),
    ee = vt(),
    cr = kt(),
    dr = /\.(?:com|exe)$/i,
    lr = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function fr(e) {
    e.file = Ft(e);
    let n = e.file && cr(e.file);
    if (n) return (e.args.unshift(e.file), (e.command = n), Ft(e));
    return e.file;
  }
  function pr(e) {
    return e;
  }
  function mr(e, n, r) {
    if (n && !Array.isArray(n)) ((r = n), (n = null));
    ((n = n ? n.slice(0) : []), (r = Object.assign({}, r)));
    let o = { command: e, args: n, options: r, file: void 0, original: { command: e, args: n } };
    return r.shell ? o : pr(o);
  }
  Gt.exports = mr;
});
var Dt = x(function (bi, Mt) {
  function gr(e, n) {
    return Object.assign(Error(`${n} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${n} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  function hr(e, n) {
    return;
  }
  function jt(e, n) {
    return null;
  }
  function yr(e, n) {
    return null;
  }
  Mt.exports = { hookChildProcess: hr, verifyENOENT: jt, verifyENOENTSync: yr, notFoundError: gr };
});
var olr = x(function (Ci, F) {
  var te = Fe("child_process"),
    be = Lt(),
    L = Dt();
  function Ut(e, n, r) {
    let o = be(e, n, r),
      s = te.spawn(o.command, o.args, o.options);
    return (L.hookChildProcess(s, o), s);
  }
  function Sr(e, n, r) {
    let o = be(e, n, r),
      s = te.spawnSync(o.command, o.args, o.options);
    return ((s.error = s.error || L.verifyENOENTSync(s.status, o)), s);
  }
  F.exports = Ut;
  F.exports.spawn = Ut;
  F.exports.sync = Sr;
  F.exports._parse = be;
  F.exports._enoent = L;
});
var yn = x(function (Os, hn) {
  var { PassThrough: So } = Fe("stream");
  hn.exports = function () {
    var e = [],
      n = new So({ objectMode: !0 });
    return (
      n.setMaxListeners(0),
      (n.add = r),
      (n.isEmpty = o),
      n.on("unpipe", s),
      Array.prototype.slice.call(arguments).forEach(r),
      n
    );
    function r(u) {
      if (Array.isArray(u)) return (u.forEach(r), this);
      return (
        e.push(u),
        u.once("end", s.bind(null, u)),
        u.once("error", n.emit.bind(n, "error")),
        u.pipe(n, { end: !1 }),
        this
      );
    }
    function o() {
      return e.length == 0;
    }
    function s(u) {
      if (
        ((e = e.filter(function (d) {
          return d !== u;
        })),
        !e.length && n.readable)
      )
        n.end();
    }
  };
});
var Rn = Ce(olr(), 1);
import { Buffer as Lo } from "buffer";
import jo from "path";
import qe from "child_process";
import pe from "process";
function Ee(e) {
  let n =
      typeof e === "string"
        ? `
`
        : `
`.charCodeAt(),
    r = typeof e === "string" ? "\r" : "\r".charCodeAt();
  if (e[e.length - 1] === n) e = e.slice(0, -1);
  if (e[e.length - 1] === r) e = e.slice(0, -1);
  return e;
}
import re from "process";
import j from "path";
import { fileURLToPath as Bt } from "url";
function ne(e = {}) {
  let { env: n = process.env, platform: r = "linux" } = e;
  if (r !== "win32") return "PATH";
  return (
    Object.keys(n)
      .reverse()
      .find((o) => o.toUpperCase() === "PATH") || "Path"
  );
}
var xr = ({
    cwd: e = re.cwd(),
    path: n = re.env[ne()],
    preferLocal: r = !0,
    execPath: o = re.execPath,
    addExecPath: s = !0
  } = {}) => {
    let u = e instanceof URL ? Bt(e) : e,
      d = j.resolve(u),
      l = [];
    if (r) br(l, d);
    if (s) Cr(l, o, d);
    return [...l, n].join(j.delimiter);
  },
  br = (e, n) => {
    let r;
    while (r !== n) (e.push(j.join(n, "node_modules/.bin")), (r = n), (n = j.resolve(n, "..")));
  },
  Cr = (e, n, r) => {
    let o = n instanceof URL ? Bt(n) : n;
    e.push(j.resolve(r, o, ".."));
  },
  Kt = ({ env: e = re.env, ...n } = {}) => {
    e = { ...e };
    let r = ne({ env: e });
    return ((n.path = e[r]), (e[r] = xr(n)), e);
  };
var wr = (e, n, r, o) => {
    if (r === "length" || r === "prototype") return;
    if (r === "arguments" || r === "caller") return;
    let s = Object.getOwnPropertyDescriptor(e, r),
      u = Object.getOwnPropertyDescriptor(n, r);
    if (!Tr(s, u) && o) return;
    Object.defineProperty(e, r, u);
  },
  Tr = function (e, n) {
    return (
      e === void 0 ||
      e.configurable ||
      (e.writable === n.writable &&
        e.enumerable === n.enumerable &&
        e.configurable === n.configurable &&
        (e.writable || e.value === n.value))
    );
  },
  Pr = (e, n) => {
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) return;
    Object.setPrototypeOf(e, r);
  },
  Ir = (e, n) => `/* Wrapped ${e}*/
${n}`,
  vr = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  Or = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  Ar = (e, n, r) => {
    let o = r === "" ? "" : `with ${r.trim()}() `,
      s = Ir.bind(null, o, n.toString());
    (Object.defineProperty(s, "name", Or),
      Object.defineProperty(e, "toString", { ...vr, value: s }));
  };
function we(e, n, { ignoreNonConfigurable: r = !1 } = {}) {
  let { name: o } = e;
  for (let s of Reflect.ownKeys(n)) wr(e, n, s, r);
  return (Pr(e, n), Ar(e, n, o), e);
}
var oe = new WeakMap(),
  zt = (e, n = {}) => {
    if (typeof e !== "function") throw TypeError("Expected a function");
    let r,
      o = 0,
      s = e.displayName || e.name || "<anonymous>",
      u = function (...d) {
        if ((oe.set(u, ++o), o === 1)) ((r = e.apply(this, d)), (e = null));
        else if (n.throw === !0) throw Error(`Function \`${s}\` can only be called once`);
        return r;
      };
    return (we(u, e), oe.set(u, o), u);
  };
zt.callCount = (e) => {
  if (!oe.has(e))
    throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return oe.get(e);
};
var Wt = zt;
import Mr from "process";
import { constants as kr } from "os";
var qt = () => {
    let e = Te - Ht + 1;
    return Array.from({ length: e }, Rr);
  },
  Rr = (e, n) => ({
    name: `SIGRT${n + 1}`,
    number: Ht + n,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  Ht = 34,
  Te = 64;
import { constants as _r } from "os";
var Vt = [
  {
    name: "SIGHUP",
    number: 1,
    action: "terminate",
    description: "Terminal closed",
    standard: "posix"
  },
  {
    name: "SIGINT",
    number: 2,
    action: "terminate",
    description: "User interruption with CTRL-C",
    standard: "ansi"
  },
  {
    name: "SIGQUIT",
    number: 3,
    action: "core",
    description: "User interruption with CTRL-\\",
    standard: "posix"
  },
  {
    name: "SIGILL",
    number: 4,
    action: "core",
    description: "Invalid machine instruction",
    standard: "ansi"
  },
  {
    name: "SIGTRAP",
    number: 5,
    action: "core",
    description: "Debugger breakpoint",
    standard: "posix"
  },
  { name: "SIGABRT", number: 6, action: "core", description: "Aborted", standard: "ansi" },
  { name: "SIGIOT", number: 6, action: "core", description: "Aborted", standard: "bsd" },
  {
    name: "SIGBUS",
    number: 7,
    action: "core",
    description: "Bus error due to misaligned, non-existing address or paging error",
    standard: "bsd"
  },
  {
    name: "SIGEMT",
    number: 7,
    action: "terminate",
    description: "Command should be emulated but is not implemented",
    standard: "other"
  },
  {
    name: "SIGFPE",
    number: 8,
    action: "core",
    description: "Floating point arithmetic error",
    standard: "ansi"
  },
  {
    name: "SIGKILL",
    number: 9,
    action: "terminate",
    description: "Forced termination",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGUSR1",
    number: 10,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGSEGV",
    number: 11,
    action: "core",
    description: "Segmentation fault",
    standard: "ansi"
  },
  {
    name: "SIGUSR2",
    number: 12,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGPIPE",
    number: 13,
    action: "terminate",
    description: "Broken pipe or socket",
    standard: "posix"
  },
  {
    name: "SIGALRM",
    number: 14,
    action: "terminate",
    description: "Timeout or timer",
    standard: "posix"
  },
  {
    name: "SIGTERM",
    number: 15,
    action: "terminate",
    description: "Termination",
    standard: "ansi"
  },
  {
    name: "SIGSTKFLT",
    number: 16,
    action: "terminate",
    description: "Stack is empty or overflowed",
    standard: "other"
  },
  {
    name: "SIGCHLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "posix"
  },
  {
    name: "SIGCLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "other"
  },
  {
    name: "SIGCONT",
    number: 18,
    action: "unpause",
    description: "Unpaused",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGSTOP",
    number: 19,
    action: "pause",
    description: "Paused",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGTSTP",
    number: 20,
    action: "pause",
    description: 'Paused using CTRL-Z or "suspend"',
    standard: "posix"
  },
  {
    name: "SIGTTIN",
    number: 21,
    action: "pause",
    description: "Background process cannot read terminal input",
    standard: "posix"
  },
  {
    name: "SIGBREAK",
    number: 21,
    action: "terminate",
    description: "User interruption with CTRL-BREAK",
    standard: "other"
  },
  {
    name: "SIGTTOU",
    number: 22,
    action: "pause",
    description: "Background process cannot write to terminal output",
    standard: "posix"
  },
  {
    name: "SIGURG",
    number: 23,
    action: "ignore",
    description: "Socket received out-of-band data",
    standard: "bsd"
  },
  {
    name: "SIGXCPU",
    number: 24,
    action: "core",
    description: "Process timed out",
    standard: "bsd"
  },
  { name: "SIGXFSZ", number: 25, action: "core", description: "File too big", standard: "bsd" },
  {
    name: "SIGVTALRM",
    number: 26,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGPROF",
    number: 27,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGWINCH",
    number: 28,
    action: "ignore",
    description: "Terminal window size changed",
    standard: "bsd"
  },
  {
    name: "SIGIO",
    number: 29,
    action: "terminate",
    description: "I/O is available",
    standard: "other"
  },
  {
    name: "SIGPOLL",
    number: 29,
    action: "terminate",
    description: "Watched event",
    standard: "other"
  },
  {
    name: "SIGINFO",
    number: 29,
    action: "ignore",
    description: "Request for process information",
    standard: "other"
  },
  {
    name: "SIGPWR",
    number: 30,
    action: "terminate",
    description: "Device running out of power",
    standard: "systemv"
  },
  {
    name: "SIGSYS",
    number: 31,
    action: "core",
    description: "Invalid system call",
    standard: "other"
  },
  {
    name: "SIGUNUSED",
    number: 31,
    action: "terminate",
    description: "Invalid system call",
    standard: "other"
  }
];
var Pe = () => {
    let e = qt();
    return [...Vt, ...e].map($r);
  },
  $r = ({ name: e, number: n, description: r, action: o, forced: s = !1, standard: u }) => {
    let {
        signals: { [e]: d }
      } = _r,
      l = d !== void 0;
    return {
      name: e,
      number: l ? d : n,
      description: r,
      supported: l,
      action: o,
      forced: s,
      standard: u
    };
  };
var Fr = () => {
    let e = Pe();
    return Object.fromEntries(e.map(Nr));
  },
  Nr = ({
    name: e,
    number: n,
    description: r,
    supported: o,
    action: s,
    forced: u,
    standard: d
  }) => [
    e,
    { name: e, number: n, description: r, supported: o, action: s, forced: u, standard: d }
  ],
  Xt = Fr(),
  Gr = () => {
    let e = Pe(),
      n = Te + 1,
      r = Array.from({ length: n }, (o, s) => Lr(s, e));
    return Object.assign({}, ...r);
  },
  Lr = (e, n) => {
    let r = jr(e, n);
    if (r === void 0) return {};
    let { name: o, description: s, supported: u, action: d, forced: l, standard: f } = r;
    return {
      [e]: { name: o, number: e, description: s, supported: u, action: d, forced: l, standard: f }
    };
  },
  jr = (e, n) => {
    let r = n.find(({ name: o }) => kr.signals[o] === e);
    if (r !== void 0) return r;
    return n.find((o) => o.number === e);
  },
  Ui = Gr();
var Dr = ({
    timedOut: e,
    timeout: n,
    errorCode: r,
    signal: o,
    signalDescription: s,
    exitCode: u,
    isCanceled: d
  }) => {
    if (e) return `timed out after ${n} milliseconds`;
    if (d) return "was canceled";
    if (r !== void 0) return `failed with ${r}`;
    if (o !== void 0) return `was killed with ${o} (${s})`;
    if (u !== void 0) return `failed with exit code ${u}`;
    return "failed";
  },
  M = ({
    stdout: e,
    stderr: n,
    all: r,
    error: o,
    signal: s,
    exitCode: u,
    command: d,
    escapedCommand: l,
    timedOut: f,
    isCanceled: p,
    killed: h,
    parsed: {
      options: { timeout: S, cwd: y = Mr.cwd() }
    }
  }) => {
    ((u = u === null ? void 0 : u), (s = s === null ? void 0 : s));
    let w = s === void 0 ? void 0 : Xt[s].description,
      C = o && o.code,
      A = `Command ${Dr({ timedOut: f, timeout: S, errorCode: C, signal: s, signalDescription: w, exitCode: u, isCanceled: p })}: ${d}`,
      H = Object.prototype.toString.call(o) === "[object Error]",
      V = H
        ? `${A}
${o.message}`
        : A,
      X = [V, n, e].filter(Boolean).join(`
`);
    if (H) ((o.originalMessage = o.message), (o.message = X));
    else o = Error(X);
    if (
      ((o.shortMessage = V),
      (o.command = d),
      (o.escapedCommand = l),
      (o.exitCode = u),
      (o.signal = s),
      (o.signalDescription = w),
      (o.stdout = e),
      (o.stderr = n),
      (o.cwd = y),
      r !== void 0)
    )
      o.all = r;
    if ("bufferedData" in o) delete o.bufferedData;
    return (
      (o.failed = !0),
      (o.timedOut = Boolean(f)),
      (o.isCanceled = p),
      (o.killed = h && !f),
      o
    );
  };
var ie = ["stdin", "stdout", "stderr"],
  Ur = (e) => ie.some((n) => e[n] !== void 0),
  Yt = (e) => {
    if (!e) return;
    let { stdio: n } = e;
    if (n === void 0) return ie.map((o) => e[o]);
    if (Ur(e))
      throw Error(
        `It's not possible to provide \`stdio\` in combination with one of ${ie.map((o) => `\`${o}\``).join(", ")}`
      );
    if (typeof n === "string") return n;
    if (!Array.isArray(n))
      throw TypeError(
        `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``
      );
    let r = Math.max(n.length, ie.length);
    return Array.from({ length: r }, (o, s) => n[s]);
  };
import zr from "os";
var v = [];
v.push("SIGHUP", "SIGINT", "SIGTERM");
v.push(
  "SIGALRM",
  "SIGABRT",
  "SIGVTALRM",
  "SIGXCPU",
  "SIGXFSZ",
  "SIGUSR2",
  "SIGTRAP",
  "SIGSYS",
  "SIGQUIT",
  "SIGIOT"
);
v.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
var se = (e) =>
    !!e &&
    typeof e === "object" &&
    typeof e.removeListener === "function" &&
    typeof e.emit === "function" &&
    typeof e.reallyExit === "function" &&
    typeof e.listeners === "function" &&
    typeof e.kill === "function" &&
    typeof e.pid === "number" &&
    typeof e.on === "function",
  Ie = Symbol.for("signal-exit emitter"),
  ve = globalThis,
  Br = Object.defineProperty.bind(Object);
class Zt {
  emitted = { afterExit: !1, exit: !1 };
  listeners = { afterExit: [], exit: [] };
  count = 0;
  id = Math.random();
  constructor() {
    if (ve[Ie]) return ve[Ie];
    Br(ve, Ie, { value: this, writable: !1, enumerable: !1, configurable: !1 });
  }
  on(e, n) {
    this.listeners[e].push(n);
  }
  removeListener(e, n) {
    let r = this.listeners[e],
      o = r.indexOf(n);
    if (o === -1) return;
    if (o === 0 && r.length === 1) r.length = 0;
    else r.splice(o, 1);
  }
  emit(e, n, r) {
    if (this.emitted[e]) return !1;
    this.emitted[e] = !0;
    let o = !1;
    for (let s of this.listeners[e]) o = s(n, r) === !0 || o;
    if (e === "exit") o = this.emit("afterExit", n, r) || o;
    return o;
  }
}
class Ae {}
var Kr = (e) => ({
  onExit(n, r) {
    return e.onExit(n, r);
  },
  load() {
    return e.load();
  },
  unload() {
    return e.unload();
  }
});
class Qt extends Ae {
  onExit() {
    return () => {};
  }
  load() {}
  unload() {}
}
class Jt extends Ae {
  #s = Oe.platform === "win32" ? "SIGINT" : "SIGHUP";
  #t = new Zt();
  #e;
  #o;
  #i;
  #r = {};
  #n = !1;
  constructor(e) {
    super();
    ((this.#e = e), (this.#r = {}));
    for (let n of v)
      this.#r[n] = () => {
        let r = this.#e.listeners(n),
          { count: o } = this.#t,
          s = e;
        if (
          typeof s.__signal_exit_emitter__ === "object" &&
          typeof s.__signal_exit_emitter__.count === "number"
        )
          o += s.__signal_exit_emitter__.count;
        if (r.length === o) {
          this.unload();
          let u = this.#t.emit("exit", null, n),
            d = n === "SIGHUP" ? this.#s : n;
          if (!u) e.kill(e.pid, d);
        }
      };
    ((this.#i = e.reallyExit), (this.#o = e.emit));
  }
  onExit(e, n) {
    if (!se(this.#e)) return () => {};
    if (this.#n === !1) this.load();
    let r = n?.alwaysLast ? "afterExit" : "exit";
    return (
      this.#t.on(r, e),
      () => {
        if (
          (this.#t.removeListener(r, e),
          this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0)
        )
          this.unload();
      }
    );
  }
  load() {
    if (this.#n) return;
    ((this.#n = !0), (this.#t.count += 1));
    for (let e of v)
      try {
        let n = this.#r[e];
        if (n) this.#e.on(e, n);
      } catch (n) {}
    ((this.#e.emit = (e, ...n) => this.#u(e, ...n)), (this.#e.reallyExit = (e) => this.#a(e)));
  }
  unload() {
    if (!this.#n) return;
    ((this.#n = !1),
      v.forEach((e) => {
        let n = this.#r[e];
        if (!n) throw Error("Listener not defined for signal: " + e);
        try {
          this.#e.removeListener(e, n);
        } catch (r) {}
      }),
      (this.#e.emit = this.#o),
      (this.#e.reallyExit = this.#i),
      (this.#t.count -= 1));
  }
  #a(e) {
    if (!se(this.#e)) return 0;
    return (
      (this.#e.exitCode = e || 0),
      this.#t.emit("exit", this.#e.exitCode, null),
      this.#i.call(this.#e, this.#e.exitCode)
    );
  }
  #u(e, ...n) {
    let r = this.#o;
    if (e === "exit" && se(this.#e)) {
      if (typeof n[0] === "number") this.#e.exitCode = n[0];
      let o = r.call(this.#e, e, ...n);
      return (this.#t.emit("exit", this.#e.exitCode, null), o);
    } else return r.call(this.#e, e, ...n);
  }
}
var Oe = globalThis.process,
  { onExit: ZZ, load: Xi, unload: Yi } = Kr(se(Oe) ? new Jt(Oe) : new Qt());
var Wr = 5000,
  en = (e, n = "SIGTERM", r = {}) => {
    let o = e(n);
    return (qr(e, n, r, o), o);
  },
  qr = (e, n, r, o) => {
    if (!Hr(n, r, o)) return;
    let s = Xr(r),
      u = setTimeout(() => {
        e("SIGKILL");
      }, s);
    if (u.unref) u.unref();
  },
  Hr = (e, { forceKillAfterTimeout: n }, r) => Vr(e) && n !== !1 && r,
  Vr = (e) =>
    e === zr.constants.signals.SIGTERM || (typeof e === "string" && e.toUpperCase() === "SIGTERM"),
  Xr = ({ forceKillAfterTimeout: e = !0 }) => {
    if (e === !0) return Wr;
    if (!Number.isFinite(e) || e < 0)
      throw TypeError(
        `Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`
      );
    return e;
  },
  tn = (e, n) => {
    if (e.kill()) n.isCanceled = !0;
  },
  Yr = (e, n, r) => {
    (e.kill(n), r(Object.assign(Error("Timed out"), { timedOut: !0, signal: n })));
  },
  nn = (e, { timeout: n, killSignal: r = "SIGTERM" }, o) => {
    if (n === 0 || n === void 0) return o;
    let s,
      u = new Promise((l, f) => {
        s = setTimeout(() => {
          Yr(e, r, f);
        }, n);
      }),
      d = o.finally(() => {
        clearTimeout(s);
      });
    return Promise.race([u, d]);
  },
  rn = ({ timeout: e }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0))
      throw TypeError(
        `Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`
      );
  },
  on = async (e, { cleanup: n, detached: r }, o) => {
    if (!n || r) return o;
    let s = ZZ(() => {
      e.kill();
    });
    return o.finally(() => {
      s();
    });
  };
import { createWriteStream as Zr } from "fs";
import { ChildProcess as Qr } from "child_process";
function ae(e) {
  return e !== null && typeof e === "object" && typeof e.pipe === "function";
}
function Re(e) {
  return (
    ae(e) &&
    e.writable !== !1 &&
    typeof e._write === "function" &&
    typeof e._writableState === "object"
  );
}
var Jr = (e) => e instanceof Qr && typeof e.then === "function",
  _e = (e, n, r) => {
    if (typeof r === "string") return (e[n].pipe(Zr(r)), e);
    if (Re(r)) return (e[n].pipe(r), e);
    if (!Jr(r))
      throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    if (!Re(r.stdin)) throw TypeError("The target child process's stdin must be available.");
    return (e[n].pipe(r.stdin), r);
  },
  sn = (e) => {
    if (e.stdout !== null) e.pipeStdout = _e.bind(void 0, e, "stdout");
    if (e.stderr !== null) e.pipeStderr = _e.bind(void 0, e, "stderr");
    if (e.all !== void 0) e.pipeAll = _e.bind(void 0, e, "all");
  };
import { createReadStream as xo, readFileSync as bo } from "fs";
import { setTimeout as Co } from "timers/promises";
var D = async (
    e,
    {
      init: n,
      convertChunk: r,
      getSize: o,
      truncateChunk: s,
      addChunk: u,
      getFinalChunk: d,
      finalize: l
    },
    { maxBuffer: f = Number.POSITIVE_INFINITY } = {}
  ) => {
    if (!to(e))
      throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    let p = n();
    p.length = 0;
    try {
      for await (let h of e) {
        let S = no(h),
          y = r[S](h, p);
        cn({
          convertedChunk: y,
          state: p,
          getSize: o,
          truncateChunk: s,
          addChunk: u,
          maxBuffer: f
        });
      }
      return (
        eo({
          state: p,
          convertChunk: r,
          getSize: o,
          truncateChunk: s,
          addChunk: u,
          getFinalChunk: d,
          maxBuffer: f
        }),
        l(p)
      );
    } catch (h) {
      throw ((h.bufferedData = l(p)), h);
    }
  },
  eo = ({
    state: e,
    getSize: n,
    truncateChunk: r,
    addChunk: o,
    getFinalChunk: s,
    maxBuffer: u
  }) => {
    let d = s(e);
    if (d !== void 0)
      cn({ convertedChunk: d, state: e, getSize: n, truncateChunk: r, addChunk: o, maxBuffer: u });
  },
  cn = ({
    convertedChunk: e,
    state: n,
    getSize: r,
    truncateChunk: o,
    addChunk: s,
    maxBuffer: u
  }) => {
    let d = r(e),
      l = n.length + d;
    if (l <= u) {
      an(e, n, s, l);
      return;
    }
    let f = o(e, u - n.length);
    if (f !== void 0) an(f, n, s, u);
    throw new $e();
  },
  an = (e, n, r, o) => {
    ((n.contents = r(e, n, o)), (n.length = o));
  },
  to = (e) => typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function",
  no = (e) => {
    let n = typeof e;
    if (n === "string") return "string";
    if (n !== "object" || e === null) return "others";
    if (globalThis.Buffer?.isBuffer(e)) return "buffer";
    let r = un.call(e);
    if (r === "[object ArrayBuffer]") return "arrayBuffer";
    if (r === "[object DataView]") return "dataView";
    if (
      Number.isInteger(e.byteLength) &&
      Number.isInteger(e.byteOffset) &&
      un.call(e.buffer) === "[object ArrayBuffer]"
    )
      return "typedArray";
    return "others";
  },
  { toString: un } = Object.prototype;
class $e extends Error {
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
}
var ke = (e) => e,
  Ne = () => {
    return;
  },
  Ge = ({ contents: e }) => e,
  ue = (e) => {
    throw Error(`Streams in object mode are not supported: ${String(e)}`);
  },
  ce = (e) => e.length;
async function Le(e, n) {
  return D(e, fo, n);
}
var ro = () => ({ contents: new ArrayBuffer(0) }),
  oo = (e) => io.encode(e),
  io = new TextEncoder(),
  dn = (e) => new Uint8Array(e),
  ln = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
  so = (e, n) => e.slice(0, n),
  ao = (e, { contents: n, length: r }, o) => {
    let s = mn() ? co(n, o) : uo(n, o);
    return (new Uint8Array(s).set(e, r), s);
  },
  uo = (e, n) => {
    if (n <= e.byteLength) return e;
    let r = new ArrayBuffer(pn(n));
    return (new Uint8Array(r).set(new Uint8Array(e), 0), r);
  },
  co = (e, n) => {
    if (n <= e.maxByteLength) return (e.resize(n), e);
    let r = new ArrayBuffer(n, { maxByteLength: pn(n) });
    return (new Uint8Array(r).set(new Uint8Array(e), 0), r);
  },
  pn = (e) => fn ** Math.ceil(Math.log(e) / Math.log(fn)),
  fn = 2,
  lo = ({ contents: e, length: n }) => (mn() ? e : e.slice(0, n)),
  mn = () => "resize" in ArrayBuffer.prototype,
  fo = {
    init: ro,
    convertChunk: {
      string: oo,
      buffer: dn,
      arrayBuffer: dn,
      dataView: ln,
      typedArray: ln,
      others: ue
    },
    getSize: ce,
    truncateChunk: so,
    addChunk: ao,
    getFinalChunk: Ne,
    finalize: lo
  };
async function de(e, n) {
  if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return gn(await Le(e, n));
  } catch (r) {
    if (r.bufferedData !== void 0) r.bufferedData = gn(r.bufferedData);
    throw r;
  }
}
var gn = (e) => globalThis.Buffer.from(e);
async function je(e, n) {
  return D(e, yo, n);
}
var po = () => ({ contents: "", textDecoder: new TextDecoder() }),
  le = (e, { textDecoder: n }) => n.decode(e, { stream: !0 }),
  mo = (e, { contents: n }) => n + e,
  go = (e, n) => e.slice(0, n),
  ho = ({ textDecoder: e }) => {
    let n = e.decode();
    return n === "" ? void 0 : n;
  },
  yo = {
    init: po,
    convertChunk: {
      string: ke,
      buffer: le,
      arrayBuffer: le,
      dataView: le,
      typedArray: le,
      others: ue
    },
    getSize: ce,
    truncateChunk: go,
    addChunk: mo,
    getFinalChunk: ho,
    finalize: Ge
  };
var Sn = Ce(yn(), 1),
  xn = (e) => {
    if (e !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.");
  },
  Eo = ({ input: e, inputFile: n }) => {
    if (typeof n !== "string") return e;
    return (xn(e), bo(n));
  },
  bn = (e) => {
    let n = Eo(e);
    if (ae(n)) throw TypeError("The `input` option cannot be a stream in sync mode");
    return n;
  },
  To = ({ input: e, inputFile: n }) => {
    if (typeof n !== "string") return e;
    return (xn(e), xo(n));
  },
  Cn = (e, n) => {
    let r = To(n);
    if (r === void 0) return;
    if (ae(r)) r.pipe(e.stdin);
    else e.stdin.end(r);
  },
  En = (e, { all: n }) => {
    if (!n || (!e.stdout && !e.stderr)) return;
    let r = Sn.default();
    if (e.stdout) r.add(e.stdout);
    if (e.stderr) r.add(e.stderr);
    return r;
  },
  Me = async (e, n) => {
    if (!e || n === void 0) return;
    (await Co(0), e.destroy());
    try {
      return await n;
    } catch (r) {
      return r.bufferedData;
    }
  },
  De = (e, { encoding: n, buffer: r, maxBuffer: o }) => {
    if (!e || !r) return;
    if (n === "utf8" || n === "utf-8") return je(e, { maxBuffer: o });
    if (n === null || n === "buffer") return de(e, { maxBuffer: o });
    return Po(e, o, n);
  },
  Po = async (e, n, r) => (await de(e, { maxBuffer: n })).toString(r),
  wn = async ({ stdout: e, stderr: n, all: r }, { encoding: o, buffer: s, maxBuffer: u }, d) => {
    let l = De(e, { encoding: o, buffer: s, maxBuffer: u }),
      f = De(n, { encoding: o, buffer: s, maxBuffer: u }),
      p = De(r, { encoding: o, buffer: s, maxBuffer: u * 2 });
    try {
      return await Promise.all([d, l, f, p]);
    } catch (h) {
      return Promise.all([
        { error: h, signal: h.signal, timedOut: h.timedOut },
        Me(e, l),
        Me(n, f),
        Me(r, p)
      ]);
    }
  };
var Io = (async () => {})().constructor.prototype,
  vo = ["then", "catch", "finally"].map((e) => [e, Reflect.getOwnPropertyDescriptor(Io, e)]),
  Ue = (e, n) => {
    for (let [r, o] of vo) {
      let s = typeof n === "function" ? (...u) => Reflect.apply(o.value, n(), u) : o.value.bind(n);
      Reflect.defineProperty(e, r, { ...o, value: s });
    }
  },
  Tn = (e) =>
    new Promise((n, r) => {
      if (
        (e.on("exit", (o, s) => {
          n({ exitCode: o, signal: s });
        }),
        e.on("error", (o) => {
          r(o);
        }),
        e.stdin)
      )
        e.stdin.on("error", (o) => {
          r(o);
        });
    });
import { Buffer as Oo } from "buffer";
import { ChildProcess as Ao } from "child_process";
var vn = (e, n = []) => {
    if (!Array.isArray(n)) return [e];
    return [e, ...n];
  },
  Ro = /^[\w.-]+$/,
  _o = (e) => {
    if (typeof e !== "string" || Ro.test(e)) return e;
    return `"${e.replaceAll('"', '\\"')}"`;
  },
  Be = (e, n) => vn(e, n).join(" "),
  Ke = (e, n) =>
    vn(e, n)
      .map((r) => _o(r))
      .join(" "),
  $o = / +/g;
var Pn = (e) => {
    let n = typeof e;
    if (n === "string") return e;
    if (n === "number") return String(e);
    if (n === "object" && e !== null && !(e instanceof Ao) && "stdout" in e) {
      let r = typeof e.stdout;
      if (r === "string") return e.stdout;
      if (Oo.isBuffer(e.stdout)) return e.stdout.toString();
      throw TypeError(`Unexpected "${r}" stdout in template expression`);
    }
    throw TypeError(`Unexpected "${n}" in template expression`);
  },
  In = (e, n, r) =>
    r || e.length === 0 || n.length === 0
      ? [...e, ...n]
      : [...e.slice(0, -1), `${e.at(-1)}${n[0]}`, ...n.slice(1)],
  ko = ({ templates: e, expressions: n, tokens: r, index: o, template: s }) => {
    let u = s ?? e.raw[o],
      d = u.split($o).filter(Boolean),
      l = In(r, d, u.startsWith(" "));
    if (o === n.length) return l;
    let f = n[o],
      p = Array.isArray(f) ? f.map((h) => Pn(h)) : [Pn(f)];
    return In(l, p, u.endsWith(" "));
  },
  ze = (e, n) => {
    let r = [];
    for (let [o, s] of e.entries())
      r = ko({ templates: e, expressions: n, tokens: r, index: o, template: s });
    return r;
  };
import { debuglog as Fo } from "util";
import No from "process";
var On = Fo("execa").enabled,
  fe = (e, n) => String(e).padStart(n, "0"),
  Go = () => {
    let e = new Date();
    return `${fe(e.getHours(), 2)}:${fe(e.getMinutes(), 2)}:${fe(e.getSeconds(), 2)}.${fe(e.getMilliseconds(), 3)}`;
  },
  We = (e, { verbose: n }) => {
    if (!n) return;
    No.stderr.write(`[${Go()}] ${e}
`);
  };
var Mo = 1e8,
  Do = ({ env: e, extendEnv: n, preferLocal: r, localDir: o, execPath: s }) => {
    let u = n ? { ...pe.env, ...e } : e;
    if (r) return Kt({ env: u, cwd: o, execPath: s });
    return u;
  },
  _n = (e, n, r = {}) => {
    let o = Rn.default._parse(e, n, r);
    if (
      ((e = o.command),
      (n = o.args),
      (r = o.options),
      (r = {
        maxBuffer: Mo,
        buffer: !0,
        stripFinalNewline: !0,
        extendEnv: !0,
        preferLocal: !1,
        localDir: r.cwd || pe.cwd(),
        execPath: pe.execPath,
        encoding: "utf8",
        reject: !0,
        cleanup: !0,
        all: !1,
        windowsHide: !0,
        verbose: On,
        ...r
      }),
      (r.env = Do(r)),
      (r.stdio = Yt(r)),
      pe.platform === "win32" && jo.basename(e, ".exe") === "cmd")
    )
      n.unshift("/q");
    return { file: e, args: n, options: r, parsed: o };
  },
  U = (e, n, r) => {
    if (typeof n !== "string" && !Lo.isBuffer(n)) return r === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return Ee(n);
    return n;
  };
function MAt(e, n, r) {
  let o = _n(e, n, r),
    s = Be(e, n),
    u = Ke(e, n);
  (We(u, o.options), rn(o.options));
  let d;
  try {
    d = qe.spawn(o.file, o.args, o.options);
  } catch (w) {
    let C = new qe.ChildProcess(),
      I = Promise.reject(
        M({
          error: w,
          stdout: "",
          stderr: "",
          all: "",
          command: s,
          escapedCommand: u,
          parsed: o,
          timedOut: !1,
          isCanceled: !1,
          killed: !1
        })
      );
    return (Ue(C, I), C);
  }
  let l = Tn(d),
    f = nn(d, o.options, l),
    p = on(d, o.options, f),
    h = { isCanceled: !1 };
  ((d.kill = en.bind(null, d.kill.bind(d))), (d.cancel = tn.bind(null, d, h)));
  let y = Wt(async () => {
    let [{ error: w, exitCode: C, signal: I, timedOut: A }, H, V, X] = await wn(d, o.options, p),
      et = U(o.options, H),
      tt = U(o.options, V),
      nt = U(o.options, X);
    if (w || C !== 0 || I !== null) {
      let rt = M({
        error: w,
        exitCode: C,
        signal: I,
        stdout: et,
        stderr: tt,
        all: nt,
        command: s,
        escapedCommand: u,
        parsed: o,
        timedOut: A,
        isCanceled: h.isCanceled || (o.options.signal ? o.options.signal.aborted : !1),
        killed: d.killed
      });
      if (!o.options.reject) return rt;
      throw rt;
    }
    return {
      command: s,
      escapedCommand: u,
      exitCode: 0,
      stdout: et,
      stderr: tt,
      all: nt,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  });
  return (Cn(d, o.options), (d.all = En(d, o.options)), sn(d), Ue(d, y), d);
}
function B(e, n, r) {
  let o = _n(e, n, r),
    s = Be(e, n),
    u = Ke(e, n);
  We(u, o.options);
  let d = bn(o.options),
    l;
  try {
    l = qe.spawnSync(o.file, o.args, { ...o.options, input: d });
  } catch (h) {
    throw M({
      error: h,
      stdout: "",
      stderr: "",
      all: "",
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    });
  }
  let f = U(o.options, l.stdout, l.error),
    p = U(o.options, l.stderr, l.error);
  if (l.error || l.status !== 0 || l.signal !== null) {
    let h = M({
      stdout: f,
      stderr: p,
      error: l.error,
      signal: l.signal,
      exitCode: l.status,
      command: s,
      escapedCommand: u,
      parsed: o,
      timedOut: l.error && l.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: l.signal !== null
    });
    if (!o.options.reject) return h;
    throw h;
  }
  return {
    command: s,
    escapedCommand: u,
    exitCode: 0,
    stdout: f,
    stderr: p,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  };
}
var Uo = ({ input: e, inputFile: n, stdio: r }) =>
    e === void 0 && n === void 0 && r === void 0 ? { stdin: "inherit" } : {},
  An = (e = {}) => ({ preferLocal: !0, ...Uo(e), ...e });
function $n(e) {
  function n(r, ...o) {
    if (!Array.isArray(r)) return $n({ ...e, ...r });
    let [s, ...u] = ze(r, o);
    return MAt(s, u, An(e));
  }
  return (
    (n.sync = (r, ...o) => {
      if (!Array.isArray(r))
        throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
      let [s, ...u] = ze(r, o);
      return B(s, u, An(e));
    }),
    n
  );
}
var oa = $n();
var L$e = "Programs are unavailable in this session; the command was not run.";
function uT() {
  return J();
}
function oP() {
  if (uT()) throw new R(L$e, "a program start was refused in a diskless session");
}
import {
  mkdirSync as Xe,
  readFileSync as G,
  rmdirSync as Fn,
  statSync as Bo,
  writeFileSync as me
} from "fs";
import { totalmem as Ko } from "os";
import { posix as T } from "path";
function slr(e) {
  let n;
  for (let r of e.split(`
`)) {
    let [o, s, ...u] = r.split(":");
    if (s === void 0 || u.length === 0) continue;
    let d = u.join(":");
    if (s.split(",").includes("memory"))
      return { mountRoot: "/sys/fs/cgroup/memory", path: d, v2: !1 };
    if (o === "0" && s === "") n = d;
  }
  return n === void 0 ? void 0 : { mountRoot: "/sys/fs/cgroup", path: n, v2: !0 };
}
var He = "claude-code-bash",
  zo = "claude-code-keeper",
  Nn = 1073741824,
  Wo = Nn,
  Ve = ["mcp", "lsp", "hooks", "plugin", "tmux", "helper", "agent"];
class Gn {
  reader = null;
  subscribeRefresh = null;
  register(e) {
    let n = this.reader;
    return ((this.reader = e), n);
  }
  read(e, n) {
    return this.reader ? this.reader(e, n) : n;
  }
}
var N = new Gn();
function Xui(e, n) {
  if (n !== void 0) N.subscribeRefresh = n;
  return N.register(e);
}
class Ln {
  dir = void 0;
  layout = void 0;
  limit = 0;
  activatedClasses = new Set();
  pendingPids = new Map();
  pendingUnsubscribe = void 0;
  oomKillsSeen = void 0;
}
var P = new W(() => new Ln());
function Ye() {
  let e = es(P);
  if (e.dir !== void 0) return e.dir ?? void 0;
  if (cm()) {
    e.dir = null;
    return;
  }
  let n = O();
  if (n !== "linux" && n !== "wsl") {
    e.dir = null;
    return;
  }
  let r = i.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
  if (r && (is(r) || r === "none")) {
    e.dir = null;
    return;
  }
  let o = ui(r);
  if (o === void 0 && N.read("tengu_tool_memory_cgroup", !1) !== !0) return;
  try {
    let s = ri(G("/proc/self/cgroup", "utf8"));
    if (!s) throw Error("no memory cgroup hierarchy");
    let u = ai(o, Ko());
    if (u === void 0) {
      ((e.dir = null),
        t("tool cgroup: disabled (host too small for the default cap)"),
        a("tengu_tool_cgroup", { status: b("host_too_small") }));
      return;
    }
    (Kn(s, u),
      (e.dir = s.dir),
      (e.layout = s),
      (e.limit = u),
      t(
        `tool cgroup: ${s.dir} ${s.reuse ? "(nested: already capped, reusing our own)" : `limit=${u}`}`
      ),
      g("shell_memory_cgroup"),
      a(
        "tengu_tool_cgroup",
        s.reuse ? { status: b("nested") } : { status: b("enabled"), limit_bytes: u }
      ));
  } catch (s) {
    ((e.dir = null),
      t(`tool cgroup: disabled (${E(s) ?? s})`),
      m("shell_memory_cgroup", Er(s) ?? "no_hierarchy"),
      a("tengu_tool_cgroup", { status: b("disabled") }));
  }
  return e.dir ?? void 0;
}
function K(e) {
  if (Ye() === void 0) return;
  if (e !== "shell" && jn().has(e)) return;
  let n = es(P),
    r = qo(n);
  if (r === void 0) return;
  if ((Un(n), !n.activatedClasses.has(e)))
    (n.activatedClasses.add(e),
      a("tengu_tool_cgroup", { status: b("class_enabled"), class: c(e) }));
  return r;
}
function Jui(e) {
  return typeof es(P).dir === "string" && (e === "shell" || !jn().has(e));
}
function qo(e, n = { exists: Ho, mkdirSync: Xe, writeFileSync: me, rmdirSync: Fn }) {
  if (e.dir === void 0 || e.dir === null) return;
  try {
    if (n.exists(e.dir)) return e.dir;
    if (e.layout === void 0 || e.layout.reuse) throw Error("enclosing tool cgroup is gone");
    return (
      Kn(e.layout, e.limit, n),
      t(`tool cgroup: ${e.dir} vanished; re-created`),
      a("tengu_tool_cgroup", { status: b("recreated") }),
      e.dir
    );
  } catch (r) {
    ((e.dir = null),
      t(`tool cgroup: disabled (dir vanished: ${E(r) ?? r})`),
      a("tengu_tool_cgroup", { status: b("vanished") }));
    return;
  }
}
function Ho(e) {
  return Bo(e, { throwIfNoEntry: !1 }) !== void 0;
}
function jn() {
  let e = i.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim(),
    n = Vo(e);
  if (n.has("mcp") || !Xo(!e)) return n;
  return new Set([...n, "mcp"]);
}
function Vo(e) {
  if (e) return kn(e.split(","));
  let n = N.read("tengu_tool_cgroup_exclude_classes", null);
  if (Array.isArray(n)) return kn(n);
  return new Set(Ve);
}
function Xo(e) {
  let n = i.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
  if (n && (is(n) || n === "none")) return !0;
  return e && N.read("tengu_mcp_memory_cgroup", null) === !1;
}
function kn(e) {
  let n = new Set();
  for (let r of e) {
    let o = typeof r === "string" ? r.trim().toLowerCase() : "";
    if (o === "all-new") {
      Ve.forEach((u) => n.add(u));
      continue;
    }
    let s = Ve.find((u) => u === o);
    if (s !== void 0) n.add(s);
  }
  return n;
}
function _d(e) {
  let n = K(e);
  return n === void 0 ? {} : { cgroup: n };
}
function ilr(e, n, r) {
  let o = K(e);
  if (o === void 0) return { command: n, args: [...r], pending: DAt(), capped: !1 };
  if (EB(n) === null) return { command: n, args: [...r], pending: !0, capped: !1 };
  return {
    pending: !1,
    capped: !0,
    command: "/bin/sh",
    args: ["-c", '{ echo 0 > "$0"/cgroup.procs; } 2>/dev/null; exec "$@"', o, n, ...r]
  };
}
function DAt() {
  return es(P).dir === void 0;
}
var Yo = 64,
  alr = { readStarttime: Qo, writeFileSync: me, readCgroupPids: ei, readProcIdentity: Jo };
function q4e(e, n, r, o = alr) {
  try {
    if (!n) return;
    Ye();
    let s = es(P);
    if (s.dir === null) return;
    let u = o.readStarttime(n);
    if (u === void 0) return;
    let d = { cls: e, starttime: u, shouldStayUncapped: r };
    if (s.dir !== void 0) {
      Mn(n, d, o);
      return;
    }
    if ((Dn(s, o), s.pendingPids.size >= Yo)) {
      t(`tool cgroup: pending pid ${n} not parked (full)`);
      return;
    }
    (s.pendingPids.set(n, d), (s.pendingUnsubscribe ??= N.subscribeRefresh?.(() => Zo())));
  } catch (s) {
    t(`tool cgroup: pending pid not parked (${s})`);
  }
}
function Zo(e = alr) {
  let n = es(P);
  try {
    if ((Ye(), n.dir === void 0)) {
      Dn(n, e);
      return;
    }
    if (n.dir !== null) for (let [r, o] of n.pendingPids) Mn(r, o, e);
  } catch (r) {
    t(`tool cgroup: late attach skipped (${r})`);
  }
  (n.pendingPids.clear(), n.pendingUnsubscribe?.(), (n.pendingUnsubscribe = void 0));
}
function Mn(e, { cls: n, starttime: r, shouldStayUncapped: o }, s) {
  let u = K(n);
  if (u === void 0 || s.readStarttime(e) !== r) return;
  try {
    if (o?.()) {
      t(`tool cgroup: ${n} pid ${e} left uncapped`);
      return;
    }
    let d = T.join(u, "cgroup.procs");
    s.writeFileSync(d, String(e));
    let l = 1,
      f = es(P).layout;
    if (f !== void 0 && !f.reuse) l += Bn(e, f.selfDir, d, s, "attached");
    t(`tool cgroup: late-attached ${n} pid ${e} (${l} process${l === 1 ? "" : "es"})`);
  } catch (d) {
    t(`tool cgroup: late attach of pid ${e} failed (${E(d) ?? d})`);
  }
}
function Dn(e, n) {
  for (let [r, { starttime: o }] of e.pendingPids)
    if (n.readStarttime(r) !== o) e.pendingPids.delete(r);
}
function Qo(e) {
  try {
    return oW(G(`/proc/${e}/stat`, "utf8"));
  } catch {
    return;
  }
}
function Jo(e) {
  try {
    let n = G(`/proc/${e}/stat`, "utf8"),
      r = dlr(n),
      o = oW(n);
    return r === void 0 || o === void 0 ? void 0 : { ppid: r, starttime: o };
  } catch {
    return;
  }
}
function ei(e) {
  return G(T.join(e, "cgroup.procs"), "utf8")
    .split(
      `
`
    )
    .map((n) => Number.parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));
}
function ti(e) {
  let n = /^oom_kill (\d+)$/m.exec(e);
  return n ? Number.parseInt(n[1], 10) : void 0;
}
function Ze(e) {
  return T.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control");
}
function z(e) {
  return G(e, "utf8");
}
function Qe(e, n = z) {
  try {
    return ti(n(e));
  } catch {
    return;
  }
}
function CZo(e = z) {
  let { dir: n, layout: r } = es(P);
  if (!n || r === void 0) return;
  return Qe(Ze(r), e);
}
function Qui(e, n = z) {
  let r = es(P),
    o = e ?? r.oomKillsSeen,
    s = CZo(n);
  return (Un(r, n, s), o === void 0 || s === void 0 ? void 0 : s > o);
}
function Un(e, n = z, r) {
  try {
    let o = e.layout;
    if (!e.dir || o === void 0 || o.reuse) return;
    let s = r ?? Qe(Ze(o), n);
    if (s === void 0) return;
    let u = e.oomKillsSeen;
    if (((e.oomKillsSeen = s), u === void 0 || s <= u)) return;
    (t(`tool cgroup: OOM killer fired ${s - u} time(s) in ${o.dir} since last check`),
      a("tengu_tool_cgroup", { status: b("oom_kill"), oom_kills: s - u, cgroup_v2: o.v2 }));
  } catch (o) {
    t(`tool cgroup: oom_kill check skipped (${o})`);
  }
}
function Zui(e, n = z) {
  let r = K(e),
    o = es(P).layout;
  if (r === void 0 || o === void 0) return;
  let s = Ze(o);
  return () => Qe(s, n);
}
function efi(e, n) {
  let r = K(e);
  if (r === void 0) return n;
  return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${wo([r])}; ${n}`;
}
function llr(e, n, r = alr) {
  try {
    let o = es(P);
    if (o.dir === void 0) {
      if (o.pendingPids.get(e)?.starttime !== n) return !1;
      return (o.pendingPids.delete(e), t(`tool cgroup: unparked pid ${e}; it stays uncapped`), !0);
    }
    let s = o.layout;
    if (!o.dir || s === void 0 || s.reuse) return !1;
    if (r.readStarttime(e) !== n) return !1;
    let u = T.join(s.selfDir, "cgroup.procs");
    r.writeFileSync(u, String(e));
    let d = 1 + Bn(e, s.dir, u, r, "released");
    return (
      t(`tool cgroup: released pid ${e} (${d} process${d === 1 ? "" : "es"}) to ${s.selfDir}`),
      a("tengu_tool_cgroup", { status: b("released"), released_count: d }),
      !0
    );
  } catch (o) {
    return (t(`tool cgroup: release of pid ${e} failed (${E(o) ?? o})`), !1);
  }
}
function Bn(e, n, r, o, s) {
  let u = 0;
  for (let { pid: d, starttime: l } of ni(e, n, o)) {
    if (o.readStarttime(d) !== l) {
      t(`tool cgroup: descendant ${d} of pid ${e} exited or was recycled; skipped`);
      continue;
    }
    try {
      (o.writeFileSync(r, String(d)), u++);
    } catch (f) {
      t(`tool cgroup: descendant ${d} of pid ${e} not ${s} (${E(f) ?? f})`);
    }
  }
  return u;
}
function ni(e, n, r) {
  let o;
  try {
    o = r.readCgroupPids(n);
  } catch (l) {
    return (t(`tool cgroup: members of ${n} unreadable (${E(l) ?? l}); moving pid ${e} alone`), []);
  }
  let s = new Map();
  for (let l of o) {
    if (l === e) continue;
    let f;
    try {
      f = r.readProcIdentity(l);
    } catch {
      f = void 0;
    }
    if (f === void 0) continue;
    let p = { pid: l, starttime: f.starttime },
      h = s.get(f.ppid);
    if (h) h.push(p);
    else s.set(f.ppid, [p]);
  }
  let u = [],
    d = [e];
  for (let l = 0; l < d.length; l++) for (let f of s.get(d[l]) ?? []) (u.push(f), d.push(f.pid));
  return u;
}
function Kn(e, n, r = { mkdirSync: Xe, writeFileSync: me, rmdirSync: Fn }) {
  if (e.reuse) return;
  let o = !0;
  try {
    r.mkdirSync(e.dir);
  } catch (s) {
    if (E(s) !== "EEXIST") throw s;
    o = !1;
  }
  try {
    r.writeFileSync(T.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n));
  } catch (s) {
    if (o)
      try {
        r.rmdirSync?.(e.dir);
      } catch {}
    throw s;
  }
}
function ri(e) {
  let n = slr(e);
  if (!n) return;
  return ii(n.mountRoot, n.path, n.v2 ? T.dirname(n.path) : n.path, n.v2);
}
function oi(e) {
  let n = slr(e);
  if (!n) return;
  let r = n.path.split("/"),
    o = r.indexOf(He);
  if (o < 0) return;
  let s = T.join(n.mountRoot, ...r.slice(0, o));
  return n.v2 ? { dir: T.join(s, zo), create: !0 } : { dir: s, create: !1 };
}
var zn = { readSelfCgroup: () => G("/proc/self/cgroup", "utf8"), mkdirSync: Xe, writeFileSync: me };
function Wn(e) {
  let n = O();
  if (n !== "linux" && n !== "wsl") return;
  try {
    let r = oi(e.readSelfCgroup());
    if (r === void 0) return;
    if (r.create)
      try {
        e.mkdirSync(r.dir);
      } catch (o) {
        if (E(o) !== "EEXIST") throw o;
      }
    return r.dir;
  } catch (r) {
    t(`tool cgroup: keeper dir unavailable (${E(r) ?? r})`);
    return;
  }
}
function II(e, n = zn) {
  if (!e) return;
  let r = Wn(n);
  if (r === void 0) return;
  try {
    (n.writeFileSync(T.join(r, "cgroup.procs"), String(e)),
      t(`tool cgroup: keeper pid ${e} moved to ${r}`));
  } catch (o) {
    t(`tool cgroup: keeper pid ${e} not moved (${E(o) ?? o})`);
  }
}
function H8r(e = zn) {
  let n = Wn(e);
  return n === void 0 ? {} : { cgroup: n };
}
function ii(e, n, r, o) {
  let s = n.split("/").includes(He),
    u = T.join(e, n, ".");
  return s
    ? { dir: u, v2: o, reuse: !0, selfDir: u }
    : { dir: T.join(e, r, He), v2: o, reuse: !1, selfDir: u };
}
function si(e) {
  return Math.floor(e - Math.max(2 * Nn, e * 0.15));
}
function ai(e, n) {
  if (e !== void 0) return e;
  let r = si(n);
  return r >= Wo ? r : void 0;
}
function ui(e) {
  let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
  if (!n) return;
  let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
  return r >= 1 ? r : void 0;
}
function q({ useToolMemoryCgroup: e = !0, toolCgroupClass: n = "helper" }) {
  return e ? _d(n) : {};
}
function Je() {
  return !1;
}
async function g_(e, n = [], r = {}) {
  oP();
  let { useToolMemoryCgroup: o, toolCgroupClass: s, ...u } = r,
    d = { ...q({ useToolMemoryCgroup: o, toolCgroupClass: s }), ...u };
  if (Je()) {
    let l = J$(e);
    if (l === null)
      throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return MAt(l, n, d);
  }
  return MAt(e, n, d);
}
function V0(e, n = [], r = {}) {
  oP();
  let { useToolMemoryCgroup: o, toolCgroupClass: s, ...u } = r,
    d = e;
  if (Je()) {
    let p = J$(e);
    if (p === null)
      throw Object.assign(
        new R(
          `Command '${e}' not found or is in an unsafe location (current directory)`,
          "safeSpawn: command not found or is in an unsafe location (current directory)"
        ),
        { code: "ENOENT" }
      );
    d = p;
  }
  let l = q({ useToolMemoryCgroup: o, toolCgroupClass: s }),
    f = MAt(d, n, { ...l, ...u, buffer: !1, reject: !1 });
  if (o !== !1 && l.cgroup === void 0 && DAt()) q4e(s ?? "helper", f.pid);
  return (f.catch(() => {}), f);
}
function Ist(e, n = [], r = {}) {
  oP();
  let { useToolMemoryCgroup: o, toolCgroupClass: s, ...u } = r,
    d = { ...q({ useToolMemoryCgroup: o, toolCgroupClass: s }), ...u };
  if (Je()) {
    let l = J$(e);
    if (l === null)
      throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return B(l, n, d);
  }
  return B(e, n, d);
}
async function RM(e, n = {}) {
  oP();
  let { useToolMemoryCgroup: r, toolCgroupClass: o, ...s } = n;
  return MAt(e, { ...q({ useToolMemoryCgroup: r, toolCgroupClass: o }), ...s, shell: !0 });
}
function tfi(e, n = {}) {
  oP();
  let { useToolMemoryCgroup: r, toolCgroupClass: o, ...s } = n;
  return B(e, { ...q({ useToolMemoryCgroup: r, toolCgroupClass: o }), ...s, shell: !0 });
}
export {
  olr,
  ZZ,
  MAt,
  L$e,
  uT,
  oP,
  slr,
  Xui,
  Jui,
  _d,
  ilr,
  DAt,
  alr,
  q4e,
  CZo,
  Qui,
  Zui,
  efi,
  llr,
  II,
  H8r,
  g_,
  V0,
  Ist,
  RM,
  tfi
};

//# sourceMappingURL=chunk-8w2npe9a.js.map
