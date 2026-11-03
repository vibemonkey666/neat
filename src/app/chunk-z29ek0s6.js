// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ze, Ft } from "./chunk-a16y5hcz.js";
import { domainToASCII as b } from "url";
var n = new Set([
    "localhost",
    "localhost.localdomain",
    "localhost4",
    "localhost4.localdomain4",
    "localhost6",
    "localhost6.localdomain6",
    "ip6-localhost",
    "ip6-loopback",
    "ip6-localnet",
    "ip6-mcastprefix",
    "ip6-allnodes",
    "ip6-allrouters",
    "broadcasthost",
    "metadata.google.internal",
    "instance-data.ec2.internal",
    "host.docker.internal",
    "gateway.docker.internal",
    "kubernetes.docker.internal",
    "vm.docker.internal",
    "host.containers.internal",
    "gateway.containers.internal",
    "host.lima.internal",
    "host.orb.internal",
    "localtest.me",
    "lvh.me",
    "localho.st",
    "vcap.me",
    "traefik.me",
    "fuf.me",
    "lacolhost.com",
    "my.local-ip.co",
    "localdev.me",
    "local.gd",
    "localhost.direct",
    "ddev.site",
    "lndo.site",
    "lcl.host",
    "kubernetes.default",
    "kubernetes.default.svc"
  ]),
  r = new Set([
    "metadata",
    "instance-data",
    "kubernetes",
    "_gateway",
    "_outbound",
    "_localdnsstub",
    "_localdnsproxy"
  ]),
  S = new Set([
    "docker.for.mac.host.internal",
    "docker.for.win.host.internal",
    "host.minikube.internal",
    "host.rancher-desktop.internal",
    "host.k3d.internal",
    "host.internal",
    "gateway.internal",
    "orb.local",
    "kubernetes.default.svc.cluster.local",
    "crc.testing",
    "apps-crc.testing",
    "home.arpa"
  ]),
  h = [
    ".nip.io",
    ".sslip.io",
    ".localtest.me",
    ".lvh.me",
    ".vcap.me",
    ".localho.st",
    ".traefik.me",
    ".fuf.me",
    ".lacolhost.com",
    ".my.local-ip.co",
    ".localdev.me",
    ".local.gd",
    ".localhost.direct",
    ".ddev.site",
    ".lndo.site",
    ".lcl.host",
    ".ipv6-literal.net",
    ".orb.local"
  ],
  k = [
    ".localhost",
    ".localhost.localdomain",
    ...h,
    ".crc.testing",
    ".apps-crc.testing",
    ".mshome.net"
  ],
  u = [".local", ".localdomain", ".home.arpa", ".internal", ".lan", ".home", ".fritz.box"],
  p = [
    ".localhost",
    ".local",
    ".localdomain",
    ".home.arpa",
    ".internal",
    ...h,
    ".svc",
    ".svc.cluster.local",
    ".cluster.local"
  ];
function hme(e) {
  let t = c(e.toLowerCase()).replace(/\.+$/, "");
  return n.has(t) || r.has(t) || t === "home.arpa" || p.some((o) => t.endsWith(o));
}
function vho(e) {
  let t = e.toLowerCase().replace(/\.+$/, "");
  return n.has(t) || t.endsWith(".localhost");
}
function pAs(e) {
  let t = e.toLowerCase().replace(/\.+$/, "");
  return hme(t) || [...n, ...r, "home.arpa", ...p].some((o) => o.endsWith("." + t));
}
function mAs(e) {
  let t = c(e.trim().toLowerCase()).replace(/\.+$/, "");
  return (
    n.has(t) ||
    S.has(t) ||
    r.has(t) ||
    k.some((o) => t.endsWith(o)) ||
    n.has(Ze(t, ".")) ||
    u.some((o) => t.endsWith(o) && n.has(t.slice(0, -o.length))) ||
    g(t)
  );
}
function gAs(e, t) {
  let o = t.trim().toLowerCase().replace(/\.+$/, ""),
    a = !/[^\x00-\x7f]/.test(o)
      ? o
      : /[\u00df\u03c2\u200c\u200d]/.test(o)
        ? ""
        : b(o).replace(/\.+$/, "");
  if (a === "") return !0;
  let i = l(Ze(a, "."));
  if (i === "") return !0;
  let d = l(Ze(e, ".")),
    m = [i, l(a)],
    f = m.includes(d) || m.includes(d.replace(/-\d+$/, "")),
    s = e.slice(Ze(e, ".").length);
  return (
    e === a || (f && (s === "" || u.includes(s) || (s.endsWith(".ts.net") && Ft(s, ".") >= 3)))
  );
}
function l(e) {
  return e.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function hAs(e, t = "address") {
  let o = c(e.trim().toLowerCase()).replace(/\.+$/, "");
  if (t === "address" ? hme(o) : vho(o)) return !0;
  return g(o);
}
function g(e) {
  return (
    /^(?:(?:\d+|0x[0-9a-f]+)\.){1,3}(?:\d+|0x[0-9a-f]+)$/i.test(e) ||
    /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(e) ||
    /^0x[0-9a-f]+$/i.test(e) ||
    /^\d{8,}$/.test(e) ||
    /^0+$/.test(e) ||
    (/^[0-9a-f:.]+$/i.test(e) && e.includes(":") && (e.includes("::") || Ft(e, ":") >= 2))
  );
}
function c(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
export { hme, vho, pAs, mAs, gAs, hAs };

//# sourceMappingURL=chunk-z29ek0s6.js.map
