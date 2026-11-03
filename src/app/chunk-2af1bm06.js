// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, tt } from "./chunk-wrtp8qz8.js";
import { g, m } from "./chunk-brszmkb3.js";
import { k } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Di } from "./chunk-01qhvw6m.js";
import { yHe } from "./chunk-f58gwyyn.js";
import { YBe, mDt, Yut } from "./chunk-btv59fx5.js";
import { hCe } from "./chunk-160x3d5g.js";
import { Jft } from "./chunk-ff2bdkce.js";
import { pAe, Q_t, xZe } from "./chunk-mb8tf9mz.js";
import { cJ } from "./chunk-dp02rht1.js";
var s = 32,
  f = 64,
  c = "session-inbox-unread",
  p = new Set(["request_failed", "http_error", "owner_unverified"]);
function a() {
  return k("tengu_bridge_inbox_pointer_boundary", !0);
}
class u {
  tracked = new Map();
  announcedAsOwners = new Set();
  noteOwnerAnnounced({ inboundOrigin: i, wake: e }) {
    if (i !== Q_t || e === void 0 || !Yut(e)) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !Jft.test(n)) return;
    if ((this.announcedAsOwners.delete(n), this.announcedAsOwners.size >= f)) {
      let o = this.announcedAsOwners.values().next().value;
      if (o !== void 0) this.announcedAsOwners.delete(o);
    }
    this.announcedAsOwners.add(n);
  }
  wasAnnouncedAsOwners(i) {
    return this.announcedAsOwners.has(i);
  }
  noteQueued({ inboundOrigin: i, wake: e, uuid: n }) {
    if (
      (this.noteOwnerAnnounced({ inboundOrigin: i, wake: e }),
      i !== Q_t || e === void 0 || n === void 0 || !mDt(e) || !a())
    )
      return;
    let o = e.data.file_id;
    if (typeof o !== "string" || !Jft.test(o)) return;
    if (this.tracked.size >= s) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0)
        (this.tracked.delete(r),
          t(`[bridge] inbox pointer ${r} forgotten: ${s} pointers already unread`));
    }
    this.tracked.set(o, { uuid: n, delivered: !1, renotifyValue: void 0 });
  }
  noteLifecycle(i, e) {
    for (let [n, o] of this.tracked) {
      if (o.uuid !== i) continue;
      switch (e) {
        case "completed":
          o.delivered = !0;
          break;
        case "cancelled":
        case "discarded":
        case "refused":
          this.tracked.delete(n);
          break;
        case "queued":
        case "started":
          break;
      }
      return;
    }
  }
  tapCommandLifecycle(i) {
    pAe(i, (e, n) => this.noteLifecycle(e, n));
  }
  noteFetchAttempt(i, e, n) {
    let o = this.tracked.get(i);
    if (o === void 0) return;
    if (!e.ok && p.has(e.reason)) return;
    if ((this.tracked.delete(i), o.renotifyValue !== void 0)) {
      if ((n.removeByFilter(d(o.renotifyValue)), e.ok)) g("bridge_inbox_pointer");
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()];
  }
  renotifyUnfetched(i) {
    try {
      if (this.tracked.size === 0) return;
      if (!a()) {
        this.tracked.clear();
        return;
      }
      if (hCe() > 0) return;
      for (let [e, n] of this.tracked) {
        if (!n.delivered) continue;
        if (n.renotifyValue !== void 0) {
          if (i.peek(d(n.renotifyValue)) !== void 0) continue;
          (this.tracked.delete(e),
            m("bridge_inbox_pointer", "unread_after_renotify"),
            t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`));
          continue;
        }
        let o = Di({
          taskType: c,
          status: "pending",
          summary: `An inbox message announced earlier has not been read (file_id ${e})`,
          body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${yHe} was not called for it. Call ${yHe} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
        });
        (i.enqueuePendingNotification({
          mode: "task-notification",
          agentId: tt(),
          value: o,
          skipAttachments: !0,
          priority: "later"
        }),
          (n.renotifyValue = o),
          t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`));
      }
    } catch (e) {
      l(e);
    }
  }
}
var LFn = new nt(() => new u());
function d(i) {
  return (e) => e.mode === "task-notification" && e.value === i;
}
function RAi(i, e) {
  try {
    if (!("inbound_origin" in e) || e.inbound_origin !== Q_t) return;
    let n = xZe(e);
    if (n?.inboundOrigin !== Q_t) return;
    let o = cJ(n.content, n.inboundOrigin);
    if (typeof o !== "string") return;
    LFn.of(i).noteOwnerAnnounced({ inboundOrigin: n.inboundOrigin, wake: YBe(o) ?? void 0 });
  } catch (n) {
    t(`[bridge] inbox owner notice not noted: ${n instanceof Error ? n.name : "non-error throw"}`, {
      level: "error"
    });
  }
}
export { LFn, RAi };

//# sourceMappingURL=chunk-2af1bm06.js.map
