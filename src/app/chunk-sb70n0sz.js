// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var bGs = "self_hosted_runner_get_pool",
  SGs = "self_hosted_runner_list_runners",
  wGs = "self_hosted_runner_list_sessions",
  vGs = "self_hosted_runner_list_secrets",
  WYn = "self_hosted_runner_spawn_local",
  EGs = "self_hosted_runner_read_health",
  kGs = "self_hosted_runner_read_metrics",
  TGs = "self_hosted_runner_tail_log",
  GYn = "self_hosted_runner_requeue_session";
var vHo = `Read a self-hosted environment's aggregate state (alive_runner_count, available_capacity_total, capacity_in_use, pending_session_count, unplaceable_session_count, backing_off_count, circuit_broken_count).${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`,
  EHo = `List runners registered to a self-hosted environment, with per-runner lease_expires_at, locked_account_id/email, and assigned_session_count.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`,
  kHo = `List sessions queued/assigned in a self-hosted environment (status, failure_log[], excluded_runner_ids, spawn_attempt, spawn_last_error).${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`,
  THo = `List environment secrets (jti, label, created_at, revoked, last_used_at). Secret values are never returned \u2014 only metadata.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`,
  AHo =
    "Spawn a self-hosted runner as a detached background process on THIS machine using this binary's `self-hosted-runner` subcommand. Always passes `--base-dir` (the runner's default of /workspace is unwritable on operator laptops) and uses space-separated flags only. Returns {pid, log_path, health_port, command} \u2014 `command` is the equivalent shell line for the operator's cheat sheet. This is for the zero\u2192aha proof; production deployment (k8s / docker-compose) is taught, not tooled.",
  CHo =
    "GET http://127.0.0.1:{health_port}/healthz on the local runner (2s timeout). Returns the health JSON, or {disabled:true} when health_port is 0, or {unreachable:true,error} when nothing is listening.",
  RHo =
    "GET http://127.0.0.1:{health_port}/metrics on the local runner and parse the `claude_code_self_hosted_runner_*` Prometheus gauges into {capacity, active_sessions, last_poll_age_seconds, locked_account_email?}.",
  xHo =
    "Read the last N bytes of the runner's --log-file with the shared secret redaction (key=value secrets, sk-ant/Bearer/Basic, URL userinfo, JWTs, and VCS/service PATs \u2014 see redact() in src/utils/secretRedaction.ts for the current rule set) applied before the content reaches model context.",
  PHo = `Requeue an assigned session onto a different runner. Appends the observed runner to the session's excluded_runner_ids so the queue pop doesn't immediately hand it back. Takes session_id + runner_id (the runner the caller observed failing). Only write operation in the doctor tool suite.${"\nThe result includes an `equivalent.ui` string with the Admin-UI path. Surface it to the operator so they can repeat the action without you.\nAuth: handled internally via the operator's `claude login` OAuth session \u2014 secrets never enter the conversation."}`;
export { bGs, SGs, wGs, vGs, WYn, EGs, kGs, TGs, GYn, vHo, EHo, kHo, THo, AHo, CHo, RHo, xHo, PHo };

//# sourceMappingURL=chunk-sb70n0sz.js.map
