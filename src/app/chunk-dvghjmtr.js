// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { nt, U, Wr, Rit, Pit, J } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { R } from "./chunk-fs43t96t.js";
import { i } from "./chunk-cj37hmns.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ot, _li } from "./chunk-ya7n419k.js";
import { o, v, M, T, u, $e, me, B, A } from "./chunk-0bqrj5ah.js";
var G5r = {
  "//": "Hand-maintained baked-in model catalog \u2014 the source of truth for per-model provider IDs and metadata. On model launch add one entry to `models` below; `bun run generate:model-catalog` validates this file against the schema and formats it.",
  schema_version: 1,
  pricing_tiers: {
    tier_2_10: {
      input: 2,
      output: 10,
      cache_write_5m: 2.5,
      cache_write_1h: 4,
      cache_read: 0.2,
      web_search: 0.01
    },
    tier_2_10_cache_read_0_10: {
      input: 2,
      output: 10,
      cache_write_5m: 2.5,
      cache_write_1h: 4,
      cache_read: 0.1,
      web_search: 0.01
    },
    tier_3_15: {
      input: 3,
      output: 15,
      cache_write_5m: 3.75,
      cache_write_1h: 6,
      cache_read: 0.3,
      web_search: 0.01
    },
    tier_5_25: {
      input: 5,
      output: 25,
      cache_write_5m: 6.25,
      cache_write_1h: 10,
      cache_read: 0.5,
      web_search: 0.01
    },
    tier_15_75: {
      input: 15,
      output: 75,
      cache_write_5m: 18.75,
      cache_write_1h: 30,
      cache_read: 1.5,
      web_search: 0.01
    },
    tier_10_50: {
      input: 10,
      output: 50,
      cache_write_5m: 12.5,
      cache_write_1h: 20,
      cache_read: 1,
      web_search: 0.01
    },
    tier_10_50_cache_read_0_25: {
      input: 10,
      output: 50,
      cache_write_5m: 12.5,
      cache_write_1h: 20,
      cache_read: 0.25,
      web_search: 0.01
    },
    tier_4_20_cache_read_0_20: {
      input: 4,
      output: 20,
      cache_write_5m: 5,
      cache_write_1h: 8,
      cache_read: 0.2,
      web_search: 0.01
    },
    haiku_35: {
      input: 0.8,
      output: 4,
      cache_write_5m: 1,
      cache_write_1h: 1.6,
      cache_read: 0.08,
      web_search: 0.01
    },
    haiku_45: {
      input: 1,
      output: 5,
      cache_write_5m: 1.25,
      cache_write_1h: 2,
      cache_read: 0.1,
      web_search: 0.01
    },
    haiku_55: {
      input: 0.1,
      output: 0.5,
      cache_write_5m: 0.125,
      cache_write_1h: 0.2,
      cache_read: 0.01,
      web_search: 0.01,
      long_prompt: {
        above_prompt_tokens: 1e5,
        input: 0.5,
        output: 2.5,
        cache_write_5m: 0.625,
        cache_write_1h: 1,
        cache_read: 0.05
      }
    }
  },
  models: [
    {
      id: "claude-3-5-haiku",
      family: "haiku",
      display_name: "Haiku 3.5",
      provider_ids: {
        first_party: "claude-3-5-haiku-20241022",
        bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
        vertex: "claude-3-5-haiku@20241022",
        foundry: "claude-3-5-haiku",
        anthropic_aws: "claude-3-5-haiku-20241022",
        anthropic_google_cloud: null,
        mantle: null,
        gateway: "claude-3-5-haiku-20241022"
      },
      eager_input_streaming: { vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_HAIKU",
      max_output_tokens: { default: 8192, upper: 8192 },
      pricing: "haiku_35",
      capabilities: ["total_tokens_reminder"]
    },
    {
      id: "claude-haiku-4-5",
      family: "haiku",
      display_name: "Haiku 4.5",
      knowledge_cutoff: "February 2025",
      provider_ids: {
        first_party: "claude-haiku-4-5-20251001",
        bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
        vertex: "claude-haiku-4-5@20251001",
        foundry: "claude-haiku-4-5",
        anthropic_aws: "claude-haiku-4-5-20251001",
        anthropic_google_cloud: "claude-haiku-4-5-20251001",
        mantle: "anthropic.claude-haiku-4-5",
        gateway: "claude-haiku-4-5-20251001"
      },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_4_5",
      context: { window: 200000, supports_1m_suffix: !0 },
      max_output_tokens: { default: 32000, upper: 64000 },
      pricing: "haiku_45",
      capabilities: ["context_management", "total_tokens_reminder"],
      advisor_rank: 1
    },
    {
      id: "claude-haiku-5-5",
      family: "haiku",
      display_name: "Haiku 5.5",
      knowledge_cutoff: "June 2026",
      provider_ids: {
        first_party: "claude-haiku-5-5",
        bedrock: "us.anthropic.claude-haiku-5-5",
        vertex: "claude-haiku-5-5",
        foundry: "claude-haiku-5-5",
        anthropic_aws: "claude-haiku-5-5",
        anthropic_google_cloud: "claude-haiku-5-5",
        mantle: "anthropic.claude-haiku-5-5"
      },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_5_5",
      fallback_3p: "claude-haiku-4-5",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 128000, upper: 128000 },
      pricing: "haiku_55",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "mid_conv_tool_change",
        "context_management",
        "rejects_disabled_thinking",
        "per_turn_effort",
        "lean_prompt",
        "org_locked_thinking",
        "haiku_5_5_early_stopping_guidance",
        "total_tokens_reminder"
      ],
      default_effort: "medium",
      effort_cost_index: { low: 0.38, medium: 0.52, high: 1, xhigh: 2.03, max: 4.34 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 4
    },
    {
      id: "claude-3-5-sonnet",
      family: "sonnet",
      display_name: "Sonnet 3.5",
      provider_ids: {
        first_party: "claude-3-5-sonnet-20241022",
        bedrock: "us.anthropic.claude-3-5-sonnet-20241022-v2:0",
        vertex: "claude-3-5-sonnet-v2@20241022",
        foundry: "claude-3-5-sonnet",
        anthropic_aws: "claude-3-5-sonnet-20241022",
        anthropic_google_cloud: null,
        mantle: null,
        gateway: "claude-3-5-sonnet-20241022"
      },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_SONNET",
      max_output_tokens: { default: 8192, upper: 8192 },
      pricing: "tier_3_15",
      capabilities: ["total_tokens_reminder"]
    },
    {
      id: "claude-3-7-sonnet",
      family: "sonnet",
      display_name: "Sonnet 3.7",
      provider_ids: {
        first_party: "claude-3-7-sonnet-20250219",
        bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
        vertex: "claude-3-7-sonnet@20250219",
        foundry: "claude-3-7-sonnet",
        anthropic_aws: "claude-3-7-sonnet-20250219",
        anthropic_google_cloud: null,
        mantle: null,
        gateway: "claude-3-7-sonnet-20250219"
      },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_7_SONNET",
      max_output_tokens: { default: 32000, upper: 64000 },
      pricing: "tier_3_15",
      capabilities: ["total_tokens_reminder"]
    },
    {
      id: "claude-sonnet-4-0",
      family: "sonnet",
      display_name: "Sonnet 4",
      knowledge_cutoff: "January 2025",
      provider_ids: {
        first_party: "claude-sonnet-4-20250514",
        bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
        vertex: "claude-sonnet-4@20250514",
        foundry: "claude-sonnet-4",
        anthropic_aws: "claude-sonnet-4-20250514",
        anthropic_google_cloud: null,
        mantle: null,
        gateway: "claude-sonnet-4-20250514"
      },
      eager_input_streaming: { vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_SONNET",
      context: {
        window: 200000,
        maximum_window: 1e6,
        supports_1m_beta: !0,
        clamp_long_context_without_beta: !0,
        supports_1m_suffix: !0
      },
      max_output_tokens: { default: 32000, upper: 64000 },
      pricing: "tier_3_15",
      capabilities: ["context_management", "total_tokens_reminder"]
    },
    {
      id: "claude-sonnet-4-5",
      family: "sonnet",
      display_name: "Sonnet 4.5",
      knowledge_cutoff: "January 2025",
      provider_ids: {
        first_party: "claude-sonnet-4-5-20250929",
        bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
        vertex: "claude-sonnet-4-5@20250929",
        foundry: "claude-sonnet-4-5",
        anthropic_aws: "claude-sonnet-4-5-20250929",
        anthropic_google_cloud: "claude-sonnet-4-5-20250929",
        mantle: null,
        gateway: "claude-sonnet-4-5-20250929"
      },
      eager_input_streaming: { vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_SONNET",
      fallback_3p: "claude-sonnet-4-0",
      context: {
        window: 200000,
        maximum_window: 1e6,
        supports_1m_beta: !0,
        clamp_long_context_without_beta: !0,
        supports_1m_suffix: !0
      },
      max_output_tokens: { default: 32000, upper: 64000 },
      pricing: "tier_3_15",
      capabilities: ["context_management", "total_tokens_reminder"]
    },
    {
      id: "claude-sonnet-4-6",
      family: "sonnet",
      display_name: "Sonnet 4.6",
      knowledge_cutoff: "August 2025",
      provider_ids: {
        first_party: "claude-sonnet-4-6",
        bedrock: "us.anthropic.claude-sonnet-4-6",
        vertex: "claude-sonnet-4-6",
        foundry: "claude-sonnet-4-6",
        anthropic_aws: "claude-sonnet-4-6",
        anthropic_google_cloud: "claude-sonnet-4-6",
        mantle: null,
        gateway: "claude-sonnet-4-6"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_SONNET",
      fallback_3p: "claude-sonnet-4-5",
      context: {
        window: 200000,
        maximum_window: 1e6,
        supports_1m_beta: !0,
        supports_1m_suffix: !0
      },
      max_output_tokens: { default: 32000, upper: 128000 },
      pricing: "tier_3_15",
      capabilities: [
        "effort",
        "max_effort",
        "adaptive_thinking",
        "context_management",
        "total_tokens_reminder"
      ],
      advisor_rank: 2
    },
    {
      id: "claude-sonnet-5",
      family: "sonnet",
      display_name: "Sonnet 5",
      knowledge_cutoff: "January 2026",
      provider_ids: {
        first_party: "claude-sonnet-5",
        bedrock: "us.anthropic.claude-sonnet-5",
        vertex: "claude-sonnet-5",
        foundry: "claude-sonnet-5",
        anthropic_aws: "claude-sonnet-5",
        anthropic_google_cloud: "claude-sonnet-5",
        mantle: "anthropic.claude-sonnet-5",
        gateway: "claude-sonnet-5"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_SONNET",
      fallback_3p: "claude-sonnet-4-6",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_2_10",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "context_management",
        "total_tokens_reminder"
      ],
      default_effort: "high",
      effort_cost_index: { low: 0.47, medium: 0.74, high: 1, xhigh: 2.41, max: 5.59 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 4
    },
    {
      id: "claude-sonnet-5-5",
      family: "sonnet",
      display_name: "Sonnet 5.5",
      knowledge_cutoff: "June 2026",
      provider_ids: {
        first_party: "claude-sonnet-5-5",
        bedrock: "us.anthropic.claude-sonnet-5-5",
        vertex: "claude-sonnet-5-5",
        foundry: "claude-sonnet-5-5",
        anthropic_aws: "claude-sonnet-5-5",
        anthropic_google_cloud: "claude-sonnet-5-5",
        mantle: "anthropic.claude-sonnet-5-5",
        gateway: "claude-sonnet-5-5"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_SONNET",
      fallback_3p: "claude-sonnet-5",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 128000, upper: 128000 },
      pricing: "tier_2_10_cache_read_0_10",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "mid_conv_tool_change",
        "context_management",
        "rejects_disabled_thinking",
        "per_turn_effort",
        "per_turn_timing",
        "lean_prompt",
        "refusal_fallback",
        "silent_turn_reminder",
        "org_locked_thinking",
        "total_tokens_reminder"
      ],
      default_effort: "medium",
      effort_cost_index: { low: 0.49, medium: 0.54, high: 1, xhigh: 1.87, max: 5.5 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 6
    },
    {
      id: "claude-opus-4-0",
      family: "opus",
      display_name: "Opus 4",
      knowledge_cutoff: "January 2025",
      provider_ids: {
        first_party: "claude-opus-4-20250514",
        bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
        vertex: "claude-opus-4@20250514",
        foundry: "claude-opus-4",
        anthropic_aws: "claude-opus-4-20250514",
        anthropic_google_cloud: null,
        mantle: null,
        gateway: "claude-opus-4-20250514"
      },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_OPUS",
      context: { window: 200000, supports_1m_suffix: !0 },
      max_output_tokens: { default: 32000, upper: 32000 },
      pricing: "tier_15_75",
      capabilities: ["context_management", "total_tokens_reminder"]
    },
    {
      id: "claude-opus-4-1",
      family: "opus",
      display_name: "Opus 4.1",
      knowledge_cutoff: "January 2025",
      provider_ids: {
        first_party: "claude-opus-4-1-20250805",
        bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
        vertex: "claude-opus-4-1@20250805",
        foundry: "claude-opus-4-1",
        anthropic_aws: "claude-opus-4-1-20250805",
        anthropic_google_cloud: null,
        mantle: null,
        gateway: "claude-opus-4-1-20250805"
      },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_1_OPUS",
      context: { window: 200000, supports_1m_suffix: !0 },
      max_output_tokens: { default: 32000, upper: 32000 },
      pricing: "tier_15_75",
      capabilities: ["context_management", "total_tokens_reminder"]
    },
    {
      id: "claude-opus-4-5",
      family: "opus",
      display_name: "Opus 4.5",
      knowledge_cutoff: "May 2025",
      provider_ids: {
        first_party: "claude-opus-4-5-20251101",
        bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
        vertex: "claude-opus-4-5@20251101",
        foundry: "claude-opus-4-5",
        anthropic_aws: "claude-opus-4-5-20251101",
        anthropic_google_cloud: "claude-opus-4-5-20251101",
        mantle: null,
        gateway: "claude-opus-4-5-20251101"
      },
      eager_input_streaming: { vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_OPUS",
      fallback_3p: "claude-opus-4-1",
      context: { window: 200000, supports_1m_suffix: !0 },
      max_output_tokens: { default: 32000, upper: 64000 },
      pricing: "tier_5_25",
      capabilities: ["context_management", "total_tokens_reminder"]
    },
    {
      id: "claude-opus-4-6",
      family: "opus",
      display_name: "Opus 4.6",
      knowledge_cutoff: "May 2025",
      provider_ids: {
        first_party: "claude-opus-4-6",
        bedrock: "us.anthropic.claude-opus-4-6-v1",
        vertex: "claude-opus-4-6",
        foundry: "claude-opus-4-6",
        anthropic_aws: "claude-opus-4-6",
        anthropic_google_cloud: "claude-opus-4-6",
        mantle: null,
        gateway: "claude-opus-4-6"
      },
      eager_input_streaming: { vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_OPUS",
      fallback_3p: "claude-opus-4-5",
      context: {
        window: 200000,
        maximum_window: 1e6,
        supports_1m_beta: !0,
        supports_1m_suffix: !0
      },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_5_25",
      capabilities: [
        "effort",
        "max_effort",
        "adaptive_thinking",
        "context_management",
        "total_tokens_reminder"
      ],
      advisor_rank: 3
    },
    {
      id: "claude-opus-4-7",
      family: "opus",
      display_name: "Opus 4.7",
      knowledge_cutoff: "January 2026",
      provider_ids: {
        first_party: "claude-opus-4-7",
        bedrock: "us.anthropic.claude-opus-4-7",
        vertex: "claude-opus-4-7",
        foundry: "claude-opus-4-7",
        anthropic_aws: "claude-opus-4-7",
        anthropic_google_cloud: "claude-opus-4-7",
        mantle: "anthropic.claude-opus-4-7",
        gateway: "claude-opus-4-7"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_7_OPUS",
      fallback_3p: "claude-opus-4-6",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0, supports_1m_suffix: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_5_25",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "context_management",
        "total_tokens_reminder"
      ],
      default_effort: "xhigh",
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 5
    },
    {
      id: "claude-opus-4-8",
      family: "opus",
      display_name: "Opus 4.8",
      knowledge_cutoff: "January 2026",
      provider_ids: {
        first_party: "claude-opus-4-8",
        bedrock: "us.anthropic.claude-opus-4-8",
        vertex: "claude-opus-4-8",
        foundry: "claude-opus-4-8",
        anthropic_aws: "claude-opus-4-8",
        anthropic_google_cloud: "claude-opus-4-8",
        mantle: "anthropic.claude-opus-4-8",
        gateway: "claude-opus-4-8"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_8_OPUS",
      fallback_3p: "claude-opus-4-7",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0, supports_1m_suffix: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_5_25",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "mid_conv_tool_change",
        "context_management",
        "fast_mode",
        "lean_prompt",
        "total_tokens_reminder"
      ],
      default_effort: "high",
      effort_cost_index: { low: 0.72, medium: 0.9, high: 1, xhigh: 1.65, max: 1.88 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 5
    },
    {
      id: "claude-opus-5",
      family: "opus",
      display_name: "Opus 5",
      knowledge_cutoff: "May 2026",
      provider_ids: {
        first_party: "claude-opus-5",
        bedrock: "us.anthropic.claude-opus-5",
        vertex: "claude-opus-5",
        foundry: "claude-opus-5",
        anthropic_aws: "claude-opus-5",
        anthropic_google_cloud: "claude-opus-5",
        mantle: "anthropic.claude-opus-5",
        gateway: "claude-opus-5"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_OPUS",
      fallback_3p: "claude-opus-4-8",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0, supports_1m_suffix: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_5_25",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "mid_conv_tool_change",
        "context_management",
        "thinking_disabled_effort_cap",
        "fast_mode",
        "lean_prompt",
        "refusal_fallback",
        "opus_5_prompt_bundle",
        "total_tokens_reminder"
      ],
      default_effort: "high",
      effort_cost_index: { low: 0.67, medium: 0.76, high: 1, xhigh: 1.6, max: 1.7 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 7
    },
    {
      id: "claude-opus-5-5",
      family: "opus",
      display_name: "Opus 5.5",
      knowledge_cutoff: "June 2026",
      provider_ids: {
        first_party: "claude-opus-5-5",
        bedrock: "us.anthropic.claude-opus-5-5",
        vertex: "claude-opus-5-5",
        foundry: "claude-opus-5-5",
        anthropic_aws: "claude-opus-5-5",
        anthropic_google_cloud: "claude-opus-5-5",
        mantle: "anthropic.claude-opus-5-5",
        gateway: "claude-opus-5-5"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_OPUS",
      fallback_3p: "claude-opus-5",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0, supports_1m_suffix: !0 },
      max_output_tokens: { default: 128000, upper: 128000 },
      pricing: "tier_4_20_cache_read_0_20",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "rejects_disabled_thinking",
        "mid_conv_tool_change",
        "per_turn_effort",
        "per_turn_timing",
        "context_management",
        "fast_mode",
        "lean_prompt",
        "refusal_fallback",
        "opus_5_5_prompt_bundle",
        "total_tokens_reminder"
      ],
      default_effort: "medium",
      effort_cost_index: { low: 0.48, medium: 0.66, high: 1, xhigh: 1.66, max: 3.44 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 7
    },
    {
      id: "claude-fable-5",
      family: "fable",
      display_name: "Fable 5",
      knowledge_cutoff: "January 2026",
      provider_ids: {
        first_party: "claude-fable-5",
        bedrock: "us.anthropic.claude-fable-5",
        vertex: "claude-fable-5",
        foundry: "claude-fable-5",
        anthropic_aws: "claude-fable-5",
        anthropic_google_cloud: "claude-fable-5",
        mantle: "anthropic.claude-fable-5",
        gateway: "claude-fable-5"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5",
      fallback_3p: "claude-opus-5-5",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_10_50",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "rejects_disabled_thinking",
        "mid_conv_tool_change",
        "context_management",
        "lean_prompt",
        "fable_5_mitigations",
        "refusal_fallback",
        "total_tokens_reminder"
      ],
      default_effort: "high",
      effort_cost_index: { low: 0.6, medium: 0.77, high: 1, xhigh: 1.74, max: 1.91 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 8
    },
    {
      id: "claude-fable-5-1",
      family: "fable",
      display_name: "Fable 5.1",
      knowledge_cutoff: "June 2026",
      provider_ids: {
        first_party: "claude-fable-5-1",
        bedrock: "us.anthropic.claude-fable-5-1",
        vertex: "claude-fable-5-1",
        foundry: "claude-fable-5-1",
        anthropic_aws: "claude-fable-5-1",
        anthropic_google_cloud: "claude-fable-5-1",
        mantle: "anthropic.claude-fable-5-1",
        gateway: "claude-fable-5-1"
      },
      eager_input_streaming: { bedrock: !0, vertex: !0 },
      vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5_1",
      fallback_3p: "claude-fable-5",
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_10_50_cache_read_0_25",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "rejects_disabled_thinking",
        "mid_conv_tool_change",
        "per_turn_effort",
        "per_turn_timing",
        "context_management",
        "lean_prompt",
        "fable_5_mitigations",
        "refusal_fallback",
        "fable_5_1_prompt_bundle",
        "total_tokens_reminder"
      ],
      default_effort: "high",
      effort_cost_index: { low: 0.75, medium: 0.86, high: 1, xhigh: 1.38, max: 1.74 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 9
    },
    {
      id: "claude-mythos-5",
      family: "mythos",
      display_name: "Mythos 5",
      knowledge_cutoff: "January 2026",
      provider_ids: {
        first_party: "claude-mythos-5",
        bedrock: null,
        vertex: null,
        foundry: null,
        anthropic_aws: null,
        anthropic_google_cloud: null,
        mantle: null,
        gateway: null
      },
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_10_50",
      capabilities: ["total_tokens_reminder"],
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 8
    },
    {
      id: "claude-mythos-5-1",
      family: "mythos",
      display_name: "Mythos 5.1",
      knowledge_cutoff: "June 2026",
      provider_ids: {
        first_party: "claude-mythos-5-1",
        bedrock: null,
        vertex: null,
        foundry: null,
        anthropic_aws: null,
        anthropic_google_cloud: null,
        mantle: null,
        gateway: null
      },
      context: { window: 1e6, native_1m: !0, supports_1m_beta: !0 },
      max_output_tokens: { default: 64000, upper: 128000 },
      pricing: "tier_10_50_cache_read_0_25",
      capabilities: [
        "effort",
        "max_effort",
        "xhigh_effort",
        "adaptive_thinking",
        "rejects_disabled_thinking",
        "mid_conv_tool_change",
        "per_turn_timing",
        "context_management",
        "lean_prompt",
        "fable_5_mitigations",
        "fable_5_1_prompt_bundle",
        "total_tokens_reminder"
      ],
      default_effort: "high",
      effort_cost_index: { low: 0.75, medium: 0.86, high: 1, xhigh: 1.38, max: 1.74 },
      image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 },
      advisor_rank: 9
    }
  ],
  aliases: {
    opus: {
      default: "claude-opus-5-5",
      per_provider: {
        bedrock: "claude-opus-5-5",
        vertex: "claude-opus-5-5",
        foundry: "claude-opus-4-6",
        mantle: "claude-opus-5-5",
        anthropic_aws: "claude-opus-5-5",
        gateway: "claude-opus-4-7"
      }
    },
    sonnet: {
      default: "claude-sonnet-5-5",
      per_provider: {
        bedrock: "claude-sonnet-4-5",
        vertex: "claude-sonnet-4-5",
        foundry: "claude-sonnet-4-5",
        mantle: "claude-sonnet-4-5",
        anthropic_aws: "claude-sonnet-4-6",
        gateway: "claude-sonnet-4-6"
      }
    },
    haiku: {
      default: "claude-haiku-5-5",
      per_provider: {
        bedrock: "claude-haiku-4-5",
        vertex: "claude-haiku-4-5",
        foundry: "claude-haiku-4-5",
        mantle: "claude-haiku-4-5",
        anthropic_aws: "claude-haiku-4-5",
        anthropic_google_cloud: "claude-haiku-4-5",
        gateway: "claude-haiku-4-5"
      }
    },
    fable: { default: "claude-fable-5-1", per_provider: { gateway: "claude-fable-5" } }
  },
  defaults: {},
  best: "fable",
  latest_per_family: {
    fable: "claude-fable-5-1",
    opus: "claude-opus-5-5",
    sonnet: "claude-sonnet-5-5",
    haiku: "claude-haiku-5-5"
  },
  alias_migration: {}
};
function O() {
  return {
    bakedCatalog: void 0,
    canonicalNameMemo: new Map(),
    mainLoopCanonical: void 0,
    servedCapabilityLookup: void 0,
    modelKnowledge: void 0
  };
}
var f;
function D0() {
  if (f === void 0) f = O();
  return f;
}
var P = p(() =>
    u({
      first_party: o(),
      bedrock: o().nullish(),
      vertex: o().nullish(),
      foundry: o().nullish(),
      anthropic_aws: o().nullish(),
      anthropic_google_cloud: o().nullish(),
      mantle: o().nullish(),
      gateway: o().nullish()
    }).loose()
  ),
  C = p(() =>
    u({
      input: v(),
      output: v(),
      cache_write_5m: v().optional(),
      cache_write_1h: v().optional(),
      cache_read: v().optional(),
      web_search: v().optional(),
      long_prompt: u({
        above_prompt_tokens: v().int().positive(),
        input: v(),
        output: v(),
        cache_write_5m: v().optional(),
        cache_write_1h: v().optional(),
        cache_read: v().optional()
      })
        .loose()
        .optional()
    }).loose()
  ),
  S = p(() =>
    u({
      id: o(),
      family: o(),
      display_name: o(),
      slogan: o().optional(),
      knowledge_cutoff: o().optional(),
      provider_ids: P(),
      eager_input_streaming: u({ bedrock: A(!0).optional(), vertex: A(!0).optional() })
        .loose()
        .optional(),
      vertex_region_env_var: o().optional(),
      fallback_3p: o().optional(),
      context: u({
        window: v(),
        maximum_window: v().optional(),
        native_1m: M().optional(),
        supports_1m_beta: M().optional(),
        clamp_long_context_without_beta: M().optional(),
        supports_1m_suffix: M().optional()
      })
        .loose()
        .optional(),
      max_output_tokens: u({ default: v(), upper: v() }).loose().optional(),
      pricing: $e([o(), C()]).optional(),
      capabilities: T(o()).default([]),
      default_effort: B(["low", "medium", "high", "xhigh", "max"]).optional(),
      effort_cost_index: u({
        low: v().positive().optional(),
        medium: v().positive().optional(),
        high: v().positive().optional(),
        xhigh: v().positive().optional(),
        max: v().positive().optional()
      })
        .loose()
        .optional(),
      image_limits: u({
        maxWidth: v().optional(),
        maxHeight: v().optional(),
        maxImageTokens: v().optional(),
        maxBase64Size: v().optional()
      })
        .loose()
        .optional(),
      advisor_rank: v().optional(),
      fallback_chain: T(o()).optional(),
      picker: u({
        section: B(["main", "overflow", "deprecated"]).optional(),
        badge: o().optional(),
        disabled_reason: o().optional(),
        tiers: T(o()).optional()
      })
        .loose()
        .optional(),
      deprecation: u({ retirement_dates: me(o(), o()).optional(), remapped_to: o().optional() })
        .loose()
        .optional(),
      min_cli_version: o().optional()
    }).loose()
  ),
  I = p(() => u({ default: o(), per_provider: me(o(), o()).optional() }).loose()),
  oe = p(() =>
    u({
      schema_version: v(),
      pricing_tiers: me(o(), C()).default({}),
      models: T(S()),
      aliases: me(o(), I()).default({}),
      defaults: me(o(), o()).default({}),
      best: o().optional(),
      latest_per_family: me(o(), o()).default({}),
      alias_migration: me(o(), o()).default({})
    }).loose()
  );
function D(e) {
  let t = new Map(),
    a = new Map();
  for (let n of e.models) {
    t.set(n.id, n);
    for (let r of Object.values(n.provider_ids)) {
      if (typeof r !== "string") continue;
      let d = r.toLowerCase(),
        l = a.get(d);
      if (l !== void 0 && l !== n.id)
        throw Error("model catalog: provider id collision across distinct entries");
      a.set(d, n.id);
    }
  }
  return { catalog: e, entriesById: t, catalogIdByProviderId: a };
}
function m() {
  let e = D0();
  if (e.bakedCatalog === void 0) e.bakedCatalog = D(G5r);
  return e.bakedCatalog;
}
function FNe() {
  return m().catalog;
}
var qz = FNe;
function F9(e) {
  return m().catalogIdByProviderId.get(e.toLowerCase());
}
function xl(e) {
  return m().entriesById.get(e);
}
function N9o(e) {
  let t = e.pricing;
  if (typeof t !== "string") return t;
  let a = qz().pricing_tiers;
  return Object.hasOwn(a, t) ? a[t] : void 0;
}
var $9o = [
  "effort",
  "max_effort",
  "xhigh_effort",
  "adaptive_thinking",
  "rejects_disabled_thinking",
  "thinking_disabled_effort_cap",
  "mid_conv_system",
  "mid_conv_tool_change",
  "per_turn_effort",
  "per_turn_timing",
  "context_management",
  "fast_mode",
  "lean_prompt",
  "fable_5_mitigations",
  "refusal_fallback",
  "opus_5_prompt_bundle",
  "fable_5_1_prompt_bundle",
  "opus_5_5_prompt_bundle",
  "thrifty_sonic",
  "turn_updates",
  "bash_output_audience_note",
  "silent_turn_reminder",
  "thinking_display_updates",
  "quizzical_shore",
  "amber_astrolabe",
  "bison_cairn",
  "larch_cistern",
  "haiku_5_5_early_stopping_guidance",
  "org_locked_thinking",
  "elapsed_time_reminder",
  "total_tokens_reminder",
  "temporal_hare"
];
function pli(e) {
  D0().servedCapabilityLookup = e;
}
function mS(e, t, a) {
  return sTt(t, e) ?? $wn(e, t, a);
}
function $wn(e, t, a) {
  if (D0().servedCapabilityLookup?.(t, [a, g(e)]) === !0) return !0;
  return F9o(e, t) ? !0 : void 0;
}
function F9o(e, t) {
  return xl(g(e))?.capabilities.includes(t);
}
function sTt(e, t) {
  return U9o(t).get(e);
}
function U9o(e) {
  let t = new Map(),
    a = i.CLAUDE_CODE_MODEL_CAPABILITIES;
  if (a === void 0) return t;
  let n = g(e);
  for (let r of a.split(";")) {
    let d = r.indexOf("=");
    if (d !== -1) {
      let l = r.slice(0, d).trim();
      if (l === "") continue;
      if (!(l.endsWith("*") ? n.startsWith(l.slice(0, -1)) : n === l)) continue;
    }
    for (let l of (d === -1 ? r : r.slice(d + 1)).split(",")) {
      let _ = l.trim(),
        b = !_.startsWith("-");
      t.set(b ? _ : _.slice(1), b);
    }
  }
  return t;
}
function g(e) {
  return e.replace(/\[1m\]/gi, "");
}
function Rbe(e, t) {
  let a = qz().aliases,
    n = Object.hasOwn(a, e) ? a[e] : void 0;
  if (!n) return;
  let r = n.per_provider;
  return (r && Object.hasOwn(r, t) ? r[t] : void 0) ?? n.default;
}
function mli(e) {
  let t = Rbe(e, "first_party"),
    a = t === void 0 ? void 0 : xl(t);
  if (a === void 0)
    throw Error("model-catalog.json: every aliases entry must name a models[] entry");
  return a.provider_ids.first_party;
}
var L = {
  "claude-3-5-haiku": "haiku35",
  "claude-haiku-4-5": "haiku45",
  "claude-haiku-5-5": "haiku55",
  "claude-3-5-sonnet": "sonnet35",
  "claude-3-7-sonnet": "sonnet37",
  "claude-sonnet-4-0": "sonnet40",
  "claude-sonnet-4-5": "sonnet45",
  "claude-sonnet-4-6": "sonnet46",
  "claude-sonnet-5": "sonnet5",
  "claude-sonnet-5-5": "sonnet55",
  "claude-opus-4-0": "opus40",
  "claude-opus-4-1": "opus41",
  "claude-opus-4-5": "opus45",
  "claude-opus-4-6": "opus46",
  "claude-opus-4-7": "opus47",
  "claude-opus-4-8": "opus48",
  "claude-opus-5": "opus5",
  "claude-opus-5-5": "opus55",
  "claude-fable-5": "fable5",
  "claude-fable-5-1": "fable51"
};
function N(e) {
  let t = e.provider_ids,
    a = {
      firstParty: t.first_party,
      bedrock: t.bedrock ?? null,
      vertex: t.vertex ?? null,
      foundry: t.foundry ?? null,
      anthropicAws: t.anthropic_aws ?? null,
      anthropicGoogleCloud: t.anthropic_google_cloud ?? null,
      mantle: t.mantle ?? null,
      gateway: t.gateway ?? t.first_party
    };
  if (e.eager_input_streaming) a.eagerInputStreaming = e.eager_input_streaming;
  return a;
}
function z() {
  let e = {};
  for (let [t, a] of Object.entries(L)) {
    let n = xl(t);
    if (!n)
      throw new R(
        `model catalog missing entry for '${t}' (CATALOG_ID_TO_KEY key '${a}')`,
        "model catalog missing entry for CATALOG_ID_TO_KEY id"
      );
    e[a] = N(n);
  }
  return e;
}
var $o = z();
function s(e) {
  for (let t of ["bedrock", "vertex", "foundry", "anthropicAws"])
    if (e[t] === null)
      throw new R(
        `named CLAUDE_*_CONFIG export for '${e.firstParty}' has null ${t}`,
        "named model config export has null 3P provider id"
      );
  return e;
}
var ie = s($o.haiku35),
  se = s($o.haiku45),
  le = s($o.sonnet35),
  de = s($o.sonnet37),
  ue = s($o.sonnet40),
  _e = s($o.sonnet45),
  pe = s($o.sonnet46),
  ce = s($o.sonnet5),
  fe = s($o.opus40),
  ge = s($o.opus41),
  he = s($o.opus45),
  ye = s($o.opus46),
  ve = s($o.opus47),
  be = s($o.opus48),
  Ce = s($o.opus5),
  Ee = s($o.opus55),
  iTt = s($o.fable5),
  Hsr = s($o.fable51),
  gli = {
    firstParty: "claude-mythos-5",
    bedrock: "us.anthropic.claude-mythos-5",
    vertex: "claude-mythos-5",
    foundry: "claude-mythos-5",
    anthropicAws: "claude-mythos-5",
    anthropicGoogleCloud: "claude-mythos-5",
    mantle: "anthropic.claude-mythos-5",
    gateway: "claude-mythos-5",
    eagerInputStreaming: { bedrock: !0, vertex: !0 }
  },
  Fwn = ["opus55", "opus5", "opus48", "opus47", "opus46", "opus45"],
  hli = Object.values($o).map((e) => e.firstParty),
  Vx = Object.fromEntries(Object.entries($o).map(([e, t]) => [t.firstParty, e]));
function kH(e) {
  let t = e.toLowerCase();
  for (let a of Object.values($o))
    for (let n of Object.values(a)) if (typeof n === "string" && n.toLowerCase() === t) return a;
  return null;
}
var sqt = 600000;
function B9o() {
  let e = Sr().providerCache.overturnedEntitlementDenies,
    t = Date.now();
  for (let [a, n] of e) if (t - n >= sqt) e.delete(a);
}
function j9o() {
  return {
    validatedModels: new Set(),
    confirmedEntitlementDenies: new Map(),
    overturnedEntitlementDenies: new Map(),
    bedrockInferenceProfiles: void 0,
    settledBedrockInferenceProfiles: void 0,
    inferenceProfileBackingModels: new Map(),
    modelConfigs: new Map(),
    clientDataFetches: new Map(),
    capabilityOverrides: new Map(),
    probeResults: new Map(),
    preconnectFired: !1
  };
}
function Lsr() {
  return {
    allModelBetas: new Map(),
    modelBetas: new Map(),
    bedrockExtraBodyParamsBetas: new Map(),
    midConversationSystem: new Map()
  };
}
function yli(e) {
  let { betas: t, betasCompiledOnly: a } = Sr();
  for (let n of [...Object.values(t), ...Object.values(a)])
    for (let r of [...n.keys()]) if (e(r)) n.delete(r);
}
function F() {
  return {
    providerCache: j9o(),
    fetchesClientData: !1,
    includeUnsupportedModels: !1,
    sessionModelDenyReprobe: {
      reprobe: void 0,
      honoredModels: new Set(),
      contestedDenies: new Map(),
      refusedModels: new Set(),
      generation: 0,
      restricted: De()
    },
    betas: Lsr(),
    betasCompiledOnly: Lsr(),
    usageCreditsOnlyModelFlags: { fableBilling: null, creditsOnlyTiers: null },
    warnedEnforcementMessages: new Set(),
    resolvingBestModel: !1,
    modelCapabilitiesByCachePath: new Map(),
    gatewayModelsByCachePath: new Map(),
    modelCapabilitiesStorageV5: void 0,
    gatewayModelsStorageV5: void 0,
    servedCatalogByKey: new Map(),
    servedCatalogRefreshes: new Map(),
    servedCatalogSettledRefreshes: new WeakSet(),
    servedCatalogRefusal: void 0,
    servedCatalogPostLoginRun: void 0,
    publishedCatalogByKey: new Map(),
    publishedCatalogRefreshes: new Map(),
    publishedCatalogFloorMarks: new Map(),
    publishedCatalogFloorRead: void 0,
    publishedCatalogFloorWrite: void 0,
    publishedRowNames: void 0,
    publishedDenyDocuments: [],
    clientDataUrl: { pending: void 0, document: void 0, assumesFirstPartyBaseUrl: !1 },
    servedCatalogShadowStarted: !1,
    servedCatalogActive: void 0,
    servedCatalogMaskedIds: new Set(),
    servedCatalogMasksEveryId: !1,
    servedCatalogPublicIds: new Map(),
    servedCatalogMaskHydrated: !1,
    servedCatalogMaskHydration: void 0,
    servedCatalogMaskRetryAt: 0,
    servedCatalogPersistedMaskedIds: void 0,
    servedCatalogMaskWrite: void 0,
    servedCatalogSuppressDepth: 0,
    servedCatalogDeactivatedRows: void 0,
    familySpellingVerdicts: new Map(),
    behavesAsMemo: void 0,
    publishedWireIds: void 0,
    unservedModelDrop: void 0,
    modelMix: void 0,
    servedCatalogOffBeforeAsking: void 0,
    catalogDecision: void 0
  };
}
var G = new nt(() => F());
function Sr() {
  return G.of(U());
}
var lfe = [
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_FOUNDRY",
  "CLAUDE_CODE_USE_ANTHROPIC_AWS",
  "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
  "CLAUDE_CODE_USE_MANTLE",
  "CLAUDE_CODE_USE_VERTEX"
];
var tk = {
    bedrock: "Amazon Bedrock",
    vertex: "Google Vertex AI",
    foundry: "Microsoft Foundry",
    anthropicAws: "Claude Platform on AWS",
    anthropicGoogleCloud: "Claude Platform on Google Cloud",
    mantle: "Amazon Bedrock (Mantle)",
    gateway: "Cloud gateway"
  },
  Xrt = {
    bedrock: "CLAUDE_CODE_USE_BEDROCK",
    foundry: "CLAUDE_CODE_USE_FOUNDRY",
    anthropicAws: "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    anthropicGoogleCloud: "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
    mantle: "CLAUDE_CODE_USE_MANTLE",
    vertex: "CLAUDE_CODE_USE_VERTEX"
  };
function z5r(e) {
  switch (e) {
    case "firstParty":
      return "anthropic";
    case "bedrock":
      return "bedrock";
    case "vertex":
      return "vertex";
    case "foundry":
      return "foundry";
    case "anthropicAws":
      return "anthropicAws";
    case "anthropicGoogleCloud":
      return "anthropicGoogleCloud";
    case "mantle":
      return "mantle";
    case "gateway":
      return "gateway";
  }
}
function V(e) {
  return e in tk;
}
function Uwn(e) {
  switch (e) {
    case "anthropic":
      return "Anthropic API";
    case "customEndpoint":
      return "a custom endpoint (LLM gateway or proxy)";
    default:
      return V(e) ? tk[e] : e;
  }
}
function Ae() {
  if (Wr() || Rit() || Pit()) return "gateway";
  return i.CLAUDE_CODE_USE_BEDROCK
    ? "bedrock"
    : i.CLAUDE_CODE_USE_FOUNDRY
      ? "foundry"
      : i.CLAUDE_CODE_USE_ANTHROPIC_AWS
        ? "anthropicAws"
        : i.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD
          ? "anthropicGoogleCloud"
          : i.CLAUDE_CODE_USE_MANTLE
            ? "mantle"
            : i.CLAUDE_CODE_USE_VERTEX
              ? "vertex"
              : "firstParty";
}
function Nsr() {
  return Ae() !== "firstParty";
}
function dA() {
  return c(Ae());
}
function Fn() {
  return Ae() === "firstParty";
}
function UNe() {
  if (Ae() === "bedrock" && i.CLAUDE_CODE_USE_MANTLE) return "mantle";
  return null;
}
function j(e) {
  return e.startsWith("anthropic.") && !_li(Ot(e));
}
function Od(e) {
  if (e) {
    let t = UNe();
    if (t) {
      if (t === "mantle" && j(e)) return t;
      let a = Ae(),
        n = kH(e);
      if (n && n[a] === null && n[t] !== null) return t;
    }
  }
  return Ae();
}
function bu(e = Ae()) {
  return e === "firstParty" || qx(e) || e === "gateway";
}
function qx(e = Ae()) {
  return e === "anthropicAws" || e === "anthropicGoogleCloud";
}
function $sr() {
  return Fn();
}
function eq(e = Ae()) {
  return e === "firstParty" || qx(e) || e === "foundry" || e === "mantle";
}
function Qs() {
  return Ae() === "firstParty" && Ci();
}
function Bwn() {
  let e = Ae();
  return e === "firstParty" || (e === "anthropicAws" && i.ANTHROPIC_AWS_BASE_URL === void 0);
}
function Ci() {
  if (dfe()) return !0;
  return of();
}
function dfe() {
  return i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ?? Sr().clientDataUrl.assumesFirstPartyBaseUrl;
}
function of() {
  let e = process.env.ANTHROPIC_BASE_URL;
  if (!e) return !0;
  return Hu(e);
}
var je = [
  ...lfe,
  "CLAUDE_CODE_USE_GATEWAY",
  "ANTHROPIC_BASE_URL",
  "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL"
];
function jwn() {
  return J() ? void 0 : !of();
}
function Jrt() {
  let e = i.ANTHROPIC_BASE_URL;
  if (J() || Ae() !== "firstParty" || !e || i.ANTHROPIC_UNIX_SOCKET !== void 0 || Hu(e)) return;
  try {
    return new URL(e).host || void 0;
  } catch {
    return;
  }
}
function Hu(e) {
  try {
    let t = new URL(e).host;
    return ["api.anthropic.com"].includes(t);
  } catch {
    return !1;
  }
}
var E = "[a-z]{2,4}(?:-[a-z]{2,5})?-[a-z]+-\\d+",
  h = "[a-z]+(?:-[a-z]+\\d+)?",
  W =
    "(?:amazonaws\\.(?:com(?:\\.cn)?|eu)|api\\.aws|c2s\\.ic\\.gov|sc2s\\.sgov\\.gov|cloud\\.adc-e\\.uk|csp\\.hci\\.ic\\.gov)",
  K = new RegExp(`\\.(?!us-gov-)${E}\\.(?:vpce\\.)?(?:amazonaws\\.com|api\\.aws)$`);
function y(e) {
  return new RegExp(`^(?:vpce-[a-z0-9-]+\\.)?${e}(?:-fips)?\\.${E}\\.(?:vpce\\.)?${W}$`);
}
var x = {
  firstParty: void 0,
  gateway: void 0,
  bedrock: {
    variables: [
      { name: "ANTHROPIC_BEDROCK_BASE_URL" },
      { name: "AWS_ENDPOINT_URL_BEDROCK_RUNTIME" },
      { name: "AWS_ENDPOINT_URL_BEDROCK" },
      { name: "AWS_ENDPOINT_URL" }
    ],
    ownHost: y("bedrock(?:-runtime)?")
  },
  mantle: {
    variables: [{ name: "ANTHROPIC_BEDROCK_MANTLE_BASE_URL" }],
    ownHost: y("bedrock-mantle")
  },
  anthropicAws: {
    variables: [{ name: "ANTHROPIC_AWS_BASE_URL" }],
    ownHost: y("aws-external-anthropic")
  },
  vertex: {
    variables: [{ name: "ANTHROPIC_VERTEX_BASE_URL" }],
    ownHost: new RegExp(
      `^(?:aiplatform|${h}-aiplatform|aiplatform\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`
    )
  },
  anthropicGoogleCloud: {
    variables: [{ name: "ANTHROPIC_GOOGLE_CLOUD_BASE_URL" }],
    ownHost: new RegExp(`^(?:claude|claude\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`)
  },
  foundry: {
    variables: [
      { name: "ANTHROPIC_FOUNDRY_BASE_URL" },
      { name: "ANTHROPIC_FOUNDRY_RESOURCE", urlOf: (e) => `https://${e}.services.ai.azure.com` }
    ],
    ownHost: /^[a-z0-9-]{2,64}\.(?:services\.ai|cognitiveservices|openai)\.azure\.(?:com|us|cn)$/
  }
};
function K5r(e) {
  return x[e]?.variables ?? [];
}
function V5r(e, t) {
  let a = [];
  for (let { name: n, urlOf: r } of K5r(e)) {
    let d = t(n);
    if (!d) continue;
    let l = r === void 0 ? d : r(d),
      _ = k(e, l);
    if (_ !== "own") a.push({ variable: n, url: l, verdict: _ });
  }
  return a;
}
function k(e, t) {
  let a = x[e],
    n;
  try {
    n = new URL(t);
  } catch {
    return "unparsable";
  }
  let r = n.hostname.toLowerCase().replace(/\.$/, "");
  if (a === void 0 || !a.ownHost.test(r)) return "foreign";
  return n.protocol === "https:" ? "own" : "insecure";
}
function q5r(e, t) {
  return k(e, t) === "own";
}
function Fsr() {
  let e = i.ANTHROPIC_BEDROCK_BASE_URL;
  if (e === void 0) return !0;
  return q5r("bedrock", e) && K.test(new URL(e).hostname.toLowerCase().replace(/\.$/, ""));
}
function Qrt() {
  return Ci() || i.CLAUDE_CODE_PROPAGATE_TRACEPARENT;
}
export {
  G5r,
  D0,
  FNe,
  qz,
  F9,
  xl,
  N9o,
  $9o,
  pli,
  mS,
  $wn,
  F9o,
  sTt,
  U9o,
  Rbe,
  mli,
  $o,
  iTt,
  Hsr,
  gli,
  Fwn,
  hli,
  Vx,
  kH,
  sqt,
  B9o,
  j9o,
  Lsr,
  yli,
  Sr,
  lfe,
  tk,
  Xrt,
  z5r,
  Uwn,
  Ae,
  Nsr,
  dA,
  Fn,
  UNe,
  Od,
  bu,
  qx,
  $sr,
  eq,
  Qs,
  Bwn,
  Ci,
  dfe,
  of,
  jwn,
  Jrt,
  Hu,
  K5r,
  V5r,
  q5r,
  Fsr,
  Qrt
};

//# sourceMappingURL=chunk-dvghjmtr.js.map
